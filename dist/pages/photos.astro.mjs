import { b as createAstro, c as createComponent, r as renderComponent, m as maybeRenderHead, d as renderSlot, a as renderTemplate, e as addAttribute } from '../chunks/astro/server_Q3wgTVI0.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Header, c as $$Footer } from '../chunks/Footer_Co9dGvMn.mjs';
import { $ as $$Breadcrumbs } from '../chunks/Breadcrumbs_MlpukqT_.mjs';
/* empty css                                  */
import { $ as $$Image } from '../chunks/_astro_assets_BtQnzTra.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro("https://flouciel.github.io/");
const $$PhotoLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PhotoLayout;
  const { pageTitle, pageDesc } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Breadcrumbs", $$Breadcrumbs, { "class": "astro-g444eliq" })} ${maybeRenderHead()}<main id="photo-content" class="astro-g444eliq"> <h1 class="astro-g444eliq">${pageTitle}</h1> <p class="astro-g444eliq">${pageDesc}</p> ${renderSlot($$result, $$slots["default"])} </main> `;
}, "/Users/4azy/lune/code/flouciel.github.io/src/layouts/PhotoLayout.astro", void 0);

const $$Astro$1 = createAstro("https://flouciel.github.io/");
const $$PhotoLightbox = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PhotoLightbox;
  return renderTemplate`${maybeRenderHead()}<div id="photo-lightbox" class="lightbox astro-cuqjehoa"> <div class="lightbox-content astro-cuqjehoa"> <button class="close-button astro-cuqjehoa" aria-label="Close lightbox">&times;</button> <button class="nav-button prev-button astro-cuqjehoa" aria-label="Previous image">&#10094;</button> <div class="image-container astro-cuqjehoa"> <img src="" alt="" id="lightbox-image" class="astro-cuqjehoa"> <div class="image-info astro-cuqjehoa"> <div class="image-title astro-cuqjehoa"> <h3 id="lightbox-title" class="astro-cuqjehoa"></h3> </div> <div class="image-description astro-cuqjehoa"> <p id="lightbox-description" class="astro-cuqjehoa"></p> </div> </div> <div class="image-controls astro-cuqjehoa"> <button class="control-button zoom-out astro-cuqjehoa" aria-label="Zoom out"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="astro-cuqjehoa"> <circle cx="11" cy="11" r="8" class="astro-cuqjehoa"></circle> <line x1="21" y1="21" x2="16.65" y2="16.65" class="astro-cuqjehoa"></line> <line x1="8" y1="11" x2="14" y2="11" class="astro-cuqjehoa"></line> </svg> </button> <button class="control-button zoom-in astro-cuqjehoa" aria-label="Zoom in"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="astro-cuqjehoa"> <circle cx="11" cy="11" r="8" class="astro-cuqjehoa"></circle> <line x1="21" y1="21" x2="16.65" y2="16.65" class="astro-cuqjehoa"></line> <line x1="11" y1="8" x2="11" y2="14" class="astro-cuqjehoa"></line> <line x1="8" y1="11" x2="14" y2="11" class="astro-cuqjehoa"></line> </svg> </button> <button class="control-button fullscreen astro-cuqjehoa" aria-label="Toggle fullscreen"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="astro-cuqjehoa"> <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" class="astro-cuqjehoa"></path> </svg> </button> <button class="control-button download astro-cuqjehoa" aria-label="Download image"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="astro-cuqjehoa"> <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" class="astro-cuqjehoa"></path> <polyline points="7 10 12 15 17 10" class="astro-cuqjehoa"></polyline> <line x1="12" y1="15" x2="12" y2="3" class="astro-cuqjehoa"></line> </svg> </button> </div> </div> <button class="nav-button next-button astro-cuqjehoa" aria-label="Next image">&#10095;</button> </div> </div>  `;
}, "/Users/4azy/lune/code/flouciel.github.io/src/components/PhotoLightbox.astro", void 0);

