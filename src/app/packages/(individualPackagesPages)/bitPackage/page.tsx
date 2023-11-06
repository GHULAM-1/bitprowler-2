"use client";
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
import { useTogglingStore } from "@/store/store";

export default function BitPackage() {
  const isNavOpen = useTogglingStore((state: any) => state.isNavOpen);

  return (
    <>
      <div
        className={`overflow-x-hidden flex flex-col items-center justify-center absolute  z-40  ${
          isNavOpen === true ? "hidden overscroll-none" : null
        }`}
      >
        <div className="pt-[28%] px-[15.1%] w-full flex flex-col justify-center items-center mb-[3rem] TABLET:hidden ">
          <PackagesHeaderMobile
            name={packagesPageBitContent.name}
            price={packagesPageBitContent.price}
            currency={packagesPageBitContent.currency}
          ></PackagesHeaderMobile>
          <PackagesMainSectionMobile
            ServicesIncluded={packagesPageBitContent.servicesIncluded}
          ></PackagesMainSectionMobile>
          <div className="w-screen">
            <BigCTA></BigCTA>
            <LongBottom></LongBottom>
          </div>
        </div>
      </div>

      <div
        className={`relative z-0    hidden ${
          isNavOpen === true ? "TABLET:hidden overscroll-none" : "TABLET:flex"
        }`}
      >
        <BigBDarkSVG className="absolute z-10 blur-[63px] top-[400px] right-0"></BigBDarkSVG>

        <div className="mt-[5rem] content  absolute z-20 flex  items-start flex-col">
          {/* <BackArrowSVG className=" dark:fill-white fill-black clamp-arrow self-start mt-[2rem]"></BackArrowSVG> */}
          <PackagesHeader
            name={packagesPageBitContent.name}
            price={packagesPageBitContent.price}
          ></PackagesHeader>
          {packagesPageBitContent.servicesIncluded.map((service, index) => {
            return (
              <SinglePackageService
                mainService={service.mainService}
                deliverables={service.Deliverables}
                key={index}
              ></SinglePackageService>
            );
          })}
          <BigCTA></BigCTA>
          <LongBottom></LongBottom>
        </div>
      </div>
    </>
  );
}
