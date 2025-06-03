import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate, s as spreadAttributes } from './astro/server_Q3wgTVI0.mjs';
import { g as getImage } from './_astro_assets_BtQnzTra.mjs';
import 'clsx';

const Astro__Z1uV4B6 = new Proxy({"src":"/_astro/2024-10-15-16-28-06.BG_dnkpF.png","width":1065,"height":662,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/4azy/lune/code/flouciel.github.io/src/assets/images/2024-10-15-16-28-06.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/4azy/lune/code/flouciel.github.io/src/assets/images/2024-10-15-16-28-06.png");
							return target[name];
						}
					});

const Astro__1FUGYo = new Proxy({"src":"/_astro/2024-10-15-16-27-59.CdB3q7CR.png","width":1060,"height":1258,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/4azy/lune/code/flouciel.github.io/src/assets/images/2024-10-15-16-27-59.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/4azy/lune/code/flouciel.github.io/src/assets/images/2024-10-15-16-27-59.png");
							return target[name];
						}
					});

const Astro__1Fo9rS = new Proxy({"src":"/_astro/2024-10-15-16-27-51.DAuVFDxj.png","width":912,"height":863,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/4azy/lune/code/flouciel.github.io/src/assets/images/2024-10-15-16-27-51.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/4azy/lune/code/flouciel.github.io/src/assets/images/2024-10-15-16-27-51.png");
							return target[name];
						}
					});

const Astro__1Ds9SU = new Proxy({"src":"/_astro/2024-10-15-16-27-43.B9AJ9T_x.png","width":700,"height":214,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/4azy/lune/code/flouciel.github.io/src/assets/images/2024-10-15-16-27-43.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/4azy/lune/code/flouciel.github.io/src/assets/images/2024-10-15-16-27-43.png");
							return target[name];
						}
					});

