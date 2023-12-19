import Link from "next/link";
import Image from "next/image";
import Pills, { PillsProps } from "@/components/ui/pills";
import extractingNumbersFromDate from "@/utils/extractingNumbersFromDate";
import dateToMonth from "@/utils/dateToMonth";
type BlogCardProps = {
  authorName: string;
  bannerImage: string;
  estimatedReadingTime: string;
  mainHeading: string;
  publishedAt: string;
  slug: string;
  tag: string;
};
export default function BlogCard({
  authorName,
  bannerImage,
  estimatedReadingTime,
  mainHeading,
  publishedAt,
  slug,
  tag,
}: BlogCardProps) {
  const dateInNumbers = extractingNumbersFromDate(publishedAt);
  const monthName = dateToMonth(publishedAt);
  return (
    <>
      <Link
        href={`/blog/${slug}`}
        className=" flex-col  flex justify-between   max-w-[366px]    "
      >
        <div>
          <Image
            src={bannerImage}
            width={366}
            height={380}
            alt="image"
            className="mb-3"
          ></Image>
          <div className="upper-div ">
            <Pills
              intent={tag?.split(" ").join("") as PillsProps["intent"]}
              size="blogTags"
            >
              {tag}
            </Pills>
            <div className="font-semibold text-Mobile-S-Heading my-3">
              {mainHeading}
            </div>
          </div>
        </div>

        <div className="lower-div">
          <div className="font-semibold text-Mobile-Text mb-1">
            By {authorName}
          </div>

          <div className="flex justify-between text-Mobile-Text text-textSecondaryColor ">
            <div>
              {dateInNumbers[2]} {monthName} {dateInNumbers[0]}
            </div>
            <div className="pr-2">{estimatedReadingTime} min read</div>
          </div>
        </div>
      </Link>
    </>
  );
}
