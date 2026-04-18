import { copy } from "@/lib/copy";

export default function Guarantee() {
  const { guarantee } = copy;
  return (
    <section className="w-full bg-[#FFF8EF] py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border-2 border-[#3FA56C]/40 bg-gradient-to-br from-white to-[#EAF7EF] p-8 text-center shadow-[0_30px_60px_-30px_rgba(63,165,108,0.4)] md:p-12">
          <div aria-hidden className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[#3FA56C]/15 blur-2xl" />
          <div className="relative mx-auto mb-5">
            <img
              src="/Logos-garantia-sin-fondo/Serbia-garantia.webp"
              alt={guarantee.alt}
              className="mx-auto h-32 w-auto"
            />
          </div>
          <span className="relative inline-block rounded-full bg-[#3FA56C]/15 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-[#2E8A58]">
            {guarantee.tag}
          </span>
          <h2 className="font-display relative mt-4 text-2xl font-black leading-tight text-[#2B1D12] md:text-4xl">
            {guarantee.headline}
          </h2>
          <p className="relative mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-[#4B3A2E] md:text-lg">
            {guarantee.body}
          </p>
          <p className="relative mt-6 text-sm font-bold text-[#2E8A58] md:text-base">
            {guarantee.footer}
          </p>
        </div>
      </div>
    </section>
  );
}
