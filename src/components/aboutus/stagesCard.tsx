import { ReactElement } from "react";

type StagesCardProps = {
  mainHeading: string;
  description: string;
  indicator?: string;
  icon: ReactElement;
};

export default function StagesCard({
  mainHeading,
  description,
  indicator,
  icon,
}: StagesCardProps) {
  return (
    <>
      <div className="w-full LAPTOP:w-[70%]   flex flex-col justify-center items-center mt-[7.44%] text-textPrimaryColor TABLET:items-start   ">
        <div className="TABLET:flex TABLET:gap-[3.5rem] TABLET:mb-[2rem]   ">
          <div className=" flex justify-center ">{icon}</div>

          <div className="  flex flex-col items-start">
            <div className="my-[1.62%] text-center TABLET:text-left w-full justify-center TABLET:justify-start flex TABLET:m-0 text-Mobile-Head font-medium TABLET:text-Tablet-S-Heading SMALL_LAPTOP:text-SMALL_LAPTOP-S-Subheading">
              {mainHeading}
            </div>
            <div
              className={` text-Mobile-Text text-center TABLET:text-left TABLET:text-Tablet-Text TABLET:mb-[2rem]  SMALL_LAPTOP:text-SMALL_LAPTOP-Text TABLET:w-[90%] ${
                indicator === "approach" ? "LAPTOP:w-[80%]" : "LAPTOP:w-full"
              }`}
            >
              {description}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
