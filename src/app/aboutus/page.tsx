import TopSection from "./components/topSection";
import { pageContent } from "./data/pageContent";
import ManifestoSection from "./components/manifestoSection";
import StagesSection from "./components/stagesSection";
import TeamSection from "./components/teamSection";
import LongBottom from "@/components/custom/longBottom";
import BigCTA from "@/components/custom/bigCTA";
export default function AboutUsPage() {
  return (
    <>
      <div className="flex flex-col  w-full h-[100%]  ">
        <TopSection description={pageContent.aboutusDescription}></TopSection>
        <ManifestoSection manifesto={pageContent.manifesto}></ManifestoSection>
        <StagesSection stages={pageContent.stages}></StagesSection>
        <TeamSection></TeamSection>
        <BigCTA></BigCTA>
        <LongBottom></LongBottom>
      </div>
    </>
  );
}
