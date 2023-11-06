import CircleSVG from "../../../../public/stages/circleSVG";
import HexagonSVG from "../../../../public/stages/hexagonSVG";
import StarSVG from "../../../../public/stages/starSVG";

type StagesCardProps = {
  mainHeading: string;
  description: string;
  id: number;
  indicator?: string;
};

export default function StagesCard({
  mainHeading,
  description,
  id,
  indicator,
}: StagesCardProps) {
  return (
    <>
      <div
        className="w-full LAPTOP:w-[70%]   flex flex-col justify-center items-center mt-[7.44%] dark:text-white
       text-black TABLET:items-start   "
      >
        <div className="TABLET:flex TABLET:gap-[3.5rem] TABLET:mb-[2rem]   ">
          <div className=" flex justify-center   ">
            {id === 1 ? (
              <StarSVG className="fill-white  dark:fill-black dark:stroke-white stroke-black w-[40px] h-[40px] TABLET:w-[80px] TABLET:h-[80px]"></StarSVG>
            ) : id === 2 ? (
              <CircleSVG className="fill-white dark:fill-black dark:stroke-white stroke-black w-[40px] h-[40px] TABLET:w-[80px] TABLET:h-[80px]"></CircleSVG>
            ) : (
              <HexagonSVG className="fill-white dark:fill-black dark:stroke-white stroke-black w-[40px] h-[40px] TABLET:w-[80px] TABLET:h-[80px]"></HexagonSVG>
            )}
          </div>

          <div className="  flex flex-col items-start">
            <div className="my-[1.62%]  w-full justify-center TABLET:justify-start flex TABLET:m-0 text-Mobile-Head font-medium TABLET:text-Tablet-S-Heading SMALL_LAPTOP:text-SMALL_LAPTOP-S-Subheading">
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
