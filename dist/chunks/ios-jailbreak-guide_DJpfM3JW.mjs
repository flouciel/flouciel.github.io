import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate, s as spreadAttributes } from './astro/server_Q3wgTVI0.mjs';
import { g as getImage } from './_astro_assets_BtQnzTra.mjs';
import 'clsx';

const Astro__Z24AMsp = new Proxy({"src":"/_astro/2024-10-15-15-07-59.VISGEQuk.png","width":1480,"height":868,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/4azy/lune/code/flouciel.github.io/src/assets/images/2024-10-15-15-07-59.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/4azy/lune/code/flouciel.github.io/src/assets/images/2024-10-15-15-07-59.png");
							return target[name];
						}
					});

const Astro__Z949Uf = new Proxy({"src":"/_astro/2024-10-15-15-08-18.rrZyAjDw.png","width":1504,"height":1198,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/4azy/lune/code/flouciel.github.io/src/assets/images/2024-10-15-15-08-18.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/4azy/lune/code/flouciel.github.io/src/assets/images/2024-10-15-15-08-18.png");
							return target[name];
						}
					});

const Astro__1DalWj = new Proxy({"src":"/_astro/2024-10-15-15-26-22.DGNEEXpu.png","width":591,"height":1280,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/4azy/lune/code/flouciel.github.io/src/assets/images/2024-10-15-15-26-22.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/4azy/lune/code/flouciel.github.io/src/assets/images/2024-10-15-15-26-22.png");
							return target[name];
						}
					});

const Astro__Z2swtSc = new Proxy({"src":"/_astro/2024-10-15-14-45-56.C3pRs5sk.png","width":704,"height":506,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/4azy/lune/code/flouciel.github.io/src/assets/images/2024-10-15-14-45-56.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/4azy/lune/code/flouciel.github.io/src/assets/images/2024-10-15-14-45-56.png");
							return target[name];
						}
					});

const Astro__ZsMwgE = new Proxy({"src":"/_astro/2024-10-15-14-46-36.D_5LgACi.png","width":710,"height":510,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/4azy/lune/code/flouciel.github.io/src/assets/images/2024-10-15-14-46-36.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/4azy/lune/code/flouciel.github.io/src/assets/images/2024-10-15-14-46-36.png");
							return target[name];
						}
					});

const Astro__1tVmAe = new Proxy({"src":"/_astro/2024-10-15-14-47-07.Dv74GhH9.png","width":692,"height":472,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/4azy/lune/code/flouciel.github.io/src/assets/images/2024-10-15-14-47-07.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/4azy/lune/code/flouciel.github.io/src/assets/images/2024-10-15-14-47-07.png");
							return target[name];
						}
					});

