import { defineField, defineType } from "sanity";

export const category = defineType({
  name: "category",
  title: "カテゴリー",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "カテゴリー名",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "スラッグ（URL）",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "説明",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "color",
      title: "アクセントカラー（例: #00c8ff）",
      type: "string",
      initialValue: "#00c8ff",
    }),
  ],
  preview: {
    select: { title: "title" },
  },
});
