import ServicesPageDeliverables from "@/components/services/servicesPageDeliverables";
import ServicesPageHeroL from "@/components/services/servicesPageHeroL";
import DotHeadings from "@/components/ui/dotHeadings";
import Footer from "@/components/ui/footer";
import { servicesPageAppContent } from "@/data/services/servicesPageAppContent";
import CTASection from "@/components/ui/CTASection";
import ServicesPageHeroM from "@/components/services/servicesPageHeroM";
import StagesSection from "@/components/aboutus/stagesSection";
import ServicesDeliverablesSection from "@/components/services/servicesDeliverablesSection";
import ManifestoSection from "@/components/aboutus/manifestoSection";
import CustomersSection from "@/components/ui/customersSection";
export const metadata = {
  title: "app services",
  description: "Turn your app idea into reality.",
};
export default function AppDev() {
  return (
    <>
      <div className="w-full flex  flex-col justify-center items-center">
        <div className="flex SMALL_LAPTOP:hidden">
          <ServicesPageHeroM
            name={servicesPageAppContent.name}
            hero={servicesPageAppContent.hero}
            icon={servicesPageAppContent.iconM}
          />
        </div>

        <div className="hidden SMALL_LAPTOP:flex SMALL_LAPTOP:flex-col mt-[5.5rem] h-screen items-center">
          <DotHeadings
            afterDotWord={servicesPageAppContent.name}
            beforeDotWord="Services"
          />
          <ServicesPageHeroL
            hero={servicesPageAppContent.hero}
            icon={servicesPageAppContent.iconL}
          />
        </div>

        <StagesSection
          stages={servicesPageAppContent.whySection.subHeadings}
          mainHeading={servicesPageAppContent.whySection.mainHeading}
        />

        <StagesSection
          stages={servicesPageAppContent.approachSection}
          mainHeading="What Sets Us Apart"
          indicator="approach"
        />

        <ManifestoSection
          firstWord={servicesPageAppContent.oneLinerFirst}
          secondWord={servicesPageAppContent.oneLinerSecond}
        />

        <div className="hidden TABLET:flex">
          <ServicesPageDeliverables
            deliverablesData={servicesPageAppContent.deliverables}
          />
        </div>

        <div className="flex TABLET:hidden">
          <ServicesDeliverablesSection
            deliverables={servicesPageAppContent.deliverables}
          />
        </div>
        <CustomersSection />
        <CTASection>Let's Work Together</CTASection>
        <Footer />
      </div>
    </>
  );
}
