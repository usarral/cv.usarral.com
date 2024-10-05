import type { APIContext } from "astro";
import { html } from "satori-html";
import { readFileSync } from "fs";
import satori from "satori";
import sharp from "sharp";

export async function GET({ params }: APIContext) {
  const markup = html(`
  <div
    style="height: 100%; width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; background-color: rgb(45,26,84); font-size: 32px; font-weight: 600;"
  >
    <div
      style="font-size: 70px; margin-top: 38px; display: flex; flex-direction: column; color: white;"
    >
      <span
        >Hello from
        <span style="margin-left:15ch;color: rgb(255,93,1);"
          >Astro</span
        ></span
      >
    </div>
  </div>`);

 const fontFilePath = `${process.cwd()}/public/fonts/inter.ttf`;

  const fontFile = readFileSync(fontFilePath);

  // resulting svg is basically a long string
  const svg: string = await satori(markup, {
    width: 1200,
    height: 630,
     fonts: [
      {
        name: 'Inter',
        data: fontFile,
        weight: 400,
        style: 'normal'
      }
    ]
  });
  const png = sharp(Buffer.from(svg)).png();
  const response = await png.toBuffer();
  return new Response(response, {
    status: 200,
    headers: {
      "Content-Type": "image/png",
    },
  });
}
