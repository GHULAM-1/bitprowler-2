import LongBottom from "@/components/custom/longBottom";
import { servicesPageUxContent } from "../../data/servicesPageUxContent";
import BigCTA from "@/components/custom/bigCTA";
import ServicesPageHeroMobile from "../../components/servicesPageHeroMobile";
import ServicesWhySection from "../../components/servicesWhySection";
import StagesSection from "@/app/aboutus/components/stagesSection";
import HighLightSection from "../../components/highlightSection";
import ServicesDeliverablesSection from "../../components/servicesDeliverablesSection";

export default function Uiux() {
  return (
    <>
      <div className="w-full flex-col justify-center items-center">
        <ServicesPageHeroMobile
          name={servicesPageUxContent.name}
          hero={servicesPageUxContent.hero}
        ></ServicesPageHeroMobile>
        <ServicesWhySection
          mainHeading={servicesPageUxContent.whySection.mainHeading}
          subHeadings={servicesPageUxContent.whySection.subHeadings}
        ></ServicesWhySection>
        <StagesSection
          stages={servicesPageUxContent.approachSection}
        ></StagesSection>
        <HighLightSection
          oneLinerFirst={servicesPageUxContent.oneLinerFirst}
          oneLinerSecond={servicesPageUxContent.oneLinerSecond}
        ></HighLightSection>
        <ServicesDeliverablesSection
          deliverables={servicesPageUxContent.deliverables}
        ></ServicesDeliverablesSection>
        <BigCTA></BigCTA>
        <LongBottom></LongBottom>
      </div>
    </>
  );
}
