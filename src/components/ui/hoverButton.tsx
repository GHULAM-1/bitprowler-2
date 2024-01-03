import Link from "next/link";
import ButtonArrowSVG from "~/buttonArrowSVG";
type HoverButtonProps = {
  children: any;
};
export default function HoverButton({ children }: HoverButtonProps) {
  return (
    <>
      <button className=" text-textPrimaryColor LAPTOP:text-SMALL_LAPTOP-S-Text   whitespace-nowrap items-center   group rounded-[2rem]  flex SMALL_LAPTOP:hover:px-[8.6%]  SMALL_LAPTOP:hover:py-[5.2%] gap-[1rem] justify-center transition-all text-Mobile-S-Text    SMALL_LAPTOP:hover:bg-textPrimaryColor  SMALL_LAPTOP:hover:text-primaryBackgroundColor">
        <span className="inline">{children}</span>
        <ButtonArrowSVG className="SMALL_LAPTOP:group-hover:fill-primaryBackgroundColor fill-textPrimaryColor  w-[24px] "></ButtonArrowSVG>
      </button>
    </>
  );
}
