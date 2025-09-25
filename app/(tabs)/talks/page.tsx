const SAMPLE_CONVERSATIONS = [
  {
    id: 1,
    title: "家族グループ",
    preview: "今日の夕飯どうする？",
    timestamp: "19:24",
  },
  {
    id: 2,
    title: "プロジェクトA",
    preview: "最新のデザイン案を確認してください。",
    timestamp: "18:05",
  },
  {
    id: 3,
    title: "友だち",
    preview: "週末に映画いかない？",
    timestamp: "17:40",
  },
];

export default function TalksPage() {
  return (
    <section className="mx-auto flex max-w-xl flex-col gap-4 px-6 py-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold">トーク</h1>
        <p className="text-xs text-slate-500">最近のメッセージ</p>
      </header>
      <ul className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
        {SAMPLE_CONVERSATIONS.map((conversation) => (
          <li key={conversation.id} className="flex items-center gap-4 px-4 py-3">
            <div className="h-12 w-12 rounded-full bg-emerald-100" aria-hidden />
            <div className="flex-1">
              <p className="text-sm font-medium text-slate-900">{conversation.title}</p>
              <p className="text-xs text-slate-500">{conversation.preview}</p>
            </div>
            <span className="text-[11px] text-slate-400">{conversation.timestamp}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
