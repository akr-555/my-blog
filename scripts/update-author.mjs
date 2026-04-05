import { createClient } from "@sanity/client";
import { config } from "dotenv";
import { resolve } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
config({ path: resolve(__dirname, "../.env.local") });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2025-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

async function updateAuthor() {
  const authors = await client.fetch('*[_type == "author"]{_id, name}');
  console.log("現在の著者一覧:", authors);

  const target = authors.find((a) => a.name === "Akira");
  if (!target) {
    console.log('著者 "Akira" が見つかりませんでした。');
    return;
  }

  await client.patch(target._id).set({ name: "ウェブタク" }).commit();
  console.log(`✅ 著者名を "Akira" → "ウェブタク" に更新しました (id: ${target._id})`);
}

updateAuthor().catch(console.error);
