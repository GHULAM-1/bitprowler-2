import PackagesSectionCard from "./packagesSectionCard";
import { packagesSectionCardContent } from "@/app/(data)/packagesSection/packagesSectionCardContent";

export default function PackagesSection() {
  return (
    <>
      <div className="flex flex-col items-center   mt-[4rem] mb-[6rem]  w-[83%] justify-center">
        <div className="main-div  flex flex-col w-[95%]  items-center max-[750px]:items-center">
          <div className="w-[95%] flex flex-col items-center tablet:items-start">
            <div className="heading  clamp-service-section-main-heading mt-[4rem]  ">
              Packages
            </div>

            <div className="clamp-package-section-description text-large-text w-[60%] mb-[4rem] max-[750px]:w-[80%] text-center tablet:text-left   ">
              View our carefully crafted packages to elevate your digital
              experiences one bit at a time
            </div>
          </div>

          <div className="grid  gap-x-[2rem] gap-y-[2rem]  w-[95%] desktop:grid-cols-3 ">
            {packagesSectionCardContent.map((cardContent, index) => {
              return (
                <PackagesSectionCard
                  name={cardContent.name}
                  price={cardContent.price}
                  description={cardContent.description}
                  deliverablesCount={cardContent.deliverablesCount}
                  pagePath={cardContent.pagePath}
                  key={cardContent.id}
                ></PackagesSectionCard>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
