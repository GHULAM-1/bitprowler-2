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
      <div className="text-themeColor ">{mainHeading}</div>
    </>
  );
}

/* <Link href={`/blog/${slug}`}>{mainHeading}</Link> */
