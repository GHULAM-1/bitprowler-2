import LongBottom from "@/components/custom/longBottom";
import { servicesPageSeoContent } from "../../data/servicesPageSeoContent";
import BigCTA from "@/components/custom/bigCTA";
import ServicesPageHeroMobile from "../../components/servicesPageHeroMobile";
import ServicesWhySection from "../../components/servicesWhySection";
import StagesSection from "@/app/aboutus/components/stagesSection";
import HighLightSection from "../../components/highlightSection";
import ServicesDeliverablesSection from "../../components/servicesDeliverablesSection";

export default function Seo() {
  return (
    <>
      <div className="w-full flex-col justify-center items-center">
        <ServicesPageHeroMobile
          name={servicesPageSeoContent.name}
          hero={servicesPageSeoContent.hero}
        ></ServicesPageHeroMobile>
        <ServicesWhySection
          mainHeading={servicesPageSeoContent.whySection.mainHeading}
          subHeadings={servicesPageSeoContent.whySection.subHeadings}
        ></ServicesWhySection>
        <StagesSection
          stages={servicesPageSeoContent.approachSection}
        ></StagesSection>
        <HighLightSection
          oneLinerFirst={servicesPageSeoContent.oneLinerFirst}
          oneLinerSecond={servicesPageSeoContent.oneLinerSecond}
        ></HighLightSection>
        <ServicesDeliverablesSection
          deliverables={servicesPageSeoContent.deliverables}
        ></ServicesDeliverablesSection>
        <BigCTA></BigCTA>
        <LongBottom></LongBottom>
      </div>
    </>
  );
}
