---
title: How to Acquiring iOS IPA
author: Hazy
pubDatetime: 2024-05-02
featured: false
draft: false
tags:
  - iOS
  - Mobile
  - IPA
  - security
description: "How to get the IPA file for securuty testing"
---

## TL;DR:
Want the IPA file of an iOS app? Here’s the *realest* advice:

> **Ask your mobile developer.**  
> *(Not a joke. But also a joke.)*

In mobile security audits, clients and developers usually hand over the IPA file directly. They might email it to you or share it through development-focused distribution platforms like TestFlight or Visual Studio App Center or Firebase App Distribution, it all depend on their workflow.

But if you're doing on your own testing, maybe a side project or a public app, then you'll need to go to the other route.

## Method 1: Pul from the App Store 

[ipatool](https://github.com/majd/ipatool) is a command-line tool that lets you download IPA files directly from the App Store using your Apple ID.

### Installation (Mac Homebrew)

``` shell
$ brew tap majd/repo
$ brew install ipatool
```
### Usage:

Need your Apple ID credential to help this tool authenticate just like a real App Store client.

![ipatool-cli](@assets/images/2024-10-15-15-32-00.png)

``` shell
$ ipatool auth
$ ipatool search Spotify
$ ipatool download -b com.spotify.client -o spotify.ipa
```
## Method 2: Extract from Jailbroken Device

If you have access to a jailbroken device, you can extract the IPA directly from the system where it's decrypted and ready for inspection.

### Opt A: Frida-ios-dump
This tool uses Frida under the hood to dump decrypted versions of apps from the device.

> https://github.com/AloneMonkey/frida-ios-dump

Note: This method can be fragile depending on iOS version, device, and Frida compatibility. I encountered many issues when dealing with this tool, hence try opt B which is a great alternative, more stable. 

### Opt B: Bagbak

> https://github.com/ChiChou/bagbak

``` shell
npm install -g bagbak
```

Use bagbak to decrypt the application and extract it from the iPhone. (Remmember to set SSH username to root, password is alpine)

```shell
export SSH_USERNAME=root
✦ ➜ bagbak com.apple.iBooks
[info] pulling app bundle from device, please be patient
[info] downloaded 682 files and 511 folders
[info] app bundle downloaded
....
Saved to com.apple.iBooks-9.4.ipa
```