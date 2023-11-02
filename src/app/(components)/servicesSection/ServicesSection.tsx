import ServiceCard from "./serviceSectionCard";
import { ServicesSectionCardContent } from "@/app/(data)/servicesSection/servicesSectionCardContent";
export default function ServicesSection() {
  return (
    <>
      <div className="flex flex-col  w-screen  px-[5%]">
        <div className="flex mb-[2rem]  justify-center TABLET:justify-start TABLET:ml-[1rem] TABLET:mb-[4.5rem] SMALL_LAPTOP:mb-[3.56rem] LAPTOP:mb-[6rem]">
          <div className="text-Mobile-L-Head   TABLET:text-Tablet-Head SMALL_LAPTOP:text-SMALL_LAPTOP-Heading   ">
            Services
          </div>
        </div>

        <div className="grid TABLET:grid-cols-2 desktop:grid-cols-3   w-full justify-items-center gap-[2rem] SMALL_LAPTOP:grid-cols-3">
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
