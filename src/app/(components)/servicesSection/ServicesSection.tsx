import ServiceCard from "./serviceSectionCard";
import { ServicesSectionCardContent } from "@/app/(data)/servicesSection/servicesSectionCardContent";
export default function ServicesSection() {
  return (
    <>
      <div className="flex flex-col items-center  justify-center w-full ">
        <div className="main-div  flex flex-col   items-center ">
          <div className="">
            <div className="text-Mobile-L-Head   mb-[3.5rem] flex  justify-center items-center  ">
              Services
            </div>
          </div>

          <div className="grid   gap-x-[2rem]   laptop_sm:grid-cols-2 desktop:grid-cols-3 ">
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
