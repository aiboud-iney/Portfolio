import type { Metadata } from 'next';
import WorkWall from '@/components/WorkWall';
import SprayHaze from '@/components/SprayHaze';
import Sparkle from '@/components/Sparkle';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Work' };

// Projects not in the main wall (design-only, listed here)
const extraProjects = [
  {
    href:     '/work/lune',
    title:    'LUNE',
    category: 'Sleep & meditation app',
    type:     'Design',
    tags:     ['Figma', 'Interaction design'],
    num:      '04',
  },
  {
    href:     '/work/cadence',
    title:    'CADENCE',
    category: 'Booking & reservations',
    type:     'Design',
    tags:     ['Figma', 'User flows'],
    num:      '05',
  },
  {
    href:     '/work/pulse-api',
    title:    'PULSE API',
    category: 'REST API · notification service',
    type:     'Build',
    tags:     ['Node.js', 'Express 5', 'PostgreSQL'],
    num:      '06',
  },
];

export default function WorkPage() {
  return (
    <div className="overflow-x-hidden">

      {/* ── Header ── */}
      <section className="relative pt-[76px] pb-[80px] border-b-2 border-near overflow-hidden">
        <SprayHaze color="violet" size={540} className="-top-[120px] -right-[100px]" />
        <Sparkle size={60} color="#C6FF3D" className="top-[40px] left-[8%]" />
        <div className="max-w-[1320px] mx-auto px-6 md:px-12 relative">
          <p className="font-mono text-[11px] tracking-label uppercase text-lime m-0 mb-3">
            All projects
          </p>
          <h1 className="font-display text-[clamp(64px,11vw,168px)] uppercase leading-[0.82] m-0">
            THE<br />
            <span className="text-violet">WALL</span>
          </h1>
          <div className="h-[10px] bg-magenta mt-[18px] w-[36%]" />
          <p className="mt-[26px] text-[clamp(16px,1.5vw,20px)] leading-relaxed text-copy max-w-[48ch]">
            Six projects across full-stack engineering and UI/UX design.
            Filter by type or flatten the wall into a list.
          </p>
        </div>
      </section>

      {/* ── Main three (wall) ── */}
      <section className="py-[104px]">
        <div className="max-w-[1320px] mx-auto px-6 md:px-12">
          <WorkWall showAll />
        </div>
      </section>

      {/* ── More projects (list) ── */}
      <section className="py-[80px] border-t-2 border-near">
        <div className="max-w-[1320px] mx-auto px-6 md:px-12">
          <p className="font-mono text-[11px] tracking-label uppercase text-lime m-0 mb-3">
            More work
          </p>
          <h2 className="font-display text-[clamp(36px,5vw,72px)] uppercase leading-[0.82] m-0 mb-10">
            Also built &amp; designed
          </h2>
          <div className="border-t-2 border-rim">
            {extraProjects.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group grid items-center px-3 py-5 border-b-2 border-rim hover:bg-near transition-colors no-underline [grid-template-columns:52px_1fr_auto_110px] max-sm:[grid-template-columns:40px_1fr_100px]"
              >
                <span className="font-mono text-[11px] text-steel">{p.num}</span>
                <div>
                  <h3 className="font-display text-[clamp(20px,2.8vw,36px)] uppercase leading-[0.82] text-bone m-0 group-hover:text-lime transition-colors">
                    {p.title}
                  </h3>
                  <p className="font-mono text-[10px] text-steel mt-1 mb-0 uppercase tracking-[0.1em]">
                    {p.category}
                  </p>
                </div>
                <div className="flex gap-2 flex-wrap max-sm:hidden">
                  {p.tags.map((t) => (
                    <span key={t} className="font-mono text-[10px] uppercase px-2 py-1 border border-mid text-steel">
                      {t}
                    </span>
                  ))}
                </div>
                <span
                  className={`font-mono text-[11px] uppercase tracking-tag text-right ${
                    p.type === 'Build' ? 'text-lime' : 'text-magenta'
                  }`}
                >
                  {p.type} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
