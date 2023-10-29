import PackagesSectionCard from "./packagesSectionCard";
import { packagesSectionCardContent } from "@/app/(data)/packagesSection/packagesSectionCardContent";

export default function PackagesSection() {
  return (
    <>
      <div className="w-full flex flex-col items-center    mb-[5.5%]  justify-center">
        <div className="text-Mobile-L-Head mt-[14.8%] w-full flex justify-center">
          Packages
        </div>

        <div className="text-Mobile-Text mb-[11.1%] max-[750px]:w-[80%] text-center flex justify-center w-full">
          View our carefully crafted packages to elevate your digital
          experiences one bit at a time
        </div>

        <div className="grid     desktop:grid-cols-3  w-full justify-center justify-items-center ">
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
