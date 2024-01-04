import DotHeadings from "@/components/ui/dotHeadings";
type PackagesHeaderProps = {
  name: string;
  price: number;
};

export default function PackagesHeader({ name, price }: PackagesHeaderProps) {
  return (
    <>
      <div className="mb-[4rem]  flex justify-between items-baseline w-full max-w-screen-LARGE_LAPTOP ">
        <div className="   ">
          <DotHeadings
            afterDotWord={name}
            beforeDotWord="Packages"
            secondColor="primary"
          ></DotHeadings>
        </div>

        <div className="text-textPrimaryColor  pr-[4.5rem] SMALL_LAPTOP:text-SMALL_LAPTOP-Subheading TABLET:text-Tablet-S-Heading">
          {price}$
        </div>
      </div>
    </>
  );
}
