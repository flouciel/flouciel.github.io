---
title: Hello iOS. Can I "root" an iPhone?
author: Hazy
pubDatetime: 2024-05-02
featured: false
draft: false
tags:
  - iOS
  - mobsec
  - jailbreak
  - appsec
description: "Switching from Android to iOS, goodbye root, any challenges and restrictions? How to break them."
---

Recently, just came back to conduct a security testing for our internal mobile apps at work. I needed to set up a testing environment, buy new devices, root them all, and do more. This is a quick wrap-up of what I did. Also, I’m biased toward the iFan, so I’m not sure if we’ll have a Android root series. I can’t promise.

So here we are, a guide to jailbreaking an iPhone. If you're new to the term jailbreaking, take a few seconds to check out my [other post](/posts/ios-jailbreak-type). 

## Pre-jailbreak

Before we get started, let’s check what I have: an iPhone X running iOS 16.7.2. I chose this device because it strikes a balance, new enough to test modern apps but not too new to tackle the difficulties of jailbreaking. Then, select the appropriate method for jailbreaking at [ios.cfw.guide.](https://ios.cfw.guide/get-started)

## Jailbreak with [Palera1n](https://palera.in/)
```console
- palera1n
- MacOS
- iPhone X, version 16.7.2
- Must use USB-A to lighting cable due to compatibility issues when entering DFU mode. 
```

Step 1. Remove Passcode in iPhone. Connect iPhone to Mac with a cable, then Click <span class="accent">“Trust”</span> this computer.

Step 2: Install palera1n tool

```bash
sudo /bin/sh -c "$(curl -fsSL https://static.palera.in/scripts/install.sh)"
```
Step 3: Run palera1n on command line
![palera1n-cli-1](@assets/images/2024-10-15-15-07-59.png)

Step 4: Enter and follow the instruction
![palera1n-cli-2](@assets/images/2024-10-15-15-08-18.png)

After complete, this will install <span class="accent">paler1n</span> and <span class="accent">sileo</span> app on the device.
![palera1n-result](@assets/images/2024-10-15-15-26-22.png)

## Troubleshooting
The first issue I encountered was that SSH to iPhone on port 22 didn’t work due to changes in Palera1n, so I had to use an alternative method.
(src: Q&A on palera1n.in)
> password: root/mobile is alpine
> > 
> ssh root@127.0.0.1 -o "StrictHostKeyChecking=no" -o "UserKnownHostsFile=/dev/null" -o "ProxyCommand=inetcat 44"

If cannot use `sudo` , edit file `ssh_config`

```shell
find / -name sshd_config -print
use vim <sshconffig>
PasswordAuthentication yes

--------------------
then with sudo
find / -name sudo -print

Create a profile in ./
vim .profile
export PATH="/private/preboot/[digit_string]/jb-xxxxxx/procursus/usr/bin:$PATH"
source .profile
```
---

## Revised version of the old method: [Checkra1n](https://checkra.in/)

```console
- Checkra1n: 0.12.3 version
- MacOS
- iPhone X, version 14.8.1
- USB-A cable
```
Step 1. Remove Passcode in iPhone. Connect iPhone to Mac with a cable, then Click <span class="accent">“Trust”</span> this computer.

Step 2. Install Checkra1n tools on your Mac. In version 0.12.3, refer to the notes.
> A11 devices on iOS 14.0 and above require removing the passcode and enabling “Skip A11 BPR check” in the options. This is not recommended, but it’s there.
  
Step 3. Open Checkra1n tool, then config with option
![checkra1n-config](@assets/images/2024-10-15-14-45-56.png)

![checkra1n-config-2](@assets/images/2024-10-15-14-46-36.png)

Step 4. Enter the DFU mode, then follow instruction on screen

![dfu-mode](@assets/images/2024-10-15-14-47-07.png)


Step 5. Once booted, will have the installed Checkra1n application on iPhone. This means we jailbreak successfully. Finally, we can install Cydia inside Checkra1n app.

![cydia-loader](@assets/images/2024-10-15-14-47-20.png)

## References:
- https://canijailbreak.com/
- https://www.theiphonewiki.com/
- https://www.reddit.com/r/jailbreak/
- https://ios.cfw.guide/