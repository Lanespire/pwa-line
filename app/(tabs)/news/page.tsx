const SAMPLE_NEWS = [
  {
    id: 1,
    title: "最新のテクノロジートレンドまとめ",
    category: "TECH",
  },
  {
    id: 2,
    title: "週末のイベント情報ピックアップ",
    category: "EVENT",
  },
  {
    id: 3,
    title: "お得なクーポンが届きました",
    category: "COUPON",
  },
];

export default function NewsPage() {
  return (
    <section className="mx-auto flex max-w-xl flex-col gap-5 px-6 py-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold">ニュース</h1>
        <p className="text-xs text-slate-500">LINE内のトピックをチェックしましょう</p>
      </header>
      <ul className="space-y-3">
        {SAMPLE_NEWS.map((news) => (
          <li key={news.id} className="space-y-2 rounded-2xl border border-slate-200 bg-white p-4">
            <span className="text-[11px] font-semibold tracking-[0.2em] text-emerald-600">
              {news.category}
            </span>
            <p className="text-sm font-medium text-slate-900">{news.title}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