const $$Astro = createAstro("https://flouciel.github.io/");
const $$PhotoGallery = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PhotoGallery;
  const { photos } = Astro2.props;
  const photosByYear = photos.reduce((acc, photo) => {
    const year = photo.year || (photo.date ? photo.date.substring(0, 4) : "");
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(photo);
    return acc;
  }, {});
  const sortedYears = Object.keys(photosByYear).sort().reverse();
  return renderTemplate`${maybeRenderHead()}<div class="photo-gallery-container astro-zbo42owe"> ${photos.length > 0 ? sortedYears.map((year) => renderTemplate`<div class="year-section astro-zbo42owe"> <h1 class="year-heading astro-zbo42owe">${year}</h1> <div class="photo-gallery astro-zbo42owe"> ${photosByYear[year].map((photo, index) => renderTemplate`<div class="photo-item animate-on-scroll astro-zbo42owe"${addAttribute(photo.title, "data-title")}${addAttribute(photo.description, "data-description")}> <div class="photo-inner astro-zbo42owe"> ${renderComponent($$result, "Image", $$Image, { "src": photo.src, "alt": photo.alt, "width": photo.width || 1200, "height": photo.height || 900, "format": "webp", "quality": 95, "class": "photo astro-zbo42owe" })} <div class="photo-overlay astro-zbo42owe"> <div class="photo-zoom-icon astro-zbo42owe"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="astro-zbo42owe"> <circle cx="11" cy="11" r="8" class="astro-zbo42owe"></circle> <line x1="21" y1="21" x2="16.65" y2="16.65" class="astro-zbo42owe"></line> <line x1="11" y1="8" x2="11" y2="14" class="astro-zbo42owe"></line> <line x1="8" y1="11" x2="14" y2="11" class="astro-zbo42owe"></line> </svg> </div> </div> <div class="photo-caption astro-zbo42owe"> <p class="astro-zbo42owe">${photo.title || photo.alt}</p> </div> </div> </div>`)} </div> </div>`) : renderTemplate`<div class="no-photos astro-zbo42owe"> <p class="astro-zbo42owe">No photos to display yet. Check back soon!</p> <p class="help-text astro-zbo42owe">
To add photos, place image files in the <code class="astro-zbo42owe">src/assets/photos/</code> directory.
</p> </div>`} </div> <!-- Lightbox for full-size image viewing --> ${renderComponent($$result, "PhotoLightbox", $$PhotoLightbox, { "class": "astro-zbo42owe" })}  `;
}, "/Users/4azy/lune/code/flouciel.github.io/src/components/PhotoGallery.astro", void 0);

const _20220924_A_photo_in_Grenoble = new Proxy({"src":"/_astro/20220924_A photo in Grenoble.DsFZHojE.webp","width":922,"height":1600,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/4azy/lune/code/flouciel.github.io/src/assets/photos/2022/20220924_A photo in Grenoble.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/4azy/lune/code/flouciel.github.io/src/assets/photos/2022/20220924_A photo in Grenoble.webp");
							return target[name];
						}
					});

const __vite_glob_0_0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _20220924_A_photo_in_Grenoble
}, Symbol.toStringTag, { value: 'Module' }));

const _20220924_Grenoble_Street = new Proxy({"src":"/_astro/20220924_Grenoble Street.DhMKXJ5k.webp","width":1600,"height":1074,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/4azy/lune/code/flouciel.github.io/src/assets/photos/2022/20220924_Grenoble Street.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/4azy/lune/code/flouciel.github.io/src/assets/photos/2022/20220924_Grenoble Street.webp");
							return target[name];
						}
					});

const __vite_glob_0_1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _20220924_Grenoble_Street
}, Symbol.toStringTag, { value: 'Module' }));

const _20220924_Grenoble_Town = new Proxy({"src":"/_astro/20220924_Grenoble Town.CssmeIfH.webp","width":900,"height":1600,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/4azy/lune/code/flouciel.github.io/src/assets/photos/2022/20220924_Grenoble Town.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/4azy/lune/code/flouciel.github.io/src/assets/photos/2022/20220924_Grenoble Town.webp");
							return target[name];
						}
					});

const __vite_glob_0_2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _20220924_Grenoble_Town
}, Symbol.toStringTag, { value: 'Module' }));

