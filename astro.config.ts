import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import sitemap from "@astrojs/sitemap";
import pwa from "@vite-pwa/astro";
import { SITE } from "./src/config";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  output: 'static',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    sitemap(),
    pwa({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: "l.u.n.e",
        short_name: "l.u.n.e",
        description: "Flou Ciel - l.u.n.e",
        theme_color: "#0F1E2F",
        background_color: "#0F1E2F",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "/apple-touch-icon.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/apple-touch-icon.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      workbox: {
        navigateFallback: '/',
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,jpg,jpeg}'],
        globIgnores: ['**/node_modules/**/*', '**/sw.js', '**/workbox-*.js'],
        skipWaiting: true,
        clientsClaim: true,
        runtimeCaching: [
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images',
              expiration: {
                maxEntries: 60,
                maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
              }
            }
          }
        ]
      },
      injectRegister: 'auto',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
      includeManifestIcons: false
    }),
  ],

  // Image optimization configuration
  image: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: '**.github.io',
      }
    ],
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        // Sharp options for image optimization
        jpeg: { quality: 98, compressionLevel: 8 },
        jpg: { quality: 98, compressionLevel: 8 },
        png: { quality: 100, compressionLevel: 8 },
        webp: { quality: 98, compressionLevel: 8 },
        avif: { quality: 98, compressionLevel: 8 },
      },
    },
  },

  markdown: {
    remarkPlugins: [
      remarkToc,
      [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],
    ],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  scopedStyleStrategy: "where",
});
