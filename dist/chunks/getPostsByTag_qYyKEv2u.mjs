import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, e as addAttribute, f as renderTransition } from './astro/server_Bn9RwVjN.mjs';
import 'kleur/colors';
import { $ as $$Header, b as $$Footer, c as $$Layout } from './Footer_DfRj0J0W.mjs';
import { $ as $$Main } from './Main_CoNZfsni.mjs';
import { C as Card } from './Card_BEB-O8Qd.mjs';
import { $ as $$Pagination } from './getPagination_BXw-l8TU.mjs';
import { S as SITE } from './config_CMFW6AQr.mjs';
/* empty css                         */
import { g as getSortedPosts } from './getSortedPosts_QMHXPYa0.mjs';
import { a as slugifyAll } from './slugify_Bbr6UVgA.mjs';

const $$Astro = createAstro("https://tthseus.github.io/");
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
