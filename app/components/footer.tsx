export function Footer() {
  return (
    <>
      <div className="border-t border-[var(--gray-border)] py-4 text-center text-xs text-[#9ca3af]" style={{ backgroundColor: "var(--background)" }}>
        ⚡ このサイトはWordPress (従来のCMS) ではなく、Sanity (ヘッドレスCMS) + Vercel という仕組みで構築・公開しています
      </div>
      <footer className="border-t border-white/10 text-white" style={{ backgroundColor: "#2563eb" }}>
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <span className="font-bold tracking-widest text-sm text-white/80">ウェブタク</span>
          <span>© 2025 ウェブタク. All rights reserved.</span>
          <span>Built with Next.js + Sanity + Vercel</span>
        </div>
      </div>
    </footer>
    </>
  );
}
