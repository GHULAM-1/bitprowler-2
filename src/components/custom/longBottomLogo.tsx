"use client";
import { useTogglingStore } from "@/store/store";
import Image from "next/image";
import { useTheme } from "next-themes";
export default function LongBottomLogo() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Image
        src={
          theme === "dark"
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
