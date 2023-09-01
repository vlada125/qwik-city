import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { stylifyVite } from '@stylify/unplugin';

export default defineConfig(() => {
  return {
    plugins: [qwikCity(), qwikVite(), tsconfigPaths(), stylifyVite],
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
  };
});
