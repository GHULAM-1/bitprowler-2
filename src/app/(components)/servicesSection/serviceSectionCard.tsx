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
      <Link href={pagePath}>
        <div
          className={`min-w-[262px] rounded-[0.5rem] border flex flex-col  border-primary p-[1rem] dark:bg-[#151515] bg-[#EAEAEA] max-w-[30rem] hover:bg-primary dark:hover:bg-primary transition-transform transform hover:scale-105 group max-[750px]:mr-[0rem] cursor-pointer`}
        >
          <div className=" flex justify-end ">
            <ArrowLightSVG className="w-[40px] h-[40px] fill-primary dark:group-hover:fill-white group-hover:fill-black"></ArrowLightSVG>
          </div>

          {mainHeading === "Web Dev" ? (
            <WebDarkSVG className="fill-primary h-[60px] w-[60px] dark:group-hover:fill-white my-[1rem] group-hover:fill-black "></WebDarkSVG>
          ) : mainHeading === "SEO" ? (
            <SeoDarkSVG className="fill-primary h-[60px] w-[60px] dark:group-hover:fill-white my-[1rem] group-hover:fill-black"></SeoDarkSVG>
          ) : mainHeading === "Security" ? (
            <SecurityDarkSVG className=" fill-primary h-[60px] w-[60px] dark:group-hover:fill-white my-[1rem] group-hover:fill-black"></SecurityDarkSVG>
          ) : mainHeading === "Marketing" ? (
            <MarketingDarkSVG className=" fill-primary h-[60px] w-[60px] dark:group-hover:fill-white my-[1rem] group-hover:fill-black"></MarketingDarkSVG>
          ) : mainHeading === "UX design" ? (
            <UxDarkSVG className="fill-primary h-[60px] w-[60px] dark:group-hover:fill-white my-[1rem] group-hover:fill-black"></UxDarkSVG>
          ) : (
            <AppDarkSVG className="fill-primary h-[60px] w-[60px] dark:group-hover:fill-white my-[1rem] group-hover:fill-black"></AppDarkSVG>
          )}

          <div className="service-heading text-[40px] clamp-service-main-heading ">
            {mainHeading}
          </div>

          <div className="service-description text-[16px]">{description}</div>
        </div>
      </Link>
    </>
  );
}
