"use client";
import TopSection from "./components/topSection";
import { pageContent } from "./data/pageContent";
import ManifestoSection from "./components/manifestoSection";
import StagesSection from "./components/stagesSection";
import TeamSection from "./components/teamSection";
import LongBottom from "@/components/ui/longBottom";
import BigCTA from "@/components/ui/bigCTA";
import { useTogglingStore } from "@/store/store";

export default function AboutUsPage() {
  const isNavOpen = useTogglingStore((state: any) => state.isNavOpen);

  return (
    <>
      <div
        className={`overflow-x-hidden flex flex-col items-center justify-center absolute z-40  ${
          isNavOpen === true ? "hidden overscroll-none" : null
        }`}
      >
        <div className="flex flex-col  w-full h-[100%]  ">
          <TopSection description={pageContent.aboutusDescription}></TopSection>
          <ManifestoSection
            manifesto={pageContent.manifesto}
            firstWord="Our"
            secondWord="manifesto"
          ></ManifestoSection>
          <StagesSection
            stages={pageContent.stages}
            mainHeading="Why Us?"
          ></StagesSection>
          <TeamSection></TeamSection>
          <BigCTA>Let's Work Together</BigCTA>
          <LongBottom></LongBottom>
        </div>
      </div>
    </>
  );
}
