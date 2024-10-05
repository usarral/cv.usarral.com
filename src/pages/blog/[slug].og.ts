import type { APIContext } from "astro";
import { getEntry}from "astro:content";
import { readFileSync } from "node:fs";
import { html } from "satori-html";
import satori from "satori";
import sharp from "sharp";
import { SITE_TITLE_SHORT } from "@data/config";

export async function GET({ params }: APIContext) {
  const { slug } = params;
  //Get the post using the slug from blog collection
  const post = await getEntry("blog", slug);
  const title = post?.data.title ?? SITE_TITLE_SHORT;

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
        name: "Optimistic Display",
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
