import createImageUrlBuilder from "@sanity/image-url";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityImageSource = any;
import { client } from "./client";

const imageBuilder = createImageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return imageBuilder.image(source);
}
