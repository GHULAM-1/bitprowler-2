import BigBSVG from "~/bigBSVG";
import PackagesHeader from "@/components/packages/packagesHeader";
import { packagesPageGigabitContent } from "@/data/packages/packagesPageGigabitContent";
import SinglePackageService from "@/components/packages/singlePackageService";
import Footer from "@/components/ui/footer";
import CTASection from "@/components/ui/CTASection";
import PackagesHeaderMobile from "@/components/packages/packagesHeaderMobile";
import PackagesMainSectionMobile from "@/components/packages/packagesMainSectionMobile";

export default function GigabitPackage() {
  return (
    <>
      {/* for mobile only */}

      <div className="pt-[28%] px-[15.1%] w-full flex flex-col justify-center items-center  TABLET:hidden ">
        <PackagesHeaderMobile
          name={packagesPageGigabitContent.name}
          price={packagesPageGigabitContent.price}
          currency={packagesPageGigabitContent.currency}
        />
        <PackagesMainSectionMobile
          ServicesIncluded={packagesPageGigabitContent.servicesIncluded}
        />
        <div className="w-screen mt-10">
          <CTASection>Let's Work Together</CTASection>
          <Footer />
        </div>
      </div>

      {/* large devices */}

      <div className="hidden TABLET:flex">
        <BigBSVG className="absolute -z-10   SMALL_LAPTOP:w-[432px] SMALL_LAPTOP:h-[672px] TABLET:w-[350px] TABLET:h-[500px] top-[400px] TABLET:blur-[40px] SMALL_LAPTOP:blur-[63px]  fill-themeColor right-0" />
        <div className="mt-[5rem] content   flex  items-start flex-col">
          <PackagesHeader
            name={packagesPageGigabitContent.name}
            price={packagesPageGigabitContent.price}
          />
          {packagesPageGigabitContent.servicesIncluded.map((service) => {
            return (
              <SinglePackageService
                mainService={service.mainService}
                deliverables={service.Deliverables}
                key={service.id}
              />
            );
          })}
          <div className="w-screen mt-32">
            <CTASection>Let's Work Together</CTASection>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
