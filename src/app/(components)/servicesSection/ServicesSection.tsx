import ServiceCard from "./serviceSectionCard";
import { ServicesSectionCardContent } from "@/app/(data)/servicesSection/servicesSectionCardContent";
export default function ServicesSection() {
  return (
    <>
      <div className="flex flex-col items-center ">
        <div className="main-div  flex flex-col w-[85%]  items-center max-[750px]:items-center">
          <div className="w-[85%]">
            <div className="heading text-heading clamp-service-section-main-heading my-[4rem]  ">
              Services
            </div>
          </div>

          <div className="grid grid-cols-3 max-[1100px]:grid-cols-2 max-[750px]:grid-cols-1 gap-x-[2rem] w-[85%] ">
            {ServicesSectionCardContent.map((cardContent, index) => {
              return <ServiceCard
                      mainHeading={cardContent.mainHeading}
                      description={cardContent.description}
                      iconDark={cardContent.iconDarkMode}
                      index={index}
                      key={cardContent.id}
                    ></ServiceCard>
              
            })}
          </div>
        </div>
      </div>
    </>
  );
}
