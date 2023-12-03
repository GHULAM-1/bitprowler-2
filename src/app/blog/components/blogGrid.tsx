import { mainPageDataT } from "../../../../types";
import BlogCard from "./blogCard";
import Divider from "./divider";
type BlogGridProps = {
  mainPageData: mainPageDataT | null;
  searchCategory: string;
};

export default function BlogGrid({
  mainPageData,
  searchCategory,
}: BlogGridProps) {
  const filteredData = mainPageData?.filter((item) => {
    if (searchCategory !== "All") {
      return searchCategory === item.tag;
    } else {
      return true;
    }
  });

  return (
    <>
      {filteredData?.length !== 0 ? (
        <div className="flex  gap-8 text-themeColor">
          {filteredData?.map((card, i) => {
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
      ) : (
        <div>No result !!!!!!!!!</div>
      )}
    </>
  );
}
