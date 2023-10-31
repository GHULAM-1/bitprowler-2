import BDarkSVG from "../../../../../public/letters/bDarkSVG";
import BigBDarkSVG from "../../../../../public/letters/bigBDarkSVG";
import PackagesHeader from "../../components/packagesHeader";
import { packagesPageBitContent } from "../../data/packagesPageBitContent";
import SinglePackageService from "../../components/singlePackageService";
import BackArrowSVG from "../../../../../public/backArrowSVG";
import LongBottom from "@/components/custom/longBottom";
import BigCTA from "@/components/custom/bigCTA";
import PackagesHeaderMobile from "../../components/packagesHeaderMobile";
import PackagesMainSectionMobile from "../../components/packagesMainSectionMobile";

export default function BitPackage() {
  return (
    <>
      <div className="pt-[28%] px-[15.1%] w-full flex flex-col justify-center items-center mb-[3rem]">
        <PackagesHeaderMobile
          name={packagesPageBitContent.name}
          price={packagesPageBitContent.price}
          currency={packagesPageBitContent.currency}
        ></PackagesHeaderMobile>
        <PackagesMainSectionMobile
          ServicesIncluded={packagesPageBitContent.servicesIncluded}
        ></PackagesMainSectionMobile>
      </div>
      <BigCTA></BigCTA>
      <LongBottom></LongBottom>
    </>
  );
}

{
  /* <div className="relative z-0  mt-[4rem] ">
  <BigBDarkSVG className="absolute z-10 blur-[63px] top-[400px] right-0"></BigBDarkSVG>

  <div className="mt-[5rem] content pl-[8rem] absolute z-20 flex px-[3rem] items-start flex-col"> */
}
{
  /* <BackArrowSVG className=" dark:fill-white fill-black clamp-arrow self-start mt-[2rem]"></BackArrowSVG> */
}

//     <PackagesHeader
//       name={packagesPageBitContent.name}
//       price={packagesPageBitContent.price}
//     ></PackagesHeader>

//     {packagesPageBitContent.servicesIncluded.map((service, index) => {
//       return (
//         <SinglePackageService
//           mainService={service.mainService}
//           deliverables={service.Deliverables}
//           key={index}
//         ></SinglePackageService>
//       );
//     })}
//   </div>
// </div>;
