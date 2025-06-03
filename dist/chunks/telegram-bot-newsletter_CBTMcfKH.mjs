import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate, s as spreadAttributes } from './astro/server_Q3wgTVI0.mjs';
import { g as getImage } from './_astro_assets_BtQnzTra.mjs';
import 'clsx';

const Astro__Z1C8woe = new Proxy({"src":"/_astro/tldr-sub.DY8jeLkq.png","width":1448,"height":802,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/4azy/lune/code/flouciel.github.io/src/assets/images/tldr-sub.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/4azy/lune/code/flouciel.github.io/src/assets/images/tldr-sub.png");
							return target[name];
						}
					});

const Astro__Z1xLStJ = new Proxy({"src":"/_astro/tldr-email.Cu-HSVW0.png","width":2226,"height":928,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/4azy/lune/code/flouciel.github.io/src/assets/images/tldr-email.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/4azy/lune/code/flouciel.github.io/src/assets/images/tldr-email.png");
							return target[name];
						}
					});

const Astro__ZwGD7I = new Proxy({"src":"/_astro/tldr-telegram.BNHaq0pd.png","width":1072,"height":1416,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/4azy/lune/code/flouciel.github.io/src/assets/images/tldr-telegram.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/4azy/lune/code/flouciel.github.io/src/assets/images/tldr-telegram.png");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "@assets/images/tldr-sub\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "@assets/images/tldr-sub.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__Z1C8woe, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "@assets/images/tldr-email\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "@assets/images/tldr-email.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__Z1xLStJ, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "@assets/images/tldr-telegram\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "@assets/images/tldr-telegram.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__ZwGD7I, ...props});
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
			const html = await updateImageReferences("<p>The Internet is flooded with content, materials, and resources. It’s tough to find the most useful newsletters, blogs, creators while keeping everything centralized, simple, and minimal.</p>\n<p>In this article, I want to share how I stay up-to-date on the future of learning and work. Each resource on this list has taught me something new and helped me grow as a lifelong learner.</p>\n<h3 id=\"context\"><span class=\"accent\">Context</span></h3>\n<p>Being in cybersecurity, I need to keep up with the industry trends, latest threats, libraries, tools, vulnerabilities, etc, so that I can apply this knowledge at my job.</p>\n<h3 id=\"complication\"><span class=\"accent\">Complication</span></h3>\n<p>The first challenge I encountered was information overload. The cybersecurity landscape is continuously changing, with new vulnerabilities and attacks being popping up daily. While I understood the value of remaining informed, the sheer amount of information made it overwhelming to keep up.</p>\n<p>Here’s a quick rundown of the challenges I faced:</p>\n<ul>\n<li>Time drain: I spent hours hopping between websites and blogs, manually scanning headlines for useful updates.</li>\n<li>Missed stuff: Important updates slipped through the cracks because the info was scattered all over the place.</li>\n<li>Lack of organization: Keeping track of security updates was a mess since they were spread across so many channels.</li>\n</ul>\n<h3 id=\"resolution\"><span class=\"accent\">Resolution</span></h3>\n<h4 id=\"1-traditional-way-email-notifications\">1. Traditional Way: Email Notifications</h4>\n<p>The first thing I tried was setting up email notifications for the blogs, newsletters, and other resources I follow. Many security websites and blogs offer the option to receive email updates whenever they post something new.</p>\n<ul>\n<li>Email Subscriptions: I could subscribe to email newsletters or set up alerts for specific security topics or sources.</li>\n<li>Daily Digest: Most platforms offer daily or weekly email summaries of the latest posts, making it easier to stay in the loop without constantly checking websites.</li>\n</ul>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;@assets/images/tldr-sub.png&#x22;,&#x22;alt&#x22;:&#x22;email-sub&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>This has its pros and cons. It’s straightforward and helps me get things done much faster, but it does have some drawbacks:</p>\n<ul>\n<li>Clutter: My inbox would quickly get flooded with emails from various sources, making it tough to sift through and find the important ones.</li>\n<li>Limited Control: Email services often lack fine-grained control over what content I receive and when, leading to less customization.</li>\n</ul>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;@assets/images/tldr-email.png&#x22;,&#x22;alt&#x22;:&#x22;email-noti&#x22;,&#x22;index&#x22;:0}\"></p>\n<h4 id=\"2-telegram-bot\">2. Telegram Bot.</h4>\n<p>The second, and I think much better is using a bot to automatically send notifications from my curated list of resources. Telegram is my favorite tool and one I use daily, so it make perfect sense to make it a platform for my knowledge hub.</p>\n<p>Here’s how it setup:</p>\n<ol>\n<li>Create a Telegram bot via <a href=\"https://t.me/botfather\">BotFather</a></li>\n<li>Using <a href=\"https://github.com/Rongronggg9/RSS-to-Telegram-Bot\">RSStT</a>.</li>\n</ol>\n<p>Alternative: <a href=\"https://www.newskeeper.io/\">https://www.newskeeper.io/</a></p>\n<ol start=\"3\">\n<li>Create a channel or group to distribute the news. Then, add the RSStT bot as a member and grant it admin privileges to ensure it can post messages in the channel or group.</li>\n</ol>\n<p><strong>Usage of RSStT</strong>:</p>\n<ul>\n<li><strong>/sub</strong>: Subscribe</li>\n<li><strong>/unsub</strong>: Unsubscribe</li>\n<li><strong>/unsub_all</strong>: Unsubscribe from all subscriptions</li>\n<li><strong>/list</strong>: Check the subscription list</li>\n<li><strong>/set</strong>: Customize subscriptions</li>\n<li><strong>/set_default</strong>: Customize default settings</li>\n<li><strong>/import</strong>: Import subscriptions from an OPML file</li>\n<li><strong>/export</strong>: Export subscriptions to an OPML file</li>\n<li><strong>/activate_subs</strong>: Activate subscriptions</li>\n<li><strong>/deactivate_subs</strong>: Deactivate subscriptions</li>\n<li><strong>/version</strong>: Check the bot version</li>\n<li><strong>/help</strong>: View help</li>\n</ul>\n<p>Here are some of the security resources I follow</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Site</th><th>Feed URL</th></tr></thead><tbody><tr><td><a href=\"https://www.resilientcyber.io/\">Resilient Cyber</a></td><td><a href=\"https://www.resilientcyber.io/feed\">https://www.resilientcyber.io/feed</a></td></tr><tr><td><a href=\"https://softwareanalyst.substack.com/\">The Software Analyst Cyber Research</a></td><td><a href=\"https://softwareanalyst.substack.com/feed\">https://softwareanalyst.substack.com/feed</a></td></tr><tr><td><a href=\"https://betterappsec.com/\">better appsec - Medium</a></td><td><a href=\"https://betterappsec.com/feed\">https://betterappsec.com/feed</a></td></tr><tr><td><a href=\"https://appsec.beehiiv.com/\">Reasonable Application Security</a></td><td><a href=\"https://rss.beehiiv.com/feeds/qzqvvIt0tM.xml\">https://rss.beehiiv.com/feeds/qzqvvIt0tM.xml</a></td></tr><tr><td><a href=\"ttps://tldrsec.com/\">tl;dr sec</a></td><td><a href=\"https://rss.beehiiv.com/feeds/xgTKUmMmUm.xml\">https://rss.beehiiv.com/feeds/xgTKUmMmUm.xml</a></td></tr><tr><td><a href=\"https://apisecurity.io/\">API Security News</a></td><td><a href=\"https://apisecurity.io/feed/index.xml\">https://apisecurity.io/feed/index.xml</a></td></tr><tr><td><a href=\"https://pulse.latio.tech/\">Latio Pulse</a></td><td><a href=\"https://pulse.latio.tech/feed\">https://pulse.latio.tech/feed</a></td></tr><tr><td><a href=\"https://www.cybersecuritypulse.net/\">The Cybersecurity Pulse (TCP)</a></td><td><a href=\"https://www.cybersecuritypulse.net/feed\">https://www.cybersecuritypulse.net/feed</a></td></tr><tr><td><a href=\"https://thehackernews.com\">The Hacker News</a></td><td><a href=\"https://feeds.feedburner.com/TheHackersNews\">https://feeds.feedburner.com/TheHackersNews</a></td></tr><tr><td><a href=\"https://www.returnonsecurity.com/t/Newsletter\">Return On Security</a></td><td><a href=\"https://rss.beehiiv.com/feeds/tLSvUYOBwf.xml\">https://rss.beehiiv.com/feeds/tLSvUYOBwf.xml</a></td></tr><tr><td><a href=\"https://www.vulnu.com/\">Vulnerable U</a></td><td><a href=\"https://rss.beehiiv.com/feeds/lSfumbrEGk.xml\">https://rss.beehiiv.com/feeds/lSfumbrEGk.xml</a></td></tr><tr><td><a href=\"https://www.secureallsoftware.com/\">Secure All Software</a></td><td><a href=\"https://www.secureallsoftware.com/feed\">https://www.secureallsoftware.com/feed</a></td></tr><tr><td><a href=\"https://www.csoonline.com/\">CSO Online</a></td><td><a href=\"https://www.csoonline.com/feed/\">https://www.csoonline.com/feed/</a></td></tr><tr><td><a href=\"https://aws.amazon.com/blogs/security/\">AWS Security Blog</a></td><td><a href=\"https://aws.amazon.com/blogs/security/feed/\">https://aws.amazon.com/blogs/security/feed/</a></td></tr><tr><td><a href=\"https://www.cramhacks.com/\">CramHacks</a></td><td><a href=\"https://rss.beehiiv.com/feeds/uGY9n2H0Mg.xml\">https://rss.beehiiv.com/feeds/uGY9n2H0Mg.xml</a></td></tr></tbody></table>\n<p>In this channel, paste the bellow command</p>\n<pre class=\"astro-code one-dark-pro\" style=\"background-color:#282c34;color:#abb2bf; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;\" tabindex=\"0\" data-language=\"bash\"><code><span class=\"line\"><span style=\"color:#61AFEF\">/sub</span><span style=\"color:#ABB2BF\"> &#x3C;</span><span style=\"color:#98C379\">above_RSS_lis</span><span style=\"color:#ABB2BF\">t></span></span>\n<span class=\"line\"><span style=\"color:#61AFEF\">/activate_subs</span></span>\n<span class=\"line\"></span></code></pre>\n<h4 id=\"the-result\"><span class=\"accent\">The Result</span></h4>\n<p>Now, I have a fully automated system that delivers real-time security updates directly to my Telegram channel, eliminating the need to manually check websites or emails. The Telegram bot streamlines everything, ensuring I never miss an important security update. This setup has significantly improved my efficiency and keeps me constantly informed about the latest cybersecurity news.</p>\n<p><span class=\"accent\">If you’re interested with my channel. You can find and follow it <a href=\"https://t.me/tldrsecurity\">here</a>.</span></p>\n<p>Thanks for reading!</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;@assets/images/tldr-telegram.png&#x22;,&#x22;alt&#x22;:&#x22;tldr-telegram&#x22;,&#x22;index&#x22;:0}\"></p>");
	

				const frontmatter = {"title":"Lifelong Learning - Centralizing own Newsletters","author":"Hazy","pubDatetime":"2024-11-15T00:00:00.000Z","featured":false,"draft":false,"tags":["newsletter","productivity","security","telegram","TIL"],"description":"TIL: Learn how I stay up-to-date with tech and what resources I used to grow to ."};
				const file = "/Users/4azy/lune/code/flouciel.github.io/src/content/blog/telegram-bot-newsletter.md";
				const url = undefined;
				function rawContent() {
					return "\nThe Internet is flooded with content, materials, and resources. It's tough to find the most useful newsletters, blogs, creators while keeping everything centralized, simple, and minimal. \n\nIn this article, I want to share how I stay up-to-date on the future of learning and work. Each resource on this list has taught me something new and helped me grow as a lifelong learner.\n\n\n### <span class=\"accent\">Context</span>\nBeing in cybersecurity, I need to keep up with the industry trends, latest threats, libraries, tools, vulnerabilities, etc, so that I can apply this knowledge at my job.\n\n### <span class=\"accent\">Complication</span>\n\nThe first challenge I encountered was information overload. The cybersecurity landscape is continuously changing, with new vulnerabilities and attacks being popping up daily. While I understood the value of remaining informed, the sheer amount of information made it overwhelming to keep up. \n\nHere’s a quick rundown of the challenges I faced:\n\n- Time drain: I spent hours hopping between websites and blogs, manually scanning headlines for useful updates.\n- Missed stuff: Important updates slipped through the cracks because the info was scattered all over the place.\n- Lack of organization: Keeping track of security updates was a mess since they were spread across so many channels.\n\n### <span class=\"accent\">Resolution</span>\n\n#### 1. Traditional Way: Email Notifications\nThe first thing I tried was setting up email notifications for the blogs, newsletters, and other resources I follow. Many security websites and blogs offer the option to receive email updates whenever they post something new.\n\n- Email Subscriptions: I could subscribe to email newsletters or set up alerts for specific security topics or sources.\n- Daily Digest: Most platforms offer daily or weekly email summaries of the latest posts, making it easier to stay in the loop without constantly checking websites.\n\n![email-sub](@assets/images/tldr-sub.png)\n\nThis has its pros and cons. It’s straightforward and helps me get things done much faster, but it does have some drawbacks:\n\n- Clutter: My inbox would quickly get flooded with emails from various sources, making it tough to sift through and find the important ones.\n- Limited Control: Email services often lack fine-grained control over what content I receive and when, leading to less customization.\n\n![email-noti](@assets/images/tldr-email.png)\n\n#### 2. Telegram Bot. \n\nThe second, and I think much better is using a bot to automatically send notifications from my curated list of resources. Telegram is my favorite tool and one I use daily, so it make perfect sense to make it a platform for my knowledge hub.\n\nHere's how it setup:\n\n1. Create a Telegram bot via [BotFather](https://t.me/botfather)\n2. Using [RSStT](https://github.com/Rongronggg9/RSS-to-Telegram-Bot).\n\nAlternative: https://www.newskeeper.io/\n\n3. Create a channel or group to distribute the news. Then, add the RSStT bot as a member and grant it admin privileges to ensure it can post messages in the channel or group.\n\n**Usage of RSStT**:\n- **/sub**: Subscribe\n- **/unsub**: Unsubscribe\n- **/unsub_all**: Unsubscribe from all subscriptions\n- **/list**: Check the subscription list\n- **/set**: Customize subscriptions\n- **/set_default**: Customize default settings\n- **/import**: Import subscriptions from an OPML file\n- **/export**: Export subscriptions to an OPML file\n- **/activate_subs**: Activate subscriptions\n- **/deactivate_subs**: Deactivate subscriptions\n- **/version**: Check the bot version\n- **/help**: View help\n\nHere are some of the security resources I follow\n\n| Site                                                                          | Feed URL                                     |\n| ------------------------------------------------------------------------------| -------------------------------------------- |\n| [Resilient Cyber](https://www.resilientcyber.io/ )                            | https://www.resilientcyber.io/feed           |\n| [The Software Analyst Cyber Research](https://softwareanalyst.substack.com/)  | https://softwareanalyst.substack.com/feed    |       \n| [better appsec - Medium](https://betterappsec.com/ )                          | https://betterappsec.com/feed                |                     \n| [Reasonable Application Security](https://appsec.beehiiv.com/)                | https://rss.beehiiv.com/feeds/qzqvvIt0tM.xml |\n| [tl;dr sec](ttps://tldrsec.com/)                                              | https://rss.beehiiv.com/feeds/xgTKUmMmUm.xml |\n| [API Security News](https://apisecurity.io/)                                  | https://apisecurity.io/feed/index.xml        |\n| [Latio Pulse](https://pulse.latio.tech/)                                      | https://pulse.latio.tech/feed                |\n| [The Cybersecurity Pulse (TCP)]( https://www.cybersecuritypulse.net/)         | https://www.cybersecuritypulse.net/feed      |\n| [The Hacker News](https://thehackernews.com )                                 | https://feeds.feedburner.com/TheHackersNews  |\n| [Return On Security](https://www.returnonsecurity.com/t/Newsletter)           | https://rss.beehiiv.com/feeds/tLSvUYOBwf.xml |\n| [Vulnerable U](https://www.vulnu.com/ )                                       | https://rss.beehiiv.com/feeds/lSfumbrEGk.xml |\n| [Secure All Software](https://www.secureallsoftware.com/)                     | https://www.secureallsoftware.com/feed       |\n| [CSO Online](https://www.csoonline.com/)                                      | https://www.csoonline.com/feed/              |\n| [AWS Security Blog](https://aws.amazon.com/blogs/security/)                   | https://aws.amazon.com/blogs/security/feed/  |\n| [CramHacks](https://www.cramhacks.com/)                                       | https://rss.beehiiv.com/feeds/uGY9n2H0Mg.xml |\n\n\nIn this channel, paste the bellow command\n```bash\n/sub <above_RSS_list>\n/activate_subs\n```\n\n#### <span class=\"accent\">The Result</span>\nNow, I have a fully automated system that delivers real-time security updates directly to my Telegram channel, eliminating the need to manually check websites or emails. The Telegram bot streamlines everything, ensuring I never miss an important security update. This setup has significantly improved my efficiency and keeps me constantly informed about the latest cybersecurity news.\n\n<span class=\"accent\">If you're interested with my channel. You can find and follow it [here](https://t.me/tldrsecurity).</span>\n\nThanks for reading!\n\n![tldr-telegram](@assets/images/tldr-telegram.png)";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":3,"slug":"context","text":"Context"},{"depth":3,"slug":"complication","text":"Complication"},{"depth":3,"slug":"resolution","text":"Resolution"},{"depth":4,"slug":"1-traditional-way-email-notifications","text":"1. Traditional Way: Email Notifications"},{"depth":4,"slug":"2-telegram-bot","text":"2. Telegram Bot."},{"depth":4,"slug":"the-result","text":"The Result"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
