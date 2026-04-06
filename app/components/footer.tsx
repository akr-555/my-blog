export function Footer() {
  return (
    <footer className="site-footer border-t border-ui-border" style={{ backgroundColor: '#f1f3f5', backgroundImage: 'none' }}>
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col items-center gap-2 text-center">
        <span className="font-bold tracking-widest text-sm" style={{ color: "var(--foreground)" }}>
          ウェブタク
        </span>
        <span className="text-xs" style={{ color: "var(--gray-muted)" }}>
          © 2026 ウェブタク. All rights reserved.
        </span>
        <span className="text-xs" style={{ color: "var(--gray-muted)" }}>
          このサイトはSanity + Next.js + Vercelで構築しています
        </span>
      </div>
    </footer>
  );
}
