import type { Metadata } from 'next';
import Link from 'next/link';
import SprayHaze from '@/components/SprayHaze';
import Sparkle from '@/components/Sparkle';

export const metadata: Metadata = { title: 'About' };

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden">

      {/* ── Header ── */}
      <section className="relative pt-[76px] pb-[80px] overflow-hidden">
        <SprayHaze color="violet" size={560} className="-top-[140px] -right-[120px]" />
        <Sparkle size={72} color="#C6FF3D" className="top-[60px] left-[6%]" />
        <div className="max-w-[1320px] mx-auto px-6 md:px-12 relative">
          <p className="font-mono text-[11px] tracking-label uppercase text-violet-lt m-0 mb-3">About</p>
          <h1 className="font-display text-[clamp(56px,10vw,148px)] uppercase leading-[0.82] m-0">
            TWO<br />
            <span className="text-violet">HALVES</span><br />
            OF ONE JOB
          </h1>
          <div className="h-[10px] bg-magenta mt-[18px] w-[44%]" />
        </div>
      </section>

      {/* ── Two disciplines (daylight) ── */}
      <section className="bg-bone text-wall">
        <div className="max-w-[1320px] mx-auto px-6 md:px-12 py-[72px] grid md:grid-cols-2 gap-16">
          <div>
            <p className="font-mono text-[11px] tracking-label uppercase m-0 mb-3 text-violet-dk">01 - Engineering</p>
            <h2 className="font-display text-[clamp(36px,5vw,72px)] uppercase leading-[0.82] m-0 mb-5">
              I build it
            </h2>
            <p className="text-[18px] leading-[1.65] m-0 mb-4">
              Full-stack work across the PERN and Laravel stacks: database schema design, REST
              APIs, authentication and role-based access, background jobs and queues - the parts
              of the system that have to be correct before the interface can be good.
            </p>
            <p className="text-[18px] leading-[1.65] m-0 mb-4">
              I care about how the pieces connect: a well-named API makes the frontend code
              easier to read; a thoughtful data model makes the edge cases visible before they
              become bugs. Building both ends of the same product means I get to make those
              decisions for myself.
            </p>
            <div className="flex gap-2 flex-wrap mt-5">
              {['JavaScript', 'TypeScript', 'React / Next.js', 'Node.js / Express', 'Laravel', 'PHP', 'PostgreSQL', 'MySQL'].map((t) => (
                <span key={t} className="font-mono text-[10px] uppercase tracking-[0.1em] border-2 border-wall/40 px-[10px] py-[6px]">{t}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="font-mono text-[11px] tracking-label uppercase m-0 mb-3 text-magenta">02 - Design</p>
            <h2 className="font-display text-[clamp(36px,5vw,72px)] uppercase leading-[0.82] m-0 mb-5">
              I design it
            </h2>
            <p className="text-[18px] leading-[1.65] m-0 mb-4">
              Interface and interaction design - flows, states, hierarchy, the empty and error
              screens nobody mocks up. I design in Figma with high-fidelity components and
              clickable prototypes, and I care about the parts of the experience that are easy
              to skip in a sprint: the in-between states, the loading and error conditions, the
              moment when nothing is there yet.
            </p>
            <p className="text-[18px] leading-[1.65] m-0 mb-4">
              I also enjoy visual experimentation - typefaces, colour systems, layout as a design
              material. The Flypost identity behind this portfolio is one example; the project
              pages are another.
            </p>
            <div className="flex gap-2 flex-wrap mt-5">
              {['Figma', 'User flows', 'Prototyping', 'Visual systems', 'Typography'].map((t) => (
                <span key={t} className="font-mono text-[10px] uppercase tracking-[0.1em] border-2 border-wall/40 px-[10px] py-[6px]">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Background ── */}
      <section className="py-[80px] border-t-2 border-near">
        <div className="max-w-[1320px] mx-auto px-6 md:px-12 grid md:grid-cols-[1fr_2fr] gap-12 items-start">
          <div>
            <p className="font-mono text-[11px] tracking-label uppercase text-steel m-0 mb-2">03 - Background</p>
            <h2 className="font-display text-[clamp(32px,4.5vw,68px)] uppercase leading-[0.82] m-0">
              Where I&rsquo;m<br />coming from
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-[18px] leading-[1.65] m-0">
              I&rsquo;m a Computer Science student at ESI Alger (École nationale Supérieure
              d&rsquo;Informatique), currently in my third year of the engineering cycle.
              I completed the two-year preparatory cycle there and hold an earlier professional
              qualification in networking.
            </p>
            <p className="text-[18px] leading-[1.65] m-0">
              I operate under the Velmora Studio brand for freelance work: full-stack
              development, community management and social media design. The personal portfolio
              - this one - is where I put the work I care most about and can speak to in depth.
            </p>
            <p className="text-[18px] leading-[1.65] m-0">
              I grew up trilingual in Arabic, French and English, which shapes how I approach
              technical writing and communication: I try to be precise without being terse,
              and clear without being condescending.
            </p>
            <p className="text-[18px] leading-[1.65] m-0 text-copy">
              Based in Sétif, Algeria. Available remotely.
            </p>
          </div>
        </div>
      </section>

      {/* ── Elsewhere ── */}
      <section className="py-[64px] bg-near border-t-2 border-rim">
        <div className="max-w-[1320px] mx-auto px-6 md:px-12">
          <p className="font-mono text-[11px] tracking-label uppercase text-steel m-0 mb-6">Also me, elsewhere</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'GitHub',    href: 'https://github.com/Aiboud-iney', desc: 'Repositories, side projects and experiments.' },
              { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/ichrak-aiboud/', desc: 'Professional profile and experience.' },
              { label: 'Vendex',    href: 'https://vendexdz.com/', desc: 'Live product - Algerian e-commerce ops.' },
              { label: 'Pulse API', href: 'https://aiboud-iney.github.io/pulse-api/', desc: 'Interactive API documentation.' },
            ].map(({ label, href, desc }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                 className="group bg-wall p-5 no-underline hover:bg-violet transition-colors">
                <p className="font-display text-[22px] uppercase leading-[0.82] text-lime m-0 mb-2 group-hover:text-white transition-colors">{label} ↗</p>
                <p className="font-mono text-[11px] text-steel m-0 normal-case tracking-normal leading-relaxed group-hover:text-white/70 transition-colors">{desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-[72px] border-t-2 border-near">
        <div className="max-w-[1320px] mx-auto px-6 md:px-12 flex items-center justify-between gap-6 flex-wrap">
          <h2 className="font-display text-[clamp(36px,5vw,72px)] uppercase leading-[0.82] m-0">
            Want to work together?
          </h2>
          <Link
            href="/contact"
            className="font-mono text-[12px] tracking-label uppercase font-semibold bg-lime text-wall px-6 py-[15px] no-underline hover:bg-magenta transition-colors"
          >
            Get in touch →
          </Link>
        </div>
      </section>

    </div>
  );
}
