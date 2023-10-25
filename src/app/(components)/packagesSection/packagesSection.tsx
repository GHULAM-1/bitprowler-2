import PackagesSectionCard from "./packagesSectionCard";
import { packagesSectionCardContent } from "@/app/(data)/packagesSection/packagesSectionCardContent";

export default function PackagesSection() {
  return (
    <>
      <div className="flex flex-col items-center   mt-[4rem] ">
        <div className="main-div  flex flex-col w-[85%]  items-center max-[750px]:items-center">
          <div className="w-[85%] flex flex-col max-[750px]:items-center">
            <div className="heading  clamp-service-section-main-heading mt-[4rem]  ">
              Packages
            </div>

            <div className="clamp-package-section-description text-large-text w-[60%] mb-[4rem] max-[750px]:w-[80%]   ">
              View our carefully crafted packages to elevate your digital
              experiences one bit at a time
            </div>
          </div>

          <div className="grid grid-cols-3 max-[1480px]:grid-cols-1 max-[750px]:grid-cols-1 gap-x-[2rem] w-[85%] ">
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

// import PackagesCard from "./packagesSectionCard";
// export default function PackagesSection() {
//   return (
//     <>
//       <div className="box-with-100vw-width flex flex-col justify-center items-center bg-background pt-[5rem]">
//         <div className="main-div w-[77%] flex flex-col items-start">
//           <div className="heading text-heading">Packages</div>
//           <div className="description text-large-text w-[70%] mb-[2rem]">
//             View our carefully crafted packages to elevate your digital
//             experiences one bit at a time
//           </div>

//           {/* // cards */}

//           <PackagesCard></PackagesCard>
//         </div>
//       </div>
//     </>
//   );
// }