const Astro__1Bs69g = new Proxy({"src":"/_astro/2024-10-15-16-27-34.BG7NxO6L.png","width":1536,"height":1064,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/4azy/lune/code/flouciel.github.io/src/assets/images/2024-10-15-16-27-34.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/4azy/lune/code/flouciel.github.io/src/assets/images/2024-10-15-16-27-34.png");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "@assets/images/2024-10-15-16-28-06\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "@assets/images/2024-10-15-16-28-06.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__Z1uV4B6, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "@assets/images/2024-10-15-16-27-59\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "@assets/images/2024-10-15-16-27-59.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__1FUGYo, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "@assets/images/2024-10-15-16-27-51\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "@assets/images/2024-10-15-16-27-51.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__1Fo9rS, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "@assets/images/2024-10-15-16-27-43\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "@assets/images/2024-10-15-16-27-43.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__1Ds9SU, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "@assets/images/2024-10-15-16-27-34\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "@assets/images/2024-10-15-16-27-34.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__1Bs69g, ...props});
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
			const html = await updateImageReferences("<p>When I first started security testing iOS apps, I didn’t really care about diving deep into the details of IPA file. I was more focused on finding vulnerabilities and running basic tests. But that changed when a QA engineer asked me during a mobile security training session: “What exactly is inside an IPA app?”.</p>\n<p>Maybe this blog post will answer her question and serve as a note for myself.</p>\n<h2 id=\"ipa-ios-app-store-package\">IPA (iOS App Store Package)</h2>\n<p>iOS apps are packaged as IPA files, which are ZIP-compressed archives containing the app’s binary, resources, and metadata needed for execution on iOS devices. Similar to Android’s APK, IPA files are specific to Apple’s iOS devices and are used to install apps on iPhones, iPads, and iPods.</p>\n<h2 id=\"ipa-structure\">IPA Structure</h2>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>iTunesArtwork</td><td>A 512x512 pixel PNG image used as app’s icon that shows up on iTunes, and App Store.</td></tr><tr><td>iTunesMetadata.plist</td><td>A property list file that contains developer information like developer name, ID, copyright information, application name etc.</td></tr><tr><td>META-INF</td><td>Subdirectory within the IPA file stores meta-information. Inside, you will find two more files: <br> - com.apple.FixedZipMetadata.bin <br> - com.apple.ZipMetadata.plist</td></tr><tr><td>WatchKitSupport/WK</td><td>The framework simplifies app development for watchOS apps, including managing background tasks, extended runtime sessions, Siri intents, and accessing user information about Apple Watch</td></tr><tr><td>Payload</td><td>Folder that contains the application data.</td></tr><tr><td>Application Binary</td><td>The executable file containing the application’s code. Same name with actual application name. The complete binary analysis is performed on this application binary.</td></tr><tr><td>Mobile Provision file</td><td>iOS apps are typically installed via the App Store, but for beta testing or ad hoc distribution, a mobile provisioning profile is included to allow installation on specific devices.</td></tr><tr><td>Code Signature</td><td>Check the integrity of the app when the application was released. Any kind of editing or deletion will invalidate the signature. Any changes that are made to the .app file require that the whole package be re-signed.</td></tr><tr><td>Bundled Resource Files</td><td>Images, Videos, Sounds, HTML, Property list files, etc. which are required by the application to be installed on the mobile device.</td></tr></tbody></table>\n<h2 id=\"payload-a-closer-look\">Payload: A Closer Look</h2>\n<p>In the Payload folder, we have a .app folder representing the app’s name. Inside, all app data is stored.</p>\n<p>For example: Spotify app\n<img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;@assets/images/2024-10-15-16-28-06.png&#x22;,&#x22;alt&#x22;:&#x22;spotify-app&#x22;,&#x22;index&#x22;:0}\"></p>\n<ul>\n<li>\n<p>Info.plist: Configuration information, such as bundle ID, version number, and application display name\n<img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;@assets/images/2024-10-15-16-27-59.png&#x22;,&#x22;alt&#x22;:&#x22;info-plist&#x22;,&#x22;index&#x22;:0}\"></p>\n</li>\n<li>\n<p>_CodeSignature/CodeResources: includes a plist file that contains a signature, ensuring the integrity of all files in the bundle.\n<img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;@assets/images/2024-10-15-16-27-51.png&#x22;,&#x22;alt&#x22;:&#x22;codesign&#x22;,&#x22;index&#x22;:0}\"></p>\n</li>\n<li>\n<p>Assets.car: A compressed archive is used to store asset files, such as icons.</p>\n</li>\n<li>\n<p>Frameworks: contains the app native libraries as .dylib or .framework files</p>\n</li>\n<li>\n<p>PlugIns: may contain app extensions as .appex files\n<img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;@assets/images/2024-10-15-16-27-43.png&#x22;,&#x22;alt&#x22;:&#x22;plugins&#x22;,&#x22;index&#x22;:0}\"></p>\n</li>\n<li>\n<p>Multiple .lproj folders represent languages, each containing a Localizable.strings file in XML format for localization. (en.lproj, fr.lproj, etc )\n<img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;@assets/images/2024-10-15-16-27-34.png&#x22;,&#x22;alt&#x22;:&#x22;lprof&#x22;,&#x22;index&#x22;:0}\"></p>\n</li>\n<li>\n<p><em>PkgInfo:</em> The PkgInfo file is an alternate way to specify the type and creator codes of your application or bundle. The contents of the PkgInfo file are the 4-byte package type followed by the 4-byte signature of your application. Thus, for the TextEdit application, whose type is ‘APPL’ and whose signature is ‘ttxt’, the file would contain the ASCII string “APPLttxt”.</p>\n</li>\n<li>\n<p><em>SC_Info:</em> This folder contains keys which are used for decrypting the app executables. The contents will look like this:</p>\n<ul>\n<li>Manifest.plist</li>\n<li>Spotify.sinf</li>\n<li>Spotify.supf</li>\n<li>Spotify.supp</li>\n<li>Spotify.supx\nThe .sinf, .supf, .supp, .supx files are used for decrypting, and the Manifest.plist file is used to list all of the relevant .sinf files which are to be used.</li>\n</ul>\n</li>\n<li>\n<p><em><name>.storyboardc/</name></em>: contain some information on the layout of specific panels or views in the app. The inclusion of these folders suggests that the app was created with the Interface Builder tool. Several.nib files and an additional Info.plist file can be found in these folders.</p>\n<ul>\n<li>Info.plist</li>\n<li>01J-lp-oVM-view-MkI-aN-x20.nib</li>\n<li>UIViewController-01J-lp-oVM.nib</li>\n</ul>\n</li>\n</ul>\n<h2 id=\"reference\">Reference:</h2>\n<ul>\n<li><a href=\"https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/FileSystemOverview/FileSystemOverview.html\">https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/FileSystemOverview/FileSystemOverview.html</a></li>\n<li><a href=\"https://mas.owasp.org/MASTG/0x06a-Platform-Overview/#apps-on-ios\">https://mas.owasp.org/MASTG/0x06a-Platform-Overview/#apps-on-ios</a></li>\n</ul>");
	

				const frontmatter = {"title":"Nailing the basic of IPA structure","author":"Hazy","pubDatetime":"2024-10-14T00:00:00.000Z","featured":false,"draft":false,"tags":["iOS","Mobile","ipa","security"],"description":"Breaking down the basics of IPA structure, know what you're testing before you dive in."};
				const file = "/Users/4azy/lune/code/flouciel.github.io/src/content/blog/ios-structure.md";
				const url = undefined;
				function rawContent() {
					return "\nWhen I first started security testing iOS apps, I didn’t really care about diving deep into the details of IPA file. I was more focused on finding vulnerabilities and running basic tests. But that changed when a QA engineer asked me during a mobile security training session: \"What exactly is inside an IPA app?\".\n\nMaybe this blog post will answer her question and serve as a note for myself.\n\n\n## IPA (iOS App Store Package)\n\niOS apps are packaged as IPA files, which are ZIP-compressed archives containing the app's binary, resources, and metadata needed for execution on iOS devices. Similar to Android's APK, IPA files are specific to Apple's iOS devices and are used to install apps on iPhones, iPads, and iPods.\n\n## IPA Structure\n\n| Name      | Description |\n| ----------- | ----------- |\n| iTunesArtwork      | A 512x512 pixel PNG image used as app’s icon that shows up on iTunes, and App Store.|\n| iTunesMetadata.plist | A property list file that contains developer information like developer name, ID, copyright information, application name etc.|\n|META-INF| Subdirectory within the IPA file stores meta-information. Inside, you will find two more files: <br> - com.apple.FixedZipMetadata.bin <br> - com.apple.ZipMetadata.plist|\n|WatchKitSupport/WK|The framework simplifies app development for watchOS apps, including managing background tasks, extended runtime sessions, Siri intents, and accessing user information about Apple Watch|\n|Payload| Folder that contains the application data.|\n|Application Binary|The executable file containing the application’s code. Same name with actual application name. The complete binary analysis is performed on this application binary.|\n|Mobile Provision file|iOS apps are typically installed via the App Store, but for beta testing or ad hoc distribution, a mobile provisioning profile is included to allow installation on specific devices.\n|Code Signature|Check the integrity of the app when the application was released. Any kind of editing or deletion will invalidate the signature. Any changes that are made to the .app file require that the whole package be re-signed.|\n|Bundled Resource Files|Images, Videos, Sounds, HTML, Property list files, etc. which are required by the application to be installed on the mobile device.|\n\n## Payload: A Closer Look\n\nIn the Payload folder, we have a .app folder representing the app's name. Inside, all app data is stored. \n\nFor example: Spotify app\n![spotify-app](@assets/images/2024-10-15-16-28-06.png)\n\n- Info.plist: Configuration information, such as bundle ID, version number, and application display name\n![info-plist](@assets/images/2024-10-15-16-27-59.png)\n\n- _CodeSignature/CodeResources: includes a plist file that contains a signature, ensuring the integrity of all files in the bundle.\n![codesign](@assets/images/2024-10-15-16-27-51.png)\n\n- Assets.car: A compressed archive is used to store asset files, such as icons.\n\n- Frameworks: contains the app native libraries as .dylib or .framework files\n\n- PlugIns: may contain app extensions as .appex files\n![plugins](@assets/images/2024-10-15-16-27-43.png)\n\n- Multiple .lproj folders represent languages, each containing a Localizable.strings file in XML format for localization. (en.lproj, fr.lproj, etc )\n![lprof](@assets/images/2024-10-15-16-27-34.png)\n\n- *PkgInfo:* The PkgInfo file is an alternate way to specify the type and creator codes of your application or bundle. The contents of the PkgInfo file are the 4-byte package type followed by the 4-byte signature of your application. Thus, for the TextEdit application, whose type is 'APPL' and whose signature is 'ttxt', the file would contain the ASCII string “APPLttxt”.\n\n- *SC_Info:* This folder contains keys which are used for decrypting the app executables. The contents will look like this:\n    - Manifest.plist\n    - Spotify.sinf \n    - Spotify.supf \n    - Spotify.supp\n    - Spotify.supx\nThe .sinf, .supf, .supp, .supx files are used for decrypting, and the Manifest.plist file is used to list all of the relevant .sinf files which are to be used. \n\n- *<name>.storyboardc/*: contain some information on the layout of specific panels or views in the app. The inclusion of these folders suggests that the app was created with the Interface Builder tool. Several.nib files and an additional Info.plist file can be found in these folders.\n    - Info.plist\n    - 01J-lp-oVM-view-MkI-aN-x20.nib \n    - UIViewController-01J-lp-oVM.nib\n\n## Reference:\n- https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/FileSystemOverview/FileSystemOverview.html\n- https://mas.owasp.org/MASTG/0x06a-Platform-Overview/#apps-on-ios";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"ipa-ios-app-store-package","text":"IPA (iOS App Store Package)"},{"depth":2,"slug":"ipa-structure","text":"IPA Structure"},{"depth":2,"slug":"payload-a-closer-look","text":"Payload: A Closer Look"},{"depth":2,"slug":"reference","text":"Reference:"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
