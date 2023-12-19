"use client";
import ServicesPageExplanation from "../../components/servicesPageExplanation";
import ServicesPageDeliverables from "../../components/servicesPageDeliverables";
import ServicesPageWebHero from "../../components/servicesPageWebHero";
import WebDarkSVG from "../../../../../public/servicesSectionImages/webDarkSVG";
import DotHeadings from "@/components/ui/dotHeadings";
import LongBottom from "@/components/ui/longBottom";
import { useTogglingStore } from "@/store/store";

import BigCTA from "@/components/ui/bigCTA";
import ServicesPageHeroMobile from "../../components/servicesPageHeroMobile";
import ServicesWhySection from "../../components/servicesWhySection";
import StagesSection from "@/app/aboutus/components/stagesSection";
import HighLightSection from "../../components/highlightSection";
import ServicesDeliverablesSection from "../../components/servicesDeliverablesSection";
import ServicesAproachSection from "../../components/servicesApproachSection";
import ManifestoSection from "@/app/aboutus/components/manifestoSection";
import { servicesPageAppContent } from "../../data/servicesPageAppContent";
import CustomersSection from "@/app/(components)/customersSection/customersSection";
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
              name={servicesPageAppContent.name}
              hero={servicesPageAppContent.hero}
            ></ServicesPageHeroMobile>
          </div>
          <div className="hidden SMALL_LAPTOP:flex SMALL_LAPTOP:flex-col mt-[5.5rem] h-screen">
            <DotHeadings
              afterDotWord={servicesPageAppContent.name}
              beforeDotWord="Services"
            ></DotHeadings>
            <ServicesPageWebHero
              name={servicesPageAppContent.name}
              hero={servicesPageAppContent.hero}
            ></ServicesPageWebHero>
          </div>
          {/* <ServicesWhySection
          mainHeading={servicesPageAppContent.whySection.mainHeading}
          subHeadings={servicesPageAppContent.whySection.subHeadings}
        ></ServicesWhySection> */}
          <StagesSection
            stages={servicesPageAppContent.whySection.subHeadings}
            mainHeading={servicesPageAppContent.whySection.mainHeading}
          ></StagesSection>

          <StagesSection
            stages={servicesPageAppContent.approachSection}
            mainHeading="What Sets Us Apart"
            indicator="approach"
          ></StagesSection>
          {/* <HighLightSection
          oneLinerFirst={servicesPageAppContent.oneLinerFirst}
          oneLinerSecond={servicesPageAppContent.oneLinerSecond}
        ></HighLightSection> */}
          <ManifestoSection
            firstWord={servicesPageAppContent.oneLinerFirst}
            secondWord={servicesPageAppContent.oneLinerSecond}
          ></ManifestoSection>

          <CustomersSection></CustomersSection>
          <div className="hidden TABLET:flex">
            <ServicesPageDeliverables
              deliverablesData={servicesPageAppContent.deliverables}
            ></ServicesPageDeliverables>
          </div>

          <div className="flex TABLET:hidden">
            <ServicesDeliverablesSection
              deliverables={servicesPageAppContent.deliverables}
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
              afterDotWord={servicesPageAppContent.name}
              beforeDotWord="Services"
              cssClampClass="clamp-services-page-mainHeading"
            ></DotHeadings>
            <ServicesPageWebHero></ServicesPageWebHero>
          </div>
          <ServicesPageExplanation></ServicesPageExplanation>
          <ServicesPageDeliverables
            deliverablesData={servicesPageAppContent.deliverables}
          ></ServicesPageDeliverables>
        </div>
      </div>
      <BigCTA></BigCTA>
      <LongBottom></LongBottom> */
}
