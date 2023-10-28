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
      <div
        className={`  rounded-[0.5rem] border-[2px] flex flex-col  border-primary p-[4.34%] dark:bg-[#151515] bg-[#EAEAEA] hover:bg-primary dark:hover:bg-primary transition-transform transform hover:scale-105 group cursor-pointer mb-[8.69%] w-[85.5%] items-start`}
      >
        <div className=" flex justify-end w-full  ">
          <div className="flex justify-center items-center bg-primary  rounded-[0.3rem] h-[55px] w-[55px]">
            <ArrowLightSVG className="w-[50%] h-[50%] fill-black dark:group-hover:fill-white group-hover:fill-black"></ArrowLightSVG>
          </div>
        </div>

        {mainHeading === "Web Dev" ? (
          <WebDarkSVG className="fill-primary h-[80px] w-[80px] dark:group-hover:fill-white my-[4.34%] group-hover:fill-black"></WebDarkSVG>
        ) : mainHeading === "SEO" ? (
          <SeoDarkSVG className="fill-primary h-[80px] w-[80px] dark:group-hover:fill-white my-[4.34%] group-hover:fill-black"></SeoDarkSVG>
        ) : mainHeading === "Security" ? (
          <SecurityDarkSVG className=" fill-primary h-[80px] w-[80px] dark:group-hover:fill-white my-[4.34%] group-hover:fill-black"></SecurityDarkSVG>
        ) : mainHeading === "Marketing" ? (
          <MarketingDarkSVG className=" fill-primary h-[80px] w-[80px] dark:group-hover:fill-white my-[4.34%] group-hover:fill-black"></MarketingDarkSVG>
        ) : mainHeading === "UX design" ? (
          <UxDarkSVG className="fill-primary h-[80px] w-[80px] dark:group-hover:fill-white my-[4.34%] group-hover:fill-black"></UxDarkSVG>
        ) : (
          <AppDarkSVG className="fill-primary h-[80px] w-[80px] dark:group-hover:fill-white my-[4.34%] group-hover:fill-black"></AppDarkSVG>
        )}

        <div className=" text-Mobile-Head mb-[2.22%] mt-[3.33%] font-medium">
          {mainHeading}
        </div>

        <div className="service-description text-Mobile-Text w-[82%]">
          {description}
        </div>
      </div>
    </>
  );
}
