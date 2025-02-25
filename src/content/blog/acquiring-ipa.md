---
title: How to Acquiring IPA File
author: Hazy
pubDatetime: 2024-05-02
featured: false
draft: false
tags:
  - iOS
  - Mobile
  - IPA
  - security
description: "The title says it all."
---

#### TL;DR:
In a straightforward way, I'll tell you a secret to obtaining IPA files the right way: "Ask your mobile developer".

*Joke, but true.*

In mobile security audits, clients and developers usually hand over the IPA file directly. They might email it to you or provide access through development-focused distribution channels like TestFlight or Visual Studio App Center.

But if you're working on your own side project and the app is only available on the App Store, you'll need to explore alternative ways to acquire the IPA:

> https://github.com/majd/ipatool

### Installation: 

Via Homebrew

``` shell
$ brew tap majd/repo
$ brew install ipatool
```
### Usage:

Must use the Apple ID credential
![ipatool-cli](@assets/images/2024-10-15-15-32-00.png)

``` shell
$ ipatool auth
$ ipatool search Spotify
$ ipatool download -b com.spotify.client -o spotify.ipa
```
## if you need extract IPA from jailbroken device 

The traditional method to extract decrypted IPA files from a jailbroken iOS device involves using frida-ios-dump. This tool relies on Frida to dump and decrypt apps directly from the device.

> https://github.com/AloneMonkey/frida-ios-dump

But I encountered many issues when dealing with this tool, hence I switch to Bagbak

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