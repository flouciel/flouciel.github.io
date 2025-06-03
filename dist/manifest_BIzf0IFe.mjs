import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import { N as NOOP_MIDDLEWARE_HEADER, k as decodeKey } from './chunks/astro/server_Q3wgTVI0.mjs';
import 'clsx';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/4azy/lune/code/flouciel.github.io/","adapterName":"","routes":[{"file":"file:///Users/4azy/lune/code/flouciel.github.io/dist/404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/4azy/lune/code/flouciel.github.io/dist/about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.md","pathname":"/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/4azy/lune/code/flouciel.github.io/dist/og.png","links":[],"scripts":[],"styles":[],"routeData":{"route":"/og.png","isIndex":false,"type":"endpoint","pattern":"^\\/og\\.png\\/?$","segments":[[{"content":"og.png","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/og.png.ts","pathname":"/og.png","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/4azy/lune/code/flouciel.github.io/dist/photos/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/photos","isIndex":false,"type":"page","pattern":"^\\/photos\\/?$","segments":[[{"content":"photos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/photos.astro","pathname":"/photos","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/4azy/lune/code/flouciel.github.io/dist/posts/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/posts","isIndex":true,"type":"page","pattern":"^\\/posts\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/index.astro","pathname":"/posts","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/4azy/lune/code/flouciel.github.io/dist/robots.txt","links":[],"scripts":[],"styles":[],"routeData":{"route":"/robots.txt","isIndex":false,"type":"endpoint","pattern":"^\\/robots\\.txt\\/?$","segments":[[{"content":"robots.txt","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/robots.txt.ts","pathname":"/robots.txt","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/4azy/lune/code/flouciel.github.io/dist/rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.ts","pathname":"/rss.xml","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/4azy/lune/code/flouciel.github.io/dist/search/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/search","isIndex":false,"type":"page","pattern":"^\\/search\\/?$","segments":[[{"content":"search","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/search.astro","pathname":"/search","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/4azy/lune/code/flouciel.github.io/dist/tags/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/tags","isIndex":true,"type":"page","pattern":"^\\/tags\\/?$","segments":[[{"content":"tags","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tags/index.astro","pathname":"/tags","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/4azy/lune/code/flouciel.github.io/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://flouciel.github.io/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/4azy/lune/code/flouciel.github.io/src/layouts/PostDetails.astro",{"propagation":"in-tree","containsHead":false}],["/Users/4azy/lune/code/flouciel.github.io/src/pages/posts/[slug]/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/posts/[slug]/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/4azy/lune/code/flouciel.github.io/src/layouts/TagPosts.astro",{"propagation":"in-tree","containsHead":false}],["/Users/4azy/lune/code/flouciel.github.io/src/pages/tags/[tag]/[page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/tags/[tag]/[page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/4azy/lune/code/flouciel.github.io/src/pages/tags/[tag]/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/tags/[tag]/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/4azy/lune/code/flouciel.github.io/src/components/Tag.astro",{"propagation":"in-tree","containsHead":false}],["/Users/4azy/lune/code/flouciel.github.io/src/pages/tags/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/tags/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/4azy/lune/code/flouciel.github.io/src/layouts/Main.astro",{"propagation":"in-tree","containsHead":false}],["/Users/4azy/lune/code/flouciel.github.io/src/layouts/Posts.astro",{"propagation":"in-tree","containsHead":false}],["/Users/4azy/lune/code/flouciel.github.io/src/pages/posts/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/posts/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/4azy/lune/code/flouciel.github.io/src/pages/search.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/search@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/4azy/lune/code/flouciel.github.io/src/pages/about.md",{"propagation":"none","containsHead":true}],["/Users/4azy/lune/code/flouciel.github.io/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/4azy/lune/code/flouciel.github.io/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["/Users/4azy/lune/code/flouciel.github.io/src/pages/photos.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/4azy/lune/code/flouciel.github.io/src/pages/posts/[slug]/index.png.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/posts/[slug]/index.png@_@ts",{"propagation":"in-tree","containsHead":false}],["/Users/4azy/lune/code/flouciel.github.io/src/pages/rss.xml.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@ts",{"propagation":"in-tree","containsHead":false}],["/Users/4azy/lune/code/flouciel.github.io/src/utils/generateOgImages.tsx",{"propagation":"in-tree","containsHead":false}],["/Users/4azy/lune/code/flouciel.github.io/src/pages/og.png.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/og.png@_@ts",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about@_@md":"pages/about.astro.mjs","\u0000@astro-page:src/pages/og.png@_@ts":"pages/og.png.astro.mjs","\u0000@astro-page:src/pages/photos@_@astro":"pages/photos.astro.mjs","\u0000@astro-page:src/pages/posts/[slug]/index.png@_@ts":"pages/posts/_slug_.png.astro.mjs","\u0000@astro-page:src/pages/posts/[slug]/index@_@astro":"pages/posts/_slug_.astro.mjs","\u0000@astro-page:src/pages/posts/index@_@astro":"pages/posts.astro.mjs","\u0000@astro-page:src/pages/robots.txt@_@ts":"pages/robots.txt.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@ts":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/search@_@astro":"pages/search.astro.mjs","\u0000@astro-page:src/pages/tags/[tag]/[page]@_@astro":"pages/tags/_tag_/_page_.astro.mjs","\u0000@astro-page:src/pages/tags/[tag]/index@_@astro":"pages/tags/_tag_.astro.mjs","\u0000@astro-page:src/pages/tags/index@_@astro":"pages/tags.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_BIzf0IFe.mjs","/Users/4azy/lune/code/flouciel.github.io/src/content/blog/acquiring-ipa.md?astroContentCollectionEntry=true":"chunks/acquiring-ipa_DYBQ67RZ.mjs","/Users/4azy/lune/code/flouciel.github.io/src/content/blog/hard-coded-scanning.md?astroContentCollectionEntry=true":"chunks/hard-coded-scanning_FG2ufgt-.mjs","/Users/4azy/lune/code/flouciel.github.io/src/content/blog/ios-jailbreak-guide.md?astroContentCollectionEntry=true":"chunks/ios-jailbreak-guide_BM8_fplQ.mjs","/Users/4azy/lune/code/flouciel.github.io/src/content/blog/ios-jailbreak-type.md?astroContentCollectionEntry=true":"chunks/ios-jailbreak-type_BwlBcqDt.mjs","/Users/4azy/lune/code/flouciel.github.io/src/content/blog/ios-structure.md?astroContentCollectionEntry=true":"chunks/ios-structure_D2isPeSm.mjs","/Users/4azy/lune/code/flouciel.github.io/src/content/blog/rethinking-threat-modeling.md?astroContentCollectionEntry=true":"chunks/rethinking-threat-modeling_CzltfTva.mjs","/Users/4azy/lune/code/flouciel.github.io/src/content/blog/telegram-bot-newsletter.md?astroContentCollectionEntry=true":"chunks/telegram-bot-newsletter__8VrpHBl.mjs","/Users/4azy/lune/code/flouciel.github.io/src/content/blog/acquiring-ipa.md?astroPropagatedAssets":"chunks/acquiring-ipa_loJikG3l.mjs","/Users/4azy/lune/code/flouciel.github.io/src/content/blog/hard-coded-scanning.md?astroPropagatedAssets":"chunks/hard-coded-scanning_D6XWpCll.mjs","/Users/4azy/lune/code/flouciel.github.io/src/content/blog/ios-jailbreak-guide.md?astroPropagatedAssets":"chunks/ios-jailbreak-guide_1e9Bu4BS.mjs","/Users/4azy/lune/code/flouciel.github.io/src/content/blog/ios-jailbreak-type.md?astroPropagatedAssets":"chunks/ios-jailbreak-type_DIgVKquM.mjs","/Users/4azy/lune/code/flouciel.github.io/src/content/blog/ios-structure.md?astroPropagatedAssets":"chunks/ios-structure_D9gcARoK.mjs","/Users/4azy/lune/code/flouciel.github.io/src/content/blog/rethinking-threat-modeling.md?astroPropagatedAssets":"chunks/rethinking-threat-modeling_DkwdMAAd.mjs","/Users/4azy/lune/code/flouciel.github.io/src/content/blog/telegram-bot-newsletter.md?astroPropagatedAssets":"chunks/telegram-bot-newsletter_BWvDlju9.mjs","\u0000astro:asset-imports":"chunks/_astro_asset-imports_D9aVaOQr.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BcEe_9wP.mjs","/Users/4azy/lune/code/flouciel.github.io/src/content/blog/acquiring-ipa.md":"chunks/acquiring-ipa_BMIBF5NU.mjs","/Users/4azy/lune/code/flouciel.github.io/src/content/blog/hard-coded-scanning.md":"chunks/hard-coded-scanning_D1_ugkiK.mjs","/Users/4azy/lune/code/flouciel.github.io/src/content/blog/ios-jailbreak-guide.md":"chunks/ios-jailbreak-guide_DJpfM3JW.mjs","/Users/4azy/lune/code/flouciel.github.io/src/content/blog/ios-jailbreak-type.md":"chunks/ios-jailbreak-type_BtDASYua.mjs","/Users/4azy/lune/code/flouciel.github.io/src/content/blog/ios-structure.md":"chunks/ios-structure_gZ7xjic1.mjs","/Users/4azy/lune/code/flouciel.github.io/src/content/blog/rethinking-threat-modeling.md":"chunks/rethinking-threat-modeling_DuFPcVpO.mjs","/Users/4azy/lune/code/flouciel.github.io/src/content/blog/telegram-bot-newsletter.md":"chunks/telegram-bot-newsletter_CBTMcfKH.mjs","/astro/hoisted.js?q=1":"_astro/hoisted.CvIYiPZp.js","@astrojs/react/client.js":"_astro/client.Zy1ddoEA.js","@components/Search":"_astro/Search.COAGxfg_.js","/astro/hoisted.js?q=0":"_astro/hoisted.VFObjY0O.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/file:///Users/4azy/lune/code/flouciel.github.io/dist/404.html","/file:///Users/4azy/lune/code/flouciel.github.io/dist/about/index.html","/file:///Users/4azy/lune/code/flouciel.github.io/dist/og.png","/file:///Users/4azy/lune/code/flouciel.github.io/dist/photos/index.html","/file:///Users/4azy/lune/code/flouciel.github.io/dist/posts/index.html","/file:///Users/4azy/lune/code/flouciel.github.io/dist/robots.txt","/file:///Users/4azy/lune/code/flouciel.github.io/dist/rss.xml","/file:///Users/4azy/lune/code/flouciel.github.io/dist/search/index.html","/file:///Users/4azy/lune/code/flouciel.github.io/dist/tags/index.html","/file:///Users/4azy/lune/code/flouciel.github.io/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"H1I23huFZGbzuHSKMhqjdZ4DkVylqqRQ4P4VJE383FE=","experimentalEnvGetSecretEnabled":false});

export { manifest };
