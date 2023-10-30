import PackagesMainSectionMobileCard from "./packagesMainSectionMobileCard";
type packagesMainSectionMobileProps = {
  ServicesIncluded: any[];
};

export default function PackagesMainSectionMobile({
  ServicesIncluded,
}: packagesMainSectionMobileProps) {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        {ServicesIncluded.map((serviceIncluded) => {
          return (
            <PackagesMainSectionMobileCard
              Deliverables={serviceIncluded.Deliverables}
              mainService={serviceIncluded.mainService}
            ></PackagesMainSectionMobileCard>
          );
        })}
      </div>
    </>
  );
}
