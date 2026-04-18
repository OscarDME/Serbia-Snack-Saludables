import { copy } from "@/lib/copy";

export default function WhatYouGet() {
  const { whatYouGet } = copy;
  return (
    <section className="w-full bg-[#FFF8EF] py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-[#FF7A3D]/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-[#E85C20]">
            {whatYouGet.kicker}
          </span>
          <h2 className="font-display mt-4 text-3xl font-black leading-tight text-[#2B1D12] sm:text-4xl md:text-5xl">
            {whatYouGet.headline}
          </h2>
          <p className="mt-3 text-base text-[#4B3A2E] md:text-lg">
            {whatYouGet.subheadline}
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {whatYouGet.items.map((it, i) => (
            <li
              key={i}
              className="flex items-start gap-4 rounded-2xl border border-[#E6D7C2] bg-white p-5 shadow-sm transition hover:border-[#3FA56C]/50 hover:shadow-md"
            >
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#3FA56C] text-base font-black text-white shadow">
                ✓
              </span>
              <span className="text-[15px] font-medium leading-relaxed text-[#2B1D12] md:text-base">
                {it}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <p className="font-display text-xl font-extrabold italic text-[#FF7A3D] md:text-2xl">
            {whatYouGet.footnote.line1}
          </p>
          <p className="font-display mt-1 text-3xl font-black text-[#2B1D12] md:text-4xl">
            {whatYouGet.footnote.line2}
          </p>
          <p className="mt-2 text-base font-semibold text-[#6B4A35]">
            {whatYouGet.footnote.line3}
          </p>
        </div>
      </div>
    </section>
  );
}
