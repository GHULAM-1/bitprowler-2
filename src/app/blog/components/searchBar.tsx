import SearchSVG from "../../../../public/searchSVG";
import { useTogglingStore } from "@/store/store";
export default function SearchBar() {
  const toggleSearchWindow = useTogglingStore(
    (state: any) => state.toggleSearchWindow
  );

  return (
    <>
      <div
        className="mt-[1rem] mb-[0.5rem] bg-secondaryBackgroundColor flex justify-start items-center gap-[0.6rem] w-full rounded-[0.5rem] p-[0.7rem]"
        onClick={() => toggleSearchWindow()}
      >
        <SearchSVG className="fill-none stroke-textPrimaryColor h-[35px] w-[35px] " />
        <div className="text-Mobile-S-Heading ">Search</div>
      </div>
    </>
  );
}
