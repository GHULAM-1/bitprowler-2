import { blogCardsDataT } from "@/types/types";
import { blogCardsQuery } from "@/utils/queries";
import { sanityFetch } from "@/utils/sanityFetch";
export default async function BlogCardsData() {
  const blogCardsData: blogCardsDataT = await sanityFetch({
    query: blogCardsQuery,
  });
  return blogCardsData;
}
