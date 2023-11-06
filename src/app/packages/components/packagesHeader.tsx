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
          <DotHeadings
            afterDotWord={name}
            beforeDotWord="Packages"
            secondColor="primary"
          ></DotHeadings>
        </div>

        <div className="dark:text-white text-black clamp-packages-page-mainHeading pr-[4.5rem]">
          {price}$
        </div>
      </div>
    </>
  );
}
