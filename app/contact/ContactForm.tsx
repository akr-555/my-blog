"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="rounded-xl p-8 text-center"
        style={{ background: "var(--gray-subtle)", border: "1px solid var(--gray-border)" }}
      >
        <div
          className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4"
          style={{ background: "var(--accent-dim)" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 13l4 4L19 7"
              stroke="var(--accent)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h2 className="text-lg font-bold mb-2" style={{ color: "var(--foreground)" }}>
          送信しました
        </h2>
        <p className="text-sm" style={{ color: "var(--gray-muted)" }}>
          お問い合わせありがとうございます。<br />
          内容を確認のうえ、順次ご返信いたします。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* お名前 */}
      <div>
        <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--foreground)" }}>
          お名前
          <span className="ml-2 text-xs px-1.5 py-0.5 rounded" style={{ background: "var(--accent-dim)", color: "var(--accent)" }}>必須</span>
        </label>
        <input
          type="text"
          required
          placeholder="例：山田 太郎"
          className="w-full px-4 py-2.5 rounded-lg text-sm border focus:outline-none focus:border-[var(--accent)]"
          style={{ borderColor: "var(--gray-border)", color: "var(--foreground)", background: "#fff" }}
        />
      </div>

      {/* メールアドレス */}
      <div>
        <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--foreground)" }}>
          メールアドレス
          <span className="ml-2 text-xs px-1.5 py-0.5 rounded" style={{ background: "var(--accent-dim)", color: "var(--accent)" }}>必須</span>
        </label>
        <input
          type="email"
          required
          placeholder="例：example@email.com"
          className="w-full px-4 py-2.5 rounded-lg text-sm border focus:outline-none focus:border-[var(--accent)]"
          style={{ borderColor: "var(--gray-border)", color: "var(--foreground)", background: "#fff" }}
        />
      </div>

      {/* お問い合わせの種類 */}
      <div>
        <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--foreground)" }}>
          お問い合わせの種類
        </label>
        <select
          className="w-full px-4 py-2.5 rounded-lg text-sm border focus:outline-none focus:border-[var(--accent)]"
          style={{ borderColor: "var(--gray-border)", color: "var(--foreground)", background: "#fff" }}
        >
          <option value="article">記事の内容について</option>
          <option value="site">サイトについて</option>
          <option value="other">その他</option>
        </select>
      </div>

      {/* お問い合わせ内容 */}
      <div>
        <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--foreground)" }}>
          お問い合わせ内容
          <span className="ml-2 text-xs px-1.5 py-0.5 rounded" style={{ background: "var(--accent-dim)", color: "var(--accent)" }}>必須</span>
        </label>
        <textarea
          required
          rows={6}
          placeholder="お問い合わせ内容をご記入ください。"
          className="w-full px-4 py-2.5 rounded-lg text-sm border focus:outline-none focus:border-[var(--accent)] resize-vertical"
          style={{ borderColor: "var(--gray-border)", color: "var(--foreground)", background: "#fff" }}
        />
      </div>

      {/* 送信ボタン */}
      <button
        type="submit"
        className="w-full py-3 rounded-lg text-sm font-medium text-white hover:opacity-90 transition-opacity cursor-pointer"
        style={{ background: "var(--accent)" }}
      >
        送信する
      </button>
    </form>
  );
}
