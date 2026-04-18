import { copy } from "@/lib/copy";

function BonusCard({ item, badgeLabel, valueLabel }) {
  return (
    <div className="lift group relative overflow-hidden rounded-3xl border border-[#E6D7C2] bg-white p-6 shadow-sm md:p-7">
      <div aria-hidden className="absolute -top-16 -right-10 h-40 w-40 rounded-full bg-[#FF7A3D]/10 blur-2xl transition group-hover:scale-125" />
      <div className="relative flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#3FA56C] to-[#2E8A58] px-3.5 py-1.5 text-xs font-black uppercase tracking-wider text-white shadow-md">
          🎁 {badgeLabel}
        </span>
        <span className="text-right">
          <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#6B4A35]">
            {valueLabel}
          </span>
          <span className="font-display block text-lg font-black text-[#2B1D12] line-through decoration-[#FF7A3D] decoration-2 md:text-xl">
            {item.value}
          </span>
        </span>
      </div>
      <h3 className="font-display relative mt-4 text-lg font-extrabold leading-snug text-[#2B1D12] md:text-xl">
        {item.title}
      </h3>
      <p className="relative mt-2 text-[14px] leading-relaxed text-[#4B3A2E]">
        {item.desc}
      </p>
    </div>
  );
}

export default function Bonuses() {
  const { bonuses } = copy;
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFF8EF] via-[#FFEAD0] to-[#FFF8EF] py-16 md:py-24">
      <div aria-hidden className="pointer-events-none absolute -top-20 left-1/2 h-60 w-[120%] -translate-x-1/2 rounded-full bg-[#FF7A3D]/10 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-gradient-to-r from-[#FF7A3D] to-[#E85C20] px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-white shadow-md">
            {bonuses.flagline}
          </span>
          <h2 className="font-display mt-4 text-3xl font-black leading-tight text-[#2B1D12] sm:text-4xl md:text-5xl">
            {bonuses.headline}
          </h2>
          <p className="mt-3 text-base font-semibold text-[#6B4A35] md:text-lg">
            {bonuses.subheadline}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bonuses.items.map((it, i) => (
            <BonusCard
              key={i}
              item={it}
              badgeLabel={bonuses.badgeLabel}
              valueLabel={bonuses.valueLabel}
            />
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-2xl rounded-3xl border-2 border-dashed border-[#FF7A3D] bg-white p-6 text-center md:p-8">
          <p className="font-display text-xl font-black text-[#2B1D12] md:text-2xl">
            {bonuses.totalLabel}
          </p>
          <p className="mt-2 text-lg font-extrabold text-[#3FA56C] md:text-xl">
            {bonuses.totalCta}
          </p>
        </div>
      </div>
    </section>
  );
}
