import PackagesSectionCard from "./packagesSectionCard";
import { packagesSectionCardContent } from "@/app/(data)/packagesSection/packagesSectionCardContent";

export default function PackagesSection() {
  return (
    <>
      <div className="flex flex-col items-center    mb-[1.5rem]  justify-center">
        <div className="main-div  flex flex-col  items-center max-[750px]:items-center">
          <div className=" flex flex-col items-center ">
            <div className="text-Mobile-L-Head mt-[4rem]  ">Packages</div>

            <div className="text-Mobile-Text mb-[3rem] max-[750px]:w-[80%] text-center ">
              View our carefully crafted packages to elevate your digital
              experiences one bit at a time
            </div>
          </div>

          <div className="grid  gap-x-[2rem]    desktop:grid-cols-3 ">
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
