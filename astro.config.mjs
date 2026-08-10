// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["placehold.co"],
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@/assets": path.resolve(__dirname, "./src/assets"),
        "@/components": path.resolve(__dirname, "./src/components"),
        "@/hooks": path.resolve(__dirname, "./src/hooks"),
        "@/layouts": path.resolve(__dirname, "./src/layouts"),
        "@/pages": path.resolve(__dirname, "./src/pages"),
        "@/styles": path.resolve(__dirname, "./src/styles"),
        "@/utils": path.resolve(__dirname, "./src/utils"),
      },
    },
  },
});
