import Link from "next/link";

const features = [
  {
    title: "完全オフラインの検証環境",
    description:
      "実LINEと見た目・操作感がそっくりなPWAをスマホにインストール。通信を遮断してもダミーの友だち管理やトークの閲覧・編集が行えます。",
  },
  {
    title: "TXTから自動生成",
    description:
      "実LINEからエクスポートした会話履歴 (TXT) を読み込むだけで、トーク・友だち・VOOMを再現。研修用シナリオを素早く準備できます。",
  },
  {
    title: "安全なバックアップ運用",
    description:
      "送受信は行わず、将来的な手動バックアップ処理時のみ通信が発生。契約停止時にはローカルデータも閲覧不可になります。",
  },
];

const scenarios = [
  {
    name: "研修・ロールプレイ",
    detail:
      "新人研修やカスタマーサポートのロールプレイで、現場同様のUIを活用しながら指導ができます。",
  },
  {
    name: "情報共有のシミュレーション",
    detail: "通知やニュースタブを使った配信計画をオフラインで検証。誤配信リスクを抑えられます。",
  },
  {
    name: "デモンストレーション",
    detail:
      "顧客向け提案資料として、インストール済みのPWAを提示。アプリ風の表示でUXをそのまま伝えられます。",
  },
];

const steps = [
  {
    step: "Step 1",
    title: "TXTをアップロード",
    description:
      "実LINEから出力したトーク履歴 (TXT) をアップロードするとダミーデータが生成されます。",
  },
  {
    step: "Step 2",
    title: "PWAを端末に追加",
    description:
      "PWAとしてホーム画面に追加することで、URLバーのないアプリライクな画面で利用できます。",
  },
  {
    step: "Step 3",
    title: "シナリオを編集・共有",
    description:
      "友だちやトークを自由に編集し、研修シナリオを保存。必要に応じてバックアップを取得します。",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col gap-24 pb-24">
      <header className="relative isolate overflow-hidden bg-gradient-to-br from-[color:var(--ryokufuu-100)] via-white to-[color:var(--ryokufuu-200)] px-6 pb-24 pt-20 sm:rounded-b-[4rem] sm:px-10 sm:pt-28">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 text-center sm:gap-16">
          <p className="rounded-full bg-[color:var(--surface-soft)] px-4 py-1 text-sm font-semibold text-[color:var(--ryokufuu-700)]">
            PWA LINE Studio
          </p>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
              見た目も操作感もLINEそっくり。\n完全オフラインで使える研修用PWA。
            </h1>
            <p className="text-base leading-relaxed text-[color:var(--ryokufuu-800)] sm:text-lg">
              スマホにインストールできる仮想チャット環境で、友だち追加やトーク編集を安全に実演。\nVOOM・ニュース・ウォレットタブも搭載し、現場さながらのシミュレーションが可能です。
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <Link
              href="https://example.com/signup"
              className="rounded-full bg-[color:var(--ryokufuu-600)] px-8 py-3 text-base font-semibold text-white shadow-lg shadow-[rgba(47,143,116,0.35)] transition hover:bg-[color:var(--ryokufuu-700)]"
            >
              7日間無料トライアルを開始
            </Link>
            <Link
              href="#features"
              className="text-base font-semibold text-[color:var(--ryokufuu-700)] underline-offset-4 transition hover:text-[color:var(--ryokufuu-900)] hover:underline"
            >
              機能を見る
            </Link>
          </div>
          <div className="grid w-full gap-4 rounded-3xl bg-white/70 p-6 shadow-xl shadow-[rgba(23,53,40,0.08)] ring-1 ring-[color:var(--surface-strong)] backdrop-blur md:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="space-y-2 text-left">
                <h3 className="text-lg font-semibold text-[color:var(--ryokufuu-700)]">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-[color:var(--ryokufuu-800)]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </header>

      <section id="features" className="px-6 sm:px-10">
        <div className="mx-auto grid max-w-5xl gap-16 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-[color:var(--ryokufuu-800)] sm:text-4xl">
              LINE風タブをまるごと再現
            </h2>
            <p className="text-base leading-relaxed text-[color:var(--ryokufuu-800)]">
              トーク、友だち、VOOM、ニュース、ウォレットの各タブを搭載。スライド式のタブバーやトークルームの演出も再現し、学習者は実アプリの操作感で研修に臨めます。
            </p>
            <div className="grid gap-4 rounded-2xl bg-white/70 p-6 shadow-lg shadow-[rgba(23,53,40,0.06)] ring-1 ring-[color:var(--surface-soft)]">
              {scenarios.map((scenario) => (
                <div key={scenario.name} className="rounded-xl bg-[color:var(--surface-soft)] p-5">
                  <h3 className="text-lg font-semibold text-[color:var(--ryokufuu-700)]">
                    {scenario.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--ryokufuu-800)]">
                    {scenario.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative isolate w-full max-w-sm rounded-[2.5rem] bg-gradient-to-b from-white via-[color:var(--ryokufuu-100)] to-[color:var(--ryokufuu-200)] p-6 shadow-2xl">
              <div className="absolute inset-x-10 top-4 h-1 rounded-full bg-[color:var(--ryokufuu-300)]" />
              <div className="mt-8 space-y-4 rounded-2xl bg-white/80 p-5 text-left shadow-lg">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--ryokufuu-500)]">
                    トーク
                  </p>
                  <p className="mt-2 text-sm text-[color:var(--ryokufuu-800)]">
                    会話をオフラインで管理。吹き出しをタップするとテキスト編集や削除が可能です。
                  </p>
                </div>
                <div className="rounded-xl bg-[color:var(--ryokufuu-100)] p-4">
                  <p className="text-xs font-semibold text-[color:var(--ryokufuu-700)]">
                    友だち一覧
                  </p>
                  <p className="mt-1 text-xs text-[color:var(--ryokufuu-800)]">
                    タグ分け・ノートの追加で研修シナリオを整理できます。
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--ryokufuu-500)]">
                    ニュース / VOOM
                  </p>
                  <p className="mt-2 text-sm text-[color:var(--ryokufuu-800)]">
                    配信イメージを事前にチェック。テンプレートの差し替えで複数の案を比較できます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-10">
        <div className="mx-auto flex max-w-5xl flex-col gap-12 rounded-3xl bg-gradient-to-r from-[color:var(--ryokufuu-900)] via-[color:var(--ryokufuu-700)] to-[color:var(--ryokufuu-500)] px-8 py-12 text-white shadow-2xl sm:px-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-balance sm:text-4xl">
              セキュリティと運用に配慮した仕組み
            </h2>
            <p className="text-base leading-relaxed text-white/90">
              アプリ内での送受信は行わず、将来的な手動バックアップのみ通信を許可。契約停止時にはローカルデータも閲覧不可になる仕組みで、機密情報の持ち出しリスクを抑えます。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.title} className="rounded-2xl bg-white/15 p-6 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
                  {step.step}
                </p>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="px-6 sm:px-10">
        <div className="mx-auto max-w-5xl space-y-10 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-[color:var(--ryokufuu-800)] sm:text-4xl">
              シンプルな料金プラン
            </h2>
            <p className="text-base text-[color:var(--ryokufuu-700)]">
              月額480円で全機能を利用可能。7日間の無料トライアル期間中に操作感をお試しいただけます。
            </p>
          </div>
          <div className="mx-auto grid max-w-4xl gap-6 rounded-3xl bg-white/80 p-10 shadow-xl shadow-[rgba(23,53,40,0.08)] ring-1 ring-[color:var(--surface-strong)] md:grid-cols-2">
            <div className="flex flex-col items-center gap-3">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--ryokufuu-500)]">
                Standard
              </p>
              <p className="text-5xl font-semibold text-[color:var(--ryokufuu-800)]">
                480<span className="text-2xl font-medium">円/月</span>
              </p>
              <p className="text-sm text-[color:var(--ryokufuu-700)]">
                端末台数無制限 / 契約中データ保護
              </p>
            </div>
            <ul className="space-y-3 text-left text-sm text-[color:var(--ryokufuu-800)]">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--ryokufuu-500)]" />
                完全オフラインで友だち・トーク・VOOMデータを編集
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--ryokufuu-500)]" />
                TXTアップロードでの自動シナリオ生成
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--ryokufuu-500)]" />
                将来的な手動バックアップAPI (通信時のみ接続)
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--ryokufuu-500)]" />
                契約停止時の自動ロックで情報漏えいリスクを抑制
              </li>
            </ul>
          </div>
          <Link
            href="https://example.com/signup"
            className="inline-flex items-center justify-center rounded-full bg-[color:var(--ryokufuu-600)] px-10 py-3 text-base font-semibold text-white shadow-lg shadow-[rgba(47,143,116,0.35)] transition hover:bg-[color:var(--ryokufuu-700)]"
          >
            申し込みページへ進む
          </Link>
        </div>
      </section>

      <section className="px-6 sm:px-10">
        <div className="mx-auto max-w-5xl space-y-8 rounded-3xl bg-white/80 p-10 shadow-xl shadow-[rgba(23,53,40,0.08)] ring-1 ring-[color:var(--surface-soft)]">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-[color:var(--ryokufuu-800)]">
              よくある質問
            </h2>
            <p className="mt-2 text-sm text-[color:var(--ryokufuu-700)]">
              導入に関するご不明点はサポートチームまでお気軽にお問い合わせください。
            </p>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-[color:var(--ryokufuu-700)]">
                Q. 実際のLINEアカウントと連携しますか？
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--ryokufuu-800)]">
                いいえ。アプリ内での送受信は行わず、すべてダミーデータで構成されます。端末ローカルで完結するため、情報漏えいの心配がありません。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[color:var(--ryokufuu-700)]">
                Q. どの端末で利用できますか？
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--ryokufuu-800)]">
                最新のモバイルブラウザ (Safari / Chrome)
                とデスクトップブラウザに対応。PWAとしてインストールすればURLバーのないアプリ風UIになります。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[color:var(--ryokufuu-700)]">
                Q. バックアップはどのように取得しますか？
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--ryokufuu-800)]">
                管理者が実行する手動バックアップ処理時のみ通信を有効化します。オフライン状態では端末内で安全にデータが保持されます。
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
