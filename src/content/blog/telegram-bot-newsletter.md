---
title: How I Stay Updated on Security Feeds with a Telegram Bot
author: Hazy
pubDatetime: 2024-11-15
featured: false
draft: false
tags:
  - newsletter
  - productivity
  - security
  - telegram
description: "In today’s fast-paced digital world, staying informed about the latest security threats, vulnerabilities, and trends is critical, especially for security professionals and enthusiasts."
---

### <span class="accent">Situation</span>

As a cybersecurity practitioner, staying updated on the latest threats, vulnerabilities, and security news is essential. However, keeping up with the flood of information from various sources (blogs, forums, vulnerability databases, etc.) can be overwhelming and time-consuming. The objective was clear: How could I streamline the process of receiving timely and relevant security updates without losing track of critical news?

### <span class="accent">Complication</span>

The first challenge I encountered was information overload. The cybersecurity landscape is continuously changing, with new vulnerabilities and attacks being discovered every day. While I understood the value of remaining informed, the sheer amount of information made it impossible to keep up. 

Here's an overview of the challenges I encountered:

- Time-consuming manual checks: I had to visit multiple websites and blogs, often spending hours scanning headlines to find valuable updates.
- Missed updates: With information scattered across different platforms, I often missed critical updates that could impact my work or the security posture of my organization.
- Lack of organization: Security updates were spread across different channels, making it hard to keep track of everything in one place.

### <span class="accent">Resolution</span>: Two Approaches to Stay Updated on Security News

#### 1. Traditional Way: Email Notifications
The first solution I considered was setting up email notifications for the blogs, newsletters, and sources I follow. Many security websites and blogs offer the option to receive email updates whenever a new post is published.

- Email Subscriptions: I could subscribe to email newsletters or set up alerts for specific security topics or sources.
- Daily Digest: Most platforms offer daily or weekly email summaries of the latest posts, helping me stay informed without checking websites frequently.

While email notifications seemed like an easy and traditional option, but:

- Clutter: My inbox could get flooded with emails from multiple sources, making it hard to filter out the important ones.
- Limited Control: Email services often lack fine-grained control over what content I receive and when, leading to less customization.

![email-noti](@assets/images/tldr-email.png)

#### 2. Telegram bot. 

The second, and ultimately preferred, solution was to build a Telegram bot that could automatically send updates from my chosen security sources. Since I use Telegram daily, it made perfect sense to leverage it for receiving updates. 

Here's how it setup:

1. Create a Telegram bot via [BotFather](@BotFather)
2. Using [RSStT](https://github.com/Rongronggg9/RSS-to-Telegram-Bot).

Alternative: https://www.newskeeper.io/

3. Create a channel or group to distribute the news. Then, add the RSStT bot as a member and grant it admin privileges to ensure it can post messages in the channel or group.

**Usage of RSStT**:
- **/sub**: Subscribe
- **/unsub**: Unsubscribe
- **/unsub_all**: Unsubscribe from all subscriptions
- **/list**: Check the subscription list
- **/set**: Customize subscriptions
- **/set_default**: Customize default settings
- **/import**: Import subscriptions from an OPML file
- **/export**: Export subscriptions to an OPML file
- **/activate_subs**: Activate subscriptions
- **/deactivate_subs**: Deactivate subscriptions
- **/version**: Check the bot version
- **/help**: View help

Here are some of the security resources I follow

| Site                                | Feed URL                                     | URL                                           |
| ----------------------------------- | -------------------------------------------- | --------------------------------------------- |
| Resilient Cyber                     | https://www.resilientcyber.io/feed           | https://www.resilientcyber.io/                |
| The Software Analyst Cyber Research | https://softwareanalyst.substack.com/feed    | https://softwareanalyst.substack.com/         |
| better appsec - Medium              | https://betterappsec.com/feed                | https://betterappsec.com/                     |
| Reasonable Application Security     | https://rss.beehiiv.com/feeds/qzqvvIt0tM.xml | https://appsec.beehiiv.com/                   |
| tl;dr sec                           | https://rss.beehiiv.com/feeds/xgTKUmMmUm.xml | https://tldrsec.com/                          |
| API Security News                   | https://apisecurity.io/feed/index.xml        | https://apisecurity.io/                       |
| Latio Pulse                         | https://pulse.latio.tech/feed                | https://pulse.latio.tech/                     |
| The Cybersecurity Pulse (TCP)       | https://www.cybersecuritypulse.net/feed      | https://www.cybersecuritypulse.net/           |
| The Hacker News                     | https://feeds.feedburner.com/TheHackersNews  | https://thehackernews.com                     |
| Return On Security                  | https://rss.beehiiv.com/feeds/tLSvUYOBwf.xml | https://www.returnonsecurity.com/t/Newsletter |
| Vulnerable U                        | https://rss.beehiiv.com/feeds/lSfumbrEGk.xml | https://www.vulnu.com/                        |
| Secure All Software                 | https://www.secureallsoftware.com/feed       | https://www.secureallsoftware.com/            |
| CSO Online                          | https://www.csoonline.com/feed/              | https://www.csoonline.com/                    |
| AWS Security Blog                   | https://aws.amazon.com/blogs/security/feed/  | https://aws.amazon.com/blogs/security/        |
| CramHacks                           | https://rss.beehiiv.com/feeds/uGY9n2H0Mg.xml | https://www.cramhacks.com/                    |


In this channel, paste the bellow command
```bash
/sub <above_RSS_list>
/activate_subs
```

#### <span class="accent">The Result</span>
I now have a fully automated system that provides real-time security updates directly to my Telegram channel, allowing me to stay up to date without manually checking websites or emails. The Telegram bot makes the entire procedure easier and ensures that I never miss a critical security post. This configuration has substantially increased my efficiency and ensured that I am always up to date on the newest cybersecurity news.

![tldr-telegram](@assets/images/tldr-telegram.png)