import { useTogglingStore } from "@/store/store";
import SearchBox from "./searchBox";
import { mainPageDataT } from "../../../../types";
type searchModalProps = {
  mainPageData: mainPageDataT | null;
};
export default function SearchModal({ mainPageData }: searchModalProps) {
  const isSearchActive = useTogglingStore((state: any) => state.isSearchActive);
  const toggleSearchWindow = useTogglingStore(
    (state: any) => state.toggleSearchWindow
  );

  const handleClick = () => {
    document.body.style.overflow = "visible";
    toggleSearchWindow();
  };

  if (isSearchActive) {
    document.body.style.overflow = "hidden";
    return (
      <>
        <dialog
          className="w-screen h-screen   mt-[1rem] dark:bg-black/80 transition-opacity   bg-black/20   flex TABLET:justify-center TABLET:items-center absolute z-10 overflow-y-visible "
          onClick={handleClick}
        >
          <SearchBox mainPageData={mainPageData}></SearchBox>
        </dialog>
      </>
    );
  } else {
    return <></>;
  }
}
