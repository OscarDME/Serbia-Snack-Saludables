import { copy } from "@/lib/copy";

export default function Samples() {
  const { samples } = copy;
  return (
    <section className="w-full bg-[#FFF8EF] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-black leading-tight text-[#2B1D12] sm:text-4xl md:text-5xl">
            {samples.headline}
          </h2>
          <p className="mt-4 text-base text-[#4B3A2E] md:text-lg">
            {samples.subheadline}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {samples.items.map((it, i) => (
            <div
              key={i}
              className="lift group overflow-hidden rounded-3xl border border-[#E6D7C2] bg-white shadow-sm"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={it.image}
                  alt={it.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#2E8A58] shadow">
                  ⏱ 15 min
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-extrabold text-[#2B1D12]">
                  {it.title}
                </h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-[#4B3A2E]">
                  {it.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center font-display text-lg font-semibold italic text-[#6B4A35] md:text-xl">
          🍽 {samples.footnote}
        </p>
      </div>
    </section>
  );
}
