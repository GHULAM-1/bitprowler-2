import { ReactElement } from "react";
import PrimaryArrowSVG from "~/primaryArrowSVG";
import Link from "next/link";

type ServicesSectionCardProps = {
  mainHeading: string;
  description: string;
  pagePath: string;
  icon: ReactElement;
};
export default function ServicesSectionCard({
  mainHeading,
  description,
  pagePath,
  icon,
}: ServicesSectionCardProps) {
  return (
    <>
      <Link
        href={pagePath}
        className={`  max-w-[360px] SMALL_LAPTOP:max-w-[475px]  rounded-[0.5rem] border-[2px] flex flex-col  
        dark:hover:bg-themeColor
        border-themeColor p-[4.34%] SMALL_LAPTOP:p-[1.5rem] LAPTOP:p-[2rem] dark:bg-textSecondaryColorLight bg-tertiaryBackgroundColorLight hover:bg-themeColor transition-transform transform hover:scale-105 group cursor-pointer mb-[8.69%] w-[85.5%] items-start dark:shadow-themeColor shadow-neutral-700 shadow-lg hover:shadow-none TABLET:p-[1.5rem]`}
      >
        <div className=" flex justify-end w-full LAPTOP:mb-[0rem] ">
          <div className="flex justify-center items-center bg-themeColor  rounded-[0.3rem] h-[55px] w-[55px] LAPTOP:w-[80px] LAPTOP:h-[80px]">
            <PrimaryArrowSVG className="w-[50%] h-[50%] fill-primaryBackgroundColor  group-hover:fill-textPrimaryColor"></PrimaryArrowSVG>
          </div>
        </div>

        {icon}

        <div className=" text-Mobile-Head mb-[2.22%] mt-[3.33%] font-medium text-textPrimaryColor TABLET:text-Tablet-Text SMALL_LAPTOP:text-SMALL_LAPTOP-S-Subheading SMALL_LAPTOP:font-normal">
          {mainHeading}
        </div>

        <div className=" text-Mobile-Text w-[82%] text-textSecondaryColor TABLET:text-Tablet-Small-Text LAPTOP:text-SMALL_LAPTOP-Text ">
          {description}
        </div>
      </Link>
    </>
  );
}
