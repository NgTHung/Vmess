import { defineConfig } from 'astro/config';
import prefetch from "@astrojs/prefetch";
import deno from "@astrojs/deno";
import solidJs from "@astrojs/solid-js";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [prefetch(), solidJs(), tailwind()],
  output: "server",
  // adapter: deno(),
  vite: {
    ssr: {
      noExternal: ["solid-headless"]
    }
  }
});