"use client";

import { useState } from "react";
import { copy } from "@/lib/copy";

export default function FAQ() {
  const { faq } = copy;
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className="w-full bg-[#FFF8EF] py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <div className="text-center">
          <span className="inline-block rounded-full bg-[#3FA56C]/15 px-4 py-1.5 text-xs font-black uppercase tracking-[0.25em] text-[#2E8A58]">
            {faq.kicker}
          </span>
          <h2 className="font-display mt-4 text-3xl font-black leading-tight text-[#2B1D12] sm:text-4xl md:text-5xl">
            {faq.headline}
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {faq.items.map((it, i) => {
            const open = openIdx === i;
            return (
              <div
                key={i}
                className={`overflow-hidden rounded-2xl border transition ${
                  open
                    ? "border-[#3FA56C] bg-white shadow-lg"
                    : "border-[#E6D7C2] bg-white shadow-sm"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpenIdx(open ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-7 md:py-6"
                >
                  <span className="font-display text-base font-extrabold text-[#2B1D12] md:text-lg">
                    {it.q}
                  </span>
                  <span
                    aria-hidden
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-lg font-black transition ${
                      open ? "rotate-45 bg-[#3FA56C] text-white" : "bg-[#FFEFD9] text-[#2E8A58]"
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-[#F2E4CE] px-5 py-5 text-[15px] leading-relaxed text-[#4B3A2E] md:px-7">
                      {it.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
