import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import path from "path";
import React from "react";
import sharp from "sharp";

async function CustomImage(props: { style: any; className: any; src: string; alt: string; width?: number | `${number}` | undefined; height?: number | `${number}` | undefined; fill?: boolean | undefined; placeholder?: PlaceholderValue | undefined; blurDataURL?: string | undefined; objectFit?: string | undefined; objectPosition?: string | undefined }) {
  const sharpImage = sharp("public" + props.src); // Get image path

  //   const { width, height } = await sharpImage.metadata(); // Get image dimensions

  const placeholder = await sharpImage.resize(10).toBuffer(); // Resize to 10px wide
  const base64 = placeholder.toString("base64"); // Convert to base64 string
  const blurDataURL = `data:image/png;base64,${base64}`; // Prepend data URL

  return <Image style={props.style} className={props.className} placeholder={props.placeholder} blurDataURL={blurDataURL} alt={props.alt} src={props.src} width={props.width} height={props.height} objectFit={props.objectFit}></Image>;
}

export default CustomImage;
