"use client";
import EllipseSVG from "../../../../public/ellipseSVG";
import EllipseLightSVG from "../../../../public/ellipseLightSVG";
import { useTogglingStore } from "@/store/store";
import { useTheme } from "next-themes";
export default function HeroGradient() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      {theme === "dark" ? (
        <EllipseSVG className="absolute blur-[63px]"></EllipseSVG>
      ) : (
        <EllipseLightSVG className="absolute blur-[63px] "></EllipseLightSVG>
      )}
    </>
  );
}
