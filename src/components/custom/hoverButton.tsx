import Link from "next/link";
import ButtonArrowSVG from "../../../public/buttonArrowSVG";
type HoverButtonProps = {
  children: any;
  pagePath: string;
};
export default function HoverButton({ children, pagePath }: HoverButtonProps) {
  return (
    <>
      <Link href={pagePath}>
        <button className=" text-textPrimaryColor LAPTOP:text-SMALL_LAPTOP-S-Text   whitespace-nowrap items-center   group rounded-[2rem]  flex SMALL_LAPTOP:hover:px-[8.6%]  SMALL_LAPTOP:hover:py-[5.2%] gap-[1rem] justify-center transition-all text-Mobile-S-Text    SMALL_LAPTOP:hover:bg-textPrimaryColor  SMALL_LAPTOP:hover:text-primaryBackgroundColor">
          <span className="inline">{children}</span>
          <ButtonArrowSVG className="SMALL_LAPTOP:group-hover:fill-primaryBackgroundColor fill-textPrimaryColor  w-[24px] "></ButtonArrowSVG>
        </button>
      </Link>
    </>
  );
}
