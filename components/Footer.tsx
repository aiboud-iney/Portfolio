import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t-2 border-near">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 py-[26px] flex justify-between items-center gap-5 flex-wrap">
        <span className="font-mono text-[11px] tracking-tag uppercase text-steel">
          © 2026 Ichrak Aiboud
        </span>
        <span className="font-mono text-[11px] tracking-tag uppercase text-steel">
          Designed and built by me
        </span>
        <Link
          href="#top"
          className="font-mono text-[11px] tracking-tag uppercase text-lime no-underline hover:text-magenta transition-colors"
        >
          Back to top ↑
        </Link>
      </div>
    </footer>
  );
}
