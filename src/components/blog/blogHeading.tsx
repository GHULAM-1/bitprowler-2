"use client";
import SearchModal from "./searchModal";
import { useTogglingStore } from "@/stores/togglingStore";
import { blogCardsDataT } from "@/types/types";
import "react-loading-skeleton/dist/skeleton.css";

type blogHeadingProps = {
  blogCardsData: blogCardsDataT;
};
export default function BlogHeading({ blogCardsData }: blogHeadingProps) {
  const isSearchActive = useTogglingStore((state: any) => state.isSearchActive);
  const toggleSearchWindow = useTogglingStore(
    (state: any) => state.toggleSearchWindow
  );
  {
    console.log(isSearchActive);
  }

  const handleClick = () => {
    if (isSearchActive) {
      toggleSearchWindow();
    }
  };

  const Blog = "Blog";

  return (
    <>
      <div onClick={handleClick}>
        <div className="font-medium text-Mobile-L-Head TABLET:text-Tablet-Head TABLET:font-normal SMALL_LAPTOP:text-SMALL_LAPTOP-Heading  ">
          {Blog}
        </div>
        <div className="flex TABLET:hidden">
          {isSearchActive === true ? (
            <SearchModal blogCardsData={blogCardsData}></SearchModal>
          ) : null}
        </div>
      </div>
    </>
  );
}
