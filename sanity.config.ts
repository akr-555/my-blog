import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { codeInput } from "@sanity/code-input";
import { schemaTypes } from "./sanity/schemaTypes";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  title: "TECHLOG",
  schema: {
    types: schemaTypes,
  },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .id("root")
          .title("コンテンツ")
          .items([
            S.documentTypeListItem("post").id("post").title("記事"),
            S.documentTypeListItem("category").id("category").title("カテゴリー"),
            S.documentTypeListItem("author").id("author").title("著者"),
            S.divider(),
            S.listItem()
              .title("サイト設定")
              .id("siteSettings")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
              ),
          ]),
    }),
    visionTool({ defaultApiVersion: "v2025-01-01" }),
    codeInput(),
  ],
});
