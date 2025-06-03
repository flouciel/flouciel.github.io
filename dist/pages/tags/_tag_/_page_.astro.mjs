import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate } from '../../../chunks/astro/server_Q3wgTVI0.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../../chunks/_astro_content_B-L-AzeD.mjs';
import { g as getPostsByTag, $ as $$TagPosts } from '../../../chunks/getPostsByTag_I9iScMhY.mjs';
import { g as getUniqueTags } from '../../../chunks/getUniqueTags_FrbvLnFz.mjs';
import { g as getPagination, a as getPageNumbers } from '../../../chunks/getPagination_R_mmiG6m.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://flouciel.github.io/");
async function getStaticPaths() {
  const posts = await getCollection("blog");
  const tags = getUniqueTags(posts);
  return tags.flatMap(({ tag, tagName }) => {
    const tagPosts = getPostsByTag(posts, tag);
    const totalPages = getPageNumbers(tagPosts.length);
    return totalPages.map((page) => ({
      params: { tag, page },
      props: { tag, tagName }
    }));
  });
}
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const { page } = Astro2.params;
  const { tag, tagName } = Astro2.props;
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  const postsByTag = getPostsByTag(posts, tag);
  const pagination = getPagination({
    posts: postsByTag,
    page
  });
  return renderTemplate`${renderComponent($$result, "TagPosts", $$TagPosts, { ...pagination, "tag": tag, "tagName": tagName })}`;
}, "/Users/4azy/lune/code/flouciel.github.io/src/pages/tags/[tag]/[page].astro", void 0);

const $$file = "/Users/4azy/lune/code/flouciel.github.io/src/pages/tags/[tag]/[page].astro";
const $$url = "/tags/[tag]/[page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$page,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
