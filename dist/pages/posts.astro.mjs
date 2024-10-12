import { c as createComponent, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_Bn9RwVjN.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_DMlXnZyi.mjs';
import { $ as $$Posts } from '../chunks/Posts_CHxvAZpa.mjs';
import { g as getSortedPosts } from '../chunks/getSortedPosts_QMHXPYa0.mjs';
import { g as getPagination } from '../chunks/getPagination_BXw-l8TU.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("blog");
  const sortedPosts = getSortedPosts(posts);
  const pagination = getPagination({
    posts: sortedPosts,
    page: 1,
    isIndex: true
  });
  return renderTemplate`${renderComponent($$result, "Posts", $$Posts, { ...pagination })}`;
}, "/Users/4azy/lune/code/flouciel.github.io/src/pages/posts/index.astro", void 0);

const $$file = "/Users/4azy/lune/code/flouciel.github.io/src/pages/posts/index.astro";
const $$url = "/posts";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
