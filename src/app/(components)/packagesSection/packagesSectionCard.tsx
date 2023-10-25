import Image from "next/image";
import React from "react";
import HoverButton from "@/components/custom/hoverButton";
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
  return (
    <div className="relative mb-[2rem] rounded-lg  gradient-background  text-white min-w-[300px]">
      <div className="h-[23rem] content relative z-10 p-4 flex flex-col items-start justify-between">
        <div className="first-half flex flex-col items-start  w-full">
          <div className="mb-[1rem] top-content flex justify-between w-full text-large-text min-[751px]:max-[1480px]:text-[2.5rem] ">
            <div className="name">{name}</div>

            <div className="price">{price}$</div>
          </div>

          <div className="description min-[751px]:max-[1480px]:text-[1.2rem]">
            {description}
          </div>
        </div>

        <div className="second-half flex flex-col items-start ">
          <div className="deliverables text-text mb-[0.5rem]">
            {deliverablesCount}+ Deliverables
          </div>

          <HoverButton pagePath={pagePath}>More Information</HoverButton>
        </div>
      </div>
    </div>
  );
}
