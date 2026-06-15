import { defineConfig } from "astro/config";

export default defineConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@styles/_variables.scss" as *;`,
        },
      },
    },
  },
});