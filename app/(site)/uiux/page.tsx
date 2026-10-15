import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SprayHaze from '@/components/SprayHaze';
import Sparkle from '@/components/Sparkle';

export const metadata: Metadata = { title: 'UI/UX - Design projects' };

const projects = [
  {
    href:      '/work/opaline',
    num:       '03',
    title:     'Opaline',
    category:  'Values-based investing app',
    desc:      'Intentions first, portfolio second. A weekly digest instead of a live ticker.',
    tools:     ['Figma', 'User flows', 'Prototype'],
    accent:    'border-t-magenta',
    accentText:'text-magenta',
    image:     '/images/opaline-splash.png',
  },
  {
    href:      '/work/lune',
    num:       '01',
    title:     'LUNE',
    category:  'Sleep & meditation app',
    desc:      'Designed for low light: deep forest-green, low contrast, guided audio with sleep timer.',
    tools:     ['Figma', 'Interaction design'],
    accent:    'border-t-violet',
    accentText:'text-violet',
    image:     '/images/lune-preview.png',
  },
  {
    href:      '/work/cadence',
    num:       '02',
    title:     'Cadence',
    category:  'Booking & reservations',
    desc:      'A scheduling platform built around a shared team calendar, not a personal one.',
    tools:     ['Figma', 'User flows', 'Prototype'],
    accent:    'border-t-lime',
    accentText:'text-lime',
    image:     '/images/cadence-overview.png',
  },
];

export default function UIUXPage() {
  return (
    <div className="overflow-x-hidden" id="uiux">

      {/* ── Header ── */}
      <section className="relative pt-[76px] pb-[80px] border-b-2 border-near overflow-hidden">
        <SprayHaze color="magenta" size={500} className="-top-[100px] -left-[100px]" />
        <SprayHaze color="violet"  size={400} className="-bottom-[80px] -right-[80px]" />
        <Sparkle size={52} color="#C6FF3D" className="top-[52px] right-[12%]" />
        <div className="max-w-[1320px] mx-auto px-6 md:px-12 relative">
          <p className="font-mono text-[11px] tracking-label uppercase text-magenta m-0 mb-3">
            Interface & interaction
          </p>
          <h1 className="font-display text-[clamp(64px,11vw,168px)] uppercase leading-[0.82] m-0">
            UI/<span className="text-magenta">UX</span>
          </h1>
          <div className="h-[10px] bg-magenta mt-[18px] w-[32%]" />
          <p className="mt-[26px] text-[clamp(16px,1.5vw,20px)] leading-relaxed text-copy max-w-[48ch]">
            Three design projects - flows, screens, prototypes.
            Figma files for everything.
          </p>
        </div>
      </section>

      {/* ── Projects ── */}
      <section className="py-[80px]">
        <div className="max-w-[1320px] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-6">
            {[...projects].sort((a, b) => a.num.localeCompare(b.num)).map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group bg-near flex flex-col no-underline border-t-[6px] hover:-translate-y-1 transition-transform duration-200 ease-out overflow-hidden"
                style={{ borderTopColor: p.accentText.replace('text-', '').includes('magenta') ? '#FF2E88' : p.accentText.includes('violet') ? '#7B2FF7' : '#C6FF3D' }}
              >
                {/* Image placeholder */}
                <div className="relative aspect-[4/3] bg-wall flex items-center justify-center">
                  {'image' in p && p.image ? (
                    <Image
                      src={p.image}
                      alt={`${p.title} app preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  ) : (
                    <p className="font-mono text-[10px] tracking-label uppercase text-lime text-center leading-relaxed p-6">
                      {p.title} preview<br />
                      <span className="text-steel normal-case tracking-normal">/public/images/{p.title.toLowerCase()}-preview.jpg</span>
                    </p>
                  )}
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="font-mono text-[10px] tracking-tag uppercase m-0 mb-2 text-steel">{p.num} · {p.category}</p>
                  <h3 className="font-display text-[32px] uppercase leading-[0.82] m-0 mb-3 text-bone group-hover:text-lime transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-copy mb-4 flex-1">{p.desc}</p>
                  <div className="flex gap-2 flex-wrap mt-auto pt-4 border-t border-rim">
                    {p.tools.map((t) => (
                      <span key={t} className="font-mono text-[10px] uppercase tracking-[0.1em] px-[8px] py-[5px] border border-mid text-steel">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA to Work ── */}
      <section className="py-[60px] border-t-2 border-near">
        <div className="max-w-[1320px] mx-auto px-6 md:px-12 flex items-center justify-between gap-6 flex-wrap">
          <div>
            <p className="font-mono text-[11px] tracking-label uppercase text-steel m-0 mb-2">Also</p>
            <h2 className="font-display text-[clamp(28px,4vw,52px)] uppercase leading-[0.82] m-0">
              See the <span className="text-lime">build work</span>
            </h2>
          </div>
          <Link
            href="/work"
            className="font-mono text-[12px] tracking-label uppercase border-2 border-bone text-bone px-5 py-[15px] no-underline hover:border-lime hover:text-lime transition-colors"
          >
            View all projects →
          </Link>
        </div>
      </section>

    </div>
  );
}
