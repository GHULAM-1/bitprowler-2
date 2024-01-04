type CTASectionProps = {
  children: ReactNode;
};
import Link from "next/link";
import ButtonArrowSVG from "../../../public/buttonArrowSVG";
import { ReactNode } from "react";
export default function CTASection({ children }: CTASectionProps) {
  return (
    <>
      <Link
        href="/contactus"
        className="w-full flex items-center justify-center  cursor-pointer max-w-screen-LARGE_LAPTOP "
      >
        <button className=" group  bg-themeColor SMALL_LAPTOP:bg-transparent SMALL_LAPTOP:border-2 SMALL_LAPTOP:border-themeColor SMALL_LAPTOP:hover:bg-themeColor SMALL_LAPTOP:transition-all SMALL_LAPTOP:ease-linear w-[98%]  flex py-[8.14%] SMALL_LAPTOP:py-[4.8rem] justify-center items-center TABLET:justify-start TABLET:pl-[3rem]  gap-[1.5rem] rounded-[0.5rem] mb-[0.5rem] ">
          <div className=" group-hover:text-white text-Mobile-S-Heading  text-textPrimaryColor font-medium TABLET:text-Tablet-S-Heading SMALL_LAPTOP:text-SMALL_LAPTOP-M-Subheading LAPTOP:SMALL_LAPTOP:text-SMALL_LAPTOP-Heading ">
            {children}
          </div>
          <ButtonArrowSVG className=" w-[4.5rem] h-[4.5rem] TABLET:w-[96px] TABLET:h-[96px] SMALL_LAPTOP:w-[320px] SMALL_LAPTOP:h-[150px] fill-textPrimaryColor group-hover:fill-white"></ButtonArrowSVG>
        </button>
      </Link>
    </>
  );
}
