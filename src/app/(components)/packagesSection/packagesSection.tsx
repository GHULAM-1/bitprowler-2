import PackagesSectionCard from "./packagesSectionCard";
import { packagesSectionCardContent } from "@/app/(data)/packagesSection/packagesSectionCardContent";

export default function PackagesSection() {
  return (
    <>
      <div className="w-full  flex flex-col items-center px-[5%] mt-[4rem]   mb-[5.5%]  justify-center">
        <div className=" w-full flex justify-center TABLET:justify-start TABLET:ml-[4.5rem] ">
          <div className="text-Mobile-L-Head  text-textPrimaryColor  TABLET:text-Tablet-Head">
            Packages
          </div>
        </div>

        <div className="w-full flex  TABLET:ml-[4.5rem] TABLET:justify-start justify-center">
          <div className="text-Mobile-Text  w-[80%] text-center TABLET:text-start  text-textSecondaryColor mb-[3rem] TABLET:text-Tablet-Text ">
            View our carefully crafted packages to elevate your digital
            experiences one bit at a time
          </div>
        </div>

        <div className="grid   gap-[2rem]  TABLET:grid-cols-2 SMALL_LAPTOP:grid-cols-3  w-full justify-center justify-items-center ">
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
    </>
  );
}
