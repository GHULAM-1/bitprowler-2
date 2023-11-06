"use client";
import ServicesPageExplanation from "../../components/servicesPageExplanation";
import ServicesPageDeliverables from "../../components/servicesPageDeliverables";
import ServicesPageWebHero from "../../components/servicesPageWebHero";
import WebDarkSVG from "../../../../../public/servicesSectionImages/webDarkSVG";
import DotHeadings from "@/components/custom/dotHeadings";
import LongBottom from "@/components/custom/longBottom";
import { useTogglingStore } from "@/store/store";

import BigCTA from "@/components/custom/bigCTA";
import ServicesPageHeroMobile from "../../components/servicesPageHeroMobile";
import ServicesWhySection from "../../components/servicesWhySection";
import StagesSection from "@/app/aboutus/components/stagesSection";
import HighLightSection from "../../components/highlightSection";
import ServicesDeliverablesSection from "../../components/servicesDeliverablesSection";
import ServicesAproachSection from "../../components/servicesApproachSection";
import ManifestoSection from "@/app/aboutus/components/manifestoSection";
import { servicesPageSeoContent } from "../../data/servicesPageSeoContent";
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
              name={servicesPageSeoContent.name}
              hero={servicesPageSeoContent.hero}
            ></ServicesPageHeroMobile>
          </div>
          <div className="hidden SMALL_LAPTOP:flex SMALL_LAPTOP:flex-col mt-[5.5rem] h-screen">
            <DotHeadings
              afterDotWord={servicesPageSeoContent.name}
              beforeDotWord="Services"
            ></DotHeadings>
            <ServicesPageWebHero
              name={servicesPageSeoContent.name}
              hero={servicesPageSeoContent.hero}
            ></ServicesPageWebHero>
          </div>
          {/* <ServicesWhySection
          mainHeading={servicesPageSeoContent.whySection.mainHeading}
          subHeadings={servicesPageSeoContent.whySection.subHeadings}
        ></ServicesWhySection> */}
          <StagesSection
            stages={servicesPageSeoContent.whySection.subHeadings}
            mainHeading={servicesPageSeoContent.whySection.mainHeading}
          ></StagesSection>

          <StagesSection
            stages={servicesPageSeoContent.approachSection}
            mainHeading="Our Approach"
            indicator="approach"
          ></StagesSection>
          {/* <HighLightSection
          oneLinerFirst={servicesPageSeoContent.oneLinerFirst}
          oneLinerSecond={servicesPageSeoContent.oneLinerSecond}
        ></HighLightSection> */}
          <ManifestoSection
            firstWord={servicesPageSeoContent.oneLinerFirst}
            secondWord={servicesPageSeoContent.oneLinerSecond}
          ></ManifestoSection>

          <div className="hidden TABLET:flex">
            <ServicesPageDeliverables
              deliverablesData={servicesPageSeoContent.deliverables}
            ></ServicesPageDeliverables>
          </div>

          <div className="flex TABLET:hidden">
            <ServicesDeliverablesSection
              deliverables={servicesPageSeoContent.deliverables}
            ></ServicesDeliverablesSection>
          </div>
          <BigCTA></BigCTA>
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
              afterDotWord={servicesPageSeoContent.name}
              beforeDotWord="Services"
              cssClampClass="clamp-services-page-mainHeading"
            ></DotHeadings>
            <ServicesPageWebHero></ServicesPageWebHero>
          </div>
          <ServicesPageExplanation></ServicesPageExplanation>
          <ServicesPageDeliverables
            deliverablesData={servicesPageSeoContent.deliverables}
          ></ServicesPageDeliverables>
        </div>
      </div>
      <BigCTA></BigCTA>
      <LongBottom></LongBottom> */
}
