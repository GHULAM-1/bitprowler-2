import "server-only";
import type { QueryParams } from "@sanity/client";
import { draftMode } from "next/headers";
import { client } from "../../sanity/lib/client";
import next from "next";

const DEFAULT_PARAMS = {} as QueryParams;
const DEFAULT_TAGS = [] as string[];

export const token = process.env.SANITY_API_READ_TOKEN;
// export const revalidate = 5;

export async function sanityFetch<QueryResponse>({
  query,
  params = DEFAULT_PARAMS,
  tags = DEFAULT_TAGS,
}: {
  query: string;
  params?: QueryParams;
  tags?: string[];
}): Promise<QueryResponse> {
  // const isDraftMode = draftMode().isEnabled;
  // if ( !token) {
  //   throw new Error(
  //     "The `SANITY_API_READ_TOKEN` environment variable is required."
  //   );
  // }
  const isDevelopment = process.env.NODE_ENV === "development";

  return client.fetch<QueryResponse>(query, params, {
    next: { revalidate: 0 },
  });
}

export async function sanityFetchSinglePost<QueryResponse>({
  slug,
  params = DEFAULT_PARAMS,
  tags = DEFAULT_TAGS,
}: {
  slug: string;
  params?: QueryParams;
  tags?: string[];
}): Promise<QueryResponse> {
  // if (!token) {
  //   throw new Error(
  //     "The `SANITY_API_READ_TOKEN` environment variable is required."
  //   );
  // }
  const isDevelopment = process.env.NODE_ENV === "development";

  return client.fetch<QueryResponse>(
    `*[_type == "post" && slug.current == "${slug}"] {
    ...,
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180),
    "authorImage":authorImage.asset->url,
    "bannerImage":bannerImage.asset->url,
    readNextArticles
  }`,
    params,
    {
      next: { revalidate: 0 },
    }
  );
}
