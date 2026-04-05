import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-white/10 sticky top-0 z-50" style={{ backgroundColor: "#2563eb" }}>
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-0.5">
          <span className="text-base font-bold tracking-widest text-white">ウェブタク</span>
        </Link>

        <nav className="hidden md:flex items-center gap-5">
          <Link href="/posts" className="nav-link text-xs text-white/75 hover:text-white transition-colors">
            記事一覧
          </Link>
          {["About", "プライバシーポリシー", "お問い合わせ"].map((item) => (
            <Link
              key={item}
              href="#"
              className="nav-link text-xs text-white/75 hover:text-white transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        <Link
          href="#newsletter"
          className="hidden md:inline-flex items-center gap-2 text-xs font-medium border border-white/30 px-3 py-1.5 rounded-full text-white hover:border-white transition-colors"
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
