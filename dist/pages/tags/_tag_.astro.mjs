import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_Q3wgTVI0.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_B-L-AzeD.mjs';
import { g as getPostsByTag, $ as $$TagPosts } from '../../chunks/getPostsByTag_I9iScMhY.mjs';
import { g as getPagination } from '../../chunks/getPagination_R_mmiG6m.mjs';
import { g as getUniqueTags } from '../../chunks/getUniqueTags_FrbvLnFz.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://flouciel.github.io/");
async function getStaticPaths() {
  const posts = await getCollection("blog");
  const tags = getUniqueTags(posts);
  return tags.map(({ tag, tagName }) => {
    return {
      params: { tag },
      props: { tag, tagName, posts }
    };
  });
}
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { tag, tagName, posts } = Astro2.props;
  const postsByTag = getPostsByTag(posts, tag);
  const pagination = getPagination({
    posts: postsByTag,
    page: 1,
    isIndex: true
  });
  return renderTemplate`${renderComponent($$result, "TagPosts", $$TagPosts, { ...pagination, "tag": tag, "tagName": tagName })}`;
}, "/Users/4azy/lune/code/flouciel.github.io/src/pages/tags/[tag]/index.astro", void 0);

const $$file = "/Users/4azy/lune/code/flouciel.github.io/src/pages/tags/[tag]/index.astro";
const $$url = "/tags/[tag]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
