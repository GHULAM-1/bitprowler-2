import LongBottom from "@/components/custom/longBottom";
import { servicesPageMarketingContent } from "../../data/servicesPageMarketingContent";
import BigCTA from "@/components/custom/bigCTA";
import ServicesPageHeroMobile from "../../components/servicesPageHeroMobile";
import ServicesWhySection from "../../components/servicesWhySection";
import StagesSection from "@/app/aboutus/components/stagesSection";
import HighLightSection from "../../components/highlightSection";
import ServicesDeliverablesSection from "../../components/servicesDeliverablesSection";

export default function Marketing() {
  return (
    <>
      <div className="w-full flex-col justify-center items-center">
        <ServicesPageHeroMobile
          name={servicesPageMarketingContent.name}
          hero={servicesPageMarketingContent.hero}
        ></ServicesPageHeroMobile>
        <ServicesWhySection
          mainHeading={servicesPageMarketingContent.whySection.mainHeading}
          subHeadings={servicesPageMarketingContent.whySection.subHeadings}
        ></ServicesWhySection>
        <StagesSection
          stages={servicesPageMarketingContent.approachSection}
        ></StagesSection>
        <HighLightSection
          oneLinerFirst={servicesPageMarketingContent.oneLinerFirst}
          oneLinerSecond={servicesPageMarketingContent.oneLinerSecond}
        ></HighLightSection>
        <ServicesDeliverablesSection
          deliverables={servicesPageMarketingContent.deliverables}
        ></ServicesDeliverablesSection>
        <BigCTA></BigCTA>
        <LongBottom></LongBottom>
      </div>
    </>
  );
}
