'use client';

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="font-mono text-[11px] tracking-label uppercase font-semibold bg-lime text-wall px-5 py-3 hover:bg-magenta transition-colors cursor-pointer"
    >
      Print / Save as PDF ↓
    </button>
  );
}
