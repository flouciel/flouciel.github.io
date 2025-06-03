import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate, s as spreadAttributes } from './astro/server_Q3wgTVI0.mjs';
import { g as getImage } from './_astro_assets_BtQnzTra.mjs';
import 'clsx';

const Astro__1lgl4a = new Proxy({"src":"/_astro/2024-10-15-15-32-00.D8WigzxP.png","width":1536,"height":498,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/4azy/lune/code/flouciel.github.io/src/assets/images/2024-10-15-15-32-00.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/4azy/lune/code/flouciel.github.io/src/assets/images/2024-10-15-15-32-00.png");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "@assets/images/2024-10-15-15-32-00\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "@assets/images/2024-10-15-15-32-00.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__1lgl4a, ...props});
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
			const html = await updateImageReferences("<h4 id=\"tldr\">TL;DR:</h4>\n<p>In a straightforward way, I’ll tell you a secret to obtaining IPA files the right way: “Ask your mobile developer”.</p>\n<p><em>Joke, but true.</em></p>\n<p>In mobile security audits, clients and developers usually hand over the IPA file directly. They might email it to you or provide access through development-focused distribution channels like TestFlight or Visual Studio App Center.</p>\n<p>But if you’re working on your own side project and the app is only available on the App Store, you’ll need to explore alternative ways to acquire the IPA:</p>\n<blockquote>\n<p><a href=\"https://github.com/majd/ipatool\">https://github.com/majd/ipatool</a></p>\n</blockquote>\n<h3 id=\"installation\">Installation:</h3>\n<p>Via Homebrew</p>\n<pre class=\"astro-code one-dark-pro\" style=\"background-color:#282c34;color:#abb2bf; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;\" tabindex=\"0\" data-language=\"shell\"><code><span class=\"line\"><span style=\"color:#61AFEF\">$</span><span style=\"color:#98C379\"> brew</span><span style=\"color:#98C379\"> tap</span><span style=\"color:#98C379\"> majd/repo</span></span>\n<span class=\"line\"><span style=\"color:#61AFEF\">$</span><span style=\"color:#98C379\"> brew</span><span style=\"color:#98C379\"> install</span><span style=\"color:#98C379\"> ipatool</span></span>\n<span class=\"line\"></span></code></pre>\n<h3 id=\"usage\">Usage:</h3>\n<p>Must use the Apple ID credential\n<img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;@assets/images/2024-10-15-15-32-00.png&#x22;,&#x22;alt&#x22;:&#x22;ipatool-cli&#x22;,&#x22;index&#x22;:0}\"></p>\n<pre class=\"astro-code one-dark-pro\" style=\"background-color:#282c34;color:#abb2bf; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;\" tabindex=\"0\" data-language=\"shell\"><code><span class=\"line\"><span style=\"color:#61AFEF\">$</span><span style=\"color:#98C379\"> ipatool</span><span style=\"color:#98C379\"> auth</span></span>\n<span class=\"line\"><span style=\"color:#61AFEF\">$</span><span style=\"color:#98C379\"> ipatool</span><span style=\"color:#98C379\"> search</span><span style=\"color:#98C379\"> Spotify</span></span>\n<span class=\"line\"><span style=\"color:#61AFEF\">$</span><span style=\"color:#98C379\"> ipatool</span><span style=\"color:#98C379\"> download</span><span style=\"color:#D19A66\"> -b</span><span style=\"color:#98C379\"> com.spotify.client</span><span style=\"color:#D19A66\"> -o</span><span style=\"color:#98C379\"> spotify.ipa</span></span>\n<span class=\"line\"></span></code></pre>\n<h2 id=\"if-you-need-extract-ipa-from-jailbroken-device\">if you need extract IPA from jailbroken device</h2>\n<p>The traditional method to extract decrypted IPA files from a jailbroken iOS device involves using frida-ios-dump. This tool relies on Frida to dump and decrypt apps directly from the device.</p>\n<blockquote>\n<p><a href=\"https://github.com/AloneMonkey/frida-ios-dump\">https://github.com/AloneMonkey/frida-ios-dump</a></p>\n</blockquote>\n<p>But I encountered many issues when dealing with this tool, hence I switch to Bagbak</p>\n<blockquote>\n<p><a href=\"https://github.com/ChiChou/bagbak\">https://github.com/ChiChou/bagbak</a></p>\n</blockquote>\n<pre class=\"astro-code one-dark-pro\" style=\"background-color:#282c34;color:#abb2bf; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;\" tabindex=\"0\" data-language=\"shell\"><code><span class=\"line\"><span style=\"color:#61AFEF\">npm</span><span style=\"color:#98C379\"> install</span><span style=\"color:#D19A66\"> -g</span><span style=\"color:#98C379\"> bagbak</span></span>\n<span class=\"line\"></span></code></pre>\n<p>Use bagbak to decrypt the application and extract it from the iPhone. (Remmember to set SSH username to root, password is alpine)</p>\n<pre class=\"astro-code one-dark-pro\" style=\"background-color:#282c34;color:#abb2bf; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;\" tabindex=\"0\" data-language=\"shell\"><code><span class=\"line\"><span style=\"color:#C678DD\">export</span><span style=\"color:#E06C75\"> SSH_USERNAME</span><span style=\"color:#56B6C2\">=</span><span style=\"color:#E06C75\">root</span></span>\n<span class=\"line\"><span style=\"color:#61AFEF\">✦</span><span style=\"color:#98C379\"> ➜</span><span style=\"color:#98C379\"> bagbak</span><span style=\"color:#98C379\"> com.apple.iBooks</span></span>\n<span class=\"line\"><span style=\"color:#ABB2BF\">[info] pulling app bundle from device, please be patient</span></span>\n<span class=\"line\"><span style=\"color:#ABB2BF\">[info] downloaded 682 files and 511 folders</span></span>\n<span class=\"line\"><span style=\"color:#ABB2BF\">[info] app bundle downloaded</span></span>\n<span class=\"line\"><span style=\"color:#56B6C2\">....</span></span>\n<span class=\"line\"><span style=\"color:#61AFEF\">Saved</span><span style=\"color:#98C379\"> to</span><span style=\"color:#98C379\"> com.apple.iBooks-9.4.ipa</span></span>\n<span class=\"line\"></span></code></pre>");
	

				const frontmatter = {"title":"How to Acquiring IPA File","author":"Hazy","pubDatetime":"2024-05-02T00:00:00.000Z","featured":false,"draft":false,"tags":["iOS","Mobile","IPA","security"],"description":"The title says it all."};
				const file = "/Users/4azy/lune/code/flouciel.github.io/src/content/blog/acquiring-ipa.md";
				const url = undefined;
				function rawContent() {
					return "\n#### TL;DR:\nIn a straightforward way, I'll tell you a secret to obtaining IPA files the right way: \"Ask your mobile developer\".\n\n*Joke, but true.*\n\nIn mobile security audits, clients and developers usually hand over the IPA file directly. They might email it to you or provide access through development-focused distribution channels like TestFlight or Visual Studio App Center.\n\nBut if you're working on your own side project and the app is only available on the App Store, you'll need to explore alternative ways to acquire the IPA:\n\n> https://github.com/majd/ipatool\n\n### Installation: \n\nVia Homebrew\n\n``` shell\n$ brew tap majd/repo\n$ brew install ipatool\n```\n### Usage:\n\nMust use the Apple ID credential\n![ipatool-cli](@assets/images/2024-10-15-15-32-00.png)\n\n``` shell\n$ ipatool auth\n$ ipatool search Spotify\n$ ipatool download -b com.spotify.client -o spotify.ipa\n```\n## if you need extract IPA from jailbroken device \n\nThe traditional method to extract decrypted IPA files from a jailbroken iOS device involves using frida-ios-dump. This tool relies on Frida to dump and decrypt apps directly from the device.\n\n> https://github.com/AloneMonkey/frida-ios-dump\n\nBut I encountered many issues when dealing with this tool, hence I switch to Bagbak\n\n> https://github.com/ChiChou/bagbak\n\n``` shell\nnpm install -g bagbak\n```\n\nUse bagbak to decrypt the application and extract it from the iPhone. (Remmember to set SSH username to root, password is alpine)\n\n```shell\nexport SSH_USERNAME=root\n✦ ➜ bagbak com.apple.iBooks\n[info] pulling app bundle from device, please be patient\n[info] downloaded 682 files and 511 folders\n[info] app bundle downloaded\n....\nSaved to com.apple.iBooks-9.4.ipa\n```";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":4,"slug":"tldr","text":"TL;DR:"},{"depth":3,"slug":"installation","text":"Installation:"},{"depth":3,"slug":"usage","text":"Usage:"},{"depth":2,"slug":"if-you-need-extract-ipa-from-jailbroken-device","text":"if you need extract IPA from jailbroken device"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
