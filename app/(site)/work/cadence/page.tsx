import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SprayHaze from '@/components/SprayHaze';

export const metadata: Metadata = { title: 'Cadence - Booking & reservations platform' };

export default function CadencePage() {
  return (
    <div className="overflow-x-hidden">

      {/* ── Poster header ── */}
      <section className="relative pt-[72px] pb-0 overflow-hidden">
        <SprayHaze color="violet" size={540} className="-right-[160px] -top-[140px]" />
        <div className="max-w-[1320px] mx-auto px-6 md:px-12 relative pb-12">
          <p className="font-mono text-[11px] tracking-label uppercase m-0 mb-3 text-magenta">
            UI/UX design · booking & reservations
          </p>
          <h1 className="font-display text-[clamp(54px,10.5vw,160px)] uppercase leading-[0.82] m-0">
            CAD<span className="text-violet">ENCE</span>
          </h1>
          <div className="h-[10px] bg-lime w-[50%] mt-[18px]" />
          <p className="mt-[28px] text-[clamp(17px,1.6vw,21px)] leading-relaxed text-copy max-w-[54ch]">
            A booking and reservation platform. The scheduling suite is built around a shared
            team calendar rather than a personal one.
          </p>
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-[38px]">
            {[
              { label: 'My role',  value: 'UI/UX designer'            },
              { label: 'Output',   value: 'Figma · full prototype'    },
              { label: 'Domain',   value: 'Scheduling · SaaS'         },
              { label: 'Status',   value: 'Design complete', color: 'text-lime' },
            ].map(({ label, value, color }) => (
              <div key={label}>
                <dt className="font-mono text-[10px] uppercase tracking-label text-steel">{label}</dt>
                <dd className={`font-mono text-[13px] mt-[6px] m-0 ${color ?? ''}`}>{value}</dd>
              </div>
            ))}
          </dl>
          <div className="flex gap-3 flex-wrap mt-[30px]">
            <a
              href="https://www.figma.com/design/1QSn5i7ozMaNypDbwYMwcs/Cadence?node-id=0-1&t=hnNaUgeQUBkUDPPJ-1"
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

        {/* Screenshot strip */}
        <div className="bg-near mt-8">
          <div className="max-w-[1320px] mx-auto px-6 md:px-12 py-10">
            <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { label: 'Calendar view', src: '/images/cadence-calendar-view.png' },
                { label: 'Booking flow' , src: '/images/cadence-booking-flow.png' },
                { label: 'Team dashboard' , src: '/images/cadence-team-dashboard.png' },
              ].map(({ label, src }) => (
                <div key={label} className="relative aspect-[4/3] bg-wall flex items-center justify-center p-4">
                  {src ? (
                    <Image
                      src={src}
                      alt={`Cadence ${label.toLowerCase()}`}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-contain"
                    />
                  ) : (
                    <p className="font-mono text-[10px] tracking-label uppercase text-lime text-center leading-relaxed">
                      {label}<br />
                      <span className="text-steel normal-case tracking-normal">/public/images/cadence-{label.toLowerCase().replace(' ', '-')}.jpg</span>
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Reading body ── */}
      <div className="bg-bone text-wall py-[72px] pb-[90px]">
        <div className="max-w-[900px] mx-auto px-6 md:px-12 flex flex-col gap-[44px]">

          <section>
            <span className="font-mono text-[11px] uppercase tracking-label text-violet-dk block mb-2">01 - The idea</span>
            <h2 className="font-display text-[clamp(28px,3.2vw,42px)] uppercase leading-tight m-0 mb-[14px]">Team calendar, not personal</h2>
            <p className="text-[18px] leading-[1.7] max-w-[64ch] m-0 mb-4">
              Most booking tools are built around a single person&rsquo;s availability. Cadence
              is built around a team&rsquo;s shared calendar - where the question isn&rsquo;t
              "when am I free?" but "when are we available as a team?", "who handles what?", and
              "how are we paced this week across all bookings?".
            </p>
            <p className="text-[18px] leading-[1.7] max-w-[64ch] m-0">
              The interface is designed for the person managing the schedule, not just the person
              filling a slot.
            </p>
          </section>

          <section>
            <span className="font-mono text-[11px] uppercase tracking-label text-violet-dk block mb-2">02 - Key screens</span>
            <h2 className="font-display text-[clamp(28px,3.2vw,42px)] uppercase leading-tight m-0 mb-[14px]">What was designed</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: 'Calendar view',      desc: 'Shared team view with per-person lanes, colour-coded booking types and a capacity indicator per day.' },
                { title: 'Booking flow',        desc: 'Customer-facing booking: date selection, service type, assigned team member and confirmation in four steps.' },
                { title: 'Team dashboard',     desc: 'Manager view: booking count, utilisation by team member, upcoming cancellations and rescheduling requests.' },
              ].map(({ title, desc }) => (
                <div key={title} className="bg-wall text-bone p-5 border-t-[4px] border-lime">
                  <h3 className="font-display text-[18px] uppercase leading-tight m-0 mb-2">{title}</h3>
                  <p className="m-0 text-[14px] leading-relaxed text-copy">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <span className="font-mono text-[11px] uppercase tracking-label text-violet-dk block mb-2">03 - Design decisions</span>
            <h2 className="font-display text-[clamp(28px,3.2vw,42px)] uppercase leading-tight m-0 mb-[14px]">Density without clutter</h2>
            <p className="text-[18px] leading-[1.7] max-w-[64ch] m-0 mb-4">
              A shared calendar for a busy team carries a lot of information. The design challenge
              is fitting everything the manager needs into a single view without making it feel
              like a spreadsheet. The solution is layered density: the calendar shows one thing
              per booking by default, with more detail on hover or focus.
            </p>
            <p className="text-[18px] leading-[1.7] max-w-[64ch] m-0">
              Colour is used structurally, not decoratively: booking type maps to colour, team
              member to a secondary indicator, status (confirmed / pending / cancelled) to
              opacity. Everything can be read at a glance by someone who knows the system, and
              decoded by someone who doesn&rsquo;t.
            </p>
          </section>

          <section>
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
