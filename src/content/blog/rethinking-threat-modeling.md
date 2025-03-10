---
title: Rethinking Threat Modeling
author: Hazy
pubDatetime: 2025-03-10
featured: false
draft: false
tags:
  - threat modeling
  - application security
  - appsec
  - security
description: "Threat modeling is a proactive approach to identifying vulnerabilities and implementing effective security measures."
---

Categories of readers when discussing Threat Modeling:
- Never heard of it, no prior knowledge.
- Familiar with the concept but not used it in practice.
- Experts in the field with extensive experience and deep understanding.

You will likely see yourself in one of the 3 categories above. No matter which one you fall into, you're not alone. This post is not tailored to a specific group, and neither an oversimplified introduction nor an in-depth deep dive.

Let's begin.

> I think I can turn this into a series. This post will be the prologue.

## Threat Modeling TLDR version

Threat Modeling is a broad term and can mean very different things depend on your category. 

In practical terms:  Threat modeling is the process of determining which assets are in the system and how we will secure them from the start. This involves analyzing the system's design to define the assets, brainstorming potential threats, and collaboratively developing mitigation strategies to protect them -> <span class="accent"> proactive security</span>.

> It's all about the risk management!

![threat-meme](@assets/images/threat-meme.png)
### Benefits

- Find potential issues early. Enforce the strict and suffiecient rules while increasing risk awareness.
- Deliver more secure software. Security is not blocker.
- Reduce cost of mitigation

![risk-diagram](@assets/images/risk-diagram.png)

It's crucial to understand that threats will always present in our products. Some risks might not seem significant when viewed in isolation. However, when combined with other vulnerabilities or system components, they can create a chain interaction that leads to a serious security threat. Threat modeling helps identify and mitigate these risks early, ensuring a more secure foundation from the start.

Yes, <span class="accent"> secure by design</span>. This term is one of our main goals when doing threat modeling. We cannot be certain that 100% risks will occur or can be predicted. But we believe that the output of threat modeling - a set of potential issues is a good material for pentesting, red teaming exercises, and leads to fewer issues or reduced impact in later phases.

### Threat Modeling Manifesto

The problem lies in the questions themselves, and our solution is to find the right answers. When it comes to threat modeling, Adam Shostack outlines four key questions:

1. What are we working on? 
2. What can go wrong?
3. What are we going to do about it?
4. Did we do a good enough job? 

![4-questions](@assets/images/4-questions.png)

 Check it out on the website and his books

 -> [Threat Modeling Manifesto](https://www.threatmodelingmanifesto.org),

 -> [Threat Modeling: Designing for Security](https://shostack.org/books/threat-modeling-book)
 
 ### Methodologies

There are many threat modeling techniques out there, with no one-size-fits-all approach, ranging from very famous ones to deprecated ones. I believe threat modeling is a process that must accomplish our goals and fit our organization. Don't try to wear clothes that don't fit. Hence, I won't mention or cover any specific threat modeling methodologies here. There are vast resources available, and I recommend checking out this [one](https://shellsharks.com/threat-modeling).

### Myths and Misconceptions

>  1. Threat modeling is only for security or developers.

Threat modeling is not only for security professionals or developers. It's a collaborative effort that involves everyone in the development team, from business analysts to developers to security experts. It's not a one-time activity, but a continuous process that should be integrated into the development lifecycle. Our goal is not stop at technical risks, it also includes the operational and business risks.

> 2. Threat modeling is only for large or complex systems.

Threat modeling is not limited to large or complex systems, nor is it restricted to startups or mature organizations. It can be applied to entire projects or even individual components. The key is to identify the system's assets, recognize potential threats, and work on mitigating them.

> 3. Threat modeling is only for the beginning of a project.

Threat modeling is not a one-time activity. It's a continuous process that should be integrated into the development lifecycle. After the initial threat modeling, it's crucial to monitor and update the model as new threats emerge or vulnerabilities are discovered. Additionally, any changes in the system's design or architecture due to business needs should be reflected in the model.

> 4. Threat modeling is only for prevention

Threat modeling is not just for prevention; it can also serve as valuable material for penetration testing or red teaming exercises. By leveraging threat models, internal teams can reduce testing time and uncover more attack vectors efficiently.

### Close Thoughts

Threat modeling is an ongoing process, not a final destination. It is not something you finish and are cheerful about. By expanding the perspective, I think we can see the bigger picture beyond the obvious threats, and gain a better understand the unexpected risks that lie ahead. Let's build more resilient, effective and secure application. 
