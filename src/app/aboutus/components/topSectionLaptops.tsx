"use client";
import HeroGradient from "./heroGradient";
import AboutusBSVG from "../../../../public/aboutusBSVG";
import { useTheme } from "next-themes";
import EllipseSVG from "../../../../public/ellipseSVG";
import EllipseLightSVG from "../../../../public/ellipseLightSVG";

type TopSectionProps = {
  description: string;
};
export default function TopSectionLaptops({ description }: TopSectionProps) {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div className="  hidden SMALL_LAPTOP:flex   justify-center h-screen w-screen  ">
        <div className="left relative z-0  flex flex-col  w-[50%] justify-center items-start LAPTOP:pl-[10rem] SMALL_LAPTOP:pl-[4.5rem]">
          {theme === "light" ? (
            <EllipseLightSVG className="SMALL_LAPTOP:flex absolute hidden  z-50 blur-[150px] w-[520px] h-[520px] left-0"></EllipseLightSVG>
          ) : (
            <EllipseSVG className="absolute z-50 blur-[150px] w-[520px] h-[520px]  SMALL_LAPTOP:flex hidden   left-0"></EllipseSVG>
          )}

          {/* <EllipseLightSVG className="SMALL_LAPTOP:flex absolute hidden SMALL_LAPTOP:dark:hidden  z-50 blur-[150px] w-[520px] h-[520px] left-0"></EllipseLightSVG>

          <EllipseSVG className="absolute z-50 blur-[150px] w-[520px] h-[520px]  SMALL_LAPTOP:flex hidden    left-0"></EllipseSVG> */}

          <div className="w-full flex flex-col relative z-50">
            <div className="text-SMALL_LAPTOP-Heading mb-[1rem] relative z-10">
              About us
            </div>

            <div className="text-SMALL_LAPTOP-L-Text text-left text-textSecondaryColor relative z-10">
              {description}
            </div>
          </div>
        </div>

        <div className="right flex justify-center items-center w-[50%]">
          <AboutusBSVG className="w-[261px] h-[240px] fill-textPrimaryColor"></AboutusBSVG>
        </div>
      </div>
    </>
  );
}
