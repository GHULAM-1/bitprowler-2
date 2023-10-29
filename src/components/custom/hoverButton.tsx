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
        <button className="    whitespace-nowrap items-center   group rounded-[2rem]  flex px-[8.6%]  py-[5.2%] gap-[1rem] justify-center transition-all text-Mobile-S-Text  dark:text-black hover:text-white  dark:bg-white bg-black text-white darktext-black laptop_sm:text-[1.3rem] desktop:text-[1rem]">
          <span className="inline">{children}</span>
          <ButtonArrowSVG className="dark:fill-black fill-white dark:fill-whitefill-black w-[24px] "></ButtonArrowSVG>
        </button>
      </Link>
    </>
  );
}
