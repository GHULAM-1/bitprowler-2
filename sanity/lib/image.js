import createImageUrlBuilder from "@sanity/image-url";

import { dataset, projectId } from "../env";

const imageBuilder = createImageUrlBuilder({
  projectId: "j04h1g84" || "",
  dataset: "production" || "",
});

export const urlForImage = (source) => {
  return imageBuilder?.image(source).auto("format").fit("max");
};
