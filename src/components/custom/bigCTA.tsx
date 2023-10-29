import Link from "next/link";
import ButtonArrowSVG from "../../../public/buttonArrowSVG";
export default function BigCTA() {
  return (
    <>
      <Link
        href="/contactus"
        className="w-full flex items-center justify-center"
      >
        <div className="bg-primary w-[99%]  flex py-[8.14%] justify-center items-center  gap-[1.5rem] rounded-[0.5rem] mb-[0.5rem] ">
          <div className=" text-Mobile-S-Heading text-white font-medium">
            Let's work together
          </div>
          <ButtonArrowSVG className="fill-white w-[4.5rem]"></ButtonArrowSVG>
        </div>
      </Link>
    </>
  );
}
