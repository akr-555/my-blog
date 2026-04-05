import Link from "next/link";

export function Footer() {
  return (
    <>
      <div className="border-t border-[#e5e5e5] py-4 text-center text-xs text-[#9ca3af]" style={{ backgroundColor: "#f8f9fa" }}>
        ⚡ このサイトはWordPress (従来のCMS) ではなく、Sanity (ヘッドレスCMS) + Vercel という仕組みで構築・公開しています
      </div>
      <footer className="border-t border-white/10 text-white" style={{ backgroundColor: "#1e3a5f" }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-0.5 mb-2">
              <span className="font-bold tracking-widest text-sm text-white">ウェブタク</span>
            </div>
            <p className="text-xs text-white/60">
              AI・Web技術・便利ツールを趣味目線で楽しく発信
            </p>
          </div>

          <nav className="flex flex-wrap gap-6">
            <Link href="/posts" className="text-xs text-white/60 hover:text-white transition-colors">
              記事一覧
            </Link>
            {["About", "プライバシーポリシー", "お問い合わせ"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-xs text-white/60 hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <span>© 2025 ウェブタク. All rights reserved.</span>
          <span>Built with Next.js + Sanity + Vercel</span>
        </div>
      </div>
    </footer>
    </>
  );
}
