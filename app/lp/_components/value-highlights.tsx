interface ValueHighlight {
  title: string;
  description: string;
  caption: string;
}

interface ValueHighlightsProps {
  values: ValueHighlight[];
}

export function ValueHighlights({ values }: ValueHighlightsProps) {
  return (
    <section
      id="features"
      className="px-6 py-16 sm:px-10 sm:py-20"
      aria-labelledby="lp-value-heading"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row">
        <div className="lg:max-w-sm">
          <h2
            id="lp-value-heading"
            className="text-3xl font-semibold text-[color:var(--ryokufuu-800)] sm:text-4xl"
          >
            タブも体験導線も、LINEさながらの操作感
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[color:var(--ryokufuu-700)]">
            友だち・トーク・VOOM・ニュース・ウォレットを搭載し、LP経由で申し込み後すぐに本番さながらの操作を再現。端末に合わせて最適化されたレイアウトで、スマホ・PCどちらの検証もスムーズです。
          </p>
        </div>
        <div className="grid flex-1 gap-6 sm:grid-cols-2">
          {values.map((value) => (
            <article
              key={value.title}
              className="group relative overflow-hidden rounded-3xl bg-white/80 p-6 shadow-lg shadow-[rgba(23,53,40,0.08)] ring-1 ring-[color:var(--surface-soft)] transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[rgba(47,143,116,0.1)] opacity-0 transition group-hover:opacity-100" />
              <div className="relative space-y-3">
                <span className="inline-flex rounded-full bg-[color:var(--surface-soft)] px-3 py-1 text-xs font-semibold text-[color:var(--ryokufuu-600)]">
                  {value.caption}
                </span>
                <h3 className="text-xl font-semibold text-[color:var(--ryokufuu-800)]">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-[color:var(--ryokufuu-700)]">
                  {value.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
