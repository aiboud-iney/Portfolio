import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SprayHaze from '@/components/SprayHaze';
import Sparkle from '@/components/Sparkle';
import WorkWall from '@/components/WorkWall';

export const metadata: Metadata = {
  title: 'Ichrak Aiboud - Full-Stack Developer & UI/UX Designer',
};

export default function Home() {
  return (
    <div className="overflow-x-hidden">

      {/* ═══════════════════════════════════════ HERO */}
      <section className="relative pt-[76px] pb-[96px]" id="top">
        <SprayHaze color="violet" size={620} className="-top-[140px] -left-[120px]" />

        <div className="max-w-[1320px] mx-auto px-6 md:px-12">
          {/* flex-col on mobile (portrait top, copy bottom)
              flex-row-reverse on desktop (portrait right, copy left) */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-6">

            {/* ── Portrait (first in DOM = top on mobile, right on desktop) ── */}
            <div className="relative z-[2] w-full md:w-5/12 flex-shrink-0">
              <div className="relative max-w-[480px] ml-auto" style={{ aspectRatio: '4/5' }}>
                {/* Back violet sheet */}
                <div
                  aria-hidden="true"
                  className="absolute bg-violet rotate-2"
                  style={{ inset: '16px -14px -14px 16px' }}
                />
                <div className="absolute inset-0 -rotate-2 overflow-hidden">
                  <Image
                    src="/images/portrait.png"
                    alt="Ichrak Aiboud"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 900px) 100vw, 480px"
                    priority
                  />
                </div>
                <Sparkle size={104} color="#EDE8DF" className="bottom-16 left-16" />
              </div>
              <Sparkle size={76} color="#EDE8DF" className="-right-[18px] -top-[30px]" />
              <Sparkle size={34} color="#FF2E88" className="-left-[22px] bottom-[54px]" />
            </div>

            {/* ── Copy (second in DOM = bottom on mobile, left on desktop) ── */}
            <div className="relative z-[3] w-full md:flex-1">
              <p className="font-mono text-[12px] tracking-label uppercase text-lime m-0">
                Software Developer &amp; UI/UX Designer
              </p>
              <h1
                className="font-display uppercase mt-[14px] text-[clamp(56px,8.6vw,132px)]"
                style={{ lineHeight: 0.82, letterSpacing: '-0.01em' }}
              >
                <span className="text-violet">AIBOUD</span>
                <br />
                <span className="inline-flex items-baseline gap-[18px] flex-wrap">
                  ICHRAK
                  <span
                    className="font-display text-lime whitespace-nowrap pb-2"
                    style={{ fontSize: 'clamp(15px, 1.6vw, 24px)', letterSpacing: '0.03em' }}
                  >
                    Nour El Yakine
                  </span>
                </span>
              </h1>
              <div className="h-[10px] bg-magenta mt-[18px] w-[58%]" />
              <p className="mt-[26px] text-[clamp(16px,1.5vw,20px)] leading-relaxed text-copy max-w-[42ch]">
                I design interfaces and I build them. Everything on this site is work I made
                and can walk you through - the decisions, the trade-offs, and the parts I'd
                do differently now.
              </p>
              <div className="flex gap-3 flex-wrap mt-[30px]">
                <Link
                  href="/work"
                  className="font-mono text-[12px] tracking-label uppercase font-semibold bg-lime text-wall px-5 py-[15px] no-underline hover:bg-magenta transition-colors"
                >
                  See the work
                </Link>
                <Link
                  href="/contact"
                  className="font-mono text-[12px] tracking-label uppercase border-2 border-bone text-bone px-5 py-[15px] no-underline hover:border-lime hover:text-lime transition-colors"
                >
                  Get in touch
                </Link>
                <Link
                  href="/cv"
                  className="font-mono text-[12px] tracking-label uppercase border-2 border-mid text-muted px-5 py-[15px] no-underline hover:border-bone hover:text-bone transition-colors"
                >
                  CV ↓
                </Link>
              </div>
            </div>

          </div>
        </div>
        <Sparkle size={104} color="#EDE8DF" className="top-[246px] right-[78px] hidden lg:block" />
      </section>

      {/* ═══════════════════════════════════════ TWO DISCIPLINES */}
      <section className="grid md:grid-cols-2 border-t-2 border-near">
        <div className="bg-violet text-white border-b-4 md:border-b-0 md:border-r-4 border-lime p-[clamp(40px,6vw,64px)_clamp(24px,4vw,48px)]">
          <p className="font-mono text-[11px] tracking-label uppercase m-0">01 - Engineering</p>
          <h2 className="font-display text-[clamp(34px,4vw,58px)] uppercase leading-[0.82] mt-[14px] mb-[14px]">
            I build it
          </h2>
          <p className="m-0 text-[17px] leading-relaxed">
            Full-stack web work: data models, APIs, auth and roles, the unglamorous parts that
            decide whether a product survives contact with real users.{' '}
            <span className="text-lime">Green is the engineering colour</span> - wherever you
            see it on this site, you&rsquo;re looking at code.
          </p>
        </div>
        <div className="bg-wall p-[clamp(40px,6vw,64px)_clamp(24px,4vw,48px)]">
          <p className="font-mono text-[11px] tracking-label uppercase m-0 text-magenta">02 - Design</p>
          <h2 className="font-display text-[clamp(34px,4vw,58px)] uppercase leading-[0.82] mt-[14px] mb-[14px] text-bone">
            I design it
          </h2>
          <p className="m-0 text-[17px] leading-relaxed text-copy">
            Interface and interaction design: flows, states, hierarchy, the empty and error
            screens nobody mocks up. Designing and building the same product means the
            handoff never loses anything.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════ SELECTED WORK */}
      <section className="py-[104px]" id="work">
        <div className="max-w-[1320px] mx-auto px-6 md:px-12">
          <WorkWall />
        </div>
      </section>

      {/* ═══════════════════════════════════════ TOOLKIT */}
      <section className="py-[104px] border-t-2 border-near" id="toolkit">
        <div className="max-w-[1320px] mx-auto px-6 md:px-12">
          <div className="flex items-end justify-between gap-6 flex-wrap mb-11">
            <div>
              <p className="font-mono text-[11px] tracking-label uppercase text-lime m-0 mb-[10px]">
                04 - Toolkit
              </p>
              <h2 className="font-display text-[clamp(40px,6vw,92px)] uppercase leading-[0.82] m-0">
                What I work with
              </h2>
            </div>
            <p className="font-mono text-[11px] text-steel max-w-[36ch] normal-case tracking-[0.04em]">
              No percentages, no star ratings - listed only where there&rsquo;s real work behind it.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                heading: 'Languages',
                color:   'lime',
                bg:      'bg-near border-t-[6px] border-lime',
                text:    'text-bone',
                items:   ['JavaScript', 'TypeScript', 'PHP', 'Python', 'Java / C'],
              },
              {
                heading: 'Frameworks & backend',
                color:   'white',
                bg:      'bg-violet',
                text:    'text-white',
                items:   ['React', 'Next.js', 'Node.js / Express', 'Laravel', 'Livewire'],
              },
              {
                heading: 'Data & tooling',
                color:   'magenta',
                bg:      'bg-near border-t-[6px] border-magenta',
                text:    'text-bone',
                items:   ['PostgreSQL', 'MySQL', 'Git & GitHub', 'REST APIs', 'Queues & jobs'],
              },
              {
                heading: 'Design & prototyping',
                color:   'wall',
                bg:      'bg-bone',
                text:    'text-wall',
                items:   ['Figma', 'Interface design', 'User flows', 'Prototyping', 'Visual experimentation'],
              },
            ].map(({ heading, color, bg, text, items }) => (
              <div key={heading} className={`p-[22px] ${bg}`}>
                <h3 className={`font-mono text-[11px] tracking-label uppercase font-semibold mt-0 mb-4 text-${color}`}>
                  {heading}
                </h3>
                <ul className={`m-0 p-0 list-none divide-y divide-white/10 ${text}`}>
                  {items.map((item) => (
                    <li key={item} className="text-[15px] py-[7px]">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ ABOUT PEEK */}
      <section className="bg-bone text-wall py-[72px]" id="about">
        <div className="max-w-[1320px] mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="font-mono text-[11px] tracking-label uppercase m-0 mb-3 text-violet-dk">
              05 - About
            </p>
            <h2 className="font-display text-[clamp(40px,5.6vw,84px)] uppercase leading-[0.82] m-0">
              Two halves<br />of one job
            </h2>
            <Link
              href="/about"
              className="mt-[26px] inline-block font-mono text-[12px] tracking-label uppercase border-2 border-wall text-wall px-5 py-[15px] no-underline hover:bg-wall hover:text-bone transition-colors"
            >
              Read the full version →
            </Link>
          </div>
          <div>
            <p className="m-0 text-[18px] leading-[1.65]">
              I enjoy working at the intersection of logic and creativity: building web applications
              that work well behind the scenes and feel intuitive on the surface. From backend
              architecture and database design to frontend development and interface details,
              I like understanding how the pieces fit together.
            </p>
            <p className="mt-[18px] text-[18px] leading-[1.65] text-[#3C3A36]">
              Beyond the code, I&rsquo;m drawn to visual experimentation, thoughtful design,
              and turning ideas into things people can actually use. Still learning, still
              building, and always curious about what I can create next.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ CONTACT CTA */}
      <section className="relative py-[110px] overflow-hidden" id="contact">
        <SprayHaze color="magenta" size={460} className="-right-[120px] -bottom-[80px]" />
        <SprayHaze color="violet"  size={340} className="-left-[80px]   top-[60px]"    />
        <div className="max-w-[1320px] mx-auto px-6 md:px-12 relative">
          <p className="font-mono text-[11px] tracking-label uppercase text-lime m-0 mb-[10px]">
            06 - Contact
          </p>
          <h2 className="font-display text-[clamp(52px,11vw,172px)] uppercase leading-[0.82] m-0">
            LET&rsquo;S<br />
            TALK<span className="text-magenta">.</span>
          </h2>
          <div className="flex gap-3 flex-wrap mt-[34px]">
            <a
              href="mailto:oi_aiboud@esi.dz"
              className="font-mono text-[12px] tracking-label uppercase font-semibold bg-lime text-wall px-5 py-[15px] no-underline hover:bg-magenta transition-colors"
            >
              oi_aiboud@esi.dz →
            </a>
            <a
              href="https://github.com/Aiboud-iney"
              target="_blank" rel="noopener noreferrer"
              className="font-mono text-[12px] tracking-label uppercase border-2 border-bone text-bone px-5 py-[15px] no-underline hover:border-lime hover:text-lime transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/ichrak-aiboud/"
              target="_blank" rel="noopener noreferrer"
              className="font-mono text-[12px] tracking-label uppercase border-2 border-bone text-bone px-5 py-[15px] no-underline hover:border-lime hover:text-lime transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://wa.me/213797444230"
              target="_blank" rel="noopener noreferrer"
              className="font-mono text-[12px] tracking-label uppercase border-2 border-bone text-bone px-5 py-[15px] no-underline hover:border-lime hover:text-lime transition-colors"
            >
              WhatsApp ↗
            </a>
          </div>
          <p className="font-mono text-[11px] text-steel mt-5 normal-case tracking-[0.04em]">
            Algiers, Algeria - open to remote and part-time work.
          </p>
        </div>
      </section>

    </div>
  );
}
