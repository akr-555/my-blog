import { defineField, defineType } from "sanity";

export const author = defineType({
  name: "author",
  title: "著者",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "名前",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "スラッグ（URL）",
      type: "slug",
      options: { source: "name" },
    }),
    defineField({
      name: "image",
      title: "プロフィール画像",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "bio",
      title: "プロフィール",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "twitterUrl",
      title: "Twitter/X URL",
      type: "url",
    }),
    defineField({
      name: "githubUrl",
      title: "GitHub URL",
      type: "url",
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
