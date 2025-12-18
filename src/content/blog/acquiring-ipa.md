---
title: Acquire the iOS IPA
author: Hazy
pubDatetime: 2024-05-02
featured: false
draft: false
tags:
  - iOS
  - mobsec
  - appsec
description: "How to get the IPA file for security testing"
---

## TL;DR:
Need the IPA file for an iOS app? Here’s the straight-up advice:

> **Ask your mobile developer.**  
> *(Seriously… and also, kind of joking.)*

When it comes to mobile security testing, most of the time clients or developers will hand you the IPA file, especially if you make it clear that it is part of your requirements. They might email it to you or share it through development-focused platforms like TestFlight, Visual Studio App Center, or Firebase App Distribution. It really depends on their workflow. 

Sometimes, instead of waiting for someone to send the file, there are ways to get it yourself.

## Table of contents

## Method 1: Pull from the App Store 

If you want to grab an IPA straight from the App Store, [ipatool](https://github.com/majd/ipatool) is your friend. It’s a command‑line tool that lets you download IPA files using your Apple ID, basically acting like a headless App Store client.

### Installation (Mac Homebrew)

``` shell
$ brew tap majd/repo
$ brew install ipatool
```
### Usage

You need your Apple ID credentials for this tool to authenticate, just like a real App Store client.

![ipatool-cli](@assets/images/2024-10-15-15-32-00.png)

``` shell
$ ipatool auth
$ ipatool search Spotify
$ ipatool download -b com.spotify.client -o spotify.ipa
```
## Method 2: Extract from Jailbroken Device

If you have a jailbroken device lying around, you can dump the decrypted IPA directly from the system. Since the app is already decrypted at runtime, this method gives you a clean package for analysis.

### Opt A: Frida-ios-dump
This tool uses Frida under the hood to dump decrypted versions of apps from the device.

> https://github.com/AloneMonkey/frida-ios-dump

Note: This approach can be hit-or-miss depending on your iOS version, device, and Frida compatibility. I’ve run into plenty of issues with it, so if it gives you trouble, try the next option.

### Opt B: Bagbak

A much more stable alternative in most cases.

> https://github.com/ChiChou/bagbak

``` shell
npm install -g bagbak
```

Use bagbak to decrypt the application and extract it from the iPhone. (Remember to set SSH username to root, password is alpine)

```shell
export SSH_USERNAME=root
✦ ➜ bagbak com.apple.iBooks
[info] pulling app bundle from device, please be patient
[info] downloaded 682 files and 511 folders
[info] app bundle downloaded
....
Saved to com.apple.iBooks-9.4.ipa
```