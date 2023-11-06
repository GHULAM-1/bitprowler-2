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
      <div className=" px-[4.5rem]  mb-[2rem]   flex flex-col items-start  ">
        <div className=" mb-[2rem] clamp-3rem">{mainService}</div>

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
