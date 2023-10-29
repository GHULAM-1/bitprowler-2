import LongBottom from "@/components/custom/longBottom";
import { servicesPageAppContent } from "../../data/servicesPageAppContent";
import BigCTA from "@/components/custom/bigCTA";
import ServicesPageHeroMobile from "../../components/servicesPageHeroMobile";
import ServicesWhySection from "../../components/servicesWhySection";
import StagesSection from "@/app/aboutus/components/stagesSection";
import HighLightSection from "../../components/highlightSection";
import ServicesDeliverablesSection from "../../components/servicesDeliverablesSection";

export default function AppDev() {
  return (
    <>
      <div className="w-full flex-col justify-center items-center">
        <ServicesPageHeroMobile
          name={servicesPageAppContent.name}
          hero={servicesPageAppContent.hero}
        ></ServicesPageHeroMobile>
        <ServicesWhySection
          mainHeading={servicesPageAppContent.whySection.mainHeading}
          subHeadings={servicesPageAppContent.whySection.subHeadings}
        ></ServicesWhySection>
        <StagesSection
          stages={servicesPageAppContent.approachSection}
        ></StagesSection>
        <HighLightSection
          oneLinerFirst={servicesPageAppContent.oneLinerFirst}
          oneLinerSecond={servicesPageAppContent.oneLinerSecond}
        ></HighLightSection>
        <ServicesDeliverablesSection
          deliverables={servicesPageAppContent.deliverables}
        ></ServicesDeliverablesSection>
        <BigCTA></BigCTA>
        <LongBottom></LongBottom>
      </div>
    </>
  );
}
