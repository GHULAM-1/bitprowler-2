import TopSection from "./components/topSection";
import { pageContent } from "./data/pageContent";
import ManifestoSection from "./components/manifestoSection";
export default function AboutUsPage() {
  return (
    <>
      <div className="flex flex-col mt-[4rem] w-screen h-screen   ">
        <TopSection description={pageContent.aboutusDescription}></TopSection>
        <ManifestoSection manifesto={pageContent.manifesto}></ManifestoSection>
      </div>
    </>
  );
}
