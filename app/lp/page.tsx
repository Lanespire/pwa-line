import type { Metadata } from "next";
import { AutomationFlow } from "./_components/automation-flow";
import { CtaFooter } from "./_components/cta-footer";
import { ExperiencePreview } from "./_components/experience-preview";
import { FaqSection } from "./_components/faq-section";
import { HeroSection } from "./_components/hero-section";
import { PricingSection } from "./_components/pricing-section";
import { ValueHighlights } from "./_components/value-highlights";

const highlights = [
  {
    caption: "Smartphone",
    title: "ホーム画面追加でフルスクリーン体験",
    description:
      "PWAとしてホーム画面に追加するだけで、URLバーのないアプリ表示に。タブのスワイプやスクロール挙動も再現しています。",
  },
  {
    caption: "Desktop",
    title: "2ペイン構成で操作と表示を同時確認",
    description:
      "PCでは会話リストとトーク画面の2ペインレイアウトに自動調整。オンライン研修や画面共有でも使いやすい設計です。",
  },
  {
    caption: "Security",
    title: "契約停止時はローカルデータをロック",
    description:
      "契約期間中のみダミーデータにアクセス可能。将来的な手動バックアップ処理時以外は通信を行わず安全性を確保します。",
  },
  {
    caption: "TXT Import",
    title: "会話履歴のTXTを取り込んで自動生成",
    description:
      "実LINEからエクスポートしたTXTをアップロードすると、友だち・トーク・VOOM・ニュースを自動生成。編集も自由自在です。",
  },
];

export const metadata: Metadata = {
  title: "LINE風PWAダミー環境 LP | PWA LINE Studio",
  description:
    "LINEそっくりのPWAダミー環境をLP限定で提供。スマホ・PCに対応し、TXTアップロードでトークを自動生成。7日間無料トライアルあり。",
  alternates: {
    canonical: "/lp",
  },
  openGraph: {
    title: "LP限定のLINE風PWAダミー環境",
    description:
      "友だち・トーク・VOOM・ニュース・ウォレットを再現したPWAを完全オフラインで利用。研修や検証を安全に行えます。",
    url: "https://lp.example.com",
  },
};

export default function LandingPage() {
  return (
    <main className="flex flex-col gap-0 bg-[color:var(--background)]">
      <HeroSection />
      <ValueHighlights values={highlights} />
      <ExperiencePreview />
      <AutomationFlow />
      <PricingSection />
      <FaqSection />
      <CtaFooter />
    </main>
  );
}
