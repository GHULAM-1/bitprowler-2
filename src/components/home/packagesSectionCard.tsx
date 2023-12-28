import HoverButton from "@/components/ui/hoverButton";
import { ReactElement } from "react";
type PackagesSectionCardProps = {
  name: string;
  price: number;
  description: string;
  deliverablesCount: number;
  pagePath: string;
  icon: ReactElement;
};

export default function PackagesSectionCard({
  name,
  price,
  description,
  deliverablesCount,
  pagePath,
  icon,
}: PackagesSectionCardProps) {
  return (
    <div
      className={`relative h-[350px] LAPTOP:h-[450px] w-[83.2%]  bg-primaryBackgroundColor max-w-[480px]   rounded-[1rem] ${
        name === "dummy bit" ? "hidden" : null
      } ${name === "dummy bit" ? "TABLET:flex TABLET:opacity-0" : null} ${
        name === "dummy bit"
      }`}
    >
      <div
        className={` h-[350px] LAPTOP:h-[450px] w-full  p-[1.25rem] LAPTOP:p-[2.5rem] z-10  relative   overflow-hidden   hover:scale-105 transition-all transform  rounded-[1rem] gradient-background-lightMode dark:gradient-background`}
      >
        {icon}

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
