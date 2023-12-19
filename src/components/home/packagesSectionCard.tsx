"use client";
import React from "react";
import BDarkSVG from "../../../public/letters/bDarkSVG";
import MDarkSVG from "../../../public/letters/mDarkSVG";
import GDarkSVG from "../../../public/letters/gDarkSVG";

import HoverButton from "@/components/ui/hoverButton";
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
      className={`relative h-[350px] LAPTOP:h-[450px] w-[83.2%]  bg-primaryBackgroundColor max-w-[480px]   rounded-[1rem] ${
        name === "dummy bit" ? "hidden" : null
      } ${name === "dummy bit" ? "TABLET:flex TABLET:opacity-0" : null} ${
        name === "dummy bit" ? "SMALL_LAPTOP:hidden" : null
      }`}
    >
      <div
        className={` h-[350px] LAPTOP:h-[450px] w-full  p-[1.25rem] LAPTOP:p-[2.5rem] z-10  relative   overflow-hidden   hover:scale-105 transition-all transform  rounded-[1rem]  ${
          isDarkTheme === true
            ? "gradient-background"
            : "gradient-background-lightMode"
        }  `}
      >
        {name === "megabit" ? (
          <MDarkSVG className="w-[83.0%] h-[46%] absolute z-10 bottom-0 -right-10 overflow-hidden blur-[10px] dark:fill-[#F3F5F6] fill-black   "></MDarkSVG>
        ) : name === "gigabit" ? (
          <GDarkSVG className="w-[54.1%] h-[70.5%] absolute z-10  bottom-0 right-0 blur-[10px] dark:fill-white fill-black "></GDarkSVG>
        ) : (
          <BDarkSVG className=" w-[60.2%] h-[70.5%] absolute z-10  bottom-0 right-0 blur-[10px] dark:fill-white fill-black "></BDarkSVG>
        )}

        <div className=" content  z-20  flex flex-col  items-start justify-between relative  h-full   w-full rounded-[1rem] ">
          <div className="first-half flex flex-col items-start   w-full  mb-[7%]">
            <div className="mb-[0.75rem] flex top-content flex-col LAPTOP:flex-row  LAPTOP:justify-between w-full text-Mobile-Head font-medium  ">
              <div className="name mb-[0.75rem] text-Tablet-Large-Text LAPTOP:text-SMALL_LAPTOP-S-Subheading">
                {name}
              </div>

              <div className="price LAPTOP:text-SMALL_LAPTOP-S-Subheading">
                {price}$
              </div>
            </div>

            <div className="text-Mobile-Text w-[100%] TABLET:w-[80%]   LAPTOP:text-SMALL_LAPTOP-Text">
              {description}
            </div>
          </div>

          <div className="second-half flex flex-col items-start  justify-between ">
            <div className="deliverables text-Mobile-Text mb-[0.5rem] laptop_sm:text-[1.5rem] desktop:text-[1rem] LAPTOP:text-SMALL_LAPTOP-Text ">
              {deliverablesCount}+ Deliverables
            </div>

            <HoverButton pagePath={pagePath}>More Information</HoverButton>
          </div>
        </div>
      </div>
    </div>
  );
}
