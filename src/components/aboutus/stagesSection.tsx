import StagesCard from "./stagesCard";
type StagesSectionProps = {
  stages: any[];
  mainHeading: string;
  indicator?: string;
};

export default function StagesSection({
  stages,
  mainHeading,
  indicator,
}: StagesSectionProps) {
  return (
    <>
      <div className=" px-[15.11%] SMALL_LAPTOP:px-[4.5rem] flex flex-col justify-center items-center w-full my-[13rem] TABLET:items-start ">
        <div className="text-[2rem] text-center TABLET:text-left  w-full TABLET:text-Tablet-Head TABLET:mb-[5rem] SMALL_LAPTOP:text-SMALL_LAPTOP-Subheading">
          {mainHeading}
        </div>
        <div className="SMALL_LAPTOP:flex SMALL_LAPTOP:w-full  SMALL_LAPTOP:justify-end ">
          <div
            className={`w-full gap-y-[1rem] TABLET:gap-[2.5rem] grid grid-cols-1       ${
              indicator === "approach"
                ? "SMALL_LAPTOP:justify-items-center SMALL_LAPTOP:w-[90%]"
                : "SMALL_LAPTOP:justify-items-end SMALL_LAPTOP:w-[70%]"
            }`}
          >
            {stages.map((stage) => {
              return (
                <StagesCard
                  mainHeading={stage.heading}
                  description={stage.brief}
                  key={stage.id}
                  icon={stage.icon}
                  indicator="approach"
                ></StagesCard>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
