import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as renderSlot, u as unescapeHTML } from '../chunks/astro/server_Q3wgTVI0.mjs';
import 'kleur/colors';
import { S as SITE } from '../chunks/config_Nh6sj4dX.mjs';
import { $ as $$Breadcrumbs } from '../chunks/Breadcrumbs_MlpukqT_.mjs';
import { $ as $$Layout, a as $$Header, c as $$Footer } from '../chunks/Footer_Co9dGvMn.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://flouciel.github.io/");
const $$AboutLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AboutLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${frontmatter.title} | ${SITE.title}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "activeNav": "about" })} ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, {})} ${maybeRenderHead()}<main id="main-content"> <section id="about" class="prose mb-28 max-w-3xl prose-img:border-0"> <h1 class="text-2xl tracking-wider sm:text-3xl">${frontmatter.title}</h1> ${renderSlot($$result2, $$slots["default"])} </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/4azy/lune/code/flouciel.github.io/src/layouts/AboutLayout.astro", void 0);

const html = "<p>It takes curiosity to learn and courage to unlearn. Stay enthusiastic about lifelong learning.</p>\n<p>Stay here with some redact information. For full resume, shoot me a dm or reach out via the links at footer.</p>\n<h3 id=\"professional-experience\">Professional Experience</h3>\n<p><code>2024 - present</code> | <code>AppSec Engineer</code></p>\n<p><strong>A TechHub - Banking and Fintech Domain</strong></p>\n<ul>\n<li>Conducted several internal security audits, establishing a strong security baseline for a rapidly growing fintech startup, and reducing critical vulnerabilities by 80% in key systems within 6 months.</li>\n<li>Collaborated with cross-functional teams (Solution Architects, Developers, and Business Analysts) to identify and address 50+ security gaps through threat modeling and reviews of design documents (FSD, TSD). Revised the data flow to align with security best practices, reducing vulnerabilities in business logic.</li>\n<li>Drove the adoption of user-centric security practices across multiple engineering teams, enhancing secure development lifecycle and reducing friction during feature delivery.</li>\n<li>Owned product security for retail digital banking, cutting 80% of major gaps and keeping new feature issues under 10% through secure SDLC practices.</li>\n</ul>\n<p><code>6 months - 2023</code> | <code>R&#x26;D Security Internship based in Paris</code></p>\n<p><strong>A French Startup Company</strong></p>\n<ul>\n<li>Implemented commercial EDR solution (MDE), and tested the detection and prevention capacity.</li>\n<li>Performed adversary emulation to simulate real attacks (Atomic Red Team, Caldera) in order to trigger security alerts, then analyzed and determined proactive mitigation efforts.</li>\n<li>Performed penetration testing of an internal application, identifying 10+ security issues and providing prioritized recommendations to remediate vulnerabilities.</li>\n</ul>\n<p><code>A year</code> | <code>Application Security Specialist</code></p>\n<p><strong>An Outsourcing Company.</strong></p>\n<ul>\n<li>Performed security assessments for a global biopharma company, implementing SAST and SCA integrated into SDLC.</li>\n<li>Performed Dynamic Application Security Testing (DAST) scans for 150+ internal web apps of a US-based client quarterly, identifying 200 vulnerabilities on average, including on-demand scanning. Created tickets and provided prioritized recommendations to resolve all high and medium severity issues with developer team.</li>\n<li>Joined as part of an R&#x26;D team, conducted PoC and training of security products including HCL AppSec variants, Rapid7 Appspider …</li>\n</ul>\n<p><code>Nearly 3 years</code> | <code>Cyber Security Consultant</code></p>\n<p><strong>A Consulting Company</strong></p>\n<ul>\n<li>Delivered penetration testing (web/mobile) services for clients across industries including banking, hospitality, oil and energy, aviation, outsourcing.</li>\n<li>Conducted a Threat-Led penetration test for a client utilizing an internal CTI tool and OSINT that helped for initial access of the project.</li>\n<li>Performed risk assessments by conducting client interviews and reviewing findings using the Cyber Security Assessment Program (CPA) across 10 ITSM domains. Generated reports documenting findings, risk scores, and prioritized remediation recommendations mapped to ISO27001 and NIST frameworks.</li>\n</ul>\n<h3 id=\"academic-background\">Academic Background</h3>\n<p><code>Sept 2022 - Sept 2023</code>\n<strong>Université Grenoble Alpes - Institut Polytechnique de Grenoble (Greble INP - UGA), France</strong></p>\n<p>MSc. in Cybersecurity (Cysec - Bac +5)</p>\n<p><strong>Relevant Coursework</strong></p>\n<p>Threat and risk analysis (IT Audit), Software Security, Security Architecture, Cryptographic Engineering, Physical Security, Advanced Software Security</p>\n<p><code>Sept 2016 - Sept 2020</code>\n<strong>University of Information Technology (UIT),\nVietnam National University Ho Chi Minh City</strong></p>\n<p>Bachelor of Engineering. Information Security (Hons Program)</p>\n<h3 id=\"achievements\">Achievements</h3>\n<ul>\n<li><code>2022 - 2023</code> France Excellence Scholarships, awarded by the French Embassy in Vietnam (Master’s degree level).</li>\n</ul>";

				const frontmatter = {"layout":"../layouts/AboutLayout.astro","title":"About"};
				const file = "/Users/4azy/lune/code/flouciel.github.io/src/pages/about.md";
				const url = "/about";
				function rawContent() {
					return "\nIt takes curiosity to learn and courage to unlearn. Stay enthusiastic about lifelong learning.\n\nStay here with some redact information. For full resume, shoot me a dm or reach out via the links at footer.\n\n### Professional Experience\n\n`2024 - present` | `AppSec Engineer`\n\n__A TechHub - Banking and Fintech Domain__\n\n- Conducted several internal security audits, establishing a strong security baseline for a rapidly growing fintech startup, and reducing critical vulnerabilities by 80% in key systems within 6 months.\n- Collaborated with cross-functional teams (Solution Architects, Developers, and Business Analysts) to identify and address 50+ security gaps through threat modeling and reviews of design documents (FSD, TSD). Revised the data flow to align with security best practices, reducing vulnerabilities in business logic.\n- Drove the adoption of user-centric security practices across multiple engineering teams, enhancing secure development lifecycle and reducing friction during feature delivery.\n- Owned product security for retail digital banking, cutting 80% of major gaps and keeping new feature issues under 10% through secure SDLC practices.\n\n`6 months - 2023` | `R&D Security Internship based in Paris`\n\n__A French Startup Company__\n\n- Implemented commercial EDR solution (MDE), and tested the detection and prevention capacity.\n- Performed adversary emulation to simulate real attacks (Atomic Red Team, Caldera) in order to trigger security alerts, then analyzed and determined proactive mitigation efforts.\n- Performed penetration testing of an internal application, identifying 10+ security issues and providing prioritized recommendations to remediate vulnerabilities.\n\n`A year` | `Application Security Specialist`\n\n__An Outsourcing Company.__ \n\n- Performed security assessments for a global biopharma company, implementing SAST and SCA integrated into SDLC.\n- Performed Dynamic Application Security Testing (DAST) scans for 150+ internal web apps of a US-based client quarterly, identifying 200 vulnerabilities on average, including on-demand scanning. Created tickets and provided prioritized recommendations to resolve all high and medium severity issues with developer team.\n- Joined as part of an R&D team, conducted PoC and training of security products including HCL AppSec variants, Rapid7 Appspider ... \n\n`Nearly 3 years` | `Cyber Security Consultant`\n\n__A Consulting Company__\n\n- Delivered penetration testing (web/mobile) services for clients across industries including banking, hospitality, oil and energy, aviation, outsourcing.\n- Conducted a Threat-Led penetration test for a client utilizing an internal CTI tool and OSINT that helped for initial access of the project.\n- Performed risk assessments by conducting client interviews and reviewing findings using the Cyber Security Assessment Program (CPA) across 10 ITSM domains. Generated reports documenting findings, risk scores, and prioritized remediation recommendations mapped to ISO27001 and NIST frameworks.\n\n### Academic Background\n\n`Sept 2022 - Sept 2023`\n__Université Grenoble Alpes - Institut Polytechnique de Grenoble (Greble INP - UGA), France__ \n\nMSc. in Cybersecurity (Cysec - Bac +5)\n\n**Relevant Coursework**\n\nThreat and risk analysis (IT Audit), Software Security, Security Architecture, Cryptographic Engineering, Physical Security, Advanced Software Security\n\n`Sept 2016 - Sept 2020`\n__University of Information Technology (UIT),\nVietnam National University Ho Chi Minh City__ \n\nBachelor of Engineering. Information Security (Hons Program)\n\n### Achievements\n\n- `2022 - 2023` France Excellence Scholarships, awarded by the French Embassy in Vietnam (Master's degree level).\n";
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
