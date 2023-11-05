"use client";
import EllipseSVG from "../../../../public/ellipseSVG";
import EllipseLightSVG from "../../../../public/ellipseLightSVG";

import { useTheme } from "next-themes";
export default function HeroGradient() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      {theme === "dark" ? (
        <EllipseSVG className="absolute flex  z-50 blur-[63px] w-[185px] h-[240px] TABLET:w-[300px] TABLET:h-[400px] fill-themeColor"></EllipseSVG>
      ) : (
        <EllipseLightSVG className="absolute z-50 blur-[63px] w-[145px] h-[240px]   TABLET:w-[300px] TABLET:h-[400px] fill-themeColor"></EllipseLightSVG>
      )}
    </>
  );
}
