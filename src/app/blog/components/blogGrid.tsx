import { mainPageDataT } from "../../../../types";
import BlogCard from "./blogCard";
type BlogGridProps = {
  mainPageData: mainPageDataT | null;
};

export default function BlogGrid({ mainPageData }: BlogGridProps) {
  return (
    <>
      <div className="flex flex-col gap-8 text-themeColor">
        {mainPageData?.map((card, i) => {
          return (
            <BlogCard
              authorName={card.authorName}
              bannerImage={card.bannerImage}
              estimatedReadingTime={card.estimatedReadingTime}
              mainHeading={card.mainHeading}
              publishedAt={card.publishedAt}
              slug={card.slug}
              tag={card.tag}
              key={i}
            ></BlogCard>
          );
        })}
      </div>
    </>
  );
}
