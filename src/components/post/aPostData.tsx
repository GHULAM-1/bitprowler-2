import { createClient } from "next-sanity";
const client = createClient({
  projectId: "j04h1g84",
  dataset: "production",
  apiVersion: "2021-10-14",
  useCdn: false,
});

export async function fetchAPostData({ slug }: { slug: string }) {
  const res =
    await client.fetch(`*[_type == "post" && slug.current == "${slug}"] {
  ...,
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180),
  "authorImage":authorImage.asset->url,
  "bannerImage":bannerImage.asset->url,
  readNextArticles


}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
