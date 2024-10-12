import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import { k as decodeKey } from './chunks/astro/server_Bn9RwVjN.mjs';
import 'clsx';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = (_, next) => next();

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

const manifest = deserializeManifest({"hrefRoot":"file:///Users/4azy/lune/code/flouciel.github.io/","adapterName":"","routes":[{"file":"file:///Users/4azy/lune/code/flouciel.github.io/dist/404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/4azy/lune/code/flouciel.github.io/dist/about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.md","pathname":"/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/4azy/lune/code/flouciel.github.io/dist/og.png","links":[],"scripts":[],"styles":[],"routeData":{"route":"/og.png","isIndex":false,"type":"endpoint","pattern":"^\\/og\\.png\\/?$","segments":[[{"content":"og.png","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/og.png.ts","pathname":"/og.png","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/4azy/lune/code/flouciel.github.io/dist/posts/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/posts","isIndex":true,"type":"page","pattern":"^\\/posts\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/index.astro","pathname":"/posts","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/4azy/lune/code/flouciel.github.io/dist/robots.txt","links":[],"scripts":[],"styles":[],"routeData":{"route":"/robots.txt","isIndex":false,"type":"endpoint","pattern":"^\\/robots\\.txt\\/?$","segments":[[{"content":"robots.txt","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/robots.txt.ts","pathname":"/robots.txt","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/4azy/lune/code/flouciel.github.io/dist/rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.ts","pathname":"/rss.xml","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/4azy/lune/code/flouciel.github.io/dist/search/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/search","isIndex":false,"type":"page","pattern":"^\\/search\\/?$","segments":[[{"content":"search","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/search.astro","pathname":"/search","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/4azy/lune/code/flouciel.github.io/dist/tags/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/tags","isIndex":true,"type":"page","pattern":"^\\/tags\\/?$","segments":[[{"content":"tags","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tags/index.astro","pathname":"/tags","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/4azy/lune/code/flouciel.github.io/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://tthseus.github.io/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/4azy/lune/code/flouciel.github.io/src/layouts/PostDetails.astro",{"propagation":"in-tree","containsHead":false}],["/Users/4azy/lune/code/flouciel.github.io/src/pages/posts/[slug]/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/posts/[slug]/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/4azy/lune/code/flouciel.github.io/src/layouts/TagPosts.astro",{"propagation":"in-tree","containsHead":false}],["/Users/4azy/lune/code/flouciel.github.io/src/pages/tags/[tag]/[page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/tags/[tag]/[page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/4azy/lune/code/flouciel.github.io/src/pages/tags/[tag]/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/tags/[tag]/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/4azy/lune/code/flouciel.github.io/src/components/Tag.astro",{"propagation":"in-tree","containsHead":false}],["/Users/4azy/lune/code/flouciel.github.io/src/pages/tags/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/tags/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/4azy/lune/code/flouciel.github.io/src/layouts/Main.astro",{"propagation":"in-tree","containsHead":false}],["/Users/4azy/lune/code/flouciel.github.io/src/layouts/Posts.astro",{"propagation":"in-tree","containsHead":false}],["/Users/4azy/lune/code/flouciel.github.io/src/pages/posts/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/posts/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/4azy/lune/code/flouciel.github.io/src/pages/search.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/search@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/4azy/lune/code/flouciel.github.io/src/pages/about.md",{"propagation":"none","containsHead":true}],["/Users/4azy/lune/code/flouciel.github.io/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/4azy/lune/code/flouciel.github.io/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/4azy/lune/code/flouciel.github.io/src/pages/posts/[slug]/index.png.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/posts/[slug]/index.png@_@ts",{"propagation":"in-tree","containsHead":false}],["/Users/4azy/lune/code/flouciel.github.io/src/pages/rss.xml.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@ts",{"propagation":"in-tree","containsHead":false}],["/Users/4azy/lune/code/flouciel.github.io/src/utils/generateOgImages.tsx",{"propagation":"in-tree","containsHead":false}],["/Users/4azy/lune/code/flouciel.github.io/src/pages/og.png.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/og.png@_@ts",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about@_@md":"pages/about.astro.mjs","\u0000@astro-page:src/pages/og.png@_@ts":"pages/og.png.astro.mjs","\u0000@astro-page:src/pages/posts/[slug]/index.png@_@ts":"pages/posts/_slug_.png.astro.mjs","\u0000@astro-page:src/pages/posts/[slug]/index@_@astro":"pages/posts/_slug_.astro.mjs","\u0000@astro-page:src/pages/posts/index@_@astro":"pages/posts.astro.mjs","\u0000@astro-page:src/pages/robots.txt@_@ts":"pages/robots.txt.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@ts":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/search@_@astro":"pages/search.astro.mjs","\u0000@astro-page:src/pages/tags/[tag]/[page]@_@astro":"pages/tags/_tag_/_page_.astro.mjs","\u0000@astro-page:src/pages/tags/[tag]/index@_@astro":"pages/tags/_tag_.astro.mjs","\u0000@astro-page:src/pages/tags/index@_@astro":"pages/tags.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_-xe3ijK7.mjs","/Users/4azy/lune/code/flouciel.github.io/node_modules/.pnpm/@astrojs+react@3.6.2_@types+react-dom@18.3.1_@types+react@18.3.11_react-dom@18.3.1_react@18.3_zkpbuivzpju67pp4dxskhdhm6u/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","/Users/4azy/lune/code/flouciel.github.io/src/content/blog/ios-01.md?astroContentCollectionEntry=true":"chunks/ios-01_CC4Cwuwk.mjs","/Users/4azy/lune/code/flouciel.github.io/src/content/blog/ios-02.md?astroContentCollectionEntry=true":"chunks/ios-02_suOkgf-g.mjs","/Users/4azy/lune/code/flouciel.github.io/src/content/blog/ios-03.md?astroContentCollectionEntry=true":"chunks/ios-03_B-veWXCx.mjs","/Users/4azy/lune/code/flouciel.github.io/src/content/blog/ios-01.md?astroPropagatedAssets":"chunks/ios-01_DzWCTsV7.mjs","/Users/4azy/lune/code/flouciel.github.io/src/content/blog/ios-02.md?astroPropagatedAssets":"chunks/ios-02_DB_-MIBH.mjs","/Users/4azy/lune/code/flouciel.github.io/src/content/blog/ios-03.md?astroPropagatedAssets":"chunks/ios-03_Dq28RsKp.mjs","\u0000astro:asset-imports":"chunks/_astro_asset-imports_D9aVaOQr.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BcEe_9wP.mjs","/Users/4azy/lune/code/flouciel.github.io/src/content/blog/ios-01.md":"chunks/ios-01_B2ceXngu.mjs","/Users/4azy/lune/code/flouciel.github.io/src/content/blog/ios-02.md":"chunks/ios-02_ANAv-b0i.mjs","/Users/4azy/lune/code/flouciel.github.io/src/content/blog/ios-03.md":"chunks/ios-03_CkMooM9Q.mjs","@components/Search":"_astro/Search.DtvSuZip.js","@astrojs/react/client.js":"_astro/client.BIGLHmRd.js","/astro/hoisted.js?q=0":"_astro/hoisted.BYHvv9Tn.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/file:///Users/4azy/lune/code/flouciel.github.io/dist/404.html","/file:///Users/4azy/lune/code/flouciel.github.io/dist/about/index.html","/file:///Users/4azy/lune/code/flouciel.github.io/dist/og.png","/file:///Users/4azy/lune/code/flouciel.github.io/dist/posts/index.html","/file:///Users/4azy/lune/code/flouciel.github.io/dist/robots.txt","/file:///Users/4azy/lune/code/flouciel.github.io/dist/rss.xml","/file:///Users/4azy/lune/code/flouciel.github.io/dist/search/index.html","/file:///Users/4azy/lune/code/flouciel.github.io/dist/tags/index.html","/file:///Users/4azy/lune/code/flouciel.github.io/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"R0+0SUdJGmecPWaIGGnRP3tZ+wIsaj5zgiExS1AHtvc=","experimentalEnvGetSecretEnabled":false});

export { manifest };
