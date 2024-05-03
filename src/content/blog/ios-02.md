---
title: iOS 101 Awesome iOS Security Testing Tools
author: 4azy
pubDatetime: 2024-05-02
featured: false
draft: false
tags:
  - iOS
  - Mobile
description: "A journey to iOS Application Security"
---

## A curated list of resources for security testing of iOS apps. (Keep updating)

- **[Checkra1n](https://checkra.in/)**: a semi-tethered jailbreak tool. This means that you need to connect the device to a computer every time you want to jailbreak/rejailbreak. Checkra1n also uses an exploit that is hardware based (Apple can’t patch this). Due to Checkra1n being hardware based, it will only work on certain devices, A7 to A11. This means it does not work on the XS or newer.

- **[Unc0ver](https://unc0ver.dev/)**: the alternative of Checkra1n. Unc0ver is a semi-untethered jailbreak. This means that it does not require a computer to rejailbreak and instead, you can install the Unc0ver app via a signing service. The exploit used in Unc0ver is a tfp0 exploit, which is software based. This means with each iOS update, the chances of the jailbreak not working is 99%. Unc0ver, due to being software based, can run on any device that is able to run the supported iOS version. unc0ver supports iOS 11.0 through to iOS 14.3.

- **[Cydia](https://cydia.saurik.com/)**: a GUI wrapper for apt and, once apt is installed, the rest can be installed via command line. Alternative to Apple's App Store for "jailbroken" devices.

- **[OpenSSH](https://cydia.saurik.com/openssh.html)**: A utility to help users to connect remotely to the iOS file system. Install via search function in Cydia from Binger source. Default root's password is "alpine".
- **[AppSynce Unified](https://cydia.akemi.ai/?page/net.angelxwind.appsyncunified)**: allows to freely install ad-hoc signed, fakesigned, or unsigned IPA app packages on their iOS devices that iOS would otherwise consider invalid. Useful when sideloading IPA package. Install via Cydia by addding [Karen's repo.](https://cydia.akemi.ai).
- **[Frida](https://frida.re/docs/ios/)**: a dynamic code instrumentation toolkit. It lets you inject snippets of JavaScript or custom libraries into native apps on Windows, macOS, GNU/Linux, iOS, Android, or QNX. Install Frida package by adding Frida repo (https://build.frida.re) into Cydia source.
- **[Filza File Manager](https://moreinfo.thebigboss.org/moreinfo/depiction.php?file=filzafilemanagerDp)**: A powerful file manager on iPhone. Install via Cydia from BigBoss source.

### On Laptop (MacOS)
- **Xcode**:  Apple’s IDE and includes the latest iOS SDK and iOS Simulator that contains a suite of tools for developing software for macOS, iOS, watchOS, and tvOS. It’s available for free on the Mac App Store (requires an Apple ID). Xcode will offer you different tools and functions to interact with an iOS device that can be helpful during a pentest, such as analyzing logs, or sideloading of apps.
- **Finder**: Starting with macOS Catalina, the Finder replaces iTunes for browsing and accessing content on your computer. 
- **SSH client tool**: use command line tool like Terminal or Putty or Terminus … to set up a SSH tunnel to access iOS file system.
- **[FileZilla](https://filezilla-project.org/)** : a client SFTP tool where you can transfer file between your Mac and iPhone. 
-  [Cyberduck](https://cyberduck.io/): The alternative tool for SFTP.
- **[Frida](https://frida.re/) and [Objection](https://github.com/sensepost/objection)**: Install via pip3.
  ```Bash
  pip3 install frida-tools objection
  ```
- **[Grapefruit](https://github.com/ChiChou/grapefruit)**: Runtime Application Instruments for iOS. Previously Passionfruit.  Require Node.js installed
    ```console
  
    npm install -g igf
    ```
![grapefruit](@assets/images/posts/ios-02/grapefruit.jpg)

- **MobSF**: Mobile Security Framework (MobSF) is an automated, all-in-one mobile application (Android/iOS/Windows) pen-testing, malware analysis and security assessment framework capable of performing static and dynamic analysis. Read its document [here.](https://mobsf.github.io/docs/#/) Make sure the requirements are installed.
  ```console
  git clone https://github.com/MobSF/Mobile-Security-Framework-MobSF.git
  cd Mobile-Security-Framework-MobSF
  ./setup.sh
  ```