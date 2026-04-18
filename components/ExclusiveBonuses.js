import { copy } from "@/lib/copy";

export default function ExclusiveBonuses() {
  const { exclusiveBonuses } = copy;
  return (
    <section className="relative w-full overflow-hidden bg-[#2B1D12] py-16 text-white md:py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-25 [background:radial-gradient(circle_at_50%_0%,rgba(255,122,61,0.35),transparent_60%),radial-gradient(circle_at_80%_100%,rgba(255,179,63,0.25),transparent_50%)]" />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-[#FF7A3D]/40 bg-[#FF7A3D]/15 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-[#FFB88E]">
            {exclusiveBonuses.kicker}
          </span>
          <h2 className="font-display mt-4 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
            {exclusiveBonuses.headline}
          </h2>
          <p className="mt-3 text-base text-white/80 md:text-lg">
            {exclusiveBonuses.subheadline}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {exclusiveBonuses.items.map((it, i) => (
            <div
              key={i}
              className="lift relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm md:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#FFB23F] to-[#FF7A3D] px-3.5 py-1.5 text-xs font-black uppercase tracking-wider text-[#2B1D12] shadow-md">
                  ⭐ {exclusiveBonuses.badgeLabel}
                </span>
                <span className="text-right">
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-white/60">
                    {exclusiveBonuses.valueLabel}
                  </span>
                  <span className="font-display block text-lg font-black text-white line-through decoration-[#FF7A3D] decoration-2 md:text-xl">
                    {it.value}
                  </span>
                </span>
              </div>
              <h3 className="font-display mt-4 text-lg font-extrabold leading-snug md:text-xl">
                {it.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-white/75">
                {it.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-2xl rounded-3xl bg-gradient-to-r from-[#FF7A3D] via-[#FFB23F] to-[#FF7A3D] p-[2px] shadow-2xl">
          <div className="rounded-3xl bg-[#2B1D12] p-6 text-center md:p-8">
            <p className="font-display text-xl font-black text-white md:text-2xl">
              {exclusiveBonuses.totalLabel}
            </p>
            <p className="mt-2 text-lg font-extrabold text-[#FFB23F] md:text-xl">
              {exclusiveBonuses.totalCta}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
