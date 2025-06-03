import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate, s as spreadAttributes } from './astro/server_Q3wgTVI0.mjs';
import { g as getImage } from './_astro_assets_BtQnzTra.mjs';
import 'clsx';

const Astro__Z2g4a1H = new Proxy({"src":"/_astro/2024-10-15-11-31-39.tNJDLaMS.png","width":1130,"height":510,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/4azy/lune/code/flouciel.github.io/src/assets/images/2024-10-15-11-31-39.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/4azy/lune/code/flouciel.github.io/src/assets/images/2024-10-15-11-31-39.png");
							return target[name];
						}
					});

const Astro__ZcYb86 = new Proxy({"src":"/_astro/2024-10-15-13-28-03.B_LCfUfQ.png","width":1316,"height":1382,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/4azy/lune/code/flouciel.github.io/src/assets/images/2024-10-15-13-28-03.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/4azy/lune/code/flouciel.github.io/src/assets/images/2024-10-15-13-28-03.png");
							return target[name];
						}
					});

const Astro__1ulIdz = new Proxy({"src":"/_astro/2024-10-15-13-52-54.CkL1fxQX.png","width":564,"height":414,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/4azy/lune/code/flouciel.github.io/src/assets/images/2024-10-15-13-52-54.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/4azy/lune/code/flouciel.github.io/src/assets/images/2024-10-15-13-52-54.png");
							return target[name];
						}
					});

const Astro__Z1EuYCg = new Proxy({"src":"/_astro/2024-10-15-13-53-10.CcN1Mr82.png","width":1231,"height":2116,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/4azy/lune/code/flouciel.github.io/src/assets/images/2024-10-15-13-53-10.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/4azy/lune/code/flouciel.github.io/src/assets/images/2024-10-15-13-53-10.png");
							return target[name];
						}
					});

