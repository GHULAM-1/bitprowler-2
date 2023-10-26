import ServiceCard from "./serviceSectionCard";
import { ServicesSectionCardContent } from "@/app/(data)/servicesSection/servicesSectionCardContent";
export default function ServicesSection() {
  return (
    <>
      <div className="flex flex-col items-center  w-full ">
        <div className="main-div  flex flex-col w-[95%]  items-center ">
          <div className="w-[95%]">
            <div className="heading text-heading clamp-service-section-main-heading my-[4rem] flex  justify-center tablet:justify-start ">
              Services
            </div>
          </div>

          <div className="grid   gap-x-[2rem] w-[95%]  laptop_sm:grid-cols-2 desktop:grid-cols-3 ">
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
      </div>
    </>
  );
}
