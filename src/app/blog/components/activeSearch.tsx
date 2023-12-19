"use client";
import React, { ChangeEvent } from "react";
import SearchSVG from "../../../../public/searchSVG";
import CrossSVg from "../../../../public/navImages/crossSVG";
import { useTogglingStore } from "@/store/store";

type ActiveSearchProps = {
  setSearchString: React.Dispatch<React.SetStateAction<string>>;
};

export default function ActiveSearch({ setSearchString }: ActiveSearchProps) {
  const toggleSearchWindow = useTogglingStore(
    (state: any) => state.toggleSearchWindow
  );

  const handleClick = () => {
    document.body.style.overflow = "visible";

    toggleSearchWindow();
  };
  return (
    <>
      <div className="w-full flex items-center gap-2">
        <SearchSVG className="h-[32px] w-[32px] fill-none   "></SearchSVG>
        <input
          type="text"
          placeholder="search Blogs"
          className="w-full h-[46px] bg-transparent outline-none pl-2"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setSearchString(event.target.value)
          }
        />
        <button onClick={handleClick}>
          <CrossSVg className="w-[32px] h-[32px] fill-textPrimaryColor"></CrossSVg>
        </button>
      </div>
    </>
  );
}
