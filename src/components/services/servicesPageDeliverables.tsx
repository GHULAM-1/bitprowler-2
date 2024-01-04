import ServicesPills from "../ui/servicesPills";
export default function ServicesPageDeliverables({ deliverablesData }: any) {
  return (
    <>
      <div className=" px-[4.5rem] flex  justify-center items-center mt-[18rem] w-screen max-w-screen-LARGE_LAPTOP ">
        <div className="flex bg-background w-full flex-col flex-wrap justify-start items-start">
          <div className="TABLET:text-Tablet-Head SMALL_LAPTOP:text-SMALL_LAPTOP-Heading mb-[2rem] ">
            Deliverables
          </div>

          <div className="bg-background flex SMALL_LAPTOP:w-[70%] TABLET:w-full flex-wrap justify-start items-center  ">
            {deliverablesData.map((item: any) => {
              return (
                <>
                  <ServicesPills>{item}</ServicesPills>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
