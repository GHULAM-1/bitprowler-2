import { useTogglingStore } from "@/store/store";
import Image from "next/image";
import { useState } from "react";
type ServiceCardProps = {
  iconDark: string;
  mainHeading: string;
  description: string;
};
export default function ServiceSectionCard({
  iconDark,
  mainHeading,
  description,
}: ServiceCardProps) {
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <div
        className={` m-[2rem] min-w-[262px] rounded-[0.5rem] border flex flex-col  border-primary p-[1rem] dark:bg-[#151515] bg-[#EAEAEA] max-w-[25rem] hover:bg-primary dark:hover:bg-primary transition-transform transform ${
          isHover ? "scale-105" : ""
        }`}
      >
        <div className=" flex justify-end ">
          <Image src="#" width={49} height={49} alt="Picture of the author" />
        </div>

        <div className="my-[1.5rem]">
          <Image src="#" width={60} height={60} alt="Picture of the author" />
        </div>

        <div className="service-heading text-[40px] clamp-service-main-heading ">
          {mainHeading}
        </div>

        <div className="service-description text-[16px]">{description}</div>
      </div>
    </>
  );
}
