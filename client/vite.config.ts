import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import viteCompression from "vite-plugin-compression";
import { defineConfig, splitVendorChunkPlugin } from "vite";

export default defineConfig({
  plugins: [
    react({
      babel: {
        babelrc: true,
      },
    }),
    viteCompression(),
    splitVendorChunkPlugin(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        "name": "sokker-cuba-community-website",
        "short_name": "sokker-cuba-community-website",
        "background_color": "#ffffff",
        "theme_color": "#ffffff",
        "display": "standalone",
        "scope": "/",
        "lang": "en",
        "start_url": "/",
        "icons": [
          {
            "src": "/icons/icon-72x72.png",
            "sizes": "72x72",
            "type": "image/png",
            "purpose": "maskable any"
          },
          {
            "src": "/icons/icon-96x96.png",
            "sizes": "96x96",
            "type": "image/png",
            "purpose": "maskable any"
          },
          {
            "src": "/icons/icon-128x128.png",
            "sizes": "128x128",
            "type": "image/png",
            "purpose": "maskable any"
          },
          {
            "src": "/icons/icon-144x144.png",
            "sizes": "144x144",
            "type": "image/png",
            "purpose": "maskable any"
          },
          {
            "src": "/icons/icon-152x152.png",
            "sizes": "152x152",
            "type": "image/png",
            "purpose": "maskable any"
          },
          {
            "src": "/icons/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "maskable any"
          },
          {
            "src": "/icons/icon-384x384.png",
            "sizes": "384x384",
            "type": "image/png",
            "purpose": "maskable any"
          },
          {
            "src": "/icons/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "maskable any"
          }
        ]
      },
    }),
  ],
  build: {
    manifest: true,
    minify: "terser",
    outDir: "../public",
  },
  server: {
    proxy: { "/api/v1/*": "http://localhost:3000" },
  },
});
