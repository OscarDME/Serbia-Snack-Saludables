"use client";

import { useEffect, useState } from "react";
import { copy } from "@/lib/copy";
import { BASE_CHECKOUT_URL, buildCheckoutUrl, fireBeginCheckout } from "@/lib/checkout";

export default function Closing() {
  const { closing } = copy;
  const [checkoutUrl, setCheckoutUrl] = useState(BASE_CHECKOUT_URL);

  useEffect(() => {
    setCheckoutUrl(buildCheckoutUrl());
  }, []);

  const handleClick = () => {
    fireBeginCheckout(closing.offerPrice);
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#2B1D12] via-[#3a2718] to-[#2B1D12] py-20 text-white md:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-25 [background:radial-gradient(circle_at_50%_0%,rgba(255,122,61,0.5),transparent_50%),radial-gradient(circle_at_50%_100%,rgba(63,165,108,0.3),transparent_50%)]" />
      <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
        <span className="inline-block rounded-full bg-gradient-to-r from-[#FF7A3D] to-[#E85C20] px-5 py-2 text-xs font-black uppercase tracking-[0.2em] text-white shadow-lg">
          {closing.kicker}
        </span>
        <h2 className="font-display mx-auto mt-6 max-w-3xl text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
          {closing.headline}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base text-white/80 md:text-lg">
          {closing.subheadline}
        </p>

        <div className="mx-auto mt-8 inline-flex items-baseline gap-4 rounded-2xl bg-white/5 px-6 py-3 ring-1 ring-white/10">
          <span className="text-lg font-bold text-white/60 line-through decoration-[#FF7A3D] decoration-2">
            {closing.regularPrice}
          </span>
          <span className="font-display text-4xl font-black text-[#8FE3B0] md:text-5xl">
            {closing.offerPrice}
          </span>
        </div>

        <div className="mx-auto mt-8 max-w-sm">
          <img
            src="/mockup-cta.webp"
            alt={closing.headline}
            className="w-full drop-shadow-2xl"
          />
        </div>

        <a
          href={checkoutUrl}
          onClick={handleClick}
          className="cta-shimmer anim-pulse-ring mt-8 inline-flex items-center justify-center rounded-2xl border-b-4 border-[#1f6d43] bg-[#3FA56C] px-8 py-5 text-lg font-black uppercase tracking-wide text-white shadow-2xl transition hover:translate-y-[-1px] hover:bg-[#2E8A58] md:text-xl"
        >
          {closing.ctaLabel}
          <span className="ml-2 text-2xl">→</span>
        </a>

        <p className="mt-6 text-[13px] font-semibold text-white/70 md:text-sm">
          {closing.trustRow}
        </p>
      </div>
    </section>
  );
}
