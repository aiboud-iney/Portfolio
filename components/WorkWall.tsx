'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type ProjectType = 'build' | 'design' | 'both';
type Filter      = 'all' | ProjectType;

interface Project {
  id:       string;
  num:      string;
  category: string;
  type:     ProjectType;
  title:    string;
  desc:     string;
  role:     string;
  tags:     string[];
  links:    { href: string; label: string; external?: boolean }[];
  img:      string | null;
  imgAlt:   string;
  sheet:    'a' | 'b' | 'c';
}

const projects: Project[] = [
  {
    id:       'livrili',
    num:      '01',
    category: 'Logistics marketplace',
    type:     'both',
    title:    'Livrili',
    desc:     'A platform that connects shippers who have goods to move with carriers who have trucks going that way - posting, matching and tracking a shipment end to end. Built as a collaborative full-stack project.',
    role:     'developer and UI/UX designer on a team project',
    tags:     ['Next.js', 'PostgreSQL', 'Figma'],
    links:    [
      { href: '/work/livrili', label: 'Read the case study →' },
      { href: 'https://github.com/aiboud-iney/Livrili', label: 'Repository ↗', external: true },
    ],
    img:      '/images/livrili-home.png',
    imgAlt:   'The Livrili landing page: Connect Shipments and Trucks Intelligently.',
    sheet:    'a',
  },
  {
    id:       'opaline',
    num:      '03',
    category: 'Investing app',
    type:     'design',
    title:    'Opaline',
    desc:     'A values-based investing app that asks what matters to you before it asks for your money - intentions first, portfolio second, with a weekly digest instead of a live ticker.',
    role:     'UI/UX designer: flows, screens, visual system',
    tags:     ['Figma', 'User flows', 'Prototype'],
    links:    [
      { href: '/work/opaline', label: 'Read the project page →' },
    ],
    img:      '/images/opaline-splash.png',
    imgAlt:   'Opaline splash screen: wordmark in white serif italic on terracotta.',
    sheet:    'b',
  },
  {
    id:       'vendex',
    num:      '02',
    category: 'E-commerce operations',
    type:     'build',
    title:    'Vendex',
    desc:     'An operations platform for Algerian online stores: order confirmation, shipment management and delivery tracking in one workspace, with role-based access and live delivery-company integrations.',
    role:     'full-stack: order workflows, RBAC, delivery APIs, sync, dashboards',
    tags:     ['Laravel', 'Livewire', 'MySQL', 'Webhooks'],
    links:    [
      { href: '/work/vendex', label: 'Read the case study →' },
      { href: 'https://vendexdz.com/', label: 'vendexdz.com ↗', external: true },
    ],
    img:      '/images/vendex-landing.png',
    imgAlt:   'The Vendex landing page, showing a confirmation-rate dashboard mockup.',
    sheet:    'c',
  },
];

const typeLabel: Record<ProjectType, string> = { build: 'Build', design: 'Design', both: 'Both' };
const filters: { key: Filter; label: string }[] = [
  { key: 'all',    label: 'All'    },
  { key: 'build',  label: 'Build'  },
  { key: 'design', label: 'Design' },
  { key: 'both',   label: 'Both'   },
];

// ── Placeholder for missing images ──────────────────────────────────────────
function ImgPlaceholder({ label }: { label: string }) {
  return (
    <div className="w-full h-full flex items-center justify-center p-4 text-center">
      <p className="font-mono text-[10px] tracking-tag uppercase text-lime leading-relaxed">
        {label}
        <br />
        <span className="text-steel normal-case tracking-normal">
          Add image to /public/images/
        </span>
      </p>
    </div>
  );
}

