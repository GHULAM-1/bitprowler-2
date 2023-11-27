import Link from "next/link";
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
  return (
    <>
      <Link href={`/blog/${slug}`}>{mainHeading}</Link>
    </>
  );
}
