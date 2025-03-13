---
title: Secure Your Codebase Secrets Scanning
author: Hazy
pubDatetime: 2025-03-13
featured: false
draft: false
tags:
  - secrets scanning
  - application security
  - appsec
  - security
description: "Think about managing the risks of hard-coded secrets."
---

## The Backstage

If secrets are so sensitive, why do developers still hard-code them in the codebase? It's not because they aren't concerned about security, they understand the risks of exposed secrets. But real-world development is messy and often siloed, filled with challenges that make security an afterthought. We all have deep respect for our developers, they're incredibly smart and deeply knowledgeable about their code. Deadlines are tight, so many features are in the queue, debugging needs to be fast, and occasionally, developers just need to get things done. Security extra steps will be in the backlog with the seatbelt *"Will remove later"*.

![sleep-meme](@assets/images/sleep-meme.png)

## It's not a bug, it's human nature

Developers are wired to solve problems efficiently. Hard-coding a secret might feel like the simplest way to keep things moving. It happens for a few key reasons:

#### <span class="accent">A false sense of security</span>
- *"It's just an internal repo"*
- *"Only our team has access"*
- *"It's buried deep in code—no one will find it"*

These assumptions feel reasonable until they're not. Internal repos can get exposed. Access controls can be broken. Your VCS environment can leak out. That AWS key you hard-coded for convenience? It's one leaked commit away from becoming a security nightmare.

#### <span class="accent">Speed versus Security </span>

Hard-coding secrets makes things work now. And in a fast-moving development cycle, "now" often wins.
- Rapid prototyping? Just drop in an API key.
- Debugging an issue? Hard-coded credentials to test faster.
- Collaborating with teammates? Share keys in the code.
		
It's always meant to be temporary, until it isn't.

#### <span class="accent">The unintentional mistake</span>

Not all hard-coded secrets are intentional. Sometimes they sneak in:

- Test credentials get left in the final commit.
- Copied snippet from Stack Overflow or AI generated includes an embedded key.
- A .gitignore rule is misconfigured, and a sensitive file gets pushed.

No one means to leak secrets. But when security relies on remembering an extra step, mistakes happen. A secret that was meant to be removed later gets forgotten. A piece of test code accidentally makes it into production. A private repository becomes public. And suddenly, what seemed like a harmless decision turns into a security incident. 

## The Real Cost of Leaked Secrets

The worst part? We don't see the cost of a secret leak until it's leaked. Maybe nothing happens, until a hacker stumbles upon it, a service revokes your key, or an entire system is compromised.

Hard-coding secrets isn't just a bad habit. It's a risk that grows silently until it [explodes](https://www.ibm.com/reports/data-breach).

### How Do We Catch This?

We don't just enforce security, we work _with_ developers, not against them. Security should integrate smoothly into the their daily SDLC which called AppSec processes without slowing teams down.

#### A Real-World Example

Let's say we're working at a **blitzscaling startup**, where the product is developing at lightning speed to hit MVP and keep up with agile demands. The focus is on shipping fast , not security

- **Cost is minimal** – there’s no budget for fancy security tools like commercial SAST tools
- **GitLab is self-hosted** – no built-in  security scanning.
- **Developer habits** – secrets, API keys, and credentials are often committed directly to the code because it's “internal.”

Without expensive tools, we try to bake open source tool called Gitleaks into our CI/CD pipeline. We chose this for its customizable regex rules and speed. Here's what we propose with goals rolling our scanning at scale.

In GitLab, each project has its own **`.gitlab-ci.yml`** file, defining its CI/CD pipeline. But managing security scans **project by project** doesn't scale well. We would need to manually add and update security rules in every repo - not happening.

Instead, we **leverage pipeline includes**. This works like importing a library in code: we define a **centralized security pipeline** in a dedicated repo and then include it in every project's **`.gitlab-ci.yml`**.

![gitleaks-diagram](@assets/images/gitleaks-diagram.png)

How it works:
- Centralized Repo: We already have a dedicated repo maintained by **DevOps team**, defining general security policies. In this repo, we create a **security config template** that includes customized rules (keep reference copy in S3 bucket) 
- Each working repo includes the centralized **security pipeline**
- **Scan results (artifacts)** are automatically **uploaded to S3** for investigation

Here is the sample of gitleaks-ci.yml
```yaml
stages:
  - secret-detection

.gitleaks-rules: &gitleaks-rules
  image: registry.gitlab.com/gitlab-org/cloud-deploy/aws-base:latest
  stage: secret-detection
  tags:
    - share-nonprod
  script:
    - aws s3 cp s3://share//gitlab-ci/security/gitleaks-rules.toml "$CI_PROJECT_DIR"/gitleaks-rules.toml
  artifacts:
    paths:
      - gitleaks-rules.toml

.gitleaks-scan: &gitleaks-scan
  image:
    name: path/dev-gitleaks:latest
    entrypoint: [""]
  stage: secret-detection
 
  tags:
    - share-nonprod
  needs: []
  variables:
    GIT_DEPTH: 0
  before_script:
    - git config --global --add safe.directory "${CI_PROJECT_DIR}"
  script:
    - gitleaks detect --config gitleaks-rules.toml ${TRACE+--log-level debug} --report-path gitleaks.output.json
  artifacts:
    name: "$CI_JOB_NAME artifacts from $CI_PROJECT_NAME on $CI_COMMIT_REF_SLUG $CI_COMMIT_SHORT_SHA"
    when: always
    paths:
      - gitleaks.*

.gitleaks-output-upload-to-s3: &gitleaks-output-upload-to-s3
  stage: secret-detection
  tags:
    - share-nonprod
  needs:
    - gitleaks-scan
  image: registry.gitlab.com/gitlab-org/cloud-deploy/aws-base:latest
  script:
    - aws s3 cp gitleaks.* s3://secret-scan/$CI_PROJECT_NAME/$CI_COMMIT_BRANCH/
    - echo "uploaded successful"
```
## Final thoughts
Ater detecting the secrets, simply deleting a secret from the latest commit **does not mean it's gone**, it's already in history, caches, forks, and clones. Attackers and automated tools can still find and exploit it.

Some next moves: 
- Use centralized secret manager like **AWS Secrets Manager, HashiCorp Vault, or Doppler** 
- Enforce pre-commit with gitleaks to catch secrets before dev commits
- Security Awareness, work with them, and educate your teams
- Rotate and monitor secret 

