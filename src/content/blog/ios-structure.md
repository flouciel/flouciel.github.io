---
title: IPA (iOS AppStore Package)
author: Hazy
pubDatetime: 2024-10-14
featured: false
draft: false
tags:
  - iOS
  - Mobile
  - ipa
  - security
description: "iOS apps are distributed in IPA (iOS App Store Package) archives, which are ZIP-compressed files containing the app's binary, resources, and metadata needed to execute on iOS devices."
---

## IPA File Structure

iOS apps are distributed in IPA (iOS App Store Package) archives, which are ZIP-compressed files containing the app's binary, resources, and metadata needed to execute on iOS devices. Similar to Android's APK, IPA files are specific to Apple's iOS devices and are used to install apps on iPhones, iPads, and iPods.

| Name      | Description |
| ----------- | ----------- |
| iTunesArtwork      | A 512x512 pixel PNG image used as app’s icon that shows up on iTunes, and App Store.|
| iTunesMetadata.plist | A property list file that contains developer information like developer name, ID, copyright information, application name, release information, etc.|
|META-INF| Subdirectory within the IPA file stores meta-information used by the application during open IPA file creation. <br> Under the META-INF/ folder, you will find two more files: <br> - com.apple.FixedZipMetadata.bin <br> - com.apple.ZipMetadata.plist|
|WatchKitSupport/WK|The WatchKit framework simplifies app development for watchOS apps, including managing background tasks, extended runtime sessions, Siri intents, and accessing user information about Apple Watch within the IPA system.|
|Payload| Folder that contains the application data.|
|Application Binary|The executable file containing the application’s code. Same name with actual application name. The complete binary analysis is performed on this application binary.|
|Mobile Provision file|By default, applications on iOS can only installed via AppStore. In some special cases, when the app is to be beta tested, mobile provision certificates are generated and used. This is the file which is included in the binary when ad hoc distribution of the file is to be 
|Code Signature|Check the integrity of the app when the application was released. Any kind of editing or deletion will invalidate the signature. Any changes that are made to the .app file require that the whole package be re-signed.|
|Bundled Resource Files|Images, Videos, Sounds, HTML, Property list files, etc. which are required by the application to be installed on the mobile device.|

## Payload: A Closer Look

In the Payload folder, you'll find a .app folder representing the app's name. Inside, all app data is stored. 

For example: Spotify app
![spotify-app](@assets/images/2024-10-15-16-28-06.png)

- Info.plist: Configuration information, such as bundle ID, version number, and application display name
![info-plist](@assets/images/2024-10-15-16-27-59.png)

- _CodeSignature/CodeResources: includes a plist file that contains a signature, ensuring the integrity of all files in the bundle.
![codesign](@assets/images/2024-10-15-16-27-51.png)

- Assets.car: A compressed archive is used to store asset files, such as icons.

- Frameworks: contains the app native libraries as .dylib or .framework files

- PlugIns: may contain app extensions as .appex files
![plugins](@assets/images/2024-10-15-16-27-43.png)

- Multiple .lproj folders represent languages, each containing a Localizable.strings file in XML format for localization. (en.lproj, fr.lproj, etc )
![lprof](@assets/images/2024-10-15-16-27-34.png)

- *PkgInfo:* The PkgInfo file is an alternate way to specify the type and creator codes of your application or bundle. The contents of the PkgInfo file are the 4-byte package type followed by the 4-byte signature of your application. Thus, for the TextEdit application, whose type is 'APPL' and whose signature is 'ttxt', the file would contain the ASCII string “APPLttxt”.

- *SC_Info:* This folder contains keys which are used for decrypting the app executables. The contents will look like this:
    - Manifest.plist
    - Spotify.sinf 
    - Spotify.supf 
    - Spotify.supp
    - Spotify.supx
The .sinf, .supf, .supp, .supx files are used for decrypting, and the Manifest.plist file is used to list all of the relevant .sinf files which are to be used. 

- *<name>.storyboardc/*: contain some information on the layout of specific panels or views in the app. The inclusion of these folders suggests that the app was created with the Interface Builder tool. Several.nib files and an additional Info.plist file can be found in these folders.
    - Info.plist
    - 01J-lp-oVM-view-MkI-aN-x20.nib 
    - UIViewController-01J-lp-oVM.nib

## Reference:
- https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/FileSystemOverview/FileSystemOverview.html
- https://mas.owasp.org/MASTG/0x06a-Platform-Overview/#apps-on-ios