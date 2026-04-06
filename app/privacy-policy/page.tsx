import type { Metadata } from "next";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";

export const metadata: Metadata = {
  title: "プライバシーポリシー | ウェブタク",
  description: "ウェブタク（web-taku.com）のプライバシーポリシーです。",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <h1 className="text-3xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
            プライバシーポリシー
          </h1>
          <p className="text-sm mb-12" style={{ color: "var(--gray-muted)" }}>
            最終更新日：2026年4月7日
          </p>

          <div className="space-y-12 text-sm leading-relaxed" style={{ color: "var(--foreground)" }}>

            <section>
              <h2 className="text-lg font-bold mb-4 pb-2 border-b" style={{ borderColor: "var(--gray-border)" }}>
                1. 基本方針
              </h2>
              <p>
                ウェブタク（以下「当サイト」）は、ユーザーの個人情報の取り扱いについて、以下のプライバシーポリシーに従い、適切な保護・管理に努めます。当サイトをご利用いただくことで、本ポリシーの内容に同意いただいたものとみなします。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-4 pb-2 border-b" style={{ borderColor: "var(--gray-border)" }}>
                2. 収集する情報
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">アクセス解析（Google Analytics）</h3>
                  <p>
                    当サイトでは、Googleが提供するアクセス解析ツール「Google Analytics」を利用しています。Google Analyticsは、トラフィックデータの収集のためにCookieを使用します。収集されるデータは匿名で、個人を特定するものではありません。データの収集・処理の詳細はGoogleのプライバシーポリシーをご確認ください。
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">お問い合わせフォームからの情報</h3>
                  <p>
                    お問い合わせフォームをご利用の際に、お名前・メールアドレス・メッセージ内容を収集します。これらの情報はお問い合わせへの返答にのみ使用し、第三者への提供は行いません。
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-4 pb-2 border-b" style={{ borderColor: "var(--gray-border)" }}>
                3. 情報の利用目的
              </h2>
              <p className="mb-3">収集した情報は、以下の目的に使用します。</p>
              <ul className="list-disc list-inside space-y-1 pl-2" style={{ color: "var(--gray-muted)" }}>
                <li>お問い合わせへの回答</li>
                <li>サイトのコンテンツ改善・利便性向上</li>
                <li>アクセス状況の分析</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-4 pb-2 border-b" style={{ borderColor: "var(--gray-border)" }}>
                4. Cookieについて
              </h2>
              <p>
                当サイトはCookieを使用することがあります。Cookieは、ユーザーのブラウザに保存される小さなテキストファイルで、サイトの利便性向上やアクセス解析のために利用されます。ブラウザの設定からCookieを無効にすることが可能ですが、一部のサービスが正常に動作しなくなる場合があります。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-4 pb-2 border-b" style={{ borderColor: "var(--gray-border)" }}>
                5. 第三者への提供
              </h2>
              <p>
                当サイトは、法令に基づく場合を除き、ユーザーの個人情報を事前の同意なく第三者に提供することはありません。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-4 pb-2 border-b" style={{ borderColor: "var(--gray-border)" }}>
                6. アフィリエイトについて
              </h2>
              <p>
                当サイトは、Amazon.co.jpほか各社のアフィリエイトプログラムに参加しています。紹介リンクを経由して商品・サービスをご購入いただいた場合、当サイトに報酬が発生することがあります。紹介する商品・サービスはあくまで独自の判断によるものであり、報酬の有無が評価内容に影響することはありません。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-4 pb-2 border-b" style={{ borderColor: "var(--gray-border)" }}>
                7. 免責事項
              </h2>
              <p>
                当サイトのコンテンツは正確な情報提供に努めていますが、内容の完全性・正確性・有用性等を保証するものではありません。当サイトの情報を参考にした結果生じたいかなる損害についても、運営者は一切の責任を負いかねます。また、当サイトから外部リンク先のコンテンツについては管理しておらず、リンク先での行為についても責任を負いません。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-4 pb-2 border-b" style={{ borderColor: "var(--gray-border)" }}>
                8. お問い合わせ
              </h2>
              <p>
                プライバシーポリシーに関するご質問・ご意見は、サイト内のお問い合わせフォームよりご連絡ください。
              </p>
              <p className="mt-3">
                運営者：ウェブタク<br />
                サイト：web-taku.com
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-4 pb-2 border-b" style={{ borderColor: "var(--gray-border)" }}>
                9. プライバシーポリシーの変更
              </h2>
              <p>
                当サイトは、必要に応じて本プライバシーポリシーを変更することがあります。変更後のポリシーは、本ページに掲載した時点で効力を生じるものとします。定期的にご確認いただくことをお勧めします。
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
