import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from './astro/server_Bn9RwVjN.mjs';
import 'kleur/colors';
import { $ as $$Header, b as $$Footer, c as $$Layout } from './Footer_DfRj0J0W.mjs';
import { $ as $$Main } from './Main_CoNZfsni.mjs';
import { $ as $$Pagination } from './getPagination_BXw-l8TU.mjs';
import { C as Card } from './Card_BEB-O8Qd.mjs';
import { S as SITE } from './config_CMFW6AQr.mjs';

const $$Astro = createAstro("https://tthseus.github.io/");
const $$Posts = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Posts;
  const { currentPage, totalPages, paginatedPosts } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Posts | ${SITE.title}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "activeNav": "posts" })} ${renderComponent($$result2, "Main", $$Main, { "pageTitle": "Posts", "pageDesc": "All the articles I've posted." }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<ul> ${paginatedPosts.map(({ data, slug }) => renderTemplate`${renderComponent($$result3, "Card", Card, { "href": `/posts/${slug}/`, "frontmatter": data })}`)} </ul> ` })} ${renderComponent($$result2, "Pagination", $$Pagination, { "currentPage": currentPage, "totalPages": totalPages, "prevUrl": `/posts${currentPage - 1 !== 1 ? "/" + (currentPage - 1) : ""}/`, "nextUrl": `/posts/${currentPage + 1}/` })} ${renderComponent($$result2, "Footer", $$Footer, { "noMarginTop": totalPages > 1 })} ` })}`;
}, "/Users/4azy/lune/code/flouciel.github.io/src/layouts/Posts.astro", void 0);

export { $$Posts as $ };
