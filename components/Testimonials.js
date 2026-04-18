import { copy } from "@/lib/copy";

const AVATAR_GRADIENTS = [
  "from-[#3FA56C] to-[#1f6d43]",
  "from-[#FF7A3D] to-[#E85C20]",
  "from-[#FFB23F] to-[#E8A020]",
  "from-[#5B8DEF] to-[#2F6BD8]",
];

export default function Testimonials() {
  const { testimonials } = copy;
  return (
    <section className="w-full bg-gradient-to-b from-[#FFEFD9] to-[#FFF8EF] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-[#2E8A58]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-[#2E8A58]">
            {testimonials.kicker}
          </span>
          <h2 className="font-display mt-4 text-3xl font-black leading-tight text-[#2B1D12] sm:text-4xl md:text-5xl">
            {testimonials.headline}
          </h2>
          <p className="mt-4 text-base text-[#4B3A2E] md:text-lg">
            {testimonials.subheadline}
          </p>

          <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-[#E6D7C2] bg-white px-5 py-2.5 shadow-sm">
            <span className="flex text-xl">
              {Array.from({ length: testimonials.rating }).map((_, i) => (
                <span key={i} className="text-[#FFB23F]">★</span>
              ))}
            </span>
            <span className="text-sm font-black text-[#2B1D12]">
              {testimonials.ratingLabel}
            </span>
            <span className="text-sm text-[#6B4A35]">· {testimonials.reviewCount}</span>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.items.map((t, i) => (
            <figure
              key={i}
              className="lift relative rounded-3xl border border-[#E6D7C2] bg-white p-7 shadow-sm md:p-8"
            >
              <span className="absolute -top-4 left-6 text-6xl font-black leading-none text-[#3FA56C]/20 select-none">
                “
              </span>
              <div className="flex text-lg">
                {Array.from({ length: 5 }).map((_, j) => (
                  <span key={j} className="text-[#FFB23F]">★</span>
                ))}
              </div>
              <blockquote className="mt-4 text-[15px] leading-relaxed text-[#2B1D12] md:text-[17px]">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4 border-t border-[#F2E4CE] pt-5">
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${AVATAR_GRADIENTS[i % AVATAR_GRADIENTS.length]} text-lg font-black text-white shadow-md`}
                  aria-hidden
                >
                  {t.initial}
                </span>
                <div>
                  <div className="font-display text-lg font-extrabold text-[#2B1D12]">
                    {t.name}
                  </div>
                  <div className="text-sm text-[#6B4A35]">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
