import BigBSVG from "~/bigBSVG";
import PackagesHeader from "@/components/packages/packagesHeader";
import { packagesPageBitContent } from "@/data/packages/packagesPageBitContent";
import SinglePackageService from "@/components/packages/singlePackageService";
import Footer from "@/components/ui/footer";
import CTASection from "@/components/ui/CTASection";
import PackagesHeaderMobile from "@/components/packages/packagesHeaderMobile";
import PackagesMainSectionMobile from "@/components/packages/packagesMainSectionMobile";

export default function BitPackage() {
  return (
    <>
      {/* for mobile only */}

      <div className="pt-[28%] px-[15.1%] w-full flex flex-col justify-center items-center  TABLET:hidden ">
        <PackagesHeaderMobile
          name={packagesPageBitContent.name}
          price={packagesPageBitContent.price}
          currency={packagesPageBitContent.currency}
        />
        <PackagesMainSectionMobile
          ServicesIncluded={packagesPageBitContent.servicesIncluded}
        />
        <div className="w-screen mt-10">
          <CTASection>Let's Work Together</CTASection>
          <Footer />
        </div>
      </div>

      {/* large devices */}

      <div className="hidden TABLET:flex    ">
        <BigBSVG className="absolute -z-10   SMALL_LAPTOP:w-[432px] SMALL_LAPTOP:h-[672px] TABLET:w-[350px] TABLET:h-[500px] top-[400px] TABLET:blur-[40px] SMALL_LAPTOP:blur-[63px]  fill-themeColor right-0 " />
        <div className=" w-full flex justify-center">
          <div className="mt-[5rem] content   flex  items-start flex-col max-w-screen-LARGE_LAPTOP  ">
            <PackagesHeader
              name={packagesPageBitContent.name}
              price={packagesPageBitContent.price}
            />
            {packagesPageBitContent.servicesIncluded.map((service) => {
              return (
                <SinglePackageService
                  mainService={service.mainService}
                  deliverables={service.Deliverables}
                  key={service.id}
                />
              );
            })}
            <div className="w-full mt-32">
              <CTASection>Let's Work Together</CTASection>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
