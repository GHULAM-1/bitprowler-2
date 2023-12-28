import LinkArrowSVG from "../../../public/linkArrow";
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
      <Link
        href={`/blog/${readNextSlug}`}
        className="text-Mobile-Head TABLET:text-Tablet-Large-Text flex items-end TABLET:max-w-[338px] max-w-[250px] justify-between "
      >
        <div className=" leading-[4rem] max-w-[200px] TABLET:max-w-[260px]">
          <span className=" border-b-2 border-textPrimaryColor pb-[6px]   ">
            {linkHeading}
          </span>
        </div>
        <LinkArrowSVG className=" TABLET:w-[64px] TABLET:h-[64px] w-[50px] h-[50px] fill-themeColor"></LinkArrowSVG>
      </Link>
    </>
  );
}