const _20220924_Muse_e_de_Grenoble = new Proxy({"src":"/_astro/20220924_Musée de Grenoble.B3NSPAaP.webp","width":900,"height":1600,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/4azy/lune/code/flouciel.github.io/src/assets/photos/2022/20220924_Musée de Grenoble.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/4azy/lune/code/flouciel.github.io/src/assets/photos/2022/20220924_Musée de Grenoble.webp");
							return target[name];
						}
					});

const __vite_glob_0_3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _20220924_Muse_e_de_Grenoble
}, Symbol.toStringTag, { value: 'Module' }));

const _20220924_a_petit_shop = new Proxy({"src":"/_astro/20220924_a petit shop.CNxzBspl.webp","width":900,"height":1600,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/4azy/lune/code/flouciel.github.io/src/assets/photos/2022/20220924_a petit shop.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/4azy/lune/code/flouciel.github.io/src/assets/photos/2022/20220924_a petit shop.webp");
							return target[name];
						}
					});

const __vite_glob_0_4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _20220924_a_petit_shop
}, Symbol.toStringTag, { value: 'Module' }));

const _20221015_illusion_in_Lyon = new Proxy({"src":"/_astro/20221015_illusion in Lyon.CB_oIHPl.webp","width":1600,"height":900,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/4azy/lune/code/flouciel.github.io/src/assets/photos/2022/20221015_illusion in Lyon.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/4azy/lune/code/flouciel.github.io/src/assets/photos/2022/20221015_illusion in Lyon.webp");
							return target[name];
						}
					});

const __vite_glob_0_5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _20221015_illusion_in_Lyon
}, Symbol.toStringTag, { value: 'Module' }));

const _20221102_Grenoble_Tram_line = new Proxy({"src":"/_astro/20221102_Grenoble Tram line.B_sZacbD.webp","width":934,"height":1600,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/4azy/lune/code/flouciel.github.io/src/assets/photos/2022/20221102_Grenoble Tram line.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/4azy/lune/code/flouciel.github.io/src/assets/photos/2022/20221102_Grenoble Tram line.webp");
							return target[name];
						}
					});

const __vite_glob_0_6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _20221102_Grenoble_Tram_line
}, Symbol.toStringTag, { value: 'Module' }));

const _20221104__Louvre = new Proxy({"src":"/_astro/20221104_ Louvre.CN_tP5-p.webp","width":1600,"height":900,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/4azy/lune/code/flouciel.github.io/src/assets/photos/2022/20221104_ Louvre.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/4azy/lune/code/flouciel.github.io/src/assets/photos/2022/20221104_ Louvre.webp");
							return target[name];
						}
					});

const __vite_glob_0_7 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _20221104__Louvre
}, Symbol.toStringTag, { value: 'Module' }));

const _20221104_Paris_Avenue = new Proxy({"src":"/_astro/20221104_Paris Avenue.4sb8U06-.webp","width":1184,"height":2400,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/4azy/lune/code/flouciel.github.io/src/assets/photos/2022/20221104_Paris Avenue.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/4azy/lune/code/flouciel.github.io/src/assets/photos/2022/20221104_Paris Avenue.webp");
							return target[name];
						}
					});

const __vite_glob_0_8 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _20221104_Paris_Avenue
}, Symbol.toStringTag, { value: 'Module' }));

const _20221203_Geant_Casion_SaintMartinD_He_res = new Proxy({"src":"/_astro/20221203_Geant Casion Saint-martin-d'Hères.a4qmkDAg.webp","width":900,"height":1600,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/4azy/lune/code/flouciel.github.io/src/assets/photos/2022/20221203_Geant Casion Saint-martin-d'Hères.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/4azy/lune/code/flouciel.github.io/src/assets/photos/2022/20221203_Geant Casion Saint-martin-d'Hères.webp");
							return target[name];
						}
					});

const __vite_glob_0_9 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _20221203_Geant_Casion_SaintMartinD_He_res
}, Symbol.toStringTag, { value: 'Module' }));

const _20221224_Grenoble_Mountain = new Proxy({"src":"/_astro/20221224_Grenoble Mountain.DYOwcwG_.webp","width":1600,"height":900,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/4azy/lune/code/flouciel.github.io/src/assets/photos/2022/20221224_Grenoble Mountain.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/4azy/lune/code/flouciel.github.io/src/assets/photos/2022/20221224_Grenoble Mountain.webp");
							return target[name];
						}
					});

