import TopSection from "@/components/aboutus/topSection";
import { pageContent } from "@/data/aboutus/pageContent";
import ManifestoSection from "@/components/aboutus/manifestoSection";
import StagesSection from "@/components/aboutus/stagesSection";
import TeamSection from "@/components/aboutus/teamSection";
import Footer from "@/components/ui/footer";
import CTASection from "@/components/ui/CTASection";
export const metadata = {
  title: "About",
};
export default function AboutUsPage() {
  return (
    <>
      <div className="flex flex-col w-full  relative -z-10 ">
        <TopSection description={pageContent.aboutusDescription} />
        <ManifestoSection
          manifesto={pageContent.manifesto}
          firstWord="Our"
          secondWord="manifesto"
        />
        <StagesSection stages={pageContent.stages} mainHeading="Why Us?" />
        <TeamSection />
        <CTASection>Let's Work Together</CTASection>
        <Footer />
      </div>
    </>
  );
} 
