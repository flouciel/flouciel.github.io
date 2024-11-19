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

Being in cybersecurity, you gotta stay on top of the latest threats, vulnerabilities, and security news. But let’s be real — it’s a total headache trying to keep up with the endless stream of info from blogs, forums, and databases. It gets overwhelming fast. So, I had one goal in mind: how do I make this whole process easier and still keep up with the important stuff without drowning in updates?

### <span class="accent">Complication</span>

The first challenge I encountered was information overload. The cybersecurity landscape is continuously changing, with new vulnerabilities and attacks being popping up daily. While I understood the value of remaining informed, the sheer amount of information made it impossible to keep up. 

Here’s a quick rundown of the challenges I faced:

- Time drain: I spent hours hopping between websites and blogs, manually scanning headlines for useful updates.
- Missed stuff: Important updates slipped through the cracks because the info was scattered all over the place.
- Lack of organization: Keeping track of security updates was a mess since they were spread across so many channels.

### <span class="accent">Resolution</span>: Two Approaches to Stay Updated on Security News

#### 1. Traditional Way: Email Notifications
The first thing I tried was setting up email notifications for the blogs, newsletters, and other resources I follow. Many security websites and blogs offer the option to receive email updates whenever they post something new.

- Email Subscriptions: I could subscribe to email newsletters or set up alerts for specific security topics or sources.
- Daily Digest: Most platforms offer daily or weekly email summaries of the latest posts, making it easier to stay in the loop without constantly checking websites.

This has its pros and cons. It’s straightforward and helps me get things done much faster, but it does have some drawbacks:

- Clutter: My inbox would quickly get flooded with emails from various sources, making it tough to sift through and find the important ones.
- Limited Control: Email services often lack fine-grained control over what content I receive and when, leading to less customization.

![email-noti](@assets/images/tldr-email.png)

#### 2. Telegram bot. 

The second, and ultimately better, solution was to create a Telegram bot that could automatically send updates from my chosen security sources. Since I use Telegram daily, it made perfect sense to use it for receiving updates.

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

| Site                                                                          | Feed URL                                     |
| ------------------------------------------------------------------------------| -------------------------------------------- |
| [Resilient Cyber](https://www.resilientcyber.io/ )                            | https://www.resilientcyber.io/feed           |
| [The Software Analyst Cyber Research](https://softwareanalyst.substack.com/)  | https://softwareanalyst.substack.com/feed    |       
| [better appsec - Medium](https://betterappsec.com/ )                          | https://betterappsec.com/feed                |                     
| [Reasonable Application Security](https://appsec.beehiiv.com/)                | https://rss.beehiiv.com/feeds/qzqvvIt0tM.xml |
| [tl;dr sec](ttps://tldrsec.com/)                                              | https://rss.beehiiv.com/feeds/xgTKUmMmUm.xml |
| [API Security News](https://apisecurity.io/)                                  | https://apisecurity.io/feed/index.xml        |
| [Latio Pulse](https://pulse.latio.tech/)                                      | https://pulse.latio.tech/feed                |
| [The Cybersecurity Pulse (TCP)]( https://www.cybersecuritypulse.net/)         | https://www.cybersecuritypulse.net/feed      |
| [The Hacker News](https://thehackernews.com )                                 | https://feeds.feedburner.com/TheHackersNews  |
| [Return On Security](https://www.returnonsecurity.com/t/Newsletter)           | https://rss.beehiiv.com/feeds/tLSvUYOBwf.xml |
| [Vulnerable U](https://www.vulnu.com/ )                                       | https://rss.beehiiv.com/feeds/lSfumbrEGk.xml |
| [Secure All Software](https://www.secureallsoftware.com/)                     | https://www.secureallsoftware.com/feed       |
| [CSO Online](https://www.csoonline.com/)                                      | https://www.csoonline.com/feed/              |
| [AWS Security Blog](https://aws.amazon.com/blogs/security/)                   | https://aws.amazon.com/blogs/security/feed/  |
| [CramHacks](https://www.cramhacks.com/)                                       | https://rss.beehiiv.com/feeds/uGY9n2H0Mg.xml |


In this channel, paste the bellow command
```bash
/sub <above_RSS_list>
/activate_subs
```

#### <span class="accent">The Result</span>
Now, I have a fully automated system that sends real-time security updates straight to my Telegram channel, so I don’t have to manually check websites or emails anymore. The Telegram bot makes everything seamless and ensures I never miss an important security post. This setup has greatly boosted my efficiency and guarantees I’m always in the loop with the latest cybersecurity news.

Thanks for reading!
![tldr-telegram](@assets/images/tldr-telegram.png)