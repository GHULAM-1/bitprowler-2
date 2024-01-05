import { ReactElement } from "react";

type ServicesPageWebHeroProps = {
  icon: ReactElement;
  hero: {
    quote: string;
    author: string;
  };
};
export default function ServicesPageHeroL({
  hero,
  icon,
}: ServicesPageWebHeroProps) {
  return (
    <>
      <div className="w-screen h-[90%] px-[4.5rem] max-w-screen-LARGE_LAPTOP flex  ">
        <div
          className={` w-full  gradient-background-lightMode dark:gradient-background     relative overflow-hidden z-[1] h-[85%] flex justify-center items-center rounded-[0.5rem]  flex-col `}
        >
          {icon}

          <div className="SMALL_LAPTOP:text-SMALL_LAPTOP-S-Subheading  SMALL_LAPTOP:w-[50%] SMALL_LAPTOP:text-center">
            {hero.quote}
          </div>
          <div className="SMALL_LAPTOP:text-SMALL_LAPTOP-L-Text">
            {hero.author}
          </div>
        </div>
      </div>
    </>
  );
}
