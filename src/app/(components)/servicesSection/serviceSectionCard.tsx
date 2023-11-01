import Link from "next/link";
import WebDarkSVG from "../../../../public/servicesSectionImages/webDarkSVG";
import AppDarkSVG from "../../../../public/servicesSectionImages/appDarkSVG";
import SeoDarkSVG from "../../../../public/servicesSectionImages/seoDarkSVG";
import SecurityDarkSVG from "../../../../public/servicesSectionImages/securityDarkSVG";
import MarketingDarkSVG from "../../../../public/servicesSectionImages/marketingDarkSVG";
import UxDarkSVG from "../../../../public/servicesSectionImages/uxDarkSVG";
import ArrowLightSVG from "../../../../public/servicesSectionImages/arrowLightSVG";

type ServiceCardProps = {
  mainHeading: string;
  description: string;
  pagePath: string;
};
export default function ServiceSectionCard({
  mainHeading,
  description,
  pagePath,
}: ServiceCardProps) {
  return (
    <>
      <Link
        href={pagePath}
        className={`  rounded-[0.5rem] border-[2px] flex flex-col  
        dark:hover:bg-themeColor
        border-themeColor p-[4.34%] dark:bg-textSecondaryColorLight bg-tertiaryBackgroundColorLight hover:bg-themeColor transition-transform transform hover:scale-105 group cursor-pointer mb-[8.69%] w-[85.5%] items-start dark:shadow-themeColor shadow-neutral-700 shadow-lg `}
      >
        <div className=" flex justify-end w-full  ">
          <div className="flex justify-center items-center bg-themeColor  rounded-[0.3rem] h-[55px] w-[55px]">
            <ArrowLightSVG className="w-[50%] h-[50%] fill-textPrimaryColor  group-hover:fill-textPrimaryColor"></ArrowLightSVG>
          </div>
        </div>

        {mainHeading === "Web Dev" ? (
          <WebDarkSVG className="fill-themeColor h-[80px] w-[80px]  group-hover:fill-textPrimaryColor my-[4.34%]"></WebDarkSVG>
        ) : mainHeading === "SEO" ? (
          <SeoDarkSVG className="fill-themeColor h-[80px] w-[80px]  my-[4.34%] group-hover:fill-textPrimaryColor"></SeoDarkSVG>
        ) : mainHeading === "Security" ? (
          <SecurityDarkSVG className=" fill-themeColor h-[80px] w-[80px]  my-[4.34%] group-hover:fill-textPrimaryColor"></SecurityDarkSVG>
        ) : mainHeading === "Marketing" ? (
          <MarketingDarkSVG className=" fill-themeColor h-[80px] w-[80px]  my-[4.34%] group-hover:fill-textPrimaryColor"></MarketingDarkSVG>
        ) : mainHeading === "UX design" ? (
          <UxDarkSVG className="fill-themeColor h-[80px] w-[80px]  my-[4.34%] group-hover:fill-textPrimaryColor"></UxDarkSVG>
        ) : (
          <AppDarkSVG className="fill-themeColor h-[80px] w-[80px]  my-[4.34%] group-hover:fill-textPrimaryColor"></AppDarkSVG>
        )}

        <div className=" text-Mobile-Head mb-[2.22%] mt-[3.33%] font-medium text-textPrimaryColor TABLET:text-Tablet-Text">
          {mainHeading}
        </div>

        <div className=" text-Mobile-Text w-[82%] text-textSecondaryColor TABLET:text-Tablet-Small-Text ">
          {description}
        </div>
      </Link>
    </>
  );
}
