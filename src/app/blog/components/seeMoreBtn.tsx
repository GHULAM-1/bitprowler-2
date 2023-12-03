import DropdownArrow from "../../../../public/arrows/dropdownArrowSVG";
export default function SeeMoreBtn() {
  return (
    <>
      <button className="flex bg-themeColor ">
        see more
        <DropdownArrow className="w-[20px] h-[20px] fill-textPrimaryColor"></DropdownArrow>
      </button>
    </>
  );
}
