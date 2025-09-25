import Link from "next/link";

export function CtaFooter() {
  return (
    <section className="px-6 pb-20 sm:px-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 rounded-[3rem] bg-gradient-to-br from-[color:var(--ryokufuu-900)] via-[color:var(--ryokufuu-700)] to-[color:var(--ryokufuu-500)] px-10 py-12 text-white shadow-2xl">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            LPから申し込んで、安全な仮想チャット空間へ
          </h2>
          <p className="text-base leading-relaxed text-white/85">
            実LINEの見た目・操作感を忠実に再現したPWA環境で、研修やデモをもっとスムーズに。LP限定の特典で今日から使い始めましょう。
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="https://example.com/signup"
            className="rounded-full bg-white px-10 py-3 text-base font-semibold text-[color:var(--ryokufuu-700)] shadow-lg shadow-[rgba(8,23,17,0.25)] transition hover:bg-[color:var(--ryokufuu-50)]"
          >
            無料トライアルを申し込む
          </Link>
          <Link
            href="mailto:support@example.com"
            className="text-base font-semibold text-white underline-offset-4 hover:underline"
          >
            導入の相談をする
          </Link>
        </div>
      </div>
    </section>
  );
}
