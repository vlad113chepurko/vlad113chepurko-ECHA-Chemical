import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: {
    proxy: {
      "/optimade": {
        target: "https://optimade.materialscloud.org",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/optimade/, ""),
      },
    },
  },
});
