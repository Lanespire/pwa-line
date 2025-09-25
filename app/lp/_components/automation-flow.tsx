const flows = [
  {
    title: "TXTインポートで即時生成",
    description:
      "LINEアプリから書き出したTXTをアップロードすると、友だち・トーク・VOOMを自動構築。研修の準備時間を大幅短縮します。",
  },
  {
    title: "ドラッグ&ドロップ編集",
    description:
      "トークの並び替えやメッセージの追加・削除を直感的に操作。オフラインでも即座に結果を反映できます。",
  },
  {
    title: "履歴ロールバック",
    description:
      "研修ごとにスナップショットを作成し、ワンクリックで状態を復元。誤操作があっても安心です。",
  },
];

export function AutomationFlow() {
  return (
    <section className="px-6 py-20 sm:px-10">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-[color:var(--ryokufuu-800)] sm:text-4xl">
            LP申込で手に入る自動化ワークフロー
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-[color:var(--ryokufuu-700)]">
            LPから申し込むことで、ダミー環境へのアクセスと同時に、シナリオ生成・編集・共有を効率化する専用ワークフローが利用可能になります。
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {flows.map((flow, index) => (
            <div
              key={flow.title}
              className="flex flex-col gap-4 rounded-3xl bg-gradient-to-br from-[color:var(--ryokufuu-50)] via-white to-[color:var(--ryokufuu-100)] p-8 shadow-lg shadow-[rgba(23,53,40,0.08)]"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--surface-soft)] text-[color:var(--ryokufuu-600)]">
                <span className="text-lg font-semibold">{index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold text-[color:var(--ryokufuu-800)]">
                {flow.title}
              </h3>
              <p className="text-sm leading-relaxed text-[color:var(--ryokufuu-700)]">
                {flow.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
