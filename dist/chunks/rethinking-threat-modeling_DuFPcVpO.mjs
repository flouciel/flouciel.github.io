import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate, s as spreadAttributes } from './astro/server_Q3wgTVI0.mjs';
import { g as getImage } from './_astro_assets_BtQnzTra.mjs';
import 'clsx';

const Astro__11WDKu = new Proxy({"src":"/_astro/threat-meme.D7m2mCjj.png","width":488,"height":331,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/4azy/lune/code/flouciel.github.io/src/assets/images/threat-meme.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/4azy/lune/code/flouciel.github.io/src/assets/images/threat-meme.png");
							return target[name];
						}
					});

const Astro__Z1UIjQl = new Proxy({"src":"/_astro/risk-diagram.B-NykigF.png","width":1005,"height":551,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/4azy/lune/code/flouciel.github.io/src/assets/images/risk-diagram.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/4azy/lune/code/flouciel.github.io/src/assets/images/risk-diagram.png");
							return target[name];
						}
					});

const Astro__TumJE = new Proxy({"src":"/_astro/4-questions.DwyIJ_mk.png","width":987,"height":674,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/4azy/lune/code/flouciel.github.io/src/assets/images/4-questions.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/4azy/lune/code/flouciel.github.io/src/assets/images/4-questions.png");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "@assets/images/threat-meme\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "@assets/images/threat-meme.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__11WDKu, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "@assets/images/risk-diagram\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "@assets/images/risk-diagram.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__Z1UIjQl, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "@assets/images/4-questions\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "@assets/images/4-questions.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__TumJE, ...props});
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
			const html = await updateImageReferences("<p>Categories of readers when discussing Threat Modeling:</p>\n<ul>\n<li>Never heard of it, no prior knowledge.</li>\n<li>Familiar with the concept but not used it in practice.</li>\n<li>Experts in the field with extensive experience and deep understanding.</li>\n</ul>\n<p>You will likely see yourself in one of the 3 categories above. No matter which one you fall into, you’re not alone. This post is not tailored to a specific group, and neither an oversimplified introduction nor an in-depth deep dive.</p>\n<p>Let’s begin.</p>\n<blockquote>\n<p>I think I can turn this into a series. This post will be the prologue.</p>\n</blockquote>\n<h2 id=\"threat-modeling-tldr-version\">Threat Modeling TLDR version</h2>\n<p>Threat Modeling is a broad term and can mean very different things depend on your category.</p>\n<p>In practical terms:  Threat modeling is the process of determining which assets are in the system and how we will secure them from the start. This involves analyzing the system’s design to define the assets, brainstorming potential threats, and collaboratively developing mitigation strategies to protect them -> <span class=\"accent\"> proactive security</span>.</p>\n<blockquote>\n<p>It’s all about the risk management!</p>\n</blockquote>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;@assets/images/threat-meme.png&#x22;,&#x22;alt&#x22;:&#x22;threat-meme&#x22;,&#x22;index&#x22;:0}\"></p>\n<h3 id=\"benefits\">Benefits</h3>\n<ul>\n<li>Find potential issues early. Enforce the strict and suffiecient rules while increasing risk awareness.</li>\n<li>Deliver more secure software. Security is not blocker.</li>\n<li>Reduce cost of mitigation</li>\n</ul>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;@assets/images/risk-diagram.png&#x22;,&#x22;alt&#x22;:&#x22;risk-diagram&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>It’s crucial to understand that threats will always present in our products. Some risks might not seem significant when viewed in isolation. However, when combined with other vulnerabilities or system components, they can create a chain interaction that leads to a serious security threat. Threat modeling helps identify and mitigate these risks early, ensuring a more secure foundation from the start.</p>\n<p>Yes, <span class=\"accent\"> secure by design</span>. This term is one of our main goals when doing threat modeling. We cannot be certain that 100% risks will occur or can be predicted. But we believe that the output of threat modeling - a set of potential issues is a good material for pentesting, red teaming exercises, and leads to fewer issues or reduced impact in later phases.</p>\n<h3 id=\"threat-modeling-manifesto\">Threat Modeling Manifesto</h3>\n<p>The problem lies in the questions themselves, and our solution is to find the right answers. When it comes to threat modeling, Adam Shostack outlines four key questions:</p>\n<ol>\n<li>What are we working on?</li>\n<li>What can go wrong?</li>\n<li>What are we going to do about it?</li>\n<li>Did we do a good enough job?</li>\n</ol>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;@assets/images/4-questions.png&#x22;,&#x22;alt&#x22;:&#x22;4-questions&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>Check it out on the website and his books</p>\n<p>-> <a href=\"https://www.threatmodelingmanifesto.org\">Threat Modeling Manifesto</a>,</p>\n<p>-> <a href=\"https://shostack.org/books/threat-modeling-book\">Threat Modeling: Designing for Security</a></p>\n<h3 id=\"methodologies\">Methodologies</h3>\n<p>There are many threat modeling techniques out there, with no one-size-fits-all approach, ranging from very famous ones to deprecated ones. I believe threat modeling is a process that must accomplish our goals and fit our organization. Don’t try to wear clothes that don’t fit. Hence, I won’t mention or cover any specific threat modeling methodologies here. There are vast resources available, and I recommend checking out this <a href=\"https://shellsharks.com/threat-modeling\">one</a>.</p>\n<h3 id=\"myths-and-misconceptions\">Myths and Misconceptions</h3>\n<blockquote>\n<ol>\n<li>Threat modeling is only for security or developers.</li>\n</ol>\n</blockquote>\n<p>Threat modeling is not only for security professionals or developers. It’s a collaborative effort that involves everyone in the development team, from business analysts to developers to security experts. It’s not a one-time activity, but a continuous process that should be integrated into the development lifecycle. Our goal is not stop at technical risks, it also includes the operational and business risks.</p>\n<blockquote>\n<ol start=\"2\">\n<li>Threat modeling is only for large or complex systems.</li>\n</ol>\n</blockquote>\n<p>Threat modeling is not limited to large or complex systems, nor is it restricted to startups or mature organizations. It can be applied to entire projects or even individual components. The key is to identify the system’s assets, recognize potential threats, and work on mitigating them.</p>\n<blockquote>\n<ol start=\"3\">\n<li>Threat modeling is only for the beginning of a project.</li>\n</ol>\n</blockquote>\n<p>Threat modeling is not a one-time activity. It’s a continuous process that should be integrated into the development lifecycle. After the initial threat modeling, it’s crucial to monitor and update the model as new threats emerge or vulnerabilities are discovered. Additionally, any changes in the system’s design or architecture due to business needs should be reflected in the model.</p>\n<blockquote>\n<ol start=\"4\">\n<li>Threat modeling is only for prevention</li>\n</ol>\n</blockquote>\n<p>Threat modeling is not just for prevention; it can also serve as valuable material for penetration testing or red teaming exercises. By leveraging threat models, internal teams can reduce testing time and uncover more attack vectors efficiently.</p>\n<h3 id=\"close-thoughts\">Close Thoughts</h3>\n<p>Threat modeling is an ongoing process, not a final destination. It is not something you finish and are cheerful about. By expanding the perspective, I think we can see the bigger picture beyond the obvious threats, and gain a better understand the unexpected risks that lie ahead. Let’s build more resilient, effective and secure application.</p>");
	

				const frontmatter = {"title":"Rethinking Threat Modeling","author":"Hazy","pubDatetime":"2025-03-10T00:00:00.000Z","featured":false,"draft":false,"tags":["threat modeling","application security","appsec","security"],"description":"Threat modeling is a proactive approach to identifying vulnerabilities and implementing effective security measures."};
				const file = "/Users/4azy/lune/code/flouciel.github.io/src/content/blog/rethinking-threat-modeling.md";
				const url = undefined;
				function rawContent() {
					return "\nCategories of readers when discussing Threat Modeling:\n- Never heard of it, no prior knowledge.\n- Familiar with the concept but not used it in practice.\n- Experts in the field with extensive experience and deep understanding.\n\nYou will likely see yourself in one of the 3 categories above. No matter which one you fall into, you're not alone. This post is not tailored to a specific group, and neither an oversimplified introduction nor an in-depth deep dive.\n\nLet's begin.\n\n> I think I can turn this into a series. This post will be the prologue.\n\n## Threat Modeling TLDR version\n\nThreat Modeling is a broad term and can mean very different things depend on your category. \n\nIn practical terms:  Threat modeling is the process of determining which assets are in the system and how we will secure them from the start. This involves analyzing the system's design to define the assets, brainstorming potential threats, and collaboratively developing mitigation strategies to protect them -> <span class=\"accent\"> proactive security</span>.\n\n> It's all about the risk management!\n\n![threat-meme](@assets/images/threat-meme.png)\n### Benefits\n\n- Find potential issues early. Enforce the strict and suffiecient rules while increasing risk awareness.\n- Deliver more secure software. Security is not blocker.\n- Reduce cost of mitigation\n\n![risk-diagram](@assets/images/risk-diagram.png)\n\nIt's crucial to understand that threats will always present in our products. Some risks might not seem significant when viewed in isolation. However, when combined with other vulnerabilities or system components, they can create a chain interaction that leads to a serious security threat. Threat modeling helps identify and mitigate these risks early, ensuring a more secure foundation from the start.\n\nYes, <span class=\"accent\"> secure by design</span>. This term is one of our main goals when doing threat modeling. We cannot be certain that 100% risks will occur or can be predicted. But we believe that the output of threat modeling - a set of potential issues is a good material for pentesting, red teaming exercises, and leads to fewer issues or reduced impact in later phases.\n\n### Threat Modeling Manifesto\n\nThe problem lies in the questions themselves, and our solution is to find the right answers. When it comes to threat modeling, Adam Shostack outlines four key questions:\n\n1. What are we working on? \n2. What can go wrong?\n3. What are we going to do about it?\n4. Did we do a good enough job? \n\n![4-questions](@assets/images/4-questions.png)\n\n Check it out on the website and his books\n\n -> [Threat Modeling Manifesto](https://www.threatmodelingmanifesto.org),\n\n -> [Threat Modeling: Designing for Security](https://shostack.org/books/threat-modeling-book)\n \n ### Methodologies\n\nThere are many threat modeling techniques out there, with no one-size-fits-all approach, ranging from very famous ones to deprecated ones. I believe threat modeling is a process that must accomplish our goals and fit our organization. Don't try to wear clothes that don't fit. Hence, I won't mention or cover any specific threat modeling methodologies here. There are vast resources available, and I recommend checking out this [one](https://shellsharks.com/threat-modeling).\n\n### Myths and Misconceptions\n\n>  1. Threat modeling is only for security or developers.\n\nThreat modeling is not only for security professionals or developers. It's a collaborative effort that involves everyone in the development team, from business analysts to developers to security experts. It's not a one-time activity, but a continuous process that should be integrated into the development lifecycle. Our goal is not stop at technical risks, it also includes the operational and business risks.\n\n> 2. Threat modeling is only for large or complex systems.\n\nThreat modeling is not limited to large or complex systems, nor is it restricted to startups or mature organizations. It can be applied to entire projects or even individual components. The key is to identify the system's assets, recognize potential threats, and work on mitigating them.\n\n> 3. Threat modeling is only for the beginning of a project.\n\nThreat modeling is not a one-time activity. It's a continuous process that should be integrated into the development lifecycle. After the initial threat modeling, it's crucial to monitor and update the model as new threats emerge or vulnerabilities are discovered. Additionally, any changes in the system's design or architecture due to business needs should be reflected in the model.\n\n> 4. Threat modeling is only for prevention\n\nThreat modeling is not just for prevention; it can also serve as valuable material for penetration testing or red teaming exercises. By leveraging threat models, internal teams can reduce testing time and uncover more attack vectors efficiently.\n\n### Close Thoughts\n\nThreat modeling is an ongoing process, not a final destination. It is not something you finish and are cheerful about. By expanding the perspective, I think we can see the bigger picture beyond the obvious threats, and gain a better understand the unexpected risks that lie ahead. Let's build more resilient, effective and secure application. \n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"threat-modeling-tldr-version","text":"Threat Modeling TLDR version"},{"depth":3,"slug":"benefits","text":"Benefits"},{"depth":3,"slug":"threat-modeling-manifesto","text":"Threat Modeling Manifesto"},{"depth":3,"slug":"methodologies","text":"Methodologies"},{"depth":3,"slug":"myths-and-misconceptions","text":"Myths and Misconceptions"},{"depth":3,"slug":"close-thoughts","text":"Close Thoughts"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
