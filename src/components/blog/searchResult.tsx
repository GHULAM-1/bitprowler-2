"use client";
import { useTogglingStore } from "@/stores/togglingStore";
import Link from "next/link";
type SearchResultProps = {
  slug: string;
  mainHeading: string;
  category?: string;
};
export default function SearchResult({ slug, mainHeading }: SearchResultProps) {
  const isSearchActive = useTogglingStore((state: any) => state.isSearchActive);

  const toggleSearchWindow = useTogglingStore(
    (state: any) => state.toggleSearchWindow
  );
  const handleClick = () => {
    document.body.style.overflow = "visible";
    if (isSearchActive) {
      toggleSearchWindow();
    }
  };
  return (
    <>
      <Link
        href={`/blog/${slug}`}
        className="flex text-Mobile-Text TABLET:text-SMALL_LAPTOP-Text py-4 TABLET:py-6 hover:bg-[#cc2c1433]  transition-all ease-linear  px-4"
        onClick={handleClick}
      >
        {mainHeading}
      </Link>
    </>
  );
}
