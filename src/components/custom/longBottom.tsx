"use client";
import LongBottomLogo from "./longBottomLogo";
import FacebookSVG from "../../../public/socialSVSGs/facebookSVG";
import FiverSVG from "../../../public/socialSVSGs/fiverSVG";
import InstagramSVG from "../../../public/socialSVSGs/instagramSVG";
import LinkedinSVG from "../../../public/socialSVSGs/linkedinSVG";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function LongBottom() {
  const { theme, setTheme } = useTheme();
  const { resolvedTheme } = useTheme();
  let src;

  switch (resolvedTheme) {
    case "light":
      src = "/brand_images/bitprowler-black.svg";
      break;
    case "dark":
      src = "/brand_images/bitprowler-white.svg";
      break;
    default:
      src = "/brand_images/bitprowler-white.svg";
      break;
  }

  return (
    <>
      {/* mobile */}
      <div className="flex flex-col w-full justify-center items-center TABLET:hidden ">
        <div className="flex  items-center p-[1rem] justify-between bg-[#EAEAEA] dark:bg-[#151515] text-black dark:text-white w-[99%] rounded-t-[0.5rem] ">
          <Image
            // src={
            //   theme === "dark"
            //     ? "/brand_images/bitprowler-white.svg"
            //     : "/brand_images/bitprowler-black.svg"
            // }
            src={src}
            width={50}
            height={50}
            alt="bit prowler"
            className="w-[115px] h-[24px]"
          ></Image>
          <div className="hidden text-small-text  w-[70%] laptop_sm:flex justify-center desktop:text-[1.5rem] ">
            © Copyright 2023. All rights reserved.
          </div>
          <div className="flex gap-[0.5rem] justify-end laptop_lg:gap-[1.5rem] desktop:gap-[2.5rem] items-center">
            <FacebookSVG className=" laptop_lg:h-[30px] laptop_lg:w-[30px]  dark:fill-white fill-black w-[20px] h-[20px] desktop:w-[60px] desktop:h-[60px]"></FacebookSVG>
            <InstagramSVG className=" laptop_lg:h-[30px] laptop_lg:w-[30px] w-[20px] h-[20px] dark:fill-white fill-black desktop:w-[60px] desktop:h-[60px]"></InstagramSVG>
            <LinkedinSVG className=" laptop_lg:h-[30px] laptop_lg:w-[30px] w-[20px] h-[20px] dark:fill-white fill-black desktop:w-[60px] desktop:h-[60px]"></LinkedinSVG>
            <FiverSVG className="w-[20px] h-[20px] laptop_lg:h-[30px] laptop_lg:w-[30px] dark:fill-white fill-black desktop:w-[60px] desktop:h-[60px]"></FiverSVG>
          </div>
        </div>
        <div className="flex justify-center items-center text-[0.8rem]  py-[1rem] dark:bg-[#151515] bg-[#EAEAEA] w-[99%] dark:text-white text-black laptop_sm:hidden rounded-b-[0.5rem]">
          © Copyright 2023. All rights reserved.
        </div>
      </div>
      {/* other devices */}

      <div className="flex w-full items-center justify-center">
        <div className="hidden TABLET:flex bg-tertiaryBackgroundColor w-[98%] rounded-[1rem] justify-between px-[2rem] py-[1rem] items-center">
          <Image
            // src={
            //   theme === "dark"
            //     ? "/brand_images/bitprowler-white.svg"
            //     : "/brand_images/bitprowler-black.svg"
            // }
            src={src}
            width={50}
            height={50}
            alt="bit prowler"
            className="TABLET:w-[152px] TABLET:h-[32px] SMALL_LAPTOP:w-[230px] SMALL_LAPTOP:h-[48px]"
          ></Image>

          <div className="TABLET:text-Tablet-Caption SMALL_LAPTOP:text-SMALL_LAPTOP-S-Text">
            © Copyright 2023. All rights reserved.
          </div>
          <div className="flex gap-[1rem] ">
            <FacebookSVG className=" SMALL_LAPTOP:w-[30px] SMALL_LAPTOP:h-[30px] TABLET:w-[24px] TABLET:h-[24px] dark:fill-white fill-black "></FacebookSVG>
            <InstagramSVG className=" SMALL_LAPTOP:w-[30px] SMALL_LAPTOP:h-[30px] TABLET:w-[24px] TABLET:h-[24px] dark:fill-white fill-black  "></InstagramSVG>
            <LinkedinSVG className=" SMALL_LAPTOP:w-[30px] SMALL_LAPTOP:h-[30px] TABLET:w-[24px] TABLET:h-[24px] dark:fill-white fill-black "></LinkedinSVG>
            <FiverSVG className=" SMALL_LAPTOP:w-[30px] SMALL_LAPTOP:h-[30px] TABLET:w-[24px] TABLET:h-[24px] dark:fill-white fill-black "></FiverSVG>
          </div>
        </div>
      </div>
    </>
  );
}