const __vite_glob_0_10 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _20221224_Grenoble_Mountain
}, Symbol.toStringTag, { value: 'Module' }));

const _20230130_Fort_de_La_Bastille = new Proxy({"src":"/_astro/20230130_Fort de La Bastille.tiXleoJq.webp","width":1600,"height":900,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/4azy/lune/code/flouciel.github.io/src/assets/photos/2023/20230130_Fort de La Bastille.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/4azy/lune/code/flouciel.github.io/src/assets/photos/2023/20230130_Fort de La Bastille.webp");
							return target[name];
						}
					});

const __vite_glob_0_11 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _20230130_Fort_de_La_Bastille
}, Symbol.toStringTag, { value: 'Module' }));

const _20230130_Ice_Stalactites = new Proxy({"src":"/_astro/20230130_Ice Stalactites.SdmjkRUs.webp","width":900,"height":1600,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/4azy/lune/code/flouciel.github.io/src/assets/photos/2023/20230130_Ice Stalactites.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/4azy/lune/code/flouciel.github.io/src/assets/photos/2023/20230130_Ice Stalactites.webp");
							return target[name];
						}
					});

const __vite_glob_0_12 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _20230130_Ice_Stalactites
}, Symbol.toStringTag, { value: 'Module' }));

const _20230212_La_Poya = new Proxy({"src":"/_astro/20230212_La Poya.DVQm5Joi.webp","width":900,"height":1600,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/4azy/lune/code/flouciel.github.io/src/assets/photos/2023/20230212_La Poya.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/4azy/lune/code/flouciel.github.io/src/assets/photos/2023/20230212_La Poya.webp");
							return target[name];
						}
					});

const __vite_glob_0_13 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _20230212_La_Poya
}, Symbol.toStringTag, { value: 'Module' }));

const _20230212_Parc_de_l_Ovalie = new Proxy({"src":"/_astro/20230212_Parc de l'Ovalie.DKBj9kj3.webp","width":1600,"height":900,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/4azy/lune/code/flouciel.github.io/src/assets/photos/2023/20230212_Parc de l'Ovalie.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/4azy/lune/code/flouciel.github.io/src/assets/photos/2023/20230212_Parc de l'Ovalie.webp");
							return target[name];
						}
					});

const __vite_glob_0_14 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _20230212_Parc_de_l_Ovalie
}, Symbol.toStringTag, { value: 'Module' }));

const _20230404_gare_de_l_Est = new Proxy({"src":"/_astro/20230404_gare de l'Est.nf5RaNiF.webp","width":1600,"height":900,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/4azy/lune/code/flouciel.github.io/src/assets/photos/2023/20230404_gare de l'Est.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/4azy/lune/code/flouciel.github.io/src/assets/photos/2023/20230404_gare de l'Est.webp");
							return target[name];
						}
					});

const __vite_glob_0_15 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _20230404_gare_de_l_Est
}, Symbol.toStringTag, { value: 'Module' }));

const _20230408_Parc_de_Sceaux = new Proxy({"src":"/_astro/20230408_Parc de Sceaux.DQqPS2XN.webp","width":1125,"height":2000,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/4azy/lune/code/flouciel.github.io/src/assets/photos/2023/20230408_Parc de Sceaux.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/4azy/lune/code/flouciel.github.io/src/assets/photos/2023/20230408_Parc de Sceaux.webp");
							return target[name];
						}
					});

const __vite_glob_0_16 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _20230408_Parc_de_Sceaux
}, Symbol.toStringTag, { value: 'Module' }));

const _20230507_Le_Petit_Prince = new Proxy({"src":"/_astro/20230507_Le Petit Prince.DG0yB8Eb.webp","width":1125,"height":2000,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/4azy/lune/code/flouciel.github.io/src/assets/photos/2023/20230507_Le Petit Prince.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/4azy/lune/code/flouciel.github.io/src/assets/photos/2023/20230507_Le Petit Prince.webp");
							return target[name];
						}
					});

