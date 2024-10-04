---
title: "Try Stable Diffusion for Free with Google Colab"
description: "This article provides an updated guide on how to try Stable Diffusion for free using Google Colab, including the necessary steps and requirements to generate high-quality images based on input text or images."
pubDate: 2022-12-31
toc: true
topic: ai
draft: false
tags:
  - AI
  - python
---

This article is an update of the post [Try Stable Diffusion for Free using Google Colab | Usarral](https://usarral.medium.com/probar-stable-diffusion-gratis-usando-google-colab-usarral-8f8233ead7e1) that I wrote a while ago. In this article, I explain how to try Stable Diffusion 1.4 using Google Colab for free.

## What is Stable Diffusion?

Stable Diffusion is an AI tool that generates images based on input. The input can be an image or text. The tool is very powerful and allows you to create high-quality images. In this article, I explain how to try Stable Diffusion 2.0 using Google Colab for free.

## What is Google Colab?

Google Colab is a Google service that allows you to run Python code in the cloud. It’s very useful for testing Python code without needing to install anything on your computer. Additionally, it allows you to run code on a GPU for free.

## What do I need to try Stable Diffusion 2.0?

To try Stable Diffusion 2.0, you need a Google account. If you don’t have one, you can create one [here](https://accounts.google.com/signup/v2/webcreateaccount?flowName=GlifWebSignIn&flowEntry=SignUp).

## How to try Stable Diffusion 2.0?

To try Stable Diffusion 2.0, follow these steps:

1. Open the [Google Colab notebook](https://colab.research.google.com/github/qunash/stable-diffusion-2-gui/blob/main/stable_diffusion_2_0.ipynb#scrollTo=gId0-asCBVwL) created by [anzorq](https://twitter.com/hahahahohohe).
2. Click the play button on cell 1, just below the text cell "Install dependencies," to install the necessary dependencies.
3. Once the dependencies are installed, click the play button on cell 2, just below the text cell "Run the app," to run the application.
4. Once the execution starts, it should give a response similar to this where ID is a combination of letters and numbers:

   ```
   Running on public URL: <https://ID.gradio.live>
   ```

5. Copy the URL that appears in the response and paste it into your browser. You should see a screen similar to this:  
   ![Stable Diffusion GUI](/images/posts/2022/12/gui.png)
6. Now, you can test the tool. To do so, you can use either an image or text. To use an image, click the "Upload Image" button and select the image you want to use. To use text, click the "Text Input" button and type the text you want to use. Once you’ve selected the image or text, click the "Generate Image" button to create the image.
7. If you want to save the image, right-click on the image and select "Save image as...".
8. You can also adjust the image generation parameters to get different results.

Article first published on [Blog | Usarral](https://usarral.com/2022/12/31/prueba-stable-diffusion-gratis-mediante-google-colab/)
