import PackagesPills from "./packagesPills";

type SinglePackageServiceProps = {
  mainService: string;
  deliverables: string[];
};

export default function SinglePackageService({
  mainService,
  deliverables,
}: SinglePackageServiceProps) {
  return (
    <>
      <div className=" px-[4.5rem]  mb-[2rem]   flex flex-col items-start SMALL_LAPTOP:w-[80%] ">
        <div className=" mb-[2rem] SMALL_LAPTOP:text-SMALL_LAPTOP-S-Subheading mt-[4rem] TABLET:text-Tablet-Subheading">
          {mainService}
        </div>

        <div className="flex gap-[1rem] text-text flex-wrap ">
          {deliverables.map((deliverable, index) => {
            return (
              <PackagesPills
                key={index}
                deliverable={deliverable}
              ></PackagesPills>
            );
          })}
        </div>
      </div>
    </>
  );
}
