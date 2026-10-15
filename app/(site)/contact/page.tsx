import type { Metadata } from 'next';
import SprayHaze from '@/components/SprayHaze';
import Sparkle from '@/components/Sparkle';

export const metadata: Metadata = { title: 'Contact' };

const contacts = [
  {
    label:    'Email',
    display:  'oi_aiboud@esi.dz',
    href:     'mailto:oi_aiboud@esi.dz',
    hint:     'Best for project enquiries',
    accent:   'border-t-lime',
    btnBg:    'bg-lime hover:bg-magenta',
    btnText:  'text-wall',
  },
  {
    label:    'GitHub',
    display:  'github.com/Aiboud-iney',
    href:     'https://github.com/Aiboud-iney',
    hint:     'Repositories and side projects',
    accent:   'border-t-bone',
    btnBg:    'bg-bone hover:bg-magenta',
    btnText:  'text-wall',
  },
  {
    label:    'LinkedIn',
    display:  'linkedin.com/in/ichrak-aiboud',
    href:     'https://www.linkedin.com/in/ichrak-aiboud/',
    hint:     'Professional profile',
    accent:   'border-t-violet',
    btnBg:    'bg-violet hover:bg-magenta',
    btnText:  'text-white',
  },
  {
    label:    'WhatsApp',
    display:  '+213 797 444 230',
    href:     'https://wa.me/213797444230',
    hint:     'Quick messages and calls',
    accent:   'border-t-magenta',
    btnBg:    'bg-magenta hover:bg-lime',
    btnText:  'text-white hover:text-wall',
  },
];

export default function ContactPage() {
  return (
    <div className="overflow-x-hidden">

      {/* ── Hero ── */}
      <section className="relative pt-[76px] pb-[80px] overflow-hidden">
        <SprayHaze color="magenta" size={560} className="-top-[120px] -right-[140px]" />
        <SprayHaze color="violet"  size={420} className="-bottom-[80px] -left-[80px]" />
        <Sparkle size={60} color="#C6FF3D" className="top-[52px] right-[18%]" />
        <Sparkle size={32} color="#FF2E88" className="bottom-[60px] left-[14%]" />
        <div className="max-w-[1320px] mx-auto px-6 md:px-12 relative">
          <p className="font-mono text-[11px] tracking-label uppercase text-lime m-0 mb-3">Contact</p>
          <h1 className="font-display text-[clamp(56px,12vw,188px)] uppercase leading-[0.82] m-0">
            LET&rsquo;S<br />
            TALK<span className="text-magenta">.</span>
          </h1>
          <div className="h-[10px] bg-magenta mt-[18px] w-[38%]" />
          <p className="mt-[26px] text-[clamp(16px,1.5vw,20px)] leading-relaxed text-copy max-w-[44ch]">
            Open to freelance projects, collaborations and full-time roles.
            If something I&rsquo;ve built looks useful to you, let&rsquo;s talk.
          </p>
          <div className="mt-6 inline-block font-mono text-[11px] tracking-tag uppercase px-4 py-[10px] border-2 border-lime text-lime">
            ● Available for remote work
          </div>
        </div>
      </section>

      {/* ── Contact methods ── */}
      <section className="py-[80px] border-t-2 border-near">
        <div className="max-w-[1320px] mx-auto px-6 md:px-12">
          <p className="font-mono text-[11px] tracking-label uppercase text-steel m-0 mb-8">Ways to reach me</p>
          <div className="grid md:grid-cols-2 gap-4">
            {contacts.map((c) => (
              <div
                key={c.label}
                className={`bg-near p-6 border-t-[6px] ${c.accent}`}
              >
                <p className="font-mono text-[10px] tracking-label uppercase text-steel m-0 mb-2">{c.label}</p>
                <p className="font-display text-[clamp(18px,2.2vw,28px)] uppercase leading-tight text-bone m-0 mb-1">
                  {c.display}
                </p>
                <p className="font-mono text-[11px] text-muted m-0 mb-5 normal-case tracking-normal">{c.hint}</p>
                <a
                  href={c.href}
                  {...(c.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className={`font-mono text-[11px] tracking-tag uppercase font-semibold px-[16px] py-[12px] no-underline transition-colors ${c.btnBg} ${c.btnText}`}
                >
                  {c.label === 'Email' ? 'Send email →' : `Open ${c.label} ↗`}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Location note ── */}
      <section className="py-[48px] border-t-2 border-near">
        <div className="max-w-[1320px] mx-auto px-6 md:px-12 flex items-center gap-8 flex-wrap">
          <div>
            <p className="font-mono text-[10px] tracking-label uppercase text-steel m-0 mb-1">Based in</p>
            <p className="font-display text-[clamp(22px,3vw,40px)] uppercase leading-[0.82] m-0">
              Sétif, Algeria
            </p>
          </div>
          <div className="w-[2px] h-[40px] bg-near hidden md:block" />
          <div>
            <p className="font-mono text-[10px] tracking-label uppercase text-steel m-0 mb-1">Availability</p>
            <p className="font-display text-[clamp(22px,3vw,40px)] uppercase leading-[0.82] m-0 text-lime">
              Remote - open
            </p>
          </div>
          <div className="w-[2px] h-[40px] bg-near hidden md:block" />
          <div>
            <p className="font-mono text-[10px] tracking-label uppercase text-steel m-0 mb-1">Response time</p>
            <p className="font-display text-[clamp(22px,3vw,40px)] uppercase leading-[0.82] m-0">
              Within 24h
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
