import StagesCard from "./stagesCard";
type StagesSectionProps = {
  stages: any[];
};

export default function StagesSection({ stages }: StagesSectionProps) {
  return (
    <>
      <div className=" px-[15.11%] SMALL_LAPTOP:px-[4.5rem] flex flex-col justify-center items-center w-full my-[13rem] TABLET:items-start ">
        <div className="text-Mobile-L-Head TABLET:text-Tablet-Head TABLET:mb-[5rem] SMALL_LAPTOP:text-SMALL_LAPTOP-Heading">
          Stages
        </div>
        <div className="SMALL_LAPTOP:flex SMALL_LAPTOP:w-full  SMALL_LAPTOP:justify-end ">
          <div className="w-full gap-y-[1rem] TABLET:gap-[2.5rem] grid grid-cols-1   SMALL_LAPTOP:w-[70%]  SMALL_LAPTOP:justify-items-center  ">
            {stages.map((stage) => {
              return (
                <StagesCard
                  mainHeading={stage.heading}
                  description={stage.brief}
                  id={stage.id}
                  key={stage.id}
                ></StagesCard>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
