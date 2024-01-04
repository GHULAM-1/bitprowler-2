import ServicesPageDeliverables from "@/components/services/servicesPageDeliverables";
import ServicesPageHeroL from "@/components/services/servicesPageHeroL";
import DotHeadings from "@/components/ui/dotHeadings";
import Footer from "@/components/ui/footer";
import { servicesPageWebContent } from "@/data/services/servicesPageWebContent";
import CTASection from "@/components/ui/CTASection";
import ServicesPageHeroM from "@/components/services/servicesPageHeroM";
import StagesSection from "@/components/aboutus/stagesSection";
import ServicesDeliverablesSection from "@/components/services/servicesDeliverablesSection";
import ManifestoSection from "@/components/aboutus/manifestoSection";
import CustomersSection from "@/components/ui/customersSection";

export default function WebDev() {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="flex SMALL_LAPTOP:hidden">
          <ServicesPageHeroM
            name={servicesPageWebContent.name}
            hero={servicesPageWebContent.hero}
            icon={servicesPageWebContent.iconM}
          />
        </div>

        <div className="hidden SMALL_LAPTOP:flex SMALL_LAPTOP:flex-col mt-[5.5rem] h-screen">
          <DotHeadings
            afterDotWord={servicesPageWebContent.name}
            beforeDotWord="Services"
          />
          <ServicesPageHeroL
            hero={servicesPageWebContent.hero}
            icon={servicesPageWebContent.iconL}
          />
        </div>

        <StagesSection
          stages={servicesPageWebContent.whySection.subHeadings}
          mainHeading={servicesPageWebContent.whySection.mainHeading}
        />

        <StagesSection
          stages={servicesPageWebContent.approachSection}
          mainHeading="What Sets Us Apart"
          indicator="approach"
        />

        <ManifestoSection
          firstWord={servicesPageWebContent.oneLinerFirst}
          secondWord={servicesPageWebContent.oneLinerSecond}
        />

        <div className="hidden TABLET:flex">
          <ServicesPageDeliverables
            deliverablesData={servicesPageWebContent.deliverables}
          />
        </div>

        <div className="flex TABLET:hidden">
          <ServicesDeliverablesSection
            deliverables={servicesPageWebContent.deliverables}
          />
        </div>
        <CustomersSection />
        <CTASection>Let's Work Together</CTASection>
        <Footer />
      </div>
    </>
  );
}
