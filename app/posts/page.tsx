import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { postsQuery, categoriesQuery } from "@/sanity/lib/queries";
import type { Post, Category } from "@/sanity/lib/types";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";

function formatDate(iso?: string) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/posts/${post.slug.current}`} className="group block card-hover">
      <article className="h-full border border-[var(--gray-border)] rounded-xl overflow-hidden hover:border-[var(--foreground)] transition-colors flex flex-col">
        <div
          className="aspect-video relative flex items-center justify-center"
          style={{ background: "var(--gray-subtle)" }}
        >
          <span
            className="text-4xl font-black tracking-tighter select-none opacity-[0.07]"
            style={{ color: "var(--foreground)" }}
          >
            {post.category?.title?.slice(0, 2).toUpperCase() ?? "TL"}
          </span>
        </div>

        <div className="p-6 flex flex-col flex-1">
          {post.category && (
            <span
              className="inline-block text-xs font-light px-2.5 py-0.5 rounded-full mb-4 self-start tracking-wide"
              style={{ background: "var(--accent-dim)", color: "var(--accent)" }}
            >
              {post.category.title}
            </span>
          )}

          <h2 className="text-sm font-normal leading-snug tracking-wide mb-4 group-hover:underline decoration-[var(--accent)] underline-offset-2 flex-1">
            {post.title}
          </h2>

          {post.excerpt && (
            <p className="text-xs text-[var(--gray-muted)] line-clamp-2 mb-5">
              {post.excerpt}
            </p>
          )}

          <div className="flex items-center justify-between text-xs text-[var(--gray-muted)] mt-auto pt-3 border-t border-[var(--gray-border)]">
            <span>{formatDate(post.publishedAt)}</span>
            {post.author && <span>{post.author.name}</span>}
          </div>
        </div>
      </article>
    </Link>
  );
}

export default async function PostsPage() {
  const [posts, categories] = await Promise.all([
    client.fetch<Post[]>(postsQuery),
    client.fetch<Category[]>(categoriesQuery),
  ]);

  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="border-b border-[var(--gray-border)] bg-[var(--gray-subtle)]">
          <div className="max-w-6xl mx-auto px-6 py-20">
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="accent-line" />
              <span className="text-xs font-light tracking-widest uppercase text-[var(--gray-muted)]">
                All Articles
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-light tracking-wider">記事一覧</h1>
          </div>
        </div>

        {categories.length > 0 && (
          <div className="border-b border-[var(--gray-border)] bg-white/90 backdrop-blur-md sticky top-16 z-40">
            <div className="max-w-6xl mx-auto px-6">
              <div className="flex gap-1.5 overflow-x-auto py-3">
                <Link
                  href="/posts"
                  className="shrink-0 text-xs px-4 py-1.5 rounded-full bg-[var(--foreground)] text-white"
                >
                  すべて
                </Link>
                {categories.map((cat) => (
                  <Link
                    key={cat._id}
                    href={`/posts?category=${cat.slug.current}`}
                    className="shrink-0 text-xs px-4 py-1.5 rounded-full text-[var(--gray-muted)] hover:text-[var(--foreground)] hover:bg-[var(--gray-subtle)] transition-colors"
                  >
                    {cat.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="max-w-6xl mx-auto px-6 py-20">
          {posts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          ) : (
            <p className="text-sm text-[var(--gray-muted)]">記事がまだありません。</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
