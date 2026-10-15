import type { Metadata } from 'next';
import Link from 'next/link';
import PrintButton from '@/components/PrintButton';

export const metadata: Metadata = { title: 'CV - Ichrak Aiboud' };

const skills = {
  'Languages':       ['JavaScript / TypeScript', 'PHP', 'Python', 'Java / C'],
  'Frameworks':      ['React', 'Next.js', 'Node.js / Express', 'Laravel', 'Livewire'],
  'Data':            ['PostgreSQL', 'MySQL', 'REST API design'],
  'Design':          ['Figma', 'UI/UX design', 'User flows'],
  'Tooling':         ['Git / GitHub', 'Tailwind CSS', 'PHPUnit', 'OpenAPI / Swagger'],
};

const experience = [
  {
    role:    'Full-Stack Developer & Designer',
    org:     'freelance',
    period:  '2024 - present',
    bullets: [
      'Full-stack development for clients across Algeria.',
      'Community management and social media design.',
    ],
  },
];

const education = [
  {
    degree:  'Computer Science - Engineering cycle (3rd year)',
    school:  'ESI Alger (École nationale Supérieure d\'Informatique)',
    period:  '2023 - present',
  },
  {
    degree:  'Preparatory cycle - Mathematics & CS',
    school:  'ESI Alger',
    period:  '2021 - 2023',
  },
  {
    degree:  'Technicien en réseau informatique',
    school:  'Institut d\'enseignement professionnel',
    period:  'Completed',
  },
];

const projects = [
  {
    title:  'Vendex',
    type:   'Build',
    stack:  'Laravel · Livewire · MySQL',
    desc:   'E-commerce operations platform for Algerian online stores. Order confirmation, shipment management, delivery API integration, RBAC. Live at vendexdz.com.',
    url:    'https://vendexdz.com/',
  },
  {
    title:  'Livrili',
    type:   'Design + Build',
    stack:  'Next.js · Express · PostgreSQL',
    desc:   'Direct freight marketplace connecting shippers and carriers across Algeria. Team project; led development and UI/UX.',
    url:    'https://github.com/aiboud-iney/Livrili',
  },
  {
    title:  'Pulse API',
    type:   'Build',
    stack:  'Node.js · Express 5 · PostgreSQL · JWT',
    desc:   'Notification service delivering across email, SMS and push. Queueing, rate limiting, per-channel delivery logs. Docs live.',
    url:    'https://aiboud-iney.github.io/pulse-api/',
  },
  {
    title:  'Opaline',
    type:   'Design',
    stack:  'Figma',
    desc:   'Values-based investing app - intentions first, portfolio second. Full Figma file with flows and prototype.',
    url:    undefined,
  },
];

