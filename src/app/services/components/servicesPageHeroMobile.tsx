"use client";
import WebDarkSVG from "../../../../public/servicesSectionImages/webDarkSVG";
import AppDarkSVG from "../../../../public/servicesSectionImages/appDarkSVG";
import UxDarkSVG from "../../../../public/servicesSectionImages/uxDarkSVG";
import MarketingDarkSVG from "../../../../public/servicesSectionImages/marketingDarkSVG";
import SeoDarkSVG from "../../../../public/servicesSectionImages/seoDarkSVG";
import SecurityDarkSVG from "../../../../public/servicesSectionImages/securityDarkSVG";

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
  const isDarkTheme = useTogglingStore((state: any) => state.isDarkTheme);
  return (
    <>
      <div className=" w-full h-screen px-[8.14%] text-black dark:text-white flex flex-col justify-center items-center">
        <div className="flex justify-center text-medium text-Mobile-Head w-full  ">
          Services
        </div>
        <div className="text-Mobile-L-Head mb-[5.58%] font-medium w-full flex justify-center">
          {name}
        </div>
        {/* gradient div */}
        <div className="w-full bg-background rounded-[1.5rem]">
          <div
            className={`relative py-[31.1%]  w-full flex flex-col justify-center items-center gap-[1.8%] text-black dark:text-white text-center rounded-[1.5rem] z-10 overflow-hidden ${
              isDarkTheme === true
                ? "gradient-background"
                : "gradient-background-lightMode"
            }`}
          >
            {/* <WebDarkSVG className="opacity-20 z-10 absolute "></WebDarkSVG> */}
            {name === "Web Dev" ? (
              <WebDarkSVG className="opacity-10 z-0 absolute  h-[60%] w-[60%] -bottom-5 -right-5 "></WebDarkSVG>
            ) : name === "App Dev" ? (
              <AppDarkSVG className="opacity-10 z-10 absolute h-[60%] w-[60%] -bottom-5 -right-5   "></AppDarkSVG>
            ) : name === "Security" ? (
              <SecurityDarkSVG className="opacity-10 z-10 absolute h-[60%] w-[60%] -bottom-5 -right-5 "></SecurityDarkSVG>
            ) : name === "Marketing" ? (
              <MarketingDarkSVG className="opacity-10 z-10 absolute h-[60%] w-[60%] -bottom-5 -right-5 "></MarketingDarkSVG>
            ) : name === "SEO" ? (
              <SeoDarkSVG className="opacity-10 z-10 absolute h-[60%] w-[60%] -bottom-5 -right-5 "></SeoDarkSVG>
            ) : (
              <UxDarkSVG className="opacity-10 z-10 absolute h-[60%] w-[60%] -bottom-5 -right-5 "></UxDarkSVG>
            )}

            <div className="text-Mobile-S-Heading w-[70.5%] text-center relative z-30">
              {hero.quote}
            </div>
            <div className="text-Mobile-Text relative z-30">{hero.author}</div>
          </div>
        </div>
        {/* gradient div */}
      </div>
    </>
  );
}
