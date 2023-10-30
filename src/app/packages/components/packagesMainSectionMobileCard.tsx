import AppDarkSVG from "../../../../public/servicesSectionImages/appDarkSVG";
import WebDarkSVG from "../../../../public/servicesSectionImages/webDarkSVG";
import SecurityDarkSVG from "../../../../public/servicesSectionImages/securityDarkSVG";
import MarketingDarkSVG from "../../../../public/servicesSectionImages/marketingDarkSVG";

import SeoDarkSVG from "../../../../public/servicesSectionImages/seoDarkSVG";
import UxDarkSVG from "../../../../public/servicesSectionImages/uxDarkSVG";
type PackagesMainSectionMobileCardProps = {
  mainService: string;
  Deliverables: string[];
};
export default function PackagesMainSectionMobileCard({
  mainService,
  Deliverables,
}: PackagesMainSectionMobileCardProps) {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full my-[5.58%]">
        <div className="flex justify-center gap-[0.5rem]  mb-[8px]   items-center ">
          <div className="">
            {mainService === "Web Dev" || mainService === "Web Dev/App Dev" ? (
              <WebDarkSVG className="fill-primary w-[1.5rem] h-[1.5rem]"></WebDarkSVG>
            ) : mainService === "Marketing" ? (
              <MarketingDarkSVG className="fill-primary w-[1.5rem] h-[1.5rem]"></MarketingDarkSVG>
            ) : mainService === "SEO" ? (
              <SeoDarkSVG className="fill-primary w-[1.5rem] h-[1.5rem]"></SeoDarkSVG>
            ) : mainService === "UX Design" ? (
              <UxDarkSVG className="fill-primary w-[1.5rem] h-[1.5rem]"></UxDarkSVG>
            ) : (
              <SecurityDarkSVG className="fill-primary w-[1.5rem] h-[1.5rem]"></SecurityDarkSVG>
            )}
          </div>
          <span className=" text-black dark:text-white font-medium text-Mobile-Head flex items-center text-center  ">
            {mainService}
          </span>
        </div>

        <div className=" flex   items-center justify-center flex-wrap text-center">
          {Deliverables.map((deliverable, index) => {
            return (
              <span className="inline text-Mobile-Text">
                {deliverable}
                {index !== Deliverables.length - 1 ? <span>,</span> : null}
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
}
