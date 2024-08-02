import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "My Docs",
      social: {
        github: "https://github.com/withastro/starlight",
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
