export const metadata = {
  title: "TECHLOG Studio",
};

// Studioは独自のスタイルを持つため、グローバルCSSを除外
export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
