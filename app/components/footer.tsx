export function Footer() {
  return (
    <footer className="site-footer border-t border-ui-border" style={{ backgroundColor: '#1e4d7b', backgroundImage: 'none' }}>
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col items-center gap-2 text-center">
        <span className="font-bold tracking-widest text-sm" style={{ color: "#ffffff" }}>
          ウェブタク
        </span>
        <span className="text-xs" style={{ color: "rgba(255,255,255,0.65)" }}>
          © 2026 ウェブタク. All rights reserved.
        </span>
        <span className="text-xs" style={{ color: "rgba(255,255,255,0.65)" }}>
          このサイトはSanity + Next.js + Vercelで構築しています
        </span>
      </div>
    </footer>
  );
}
