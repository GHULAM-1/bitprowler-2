"use client";
import { useNextSanityImage } from "next-sanity-image";
import { createClient } from "@sanity/client";
import Image from "next/image";

const sanityConfig = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  apiVersion: "2022-03-07",
});

export const SanityImage = ({ asset, caption }) => {

  const imageProps = useNextSanityImage(sanityConfig, asset);

  if (!imageProps) return null;

  return (
    <div className="flex justify-center items-center flex-col my-8 TABLET:my-10 gap-2">
      <Image src={imageProps} layout="responsive" className="" />
      <span className="italic text-Mobile-Text dark:text-textPrimaryColor opacity-50">
        {caption}
      </span>
    </div>
  );
};
