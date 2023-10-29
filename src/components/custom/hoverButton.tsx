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
        <button className=" items-center   group rounded-[2rem]  flex hover:px-[2rem] hover:py-[0.5rem] gap-[1rem] justify-center transition-all text-Mobile-S-Text  text-black hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black laptop_sm:text-[1.3rem] desktop:text-[1rem]">
          <span className="inline">{children}</span>
          <ButtonArrowSVG className="fill:black group-hover:fill-white dark:fill-white group-hover:dark:fill-black w-[24px] "></ButtonArrowSVG>
        </button>
      </Link>
    </>
  );
}
      