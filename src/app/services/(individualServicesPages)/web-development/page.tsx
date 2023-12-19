"use client";
import ServicesPageExplanation from "../../components/servicesPageExplanation";
import ServicesPageDeliverables from "../../components/servicesPageDeliverables";
import ServicesPageWebHero from "../../components/servicesPageWebHero";
import WebDarkSVG from "../../../../../public/servicesSectionImages/webDarkSVG";
import DotHeadings from "@/components/ui/dotHeadings";
import LongBottom from "@/components/ui/longBottom";
import { servicesPageWebContent } from "../../data/servicesPageWebContent";
import BigCTA from "@/components/ui/bigCTA";
import ServicesPageHeroMobile from "../../components/servicesPageHeroMobile";
import ServicesWhySection from "../../components/servicesWhySection";
import StagesSection from "@/app/aboutus/components/stagesSection";
import HighLightSection from "../../components/highlightSection";
import ServicesDeliverablesSection from "../../components/servicesDeliverablesSection";
import ServicesAproachSection from "../../components/servicesApproachSection";
import ManifestoSection from "@/app/aboutus/components/manifestoSection";
import { useTogglingStore } from "@/store/store";

export default function WebDev() {
  const isNavOpen = useTogglingStore((state: any) => state.isNavOpen);

  return (
    <>
      <div
        className={`overflow-x-hidden flex flex-col items-center justify-center absolute z-40  ${
          isNavOpen === true ? "hidden overscroll-none" : null
        }`}
      >
        <div className="w-full flex-col justify-center items-center">
          <div className="flex SMALL_LAPTOP:hidden">
            <ServicesPageHeroMobile
              name={servicesPageWebContent.name}
              hero={servicesPageWebContent.hero}
            ></ServicesPageHeroMobile>
          </div>
          <div className="hidden SMALL_LAPTOP:flex SMALL_LAPTOP:flex-col mt-[5.5rem] h-screen">
            <DotHeadings
              afterDotWord={servicesPageWebContent.name}
              beforeDotWord="Services"
            ></DotHeadings>
            <ServicesPageWebHero
              name={servicesPageWebContent.name}
              hero={servicesPageWebContent.hero}
            ></ServicesPageWebHero>
          </div>
          {/* <ServicesWhySection
          mainHeading={servicesPageWebContent.whySection.mainHeading}
          subHeadings={servicesPageWebContent.whySection.subHeadings}
        ></ServicesWhySection> */}
          <StagesSection
            stages={servicesPageWebContent.whySection.subHeadings}
            mainHeading={servicesPageWebContent.whySection.mainHeading}
          ></StagesSection>

          <StagesSection
            stages={servicesPageWebContent.approachSection}
            mainHeading="What Sets Us Apart"
            indicator="approach"
          ></StagesSection>
          {/* <HighLightSection
          oneLinerFirst={servicesPageWebContent.oneLinerFirst}
          oneLinerSecond={servicesPageWebContent.oneLinerSecond}
        ></HighLightSection> */}
          <ManifestoSection
            firstWord={servicesPageWebContent.oneLinerFirst}
            secondWord={servicesPageWebContent.oneLinerSecond}
          ></ManifestoSection>

          <div className="hidden TABLET:flex">
            <ServicesPageDeliverables
              deliverablesData={servicesPageWebContent.deliverables}
            ></ServicesPageDeliverables>
          </div>

          <div className="flex TABLET:hidden">
            <ServicesDeliverablesSection
              deliverables={servicesPageWebContent.deliverables}
            ></ServicesDeliverablesSection>
          </div>
          <BigCTA>Let's Work Together</BigCTA>
          <LongBottom></LongBottom>
        </div>
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
