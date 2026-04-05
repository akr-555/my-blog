import { defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "記事",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "タイトル",
      type: "string",
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: "slug",
      title: "スラッグ（URL）",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "概要（記事一覧に表示）",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: "mainImage",
      title: "サムネイル画像",
      type: "image",
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
    defineField({
      name: "category",
      title: "カテゴリー",
      type: "reference",
      to: [{ type: "category" }],
    }),
    defineField({
      name: "author",
      title: "著者",
      type: "reference",
      to: [{ type: "author" }],
    }),
    defineField({
      name: "publishedAt",
      title: "公開日",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "featured",
      title: "注目記事にする",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "body",
      title: "本文",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "本文", value: "normal" },
            { title: "見出し2（H2）", value: "h2" },
            { title: "見出し3（H3）", value: "h3" },
            { title: "見出し4（H4）", value: "h4" },
            { title: "引用", value: "blockquote" },
          ],
          marks: {
            decorators: [
              { title: "太字", value: "strong" },
              { title: "イタリック", value: "em" },
              { title: "コード", value: "code" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "リンク",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                  },
                  {
                    name: "blank",
                    type: "boolean",
                    title: "新しいタブで開く",
                    initialValue: true,
                  },
                ],
              },
            ],
          },
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "代替テキスト",
              type: "string",
            }),
            defineField({
              name: "caption",
              title: "キャプション",
              type: "string",
            }),
          ],
        },
        {
          type: "code",
          title: "コードブロック",
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare({ title, author, media }) {
      return {
        title,
        subtitle: author ? `著者: ${author}` : "著者未設定",
        media,
      };
    },
  },
  orderings: [
    {
      title: "公開日（新しい順）",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
});
