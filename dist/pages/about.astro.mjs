import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, d as renderSlot, u as unescapeHTML } from '../chunks/astro/server_Bn9RwVjN.mjs';
import 'kleur/colors';
import { S as SITE } from '../chunks/config_CMFW6AQr.mjs';
import { $ as $$Breadcrumbs } from '../chunks/Breadcrumbs_Dxm16OhJ.mjs';
import { c as $$Layout, $ as $$Header, b as $$Footer } from '../chunks/Footer_DfRj0J0W.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://tthseus.github.io/");
const $$AboutLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AboutLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${frontmatter.title} | ${SITE.title}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "activeNav": "about" })} ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, {})} ${maybeRenderHead()}<main id="main-content"> <section id="about" class="prose mb-28 max-w-3xl prose-img:border-0"> <h1 class="text-2xl tracking-wider sm:text-3xl">${frontmatter.title}</h1> ${renderSlot($$result2, $$slots["default"])} </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/4azy/lune/code/flouciel.github.io/src/layouts/AboutLayout.astro", void 0);

const html = "<h3 id=\"professional-experience\">Professional Experience</h3>\n<p><code>Jun 2021 - Jun 2022</code> | <code>Application Security Specialist</code></p>\n<p><strong>HCL Vietnam Company Ltd.</strong></p>\n<ul>\n<li>Conducted application security assessments (web, mobile, web service, Infra, etc.). involving manual testing, analysis, and automated scanning tool such as HCL AppScan, Rapid7 AppSpider.</li>\n<li>Performed application security service for a grand global biopharmaceutical company including SAST and SCA integrated into Secure-SDLC. False positives analysis (FPA) and suggest remediation.</li>\n<li>Delivered DAST for all internal web applications for a US manufacturer of industrial equipment company\nInternal R&#x26;D: researched and conducted PoC in product capacities (HCL AppScan variants like Source, Standard, Cloud, and integrations).</li>\n</ul>\n<p><code>Aug 2019 - May 2021</code> | <code>Cyber Security Consultant</code></p>\n<p><strong>EY Viet Nam Cybersecurity Services Company Ltd.</strong></p>\n<ul>\n<li>Delivered penetration testing (web/mobile) service for many clients in different industry sectors (banking, hotel, oil&#x26;energy, airport, outsourcing) in Vietnam.</li>\n<li>Delivered Threat-Led pentest for a client in Vietnam using Anomali, and an internal CTI tool,\nInterviewed with the customer, reviewed and reported following by framework Cyber Security Assessment Program (CPA).</li>\n<li>Researched, joined, and conducted training internally to enhance technical skills and soft skills: Web/Mobile Security, Threat Intelligence, Network Security, Memory Forensics…</li>\n</ul>\n<h3 id=\"academic-background\">Academic Background</h3>\n<p><code>Sept 2022 - present</code>\n<strong>Grenoble INP Ensigmag.</strong></p>\n<p>MSc. in Cybersecurity (Bac +5)</p>\n<p><code>Sept 2016 - Sept 2020</code>\n<strong>University of Information Technology (UIT),\nVietnam National University Ho Chi Minh City</strong></p>\n<p>Bachelor of Engineering. Information Security (Honour Program)</p>\n<p><strong>Projects</strong></p>\n<ul>\n<li>Hunting Malware using memory forensics: Used Volatility tool to gain additional information and behavior of WannaCry Ransomware.</li>\n<li>DevSecOps:\nBuilt an automatic CI/CD for web application using Git, JenkinsCI, ArgoCD.\nIntegrated SAST to scan and identify potential issues.</li>\n</ul>\n<h3 id=\"achievements\">Achievements</h3>\n<ul>\n<li><code>2022 - 2023</code> France Excellence Scholarships from the French Embassy in Vietnam</li>\n</ul>";

				const frontmatter = {"layout":"../layouts/AboutLayout.astro","title":"About"};
				const file = "/Users/4azy/lune/code/flouciel.github.io/src/pages/about.md";
				const url = "/about";
				function rawContent() {
					return "\n### Professional Experience\n\n`Jun 2021 - Jun 2022` | `Application Security Specialist`\n\n__HCL Vietnam Company Ltd.__ \n\n- Conducted application security assessments (web, mobile, web service, Infra, etc.). involving manual testing, analysis, and automated scanning tool such as HCL AppScan, Rapid7 AppSpider.\n- Performed application security service for a grand global biopharmaceutical company including SAST and SCA integrated into Secure-SDLC. False positives analysis (FPA) and suggest remediation.\n- Delivered DAST for all internal web applications for a US manufacturer of industrial equipment company\nInternal R&D: researched and conducted PoC in product capacities (HCL AppScan variants like Source, Standard, Cloud, and integrations).\n\n`Aug 2019 - May 2021` | `Cyber Security Consultant`\n\n__EY Viet Nam Cybersecurity Services Company Ltd.__\n\n- Delivered penetration testing (web/mobile) service for many clients in different industry sectors (banking, hotel, oil&energy, airport, outsourcing) in Vietnam.\n- Delivered Threat-Led pentest for a client in Vietnam using Anomali, and an internal CTI tool,\nInterviewed with the customer, reviewed and reported following by framework Cyber Security Assessment Program (CPA).\n- Researched, joined, and conducted training internally to enhance technical skills and soft skills: Web/Mobile Security, Threat Intelligence, Network Security, Memory Forensics...\n\n\n### Academic Background\n\n`Sept 2022 - present`\n__Grenoble INP Ensigmag.__ \n\nMSc. in Cybersecurity (Bac +5)\n\n`Sept 2016 - Sept 2020`\n__University of Information Technology (UIT),\nVietnam National University Ho Chi Minh City__ \n\nBachelor of Engineering. Information Security (Honour Program)\n\n**Projects**\n\n- Hunting Malware using memory forensics: Used Volatility tool to gain additional information and behavior of WannaCry Ransomware.\n- DevSecOps:\nBuilt an automatic CI/CD for web application using Git, JenkinsCI, ArgoCD.\nIntegrated SAST to scan and identify potential issues.\n\n### Achievements\n\n- `2022 - 2023` France Excellence Scholarships from the French Embassy in Vietnam\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":3,"slug":"professional-experience","text":"Professional Experience"},{"depth":3,"slug":"academic-background","text":"Academic Background"},{"depth":3,"slug":"achievements","text":"Achievements"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$AboutLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  compiledContent,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  rawContent,
  url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
