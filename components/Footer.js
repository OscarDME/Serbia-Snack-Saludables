import { copy } from "@/lib/copy";

export default function Footer() {
  const { footer } = copy;

  return (
    <footer className="bg-[#1d120a] px-5 py-10 text-sm text-white/70 md:px-8 md:py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <div className="flex items-center gap-2 font-display text-base font-semibold text-white/90">
          <span>{footer.madeWith}</span>
          <span className="text-lg text-[#FF7A3D]">❤</span>
          <span>{footer.forWho}</span>
        </div>
        <p className="text-xs text-white/60 md:text-sm">{footer.copyright}</p>
      </div>
    </footer>
  );
}
