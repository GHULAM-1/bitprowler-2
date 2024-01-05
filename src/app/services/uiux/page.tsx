import ServicesPageDeliverables from "@/components/services/servicesPageDeliverables";
import ServicesPageHeroL from "@/components/services/servicesPageHeroL";
import DotHeadings from "@/components/ui/dotHeadings";
import Footer from "@/components/ui/footer";
import { servicesPageUxContent } from "@/data/services/servicesPageUxContent";
import CTASection from "@/components/ui/CTASection";
import ServicesPageHeroM from "@/components/services/servicesPageHeroM";
import StagesSection from "@/components/aboutus/stagesSection";
import ServicesDeliverablesSection from "@/components/services/servicesDeliverablesSection";
import ManifestoSection from "@/components/aboutus/manifestoSection";
import CustomersSection from "@/components/ui/customersSection";

export default function Ux() {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="flex SMALL_LAPTOP:hidden">
          <ServicesPageHeroM
            name={servicesPageUxContent.name}
            hero={servicesPageUxContent.hero}
            icon={servicesPageUxContent.iconM}
          />
        </div>

        <div className="hidden    SMALL_LAPTOP:flex SMALL_LAPTOP:flex-col mt-[5.5rem] h-screen">
          <DotHeadings
            afterDotWord={servicesPageUxContent.name}
            beforeDotWord="Services"
          />
          <ServicesPageHeroL
            hero={servicesPageUxContent.hero}
            icon={servicesPageUxContent.iconL}
          />
        </div>

        <StagesSection
          stages={servicesPageUxContent.whySection.subHeadings}
          mainHeading={servicesPageUxContent.whySection.mainHeading}
        />

        <StagesSection
          stages={servicesPageUxContent.approachSection}
          mainHeading="What Sets Us Apart"
          indicator="approach"
        />

        <ManifestoSection
          firstWord={servicesPageUxContent.oneLinerFirst}
          secondWord={servicesPageUxContent.oneLinerSecond}
        />

        <div className="hidden TABLET:flex">
          <ServicesPageDeliverables
            deliverablesData={servicesPageUxContent.deliverables}
          />
        </div>

        <div className="flex TABLET:hidden">
          <ServicesDeliverablesSection
            deliverables={servicesPageUxContent.deliverables}
          />
        </div>
        <CustomersSection />
        <CTASection>Let's Work Together</CTASection>

        <Footer />
      </div>
    </>
  );
}
