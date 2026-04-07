import { groq } from "next-sanity";

// 記事一覧（要約のみ）
export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    featured,
    category->{ title, slug, color },
    author->{ name, image }
  }
`;

// 注目記事（最新1件）
export const featuredPostQuery = groq`
  *[_type == "post" && featured == true] | order(publishedAt desc)[0] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    category->{ title, slug, color },
    author->{ name, image }
  }
`;

// 記事詳細（本文含む）
export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    featured,
    body,
    category->{ title, slug, color },
    author->{ name, "bio": pt::text(bio), image, twitterUrl, githubUrl }
  }
`;

// カテゴリー別記事一覧
export const postsByCategoryQuery = groq`
  *[_type == "post" && category->slug.current == $categorySlug] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    category->{ title, slug, color },
    author->{ name, image }
  }
`;

// カテゴリー一覧
export const categoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    slug,
    description,
    color
  }
`;

// 全スラッグ一覧（静的生成用）
export const postSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)] { "slug": slug.current }
`;

// サイト設定（シングルトン）
export const siteSettingsQuery = groq`
  *[_type == "siteSettings" && _id == "siteSettings"][0] {
    heroImage
  }
`;
