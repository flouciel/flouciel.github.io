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
  - trufflehog
  - gitleaks
description: "Think about managing the risks of hard coded secrets."
---

## The Backstage

If secrets are so sensitive, why do developers still hard code them in the codebase? It's not because they aren't concerned about security, they understand the risks of exposed secrets. But real world development is messy and often siloed, filled with challenges that make security an afterthought. 

We all have deep respect for our developers, they're brilliant problem solvers and deeply knowledgeable about their code. Deadlines are tight, so many features are in the queue, debugging needs to be fast, and occasionally, developers just need to get things done. Security extra steps will be in the backlog with the seatbelt *"Will remove later"*.

![sleep-meme](@assets/images/sleep-meme.png)

## It's not a bug, it's human nature

Hardcoding a secret is fast, visible, and “just works.” Here's why it happens:

#### <span class="accent">A false sense of security</span>
- *"It's just an internal repo"*
- *"Only our team has access"*
- *"It's buried deep in code, no one will find it"*

These assumptions seem fine, until something leaks. Internal repos get exposed. Access controls fail. A misconfigured `.gitignore` or rogue backup might push secrets into public view. And then that “temporary” AWS key becomes a ticking time bomb.

#### <span class="accent">Speed over Security </span>

When time is short, convenience wins:
- Rapid prototyping? Just drop in an API key.
- Debugging? Hard coded creds.
- Collaborating? Share keys in the repo.
		
It's always meant to be temporary, until it isn't.

#### <span class="accent">The unintentional mistake</span>

Not all hard coded secrets are intentional. Sometimes they sneak in:

- Test credentials get left in the final commit.
- Copied snippet from Stack Overflow or AI generated includes an embedded key.
- `.env` files get uploaded because of a `.gitignore` misconfig.

No one intends to leak secrets. But all it takes is one slip, one commit, and it’s out there. When security depends on remembering an extra step, mistakes happen. A secret meant to be removed later gets forgotten. A test credential sneaks into production. A private repo becomes public. Suddenly, what seemed like a harmless shortcut becomes a full-blown security incident.

## The Real Cost of Leaked Secrets

The worst part? We don't see the cost of a secret leak until it's leaked. Maybe the key gets revoked, maybe a service goes down, maybe your AWS bill spikes overnight. Or worse, your app gets compromised.

Secrets in code are **a risk multiplier**, silent and growing until they explode. [IBM Report](https://www.ibm.com/reports/data-breach)

### How Do We Catch This?

We don't just enforce security, we work with developers, not against them. Security should integrate smoothly into the their daily SDLC which called AppSec processes without slowing teams down.

#### A Real World Example

Let's say we're working at a **blitzscaling startup**, where the product is developing at lightning speed to hit MVP and keep up with agile demands. 

- Speed > Security
- No buget for the fancy security tools (commercial)
- Developers commit secrets because “it’s internal”

The challenge? Detect and manage secrets **at scale**, using **open source** tools.

### Solution 1: Gitleaks + GitLab CI (orther tool works as well)

We integrated [Gitleaks](https://github.com/gitleaks/gitleaks) into GitLab CI pipelines using **centralized templates**.

Instead of configuring every repo manually, we:
1. Created a shared security config in a **centralized DevOps repo**
2. Stored rules in **S3** for versioning and audit
3. Used GitLab’s `include` system to import the scanner to each project’s pipeline
4. Uploaded all **scan results to S3** for centralized review

![gitleaks-diagram](@assets/images/gitleaks-diagram.png)

Here is the sample of gitleaks-ci.yml
```yaml
stages:
  - secret-detection

.gitleaks-rules: &gitleaks-rules
  image: registry.gitlab.com/gitlab-org/cloud-deploy/aws-base:latest
  stage: secret-detection
  tags:
    - test-security
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
    - test-security
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
    - test-security
  needs:
    - gitleaks-scan
  image: registry.gitlab.com/gitlab-org/cloud-deploy/aws-base:latest
  script:
    - aws s3 cp gitleaks.* s3://secret-scan/$CI_PROJECT_NAME/$CI_COMMIT_BRANCH/
    - echo "uploaded successful"
```

### Solution 2: Trufflehog

[TruffleHog](https://github.com/trufflesecurity/trufflehog) is another powerful tool in your secrets detection toolbox. It scans Git history, file systems, Docker images, PDFs, and more, using over 800+ detectors to find secrets. What sets it apart? It doesn't just match patterns — it can verify secrets against live APIs when supported (like AWS, GitHub, etc.), helping cut down on false positives.

Unlike GitHub, GitLab requires authentication for API access — even for public projects. So to scan GitLab repos, you’ll need to pass your personal access token (PAT) to TruffleHog using --token.

And if your org uses self-hosted GitLab, make sure to specify the API endpoint.
```shell
trufflehog gitlab \
  --endpoint=https://gitlab.url \
  --token=glpat-xxxxxxx \
  -j | tee gitlab_secret_output.json

```

## Final thoughts
Ater detecting the secrets, simply deleting a secret from the latest commit **does not mean it's gone**, it's already in history, caches, forks, and clones. Attackers and automated tools can still find and exploit it.

Default rules won’t catch everything. Tailor regex patterns and allowlists to the business. Every org has unique identifiers. Reflect those in your detection config — whether you're using Gitleaks, TruffleHog, or both.

Some next moves: 
- Use centralized secret manager like **AWS Secrets Manager, HashiCorp Vault, or Doppler** 
- Always layer secret detections with pre-commit hooks.
- Security Awareness, work with them, and educate your teams
- Rotate and monitor secret 

