import { copy } from "@/lib/copy";

export default function Benefits() {
  const { benefits } = copy;
  return (
    <section className="relative w-full bg-gradient-to-b from-[#FFF8EF] to-[#FFEFD9] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-[#FF7A3D]/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-[#E85C20]">
            {benefits.kicker}
          </span>
          <h2 className="font-display mt-4 text-3xl font-black leading-tight text-[#2B1D12] sm:text-4xl md:text-5xl">
            {benefits.headline}
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {benefits.items.map((it, i) => (
            <div
              key={i}
              className="lift group relative overflow-hidden rounded-3xl border border-[#E6D7C2] bg-white p-7 shadow-sm md:p-8"
            >
              <div aria-hidden className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-[#3FA56C]/10 transition group-hover:scale-125" />
              <div className="relative flex items-start gap-5">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#3FA56C]/20 to-[#FF7A3D]/20 text-3xl shadow-inner">
                  {it.icon}
                </span>
                <div>
                  <h3 className="font-display text-xl font-extrabold text-[#2B1D12] md:text-2xl">
                    <span className="mr-2 text-[#FF7A3D]">✕</span>
                    {it.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#4B3A2E]">
                    {it.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
