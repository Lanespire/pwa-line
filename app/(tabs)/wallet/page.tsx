const SAMPLE_BALANCES = [
  { id: 1, label: "LINE Pay", amount: "¥12,480" },
  { id: 2, label: "ポイント", amount: "2,150 pt" },
];

const SAMPLE_SHORTCUTS = [
  { id: 1, label: "送金" },
  { id: 2, label: "チャージ" },
  { id: 3, label: "支払い" },
  { id: 4, label: "クーポン" },
];

export default function WalletPage() {
  return (
    <section className="mx-auto flex max-w-xl flex-col gap-6 px-6 py-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold">ウォレット</h1>
        <p className="text-xs text-slate-500">残高やポイントをまとめて確認</p>
      </header>
      <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-4">
        <h2 className="text-sm font-semibold text-slate-900">残高</h2>
        <ul className="space-y-2">
          {SAMPLE_BALANCES.map((balance) => (
            <li key={balance.id} className="flex items-center justify-between text-sm">
              <span className="text-slate-600">{balance.label}</span>
              <span className="font-semibold text-slate-900">{balance.amount}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-4">
        <h2 className="text-sm font-semibold text-slate-900">よく使う機能</h2>
        <div className="mt-3 grid grid-cols-4 gap-3 text-center text-[11px] text-slate-600">
          {SAMPLE_SHORTCUTS.map((shortcut) => (
            <div key={shortcut.id} className="space-y-2">
              <div className="mx-auto h-12 w-12 rounded-full bg-emerald-100" aria-hidden />
              <span>{shortcut.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
