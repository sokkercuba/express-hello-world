import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    VitePWA({ registerType: "autoUpdate" }),
  ],
  server: { proxy: { "/api/v1": "http://localhost:3000" } },
  build: {
    manifest: true,
    minify: "terser",
  },
});
