"use client";
type LongBottomLogoPropsp = {
  width: number;
  height: number;
};
import { useTogglingStore } from "@/store/store";
import Image from "next/image";
import { useTheme } from "next-themes";
export default function LongBottomLogo({
  width,
  height,
}: LongBottomLogoPropsp) {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Image
        src={
          theme === "dark"
            ? "/brand_images/bitprowler-white.svg"
            : "/brand_images/bitprowler-black.svg"
        }
        width={width}
        height={height}
        alt="bit prowler"
      ></Image>
    </>
  );
}
