import Link from "next/link";
import ButtonArrowSVG from "../../../public/buttonArrowSVG";
export default function BigCTA() {
  return (
    <>
      <Link
        href="/contactus"
        className="w-full flex justify-center items-center"
      >
        <div className="group border  py-[2rem] rounded-[0.5rem] text-heading border-primary gap-[1rem] flex justify-center w-[98%]  text-black dark:text-white hover:bg-primary hover:text-white">
          <div className="clamp-bigCTA transition-all">Let's Work Together</div>

          <ButtonArrowSVG className="fill-black dark:fill-white group-hover:fill-white w-[150px] clamp-bigCTA-width"></ButtonArrowSVG>
        </div>
      </Link>
    </>
  );
}
