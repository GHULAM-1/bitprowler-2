import { createClient, groq } from "next-sanity";
const client = createClient({
  projectId: "j04h1g84",
  dataset: "production",
  apiVersion: "2022-03-07",
  useCdn: false,
});

export async function fetchBlogCardsData() {
  const res =
    await client.fetch(groq`*[_type == "post"]| order(publishedAt desc){
"mainHeading":title ,
  "slug":slug.current ,
  "bannerImage": bannerImage.asset->url ,
  authorName,
  "tag":category[0],
  publishedAt,
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 )
  
}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