const Astro__1xB986 = new Proxy({"src":"/_astro/2024-10-15-14-47-20.xV1AcOF0.png","width":736,"height":908,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/4azy/lune/code/flouciel.github.io/src/assets/images/2024-10-15-14-47-20.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/4azy/lune/code/flouciel.github.io/src/assets/images/2024-10-15-14-47-20.png");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "@assets/images/2024-10-15-15-07-59\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "@assets/images/2024-10-15-15-07-59.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__Z24AMsp, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "@assets/images/2024-10-15-15-08-18\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "@assets/images/2024-10-15-15-08-18.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__Z949Uf, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "@assets/images/2024-10-15-15-26-22\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "@assets/images/2024-10-15-15-26-22.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__1DalWj, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "@assets/images/2024-10-15-14-45-56\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "@assets/images/2024-10-15-14-45-56.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__Z2swtSc, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "@assets/images/2024-10-15-14-46-36\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "@assets/images/2024-10-15-14-46-36.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__ZsMwgE, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "@assets/images/2024-10-15-14-47-07\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "@assets/images/2024-10-15-14-47-07.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__1tVmAe, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "@assets/images/2024-10-15-14-47-20\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "@assets/images/2024-10-15-14-47-20.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__1xB986, ...props});
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
			const html = await updateImageReferences("<p>Recently, just came back to conduct a security testing for our internal mobile apps at work. I needed to set up a testing environment, buy new devices, root them all, and do more. This is a quick wrap-up of what I did. Also, I’m biased toward the iFan, so I’m not sure if we’ll have a Android root series. I can’t promise.</p>\n<p>So here we are, a guide to jailbreaking an iPhone. If you’re new to the term jailbreaking, take a few seconds to check out my <a href=\"/posts/ios-jailbreak-type\">other post</a>.</p>\n<h2 id=\"pre-jailbreak\">Pre-jailbreak</h2>\n<p>Before we get started, let’s check what I have: an iPhone X running iOS 16.7.2. I chose this device because it strikes a balance, new enough to test modern apps but not too new to tackle the difficulties of jailbreaking. Then, select the appropriate method for jailbreaking at <a href=\"https://ios.cfw.guide/get-started\">ios.cfw.guide.</a></p>\n<h2 id=\"jailbreak-with-palera1n\">Jailbreak with <a href=\"https://palera.in/\">Palera1n</a></h2>\n<pre class=\"astro-code one-dark-pro\" style=\"background-color:#282c34;color:#abb2bf; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;\" tabindex=\"0\" data-language=\"console\"><code><span class=\"line\"><span style=\"color:#ABB2BF\">- palera1n</span></span>\n<span class=\"line\"><span style=\"color:#ABB2BF\">- MacOS</span></span>\n<span class=\"line\"><span style=\"color:#ABB2BF\">- iPhone X, version 16.7.2</span></span>\n<span class=\"line\"><span style=\"color:#ABB2BF\">- Must use USB-A to lighting cable due to compatibility issues when entering DFU mode. </span></span>\n<span class=\"line\"></span></code></pre>\n<p>Step 1. Remove Passcode in iPhone. Connect iPhone to Mac with a cable, then Click <span class=\"accent\">“Trust”</span> this computer.</p>\n<p>Step 2: Install palera1n tool</p>\n<pre class=\"astro-code one-dark-pro\" style=\"background-color:#282c34;color:#abb2bf; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;\" tabindex=\"0\" data-language=\"bash\"><code><span class=\"line\"><span style=\"color:#61AFEF\">sudo</span><span style=\"color:#98C379\"> /bin/sh</span><span style=\"color:#D19A66\"> -c</span><span style=\"color:#98C379\"> \"$(</span><span style=\"color:#61AFEF\">curl</span><span style=\"color:#D19A66\"> -fsSL</span><span style=\"color:#98C379\"> https://static.palera.in/scripts/install.sh)\"</span></span>\n<span class=\"line\"></span></code></pre>\n<p>Step 3: Run palera1n on command line\n<img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;@assets/images/2024-10-15-15-07-59.png&#x22;,&#x22;alt&#x22;:&#x22;palera1n-cli-1&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>Step 4: Enter and follow the instruction\n<img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;@assets/images/2024-10-15-15-08-18.png&#x22;,&#x22;alt&#x22;:&#x22;palera1n-cli-2&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>After complete, this will install <span class=\"accent\">paler1n</span> and <span class=\"accent\">sileo</span> app on the device.\n<img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;@assets/images/2024-10-15-15-26-22.png&#x22;,&#x22;alt&#x22;:&#x22;palera1n-result&#x22;,&#x22;index&#x22;:0}\"></p>\n<h2 id=\"troubleshooting\">Troubleshooting</h2>\n<p>The first issue I encountered was that SSH to iPhone on port 22 didn’t work due to changes in Palera1n, so I had to use an alternative method.\n(src: Q&#x26;A on palera1n.in)</p>\n<blockquote>\n<p>password: root/mobile is alpine</p>\n<blockquote>\n</blockquote>\n<p>ssh root@127.0.0.1 -o “StrictHostKeyChecking=no” -o “UserKnownHostsFile=/dev/null” -o “ProxyCommand=inetcat 44”</p>\n</blockquote>\n<p>If cannot use <code>sudo</code> , edit file <code>ssh_config</code></p>\n<pre class=\"astro-code one-dark-pro\" style=\"background-color:#282c34;color:#abb2bf; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;\" tabindex=\"0\" data-language=\"shell\"><code><span class=\"line\"><span style=\"color:#61AFEF\">find</span><span style=\"color:#98C379\"> /</span><span style=\"color:#D19A66\"> -name</span><span style=\"color:#98C379\"> sshd_config</span><span style=\"color:#D19A66\"> -print</span></span>\n<span class=\"line\"><span style=\"color:#61AFEF\">use</span><span style=\"color:#98C379\"> vim</span><span style=\"color:#ABB2BF\"> &#x3C;</span><span style=\"color:#98C379\">sshconffi</span><span style=\"color:#ABB2BF\">g></span></span>\n<span class=\"line\"><span style=\"color:#61AFEF\">PasswordAuthentication</span><span style=\"color:#98C379\"> yes</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#61AFEF\">--------------------</span></span>\n<span class=\"line\"><span style=\"color:#C678DD\">then</span><span style=\"color:#61AFEF\"> with</span><span style=\"color:#98C379\"> sudo</span></span>\n<span class=\"line\"><span style=\"color:#61AFEF\">find</span><span style=\"color:#98C379\"> /</span><span style=\"color:#D19A66\"> -name</span><span style=\"color:#98C379\"> sudo</span><span style=\"color:#D19A66\"> -print</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#61AFEF\">Create</span><span style=\"color:#98C379\"> a</span><span style=\"color:#98C379\"> profile</span><span style=\"color:#98C379\"> in</span><span style=\"color:#98C379\"> ./</span></span>\n<span class=\"line\"><span style=\"color:#61AFEF\">vim</span><span style=\"color:#98C379\"> .profile</span></span>\n<span class=\"line\"><span style=\"color:#C678DD\">export</span><span style=\"color:#E06C75\"> PATH</span><span style=\"color:#56B6C2\">=</span><span style=\"color:#98C379\">\"/private/preboot/[digit_string]/jb-xxxxxx/procursus/usr/bin:</span><span style=\"color:#E06C75\">$PATH</span><span style=\"color:#98C379\">\"</span></span>\n<span class=\"line\"><span style=\"color:#56B6C2\">source</span><span style=\"color:#98C379\"> .profile</span></span>\n<span class=\"line\"></span></code></pre>\n<hr>\n<h2 id=\"revised-version-of-the-old-method-checkra1n\">Revised version of the old method: <a href=\"https://checkra.in/\">Checkra1n</a></h2>\n<pre class=\"astro-code one-dark-pro\" style=\"background-color:#282c34;color:#abb2bf; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;\" tabindex=\"0\" data-language=\"console\"><code><span class=\"line\"><span style=\"color:#ABB2BF\">- Checkra1n: 0.12.3 version</span></span>\n<span class=\"line\"><span style=\"color:#ABB2BF\">- MacOS</span></span>\n<span class=\"line\"><span style=\"color:#ABB2BF\">- iPhone X, version 14.8.1</span></span>\n<span class=\"line\"><span style=\"color:#ABB2BF\">- USB-A cable</span></span>\n<span class=\"line\"></span></code></pre>\n<p>Step 1. Remove Passcode in iPhone. Connect iPhone to Mac with a cable, then Click <span class=\"accent\">“Trust”</span> this computer.</p>\n<p>Step 2. Install Checkra1n tools on your Mac. In version 0.12.3, refer to the notes.</p>\n<blockquote>\n<p>A11 devices on iOS 14.0 and above require removing the passcode and enabling “Skip A11 BPR check” in the options. This is not recommended, but it’s there.</p>\n</blockquote>\n<p>Step 3. Open Checkra1n tool, then config with option\n<img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;@assets/images/2024-10-15-14-45-56.png&#x22;,&#x22;alt&#x22;:&#x22;checkra1n-config&#x22;,&#x22;index&#x22;:0}\"></p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;@assets/images/2024-10-15-14-46-36.png&#x22;,&#x22;alt&#x22;:&#x22;checkra1n-config-2&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>Step 4. Enter the DFU mode, then follow instruction on screen</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;@assets/images/2024-10-15-14-47-07.png&#x22;,&#x22;alt&#x22;:&#x22;dfu-mode&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>Step 5. Once booted, will have the installed Checkra1n application on iPhone. This means we jailbreak successfully. Finally, we can install Cydia inside Checkra1n app.</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;@assets/images/2024-10-15-14-47-20.png&#x22;,&#x22;alt&#x22;:&#x22;cydia-loader&#x22;,&#x22;index&#x22;:0}\"></p>\n<h2 id=\"references\">References:</h2>\n<ul>\n<li><a href=\"https://canijailbreak.com/\">https://canijailbreak.com/</a></li>\n<li><a href=\"https://www.theiphonewiki.com/\">https://www.theiphonewiki.com/</a></li>\n<li><a href=\"https://www.reddit.com/r/jailbreak/\">https://www.reddit.com/r/jailbreak/</a></li>\n<li><a href=\"https://ios.cfw.guide/\">https://ios.cfw.guide/</a></li>\n</ul>");
	

				const frontmatter = {"title":"Hello iOS. Can I \"root\" an iPhone?","author":"Hazy","pubDatetime":"2024-05-02T00:00:00.000Z","featured":false,"draft":false,"tags":["iOS","Mobile","jailbreak","security"],"description":"Switching from Android to iOS, goodbye root, any challenges and restrictions? How to break them."};
				const file = "/Users/4azy/lune/code/flouciel.github.io/src/content/blog/ios-jailbreak-guide.md";
				const url = undefined;
				function rawContent() {
					return "\nRecently, just came back to conduct a security testing for our internal mobile apps at work. I needed to set up a testing environment, buy new devices, root them all, and do more. This is a quick wrap-up of what I did. Also, I’m biased toward the iFan, so I’m not sure if we’ll have a Android root series. I can’t promise.\n\nSo here we are, a guide to jailbreaking an iPhone. If you're new to the term jailbreaking, take a few seconds to check out my [other post](/posts/ios-jailbreak-type). \n\n## Pre-jailbreak\n\nBefore we get started, let’s check what I have: an iPhone X running iOS 16.7.2. I chose this device because it strikes a balance, new enough to test modern apps but not too new to tackle the difficulties of jailbreaking. Then, select the appropriate method for jailbreaking at [ios.cfw.guide.](https://ios.cfw.guide/get-started)\n\n## Jailbreak with [Palera1n](https://palera.in/)\n```console\n- palera1n\n- MacOS\n- iPhone X, version 16.7.2\n- Must use USB-A to lighting cable due to compatibility issues when entering DFU mode. \n```\n\nStep 1. Remove Passcode in iPhone. Connect iPhone to Mac with a cable, then Click <span class=\"accent\">“Trust”</span> this computer.\n\nStep 2: Install palera1n tool\n\n```bash\nsudo /bin/sh -c \"$(curl -fsSL https://static.palera.in/scripts/install.sh)\"\n```\nStep 3: Run palera1n on command line\n![palera1n-cli-1](@assets/images/2024-10-15-15-07-59.png)\n\nStep 4: Enter and follow the instruction\n![palera1n-cli-2](@assets/images/2024-10-15-15-08-18.png)\n\nAfter complete, this will install <span class=\"accent\">paler1n</span> and <span class=\"accent\">sileo</span> app on the device.\n![palera1n-result](@assets/images/2024-10-15-15-26-22.png)\n\n## Troubleshooting\nThe first issue I encountered was that SSH to iPhone on port 22 didn’t work due to changes in Palera1n, so I had to use an alternative method.\n(src: Q&A on palera1n.in)\n> password: root/mobile is alpine\n> > \n> ssh root@127.0.0.1 -o \"StrictHostKeyChecking=no\" -o \"UserKnownHostsFile=/dev/null\" -o \"ProxyCommand=inetcat 44\"\n\nIf cannot use `sudo` , edit file `ssh_config`\n\n```shell\nfind / -name sshd_config -print\nuse vim <sshconffig>\nPasswordAuthentication yes\n\n--------------------\nthen with sudo\nfind / -name sudo -print\n\nCreate a profile in ./\nvim .profile\nexport PATH=\"/private/preboot/[digit_string]/jb-xxxxxx/procursus/usr/bin:$PATH\"\nsource .profile\n```\n---\n\n## Revised version of the old method: [Checkra1n](https://checkra.in/)\n\n```console\n- Checkra1n: 0.12.3 version\n- MacOS\n- iPhone X, version 14.8.1\n- USB-A cable\n```\nStep 1. Remove Passcode in iPhone. Connect iPhone to Mac with a cable, then Click <span class=\"accent\">“Trust”</span> this computer.\n\nStep 2. Install Checkra1n tools on your Mac. In version 0.12.3, refer to the notes.\n> A11 devices on iOS 14.0 and above require removing the passcode and enabling “Skip A11 BPR check” in the options. This is not recommended, but it’s there.\n  \nStep 3. Open Checkra1n tool, then config with option\n![checkra1n-config](@assets/images/2024-10-15-14-45-56.png)\n\n![checkra1n-config-2](@assets/images/2024-10-15-14-46-36.png)\n\nStep 4. Enter the DFU mode, then follow instruction on screen\n\n![dfu-mode](@assets/images/2024-10-15-14-47-07.png)\n\n\nStep 5. Once booted, will have the installed Checkra1n application on iPhone. This means we jailbreak successfully. Finally, we can install Cydia inside Checkra1n app.\n\n![cydia-loader](@assets/images/2024-10-15-14-47-20.png)\n\n## References:\n- https://canijailbreak.com/\n- https://www.theiphonewiki.com/\n- https://www.reddit.com/r/jailbreak/\n- https://ios.cfw.guide/";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"pre-jailbreak","text":"Pre-jailbreak"},{"depth":2,"slug":"jailbreak-with-palera1n","text":"Jailbreak with Palera1n"},{"depth":2,"slug":"troubleshooting","text":"Troubleshooting"},{"depth":2,"slug":"revised-version-of-the-old-method-checkra1n","text":"Revised version of the old method: Checkra1n"},{"depth":2,"slug":"references","text":"References:"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