// ── Single project sheet ─────────────────────────────────────────────────────
function Sheet({ p }: { p: Project }) {
  const sheetCls = {
    a: 'bg-violet text-white   -rotate-[1.4deg] mr-[8%]  max-sm:mr-0 max-sm:rotate-0',
    b: 'bg-bone  text-wall      rotate-[1.2deg]  ml-[10%] max-sm:ml-0 max-sm:rotate-0',
    c: 'bg-near  border-2 border-lime -rotate-[0.7deg] mr-[4%]  max-sm:mr-0 max-sm:rotate-0',
  }[p.sheet];

  const tagCls = {
    a: 'border-white/60 text-white',
    b: 'border-wall/40  text-wall',
    c: 'border-lime     text-lime',
  }[p.sheet];

  const linkCls = {
    a: 'text-white hover:text-lime',
    b: 'text-wall  hover:text-violet',
    c: 'text-lime  hover:text-bone',
  }[p.sheet];

  const metaBadgeCls = {
    a: 'border-2 border-lime text-lime',
    b: 'bg-wall text-bone',
    c: 'bg-lime text-wall font-semibold',
  }[p.sheet];

  const imgBg = {
    a: 'bg-wall',
    b: 'bg-magenta',
    c: 'bg-wall',
  }[p.sheet];

  const isReversed = p.sheet !== 'a'; // b and c: image first on desktop

  const image = (
    <div className={`relative aspect-[16/10] overflow-hidden ${imgBg}`}>
      {p.img ? (
        <Image
          src={p.img}
          alt={p.imgAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      ) : (
        <ImgPlaceholder label={p.imgAlt} />
      )}
    </div>
  );

  const content = (
    <div>
      <p className={`font-mono text-[10px] tracking-tag uppercase m-0 mb-[10px] ${p.sheet === 'c' ? 'text-lime' : ''}`}>
        {p.num} · {p.category} ·{' '}
        <span className={`px-[7px] py-[3px] ${metaBadgeCls}`}>{typeLabel[p.type]}</span>
      </p>
      <h3 className="font-display text-[clamp(30px,3.6vw,54px)] uppercase leading-[0.82] m-0">
        {p.title}
      </h3>
      <p className={`text-[16px] leading-relaxed mt-[14px] mb-0 max-w-[46ch] ${p.sheet === 'c' ? 'text-copy' : ''}`}>
        {p.desc}
      </p>
      <p className={`font-mono text-[10px] tracking-tag uppercase mt-4 mb-0 ${p.sheet === 'a' ? 'opacity-80' : 'text-steel'}`}>
        My role - {p.role}
      </p>
      <div className="flex gap-[7px] flex-wrap mt-[14px]">
        {p.tags.map((t) => (
          <span key={t} className={`font-mono text-[10px] tracking-[0.1em] uppercase px-[9px] py-[6px] border-2 ${tagCls}`}>
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-[14px] flex-wrap mt-[18px]">
        {p.links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className={`font-mono text-[11px] tracking-tag uppercase underline underline-offset-4 ${linkCls}`}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <article className={`p-7 grid grid-cols-2 gap-7 items-center max-md:grid-cols-1 ${sheetCls}`}>
      {isReversed ? <>{image}{content}</> : <>{content}{image}</>}
    </article>
  );
}

// ── Flat list row ────────────────────────────────────────────────────────────
function ListRow({ p }: { p: Project }) {
  return (
    <div className="grid items-center px-3 py-4 border-b-2 border-rim hover:bg-near transition-colors [grid-template-columns:52px_1.4fr_1fr_100px] max-sm:[grid-template-columns:40px_1fr_80px]">
      <span className="font-mono text-[11px] text-steel">{p.num}</span>
      <div>
        <h3 className="font-display text-[22px] uppercase leading-[0.82] m-0">{p.title}</h3>
        <p className="font-mono text-[10px] text-steel mt-1 mb-0 uppercase tracking-[0.1em]">{p.category}</p>
      </div>
      <div className="flex gap-2 flex-wrap max-sm:hidden">
        {p.tags.slice(0, 2).map((t) => (
          <span key={t} className="font-mono text-[10px] uppercase px-2 py-1 border border-mid text-steel">
            {t}
          </span>
        ))}
      </div>
      <Link
        href={`/work/${p.id}`}
        className="font-mono text-[11px] uppercase tracking-tag text-lime underline underline-offset-4 text-right hover:text-bone no-underline hover:underline"
      >
        View →
      </Link>
    </div>
  );
}

// ── Main export ──────────────────────────────────────────────────────────────
export default function WorkWall({ showAll = false }: { showAll?: boolean }) {
  const [filter, setFilter] = useState<Filter>('all');
  const [flat,   setFlat  ] = useState(false);

  const visible = projects
    .filter((p) => filter === 'all' || p.type === filter)
    .sort((a, b) => a.num.localeCompare(b.num));

  return (
    <>
      {/* Header + filters */}
      <div className="flex items-end justify-between gap-6 flex-wrap mb-11">
        <div>
          <p className="font-mono text-[11px] tracking-label uppercase text-lime m-0 mb-[10px]">
            {showAll ? 'All projects' : '03 - Selected work'}
          </p>
          <h2 className="font-display text-[clamp(40px,6vw,92px)] uppercase leading-[0.82] m-0">
            The wall
          </h2>
        </div>
        <div className="flex gap-2 flex-wrap" role="group" aria-label="Filter projects">
          {filters.map(({ key, label }) => (
            <button
              key={key}
              type="button"
              onClick={() => setFilter(key)}
              aria-pressed={filter === key}
              className={[
                'font-mono text-[11px] tracking-tag uppercase px-[13px] py-[9px] border-2 transition-colors cursor-pointer',
                filter === key
                  ? 'bg-lime text-wall border-lime font-semibold'
                  : 'bg-transparent border-mid text-bone hover:border-lime hover:text-lime',
              ].join(' ')}
            >
              {label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setFlat((v) => !v)}
            aria-pressed={flat}
            className={[
              'font-mono text-[11px] tracking-tag uppercase px-[13px] py-[9px] border-2 border-dashed transition-colors cursor-pointer',
              flat
                ? 'bg-lime text-wall border-lime font-semibold'
                : 'bg-transparent border-mid text-bone',
            ].join(' ')}
          >
            {flat ? 'Stack it' : 'Flatten the wall'}
          </button>
        </div>
      </div>

      {/* Wall or list */}
      {!flat ? (
        <div className="flex flex-col gap-7">
          {visible.map((p) => <Sheet key={p.id} p={p} />)}
        </div>
      ) : (
        <div className="border-t-2 border-rim">
          {visible.map((p) => <ListRow key={p.id} p={p} />)}
        </div>
      )}

      {!showAll && (
        <div className="mt-[42px]">
          <Link
            href="/work"
            className="font-mono text-[12px] tracking-label uppercase border-2 border-bone text-bone px-5 py-[15px] no-underline hover:border-lime hover:text-lime transition-colors"
          >
            All projects →
          </Link>
        </div>
      )}
    </>
  );
}
