import type { Metadata } from 'next';
import Link from 'next/link';
import SprayHaze from '@/components/SprayHaze';

export const metadata: Metadata = { title: 'LUNE - Sleep & meditation app' };

export default function LunePage() {
  return (
    <div className="overflow-x-hidden">

      {/* ── Poster header ── */}
      <section className="relative pt-[72px] pb-0 overflow-hidden" style={{ background: 'linear-gradient(160deg, #0D1C12 0%, #0B0B0C 60%)' }}>
        <SprayHaze color="violet" size={460} className="-right-[120px] -top-[100px]" />
        <div className="max-w-[1320px] mx-auto px-6 md:px-12 relative pb-12">
          <p className="font-mono text-[11px] tracking-label uppercase m-0 mb-3 text-lime">
            UI/UX design · sleep & meditation
          </p>
          <h1 className="font-display text-[clamp(54px,10.5vw,160px)] uppercase leading-[0.82] m-0">
            L<span className="text-violet">UNE</span>
          </h1>
          <div className="h-[10px] bg-violet w-[34%] mt-[18px]" />
          <p className="mt-[28px] text-[clamp(17px,1.6vw,21px)] leading-relaxed text-copy max-w-[54ch]">
            A sleep-tracking and meditation app designed for use in the dark - deep forest-green
            ground, low-contrast type, guided audio with a sleep timer built in.
          </p>
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-[38px]">
            {[
              { label: 'My role',  value: 'UI/UX designer'            },
              { label: 'Output',   value: 'Figma · full prototype'    },
              { label: 'Domain',   value: 'Wellness · audio'          },
              { label: 'Status',   value: 'Design complete', color: 'text-lime' },
            ].map(({ label, value, color }) => (
              <div key={label}>
                <dt className="font-mono text-[10px] uppercase tracking-label text-steel">{label}</dt>
                <dd className={`font-mono text-[13px] mt-[6px] m-0 ${color ?? ''}`}>{value}</dd>
              </div>
            ))}
          </dl>
          <div className="flex gap-3 flex-wrap mt-[30px]">
            <a href="https://www.figma.com/design/oH6toV4RvnIXC0kREnUtnw/LUNE?node-id=0-1&t=ujqDIMgmCaTVqbtc-1"
               target="_blank" rel="noopener noreferrer"
               className="font-mono text-[11px] tracking-tag uppercase font-semibold bg-lime text-wall px-[18px] py-[14px] no-underline hover:bg-magenta transition-colors">
              Open the Figma file ↗
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
            <span className="font-mono text-[11px] uppercase tracking-label text-violet-dk block mb-2">01 - The constraint</span>
            <h2 className="font-display text-[clamp(28px,3.2vw,42px)] uppercase leading-tight m-0 mb-[14px]">Designed for low light</h2>
            <p className="text-[18px] leading-[1.7] max-w-[64ch] m-0 mb-4">
              People open a meditation app at night, in bed, often tired or unsettled. That single
              fact drives the whole interface: a deep forest-green ground, pale low-contrast type,
              no white surfaces anywhere, and no element bright enough to jolt someone who has
              already dimmed their screen.
            </p>
            <p className="text-[18px] leading-[1.7] max-w-[64ch] m-0">
              It is a deliberate trade. The palette sits lower in contrast than a general-purpose
              app should, and that is the right call for the context - but it is a decision to
              make on purpose, not by accident.
            </p>
          </section>

          <section>
            <span className="font-mono text-[11px] uppercase tracking-label text-violet-dk block mb-2">02 - The player</span>
            <h2 className="font-display text-[clamp(28px,3.2vw,42px)] uppercase leading-tight m-0 mb-[14px]">One thing at a time</h2>
            <p className="text-[18px] leading-[1.7] max-w-[64ch] m-0 mb-4">
              The player holds a single session and nothing else. Title and duration in the serif,
              category beneath in small caps, a waveform standing in for a progress bar, and
              transport controls sized for a thumb in the dark - play at the centre, ten-second
              skips either side, elapsed and remaining at the edges.
            </p>
            <p className="text-[18px] leading-[1.7] max-w-[64ch] m-0">
              Three actions sit below: save the session, set a sleep timer, mix ambient sound
              underneath. The sleep timer is the tell - this is audio you are expected to fall
              asleep inside, which is why the tracking and the listening are one product rather
              than two.
            </p>
          </section>

          <section>
            <span className="font-mono text-[11px] uppercase tracking-label text-violet-dk block mb-2">03 - The night, end to end</span>
            <h2 className="font-display text-[clamp(28px,3.2vw,42px)] uppercase leading-tight m-0 mb-[14px]">Set it, sleep, read it back</h2>
            <p className="text-[18px] leading-[1.7] max-w-[64ch] m-0 mb-4">
              Onboarding is three steps and no account up front: a welcome that states the
              promise in four words, one question about why you are here - fall asleep faster,
              wake up groggy, reduce anxiety, build a routine - and two dials for bedtime and
              wake time.
            </p>
            <p className="text-[18px] leading-[1.7] max-w-[64ch] m-0">
              Then the night itself. The active session screen is almost empty on purpose: the
              time, one line of status, a large End Sleep Session target and a screen lock,
              because anything more at 2am is a mistake. Morning opens with a greeting and the
              duration, Last Night breaks it into stages, and This Week gives totals, average and
              streak with a line of encouragement rather than a score.
            </p>
          </section>

          <section>
            <span className="font-mono text-[11px] uppercase tracking-label text-violet-dk block mb-2">04 - Links</span>
            <h2 className="font-display text-[clamp(28px,3.2vw,42px)] uppercase leading-tight m-0 mb-[14px]">See the file</h2>
            <div className="flex gap-3 flex-wrap mt-5">
              <a href="https://www.figma.com/design/oH6toV4RvnIXC0kREnUtnw/LUNE?node-id=0-1&t=ujqDIMgmCaTVqbtc-1"
                 target="_blank" rel="noopener noreferrer"
                 className="font-mono text-[11px] tracking-tag uppercase font-semibold bg-wall text-lime px-[18px] py-[14px] no-underline hover:bg-violet hover:text-white transition-colors">
                Open the Figma file ↗
              </a>
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
