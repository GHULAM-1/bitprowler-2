"use client";
import WebDarkSVG from "../../../../public/servicesSectionImages/webDarkSVG";
import AppDarkSVG from "../../../../public/servicesSectionImages/appDarkSVG";
import UxDarkSVG from "../../../../public/servicesSectionImages/uxDarkSVG";
import MarketingDarkSVG from "../../../../public/servicesSectionImages/marketingDarkSVG";
import SeoDarkSVG from "../../../../public/servicesSectionImages/seoDarkSVG";
import SecurityDarkSVG from "../../../../public/servicesSectionImages/securityDarkSVG";
import { useTheme } from "next-themes";
import { useTogglingStore } from "@/store/store";
type ServicesPageHeroMobileProps = {
  name: string;
  hero: {
    quote: string;
    author: string;
  };
};

export default function ServicesPageHeroMobile({
  name,
  hero,
}: ServicesPageHeroMobileProps) {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div className=" TABLET:mt-[5.5rem] w-full h-screen px-[8.14%] text-black dark:text-white flex flex-col justify-center items-center">
        <div className="flex items-center justify-center flex-col  w-full  TABLET:flex TABLET:flex-col TABLET:mb-[1rem] TABLET:w-full  TABLET:justify-start TABLET:items-start ">
          <div className=" text-medium text-Mobile-Head  TABLET:text-Tablet-S-Heading  ">
            Services
          </div>
          <div className="text-Mobile-L-Head mb-[5.58%] TABLET:mb-[2rem] font-medium flex  TABLET:text-Tablet-Head">
            {name}
          </div>
        </div>
        {/* gradient div */}
        <div className="w-full bg-background rounded-[1.5rem]">
          <div
            className={`relative py-[31.1%]  w-full flex flex-col justify-center items-center gap-[1.8%] text-black dark:text-white text-center rounded-[1.5rem] z-10 overflow-hidden ${
              theme === "dark"
                ? "gradient-background"
                : "gradient-background-lightMode"
            }`}
          >
            {/* <WebDarkSVG className="opacity-20 z-10 absolute "></WebDarkSVG> */}
            {name === "Web Dev" ? (
              <WebDarkSVG className="fill-themeColor opacity-10 z-0 absolute  h-[60%] w-[60%] -bottom-5 -right-5 "></WebDarkSVG>
            ) : name === "App Dev" ? (
              <AppDarkSVG className="fill-themeColor opacity-10 z-10 absolute h-[60%] w-[60%] -bottom-5 -right-5   "></AppDarkSVG>
            ) : name === "Security" ? (
              <SecurityDarkSVG className="fill-themeColor opacity-10 z-10 absolute h-[60%] w-[60%] -bottom-5 -right-5 "></SecurityDarkSVG>
            ) : name === "Marketing" ? (
              <MarketingDarkSVG className="fill-themeColor opacity-10 z-10 absolute h-[60%] w-[60%] -bottom-5 -right-5 "></MarketingDarkSVG>
            ) : name === "SEO" ? (
              <SeoDarkSVG className=" fill-themeColor opacity-10 z-10 absolute h-[60%] w-[60%] -bottom-5 -right-5 "></SeoDarkSVG>
            ) : (
              <UxDarkSVG className=" fill-themeColor opacity-10 z-10 absolute h-[60%] w-[60%] -bottom-5 -right-5 "></UxDarkSVG>
            )}

            <div className="text-Mobile-S-Heading w-[70.5%] text-center relative z-30 TABLET:text-Tablet-Subheading">
              {hero.quote}
            </div>
            <div className="text-Mobile-Text relative z-30 TABLET:text-Tablet-Text TABLET:mt-[1rem]">
              {hero.author}
            </div>
          </div>
        </div>
        {/* gradient div */}
      </div>
    </>
  );
}
