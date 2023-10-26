"use client";
import { useTogglingStore } from "@/store/store";
import Image from "next/image";
export default function LongBottomLogo() {
  const isDarkTheme = useTogglingStore((state: any) => state.isDarkTheme);
  return (
    <>
      <Image
        src={
          isDarkTheme === true
            ? "/brand_images/bitprowler-white.svg"
            : "/brand_images/bitprowler-black.svg"
        }
        width={200}
        height={200}
        alt="bit prowler"
        className="clamp-footer-logo"
      ></Image>
    </>
  );
}
