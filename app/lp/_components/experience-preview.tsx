export function ExperiencePreview() {
  return (
    <section className="px-6 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 rounded-[3rem] bg-white/80 p-10 shadow-2xl shadow-[rgba(23,53,40,0.12)] ring-1 ring-[color:var(--surface-strong)] lg:flex-row">
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-semibold text-[color:var(--ryokufuu-800)] sm:text-4xl">
            スマホとデスクトップの両方で直感的
          </h2>
          <p className="text-base leading-relaxed text-[color:var(--ryokufuu-700)]">
            LPから申し込み後、端末に合わせた最適UIを即時提供。スマホではタブバーのスワイプやフッターナビゲーションを再現。デスクトップでは横幅を活かした会話リスト＋トークビューの2ペイン表示に対応しています。
          </p>
          <ul className="space-y-4 text-sm text-[color:var(--ryokufuu-700)]">
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[color:var(--ryokufuu-500)]" />
              スマホではフルスクリーンのPWA体験。ホーム画面アイコンから起動してアプリと同等の操作性。
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[color:var(--ryokufuu-500)]" />
              デスクトップではリサイズに応じたレスポンシブ。チームでの画面共有やオンライン研修にも最適。
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[color:var(--ryokufuu-500)]" />
              完全オフラインのため、機密情報を扱うトレーニングやデモも安全に実施できます。
            </li>
          </ul>
        </div>
        <div className="flex flex-1 flex-col gap-6 lg:flex-row lg:items-center lg:justify-end">
          <div className="relative mx-auto w-full max-w-[16rem] rounded-[2.5rem] bg-gradient-to-b from-[color:var(--ryokufuu-100)] to-[color:var(--ryokufuu-200)] p-5 shadow-xl">
            <div className="absolute inset-x-10 top-3 h-1 rounded-full bg-[color:var(--ryokufuu-300)]" />
            <div className="mt-10 space-y-4 rounded-2xl bg-white/90 p-4 text-xs text-[color:var(--ryokufuu-800)] shadow-lg">
              <div className="space-y-1">
                <p className="font-semibold text-[color:var(--ryokufuu-600)]">トークルーム</p>
                <p>ダミーの会話をタップで編集・削除。オフラインで履歴管理。</p>
              </div>
              <div className="rounded-xl bg-[color:var(--surface-soft)] p-3">
                <p className="font-semibold text-[color:var(--ryokufuu-600)]">友だち</p>
                <p className="mt-1 text-[color:var(--ryokufuu-800)]">
                  タグを付与して研修シナリオを整理。
                </p>
              </div>
              <div className="space-y-1">
                <p className="font-semibold text-[color:var(--ryokufuu-600)]">VOOM・ニュース</p>
                <p>配信イメージを切り替えながら確認できます。</p>
              </div>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[22rem] rounded-3xl border border-[color:var(--surface-strong)] bg-white/90 p-6 shadow-xl">
            <div className="space-y-4 text-sm text-[color:var(--ryokufuu-800)]">
              <div className="flex items-center justify-between border-b border-[color:var(--surface-soft)] pb-3">
                <p className="font-semibold text-[color:var(--ryokufuu-700)]">デスクトップビュー</p>
                <span className="rounded-full bg-[color:var(--surface-soft)] px-3 py-1 text-xs text-[color:var(--ryokufuu-600)]">
                  Web
                </span>
              </div>
              <p>
                会話リストとチャット画面を左右に並べた2ペイン。URLバーの表示を最小化し、アプリライクなモードで研修できます。
              </p>
              <div className="rounded-2xl bg-[color:var(--surface-soft)] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--ryokufuu-600)]">
                  LP SPECIAL
                </p>
                <p className="mt-2 text-sm">
                  LP申込者限定でテンプレートセットと研修シナリオガイドを無償提供。すぐに使い始められます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
