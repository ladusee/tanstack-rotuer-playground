import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    //
    TanStackRouterVite(),
    react(),
  ],
  server: {
    port: 5201,
  },
});
