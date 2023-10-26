import DotHeadings from "@/components/custom/dotHeadings";
import BackArrowSVG from "../../../../public/backArrowSVG";
type PackagesHeaderProps = {
  name: string;
  price: number;
};

export default function PackagesHeader({ name, price }: PackagesHeaderProps) {
  return (
    <>
      <div className="mb-[4rem]  flex justify-between items-center w-full">
        <div className="   ">
          {/* <BackArrowSVG className=" dark:fill-white fill-black clamp-arrow "></BackArrowSVG> */}
          <DotHeadings
            afterDotWord={name}
            beforeDotWord="Packages"
            secondColor="primary"
            cssClampClass="clamp-packages-page-mainHeading"
          ></DotHeadings>
        </div>

        <div className="dark:text-white text-black clamp-packages-page-mainHeading">
          {price}$
        </div>
      </div>
    </>
  );
}
