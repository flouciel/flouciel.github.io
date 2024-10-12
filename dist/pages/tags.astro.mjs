import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Bn9RwVjN.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_DMlXnZyi.mjs';
import { $ as $$Header, b as $$Footer, c as $$Layout } from '../chunks/Footer_DfRj0J0W.mjs';
import { $ as $$Main } from '../chunks/Main_CoNZfsni.mjs';
import { $ as $$Tag } from '../chunks/Tag_DPFIpueq.mjs';
import { g as getUniqueTags } from '../chunks/getUniqueTags_AzLPBsv2.mjs';
import { S as SITE } from '../chunks/config_CMFW6AQr.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("blog");
  let tags = getUniqueTags(posts);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Tags | ${SITE.title}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "activeNav": "tags" })} ${renderComponent($$result2, "Main", $$Main, { "pageTitle": "Tags", "pageDesc": "All the tags used in posts." }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<ul> ${tags.map(({ tag }) => renderTemplate`${renderComponent($$result3, "Tag", $$Tag, { "tag": tag, "size": "lg" })}`)} </ul> ` })} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/4azy/lune/code/flouciel.github.io/src/pages/tags/index.astro", void 0);

const $$file = "/Users/4azy/lune/code/flouciel.github.io/src/pages/tags/index.astro";
const $$url = "/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
