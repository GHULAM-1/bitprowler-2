"use client";
import { useTogglingStore } from "@/stores/togglingStore";
import SearchBox from "./searchBox";
import { blogCardsDataT } from "@/types/types";
type searchModalProps = {
  blogCardsData: blogCardsDataT;
};

export default function SearchModal({ blogCardsData }: searchModalProps) {
  const isSearchActive = useTogglingStore((state: any) => state.isSearchActive);
  const toggleSearchWindow = useTogglingStore(
    (state: any) => state.toggleSearchWindow
  );
  const setSearchCategoryMainPage = useTogglingStore(
    (state: any) => state.setSearchCategoryMainPage
  );
  const setSearchCategory = useTogglingStore(
    (state: any) => state.setSearchCategory
  );

  const handleClick = () => {
    console.log("closing via search model");
    document.body.style.overflow = "visible";
    setSearchCategory("All");

    toggleSearchWindow();
  };

  if (isSearchActive) {
    document.body.style.overflow = "hidden";
    return (
      <>
        <dialog
          className="w-screen h-screen    mt-[1rem] dark:bg-black/80 transition-opacity   bg-black/20   flex TABLET:justify-center TABLET:items-center absolute z-10 overflow-y-visible "
          onClick={handleClick}
        >
          <SearchBox blogCardsData={blogCardsData}></SearchBox>
        </dialog>
      </>
    );
  } else {
    return <></>;
  }
}