const __vite_glob_0_17 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _20230507_Le_Petit_Prince
}, Symbol.toStringTag, { value: 'Module' }));

const _20230610__badminton_court = new Proxy({"src":"/_astro/20230610_ badminton court.ClOnLgnM.webp","width":900,"height":1600,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/4azy/lune/code/flouciel.github.io/src/assets/photos/2023/20230610_ badminton court.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/4azy/lune/code/flouciel.github.io/src/assets/photos/2023/20230610_ badminton court.webp");
							return target[name];
						}
					});

const __vite_glob_0_18 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _20230610__badminton_court
}, Symbol.toStringTag, { value: 'Module' }));

const _20230624_panorama_de_Lyon = new Proxy({"src":"/_astro/20230624_panorama de Lyon.CmXvtK5L.jpg","width":4032,"height":2268,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/4azy/lune/code/flouciel.github.io/src/assets/photos/2023/20230624_panorama de Lyon.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/4azy/lune/code/flouciel.github.io/src/assets/photos/2023/20230624_panorama de Lyon.jpg");
							return target[name];
						}
					});

const __vite_glob_0_19 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _20230624_panorama_de_Lyon
}, Symbol.toStringTag, { value: 'Module' }));

const _20230905_Hotel_des_Alpes_ = new Proxy({"src":"/_astro/20230905_Hotel des Alpes .D6scqmls.jpg","width":4032,"height":2268,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/4azy/lune/code/flouciel.github.io/src/assets/photos/2023/20230905_Hotel des Alpes .jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/4azy/lune/code/flouciel.github.io/src/assets/photos/2023/20230905_Hotel des Alpes .jpg");
							return target[name];
						}
					});

const __vite_glob_0_20 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _20230905_Hotel_des_Alpes_
}, Symbol.toStringTag, { value: 'Module' }));

const _20230905_Lake_Annecy = new Proxy({"src":"/_astro/20230905_Lake Annecy.DLnrXTMs.webp","width":900,"height":1600,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/4azy/lune/code/flouciel.github.io/src/assets/photos/2023/20230905_Lake Annecy.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/4azy/lune/code/flouciel.github.io/src/assets/photos/2023/20230905_Lake Annecy.webp");
							return target[name];
						}
					});

const __vite_glob_0_21 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _20230905_Lake_Annecy
}, Symbol.toStringTag, { value: 'Module' }));

const _20230915__Strasbourg_Ville = new Proxy({"src":"/_astro/20230915_ Strasbourg Ville.Ci-SOdlu.webp","width":900,"height":1600,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/4azy/lune/code/flouciel.github.io/src/assets/photos/2023/20230915_ Strasbourg Ville.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/4azy/lune/code/flouciel.github.io/src/assets/photos/2023/20230915_ Strasbourg Ville.webp");
							return target[name];
						}
					});

const __vite_glob_0_22 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _20230915__Strasbourg_Ville
}, Symbol.toStringTag, { value: 'Module' }));

const _20230915_Cathe_drale_NotreDameDeStrasbourg = new Proxy({"src":"/_astro/20230915_Cathédrale Notre-Dame-de-Strasbourg.CESDBYI9.webp","width":1600,"height":900,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/4azy/lune/code/flouciel.github.io/src/assets/photos/2023/20230915_Cathédrale Notre-Dame-de-Strasbourg.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/4azy/lune/code/flouciel.github.io/src/assets/photos/2023/20230915_Cathédrale Notre-Dame-de-Strasbourg.webp");
							return target[name];
						}
					});

const __vite_glob_0_23 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _20230915_Cathe_drale_NotreDameDeStrasbourg
}, Symbol.toStringTag, { value: 'Module' }));

const _20230916_Colmar_Old_Town = new Proxy({"src":"/_astro/20230916_Colmar Old Town.CZRYZFbu.webp","width":1600,"height":930,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/4azy/lune/code/flouciel.github.io/src/assets/photos/2023/20230916_Colmar Old Town.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/4azy/lune/code/flouciel.github.io/src/assets/photos/2023/20230916_Colmar Old Town.webp");
							return target[name];
						}
					});

const __vite_glob_0_24 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _20230916_Colmar_Old_Town
}, Symbol.toStringTag, { value: 'Module' }));

