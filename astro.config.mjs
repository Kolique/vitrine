import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// ⚠️ PLACEHOLDER : remplacez par votre vrai nom de domaine une fois acheté.
// Cette URL sert au sitemap, aux balises Open Graph et aux URL canoniques.
export default defineConfig({
  site: "https://www.auditacces.fr",
  integrations: [sitemap()],
  build: {
    inlineStylesheets: "auto",
  },
});
