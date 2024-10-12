import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, s as spreadAttributes } from './astro/server_Bn9RwVjN.mjs';
import { g as getImage } from './_astro_assets_ULHOgwTt.mjs';
import 'clsx';

const Astro__DR4x1 = new Proxy({"src":"/_astro/grapefruit.sA6myeKs.jpg","width":3136,"height":2045,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/4azy/lune/code/flouciel.github.io/src/assets/images/posts/ios-02/grapefruit.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/4azy/lune/code/flouciel.github.io/src/assets/images/posts/ios-02/grapefruit.jpg");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "@assets/images/posts/ios-02/grapefruit\\.jpg" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "@assets/images/posts/ios-02/grapefruit.jpg" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__DR4x1, ...props});
													occurrenceCounter++;
											}
									}
					return imageSources;
			};

			async function updateImageReferences(html) {
				return images(html).then((imageSources) => {
						return html.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm, (full, imagePath) => {
								const decodedImagePath = JSON.parse(imagePath.replace(/&#x22;/g, '"'));
		
								// Use the 'index' property for each image occurrence
								const srcKey = decodedImagePath.src + '_' + decodedImagePath.index;
		
								if (imageSources[srcKey].srcSet && imageSources[srcKey].srcSet.values.length > 0) {
										imageSources[srcKey].attributes.srcset = imageSources[srcKey].srcSet.attribute;
								}
		
								const { index, ...attributesWithoutIndex } = imageSources[srcKey].attributes;
		
								return spreadAttributes({
										src: imageSources[srcKey].src,
										...attributesWithoutIndex,
								});
						});
				});
		}
		

		// NOTE: This causes a top-level await to appear in the user's code, which can break very easily due to a Rollup
	  // bug and certain adapters not supporting it correctly. See: https://github.com/rollup/rollup/issues/4708
	  // Tread carefully!
			const html = await updateImageReferences("<h2 id=\"a-curated-list-of-resources-for-security-testing-of-ios-apps-keep-updating\">A curated list of resources for security testing of iOS apps. (Keep updating)</h2>\n<ul>\n<li>\n<p><strong><a href=\"https://checkra.in/\">Checkra1n</a></strong>: a semi-tethered jailbreak tool. This means that you need to connect the device to a computer every time you want to jailbreak/rejailbreak. Checkra1n also uses an exploit that is hardware based (Apple can’t patch this). Due to Checkra1n being hardware based, it will only work on certain devices, A7 to A11. This means it does not work on the XS or newer.</p>\n</li>\n<li>\n<p><strong><a href=\"https://unc0ver.dev/\">Unc0ver</a></strong>: the alternative of Checkra1n. Unc0ver is a semi-untethered jailbreak. This means that it does not require a computer to rejailbreak and instead, you can install the Unc0ver app via a signing service. The exploit used in Unc0ver is a tfp0 exploit, which is software based. This means with each iOS update, the chances of the jailbreak not working is 99%. Unc0ver, due to being software based, can run on any device that is able to run the supported iOS version. unc0ver supports iOS 11.0 through to iOS 14.3.</p>\n</li>\n<li>\n<p><strong><a href=\"https://cydia.saurik.com/\">Cydia</a></strong>: a GUI wrapper for apt and, once apt is installed, the rest can be installed via command line. Alternative to Apple’s App Store for “jailbroken” devices.</p>\n</li>\n<li>\n<p><strong><a href=\"https://cydia.saurik.com/openssh.html\">OpenSSH</a></strong>: A utility to help users to connect remotely to the iOS file system. Install via search function in Cydia from Binger source. Default root’s password is “alpine”.</p>\n</li>\n<li>\n<p><strong><a href=\"https://cydia.akemi.ai/?page/net.angelxwind.appsyncunified\">AppSynce Unified</a></strong>: allows to freely install ad-hoc signed, fakesigned, or unsigned IPA app packages on their iOS devices that iOS would otherwise consider invalid. Useful when sideloading IPA package. Install via Cydia by addding <a href=\"https://cydia.akemi.ai\">Karen’s repo.</a>.</p>\n</li>\n<li>\n<p><strong><a href=\"https://frida.re/docs/ios/\">Frida</a></strong>: a dynamic code instrumentation toolkit. It lets you inject snippets of JavaScript or custom libraries into native apps on Windows, macOS, GNU/Linux, iOS, Android, or QNX. Install Frida package by adding Frida repo (<a href=\"https://build.frida.re\">https://build.frida.re</a>) into Cydia source.</p>\n</li>\n<li>\n<p><strong><a href=\"https://moreinfo.thebigboss.org/moreinfo/depiction.php?file=filzafilemanagerDp\">Filza File Manager</a></strong>: A powerful file manager on iPhone. Install via Cydia from BigBoss source.</p>\n</li>\n</ul>\n<h3 id=\"on-laptop-macos\">On Laptop (MacOS)</h3>\n<ul>\n<li><strong>Xcode</strong>:  Apple’s IDE and includes the latest iOS SDK and iOS Simulator that contains a suite of tools for developing software for macOS, iOS, watchOS, and tvOS. It’s available for free on the Mac App Store (requires an Apple ID). Xcode will offer you different tools and functions to interact with an iOS device that can be helpful during a pentest, such as analyzing logs, or sideloading of apps.</li>\n<li><strong>Finder</strong>: Starting with macOS Catalina, the Finder replaces iTunes for browsing and accessing content on your computer.</li>\n<li><strong>SSH client tool</strong>: use command line tool like Terminal or Putty or Terminus … to set up a SSH tunnel to access iOS file system.</li>\n<li><strong><a href=\"https://filezilla-project.org/\">FileZilla</a></strong> : a client SFTP tool where you can transfer file between your Mac and iPhone.</li>\n<li><a href=\"https://cyberduck.io/\">Cyberduck</a>: The alternative tool for SFTP.</li>\n<li><strong><a href=\"https://frida.re/\">Frida</a> and <a href=\"https://github.com/sensepost/objection\">Objection</a></strong>: Install via pip3.\n<pre class=\"astro-code one-dark-pro\" style=\"background-color:#282c34;color:#abb2bf; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>pip3 install frida-tools objection</span></span>\n<span class=\"line\"><span></span></span></code></pre>\n</li>\n<li><strong><a href=\"https://github.com/ChiChou/grapefruit\">Grapefruit</a></strong>: Runtime Application Instruments for iOS. Previously Passionfruit.  Require Node.js installed\n<pre class=\"astro-code one-dark-pro\" style=\"background-color:#282c34;color:#abb2bf; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;\" tabindex=\"0\" data-language=\"console\"><code><span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#ABB2BF\">npm install -g igf</span></span>\n<span class=\"line\"></span></code></pre>\n</li>\n</ul>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;@assets/images/posts/ios-02/grapefruit.jpg&#x22;,&#x22;alt&#x22;:&#x22;grapefruit&#x22;,&#x22;index&#x22;:0}\"></p>\n<ul>\n<li><strong>MobSF</strong>: Mobile Security Framework (MobSF) is an automated, all-in-one mobile application (Android/iOS/Windows) pen-testing, malware analysis and security assessment framework capable of performing static and dynamic analysis. Read its document <a href=\"https://mobsf.github.io/docs/#/\">here.</a> Make sure the requirements are installed.\n<pre class=\"astro-code one-dark-pro\" style=\"background-color:#282c34;color:#abb2bf; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;\" tabindex=\"0\" data-language=\"console\"><code><span class=\"line\"><span style=\"color:#ABB2BF\">git clone https://github.com/MobSF/Mobile-Security-Framework-MobSF.git</span></span>\n<span class=\"line\"><span style=\"color:#ABB2BF\">cd Mobile-Security-Framework-MobSF</span></span>\n<span class=\"line\"><span style=\"color:#ABB2BF\">./setup.sh</span></span>\n<span class=\"line\"></span></code></pre>\n</li>\n</ul>");
	

				const frontmatter = {"title":"iOS 101 Awesome iOS Security Testing Tools","author":"4azy","pubDatetime":"2024-05-02T00:00:00.000Z","featured":false,"draft":false,"tags":["iOS","Mobile"],"description":"A journey to iOS Application Security"};
				const file = "/Users/4azy/lune/code/flouciel.github.io/src/content/blog/ios-02.md";
				const url = undefined;
				function rawContent() {
					return "\n## A curated list of resources for security testing of iOS apps. (Keep updating)\n\n- **[Checkra1n](https://checkra.in/)**: a semi-tethered jailbreak tool. This means that you need to connect the device to a computer every time you want to jailbreak/rejailbreak. Checkra1n also uses an exploit that is hardware based (Apple can’t patch this). Due to Checkra1n being hardware based, it will only work on certain devices, A7 to A11. This means it does not work on the XS or newer.\n\n- **[Unc0ver](https://unc0ver.dev/)**: the alternative of Checkra1n. Unc0ver is a semi-untethered jailbreak. This means that it does not require a computer to rejailbreak and instead, you can install the Unc0ver app via a signing service. The exploit used in Unc0ver is a tfp0 exploit, which is software based. This means with each iOS update, the chances of the jailbreak not working is 99%. Unc0ver, due to being software based, can run on any device that is able to run the supported iOS version. unc0ver supports iOS 11.0 through to iOS 14.3.\n\n- **[Cydia](https://cydia.saurik.com/)**: a GUI wrapper for apt and, once apt is installed, the rest can be installed via command line. Alternative to Apple's App Store for \"jailbroken\" devices.\n\n- **[OpenSSH](https://cydia.saurik.com/openssh.html)**: A utility to help users to connect remotely to the iOS file system. Install via search function in Cydia from Binger source. Default root's password is \"alpine\".\n- **[AppSynce Unified](https://cydia.akemi.ai/?page/net.angelxwind.appsyncunified)**: allows to freely install ad-hoc signed, fakesigned, or unsigned IPA app packages on their iOS devices that iOS would otherwise consider invalid. Useful when sideloading IPA package. Install via Cydia by addding [Karen's repo.](https://cydia.akemi.ai).\n- **[Frida](https://frida.re/docs/ios/)**: a dynamic code instrumentation toolkit. It lets you inject snippets of JavaScript or custom libraries into native apps on Windows, macOS, GNU/Linux, iOS, Android, or QNX. Install Frida package by adding Frida repo (https://build.frida.re) into Cydia source.\n- **[Filza File Manager](https://moreinfo.thebigboss.org/moreinfo/depiction.php?file=filzafilemanagerDp)**: A powerful file manager on iPhone. Install via Cydia from BigBoss source.\n\n### On Laptop (MacOS)\n- **Xcode**:  Apple’s IDE and includes the latest iOS SDK and iOS Simulator that contains a suite of tools for developing software for macOS, iOS, watchOS, and tvOS. It’s available for free on the Mac App Store (requires an Apple ID). Xcode will offer you different tools and functions to interact with an iOS device that can be helpful during a pentest, such as analyzing logs, or sideloading of apps.\n- **Finder**: Starting with macOS Catalina, the Finder replaces iTunes for browsing and accessing content on your computer. \n- **SSH client tool**: use command line tool like Terminal or Putty or Terminus … to set up a SSH tunnel to access iOS file system.\n- **[FileZilla](https://filezilla-project.org/)** : a client SFTP tool where you can transfer file between your Mac and iPhone. \n-  [Cyberduck](https://cyberduck.io/): The alternative tool for SFTP.\n- **[Frida](https://frida.re/) and [Objection](https://github.com/sensepost/objection)**: Install via pip3.\n  ```Bash\n  pip3 install frida-tools objection\n  ```\n- **[Grapefruit](https://github.com/ChiChou/grapefruit)**: Runtime Application Instruments for iOS. Previously Passionfruit.  Require Node.js installed\n    ```console\n  \n    npm install -g igf\n    ```\n![grapefruit](@assets/images/posts/ios-02/grapefruit.jpg)\n\n- **MobSF**: Mobile Security Framework (MobSF) is an automated, all-in-one mobile application (Android/iOS/Windows) pen-testing, malware analysis and security assessment framework capable of performing static and dynamic analysis. Read its document [here.](https://mobsf.github.io/docs/#/) Make sure the requirements are installed.\n  ```console\n  git clone https://github.com/MobSF/Mobile-Security-Framework-MobSF.git\n  cd Mobile-Security-Framework-MobSF\n  ./setup.sh\n  ```";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"a-curated-list-of-resources-for-security-testing-of-ios-apps-keep-updating","text":"A curated list of resources for security testing of iOS apps. (Keep updating)"},{"depth":3,"slug":"on-laptop-macos","text":"On Laptop (MacOS)"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
