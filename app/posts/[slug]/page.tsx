import { notFound } from "next/navigation";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { postBySlugQuery, postSlugsQuery } from "@/sanity/lib/queries";
import type { Post } from "@/sanity/lib/types";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { PortableTextBody } from "@/app/components/portable-text-body";

function formatDate(iso?: string) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function generateStaticParams() {
  const slugs = await client.fetch<{ slug: string }[]>(postSlugsQuery);
  return slugs.map(({ slug }) => ({ slug }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await client.fetch<Post | null>(postBySlugQuery, { slug });

  if (!post) notFound();

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <div className="border-b border-[var(--gray-border)] bg-[var(--foreground)] text-white">
          <div className="max-w-3xl mx-auto px-6 py-24 md:py-32">
            {post.category && (
              <span
                className="inline-block text-xs font-light px-3 py-1 rounded-full mb-8 tracking-wider"
                style={{ background: "var(--accent-dim)", color: "var(--accent)" }}
              >
                {post.category.title}
              </span>
            )}
            <h1 className="text-3xl md:text-4xl font-light leading-snug tracking-wider mb-8">
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="text-base text-white/60 mb-10">{post.excerpt}</p>
            )}
            <div className="flex items-center gap-4 text-sm text-white/40">
              {post.publishedAt && <span>{formatDate(post.publishedAt)}</span>}
              {post.author && (
                <>
                  <span>·</span>
                  <span>{post.author.name}</span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="max-w-3xl mx-auto px-6 py-24">
          {post.body ? (
            <div className="text-base">
              <PortableTextBody value={post.body} />
            </div>
          ) : (
            <p className="text-[var(--gray-muted)]">本文がありません。</p>
          )}

          {/* Author */}
          {post.author && (
            <div className="mt-20 pt-12 border-t border-[var(--gray-border)]">
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold text-white"
                  style={{ background: "var(--foreground)" }}
                >
                  {post.author.name.slice(0, 1)}
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1">{post.author.name}</p>
                  {post.author.bio && (
                    <p className="text-xs text-[var(--gray-muted)] leading-relaxed">
                      {post.author.bio}
                    </p>
                  )}
                  <div className="flex gap-3 mt-2">
                    {post.author.twitterUrl && (
                      <a
                        href={post.author.twitterUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[var(--accent)] hover:underline"
                      >
                        Twitter/X
                      </a>
                    )}
                    {post.author.githubUrl && (
                      <a
                        href={post.author.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[var(--accent)] hover:underline"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Back link */}
          <div className="mt-16">
            <Link
              href="/posts"
              className="inline-flex items-center gap-2 text-sm text-[var(--gray-muted)] hover:text-[var(--foreground)] transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M13 7H1M6 2L1 7l5 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              記事一覧に戻る
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
