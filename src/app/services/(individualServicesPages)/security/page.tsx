import LongBottom from "@/components/custom/longBottom";
import { servicesPageSecurityContent } from "../../data/servicesPageSecurityContent";
import BigCTA from "@/components/custom/bigCTA";
import ServicesPageHeroMobile from "../../components/servicesPageHeroMobile";
import ServicesWhySection from "../../components/servicesWhySection";
import StagesSection from "@/app/aboutus/components/stagesSection";
import HighLightSection from "../../components/highlightSection";
import ServicesDeliverablesSection from "../../components/servicesDeliverablesSection";

export default function Security() {
  return (
    <>
      <div className="w-full flex-col justify-center items-center">
        <ServicesPageHeroMobile
          name={servicesPageSecurityContent.name}
          hero={servicesPageSecurityContent.hero}
        ></ServicesPageHeroMobile>
        <ServicesWhySection
          mainHeading={servicesPageSecurityContent.whySection.mainHeading}
          subHeadings={servicesPageSecurityContent.whySection.subHeadings}
        ></ServicesWhySection>
        <StagesSection
          stages={servicesPageSecurityContent.approachSection}
        ></StagesSection>
        <HighLightSection
          oneLinerFirst={servicesPageSecurityContent.oneLinerFirst}
          oneLinerSecond={servicesPageSecurityContent.oneLinerSecond}
        ></HighLightSection>
        <ServicesDeliverablesSection
          deliverables={servicesPageSecurityContent.deliverables}
        ></ServicesDeliverablesSection>
        <BigCTA></BigCTA>
        <LongBottom></LongBottom>
      </div>
    </>
  );
}
