import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-[var(--gray-border)] sticky top-0 z-50" style={{ backgroundColor: "#f1f3f5" }}>
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between gap-8">
        {/* 左：ロゴ + キャッチコピー */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <span className="text-2xl font-bold tracking-widest" style={{ color: "var(--foreground)" }}>ウェブタク</span>
          <span className="hidden sm:block text-[11px] leading-snug border-l pl-3" style={{ color: "var(--gray-muted)", borderColor: "var(--gray-border)" }}>
            AI・Web技術・便利ツールを<br />趣味目線で楽しく発信
          </span>
        </Link>

        {/* 右：ナビ + Newsletter */}
        <div className="hidden md:flex items-center gap-5">
          <nav className="flex items-center gap-5">
            <Link href="/posts" className="nav-link text-xs transition-colors" style={{ color: "var(--gray-muted)" }}>
              記事一覧
            </Link>
            {["About", "プライバシーポリシー", "お問い合わせ"].map((item) => (
              <Link
                key={item}
                href="#"
                className="nav-link text-xs transition-colors"
                style={{ color: "var(--gray-muted)" }}
              >
                {item}
              </Link>
            ))}
          </nav>
          <Link
            href="#newsletter"
            className="inline-flex items-center gap-2 text-xs font-medium border px-3 py-1.5 rounded-full transition-colors"
            style={{ borderColor: "var(--gray-border)", color: "var(--foreground)" }}
          >
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--accent)" }}
            />
            Newsletter
          </Link>
        </div>
      </div>
    </header>
  );
}
