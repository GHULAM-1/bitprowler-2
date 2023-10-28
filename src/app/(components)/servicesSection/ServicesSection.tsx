import ServiceCard from "./serviceSectionCard";
import { ServicesSectionCardContent } from "@/app/(data)/servicesSection/servicesSectionCardContent";
export default function ServicesSection() {
  return (
    <>
      <div className="flex flex-col  w-screen  ">
        <div className="text-Mobile-L-Head   mb-[2.5rem] flex  justify-center items-center bg-orange-500  w-full">
          Services
        </div>

        <div className="grid laptop_sm:grid-cols-2 desktop:grid-cols-3   w-full justify-items-center">
          {ServicesSectionCardContent.map((cardContent, index) => {
            return (
              <ServiceCard
                mainHeading={cardContent.mainHeading}
                description={cardContent.description}
                pagePath={cardContent.pagePath}
                key={cardContent.id}
              ></ServiceCard>
            );
          })}
        </div>
      </div>
    </>
  );
}
