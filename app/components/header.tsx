import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-[var(--gray-border)] sticky top-0 z-50" style={{ backgroundColor: "#f1f3f5" }}>
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex flex-col gap-0.5">
          <span className="text-lg font-bold tracking-widest" style={{ color: "var(--foreground)" }}>ウェブタク</span>
          <span className="text-[10px] leading-none" style={{ color: "var(--gray-muted)" }}>
            AI・Web技術・便利ツールを趣味目線で楽しく発信
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-5">
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
          className="hidden md:inline-flex items-center gap-2 text-xs font-medium border px-3 py-1.5 rounded-full transition-colors"
          style={{ borderColor: "var(--gray-border)", color: "var(--foreground)" }}
        >
          <span
            className="inline-block w-1.5 h-1.5 rounded-full"
            style={{ background: "var(--accent)" }}
          />
          Newsletter
        </Link>
      </div>
    </header>
  );
}
