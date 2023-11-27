"use client";
import SearchSVG from "../../../../public/searchSVG";
import { useTogglingStore } from "@/store/store";
import SearchModal from "./searchModal";
export default function SearchIcon() {
  const toggleSearchWindow = useTogglingStore(
    (state: any) => state.toggleSearchWindow
  );

  return (
    <>
      <button
        className="SMALL_LAPTOP:bg-transparent transition-all  group TABLET:py-[0.5rem] TABLET:px-[2rem] TABLET:rounded-[49px] TABLET:bg-textPrimaryColor SMALL_LAPTOP:hover:py-[1rem] SMALL_LAPTOP:hover:px-[3rem] SMALL_LAPTOP:hover:rounded-[49px] SMALL_LAPTOP:hover:bg-textPrimaryColor flex justify-center items-center"
        onClick={() => toggleSearchWindow()}
      >
        <SearchSVG className=" SMALL_LAPTOP:stroke-textPrimaryColor  h-[48px] w-[48px] fill-none stroke-textPrimaryColor SMALL_LAPTOP:group-hover:stroke-primaryBackgroundColor TABLET:stroke-primaryBackgroundColor"></SearchSVG>
      </button>
      
    </>
  );
}
