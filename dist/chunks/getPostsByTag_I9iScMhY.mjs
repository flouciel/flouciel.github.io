import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, e as addAttribute, f as renderTransition, m as maybeRenderHead } from './astro/server_Q3wgTVI0.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Header, c as $$Footer } from './Footer_Co9dGvMn.mjs';
import { $ as $$Main } from './Main_gxsg_aKM.mjs';
import { C as Card } from './Card_FzR0m42s.mjs';
import { $ as $$Pagination } from './getPagination_R_mmiG6m.mjs';
import { S as SITE } from './config_Nh6sj4dX.mjs';
/* empty css                         */
import { g as getSortedPosts } from './getSortedPosts_BGHRvWBF.mjs';
import { a as slugifyAll } from './slugify_Bbr6UVgA.mjs';

const $$Astro = createAstro("https://flouciel.github.io/");
const $$TagPosts = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TagPosts;
  const { currentPage, totalPages, paginatedPosts, tag, tagName } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Tag: ${tagName} | ${SITE.title}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "activeNav": "tags" })} ${renderComponent($$result2, "Main", $$Main, { "pageTitle": [`Tag:`, `${tagName}`], "titleTransition": tag, "pageDesc": `All the articles with the tag "${tagName}".` }, { "default": ($$result3) => renderTemplate`  ${maybeRenderHead()}<ul> ${paginatedPosts.map(({ data, slug }) => renderTemplate`${renderComponent($$result3, "Card", Card, { "href": `/posts/${slug}/`, "frontmatter": data })}`)} </ul> `, "title": ($$result3) => renderTemplate`<h1${addAttribute(renderTransition($$result3, "vfrq7tp3", "", tag), "data-astro-transition-scope")}>${`Tag:${tag}`}</h1>` })} ${renderComponent($$result2, "Pagination", $$Pagination, { "currentPage": currentPage, "totalPages": totalPages, "prevUrl": `/tags/${tag}${currentPage - 1 !== 1 ? "/" + (currentPage - 1) : ""}/`, "nextUrl": `/tags/${tag}/${currentPage + 1}/` })} ${renderComponent($$result2, "Footer", $$Footer, { "noMarginTop": totalPages > 1 })} ` })}`;
}, "/Users/4azy/lune/code/flouciel.github.io/src/layouts/TagPosts.astro", "self");

const getPostsByTag = (posts, tag) => getSortedPosts(
  posts.filter((post) => slugifyAll(post.data.tags).includes(tag))
);

export { $$TagPosts as $, getPostsByTag as g };
