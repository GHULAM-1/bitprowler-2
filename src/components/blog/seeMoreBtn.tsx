import DropdownArrow from "../../../public/arrows/dropdownArrowSVG";
export default function SeeMoreBtn() {
  return (
    <>
      <button
        disabled
        className="flex disabled:opacity-50  bg-themeColor text-white px-4 py-3 items-center font-semibold rounded-[8px] "
      >
        see more
        <DropdownArrow className="w-[20px] h-[20px] fill-white"></DropdownArrow>
      </button>
    </>
  );
}
