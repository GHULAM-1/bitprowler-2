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
      className={`z-0 relative mb-[2rem] rounded-lg dark:text-white text-black min-w-[300px] h-[23rem] hover:scale-105 transition-all transform ${
        isDarkTheme === true
          ? "gradient-background"
          : "gradient-background-lightMode"
      }  `}
    >``
      
      {name === "mega bit" ? (
        <MDarkSVG className="absolute z-10 h-[210px] bottom-0 right-0 blur-[12px] dark:fill-white fill-black min-[751px]:max-[1480px]:h-[300px]"></MDarkSVG>
      ) : name === "giga bit" ? (
        <GDarkSVG className="absolute z-10 h-[260px] bottom-0 right-0 blur-[12px] dark:fill-white fill-black min-[751px]:max-[1480px]:h-[300px]"></GDarkSVG>
      ) : (
        <BDarkSVG className="absolute z-10 h-[260px] bottom-0 right-0 blur-[12px] dark:fill-white fill-black min-[751px]:max-[1480px]:h-[300px]"></BDarkSVG>
      )}
      <div className="h-[23rem] content absolute z-20 p-4 flex flex-col items-start justify-between gap-[5rem]  w-full">
        <div className="first-half flex flex-col items-start  w-full ">
          <div className="mb-[1rem] top-content flex justify-between w-full text-large-text min-[751px]:max-[1480px]:text-[2.5rem] ">
            <div className="name">{name}</div>

            <div className="price">{price}$</div>
          </div>

          <div className="description min-[751px]:max-[1480px]:text-[1.2rem]">
            {description}
          </div>
        </div>

        <div className="second-half flex flex-col items-start w-full justify-between ">
          <div className="deliverables text-text mb-[0.5rem]">
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
