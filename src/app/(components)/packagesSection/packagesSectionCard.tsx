"use client";
import React from "react";
import BDarkSVG from "../../../../public/letters/bDarkSVG";
import MDarkSVG from "../../../../public/letters/mDarkSVG";
import GDarkSVG from "../../../../public/letters/gDarkSVG";

import HoverButton from "@/components/custom/hoverButton";
import { useTogglingStore } from "@/store/store";
type PackagesCardProps = {
  name: string;
  price: number;
  description: string;
  deliverablesCount: number;
  pagePath: string;
};

export default function PackagesSectionCard({
  name,
  price,
  description,
  deliverablesCount,
  pagePath,
}: PackagesCardProps) {
  const isDarkTheme = useTogglingStore((state: any) => state.isDarkTheme);
  let currentCardGradient = "";

  if (isDarkTheme) {
    currentCardGradient = "gradient-background";
  } else {
    currentCardGradient = "gradient-background-lightMode";
  }
  return (
    <div
      className={` h-[400px] w-[83.2%]  max-w-[480px] bg-primaryBackgroundColor  rounded-[1rem] ${
        name === "dummy bit" ? "hidden" : null
      } ${name === "dummy bit" ? "TABLET:flex TABLET:opacity-0" : null}`}
    >
      <div
        className={`  h-[400px] w-full  p-[1.25rem] z-10    dark:text-white text-black   hover:scale-105 transition-all transform  rounded-[1rem] shadow-2xk ${
          isDarkTheme === true
            ? "gradient-background"
            : "gradient-background-lightMode"
        }  `}
      >
        {name === "mega bit" ? (
          <MDarkSVG className="w-[83.0%] h-[46%] absolute z-0 bottom-0 right-0 blur-[10px] dark:fill-[#F3F5F6] fill-black   "></MDarkSVG>
        ) : name === "giga bit" ? (
          <GDarkSVG className="w-[54.1%] h-[70.5%] absolute z-10  bottom-0 right-0 blur-[10px] dark:fill-white fill-black min-[751px]:max-[1480px]:h-[300px]"></GDarkSVG>
        ) : (
          <BDarkSVG className=" w-[60.2%] h-[70.5%] absolute z-10  bottom-0 right-0 blur-[10px] dark:fill-white fill-black min-[751px]:max-[1480px]:h-[300px]"></BDarkSVG>
        )}

        <div className=" content  z-20 p-[4.44%] flex flex-col items-start justify-between relative  h-full   w-full rounded-[1rem] ">
          <div className="first-half flex flex-col items-start  w-full  mb-[7%]">
            <div className="mb-[0.75rem] top-content flex-col  w-full text-Mobile-Head font-medium ">
              <div className="name mb-[0.75rem] text-Tablet-Large-Text">
                {name}
              </div>

              <div className="price">{price}$</div>
            </div>

            <div className="text-Mobile-Text w-[100%] laptop_sm:text-[1.3rem] laptop_sm:w-[50%] desktop:text-[1rem]  ">
              {description}
            </div>
          </div>

          <div className="second-half flex flex-col items-start  justify-between ">
            <div className="deliverables text-Mobile-Text mb-[0.5rem] laptop_sm:text-[1.5rem] desktop:text-[1rem] ">
              {deliverablesCount}+ Deliverables
            </div>

            <HoverButton pagePath={pagePath}>More Information</HoverButton>
          </div>
        </div>
      </div>
    </div>
  );
}
