import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import { SITE_URL } from './src/data/config';
import vercel from "@astrojs/vercel/serverless";


// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel({
    includeFiles: ["./public/fonts/inter.ttf"],
  }),
  site: SITE_URL,
  integrations: [mdx(), sitemap(), tailwind()]
});
