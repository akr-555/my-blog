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

async function seed() {
  console.log("🌱 サンプルデータを投入します...");
  console.log(`Project ID: ${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`);
  console.log(`Dataset: ${process.env.NEXT_PUBLIC_SANITY_DATASET}`);

  // カテゴリー作成
  const categories = [
    {
      _type: "category",
      _id: "category-nextjs",
      title: "Next.js",
      slug: { _type: "slug", current: "nextjs" },
      description: "Next.jsに関する記事",
      color: "#00c8ff",
    },
    {
      _type: "category",
      _id: "category-typescript",
      title: "TypeScript",
      slug: { _type: "slug", current: "typescript" },
      description: "TypeScriptに関する記事",
      color: "#3178c6",
    },
    {
      _type: "category",
      _id: "category-react",
      title: "React",
      slug: { _type: "slug", current: "react" },
      description: "Reactに関する記事",
      color: "#61dafb",
    },
  ];

  // 著者作成
  const author = {
    _type: "author",
    _id: "author-main",
    name: "Akira",
    slug: { _type: "slug", current: "akira" },
    bio: [
      {
        _type: "block",
        _key: "bio-block-1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "bio-span-1",
            text: "フロントエンドエンジニア。Next.jsとTypeScriptが好き。",
          },
        ],
      },
    ],
  };

  // 記事作成
  const posts = [
    {
      _type: "post",
      _id: "post-nextjs-intro",
      title: "Next.js 15入門：App Routerで始めるモダンWeb開発",
      slug: { _type: "slug", current: "nextjs-15-intro" },
      excerpt:
        "Next.js 15のApp Routerを使ったモダンなWeb開発の始め方を解説します。Server ComponentsやData Fetchingの新しいパターンを学びましょう。",
      category: { _type: "reference", _ref: "category-nextjs" },
      author: { _type: "reference", _ref: "author-main" },
      publishedAt: new Date("2026-03-15").toISOString(),
      featured: true,
      body: [
        {
          _type: "block",
          _key: "block-1",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "span-1",
              text: "Next.js 15はReact 19との統合が強化され、Server Actionsがさらに使いやすくなりました。",
            },
          ],
        },
        {
          _type: "block",
          _key: "block-2",
          style: "h2",
          children: [{ _type: "span", _key: "span-2", text: "App Routerとは" }],
        },
        {
          _type: "block",
          _key: "block-3",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "span-3",
              text: "App RouterはNext.js 13で導入されたファイルシステムベースのルーティングシステムです。layout.tsx、page.tsx、loading.tsxなどの規約ファイルを使って、直感的にUIを構築できます。",
            },
          ],
        },
        {
          _type: "code",
          _key: "code-1",
          language: "typescript",
          code: `// app/page.tsx
export default async function HomePage() {
  const posts = await getPosts();

  return (
    <main>
      <h1>ブログ記事一覧</h1>
      {posts.map((post) => (
        <article key={post._id}>
          <h2>{post.title}</h2>
        </article>
      ))}
    </main>
  );
}`,
        },
      ],
    },
    {
      _type: "post",
      _id: "post-typescript-tips",
      title: "TypeScriptの型パズルを解く：実践的なGenerics活用術",
      slug: { _type: "slug", current: "typescript-generics-tips" },
      excerpt:
        "TypeScriptのGenericsを使った実践的なパターンを紹介。型安全なAPIクライアントの作り方から、条件型・マップ型の活用まで解説します。",
      category: { _type: "reference", _ref: "category-typescript" },
      author: { _type: "reference", _ref: "author-main" },
      publishedAt: new Date("2026-03-22").toISOString(),
      featured: false,
      body: [
        {
          _type: "block",
          _key: "block-1",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "span-1",
              text: "TypeScriptのGenericsは最初は難しく感じますが、パターンを覚えると強力な型安全性を実現できます。",
            },
          ],
        },
        {
          _type: "block",
          _key: "block-2",
          style: "h2",
          children: [{ _type: "span", _key: "span-2", text: "基本的なGenerics" }],
        },
        {
          _type: "code",
          _key: "code-1",
          language: "typescript",
          code: `// 型安全なAPIレスポンスラッパー
type ApiResponse<T> = {
  data: T;
  status: number;
  message: string;
};

async function fetchData<T>(url: string): Promise<ApiResponse<T>> {
  const res = await fetch(url);
  return res.json();
}

// 使用例
const result = await fetchData<{ name: string }[]>("/api/users");
// result.data は { name: string }[] 型として推論される`,
        },
      ],
    },
    {
      _type: "post",
      _id: "post-react-hooks",
      title: "React カスタムHooksパターン集：再利用可能なロジックの設計",
      slug: { _type: "slug", current: "react-custom-hooks-patterns" },
      excerpt:
        "よく使うカスタムHooksのパターンをまとめました。useLocalStorage、useDebounce、useFetchなど実用的なHooksの実装例を解説します。",
      category: { _type: "reference", _ref: "category-react" },
      author: { _type: "reference", _ref: "author-main" },
      publishedAt: new Date("2026-04-01").toISOString(),
      featured: false,
      body: [
        {
          _type: "block",
          _key: "block-1",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "span-1",
              text: "カスタムHooksはReactの強力な機能で、ロジックをコンポーネントから分離して再利用できます。",
            },
          ],
        },
        {
          _type: "code",
          _key: "code-1",
          language: "typescript",
          code: `// useDebounce Hook
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}`,
        },
      ],
    },
  ];

  try {
    // 著者を作成
    console.log("著者を作成中...");
    await client.createOrReplace(author);
    console.log("✓ 著者作成完了");

    // カテゴリーを作成
    console.log("カテゴリーを作成中...");
    for (const cat of categories) {
      await client.createOrReplace(cat);
      console.log(`  ✓ ${cat.title}`);
    }

    // 記事を作成
    console.log("記事を作成中...");
    for (const post of posts) {
      await client.createOrReplace(post);
      console.log(`  ✓ ${post.title}`);
    }

    console.log("\n✅ サンプルデータの投入が完了しました！");
    console.log("\nSanity Studio: http://localhost:3000/studio");
    console.log("ブログトップ: http://localhost:3000");
  } catch (error) {
    console.error("❌ エラーが発生しました:", error.message);
    if (error.statusCode === 401) {
      console.log("\n⚠️  APIトークンが必要です。");
      console.log(".env.local の SANITY_API_TOKEN に書き込み権限付きトークンを設定してください。");
      console.log("取得場所: https://www.sanity.io/manage > プロジェクト > API > Tokens");
    }
    process.exit(1);
  }
}

seed();
