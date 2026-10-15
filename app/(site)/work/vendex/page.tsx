import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SprayHaze from '@/components/SprayHaze';

export const metadata: Metadata = { title: 'Vendex - E-commerce operations platform' };

const sections = [
  { id: 'v1', label: 'What it is'    },
  { id: 'v2', label: 'The problem'   },
  { id: 'v3', label: 'What it does'  },
  { id: 'v4', label: 'My role'       },
  { id: 'v5', label: 'Built with'    },
  { id: 'v6', label: 'Live'          },
];

export default function VendexPage() {
  return (
    <div className="overflow-x-hidden">

      {/* ── Poster header ── */}
      <section className="relative pt-[72px] pb-0 overflow-hidden">
        <SprayHaze color="lime" size={480} className="-left-[120px] -top-[120px]" />
        <SprayHaze color="violet" size={420} className="-right-[100px] top-[80px]" />
        <div className="max-w-[1320px] mx-auto px-6 md:px-12 relative pb-12">
          <p className="font-mono text-[11px] tracking-label uppercase m-0 mb-3 text-lime">
            Build · E-commerce operations
          </p>
          <h1 className="font-display text-[clamp(54px,10.5vw,160px)] uppercase leading-[0.82] m-0">
            VEN<span className="text-lime">DEX</span>
          </h1>
          <div className="h-[10px] bg-lime w-[44%] mt-[18px]" />
          <p className="mt-[28px] text-[clamp(17px,1.6vw,21px)] leading-relaxed text-copy max-w-[56ch]">
            An operations platform for Algerian online stores: order confirmation, shipment
            management and delivery tracking in one workspace, with role-based access and live
            delivery-company integrations.
          </p>
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-[38px]">
            {[
              { label: 'My role',  value: 'Full-stack developer'          },
              { label: 'Type',     value: 'Solo project'                  },
              { label: 'Stack',    value: 'Laravel · Livewire · MySQL'    },
              { label: 'Status',   value: '● Live at vendexdz.com', color: 'text-lime' },
            ].map(({ label, value, color }) => (
              <div key={label}>
                <dt className="font-mono text-[10px] uppercase tracking-label text-steel">{label}</dt>
                <dd className={`font-mono text-[13px] mt-[6px] m-0 ${color ?? ''}`}>{value}</dd>
              </div>
            ))}
          </dl>
          <div className="flex gap-3 flex-wrap mt-[30px]">
            <a
              href="https://vendexdz.com/"
              target="_blank" rel="noopener noreferrer"
              className="font-mono text-[11px] tracking-tag uppercase font-semibold bg-lime text-wall px-[18px] py-[14px] no-underline hover:bg-magenta transition-colors"
            >
              Live site ↗
            </a>
            <Link
              href="/work"
              className="font-mono text-[11px] tracking-tag uppercase border-2 border-mid text-steel px-[16px] py-[12px] no-underline hover:border-bone hover:text-bone transition-colors"
            >
              ← Back to the wall
            </Link>
          </div>
        </div>
        {/* Screenshot strip */}
        <div className="bg-near mt-8">
          <div className="max-w-[1560px] mx-auto px-6 md:px-12 py-10">
            <div className="relative w-full aspect-[16/7] bg-wall">
              <Image
                src="/images/vendex-landing.png"
                alt="Vendex landing page"
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Reading body ── */}
      <div className="bg-bone text-wall py-[72px] pb-[90px]">
        <div className="max-w-[1320px] mx-auto px-6 md:px-12 grid md:grid-cols-[220px_1fr] gap-12">

          <nav className="md:sticky md:top-[88px] self-start" aria-label="Case study sections">
            <p className="font-mono text-[10px] uppercase tracking-label text-steel mb-3">Contents</p>
            <ol className="m-0 p-0 list-none flex flex-col gap-0 max-md:flex-row max-md:gap-3 max-md:overflow-x-auto">
              {sections.map(({ id, label }, i) => (
                <li key={id}>
                  <a href={`#${id}`} className="font-mono text-[11px] uppercase tracking-label text-violet-dk no-underline hover:text-wall block py-1 border-l-2 border-transparent hover:border-violet-dk pl-3 max-md:whitespace-nowrap">
                    0{i + 1} - {label}
                  </a>
                </li>
              ))}
            </ol>
            <div className="mt-6 p-[14px] bg-wall text-bone">
              <p className="font-mono text-[9px] uppercase tracking-label text-lime m-0 mb-[6px]">Stack</p>
              <p className="font-mono text-[11px] leading-loose text-copy m-0">
                Laravel<br />Livewire<br />MySQL<br />Webhooks<br />Tailwind CSS
              </p>
            </div>
          </nav>

          <div className="flex flex-col gap-[44px]">

            <section id="v1">
              <span className="font-mono text-[11px] uppercase tracking-label text-violet-dk block mb-2">01 - What it is</span>
              <h2 className="font-display text-[clamp(28px,3.2vw,42px)] uppercase leading-tight m-0 mb-[14px]">One workspace for the whole order</h2>
              <p className="text-[18px] leading-[1.7] max-w-[64ch] m-0 mb-4">
                Vendex is a web application for Algerian e-commerce sellers. It handles everything
                that happens after a customer clicks "buy": confirming the order by phone, printing
                a shipping label, pushing the parcel to a delivery company&rsquo;s API, and tracking
                it to the door - all from a single dashboard instead of juggling five different tabs.
              </p>
            </section>

            <section id="v2">
              <span className="font-mono text-[11px] uppercase tracking-label text-violet-dk block mb-2">02 - The problem</span>
              <h2 className="font-display text-[clamp(28px,3.2vw,42px)] uppercase leading-tight m-0 mb-[14px]">Fragmented ops, high return rates</h2>
              <p className="text-[18px] leading-[1.7] max-w-[64ch] m-0 mb-4">
                Most small Algerian online sellers confirm orders manually by phone call, copy
                tracking numbers between their delivery company&rsquo;s site and their own
                spreadsheets, and have no structured way to follow up on returns. Vendex replaces
                that workflow with a single interface that connects directly to the delivery
                companies&rsquo; APIs.
              </p>
              <p className="text-[18px] leading-[1.7] max-w-[64ch] m-0">
                The confirmation-rate dashboard is the headline metric: it tells the seller exactly
                how many orders reached the customer versus how many were refused or never answered
                - information that previously only existed as intuition.
              </p>
            </section>

            <section id="v3">
              <span className="font-mono text-[11px] uppercase tracking-label text-violet-dk block mb-2">03 - What it does</span>
              <h2 className="font-display text-[clamp(28px,3.2vw,42px)] uppercase leading-tight m-0 mb-[14px]">The four core workflows</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: 'Order confirmation',   desc: 'A queue of new orders waiting for a phone call, with status tracking and a timer so nothing sits too long.',             color: 'border-t-lime' },
                  { title: 'Shipment creation',    desc: 'One-click push to the connected delivery company&rsquo;s API, label generation, and automatic tracking number capture.', color: 'border-t-violet' },
                  { title: 'Delivery tracking',    desc: 'Live status pulled from delivery APIs, displayed per order and aggregated in the dashboard.',                            color: 'border-t-magenta' },
                  { title: 'Role-based access',    desc: 'Owners see everything; confirmation agents see only their queue; shipping agents see only their shipments.',             color: 'border-t-bone' },
                ].map(({ title, desc, color }) => (
                  <div key={title} className={`bg-wall text-bone p-5 border-t-[6px] ${color}`}>
                    <h3 className="font-display text-[18px] uppercase leading-tight m-0 mb-2">{title}</h3>
                    <p className="m-0 text-[15px] leading-relaxed text-copy" dangerouslySetInnerHTML={{ __html: desc }} />
                  </div>
                ))}
              </div>
            </section>

            <section id="v4">
              <span className="font-mono text-[11px] uppercase tracking-label text-violet-dk block mb-2">04 - My role</span>
              <h2 className="font-display text-[clamp(28px,3.2vw,42px)] uppercase leading-tight m-0 mb-[14px]">Everything, end to end</h2>
              <p className="text-[18px] leading-[1.7] max-w-[64ch] m-0 mb-4">
                Vendex is a solo project. The database schema, the delivery-company API integrations,
                the RBAC system, the Livewire components, the queue workers - all of it was designed
                and built by me, including the landing page.
              </p>
              <p className="text-[18px] leading-[1.7] max-w-[64ch] m-0">
                Building the whole stack means every decision is visible and intentional.
                There&rsquo;s no seam between what the frontend expects and what the backend
                delivers, because the same person built both and knows why each interface is
                shaped the way it is.
              </p>
            </section>

            <section id="v5">
              <span className="font-mono text-[11px] uppercase tracking-label text-violet-dk block mb-2">05 - Built with</span>
              <h2 className="font-display text-[clamp(28px,3.2vw,42px)] uppercase leading-tight m-0 mb-[14px]">Stack</h2>
              <div className="flex gap-[10px] flex-wrap">
                {['Laravel', 'Livewire', 'MySQL', 'Tailwind CSS', 'Webhooks'].map((t) => (
                  <span key={t} className="font-mono text-[11px] uppercase tracking-[0.1em] border-2 border-wall px-[13px] py-[9px]">
                    {t}
                  </span>
                ))}
              </div>
            </section>

            <section id="v6">
              <span className="font-mono text-[11px] uppercase tracking-label text-violet-dk block mb-2">06 - Live</span>
              <h2 className="font-display text-[clamp(28px,3.2vw,42px)] uppercase leading-tight m-0 mb-[14px]">See it running</h2>
              <p className="text-[18px] leading-[1.7] max-w-[64ch] m-0 mb-5">
                Vendex is live and in use. The landing page is public; the application itself
                requires an account.
              </p>
              <div className="flex gap-3 flex-wrap">
                <a
                  href="https://vendexdz.com/"
                  target="_blank" rel="noopener noreferrer"
                  className="font-mono text-[11px] tracking-tag uppercase font-semibold bg-wall text-lime px-[18px] py-[14px] no-underline hover:bg-violet hover:text-white transition-colors"
                >
                  vendexdz.com ↗
                </a>
                <Link href="/work" className="font-mono text-[11px] tracking-tag uppercase border-2 border-wall text-wall px-[16px] py-[12px] no-underline hover:bg-wall hover:text-bone transition-colors">
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
