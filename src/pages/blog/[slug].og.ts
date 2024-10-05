import type { APIContext } from "astro";
import { getCollection, getEntry}from "astro:content";
import { readFileSync } from "node:fs";
import { html } from "satori-html";
import satori from "satori";
import sharp from "sharp";
import { SITE_TITLE_SHORT } from "@data/config";
import createSlug from "@lib/createSlug";

export async function GET({ params }: APIContext) {
  const { slug } = params;
  //Get the post using the slug from blog collection
  if (!slug) {
    return new Response("Slug not provided", { status: 400 });
  }
  const postEntries = await getCollection("blog");
const entry = postEntries.find(
  (entry) => createSlug(entry.data.title, entry.slug) === slug
);

  const title = entry?.data.title ?? SITE_TITLE_SHORT;

  const fontFilePath = `${process.cwd()}/public/fonts/inter.ttf`;
  const fontFile = readFileSync(fontFilePath);

  const markup = html(`<div
    style="height: 100%; width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; background-color: rgb(45,26,84); font-size: 32px; font-weight: 600;"
  >
    <div
      style="font-size: 70px; margin-top: 38px; display: flex; flex-direction: column; color: white;"
    >
      ${title}
    </div>
  </div>`);
  const svg = await satori(markup, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: "Inter",
        data: fontFile,
        style: "normal",
      },
    ],
  });
  const png = sharp(Buffer.from(svg)).png();
  const response = await png.toBuffer();

  return new Response(response, {
    status: 200,
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "s-maxage=1, stale-while-revalidate=59",
    },
  });
};