const Astro__Z1BXnl6 = new Proxy({"src":"/_astro/2024-10-15-13-53-27.DvmV6LoF.png","width":1184,"height":908,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/4azy/lune/code/flouciel.github.io/src/assets/images/2024-10-15-13-53-27.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/4azy/lune/code/flouciel.github.io/src/assets/images/2024-10-15-13-53-27.png");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "@assets/images/2024-10-15-11-31-39\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "@assets/images/2024-10-15-11-31-39.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__Z2g4a1H, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "@assets/images/2024-10-15-13-28-03\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "@assets/images/2024-10-15-13-28-03.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__ZcYb86, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "@assets/images/2024-10-15-13-52-54\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "@assets/images/2024-10-15-13-52-54.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__1ulIdz, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "@assets/images/2024-10-15-13-53-10\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "@assets/images/2024-10-15-13-53-10.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__Z1EuYCg, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "@assets/images/2024-10-15-13-53-27\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "@assets/images/2024-10-15-13-53-27.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__Z1BXnl6, ...props});
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
			const html = await updateImageReferences("<h2 id=\"why-need-to-jailbreak\">Why Need to Jailbreak</h2>\n<h3 id=\"apples-app-sandbox\">Apple’s App Sandbox</h3>\n<p>On iOS, every app operates within its own sandbox, ensuring it can only access data stored in its unique home directory. If an app needs to access data outside its directory - like files in iCloud or photos - it must use specific iOS services. This sandboxing means that other apps can’t read or alter your app’s data, keeping it secure and isolated.\n<img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;@assets/images/2024-10-15-11-31-39.png&#x22;,&#x22;alt&#x22;:&#x22;app-sandbox&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>Apple’s App Sandbox leverages UNIX user permissions to ensure apps run with the less privileged <span class=\"accent\">“mobile”</span> user. Anything outside the app’s home directory is mounted as read-only.\niOS includes robust measures to prevent memory-related security vulnerabilities. One key method is <span class=\"accent\">Address Space Layout Randomization (ASLR)</span>, which randomizes the memory regions assigned to each app every time it starts. This makes it much harder for attackers to exploit memory corruption bugs. Additionally, memory pages are marked as non-executable using <span class=\"accent\">ARM’s Execute Never (XN)</span> feature, which prevents malicious code from being executed</p>\n<h3 id=\"benefits-of-jailbreak\">Benefits of Jailbreak</h3>\n<p>Jailbreaking is about breaking free from the constraints imposed by Apple’s App Sandbox and security features. It removes these limitations, allowing users to control their devices fully. This includes:</p>\n<ul>\n<li>Access to system files</li>\n<li>Installation of unauthorized apps</li>\n<li>Ability to tweak system settings that are normally restricted\nIn short, jailbreaking provides root access, enabling a level of customization and functionality that Apple’s standard security doesn’t permit.</li>\n</ul>\n<h3 id=\"drawback\">Drawback</h3>\n<blockquote>\n<p><strong>Warning</strong>: Jailbreaking your iDevice greatly compromises its security. It is not advisable to perform this on your primary device. A jailbroken device is for penetration testing only, not for regular use.</p>\n</blockquote>\n<ul>\n<li>Security Vulnerabilities: Bypassing Apple’s security can expose your device to malware and unauthorized access.</li>\n<li>Stability Issues: Jailbreaking may lead to system instability or crashes due to untested modifications.</li>\n</ul>\n<h3 id=\"run-on-a-real-device\">Run on a Real Device</h3>\n<p>Unlike Android, which offers a range of options like <span class=\"accent\">Android Virtual Device (AVD)</span> and other emulators that replicate actual hardware, iOS only provides Xcode’s Simulator. This tool mimics the software environment but not the hardware, and it uses x86 code for emulator binaries instead of ARM code. As a result, apps compiled for real devices won’t run on the simulator, making it ineffective for black box analysis and reverse engineering.\n<img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;@assets/images/2024-10-15-13-28-03.png&#x22;,&#x22;alt&#x22;:&#x22;XCode Simulator&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>Is there an iOS emulator? Yes, <span class=\"accent\">Corellium</span> is an option. However, it’s an enterprise SaaS solution with a per-user license model and does not offer a trial version. Therefore, for effective iOS app penetration testing, using a real iOS device is necessary to accurately identify and address vulnerabilities.</p>\n<p>Here is a useful article which will explain the differences between a real device and the iOS simulator. In short, here’s a summary of the key differences between testing an iOS app on the simulator versus a real device:</p>\n<ul>\n<li>Compilation Differences: Code is compiled for x86 architecture on the simulator and ARM architecture on real devices, meaning the compiled code you test in the simulator isn’t the same as what runs on a device.</li>\n<li>API Limitations: Certain APIs, such as those for push notifications, camera, and microphone, aren’t available in the simulator. Testing these features requires a real device.</li>\n<li>Performance Constraints: Real devices have less memory, storage, and processing power compared to the simulator. This can lead to noticeable performance differences, especially with resource-intensive tasks.</li>\n<li>Interaction Differences: Clicking on the simulator is different from tapping on a real device. Buttons that are easy to click on the simulator may be difficult to tap on a real device, affecting usability.</li>\n<li>Gesture Testing: Testing gestures like pinches and swipes are more challenging with a mouse pointer in the simulator than with actual fingers on a real device.</li>\n</ul>\n<h2 id=\"types-of-jailbreak\">Types of Jailbreak</h2>\n<p>Not all jailbreaks work in the same way. This page will take you through each type of jailbreak and explain how they work.\n(This section is copied from <a href=\"https://ios.cfw.guide\">ios.cfw.guide</a>)</p>\n<h3 id=\"1-untethered-jailbreaks\">1. Untethered Jailbreaks</h3>\n<p>Untethered jailbreaks can be considered the holy grail of all jailbreaks. They only require the exploit to be ran once either via a website, an app or a computer.\n<img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;@assets/images/2024-10-15-13-52-54.png&#x22;,&#x22;alt&#x22;:&#x22;untethe&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>After that, your device is fully jailbroken and won’t require any further action. The exploit will stay on a device even after you reboot it.\nUnfortunately, there hasn’t been a new untethered jailbreak for end users in a very long time, and it’s likely we won’t see one for even longer.\nThe only downside to an untethered jailbreak is that if something goes wrong, it could very well result in a bootloop requiring you to restore your device via iTunes or Finder (macOS Catalina or newer). The likelihood of this happening is low, but is indeed possible.\nA few examples of untethered jailbreaks are p0sixspwn and Pangu9.</p>\n<h3 id=\"2-semi-untethered-jailbreaks\">2. Semi-Untethered Jailbreaks</h3>\n<p>Semi-untethered jailbreaks have been the most popular type of jailbreak in recent years. This type of jailbreak requires an exploit to be executed every time you reboot or turn off your device.\n<img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;@assets/images/2024-10-15-13-53-10.png&#x22;,&#x22;alt&#x22;:&#x22;semi-unte&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>This jailbreak works by running the exploit through an app or website on the device itself. Due to the nature of how the exploit is ran, however, these jailbreaks are easily removable through their respective app.\nA few examples of semi-untethered jailbreaks include Taurine, Dopamine, and Odyssey.</p>\n<h3 id=\"3-semi-tethered-jailbreaks\">3. Semi-Tethered Jailbreaks</h3>\n<p>Semi-tethered jailbreaks are very similar to semi-untethered jailbreaks, however the exploit must be ran using a computer rather than using a sideloaded app.\n<img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;@assets/images/2024-10-15-13-53-27.png&#x22;,&#x22;alt&#x22;:&#x22;semi-te&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>Due to requiring a computer to rejailbreak after every reboot, most choose to use a semi-untethered jailbreak instead.\nA few examples of a semi-tethered jailbreak include palera1n and Odysseyra1n.</p>\n<h3 id=\"4-tethered-jailbreaks\">4. Tethered Jailbreaks</h3>\n<p>Tethered jailbreaks are not meant to be used by the general public. These exploits modify the device in a way that it requires a PC to even boot at all, even without a jailbreak.\nBecause of this, these tend to only be used by jailbreak developers getting ready for a newer version of iOS.</p>\n<h2 id=\"references\">References:</h2>\n<ul>\n<li><a href=\"https://quickbirdstudios.com/blog/ios-app-security-best-practices/\">https://quickbirdstudios.com/blog/ios-app-security-best-practices/</a></li>\n<li><a href=\"https://support.apple.com/en-vn/guide/security/sec15bfe098e/web\">https://support.apple.com/en-vn/guide/security/sec15bfe098e/web</a></li>\n<li><a href=\"https://ios.cfw.guide/types-of-jailbreak/\">https://ios.cfw.guide/types-of-jailbreak/</a></li>\n<li><a href=\"https://roadfiresoftware.com/2015/04/will-an-ios-app-run-on-a-device-the-same-way-it-does-on-the-ios-simulator/\">https://roadfiresoftware.com/2015/04/will-an-ios-app-run-on-a-device-the-same-way-it-does-on-the-ios-simulator/</a></li>\n</ul>");
	

				const frontmatter = {"title":"Thoughts on Jailbreak","author":"Hazy","pubDatetime":"2024-10-14T00:00:00.000Z","featured":false,"draft":false,"tags":["iOS","Mobile","jailbreak","security"],"description":"Jailbreaking an iPhone refers to bypassing the restrictions and limitations set by Apple's iOS."};
				const file = "/Users/4azy/lune/code/flouciel.github.io/src/content/blog/ios-jailbreak-type.md";
				const url = undefined;
				function rawContent() {
					return "\n## Why Need to Jailbreak\n### Apple’s App Sandbox\n\nOn iOS, every app operates within its own sandbox, ensuring it can only access data stored in its unique home directory. If an app needs to access data outside its directory - like files in iCloud or photos - it must use specific iOS services. This sandboxing means that other apps can't read or alter your app's data, keeping it secure and isolated.\n![app-sandbox](@assets/images/2024-10-15-11-31-39.png)\n\nApple’s App Sandbox leverages UNIX user permissions to ensure apps run with the less privileged <span class=\"accent\">\"mobile\"</span> user. Anything outside the app’s home directory is mounted as read-only. \niOS includes robust measures to prevent memory-related security vulnerabilities. One key method is <span class=\"accent\">Address Space Layout Randomization (ASLR)</span>, which randomizes the memory regions assigned to each app every time it starts. This makes it much harder for attackers to exploit memory corruption bugs. Additionally, memory pages are marked as non-executable using <span class=\"accent\">ARM’s Execute Never (XN)</span> feature, which prevents malicious code from being executed\n\n### Benefits of Jailbreak\nJailbreaking is about breaking free from the constraints imposed by Apple's App Sandbox and security features. It removes these limitations, allowing users to control their devices fully. This includes:\n- Access to system files\n- Installation of unauthorized apps\n- Ability to tweak system settings that are normally restricted\nIn short, jailbreaking provides root access, enabling a level of customization and functionality that Apple's standard security doesn’t permit.\n\n### Drawback\n\n> **Warning**: Jailbreaking your iDevice greatly compromises its security. It is not advisable to perform this on your primary device. A jailbroken device is for penetration testing only, not for regular use.\n\n- Security Vulnerabilities: Bypassing Apple’s security can expose your device to malware and unauthorized access.\n- Stability Issues: Jailbreaking may lead to system instability or crashes due to untested modifications.\n\n### Run on a Real Device\nUnlike Android, which offers a range of options like <span class=\"accent\">Android Virtual Device (AVD)</span> and other emulators that replicate actual hardware, iOS only provides Xcode’s Simulator. This tool mimics the software environment but not the hardware, and it uses x86 code for emulator binaries instead of ARM code. As a result, apps compiled for real devices won't run on the simulator, making it ineffective for black box analysis and reverse engineering.\n![XCode Simulator](@assets/images/2024-10-15-13-28-03.png)\n\nIs there an iOS emulator? Yes, <span class=\"accent\">Corellium</span> is an option. However, it's an enterprise SaaS solution with a per-user license model and does not offer a trial version. Therefore, for effective iOS app penetration testing, using a real iOS device is necessary to accurately identify and address vulnerabilities.\n\nHere is a useful article which will explain the differences between a real device and the iOS simulator. In short, here’s a summary of the key differences between testing an iOS app on the simulator versus a real device:\n- Compilation Differences: Code is compiled for x86 architecture on the simulator and ARM architecture on real devices, meaning the compiled code you test in the simulator isn't the same as what runs on a device.\n- API Limitations: Certain APIs, such as those for push notifications, camera, and microphone, aren't available in the simulator. Testing these features requires a real device.\n- Performance Constraints: Real devices have less memory, storage, and processing power compared to the simulator. This can lead to noticeable performance differences, especially with resource-intensive tasks.\n- Interaction Differences: Clicking on the simulator is different from tapping on a real device. Buttons that are easy to click on the simulator may be difficult to tap on a real device, affecting usability.\n- Gesture Testing: Testing gestures like pinches and swipes are more challenging with a mouse pointer in the simulator than with actual fingers on a real device.\n\n## Types of Jailbreak\nNot all jailbreaks work in the same way. This page will take you through each type of jailbreak and explain how they work.\n(This section is copied from [ios.cfw.guide](https://ios.cfw.guide))\n### 1. Untethered Jailbreaks\nUntethered jailbreaks can be considered the holy grail of all jailbreaks. They only require the exploit to be ran once either via a website, an app or a computer.\n![untethe](@assets/images/2024-10-15-13-52-54.png)\n\nAfter that, your device is fully jailbroken and won't require any further action. The exploit will stay on a device even after you reboot it.\nUnfortunately, there hasn't been a new untethered jailbreak for end users in a very long time, and it's likely we won't see one for even longer.\nThe only downside to an untethered jailbreak is that if something goes wrong, it could very well result in a bootloop requiring you to restore your device via iTunes or Finder (macOS Catalina or newer). The likelihood of this happening is low, but is indeed possible.\nA few examples of untethered jailbreaks are p0sixspwn and Pangu9.\n\n### 2. Semi-Untethered Jailbreaks\nSemi-untethered jailbreaks have been the most popular type of jailbreak in recent years. This type of jailbreak requires an exploit to be executed every time you reboot or turn off your device.\n![semi-unte](@assets/images/2024-10-15-13-53-10.png)\n\nThis jailbreak works by running the exploit through an app or website on the device itself. Due to the nature of how the exploit is ran, however, these jailbreaks are easily removable through their respective app.\nA few examples of semi-untethered jailbreaks include Taurine, Dopamine, and Odyssey.\n\n### 3. Semi-Tethered Jailbreaks\nSemi-tethered jailbreaks are very similar to semi-untethered jailbreaks, however the exploit must be ran using a computer rather than using a sideloaded app.\n![semi-te](@assets/images/2024-10-15-13-53-27.png)\n\nDue to requiring a computer to rejailbreak after every reboot, most choose to use a semi-untethered jailbreak instead.\nA few examples of a semi-tethered jailbreak include palera1n and Odysseyra1n.\n### 4. Tethered Jailbreaks\nTethered jailbreaks are not meant to be used by the general public. These exploits modify the device in a way that it requires a PC to even boot at all, even without a jailbreak.\nBecause of this, these tend to only be used by jailbreak developers getting ready for a newer version of iOS.\n\n## References:\n- https://quickbirdstudios.com/blog/ios-app-security-best-practices/\n- https://support.apple.com/en-vn/guide/security/sec15bfe098e/web\n- https://ios.cfw.guide/types-of-jailbreak/\n- https://roadfiresoftware.com/2015/04/will-an-ios-app-run-on-a-device-the-same-way-it-does-on-the-ios-simulator/";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"why-need-to-jailbreak","text":"Why Need to Jailbreak"},{"depth":3,"slug":"apples-app-sandbox","text":"Apple’s App Sandbox"},{"depth":3,"slug":"benefits-of-jailbreak","text":"Benefits of Jailbreak"},{"depth":3,"slug":"drawback","text":"Drawback"},{"depth":3,"slug":"run-on-a-real-device","text":"Run on a Real Device"},{"depth":2,"slug":"types-of-jailbreak","text":"Types of Jailbreak"},{"depth":3,"slug":"1-untethered-jailbreaks","text":"1. Untethered Jailbreaks"},{"depth":3,"slug":"2-semi-untethered-jailbreaks","text":"2. Semi-Untethered Jailbreaks"},{"depth":3,"slug":"3-semi-tethered-jailbreaks","text":"3. Semi-Tethered Jailbreaks"},{"depth":3,"slug":"4-tethered-jailbreaks","text":"4. Tethered Jailbreaks"},{"depth":2,"slug":"references","text":"References:"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
