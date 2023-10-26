import Image from "next/image";
import WebDarkSVG from "../../../../public/servicesSectionImages/webDarkSVG";

export default function ServicesPageWebHero() {
  return (
    <>
      <div className="w-full h-full">
        <div
          className="  relative overflow-hidden z-[1] h-[80%] flex justify-center items-center rounded-[0.5rem]  flex-col first-letter:bg-gradient-to-br from-red-600 to-black "
          style={{
            backgroundImage:
              "linear-gradient(71deg, #EB5D48 10.66%, #CC2B14 26.32%, #151515 81.63%) ",
          }}
        >
          <Image
            src="/serviceCardImages/seoDark.svg"
            height={900}
            width={900}
            alt="dfdfdf"
            className="absolute z-[-1] opacity-20 right-0  w-[900px] h-[900px] "
          ></Image>

          <div className="text-[48px] ">
            “Good design is as little design as possible.”
          </div>
          <div className="text-[32px]">-Dieter Rams</div>
        </div>
      </div>
    </>
  );
}
