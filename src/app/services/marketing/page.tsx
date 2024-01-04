import ServicesPageDeliverables from "@/components/services/servicesPageDeliverables";
import ServicesPageHeroL from "@/components/services/servicesPageHeroL";
import DotHeadings from "@/components/ui/dotHeadings";
import Footer from "@/components/ui/footer";
import { servicesPageMarketingContent } from "@/data/services/servicesPageMarketingContent";
import CTASection from "@/components/ui/CTASection";
import ServicesPageHeroM from "@/components/services/servicesPageHeroM";
import StagesSection from "@/components/aboutus/stagesSection";
import ServicesDeliverablesSection from "@/components/services/servicesDeliverablesSection";
import ManifestoSection from "@/components/aboutus/manifestoSection";
import CustomersSection from "@/components/ui/customersSection";

export default function WebDev() {
  return (
    <>
      <div className="w-full flex  flex-col justify-center items-center ">
        <div className="flex SMALL_LAPTOP:hidden">
          <ServicesPageHeroM
            name={servicesPageMarketingContent.name}
            hero={servicesPageMarketingContent.hero}
            icon={servicesPageMarketingContent.iconM}
          />
        </div>

        <div className="hidden SMALL_LAPTOP:flex SMALL_LAPTOP:flex-col mt-[5.5rem] h-screen  items-center ">
          <DotHeadings
            afterDotWord={servicesPageMarketingContent.name}
            beforeDotWord="Services"
          />
          <ServicesPageHeroL
            hero={servicesPageMarketingContent.hero}
            icon={servicesPageMarketingContent.iconL}
          />
        </div>

        <StagesSection
          stages={servicesPageMarketingContent.whySection.subHeadings}
          mainHeading={servicesPageMarketingContent.whySection.mainHeading}
        />

        <StagesSection
          stages={servicesPageMarketingContent.approachSection}
          mainHeading="What Sets Us Apart"
          indicator="approach"
        />

        <ManifestoSection
          firstWord={servicesPageMarketingContent.oneLinerFirst}
          secondWord={servicesPageMarketingContent.oneLinerSecond}
        />

        <div className="hidden TABLET:flex">
          <ServicesPageDeliverables
            deliverablesData={servicesPageMarketingContent.deliverables}
          />
        </div>

        <div className="flex TABLET:hidden">
          <ServicesDeliverablesSection
            deliverables={servicesPageMarketingContent.deliverables}
          />
        </div>
        <CustomersSection />
        <CTASection>Let's Work Together</CTASection>
        <Footer />
      </div>
    </>
  );
}
