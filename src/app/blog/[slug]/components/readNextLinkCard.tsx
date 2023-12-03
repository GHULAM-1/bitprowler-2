import LinkArrowSVG from "../../../../../public/linkArrow";
import { removehyphens } from "@/utils/removeHyphens";
import Link from "next/link";
type ReadNextLinkCardProps = {
  readNextSlug: string;
};
export default function ReadNextLinkCard({
  readNextSlug,
}: ReadNextLinkCardProps) {
  const linkHeading = removehyphens(readNextSlug);
  return (
    <>
      <Link href={`/blog/${readNextSlug}`}>
        <div>{linkHeading}</div>
        <LinkArrowSVG className="w-[30.33px] h-[30.33px] fill-themeColor"></LinkArrowSVG>
      </Link>
    </>
  );
}