const _20230924_Ope_ra_Garnier = new Proxy({"src":"/_astro/20230924_Opéra Garnier.D9JwW7rP.webp","width":1600,"height":900,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/4azy/lune/code/flouciel.github.io/src/assets/photos/2023/20230924_Opéra Garnier.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/4azy/lune/code/flouciel.github.io/src/assets/photos/2023/20230924_Opéra Garnier.webp");
							return target[name];
						}
					});

const __vite_glob_0_25 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _20230924_Ope_ra_Garnier
}, Symbol.toStringTag, { value: 'Module' }));

const _20231006_Paris_bridge = new Proxy({"src":"/_astro/20231006_Paris bridge.CK33C-5p.webp","width":1600,"height":900,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/4azy/lune/code/flouciel.github.io/src/assets/photos/2023/20231006_Paris bridge.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/4azy/lune/code/flouciel.github.io/src/assets/photos/2023/20231006_Paris bridge.webp");
							return target[name];
						}
					});

const __vite_glob_0_26 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _20231006_Paris_bridge
}, Symbol.toStringTag, { value: 'Module' }));

const _20231008Eiffel_Tower = new Proxy({"src":"/_astro/20231008-Eiffel -Tower.DfpsxuZD.webp","width":900,"height":1600,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/4azy/lune/code/flouciel.github.io/src/assets/photos/2023/20231008-Eiffel -Tower.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/4azy/lune/code/flouciel.github.io/src/assets/photos/2023/20231008-Eiffel -Tower.webp");
							return target[name];
						}
					});

const __vite_glob_0_27 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _20231008Eiffel_Tower
}, Symbol.toStringTag, { value: 'Module' }));

const _20231011_FontaineMichalon = new Proxy({"src":"/_astro/20231011_Fontaine-Michalon.BRTkidKF.webp","width":1600,"height":900,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/4azy/lune/code/flouciel.github.io/src/assets/photos/2023/20231011_Fontaine-Michalon.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/4azy/lune/code/flouciel.github.io/src/assets/photos/2023/20231011_Fontaine-Michalon.webp");
							return target[name];
						}
					});

const __vite_glob_0_28 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _20231011_FontaineMichalon
}, Symbol.toStringTag, { value: 'Module' }));

