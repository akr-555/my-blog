import Image from "next/image";
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

function Hero() {
  return (
    <section className="border-b border-[var(--gray-border)] text-white overflow-hidden relative">
      {/* 背景画像 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        {/* 軽いオーバーレイ（暗くなりすぎないよう 60% 程度） */}
        <div className="absolute inset-0 bg-[var(--deep-navy)]/60" />
      </div>
      {/* グリッドパターン */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none z-[1]"
        style={{
          backgroundImage:
            "linear-gradient(#00c8ff 1px, transparent 1px), linear-gradient(90deg, #00c8ff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 relative z-10">
        <div className="animate-fade-up delay-100 inline-flex items-center gap-3 mb-8">
          <span className="accent-line" />
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: "var(--accent)" }}
          >
            AI・テクノロジー情報ブログ
          </span>
        </div>

        <h1 className="animate-fade-up delay-200 text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
          ウェブテクノロジーに興味津々な
          <br />
          <span style={{ color: "var(--accent)" }}>オヤジ</span>が贈る、
          <br />
          実は便利で面白いWeb情報
        </h1>

        <p className="animate-fade-up delay-300 text-base md:text-lg text-white/60 max-w-xl leading-relaxed mb-10">
          AI活用・Web技術・便利ツールを
          趣味目線で楽しく発信しています。
        </p>

        <div className="animate-fade-up delay-400 flex flex-wrap gap-4">
          <Link
            href="/posts"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm text-[var(--foreground)] hover:opacity-90 transition-opacity"
            style={{ background: "var(--accent)" }}
          >
            記事を読む
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M1 7h12M8 2l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm border border-white/20 hover:border-white/60 transition-colors"
          >
            About
          </Link>
        </div>

        <div className="animate-fade-up delay-500 flex gap-10 mt-16 pt-10 border-t border-white/10">
          {[
            { value: "120+", label: "記事数" },
            { value: "月8,000", label: "PV" },
            { value: "2023", label: "創刊" },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="text-2xl font-bold" style={{ color: "var(--accent)" }}>
                {value}
              </div>
              <div className="text-xs text-white/40 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedPost({ post }: { post: Post }) {
  return (
    <section className="border-b border-[var(--gray-border)]" id="articles">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-10">
          <span className="accent-line" />
          <h2 className="text-xs font-semibold tracking-widest uppercase text-[var(--gray-muted)]">
            Featured
          </h2>
        </div>

        <Link href={`/posts/${post.slug.current}`} className="group block card-hover">
          <div className="grid md:grid-cols-2 gap-0 rounded-2xl border border-[var(--gray-border)] overflow-hidden hover:border-[var(--foreground)] transition-colors">
            <div
              className="aspect-video md:aspect-auto relative flex items-center justify-center"
              style={{ background: "var(--deep-navy)", minHeight: "240px" }}
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 30% 60%, rgba(0,200,255,0.25), transparent 60%)",
                }}
              />
              <span
                className="text-6xl font-black tracking-tighter select-none relative z-10"
                style={{ color: "var(--accent)", opacity: 0.3 }}
              >
                {post.category?.title?.slice(0, 2).toUpperCase() ?? "TL"}
              </span>
            </div>

            <div className="p-8 md:p-10 bg-[var(--gray-subtle)] flex flex-col justify-center">
              {post.category && (
                <span
                  className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-5 self-start"
                  style={{ background: "var(--accent-dim)", color: "var(--accent)" }}
                >
                  {post.category.title}
                </span>
              )}

              <h3 className="text-xl md:text-2xl font-bold leading-snug mb-4 group-hover:underline decoration-[var(--accent)] underline-offset-4">
                {post.title}
              </h3>

              {post.excerpt && (
                <p className="text-sm text-[var(--gray-muted)] leading-relaxed mb-8">
                  {post.excerpt}
                </p>
              )}

              <div className="flex items-center gap-4 text-xs text-[var(--gray-muted)]">
                <span>{formatDate(post.publishedAt)}</span>
                {post.author && (
                  <>
                    <span>·</span>
                    <span>{post.author.name}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

function CategoryFilter({ categories }: { categories: Category[] }) {
  return (
    <div className="border-b border-[var(--gray-border)] bg-white/90 backdrop-blur-md sticky top-16 z-40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex gap-1.5 overflow-x-auto py-3">
          <Link
            href="/posts"
            className="shrink-0 text-xs px-4 py-1.5 rounded-full transition-colors bg-[var(--deep-navy)] text-white"
          >
            すべて
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat._id}
              href={`/posts?category=${cat.slug.current}`}
              className="shrink-0 text-xs px-4 py-1.5 rounded-full transition-colors text-[var(--gray-muted)] hover:text-[var(--foreground)] hover:bg-[var(--gray-subtle)]"
            >
              {cat.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/posts/${post.slug.current}`} className="group block card-hover">
      <article className="h-full border border-[var(--gray-border)] rounded-xl overflow-hidden hover:border-[var(--foreground)] transition-colors flex flex-col">
        <div
          className="aspect-video relative flex items-center justify-center bg-[var(--gray-subtle)]"
        >
          <span
            className="text-4xl font-black tracking-tighter select-none opacity-[0.07]"
            style={{ color: "var(--foreground)" }}
          >
            {post.category?.title?.slice(0, 2).toUpperCase() ?? "TL"}
          </span>
        </div>

        <div className="p-5 flex flex-col flex-1">
          {post.category && (
            <span
              className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mb-3 self-start"
              style={{ background: "var(--accent-dim)", color: "var(--accent)" }}
            >
              {post.category.title}
            </span>
          )}

          <h3 className="text-sm font-semibold leading-snug mb-3 group-hover:underline decoration-[var(--accent)] underline-offset-2 flex-1">
            {post.title}
          </h3>

          {post.excerpt && (
            <p className="text-xs text-[var(--gray-muted)] leading-relaxed line-clamp-2 mb-4">
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

function Newsletter() {
  return (
    <section id="newsletter" className="bg-[var(--deep-navy)] text-white">
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <span className="accent-line block mx-auto mb-8" />
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          最新記事をニュースレターで受け取る
        </h2>
        <p className="text-sm text-white/50 mb-8 max-w-md mx-auto">
          週3回、厳選したテクノロジー情報をメールでお届けします。スパムなし、いつでも解除可能。
        </p>
        <form className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 px-4 py-3 rounded-full text-sm bg-white/10 border border-white/20 placeholder-white/30 text-white focus:outline-none focus:border-[var(--accent)]"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-full text-sm font-medium text-[var(--foreground)] hover:opacity-90 transition-opacity cursor-pointer"
            style={{ background: "var(--accent)" }}
          >
            登録する
          </button>
        </form>
      </div>
    </section>
  );
}

export default async function Home() {
  const [posts, categories] = await Promise.all([
    client.fetch<Post[]>(postsQuery),
    client.fetch<Category[]>(categoriesQuery),
  ]);

  const featured = posts.find((p) => p.featured) ?? posts[0];
  const rest = featured ? posts.filter((p) => p._id !== featured._id) : posts;

  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        {featured && <FeaturedPost post={featured} />}
        <CategoryFilter categories={categories} />
        <section className="border-b border-[var(--gray-border)]">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-3">
                <span className="accent-line" />
                <h2 className="text-xs font-semibold tracking-widest uppercase text-[var(--gray-muted)]">
                  Latest Articles
                </h2>
              </div>
              <Link
                href="/posts"
                className="text-xs text-[var(--gray-muted)] hover:text-[var(--foreground)] transition-colors flex items-center gap-1"
              >
                すべて見る
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M1 6h10M7 2l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
            {rest.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {rest.map((post) => (
                  <PostCard key={post._id} post={post} />
                ))}
              </div>
            ) : (
              <p className="text-sm text-[var(--gray-muted)]">記事がまだありません。</p>
            )}
          </div>
        </section>
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
