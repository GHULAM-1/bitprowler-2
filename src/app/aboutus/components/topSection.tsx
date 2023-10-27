type TopSectionProps = {
  description: string;
};
export default function TopSection({ description }: TopSectionProps) {
  return (
    <>
      <div className="flex flex-col justify-center items-center  w-screen h-screen px-[1rem] dark:text-white text-black laptop_sm:hidden">
        <div className="text-[3rem]">About us</div>

        <div className="text-center text-[1.1rem]">{description}</div>
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
    </>
  );
}
