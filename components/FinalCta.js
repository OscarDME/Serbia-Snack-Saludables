"use client";

import { useEffect, useState } from "react";
import { copy } from "@/lib/copy";
import { BASE_CHECKOUT_URL, buildCheckoutUrl, fireBeginCheckout } from "@/lib/checkout";

export default function FinalCta() {
  const { finalCta } = copy;
  const [checkoutUrl, setCheckoutUrl] = useState(BASE_CHECKOUT_URL);

  useEffect(() => {
    setCheckoutUrl(buildCheckoutUrl());
  }, []);

  const handleClick = () => {
    fireBeginCheckout(finalCta.offerPrice);
  };

  return (
    <section
      id="final-cta-section"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFF8EF] via-[#EAF7EF] to-[#FFF8EF] py-16 md:py-24"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(circle_at_20%_20%,rgba(63,165,108,0.18),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(255,122,61,0.16),transparent_50%)]" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="overflow-hidden rounded-[2.5rem] border border-[#E6D7C2] bg-white shadow-[0_40px_80px_-30px_rgba(43,29,18,0.25)]">
          <div className="grid md:grid-cols-[1.1fr_1fr]">
            {/* Left: Image */}
            <div className="relative flex items-center justify-center bg-gradient-to-br from-[#FFEFD9] to-[#FFE1B8] p-8 md:p-12">
              <img
                src={finalCta.image}
                alt={finalCta.imageAlt}
                className="relative z-10 h-auto w-full max-w-[460px] object-contain anim-float-slow drop-shadow-2xl"
              />
              <span className="absolute left-6 top-6 rounded-full bg-[#3FA56C] px-3 py-1 text-xs font-black uppercase tracking-widest text-white shadow-lg">
                {finalCta.bonusesBadge}
              </span>
              <span className="absolute bottom-6 right-6 rotate-[-6deg] rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-[#E6D7C2]">
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#6B4A35]">{finalCta.discountStickerLabel}</span>
                <span className="font-display block text-xl font-black text-[#FF7A3D]">{finalCta.discountStickerValue}</span>
              </span>
            </div>

            {/* Right: Offer */}
            <div className="flex flex-col justify-center p-8 md:p-12">
              <span className="inline-block self-start rounded-full bg-[#FF7A3D]/15 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-[#E85C20]">
                {finalCta.flagline}
              </span>
              <h2 className="font-display mt-4 text-3xl font-black leading-tight text-[#2B1D12] md:text-4xl">
                {finalCta.headline}
              </h2>
              <p className="mt-2 text-base font-semibold text-[#6B4A35] md:text-lg">
                {finalCta.subheadline}
              </p>

              <div className="mt-6 rounded-2xl bg-[#FFF8EF] p-5">
                <div className="flex items-baseline gap-3">
                  <span className="text-sm font-medium text-[#6B4A35]">
                    {finalCta.regularPriceLabel}
                  </span>
                  <span className="text-lg font-bold text-[#6B4A35] line-through decoration-[#FF7A3D] decoration-2">
                    {finalCta.regularPrice}
                  </span>
                </div>
                <div className="font-display mt-1 text-6xl font-black leading-none text-[#3FA56C] drop-shadow-sm md:text-7xl">
                  {finalCta.offerPrice}
                </div>
              </div>

              <ul className="mt-6 space-y-2.5">
                {finalCta.bundleList.map((item, i) => (
                  <li
                    key={i}
                    className="text-[15px] font-medium leading-relaxed text-[#2B1D12] md:text-base"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={checkoutUrl}
                onClick={handleClick}
                className="cta-shimmer anim-pulse-ring mt-7 inline-flex w-full items-center justify-center rounded-2xl border-b-4 border-[#1f6d43] bg-[#3FA56C] px-6 py-6 text-lg font-black uppercase tracking-wide text-white shadow-2xl transition hover:translate-y-[-1px] hover:bg-[#2E8A58]"
              >
                {finalCta.button}
                <span className="ml-2 text-2xl">→</span>
              </a>

              <p className="mt-4 text-center text-[13px] font-semibold text-[#6B4A35]">
                {finalCta.trustRow}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
