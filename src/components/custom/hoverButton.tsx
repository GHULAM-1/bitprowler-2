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
        <button className=" rounded-[2rem]  flex hover:px-[2rem] gap-[1rem] justify-center transition-all text-Mobile-S-Text  text-black hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black laptop_sm:text-[1.3rem] desktop:text-[1rem]">
          <span className="inline">{children}</span>
          {/* <ButtonArrowSVG className="fill:black group-hover:fill-white dark:fill-white group-hover:dark:fill-black "></ButtonArrowSVG> */}

          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"z
            height="24"
            viewBox="0 0 58 24"
            
          >
            <path
              
              d="M57.0607 13.0607C57.6464 12.4749 57.6464 11.5251 57.0607 10.9393L47.5147 1.3934C46.9289 0.807611 45.9792 0.807611 45.3934 1.3934C44.8076 1.97919 44.8076 2.92893 45.3934 3.51472L53.8787 12L45.3934 20.4853C44.8076 21.0711 44.8076 22.0208 45.3934 22.6066C45.9792 23.1924 46.9289 23.1924 47.5147 22.6066L57.0607 13.0607ZM0 13.5H56V10.5H0V13.5Z"
            />
          </svg> */}
        </button>
      </Link>
    </>
  );
}
