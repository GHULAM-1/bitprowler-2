import LongBottomLogo from "./longBottomLogo";
import FacebookSVG from "../../../public/socialSVSGs/facebookSVG";
import FiverSVG from "../../../public/socialSVSGs/fiverSVG";
import InstagramSVG from "../../../public/socialSVSGs/instagramSVG";
import LinkedinSVG from "../../../public/socialSVSGs/linkedinSVG";

export default function LongBottom() {
  return (
    <>
      <div className="flex flex-col w-full justify-center items-center  ">
        <div className="flex  items-center p-[1rem] justify-between bg-[#EAEAEA] dark:bg-[#151515] text-black dark:text-white w-[99%] rounded-t-[0.5rem] ">
          <LongBottomLogo></LongBottomLogo>
          <div className="hidden text-small-text  w-[70%] laptop_sm:flex justify-center desktop:text-[1.5rem] ">
            © Copyright 2023. All rights reserved.
          </div>
          <div className="flex gap-[0.5rem] justify-end laptop_lg:gap-[1.5rem] desktop:gap-[2.5rem] items-center">
            <FacebookSVG className=" laptop_lg:h-[40px] laptop_lg:w-[40px]  dark:fill-white fill-black w-[20px] h-[20px] desktop:w-[60px] desktop:h-[60px]"></FacebookSVG>
            <InstagramSVG className=" laptop_lg:h-[40px] laptop_lg:w-[40px] w-[20px] h-[20px] dark:fill-white fill-black desktop:w-[60px] desktop:h-[60px]"></InstagramSVG>
            <LinkedinSVG className=" laptop_lg:h-[40px] laptop_lg:w-[40px] w-[20px] h-[20px] dark:fill-white fill-black desktop:w-[60px] desktop:h-[60px]"></LinkedinSVG>
            <FiverSVG className="w-[20px] h-[20px] laptop_lg:h-[40px] laptop_lg:w-[40px] dark:fill-white fill-black desktop:w-[60px] desktop:h-[60px]"></FiverSVG>
          </div>
        </div>
        <div className="flex justify-center items-center text-[0.8rem]  py-[1rem] dark:bg-[#151515] bg-[#EAEAEA] w-[99%] dark:text-white text-black laptop_sm:hidden rounded-b-[0.5rem]">
          © Copyright 2023. All rights reserved.
        </div>
      </div>
    </>
  );
}
