"use client";
import HeroGradient from "./heroGradient";
import AboutusBSVG from "../../../../public/aboutusBSVG";
import EllipseSVG from "../../../../public/ellipseSVG";
import { useTheme } from "next-themes";
import EllipseLightSVG from "../../../../public/ellipseLightSVG";

type TopSectionProps = {
  description: string;
};
export default function TopSectionMobile({ description }: TopSectionProps) {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div className="relative   flex flex-col justify-center z-0   ">
        {/* {theme === "dark" ? (
          <EllipseSVG className="absolute  flex SMALL_LAPTOP:hidden  z-50 blur-[63px] w-[185px] h-[240px] TABLET:w-[300px] TABLET:h-[400px] fill-themeColor"></EllipseSVG>
        ) : (
          <EllipseLightSVG className="absolute z-50 blur-[63px] w-[145px] h-[240px]   TABLET:w-[300px] TABLET:h-[400px] fill-themeColor SMALL_LAPTOP:hidden"></EllipseLightSVG>
        )} */}

        <div>dsjdjsdnsjkdnsjdjk</div>
        <div className="w-full  flex flex-col justify-center items-center   h-screen px-[15.11%]  dark:text-white text-black TABLET:items-start">
          <div className="text-Mobile-L-Head TABLET:text-Tablet-L-Head  TABLET:mb-[10rem]">
            About us
          </div>

          <div className="hidden TABLET:flex">
            <AboutusBSVG className="w-[113px] h-[104px] fill-textPrimaryColor mb-[2rem]"></AboutusBSVG>
          </div>

          <div className="text-center text-Mobile-S-Heading TABLET:text-Tablet-Text TABLET:text-left">
            {description}
          </div>
        </div>
      </div>
    </>
  );
}
