import { ReactElement } from "react";
type PackagesMainSectionMobileCardProps = {
  mainService: string;
  Deliverables: string[];
  icon: ReactElement;
};
export default function PackagesMainSectionMobileCard({
  mainService,
  Deliverables,
  icon,
}: PackagesMainSectionMobileCardProps) {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full my-[5.58%]">
        <div className="flex justify-center gap-[0.5rem]  mb-[8px]   items-center ">
          <div className="">{icon}</div>
          <span className=" text-black dark:text-white font-medium text-Mobile-Head flex items-center text-center  ">
            {mainService}
          </span>
        </div>

        <div className=" flex   items-center justify-center flex-wrap text-center">
          {Deliverables.map((deliverable, index) => {
            return (
              <span className="inline text-Mobile-Text" key={index}>
                {deliverable}
                {index !== Deliverables.length - 1 ? <span>,</span> : null}
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
}
