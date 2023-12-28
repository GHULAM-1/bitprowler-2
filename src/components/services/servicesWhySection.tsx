import ServicesWhySectionChunk from "./servicesWhySectionChunk";
type ServicesWhySectionProps = {
  mainHeading: string;
  subHeadings: any[];
};

export default function ServicesWhySection({
  mainHeading,
  subHeadings,
}: ServicesWhySectionProps) {
  return (
    <>
      <div className=" px-[8.14%] w-screen flex-col justify-center items-center text-black dark:text-white mb-[28%] ">
        <div className="flex text-Mobile-L-Head w-full justify-center mb-[10%]">
          {mainHeading}
        </div>
        <div className="w-full flex  flex-col justify-center items-center ">
          {subHeadings.map((subHeading, index) => {
            return (
              <ServicesWhySectionChunk
                heading={subHeading.heading}
                brief={subHeading.brief}
                key={index}
              ></ServicesWhySectionChunk>
            );
          })}
        </div>
      </div>
    </>
  );
}
