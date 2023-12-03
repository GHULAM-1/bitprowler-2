import Link from "next/link";
import Image from "next/image";
import Pills, { PillsProps } from "@/components/custom/pills";
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
      <Link href={`/blog/${slug}`}>
        <Image src={bannerImage} width={366} height={200} alt="image"></Image>
        <div>
          <Pills
            intent={tag?.split(" ").join("") as PillsProps["intent"]}
            size="regularFilterPills"
          >
            {tag}
          </Pills>
          <div>{mainHeading}</div>
          <div>By {authorName}</div>
          <div className="flex justify-between">
            <div>
              {dateInNumbers[2]} {monthName} {dateInNumbers[0]}
            </div>
            <div>{estimatedReadingTime} min read</div>
          </div>
        </div>
      </Link>
    </>
  );
}
