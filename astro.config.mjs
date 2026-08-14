import { defineConfig } from "astro/config";
import iconPlugin from 'astro-icon';

export default defineConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@styles/_variables.scss" as *;
            @use "@styles/_mixins.scss" as *;
          `,
        },
      },
    },
  },
  integrations: [iconPlugin({
    iconDir: "src/assets/icons",
  })],
});