"use client";
import ServicesPageExplanation from "../../components/servicesPageExplanation";
import ServicesPageDeliverables from "../../components/servicesPageDeliverables";
import ServicesPageWebHero from "../../components/servicesPageWebHero";
import WebDarkSVG from "../../../../../public/servicesSectionImages/webDarkSVG";
import DotHeadings from "@/components/custom/dotHeadings";
import LongBottom from "@/components/custom/longBottom";

import BigCTA from "@/components/custom/bigCTA";
import ServicesPageHeroMobile from "../../components/servicesPageHeroMobile";
import ServicesWhySection from "../../components/servicesWhySection";
import StagesSection from "@/app/aboutus/components/stagesSection";
import HighLightSection from "../../components/highlightSection";
import ServicesDeliverablesSection from "../../components/servicesDeliverablesSection";
import ServicesAproachSection from "../../components/servicesApproachSection";
import ManifestoSection from "@/app/aboutus/components/manifestoSection";
import { servicesPageUxContent } from "../../data/servicesPageUxContent";
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
              name={servicesPageUxContent.name}
              hero={servicesPageUxContent.hero}
            ></ServicesPageHeroMobile>
          </div>
          <div className="hidden SMALL_LAPTOP:flex SMALL_LAPTOP:flex-col mt-[5.5rem] h-screen">
            <DotHeadings
              afterDotWord={servicesPageUxContent.name}
              beforeDotWord="Services"
            ></DotHeadings>
            <ServicesPageWebHero
              name={servicesPageUxContent.name}
              hero={servicesPageUxContent.hero}
            ></ServicesPageWebHero>
          </div>
          {/* <ServicesWhySection
          mainHeading={servicesPageUxContent.whySection.mainHeading}
          subHeadings={servicesPageUxContent.whySection.subHeadings}
        ></ServicesWhySection> */}
          <StagesSection
            stages={servicesPageUxContent.whySection.subHeadings}
            mainHeading={servicesPageUxContent.whySection.mainHeading}
          ></StagesSection>

          <StagesSection
            stages={servicesPageUxContent.approachSection}
            mainHeading="What Sets Us Apart"
            indicator="approach"
          ></StagesSection>
          {/* <HighLightSection
          oneLinerFirst={servicesPageUxContent.oneLinerFirst}
          oneLinerSecond={servicesPageUxContent.oneLinerSecond}
        ></HighLightSection> */}
          <ManifestoSection
            firstWord={servicesPageUxContent.oneLinerFirst}
            secondWord={servicesPageUxContent.oneLinerSecond}
          ></ManifestoSection>

          <div className="hidden TABLET:flex">
            <ServicesPageDeliverables
              deliverablesData={servicesPageUxContent.deliverables}
            ></ServicesPageDeliverables>
          </div>

          <div className="flex TABLET:hidden">
            <ServicesDeliverablesSection
              deliverables={servicesPageUxContent.deliverables}
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
              afterDotWord={servicesPageUxContent.name}
              beforeDotWord="Services"
              cssClampClass="clamp-services-page-mainHeading"
            ></DotHeadings>
            <ServicesPageWebHero></ServicesPageWebHero>
          </div>
          <ServicesPageExplanation></ServicesPageExplanation>
          <ServicesPageDeliverables
            deliverablesData={servicesPageUxContent.deliverables}
          ></ServicesPageDeliverables>
        </div>
      </div>
      <BigCTA></BigCTA>
      <LongBottom></LongBottom> */
}
