import CircleSVG from "../../../../public/stages/circleSVG";
import HexagonSVG from "../../../../public/stages/hexagonSVG";
import StarSVG from "../../../../public/stages/starSVG";

type StagesCardProps = {
  mainHeading: string;
  description: string;
  id: number;
};

export default function StagesCard({
  mainHeading,
  description,
  id,
}: StagesCardProps) {
  return (
    <>
      <div
        className="w-full flex flex-col justify-center items-center mt-[7.44%] dark:text-white
       text-black"
      >
        {id === 1 ? (
          <StarSVG className="fill-white dark:fill-black dark:stroke-white stroke-black w-[40px] h-[40px]"></StarSVG>
        ) : id === 2 ? (
          <CircleSVG className="fill-white dark:fill-black dark:stroke-white stroke-black w-[40px] h-[40px]"></CircleSVG>
        ) : (
          <HexagonSVG className="fill-white dark:fill-black dark:stroke-white stroke-black w-[40px] h-[40px]"></HexagonSVG>
        )}

        <div className="my-[1.62%] text-Mobile-Head font-medium text-center">
          {mainHeading}
        </div>
        <div className="text-Mobile-Text text-center ">{description}</div>
      </div>
    </>
  );
}
