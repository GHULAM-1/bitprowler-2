import { ReactElement } from "react";
type ServicesPageHeroMobileProps = {
  name: string;
  icon: ReactElement;
  hero: {
    quote: string;
    author: string;
  };
};

export default function ServicesPageHeroM({
  name,
  hero,
  icon,
}: ServicesPageHeroMobileProps) {
  return (
    <>
      <div className=" mt-[5.5rem] w-full h-screen  px-[8.14%] text-black dark:text-white flex flex-col justify-center items-center">
        <div className="flex items-center justify-center flex-col  w-full  TABLET:flex TABLET:flex-col TABLET:mb-[1rem] TABLET:w-full  TABLET:justify-start TABLET:items-start ">
          <div className=" text-medium text-Mobile-Head  TABLET:text-Tablet-S-Heading  ">
            Services
          </div>
          <div className="text-Mobile-L-Head mb-[5.58%] TABLET:mb-[2rem] font-medium flex  TABLET:text-Tablet-Head">
            {name}
          </div>
        </div>
        {/* gradient div */}
        <div className="w-full bg-background rounded-[1.5rem]">
          <div className="relative py-[31.1%]  w-full flex flex-col justify-center items-center gap-[1.8%] text-black dark:text-white text-center rounded-[1.5rem] z-10 overflow-hidden gradient-background-lightMode dark:gradient-background">
            {icon}

            <div className="text-Mobile-S-Heading w-[70.5%] text-center relative z-30 TABLET:text-Tablet-Large-Text">
              {hero.quote}
            </div>
            <div className="text-Mobile-Text relative z-30 TABLET:text-Tablet-Text TABLET:mt-[1rem]">
              {hero.author}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
