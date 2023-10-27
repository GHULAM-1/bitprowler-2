"use client";
import Image from "next/image";
import WebDarkSVG from "../../../../public/servicesSectionImages/webDarkSVG";
import { useTogglingStore } from "@/store/store";
export default function ServicesPageWebHero() {
  const isDarkTheme = useTogglingStore((state: any) => state.isDarkTheme);
  return (
    <>
      <div className="w-full h-full">
        <div
          className={` ${
            isDarkTheme === true
              ? "service-hero-light-gradient"
              : "service-hero-dark-gradient"
          }  relative overflow-hidden z-[1] h-[80%] flex justify-center items-center rounded-[0.5rem]  flex-col `}
        >
          <Image
            src="/uxDark.png"
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
