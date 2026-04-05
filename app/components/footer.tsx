import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--gray-border)]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-0.5 mb-2">
              <span className="font-bold tracking-widest text-sm">TECH</span>
              <span
                className="font-bold tracking-widest text-sm"
                style={{ color: "var(--accent)" }}
              >
                LOG
              </span>
            </div>
            <p className="text-xs text-[var(--gray-muted)]">
              AI・テクノロジー情報を深掘りするブログ
            </p>
          </div>

          <nav className="flex flex-wrap gap-6">
            <Link href="/posts" className="text-xs text-[var(--gray-muted)] hover:text-[var(--foreground)] transition-colors">
              記事一覧
            </Link>
            {["About", "プライバシーポリシー", "お問い合わせ"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-xs text-[var(--gray-muted)] hover:text-[var(--foreground)] transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--gray-border)] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[var(--gray-muted)]">
          <span>© 2025 TECHLOG. All rights reserved.</span>
          <span>Built with Next.js + Sanity + Vercel</span>
        </div>
      </div>
    </footer>
  );
}
