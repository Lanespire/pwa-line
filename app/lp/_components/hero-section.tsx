import Link from "next/link";

export function HeroSection() {
  return (
    <header className="relative isolate overflow-hidden bg-gradient-to-br from-[color:var(--ryokufuu-900)] via-[color:var(--ryokufuu-700)] to-[color:var(--ryokufuu-500)] px-6 pb-20 pt-24 text-white sm:px-10 sm:pb-28 sm:pt-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-14 text-center">
        <div className="space-y-6">
          <span className="inline-flex items-center justify-center gap-2 self-center rounded-full bg-white/15 px-5 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-white/80 backdrop-blur">
            LP限定プラン
          </span>
          <h1 className="text-4xl font-semibold leading-tight text-balance sm:text-6xl">
            スマホにもPCにも馴染むLINE風PWA。\n研修・検証をまるごとLPから申し込み。
          </h1>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg">
            実LINEそっくりのUIと操作感を備えたダミー環境をPWAで提供。スマートフォンではホーム画面のアプリアイコンから、デスクトップではブラウザで。通信を伴わない安全なチャット検証を実現します。
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-5">
          <Link
            href="#trial"
            className="rounded-full bg-white px-9 py-3 text-base font-semibold text-[color:var(--ryokufuu-800)] shadow-lg shadow-[rgba(15,47,31,0.2)] transition hover:bg-[color:var(--ryokufuu-50)]"
          >
            7日間無料トライアルを申し込む
          </Link>
          <Link
            href="#features"
            className="rounded-full border border-white/40 px-9 py-3 text-base font-semibold text-white transition hover:border-white hover:bg-white/10"
          >
            機能を詳しく見る
          </Link>
        </div>
        <div className="grid gap-6 rounded-3xl bg-white/10 p-8 text-left shadow-lg shadow-[rgba(8,23,17,0.3)] backdrop-blur sm:grid-cols-3">
          {[
            {
              title: "オフライン完結",
              description:
                "通信は将来的な手動バックアップ時のみ。契約停止時はローカルデータもロックして、情報の持ち出しを防ぎます。",
            },
            {
              title: "TXTアップロードで自動生成",
              description:
                "実LINEから書き出したTXTを読み込むだけでトーク・友だち・VOOMを復元。研修シナリオ作成を数分で完了。",
            },
            {
              title: "PWAとして配布",
              description:
                "ホーム画面に追加してURLバーのないアプリ表示に。スマホ・タブレット・デスクトップに同一UIを展開できます。",
            },
          ].map((item) => (
            <div key={item.title} className="space-y-3">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-sm leading-relaxed text-white/80">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute -top-24 right-10 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.35),transparent)]" />
      <div className="pointer-events-none absolute bottom-[-6rem] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2),transparent)]" />
    </header>
  );
}
