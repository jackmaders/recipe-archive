import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://jackmaders.github.io",
  base: "recipe-archive",
  integrations: [
    starlight({
      title: "Recipe Archive",
      social: {
        github: "https://github.com/jackmaders/recipe-archive",
      },
      sidebar: [
        {
          label: "Beef",
          autogenerate: { directory: "beef" },
        },
        {
          label: "Chicken",
          autogenerate: { directory: "chicken" },
        },
        {
          label: "Lamb",
          autogenerate: { directory: "lamb" },
        },
        {
          label: "Pork",
          autogenerate: { directory: "pork" },
        },
        {
          label: "Sea Food",
          autogenerate: { directory: "seafood" },
        },
        {
          label: "Vegetarian",
          autogenerate: { directory: "vegetarian" },
        },
      ],
    }),
  ],
});
