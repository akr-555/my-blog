import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-[var(--gray-border)] bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-0.5">
          <span className="text-lg font-bold tracking-widest text-[var(--foreground)]">ウェブタク</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/posts" className="nav-link text-sm text-[var(--gray-muted)] hover:text-[var(--foreground)] transition-colors">
            記事一覧
          </Link>
          {["About", "お問い合わせ"].map((item) => (
            <Link
              key={item}
              href="#"
              className="nav-link text-sm text-[var(--gray-muted)] hover:text-[var(--foreground)] transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        <Link
          href="#newsletter"
          className="hidden md:inline-flex items-center gap-2 text-xs font-medium border border-[var(--gray-border)] px-4 py-2 rounded-full hover:border-[var(--foreground)] transition-colors"
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
