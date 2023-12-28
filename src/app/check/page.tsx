import { fetchBlogCardsData } from "@/components/post/blogMainPageData";
import { sanityFetch } from "@/utils/sanityFetch";
import { groq } from "next-sanity";

export default async function Check() {
  const data = await sanityFetch({
    query: `*[_type == "post"]| order(publishedAt desc){
"mainHeading":title ,
  "slug":slug.current ,
  "bannerImage": bannerImage.asset->url ,
  authorName,
  "tag":category[0],
  publishedAt,
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 )
  
}`,
  });
  console.log(data);
  return (
    <>
      <div className="flex w-screen h-screen justify-center items-center">
        ghulam
      </div>
    </>
  );
}
