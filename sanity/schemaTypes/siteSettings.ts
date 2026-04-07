import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "サイト設定",
  type: "document",
  fields: [
    defineField({
      name: "heroImage",
      title: "ヒーロー画像",
      type: "image",
      description: "トップページのヒーローセクションに表示する背景画像",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "代替テキスト",
          type: "string",
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "サイト設定" };
    },
  },
});
