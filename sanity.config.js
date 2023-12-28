/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.jsx` route
 */
import { codeInput } from "@sanity/code-input";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { myTheme } from "./sanity/sanityTheme";
// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  apiVersion: "2022-03-07",
  useCdn: false,

  schema,
  plugins: [
    deskTool(),

    visionTool({ defaultApiVersion: apiVersion }),
  
    codeInput(),
  ],
  theme: myTheme,
});
