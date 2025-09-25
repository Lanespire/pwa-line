const SAMPLE_POSTS = [
  {
    id: 1,
    user: "Saki",
    message: "新しいカフェを見つけたよ。抹茶ラテが最高！",
    imageAlt: "カフェラテ",
  },
  {
    id: 2,
    user: "Ken",
    message: "今夜のライブ配信は21:00から。ぜひ遊びに来てね！",
    imageAlt: "ライブ配信の準備",
  },
];

export default function VoomPage() {
  return (
    <section className="mx-auto flex max-w-xl flex-col gap-5 px-6 py-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold">VOOM</h1>
        <p className="text-xs text-slate-500">フォローしているユーザーの最新投稿</p>
      </header>
      <div className="space-y-4">
        {SAMPLE_POSTS.map((post) => (
          <article
            key={post.id}
            className="space-y-3 rounded-2xl border border-slate-200 bg-white p-4"
          >
            <header className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-emerald-100" aria-hidden />
              <p className="text-sm font-semibold text-slate-900">{post.user}</p>
            </header>
            <p className="text-sm leading-relaxed text-slate-700">{post.message}</p>
            <div className="h-40 w-full rounded-xl bg-slate-100" aria-label={post.imageAlt} />
          </article>
        ))}
      </div>
    </section>
  );
}
