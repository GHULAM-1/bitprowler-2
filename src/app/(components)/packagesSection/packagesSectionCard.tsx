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
      className={`z-10 relative mb-[2rem] rounded-lg dark:text-white text-black w-[240px] h-[320px]  hover:scale-105 transition-all transform ${
        isDarkTheme === true
          ? "gradient-background"
          : "gradient-background-lightMode"
      }  `}
    >
      {name === "mega bit" ? (
        <MDarkSVG className="absolute z-0 h-[130px] w-[211px] bottom-0 right-0 blur-[6px] dark:fill-[#F3F5F6] fill-black min-[751px]:max-[1480px]:h-[300px]"></MDarkSVG>
      ) : name === "giga bit" ? (
        <GDarkSVG className="absolute z-10 h-[200px] w-[154px] bottom-0 right-0 blur-[6px] dark:fill-white fill-black min-[751px]:max-[1480px]:h-[300px]"></GDarkSVG>
      ) : (
        <BDarkSVG className="absolute z-10 h-[200px] w-[154px] bottom-0 right-0 blur-[6px] dark:fill-white fill-black min-[751px]:max-[1480px]:h-[300px]"></BDarkSVG>
      )}
      <div className=" content absolute z-20 p-4 flex flex-col items-start justify-between gap-[8rem]  w-full">
        <div className="first-half flex flex-col items-start  w-full ">
          <div className="mb-[1rem] top-content flex justify-between w-full text-Mobile-Head  ">
            <div className="name">{name}</div>

            <div className="price">{price}$</div>
          </div>

          <div className="text-Mobile-Text w-[100%] laptop_sm:text-[1.3rem] laptop_sm:w-[50%] desktop:text-[1rem] ">
            {description}
          </div>
        </div>

        <div className="second-half flex flex-col items-start  justify-between    ">
          <div className="deliverables text-Mobile-Text mb-[0.5rem] laptop_sm:text-[1.5rem] desktop:text-[1rem]">
            {deliverablesCount}+ Deliverables
          </div>

          <HoverButton pagePath={pagePath}>
            More Information {"-->"}
          </HoverButton>
        </div>
      </div>
    </div>
  );
}
