import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import { defineConfig, splitVendorChunkPlugin } from "vite";

export default defineConfig({
  plugins: [
    react({
      babel: {
        babelrc: true,
      },
    }),
    splitVendorChunkPlugin(),
    VitePWA({ registerType: "autoUpdate" }),
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
