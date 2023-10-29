import StagesCard from "./stagesCard";
type StagesSectionProps = {
  stages: any[];
};

export default function StagesSection({ stages }: StagesSectionProps) {
  return (
    <>
      <div className=" px-[15.11%] flex flex-col justify-center items-center w-full my-[33.7%] ">
        <div className="text-Mobile-L-Head">Stages</div>
        <div className="w-full gap-y-[1rem] grid grid-cols-1 justify-center justify-items-center ">
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
    </>
  );
}
