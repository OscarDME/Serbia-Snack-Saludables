import { copy } from "@/lib/copy";

export default function Story() {
  const { story } = copy;
  return (
    <section className="relative w-full bg-[#FFF8EF] py-16 md:py-24">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#FFF3E4] to-transparent" />
      <div className="relative mx-auto max-w-3xl px-5 md:px-8">
        <div className="rounded-[2rem] border border-[#E6D7C2] bg-white/80 p-8 shadow-[0_20px_60px_-30px_rgba(43,29,18,0.25)] md:p-12">
          <div className="mb-6 flex items-center gap-3">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#3FA56C]/10 text-2xl">💛</span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2E8A58]">{story.kicker}</span>
          </div>
          <div className="space-y-5 font-display text-lg leading-[1.65] text-[#2B1D12] md:text-[22px] md:leading-[1.55]">
            {story.paragraphs.map((p, i) => (
              <p
                key={i}
                className={
                  i === story.paragraphs.length - 1
                    ? "border-l-4 border-[#3FA56C] bg-[#3FA56C]/5 pl-5 text-[#1f4c30] rounded-r-lg py-3 font-semibold"
                    : ""
                }
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
