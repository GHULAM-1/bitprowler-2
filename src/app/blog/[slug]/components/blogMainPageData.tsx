import { createClient } from "next-sanity";
const client = createClient({
  projectId: "j04h1g84",
  dataset: "production",
  apiVersion: "2021-10-14",
  useCdn: false,
});

async function getData() {
  const res = await client.fetch(`*[_type == "post"]| order(publishedAt desc){
"mainHeading":title ,
  "slug":slug.current ,
  "bannerImage": bannerImage.asset->url ,
  authorName,
  "tag":category[0],
  publishedAt,
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 )
  
}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();

  return <main>{JSON.stringify(data)}</main>;
}
