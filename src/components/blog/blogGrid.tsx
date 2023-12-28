"use client";
import { useTogglingStore } from "@/stores/togglingStore";
import { blogCardsDataT } from "@/types/types";
import BlogCard from "./blogCard";
type BlogGridProps = {
  blogCardsData: blogCardsDataT;
};
export default function BlogGrid({ blogCardsData }: BlogGridProps) {
  const searchCategoryMainPage = useTogglingStore((state: any) => state.searchCategoryMainPage);

  const filteredData = blogCardsData?.filter((item: any) => {
    if (searchCategoryMainPage !== "All") {
      return searchCategoryMainPage === item.tag;
    } else {
      return true;
    }
  });

  return (
    <>
      {filteredData?.length !== 0 ? (
        <div className="grid SMALL_LAPTOP:grid-cols-3 LAPTOP:grid-cols-4 TABLET:grid-cols-2 grid-cols-1  gap-14 text-textPrimaryColor mt-3 TABLET:mt-8 justify-items-center ">
          {filteredData?.map((card: any, i: any) => {
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
