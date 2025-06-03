const id = "acquiring-ipa.md";
						const collection = "blog";
						const slug = "acquiring-ipa";
						const body = "\n#### TL;DR:\nIn a straightforward way, I'll tell you a secret to obtaining IPA files the right way: \"Ask your mobile developer\".\n\n*Joke, but true.*\n\nIn mobile security audits, clients and developers usually hand over the IPA file directly. They might email it to you or provide access through development-focused distribution channels like TestFlight or Visual Studio App Center.\n\nBut if you're working on your own side project and the app is only available on the App Store, you'll need to explore alternative ways to acquire the IPA:\n\n> https://github.com/majd/ipatool\n\n### Installation: \n\nVia Homebrew\n\n``` shell\n$ brew tap majd/repo\n$ brew install ipatool\n```\n### Usage:\n\nMust use the Apple ID credential\n![ipatool-cli](@assets/images/2024-10-15-15-32-00.png)\n\n``` shell\n$ ipatool auth\n$ ipatool search Spotify\n$ ipatool download -b com.spotify.client -o spotify.ipa\n```\n## if you need extract IPA from jailbroken device \n\nThe traditional method to extract decrypted IPA files from a jailbroken iOS device involves using frida-ios-dump. This tool relies on Frida to dump and decrypt apps directly from the device.\n\n> https://github.com/AloneMonkey/frida-ios-dump\n\nBut I encountered many issues when dealing with this tool, hence I switch to Bagbak\n\n> https://github.com/ChiChou/bagbak\n\n``` shell\nnpm install -g bagbak\n```\n\nUse bagbak to decrypt the application and extract it from the iPhone. (Remmember to set SSH username to root, password is alpine)\n\n```shell\nexport SSH_USERNAME=root\n✦ ➜ bagbak com.apple.iBooks\n[info] pulling app bundle from device, please be patient\n[info] downloaded 682 files and 511 folders\n[info] app bundle downloaded\n....\nSaved to com.apple.iBooks-9.4.ipa\n```";
						const data = {author:"Hazy",pubDatetime:new Date(1714608000000),title:"How to Acquiring IPA File",featured:false,draft:false,tags:["iOS","Mobile","IPA","security"],description:"The title says it all."};
						const _internal = {
							type: 'content',
							filePath: "/Users/4azy/lune/code/flouciel.github.io/src/content/blog/acquiring-ipa.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
