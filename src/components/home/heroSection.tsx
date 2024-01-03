import HomeParticles from "@/components/home/homeParticles";
import Link from "next/link";
export default function HeroSection() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center px-[1.86%] ">
      <div className="  top-div  flex flex-col justify-center items-center h-full w-full TABLET:px-[5%] TABLET:items-start SMALL_LAPTOP:items-center mt-[6.15%]">
        <h1 className="text-Mobile-Head  font-medium  flex text-center TABLET:text-Tablet-S-Heading TABLET:text-left SMALL_LAPTOP:text-SMALL_LAPTOP-Subheading SMALL_LAPTOP:text-center dark:text-white text-black">
          Revolutionizing Digital Realities,
        </h1>

        <h1 className="text-Mobile-Head font-medium  text-center TABLET:text-Tablet-S-Heading TABLET:text-left SMALL_LAPTOP:text-SMALL_LAPTOP-Subheading SMALL_LAPTOP:text-center dark:text-white text-black">
          One <span className="text-themeColor">Bit</span> at a Time.
        </h1>
        <Link href="/contactus">
          <button className="py-[0.75rem] px-[1.5rem] bg-themeColor text-Mobile-Text rounded-[0.5rem] mt-[1rem] TABLET:text-SMALL_LAPTOP-Text TABLET:px-[2.5rem] TABLET:py-[1rem] shadow-md shadow-black ">
            Get in Touch
          </button>
        </Link>
      </div>

      <HomeParticles></HomeParticles>
    </div>
  );
}
