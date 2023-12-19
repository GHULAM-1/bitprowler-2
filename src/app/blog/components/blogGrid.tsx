import { Suspense, lazy } from "react";
import { mainPageDataT } from "../../../../types";
// import BlogCard from "./blogCard";
import Skeleton from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";
import Divider from "./divider";
const BlogCard = lazy(() => import("./blogCard"));
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
        <div className="grid SMALL_LAPTOP:grid-cols-3 LAPTOP:grid-cols-4 TABLET:grid-cols-2 grid-cols-1  gap-14 text-textPrimaryColor mt-3 TABLET:mt-8 justify-items-center ">
          {filteredData?.map((card, i) => {
            return (
              <Suspense
                fallback={
                  <div className="w-screen h-screen flex justify-center items-center">
                    <div className="lds-ripple">
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                }
              >
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
              </Suspense>
            );
          })}
        </div>
      ) : (
        <div>No result !!!!!!!!!</div>
      )}
    </>
  );
}
