"use client";

import Image from "next/image";
import AppDarkSVG from "../../../../public/servicesSectionImages/appDarkSVG";
import MarketingDarkSVG from "../../../../public/servicesSectionImages/marketingDarkSVG";
import WebDarkSVG from "../../../../public/servicesSectionImages/webDarkSVG";
import { useTogglingStore } from "@/store/store";
import SecurityDarkSVG from "../../../../public/servicesSectionImages/securityDarkSVG";
import UxDarkSVG from "../../../../public/servicesSectionImages/uxDarkSVG";
import SeoDarkSVG from "../../../../public/servicesSectionImages/seoDarkSVG";
import { useTheme } from "next-themes";
type ServicesPageWebHeroProps = {
  name: string;
  hero: {
    quote: string;
    author: string;
  };
};
export default function ServicesPageWebHero({
  name,
  hero,
}: ServicesPageWebHeroProps) {
  const isDarkTheme = useTogglingStore((state: any) => state.isDarkTheme);
  const { theme, setTheme } = useTheme();
  return (
    <>
      <div className="w-full h-[90%] px-[4.5rem]">
        <div
          className={` ${
            theme === "dark"
              ? "gradient-background"
              : "gradient-background-lightMode"
          }  relative overflow-hidden z-[1] h-[85%] flex justify-center items-center rounded-[0.5rem]  flex-col `}
        >
          {name === "Web Dev" ? (
            <WebDarkSVG className="aspect-square w-[660px] h-[660px] absolute z-[-1] bottom-0 right-0 opacity-20 fill-themeColor"></WebDarkSVG>
          ) : name === "App Dev" ? (
            <AppDarkSVG className="aspect-square w-[660px] h-[660px] absolute z-[-1] bottom-0 right-0 opacity-20 fill-themeColor"></AppDarkSVG>
          ) : name === "Security" ? (
            <SecurityDarkSVG className="aspect-square w-[660px] h-[660px] absolute z-[-1] bottom-0 right-0 opacity-20 fill-themeColor"></SecurityDarkSVG>
          ) : name === "Marketing" ? (
            <MarketingDarkSVG className="aspect-square w-[660px] h-[660px] absolute z-[-1] bottom-0 right-0 opacity-20 fill-themeColor"></MarketingDarkSVG>
          ) : name === "SEO" ? (
            <SeoDarkSVG className="aspect-square w-[660px] h-[660px] absolute z-[-1] bottom-0 right-0 opacity-20 fill-themeColor"></SeoDarkSVG>
          ) : (
            <UxDarkSVG className="aspect-square w-[660px] h-[660px] absolute z-[-1] bottom-0 right-0 opacity-20 fill-themeColor"></UxDarkSVG>
          )}

          <div className="SMALL_LAPTOP:text-SMALL_LAPTOP-Subheading SMALL_LAPTOP:w-[50%] SMALL_LAPTOP:text-center">
            {hero.quote}
          </div>
          <div className="SMALL_LAPTOP:text-SMALL_LAPTOP-L-Text">
            {hero.author}
          </div>
        </div>
      </div>
    </>
  );
}
