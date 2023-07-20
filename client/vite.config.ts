import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true,
    hmr: {
      port: 3000,
    },
  },
  build: {
    outDir: "../dist",
    // rollupOptions: {
    //   output: {
    // assetFileNames: (assetInfo) => {
    //   return `public/assets/[name]-[hash][extname]`;
    // },
    // chunkFileNames: "public/assets/js/[name]-[hash].js",
    // entryFileNames: "public/assets/js/[name]-[hash].js",
    // dir: "public",
    //   },
    // },
  },
});
