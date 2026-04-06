import type { Metadata } from "next";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "お問い合わせ | ウェブタク",
  description: "ウェブタクへのお問い合わせはこちらからどうぞ。",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        <div className="max-w-2xl mx-auto px-6 py-16">
          <h1 className="text-3xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
            お問い合わせ
          </h1>
          <p className="text-sm mb-10" style={{ color: "var(--gray-muted)" }}>
            記事の内容やサイトに関するご質問・ご意見はこちらからお気軽にどうぞ。
          </p>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
