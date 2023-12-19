import Link from "next/link";
type SearchResultProps = {
  slug: string;
  mainHeading: string;
  category?: string;
};
export default function SearchResult({ slug, mainHeading }: SearchResultProps) {
  console.log("in search result", mainHeading);
  return (
    <>
      <Link
        href={`/blog/${slug}`}
        className="flex text-Mobile-Text TABLET:text-SMALL_LAPTOP-Text py-4 TABLET:py-6 hover:bg-[#cc2c1433]  transition-all ease-linear  px-4"
      >
        {mainHeading}
      </Link>
    </>
  );
}

/* <Link href={`/blog/${slug}`}>{mainHeading}</Link> */