export default function CVPage() {
  return (
    <div className="min-h-screen bg-wall text-bone font-sans">

      {/* Back link */}
      <div className="max-w-[860px] mx-auto px-6 pt-6 pb-0">
        <Link href="/" className="font-mono text-[11px] tracking-label uppercase text-steel no-underline hover:text-lime transition-colors">
          ← ichrak-aiboud.dev
        </Link>
      </div>

      {/* A4 sheet */}
      <article
        className="max-w-[860px] mx-auto my-8 bg-wall print:my-0 print:max-w-full"
        style={{ minHeight: '1123px' }}
      >

        {/* ── Top poster marks ── */}
        <div className="flex h-[18px] print:h-[18px]">
          <div className="flex-1 bg-violet" />
          <div className="flex-1 bg-magenta" />
          <div className="flex-1 bg-lime" />
        </div>

        {/* ── Header ── */}
        <header className="px-10 pt-9 pb-8 border-b-2 border-near">
          <h1 className="font-display text-[clamp(42px,7vw,80px)] uppercase leading-[0.82] m-0">
            ICHRAK<br />
            <span className="text-violet">AIBOUD</span>
          </h1>
          <p className="font-display text-[16px] uppercase leading-[0.82] tracking-[0.08em] text-lime mt-3 m-0">
            Nour El Yakine
          </p>
          <p className="font-mono text-[12px] tracking-label uppercase text-steel mt-2 m-0">
            Full-Stack Developer &amp; UI/UX Designer
          </p>

          {/* Contact strip */}
          <div className="flex gap-5 flex-wrap mt-4">
            {[
              { label: 'oi_aiboud@esi.dz',                  href: 'mailto:oi_aiboud@esi.dz'                          },
              { label: 'github.com/Aiboud-iney',             href: 'https://github.com/Aiboud-iney'                  },
              { label: 'linkedin.com/in/ichrak-aiboud',      href: 'https://www.linkedin.com/in/ichrak-aiboud/'      },
              { label: 'Sétif, Algeria - remote',            href: undefined                                          },
            ].map(({ label, href }) =>
              href ? (
                <a key={label} href={href} className="font-mono text-[11px] tracking-[0.06em] text-copy no-underline hover:text-lime">
                  {label}
                </a>
              ) : (
                <span key={label} className="font-mono text-[11px] tracking-[0.06em] text-steel">{label}</span>
              )
            )}
          </div>
        </header>

        {/* ── Two-column body ── */}
        <div className="grid grid-cols-[1fr_280px] divide-x divide-near px-0">

          {/* Left column */}
          <div className="px-10 py-8 flex flex-col gap-8">

            {/* Experience */}
            <section>
              <h2 className="font-mono text-[10px] tracking-label uppercase text-lime m-0 mb-4 pb-2 border-b border-near">
                Experience
              </h2>
              {experience.map((e) => (
                <div key={e.role} className="mb-5">
                  <div className="flex items-baseline justify-between gap-4 flex-wrap">
                    <h3 className="font-display text-[18px] uppercase leading-tight m-0">{e.role}</h3>
                    <span className="font-mono text-[10px] uppercase tracking-label text-steel whitespace-nowrap">{e.period}</span>
                  </div>
                  <p className="font-mono text-[11px] tracking-[0.06em] text-violet-lt mt-1 mb-2">{e.org}</p>
                  <ul className="m-0 pl-4 list-disc">
                    {e.bullets.map((b) => (
                      <li key={b} className="text-[14px] leading-relaxed text-copy mb-1">{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* Projects */}
            <section>
              <h2 className="font-mono text-[10px] tracking-label uppercase text-lime m-0 mb-4 pb-2 border-b border-near">
                Selected projects
              </h2>
              <div className="flex flex-col gap-4">
                {projects.map((p) => (
                  <div key={p.title} className="pl-3 border-l-2 border-mid">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <span className="font-display text-[17px] uppercase leading-tight text-bone">{p.title}</span>
                      <span className={`font-mono text-[10px] uppercase tracking-label ${p.type.includes('Build') ? 'text-lime' : 'text-magenta'}`}>
                        {p.type}
                      </span>
                    </div>
                    <p className="font-mono text-[10px] tracking-[0.06em] text-violet-lt mt-[2px] mb-1">{p.stack}</p>
                    <p className="text-[13px] leading-relaxed text-copy m-0 mb-1">{p.desc}</p>
                    {p.url && (
                      <a href={p.url} className="font-mono text-[10px] text-lime tracking-[0.06em] no-underline hover:underline">
                        {p.url.replace('https://', '')} ↗
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Right column */}
          <div className="px-8 py-8 flex flex-col gap-8">

            {/* Education */}
            <section>
              <h2 className="font-mono text-[10px] tracking-label uppercase text-lime m-0 mb-4 pb-2 border-b border-near">
                Education
              </h2>
              <div className="flex flex-col gap-4">
                {education.map((e) => (
                  <div key={e.degree}>
                    <span className="font-mono text-[10px] uppercase tracking-label text-steel">{e.period}</span>
                    <p className="font-sans text-[14px] leading-relaxed font-medium text-bone m-0 mt-1">{e.degree}</p>
                    <p className="font-mono text-[11px] text-muted m-0 normal-case tracking-normal">{e.school}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills */}
            <section>
              <h2 className="font-mono text-[10px] tracking-label uppercase text-lime m-0 mb-4 pb-2 border-b border-near">
                Skills
              </h2>
              <div className="flex flex-col gap-3">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <p className="font-mono text-[10px] uppercase tracking-label text-steel m-0 mb-1">{category}</p>
                    <p className="text-[13px] leading-relaxed text-copy m-0">{items.join(' · ')}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Languages */}
            <section>
              <h2 className="font-mono text-[10px] tracking-label uppercase text-lime m-0 mb-4 pb-2 border-b border-near">
                Languages
              </h2>
              {[
                { lang: 'Arabic',  level: 'Native'         },
                                { lang: 'English', level: 'Good'    },

                { lang: 'French',  level: 'Intermediate'    },
              ].map(({ lang, level }) => (
                <div key={lang} className="flex justify-between items-baseline mb-2">
                  <span className="text-[14px] text-bone">{lang}</span>
                  <span className="font-mono text-[10px] uppercase tracking-label text-muted">{level}</span>
                </div>
              ))}
            </section>

          </div>
        </div>

        {/* ── Bottom poster marks ── */}
        <div className="flex h-[8px]">
          <div className="flex-1 bg-near" />
          <div className="w-[80px] bg-lime" />
          <div className="w-[80px] bg-magenta" />
        </div>
      </article>

      {/* Print button */}
      <div className="max-w-[860px] mx-auto px-6 pb-8 print:hidden">
        <PrintButton />
      </div>

    </div>
  );
}
