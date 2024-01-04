import ServicesPageDeliverables from "@/components/services/servicesPageDeliverables";
import ServicesPageHeroL from "@/components/services/servicesPageHeroL";
import DotHeadings from "@/components/ui/dotHeadings";
import Footer from "@/components/ui/footer";
import { servicesPageSecurityContent } from "@/data/services/servicesPageSecurityContent";
import CTASection from "@/components/ui/CTASection";
import ServicesPageHeroM from "@/components/services/servicesPageHeroM";
import StagesSection from "@/components/aboutus/stagesSection";
import ServicesDeliverablesSection from "@/components/services/servicesDeliverablesSection";
import ManifestoSection from "@/components/aboutus/manifestoSection";
import CustomersSection from "@/components/ui/customersSection";

export default function Security() {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="flex SMALL_LAPTOP:hidden">
          <ServicesPageHeroM
            name={servicesPageSecurityContent.name}
            hero={servicesPageSecurityContent.hero}
            icon={servicesPageSecurityContent.iconM}
          />
        </div>

        <div className="hidden SMALL_LAPTOP:flex SMALL_LAPTOP:flex-col mt-[5.5rem] h-screen">
          <DotHeadings
            afterDotWord={servicesPageSecurityContent.name}
            beforeDotWord="Services"
          />
          <ServicesPageHeroL
            hero={servicesPageSecurityContent.hero}
            icon={servicesPageSecurityContent.iconL}
          />
        </div>

        <StagesSection
          stages={servicesPageSecurityContent.whySection.subHeadings}
          mainHeading={servicesPageSecurityContent.whySection.mainHeading}
        />

        <StagesSection
          stages={servicesPageSecurityContent.approachSection}
          mainHeading="What Sets Us Apart"
          indicator="approach"
        />

        <ManifestoSection
          firstWord={servicesPageSecurityContent.oneLinerFirst}
          secondWord={servicesPageSecurityContent.oneLinerSecond}
        />

        <div className="hidden TABLET:flex">
          <ServicesPageDeliverables
            deliverablesData={servicesPageSecurityContent.deliverables}
          />
        </div>

        <div className="flex TABLET:hidden">
          <ServicesDeliverablesSection
            deliverables={servicesPageSecurityContent.deliverables}
          />
        </div>
        <CustomersSection />
        <CTASection>Let's Work Together</CTASection>
        <Footer />
      </div>
    </>
  );
}
