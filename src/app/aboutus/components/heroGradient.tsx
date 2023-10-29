"use client";
import EllipseSVG from "../../../../public/ellipseSVG";
import EllipseLightSVG from "../../../../public/ellipseLightSVG";
import { useTogglingStore } from "@/store/store";
export default function HeroGradient() {
  const isDarkTheme = useTogglingStore((state: any) => state.isDarkTheme);
  return (
    <>
      {isDarkTheme === true ? (
        <EllipseSVG className="absolute blur-[63px]"></EllipseSVG>
      ) : (
        <EllipseLightSVG className="absolute blur-[63px] "></EllipseLightSVG>
      )}
    </>
  );
}
