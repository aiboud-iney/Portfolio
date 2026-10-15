import type { Metadata } from 'next';
import Link from 'next/link';
import SprayHaze from '@/components/SprayHaze';

export const metadata: Metadata = { title: 'Opaline - Values-based investing app' };

export default function OpalinePage() {
  return (
    <div className="overflow-x-hidden">

      {/* ── Poster header ── */}
      <section className="relative pt-[72px] pb-0 overflow-hidden">
        <SprayHaze color="magenta" size={500} className="-left-[120px] -top-[100px]" />
        <SprayHaze color="violet"  size={400} className="-right-[100px] top-[160px]" />
        <div className="max-w-[1320px] mx-auto px-6 md:px-12 relative pb-12">
          <p className="font-mono text-[11px] tracking-label uppercase m-0 mb-3 text-magenta">
            UI/UX design · fintech · investing
          </p>
          <h1 className="font-display text-[clamp(54px,10.5vw,160px)] uppercase leading-[0.82] m-0">
            OPA<span className="text-magenta">LINE</span>
          </h1>
          <div className="h-[10px] bg-magenta w-[48%] mt-[18px]" />
          <p className="mt-[28px] text-[clamp(17px,1.6vw,21px)] leading-relaxed text-copy max-w-[54ch]">
            A values-based investing app that asks what matters to you before it asks for your
            money - intentions first, portfolio second, with a weekly digest instead of a live ticker.
          </p>
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-[38px]">
            {[
              { label: 'My role',    value: 'UI/UX designer'               },
              { label: 'Output',     value: 'Figma · flows · prototype'    },
              { label: 'Domain',     value: 'Fintech · investing'          },
              { label: 'Status',     value: 'Design complete', color: 'text-lime' },
            ].map(({ label, value, color }) => (
              <div key={label}>
                <dt className="font-mono text-[10px] uppercase tracking-label text-steel">{label}</dt>
                <dd className={`font-mono text-[13px] mt-[6px] m-0 ${color ?? ''}`}>{value}</dd>
              </div>
            ))}
          </dl>
          <div className="flex gap-3 flex-wrap mt-[30px]">
            <a
              href="https://www.figma.com/design/LAKBKi7pNyObMaccuVg8kH/OPALINE?node-id=1-2&t=xaPpLo9GAy3avqDZ-1"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] tracking-tag uppercase font-semibold bg-lime text-wall px-[18px] py-[14px] no-underline hover:bg-magenta transition-colors"
            >
              View in Figma ↗
            </a>
            <Link href="/uiux" className="font-mono text-[11px] tracking-tag uppercase border-2 border-mid text-steel px-[16px] py-[12px] no-underline hover:border-bone hover:text-bone transition-colors">
              ← All UI/UX projects
            </Link>
          </div>
        </div>
      </section>

      {/* ── Reading body ── */}
      <div className="bg-bone text-wall py-[72px] pb-[90px]">
        <div className="max-w-[900px] mx-auto px-6 md:px-12 flex flex-col gap-[44px]">

          <section>
            <span className="font-mono text-[11px] uppercase tracking-label text-violet-dk block mb-2">01 - The brief</span>
            <h2 className="font-display text-[clamp(28px,3.2vw,42px)] uppercase leading-tight m-0 mb-[14px]">Values before returns</h2>
            <p className="text-[18px] leading-[1.7] max-w-[64ch] m-0 mb-4">
              Most investing apps open on a number - portfolio value, daily change, a percentage
              up or down. Opaline opens on a question: what do you want your money to support?
              The portfolio is built from the answer, not the other way around.
            </p>
            <p className="text-[18px] leading-[1.7] max-w-[64ch] m-0">
              The core design problem is making that feel real and not performative - a set of
              choices that actually constrain the portfolio, not a greenwashing checkbox that
              disappears after onboarding.
            </p>
          </section>

          <section>
            <span className="font-mono text-[11px] uppercase tracking-label text-violet-dk block mb-2">02 - The digest</span>
            <h2 className="font-display text-[clamp(28px,3.2vw,42px)] uppercase leading-tight m-0 mb-[14px]">Weekly, not live</h2>
            <p className="text-[18px] leading-[1.7] max-w-[64ch] m-0 mb-4">
              A live ticker is an anxiety machine. Opaline sends one digest per week: what moved,
              why, and whether it changed anything about the portfolio&rsquo;s alignment to
              the user&rsquo;s stated values. The rest of the time, there is nothing to check.
            </p>
            <p className="text-[18px] leading-[1.7] max-w-[64ch] m-0">
              That choice shapes the information architecture. There is no price chart that
              refreshes every second, no red/green flash, no nudge to open the app more often.
              The app&rsquo;s job is to be useful once a week and then stay out of the way.
            </p>
          </section>

          <section>
            <span className="font-mono text-[11px] uppercase tracking-label text-violet-dk block mb-2">03 - Visual system</span>
            <h2 className="font-display text-[clamp(28px,3.2vw,42px)] uppercase leading-tight m-0 mb-[14px]">Warm, deliberate, unhurried</h2>
            <p className="text-[18px] leading-[1.7] max-w-[64ch] m-0 mb-4">
              The palette is terracotta, warm stone and off-white - a deliberate contrast to the
              cold blues and greens of most financial apps. The typography uses a serif for
              editorial moments and a plain monospace for numbers, to separate the human from
              the transactional.
            </p>
            <p className="text-[18px] leading-[1.7] max-w-[64ch] m-0">
              Every screen is designed to work at a reading pace, not a scanning pace. Dense
              tables of figures belong somewhere else; Opaline&rsquo;s screens are sparse enough
              that you can understand them without stopping to parse.
            </p>
          </section>

          <section>
            <span className="font-mono text-[11px] uppercase tracking-label text-violet-dk block mb-2">04 - Output</span>
            <h2 className="font-display text-[clamp(28px,3.2vw,42px)] uppercase leading-tight m-0 mb-[14px]">What was made</h2>
            <div className="flex gap-[10px] flex-wrap mb-6">
              {['Full Figma file', 'Onboarding flow', 'Home & digest screens', 'Portfolio view', 'Clickable prototype'].map((t) => (
                <span key={t} className="font-mono text-[11px] uppercase tracking-[0.1em] border-2 border-wall px-[13px] py-[9px]">{t}</span>
              ))}
            </div>
            <div className="flex gap-3 flex-wrap">
              <Link href="/uiux" className="font-mono text-[11px] tracking-tag uppercase border-2 border-wall text-wall px-[16px] py-[12px] no-underline hover:bg-wall hover:text-bone transition-colors">
                ← All UI/UX projects
              </Link>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
