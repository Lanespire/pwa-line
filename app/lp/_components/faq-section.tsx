const faqs = [
  {
    question: "実際のLINEアカウントと同期されますか？",
    answer:
      "同期は行いません。ダミー環境内で完結し、送受信を伴う通信は将来的な手動バックアップ時のみ発生します。",
  },
  {
    question: "スマホとPCで機能差はありますか？",
    answer:
      "機能差はなく、レイアウトのみ最適化されます。スマホではPWAとしてインストールし、PCではブラウザ上で2ペイン表示が可能です。",
  },
  {
    question: "契約を終了するとデータはどうなりますか？",
    answer:
      "契約停止時にはローカルに保存されたデータも自動ロックされ、閲覧できなくなります。再契約時に復元も可能です。",
  },
];

export function FaqSection() {
  return (
    <section className="px-6 pb-20 sm:px-10">
      <div className="mx-auto max-w-4xl space-y-10 rounded-[3rem] bg-white/90 p-10 shadow-2xl shadow-[rgba(23,53,40,0.12)] ring-1 ring-[color:var(--surface-soft)]">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-[color:var(--ryokufuu-800)]">よくある質問</h2>
          <p className="mt-2 text-sm text-[color:var(--ryokufuu-700)]">
            不明点はサポートチームが24時間以内に回答いたします。LP経由のチャットサポートもご利用ください。
          </p>
        </div>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-2xl bg-[color:var(--surface-soft)] p-6">
              <p className="text-lg font-semibold text-[color:var(--ryokufuu-700)]">
                Q. {faq.question}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--ryokufuu-800)]">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
