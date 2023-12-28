import PackagesSectionCard from "@/components/home/packagesSectionCard";
import { packagesSectionCardContent } from "@/data/home/packagesSectionCardContent";

export default function PackagesSection() {
  return (
    <>
      <div className="w-full  flex flex-col items-center px-[5%] mt-[8rem]   mb-[5.5%]  justify-center ">
        <div className=" w-full flex justify-center TABLET:justify-start TABLET:ml-[4.5rem] ">
          <div className="text-Mobile-L-Head  text-textPrimaryColor  TABLET:text-Tablet-Head SMALL_LAPTOP:text-SMALL_LAPTOP-Heading TABLET:ml-[1rem]">
            Packages
          </div>
        </div>

        <div className="w-full flex  TABLET:ml-[4.5rem] TABLET:justify-start justify-center">
          <div className="text-Mobile-Text  w-[75%] LAPTOP:w-[50%] text-center TABLET:text-start  text-textSecondaryColor mb-[5rem] TABLET:text-Tablet-Text SMALL_LAPTOP:text-SMALL_LAPTOP-L-Text TABLET:ml-[1rem]">
            View our carefully crafted packages to elevate your digital
            experiences one bit at a time
          </div>
        </div>

        <div className="grid   gap-[2rem]  TABLET:grid-cols-2 SMALL_LAPTOP:grid-cols-3  w-full justify-center justify-items-center ">
          {packagesSectionCardContent.map((cardContent) => {
            return (
              <PackagesSectionCard
                name={cardContent.name}
                price={cardContent.price}
                description={cardContent.description}
                deliverablesCount={cardContent.deliverablesCount}
                pagePath={cardContent.pagePath}
                key={cardContent.id}
                icon={cardContent.icon}
              ></PackagesSectionCard>
            );
          })}
        </div>
      </div>
    </>
  );
}
