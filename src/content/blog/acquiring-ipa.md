---
title: Acquiring IPA File
author: Hazy
pubDatetime: 2024-05-02
featured: false
draft: false
tags:
  - iOS
  - Mobile
  - IPA
description: "The IPA file is required for various areas of mobile app examination and security."
---
The IPA file is required for various areas of mobile app examination and security. It contains the compiled program, as well as its executable, resources, and metadata, allowing for in-depth inspection and evaluation. Security professionals utilize the IPA file to conduct comprehensive security assessments, detecting potential vulnerabilities and flaws. It also enables reverse engineering to comprehend app behavior and identify hidden dangerous code.

In mobile security audits, clients and developers usually give the IPA file directly. They may email you the file directly or grant you access to their development-focused distribution channels, such as TestFlight or Visual Studio App Centre.

If the app is available on the App Store, you must use some alternative ways to acquire IPA:

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

## Extract IPA from jailbroken device 

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