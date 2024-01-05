"use client";
import React, { ChangeEvent, useEffect, useRef } from "react";
import SearchSVG from "~/searchSVG";
import CrossSVg from "~/navImages/crossSVG";
import { useTogglingStore } from "@/stores/togglingStore";

type ActiveSearchProps = {
  setSearchString: React.Dispatch<React.SetStateAction<string>>;
};

export default function ActiveSearch({ setSearchString }: ActiveSearchProps) {
  const toggleSearchWindow = useTogglingStore(
    (state: any) => state.toggleSearchWindow
  );
  const setSearchCategoryMainPage = useTogglingStore(
    (state: any) => state.setSearchCategoryMainPage
  );
  const setSearchCategory = useTogglingStore(
    (state: any) => state.setSearchCategory
  );

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []); // Empty dependency array to run the effect only once when the component mounts

  const handleClick = () => {
    document.body.style.overflow = "visible";
    setSearchCategory("All");
    setSearchCategoryMainPage("All");
    toggleSearchWindow();
  };

  return (
    <>
      <div className="w-full flex items-center gap-2">
        <SearchSVG className="h-[32px] w-[32px] fill-none"></SearchSVG>
        <input
          ref={inputRef}
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
  