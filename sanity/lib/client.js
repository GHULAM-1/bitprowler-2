import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "../env";

export const client = createClient({
  apiVersion: "2022-03-07",
  dataset,
  projectId,
  useCdn,
});
