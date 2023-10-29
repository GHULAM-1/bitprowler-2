import ServicesPageExplanation from "../../components/servicesPageExplanation";
import ServicesPageDeliverables from "../../components/servicesPageDeliverables";
import ServicesPageWebHero from "../../components/servicesPageWebHero";
import { servicesPageWebContent } from "../../data/servicesPageWebContent";
import WebDarkSVG from "../../../../../public/servicesSectionImages/webDarkSVG";
import DotHeadings from "@/components/custom/dotHeadings";
import LongBottom from "@/components/custom/longBottom";
import BigCTA from "@/components/custom/bigCTA";
import ServicesPageHeroMobile from "../../components/servicesPageHeroMobile";
import ServicesWhySection from "../../components/servicesWhySection";
import StagesSection from "@/app/aboutus/components/stagesSection";
import HighLightSection from "../../components/highlightSection";
import ServicesDeliverablesSection from "../../components/servicesDeliverablesSection";

export default function WebDev() {
  return (
    <>
      <div className="w-full flex-col justify-center items-center">
        <ServicesPageHeroMobile
          name={servicesPageWebContent.name}
          hero={servicesPageWebContent.hero}
        ></ServicesPageHeroMobile>
        <ServicesWhySection
          mainHeading={servicesPageWebContent.whySection.mainHeading}
          subHeadings={servicesPageWebContent.whySection.subHeadings}
        ></ServicesWhySection>
        <StagesSection
          stages={servicesPageWebContent.approachSection}
        ></StagesSection>
        <HighLightSection
          oneLinerFirst={servicesPageWebContent.oneLinerFirst}
          oneLinerSecond={servicesPageWebContent.oneLinerSecond}
        ></HighLightSection>
        <ServicesDeliverablesSection
          deliverables={servicesPageWebContent.deliverables}
        ></ServicesDeliverablesSection>
        <BigCTA></BigCTA>
        <LongBottom></LongBottom>
      </div>
    </>
  );
}

{
  /* <div className="bg-background">
        <div className="mt-[4rem]  bg-background flex flex-col justify-center items-start px-[3rem]">
          <div className="w-full h-screen flex flex-col items-start gap-[3rem] ">
            <DotHeadings
              afterDotWord={servicesPageWebContent.name}
              beforeDotWord="Services"
              cssClampClass="clamp-services-page-mainHeading"
            ></DotHeadings>
            <ServicesPageWebHero></ServicesPageWebHero>
          </div>
          <ServicesPageExplanation></ServicesPageExplanation>
          <ServicesPageDeliverables
            deliverablesData={servicesPageWebContent.deliverables}
          ></ServicesPageDeliverables>
        </div>
      </div>
      <BigCTA></BigCTA>
      <LongBottom></LongBottom> */
}
