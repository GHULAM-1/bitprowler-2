import ServicesPageExplanation from "../../components/servicesPageExplanation";
import ServicesPageDeliverables from "../../components/servicesPageDeliverables";
import { ServicesPageWebPillsContent } from "../../data/servicesPageWebContent";
import ServicesPageHero from "../../components/servicesPageHero";
export default function WebDev() {
  return (
    <>
      <div className="bg-background">
        <div className="mt-[4rem]  bg-background flex flex-col justify-center items-center">
          <ServicesPageHero></ServicesPageHero>
          <ServicesPageExplanation></ServicesPageExplanation>
          <ServicesPageDeliverables
            deliverablesData={ServicesPageWebPillsContent}
          ></ServicesPageDeliverables>
        </div>
      </div>
    </>
  );
}
