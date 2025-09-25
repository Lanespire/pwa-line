import Link from "next/link";

export function PricingSection() {
  return (
    <section id="trial" className="px-6 py-20 sm:px-10">
      <div className="mx-auto max-w-5xl space-y-10 text-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-[color:var(--ryokufuu-800)] sm:text-4xl">
            シンプルな定額プラン
          </h2>
          <p className="text-base text-[color:var(--ryokufuu-700)]">
            月額480円でLINE風PWAダミー環境を無制限に利用可能。LP限定で7日間の無料トライアルをご用意しました。
          </p>
        </div>
        <div className="grid gap-6 rounded-[3rem] bg-white/90 p-10 shadow-2xl shadow-[rgba(23,53,40,0.12)] ring-1 ring-[color:var(--surface-strong)] md:grid-cols-2">
          <div className="flex flex-col items-center gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[color:var(--ryokufuu-500)]">
              LP Exclusive
            </p>
            <p className="text-5xl font-semibold text-[color:var(--ryokufuu-800)]">
              480<span className="text-2xl font-medium">円/月</span>
            </p>
            <p className="text-sm text-[color:var(--ryokufuu-700)]">
              端末台数無制限 / 契約期間中のデータ暗号化
            </p>
          </div>
          <ul className="space-y-3 text-left text-sm text-[color:var(--ryokufuu-700)]">
            {[
              "PWAとしてスマホ・タブレット・PCに配布",
              "TXTアップロードによる自動データ生成",
              "友だち・トーク・VOOM・ニュース・ウォレットのフルタブ構成",
              "将来的な手動バックアップ機能 (通信時のみ接続)",
              "契約停止時のローカルデータロック",
            ].map((benefit) => (
              <li key={benefit} className="flex items-start gap-2">
                <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-[color:var(--ryokufuu-500)]" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center gap-3">
          <Link
            href="https://example.com/signup"
            className="inline-flex items-center justify-center rounded-full bg-[color:var(--ryokufuu-600)] px-10 py-3 text-base font-semibold text-white shadow-lg shadow-[rgba(47,143,116,0.35)] transition hover:bg-[color:var(--ryokufuu-700)]"
          >
            今すぐ申し込む
          </Link>
          <p className="text-xs text-[color:var(--ryokufuu-700)]">
            7日以内のキャンセルで料金は発生しません。
          </p>
        </div>
      </div>
    </section>
  );
}
