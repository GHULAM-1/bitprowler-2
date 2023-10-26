import LongBottomLogo from "./longBottomLogo";
import FacebookSVG from "../../../public/socialSVSGs/facebookSVG";
import FiverSVG from "../../../public/socialSVSGs/fiverSVG";
import InstagramSVG from "../../../public/socialSVSGs/instagramSVG";
import LinkedinSVG from "../../../public/socialSVSGs/linkedinSVG";

export default function LongBottom() {
  return (
    <>
      <div className="flex px-[2rem] items-center p-[1rem] justify-between bg-[#EAEAEA] dark:bg-[#151515] text-black dark:text-white w-[98%] rounded-[0.5rem]">
        <LongBottomLogo></LongBottomLogo>
        {/* <div className="text-small-text  w-[70%] flex justify-center">
          © Copyright 2023. All rights reserved.
        </div> */}
        <div className="flex gap-[1.5rem] justify-end max-[468]:gap-[0.5rem]">
          <FacebookSVG className="   dark:fill-white fill-black clamp-footer-icons  "></FacebookSVG>
          <InstagramSVG className="w-[30px] h-[30px] dark:fill-white fill-black"></InstagramSVG>
          <LinkedinSVG className="w-[30px] h-[30px] dark:fill-white fill-black"></LinkedinSVG>
          <FiverSVG className="w-[30px] h-[30px] dark:fill-white fill-black"></FiverSVG>
        </div>
      </div>
    </>
  );
}
