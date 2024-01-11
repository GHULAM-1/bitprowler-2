import ServicesPageDeliverables from "@/components/services/servicesPageDeliverables";
import ServicesPageHeroL from "@/components/services/servicesPageHeroL";
import DotHeadings from "@/components/ui/dotHeadings";
import Footer from "@/components/ui/footer";
import { servicesPageSeoContent } from "@/data/services/servicesPageSeoContent";
import CTASection from "@/components/ui/CTASection";
import ServicesPageHeroM from "@/components/services/servicesPageHeroM";
import StagesSection from "@/components/aboutus/stagesSection";
import ServicesDeliverablesSection from "@/components/services/servicesDeliverablesSection";
import ManifestoSection from "@/components/aboutus/manifestoSection";
import CustomersSection from "@/components/ui/customersSection";
export const metadata = {
  title: "seo service",
  description:
    "Enhance online visibility with our SEO expertise. Elevate rankings, attract targeted traffic, and achieve digital success!",
};

export default function Seo() {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="flex SMALL_LAPTOP:hidden">
          <ServicesPageHeroM
            name={servicesPageSeoContent.name}
            hero={servicesPageSeoContent.hero}
            icon={servicesPageSeoContent.iconM}
          />
        </div>

        <div className="hidden SMALL_LAPTOP:flex SMALL_LAPTOP:flex-col mt-[5.5rem] h-screen">
          <DotHeadings
            afterDotWord={servicesPageSeoContent.name}
            beforeDotWord="Services"
          />
          <ServicesPageHeroL
            hero={servicesPageSeoContent.hero}
            icon={servicesPageSeoContent.iconL}
          />
        </div>

        <StagesSection
          stages={servicesPageSeoContent.whySection.subHeadings}
          mainHeading={servicesPageSeoContent.whySection.mainHeading}
        />

        <StagesSection
          stages={servicesPageSeoContent.approachSection}
          mainHeading="What Sets Us Apart"
          indicator="approach"
        />

        <ManifestoSection
          firstWord={servicesPageSeoContent.oneLinerFirst}
          secondWord={servicesPageSeoContent.oneLinerSecond}
        />

        <div className="hidden TABLET:flex">
          <ServicesPageDeliverables
            deliverablesData={servicesPageSeoContent.deliverables}
          />
        </div>

        <div className="flex TABLET:hidden">
          <ServicesDeliverablesSection
            deliverables={servicesPageSeoContent.deliverables}
          />
        </div>
        <CustomersSection />
        <CTASection>Let's Work Together</CTASection>
        <Footer />
      </div>
    </>
  );
}
