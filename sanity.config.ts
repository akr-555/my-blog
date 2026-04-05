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
    structureTool(),
    visionTool({ defaultApiVersion: "v2025-01-01" }),
    codeInput(),
  ],
});
