import HeroGradient from "./heroGradient";
type TopSectionProps = {
  description: string;
};
export default function TopSection({ description }: TopSectionProps) {
  return (
    <>
      <div className="relative flex flex-col justify-center z-0  ">
        <HeroGradient></HeroGradient>
        <div className="w-full relative flex flex-col justify-center items-center   h-screen px-[15.11%]  dark:text-white text-black laptop_sm:hidden">
          <div className="text-Mobile-L-Head">About us</div>

          <div className="text-center text-Mobile-S-Heading">{description}</div>
        </div>

        <div className="hidden bg-green-500 laptop_sm:flex  h-full px-[4.481rem]">
          <div className="left flex w-[50%]  flex-col justify-center items-start ">
            <div className="text-[4rem]">About us</div>

            <div className="text-left text-[1.3rem] laptop_lg:w-[80%] desktop:text-[1.6rem]">
              {description}
            </div>
          </div>
          <div className="right  flex w-[50%] "></div>
        </div>
      </div>
    </>
  );
}
