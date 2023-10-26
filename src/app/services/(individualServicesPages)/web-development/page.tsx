import ServicesPageExplanation from "../../components/servicesPageExplanation";
import ServicesPageDeliverables from "../../components/servicesPageDeliverables";
import ServicesPageWebHero from "../../components/servicesPageWebHero";
import { servicesPageWebContent } from "../../data/servicesPageWebContent";
import WebDarkSVG from "../../../../../public/servicesSectionImages/webDarkSVG";
import DotHeadings from "@/components/custom/dotHeadings";
export default function WebDev() {
  return (
    <>
      <div className="bg-background">
        <div className="mt-[4rem]  bg-background flex flex-col justify-center items-start px-[3rem]">
          <div className="w-full h-screen flex flex-col items-start gap-[3rem] ">
            <DotHeadings
              afterDotWord={servicesPageWebContent.name}
              beforeDotWord="Services"
              cssClampClass="clamp-services-page-mainHeading"
            ></DotHeadings>
            <ServicesPageWebHero></ServicesPageWebHero>
          </div>
          {/* <ServicesPageExplanation></ServicesPageExplanation>
          <ServicesPageDeliverables
            deliverablesData={ServicesPageWebPillsContent}
          ></ServicesPageDeliverables> */}
        </div>
      </div>
    </>
  );
}
