"use client";

import { useEffect, useState } from "react";
import { copy } from "@/lib/copy";
import { BASE_CHECKOUT_URL, buildCheckoutUrl, fireBeginCheckout } from "@/lib/checkout";

export default function StickyCta() {
  const { stickyCta, finalCta } = copy;
  const [checkoutUrl, setCheckoutUrl] = useState(BASE_CHECKOUT_URL);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setCheckoutUrl(buildCheckoutUrl());
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => fireBeginCheckout(finalCta.offerPrice);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/20 bg-[#2B1D12]/95 px-3 py-3 backdrop-blur-md transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href={checkoutUrl}
        onClick={handleClick}
        className="cta-shimmer flex items-center justify-between gap-3 rounded-xl bg-gradient-to-r from-[#3FA56C] to-[#2E8A58] px-4 py-3 text-white shadow-lg"
      >
        <div className="flex flex-col text-left leading-tight">
          <span className="text-[11px] font-semibold uppercase tracking-wide text-white/80">
            {stickyCta.urgency}
          </span>
          <span className="text-sm font-black">
            <span className="text-[#FFD89A]">{stickyCta.label}</span> · {stickyCta.ctaLabel}
          </span>
        </div>
        <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white text-[#2E8A58]">
          →
        </span>
      </a>
    </div>
  );
}