async function importPhotos() {
  // Use Vite's import.meta.glob with a literal string pattern
  const imageModules = /* #__PURE__ */ Object.assign({"../assets/photos/2022/20220924_A photo in Grenoble.webp": __vite_glob_0_0,"../assets/photos/2022/20220924_Grenoble Street.webp": __vite_glob_0_1,"../assets/photos/2022/20220924_Grenoble Town.webp": __vite_glob_0_2,"../assets/photos/2022/20220924_Musée de Grenoble.webp": __vite_glob_0_3,"../assets/photos/2022/20220924_a petit shop.webp": __vite_glob_0_4,"../assets/photos/2022/20221015_illusion in Lyon.webp": __vite_glob_0_5,"../assets/photos/2022/20221102_Grenoble Tram line.webp": __vite_glob_0_6,"../assets/photos/2022/20221104_ Louvre.webp": __vite_glob_0_7,"../assets/photos/2022/20221104_Paris Avenue.webp": __vite_glob_0_8,"../assets/photos/2022/20221203_Geant Casion Saint-martin-d'Hères.webp": __vite_glob_0_9,"../assets/photos/2022/20221224_Grenoble Mountain.webp": __vite_glob_0_10,"../assets/photos/2023/20230130_Fort de La Bastille.webp": __vite_glob_0_11,"../assets/photos/2023/20230130_Ice Stalactites.webp": __vite_glob_0_12,"../assets/photos/2023/20230212_La Poya.webp": __vite_glob_0_13,"../assets/photos/2023/20230212_Parc de l'Ovalie.webp": __vite_glob_0_14,"../assets/photos/2023/20230404_gare de l'Est.webp": __vite_glob_0_15,"../assets/photos/2023/20230408_Parc de Sceaux.webp": __vite_glob_0_16,"../assets/photos/2023/20230507_Le Petit Prince.webp": __vite_glob_0_17,"../assets/photos/2023/20230610_ badminton court.webp": __vite_glob_0_18,"../assets/photos/2023/20230624_panorama de Lyon.jpg": __vite_glob_0_19,"../assets/photos/2023/20230905_Hotel des Alpes .jpg": __vite_glob_0_20,"../assets/photos/2023/20230905_Lake Annecy.webp": __vite_glob_0_21,"../assets/photos/2023/20230915_ Strasbourg Ville.webp": __vite_glob_0_22,"../assets/photos/2023/20230915_Cathédrale Notre-Dame-de-Strasbourg.webp": __vite_glob_0_23,"../assets/photos/2023/20230916_Colmar Old Town.webp": __vite_glob_0_24,"../assets/photos/2023/20230924_Opéra Garnier.webp": __vite_glob_0_25,"../assets/photos/2023/20231006_Paris bridge.webp": __vite_glob_0_26,"../assets/photos/2023/20231008-Eiffel -Tower.webp": __vite_glob_0_27,"../assets/photos/2023/20231011_Fontaine-Michalon.webp": __vite_glob_0_28});

  // Convert the modules to an array of photo objects
  const photos = Object.entries(imageModules).map(([path, module]) => {
    // Extract the filename without extension
    const filename = path.split('/').pop().split('.')[0];
    
    // Extract year from folder path
    const pathParts = path.split('/');
    const yearFolder = pathParts[pathParts.length - 2]; // Get the parent folder name
    const year = /^\d{4}$/.test(yearFolder) ? yearFolder : '';

    // Extract date from filename if it exists (format: YYYY-MM-DD-*)
    const dateMatch = filename.match(/^(\d{4}-\d{2}-\d{2})-?(.*)$/);
    const dateStr = dateMatch ? dateMatch[1] : '';

    // If no date in filename but we have a year folder, use that year
    let finalDate = dateStr;
    if (!dateStr && year) {
      finalDate = `${year}-01-01`; // Default to January 1st if only year is known
    }

    // Extract the description part after the date (if any)
    const descriptionPart = dateMatch ? dateMatch[2] : filename;

    // Split description by common separators to get title and description
    // Format: "title--description" or "title-description" (double dash for explicit separation)
    let title, description;

    if (descriptionPart.includes('--')) {
      // Explicit title--description format
      const parts = descriptionPart.split('--');
      title = parts[0].trim();
      description = parts.slice(1).join('--').trim();
    } else {
      // Use the whole description as title, no separate description
      title = descriptionPart;
      description = '';
    }

    // Clean up title and description
    title = title
      .replace(/[-_]/g, ' ')
      .replace(/\b\w/g, char => char.toUpperCase())
      .trim();

    description = description
      .replace(/[-_]/g, ' ')
      .replace(/\b\w/g, char => char.toUpperCase())
      .trim();

    // Create alt text from title (fallback to filename if no title)
    const alt = title || filename
      .replace(/[-_]/g, ' ')
      .replace(/\b\w/g, char => char.toUpperCase());

    return {
      src: module.default,
      alt: alt,
      title: title,
      description: description,
      date: finalDate,
      year: year || (dateStr ? dateStr.substring(0, 4) : ''),
      // You can add more metadata here if needed
    };
  });

  return photos;
}

const $$Photos = createComponent(async ($$result, $$props, $$slots) => {
  const photos = await importPhotos();
  photos.sort((a, b) => {
    if (a.date && b.date) {
      return b.date.localeCompare(a.date);
    }
    const fileNameA = a.src.src.split("/").pop();
    const fileNameB = b.src.src.split("/").pop();
    return fileNameB.localeCompare(fileNameA);
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Photos | l.u.n.e" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "activeNav": "photos" })} ${renderComponent($$result2, "PhotoLayout", $$PhotoLayout, { "pageTitle": "Photos", "pageDesc": "A collection of moments captured through my lens." }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "PhotoGallery", $$PhotoGallery, { "photos": photos })} ` })} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/4azy/lune/code/flouciel.github.io/src/pages/photos.astro", void 0);

const $$file = "/Users/4azy/lune/code/flouciel.github.io/src/pages/photos.astro";
const $$url = "/photos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Photos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
