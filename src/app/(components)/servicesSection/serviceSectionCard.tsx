import Image from "next/image";
type ServiceCardProps = {
  iconDark: string;
  mainHeading: string;
  description: string;
  index: number;
};
export default function ServiceSectionCard({
  iconDark,
  mainHeading,
  description,
  index,
}: ServiceCardProps) {
  function isRightMargin() {
    if (index === 3 || index === 6) {
      return false;
    }
    return true;
  }

  const rightMargin = isRightMargin();

  return (
    <>
      <div
        className={`min-w-[262px] rounded-[0.5rem] border flex flex-col  border-primary p-[1rem] dark:bg-[#151515] bg-[#EAEAEA] max-w-[30rem] hover:bg-primary dark:hover:bg-primary transition-transform transform hover:scale-105 group max-[750px]:mr-[0rem] `}
      >
        <div className=" flex justify-end ">
          <Image
            src="/servicesSectionImages/arrowDark.svg"
            width={49}
            height={49}
            alt="Picture of the author"
          />
        </div>

        <div className="my-[1.5rem]">
          <Image
            src={iconDark}
            width={60}
            height={60}
            alt="Picture of the author"
            className=""
          />
        </div>

        <div className="service-heading text-[40px] clamp-service-main-heading ">
          {mainHeading}
        </div>

        <div className="service-description text-[16px]">{description}</div>
      </div>
    </>
  );
}
