"use client";
import Image from "next/image";
import { useTogglingStore } from "@/store/store";
export default function NavMobileImage() {
  const isDarkTheme = useTogglingStore((state: any) => state.isDarkTheme);
  return (
    <>
      <Image
        src={
          isDarkTheme === true
            ? "/brand_images/b-white.svg"
            : "/brand_images/b-black.svg"
        }
        width={25}
        height={25}
        alt="b."
      ></Image>
    </>
  );
}
