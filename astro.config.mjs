import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://kuos-astro-blog.netlify.app/",
  integrations: [preact()]
});