import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SprayHaze from '@/components/SprayHaze';

export const metadata: Metadata = { title: 'Livrili - Logistics marketplace' };

export default function LivriliPage() {
  return (
    <div className="overflow-x-hidden">

      {/* ── Poster header ── */}
      <section className="relative pt-[72px] pb-0 overflow-hidden">
        <SprayHaze color="violet" size={560} className="-right-[160px] -top-[140px]" />
        <div className="max-w-[1320px] mx-auto px-6 md:px-12 relative pb-12">
          <p className="font-mono text-[11px] tracking-label uppercase m-0 mb-3 text-lime">
            Design + Build · Logistics marketplace
          </p>
          <h1 className="font-display text-[clamp(54px,10.5vw,160px)] uppercase leading-[0.82] m-0">
            LIV<span className="text-violet">RILI</span>
          </h1>
          <div className="h-[10px] bg-magenta w-[52%] mt-[18px]" />
          <p className="mt-[28px] text-[clamp(17px,1.6vw,21px)] leading-relaxed text-copy max-w-[54ch]">
            A direct freight marketplace that connects shippers and carriers across Algeria -
            without a broker in between.
          </p>

          <dl className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-[38px]">
            {[
              { label: 'My role',  value: 'Developer & UI/UX designer' },
              { label: 'Type',     value: 'UI/UX + Development'        },
              { label: 'Stack',    value: 'Next.js · Express · PostgreSQL' },
              { label: 'Status',   value: 'Done',                       color: 'text-lime' },
            ].map(({ label, value, color }) => (
              <div key={label}>
                <dt className="font-mono text-[10px] uppercase tracking-label text-steel">{label}</dt>
                <dd className={`font-mono text-[13px] mt-[6px] m-0 ${color ?? ''}`}>{value}</dd>
              </div>
            ))}
          </dl>

          <div className="flex gap-3 flex-wrap mt-[30px] pb-0">
            <a
              href="https://www.figma.com/design/qBXsMgk94MYzCuGDkSeh27/Livrili?t=9A4IUr8P0k8p9KY6-1"
              target="_blank" rel="noopener noreferrer"
              className="font-mono text-[11px] tracking-tag uppercase font-semibold bg-lime text-wall px-[18px] py-[14px] no-underline hover:bg-magenta transition-colors"
            >
              Figma ↗
            </a>
            <a
              href="https://github.com/aiboud-iney/Livrili"
              target="_blank" rel="noopener noreferrer"
              className="font-mono text-[11px] tracking-tag uppercase font-semibold bg-lime text-wall px-[18px] py-[14px] no-underline hover:bg-magenta transition-colors"
            >
              Repository ↗
            </a>
            <Link
              href="/work"
              className="font-mono text-[11px] tracking-tag uppercase border-2 border-mid text-steel px-[16px] py-[12px] no-underline hover:border-bone hover:text-bone transition-colors"
            >
              ← Back to the wall
            </Link>
          </div>
        </div>

        {/* Full-bleed screenshot strip */}
        <div className="bg-near mt-8">
          <div className="max-w-[1560px] mx-auto px-6 md:px-12 py-10">
            <div className="relative w-full aspect-[16/7] bg-wall">
              <Image
                src="/images/livrili-home.png"
                alt="Livrili landing page"
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Reading body (daylight) ── */}
      <div className="bg-bone text-wall py-[72px] pb-[90px]">
        <div className="max-w-[1320px] mx-auto px-6 md:px-12 grid md:grid-cols-[220px_1fr] gap-12">

          {/* Sticky rail */}
          <nav className="md:sticky md:top-[88px] self-start" aria-label="Case study sections">
            <p className="font-mono text-[10px] uppercase tracking-label text-steel mb-3">Contents</p>
            <ol className="m-0 p-0 list-none flex flex-col gap-0 md:flex-col max-md:flex-row max-md:gap-3 max-md:overflow-x-auto">
              {[
                [1, 'What it is'],
                [2, 'The problem'],
                [3, 'Who uses it'],
                [4, 'How they meet'],
                [5, 'My role'],
                [6, 'Built with'],
                [7, 'The interface'],
              ].map(([n, label]) => (
                <li key={n}>
                  <a
                    href={`#l${n}`}
                    className="font-mono text-[11px] uppercase tracking-label text-[#5B2BBF] no-underline hover:text-wall block py-1 border-l-2 border-transparent hover:border-[#5B2BBF] pl-3 max-md:whitespace-nowrap"
                  >
                    0{n} - {label}
                  </a>
                </li>
              ))}
            </ol>
            <div className="mt-6 p-[14px] bg-wall text-bone">
              <p className="font-mono text-[9px] uppercase tracking-label text-lime m-0 mb-[6px]">Stack</p>
              <p className="font-mono text-[11px] leading-loose text-copy m-0">
                Next.js<br />Express.js<br />PostgreSQL
              </p>
            </div>
          </nav>

          {/* Body */}
          <div className="flex flex-col gap-[44px]">

            <section id="l1">
              <span className="font-mono text-[11px] uppercase tracking-label text-violet-dk block mb-2">01 - What it is</span>
              <h2 className="font-display text-[clamp(28px,3.2vw,42px)] uppercase leading-tight m-0 mb-[14px]">
                A direct freight marketplace
              </h2>
              <p className="text-[18px] leading-[1.7] max-w-[64ch] m-0 mb-4">
                Livrili connects shipments with trucks across Algeria, without a broker in between.
                Shippers post a shipment; carriers post a route; the platform puts the two in
                contact directly.
              </p>
              <p className="text-[18px] leading-[1.7] max-w-[64ch] m-0">
                The landing page commits to that symmetry rather than picking a side.{' '}
                <em>Post a Shipment</em> and <em>Post a Route</em> sit next to each other at equal
                weight - one filled, one outlined - because a marketplace with only one kind of
                user posting has nothing to match.
              </p>
            </section>

            <section id="l2">
              <span className="font-mono text-[11px] uppercase tracking-label text-violet-dk block mb-2">02 - The problem</span>
              <h2 className="font-display text-[clamp(28px,3.2vw,42px)] uppercase leading-tight m-0 mb-[14px]">
                Empty trucks, added cost
              </h2>
              <p className="text-[18px] leading-[1.7] max-w-[64ch] m-0">
                The product addresses two things at once: trucks running empty on return trips, and
                the cost added by intermediaries between the person with freight and the person with
                a vehicle. The page states both plainly - reduce cost, direct contact, no middleman
                - and repeats them as a ticker along the fold, so the proposition survives a visitor
                who reads nothing else.
              </p>
            </section>

            <section id="l3">
              <span className="font-mono text-[11px] uppercase tracking-label text-violet-dk block mb-2">03 - Who uses it</span>
              <h2 className="font-display text-[clamp(28px,3.2vw,42px)] uppercase leading-tight m-0 mb-[14px]">
                Two sides, opposite problems
              </h2>
              <p className="text-[18px] leading-[1.7] max-w-[64ch] m-0 mb-4">
                A marketplace only works if both sides show up, and these two arrive with mirror-image
                needs. The landing page commits to that symmetry before anything else.
              </p>
              <div className="grid md:grid-cols-2 gap-[18px] mt-4">
                <div className="bg-violet text-white p-6">
                  <p className="font-mono text-[10px] tracking-label uppercase m-0 mb-[10px]">Side A</p>
                  <h3 className="font-display text-[28px] uppercase leading-tight m-0 mb-3">The shipper</h3>
                  <p className="m-0 mb-[14px] text-[16px] leading-relaxed">
                    Has freight that needs to move, and is paying a broker&rsquo;s margin to make it happen.
                  </p>
                  <p className="font-mono text-[10px] leading-loose tracking-[0.08em] m-0">
                    WANTS - a truck going their way<br />
                    POSTS - a shipment<br />
                    WINS  - lower cost, direct contact
                  </p>
                </div>
                <div className="bg-wall text-bone p-6">
                  <p className="font-mono text-[10px] tracking-label uppercase m-0 mb-[10px] text-lime">Side B</p>
                  <h3 className="font-display text-[28px] uppercase leading-tight m-0 mb-3">The carrier</h3>
                  <p className="m-0 mb-[14px] text-[16px] leading-relaxed">
                    Has a truck already making a journey, often returning empty and earning nothing on the way back.
                  </p>
                  <p className="font-mono text-[10px] leading-loose tracking-[0.08em] m-0 text-copy">
                    WANTS - freight along a route<br />
                    POSTS - a route<br />
                    WINS  - a paid return leg
                  </p>
                </div>
              </div>
              <p className="text-[18px] leading-[1.7] max-w-[64ch] mt-5 m-0">
                The empty return trip is the hinge. A carrier driving home with nothing has already
                paid for the fuel, so freight on that leg is close to pure margin - which is exactly
                why it can be cheaper for the shipper too. Both sides win from the same inefficiency.
              </p>
            </section>

            <section id="l4">
              <span className="font-mono text-[11px] uppercase tracking-label text-violet-dk block mb-2">04 - How they meet</span>
              <h2 className="font-display text-[clamp(28px,3.2vw,42px)] uppercase leading-tight m-0 mb-[14px]">
                From two posts to one delivery
              </h2>
              {/* Flow diagram */}
              <div className="bg-wall p-[30px] mb-[18px] overflow-x-auto">
                <svg viewBox="0 0 760 250" className="w-full h-auto max-w-[760px]" role="img"
                  aria-label="The Livrili matching flow: shipper posts a shipment and a carrier posts a route; the platform matches them; they make direct contact and agree; freight is delivered.">
                  <defs>
                    <marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M0 0L10 5L0 10z" fill="#C6FF3D" />
                    </marker>
                  </defs>
                  <g fill="none" stroke="#C6FF3D" strokeWidth="1.4">
                    <rect x="14"  y="36"  width="150" height="58" />
                    <rect x="14"  y="152" width="150" height="58" />
                    <rect x="252" y="94"  width="150" height="58" />
                    <rect x="452" y="94"  width="150" height="58" />
                    <rect x="636" y="94"  width="110" height="58" />
                    <path d="M164 65h44v58h44" markerEnd="url(#arr)" />
                    <path d="M164 181h44v-58h44" markerEnd="url(#arr)" />
                    <path d="M402 123h50" markerEnd="url(#arr)" />
                    <path d="M602 123h34" markerEnd="url(#arr)" />
                  </g>
                  <g fill="#EDE8DF" fontFamily="IBM Plex Mono, monospace" fontSize="11" letterSpacing="0.4" textAnchor="middle">
                    <text x="89"  y="60">SHIPPER</text>
                    <text x="89"  y="78">POSTS A SHIPMENT</text>
                    <text x="89"  y="176">CARRIER</text>
                    <text x="89"  y="194">POSTS A ROUTE</text>
                    <text x="327" y="119">MATCH</text>
                    <text x="327" y="137">ON ROUTE & DATE</text>
                    <text x="527" y="119">DIRECT CONTACT</text>
                    <text x="527" y="137">& AGREEMENT</text>
                    <text x="691" y="128">DELIVERED</text>
                  </g>
                  <g fill="#8E8893" fontFamily="IBM Plex Mono, monospace" fontSize="9" letterSpacing="0.4" textAnchor="middle">
                    <text x="527" y="80">no broker in between</text>
                  </g>
                </svg>
                <p className="font-mono text-[10px] text-steel mt-4 m-0 normal-case tracking-[0.04em]">
                  Both sides post; the platform matches; the two of them talk directly.
                </p>
              </div>
              <p className="text-[18px] leading-[1.7] max-w-[64ch] m-0">
                The flow is deliberately short. Livrili&rsquo;s promise is <em>no middleman</em>,
                so the platform&rsquo;s job ends at the introduction - it finds the match and then
                gets out of the way, rather than sitting in the transaction and taking a cut.
              </p>
            </section>

            <section id="l5">
              <span className="font-mono text-[11px] uppercase tracking-label text-violet-dk block mb-2">05 - My role</span>
              <h2 className="font-display text-[clamp(28px,3.2vw,42px)] uppercase leading-tight m-0 mb-[14px]">
                What was mine, what was ours
              </h2>
              <div className="grid md:grid-cols-2 gap-4 mb-5">
                <div className="bg-wall text-bone p-5">
                  <p className="font-mono text-[10px] tracking-label uppercase m-0 mb-2 text-lime">Mine</p>
                  <p className="m-0 text-[16px] leading-relaxed">
                    Team lead and full-stack developer - full-stack development and team coordination.
                  </p>
                </div>
                <div className="bg-[#FF9DB6] text-wall p-5">
                  <p className="font-mono text-[10px] tracking-label uppercase m-0 mb-2">The team&rsquo;s</p>
                  <p className="m-0 text-[16px] leading-relaxed">
                    Livrili was built collaboratively. The design and the remaining engineering were
                    shared across the team, and the result is a team outcome rather than individual work.
                  </p>
                </div>
              </div>
              <p className="text-[18px] leading-[1.7] max-w-[64ch] m-0">
                Keeping those two columns separate is deliberate. On a team project the honest claim
                is the narrow one, and it holds up in a room where someone asks a follow-up question.
              </p>
            </section>

            <section id="l6">
              <span className="font-mono text-[11px] uppercase tracking-label text-violet-dk block mb-2">06 - Built with</span>
              <h2 className="font-display text-[clamp(28px,3.2vw,42px)] uppercase leading-tight m-0 mb-[14px]">
                Stack
              </h2>
              <div className="flex gap-[10px] flex-wrap">
                {['Next.js', 'Express.js', 'PostgreSQL'].map((t) => (
                  <span key={t} className="font-mono text-[11px] uppercase tracking-[0.1em] border-2 border-wall px-[13px] py-[9px]">
                    {t}
                  </span>
                ))}
              </div>
            </section>

            <section id="l7">
              <span className="font-mono text-[11px] uppercase tracking-label text-violet-dk block mb-2">07 - The interface</span>
              <h2 className="font-display text-[clamp(28px,3.2vw,42px)] uppercase leading-tight m-0 mb-[14px]">
                How the page is built
              </h2>
              <p className="text-[18px] leading-[1.7] max-w-[64ch] m-0 mb-4">
                The hero commits to both user types immediately - two equal-weight actions side by
                side before any marketing copy. Everything below reinforces why the exchange is
                worth making, with the ticker repeating the three value propositions as a persistent
                strip along the fold.
              </p>
              <p className="text-[18px] leading-[1.7] max-w-[64ch] m-0">
                The visual system uses high-contrast type and saturated accents against a near-black
                ground, which keeps the interface readable in a range of lighting conditions while
                staying visually distinctive.
              </p>
              <div className="flex gap-3 flex-wrap mt-[24px]">
                <a
                  href="https://github.com/aiboud-iney/Livrili"
                  target="_blank" rel="noopener noreferrer"
                  className="font-mono text-[11px] tracking-tag uppercase font-semibold bg-wall text-lime px-[18px] py-[14px] no-underline hover:bg-violet hover:text-white transition-colors"
                >
                  GitHub ↗
                </a>
                <Link
                  href="/work"
                  className="font-mono text-[11px] tracking-tag uppercase border-2 border-wall text-wall px-[16px] py-[12px] no-underline hover:bg-wall hover:text-bone transition-colors"
                >
                  ← Back to the wall
                </Link>
              </div>
            </section>

          </div>
        </div>
      </div>

    </div>
  );
}
