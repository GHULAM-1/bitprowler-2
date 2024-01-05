import AboutusBSVG from "~/aboutusBSVG";
type TopSectionProps = {
  description: string;
};
export default function TopSection({ description }: TopSectionProps) {
  return (
    <>
      <div className=" w-full h-screen flex max-w-screen-LARGE_LAPTOP ">
        <div className="SMALL_LAPTOP:w-1/2 p-10 SMALL_LAPTOP:pl-16 TABLET:p-16 h-full flex flex-col justify-center items-center relative -z-10">
          <div className="dark:topSectionDarkGradient topSectionLightGradient"></div>

          <div className="relative z-10 flex flex-col items-center text-center SMALL_LAPTOP:items-start SMALL_LAPTOP:text-left gap-6 TABLET:gap-12 ">
            <div className="text-Mobile-L-Head TABLET:text-Tablet-L-Head SMALL_LAPTOP:text-SMALL_LAPTOP-Heading whitespace-nowrap">
              About us
            </div>
            <div className="text-Mobile-S-Heading TABLET:text-Tablet-Text SMALL_LAPTOP:text-SMALL_LAPTOP-L-Text">
              {description}
            </div>
          </div>
        </div>

        <div className=" hidden SMALL_LAPTOP:flex justify-center items-center w-1/2  h-full LARGE_LAPTOP:justify-end LARGE_LAPTOP:pr-8">
          <AboutusBSVG className="w-[261px] h-[240px] fill-textPrimaryColor"></AboutusBSVG>
        </div>
      </div>
    </>
  );
}
