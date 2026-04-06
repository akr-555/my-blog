import Link from "next/link";

export function Header() {
  return (
    <header className="site-header border-b border-ui-border sticky top-0 z-50 isolate backdrop-filter-none" style={{ backgroundColor: '#1e4d7b', backgroundImage: 'none', opacity: 1 }}>
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between gap-8">
        {/* 左：ロゴ + キャッチコピー */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <span className="text-2xl font-bold tracking-widest" style={{ color: "#ffffff" }}>ウェブタク</span>
          <span className="hidden sm:block text-[11px] leading-snug border-l pl-3 whitespace-nowrap" style={{ color: "rgba(255,255,255,0.65)", borderColor: "rgba(255,255,255,0.3)" }}>
            AI・Web技術・便利ツールを趣味目線で楽しく発信
          </span>
        </Link>

        {/* 右：ナビ + Newsletter */}
        <div className="hidden md:flex items-center gap-5 ml-auto">
          <nav className="flex items-center gap-5">
            <Link href="/posts" className="nav-link text-xs transition-colors" style={{ color: "rgba(255,255,255,0.8)" }}>
              記事一覧
            </Link>
            <Link href="#" className="nav-link text-xs transition-colors" style={{ color: "rgba(255,255,255,0.8)" }}>
              About
            </Link>
            <Link href="/privacy-policy" className="nav-link text-xs transition-colors" style={{ color: "rgba(255,255,255,0.8)" }}>
              プライバシーポリシー
            </Link>
            <Link href="/contact" className="nav-link text-xs transition-colors" style={{ color: "rgba(255,255,255,0.8)" }}>
              お問い合わせ
            </Link>
          </nav>
          <Link
            href="/#newsletter"
            className="inline-flex items-center gap-2 text-xs font-medium border px-3 py-1.5 rounded-full transition-colors"
            style={{ borderColor: "rgba(255,255,255,0.4)", color: "#ffffff" }}
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
