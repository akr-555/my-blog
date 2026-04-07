import type { PortableTextBlock } from "sanity";

export type SanityImage = {
  _type: "image";
  asset: { _ref: string; _type: "reference" };
  hotspot?: { x: number; y: number; height: number; width: number };
  alt?: string;
  caption?: string;
};

export type Category = {
  _id: string;
  title: string;
  slug: { current: string };
  description?: string;
  color?: string;
};

export type Author = {
  _id?: string;
  name: string;
  image?: SanityImage;
  bio?: string;
  twitterUrl?: string;
  githubUrl?: string;
};

export type SiteSettings = {
  heroImage?: SanityImage;
};

export type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  mainImage?: SanityImage;
  publishedAt?: string;
  featured?: boolean;
  body?: PortableTextBlock[];
  category?: Category;
  author?: Author;
};
