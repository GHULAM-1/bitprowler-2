export default function ServicesDeliverablesSection({
  deliverables,
}: {
  deliverables: string[];
}) {
  return (
    <>
      <div className="w-full py-[23.7%] flex flex-col justify-center items-center text-black dark:text-white  ">
        <div className="w-full flex  justify-center text-Mobile-Head font-medium mb-[3.72%]">
          Deliverables
        </div>
        <div className="w-full flex   items-center justify-center flex-wrap text-center">
          {deliverables.map((deliverable, index) => {
            return (
              <span className="inline text-Mobile-Text">
                {deliverable}
                {index !== deliverables.length - 1 ? <span>,</span> : null}
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
}
