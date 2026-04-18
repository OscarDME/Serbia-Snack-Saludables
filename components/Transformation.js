import { copy } from "@/lib/copy";

export default function Transformation() {
  const { transformation } = copy;
  return (
    <section className="relative w-full bg-[#2B1D12] py-16 text-white md:py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-20 [background:radial-gradient(circle_at_20%_20%,rgba(63,165,108,0.4),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(255,122,61,0.4),transparent_50%)]" />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-[#FFD3A8]">
            {transformation.kicker}
          </span>
          <h2 className="font-display mt-4 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
            {transformation.headline}
          </h2>
        </div>

        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2">
          {/* Before */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#3a1e1e] to-[#2B1D12] p-7 md:p-9">
            <div className="absolute -top-8 -right-8 text-[160px] opacity-10">🍩</div>
            <span className="inline-block rounded-full bg-[#E85C20]/20 px-3 py-1 text-xs font-extrabold tracking-widest text-[#FF9977]">
              {transformation.before.tag}
            </span>
            <h3 className="font-display mt-4 text-2xl font-black leading-tight md:text-3xl">
              {transformation.before.title}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-white/80">
              {transformation.before.desc}
            </p>
          </div>

          {/* After */}
          <div className="relative overflow-hidden rounded-3xl border border-[#3FA56C]/30 bg-gradient-to-br from-[#1f5535] to-[#184227] p-7 shadow-[0_20px_60px_-20px_rgba(63,165,108,0.6)] md:p-9">
            <div className="absolute -top-8 -right-8 text-[160px] opacity-10">🥦</div>
            <span className="inline-block rounded-full bg-[#3FA56C]/30 px-3 py-1 text-xs font-extrabold tracking-widest text-[#B9F0CE]">
              {transformation.after.tag}
            </span>
            <h3 className="font-display mt-4 text-2xl font-black leading-tight md:text-3xl">
              {transformation.after.title}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-white/85">
              {transformation.after.desc}
            </p>
          </div>
        </div>

        {/* Visual image */}
        <div className="mt-10 overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
          <img
            src={transformation.image.src}
            alt={transformation.image.alt}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
