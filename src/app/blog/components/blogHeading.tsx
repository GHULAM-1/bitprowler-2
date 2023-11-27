import SearchModal from "./searchModal";
import { useTogglingStore } from "@/store/store";
import { mainPageDataT } from "../../../../types";
type blogHeadingProps = {
  mainPageData: mainPageDataT | null;
};
export default function BlogHeading({ mainPageData }: blogHeadingProps) {
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

  return (
    <>
      <div onClick={handleClick}>
        <div className="font-medium text-Mobile-L-Head TABLET:text-Tablet-Head TABLET:font-normal SMALL_LAPTOP:text-SMALL_LAPTOP-Heading  ">
          Blog
        </div>
        <div className="flex TABLET:hidden">
          {isSearchActive === true ? (
            <SearchModal mainPageData={mainPageData}></SearchModal>
          ) : null}
        </div>
      </div>
    </>
  );
}
