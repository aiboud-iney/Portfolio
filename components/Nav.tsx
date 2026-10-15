'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/',        label: 'Home'    },
  { href: '/work',    label: 'Work'    },
  { href: '/uiux',    label: 'UI/UX'   },
  { href: '/about',   label: 'About'   },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Lock body scroll when overlay is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Close overlay on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      {/* ── Main nav ── */}
      <header className="sticky top-0 z-40 bg-wall/[0.92] backdrop-blur-sm border-b-2 border-near">
        <div className="max-w-[1320px] mx-auto px-6 md:px-12 flex items-center justify-between gap-4 h-[68px]">

          {/* Logo */}
          <Link
            href="/"
            className="font-display text-[22px] uppercase leading-[0.82] tracking-[-0.01em] text-bone no-underline"
            aria-label="Ichrak Aiboud - home"
          >
            Ai<span className="text-violet">_iney</span>
          </Link>

          {/* Desktop links */}
          <nav className="hidden md:flex gap-7 items-center" aria-label="Main">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={isActive(l.href) ? 'page' : undefined}
                className={[
                  'font-mono text-[12px] tracking-label uppercase no-underline pb-[3px] border-b-2 transition-colors',
                  isActive(l.href)
                    ? 'text-lime border-lime'
                    : 'text-bone border-transparent hover:text-magenta hover:border-magenta',
                ].join(' ')}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* CV button */}
            <Link
              href="/cv"
              className="hidden md:inline-block font-mono text-[12px] tracking-label uppercase font-semibold bg-lime text-wall px-4 py-[11px] no-underline hover:bg-magenta transition-colors"
            >
              CV ↓
            </Link>

            {/* Burger */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
            >
              <span className="block w-6 h-[2px] bg-bone" />
              <span className="block w-6 h-[2px] bg-bone" />
              <span className="block w-4 h-[2px] bg-bone" />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile overlay ── */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-wall flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          {/* Overlay header */}
          <div className="flex items-center justify-between h-[68px] px-6 border-b-2 border-near flex-shrink-0">
            <Link
              href="/"
              className="font-display text-[22px] uppercase leading-[0.82] text-bone no-underline"
              onClick={() => setOpen(false)}
            >
              Ai<span className="text-violet">_iney</span>
            </Link>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="font-mono text-[12px] tracking-label uppercase text-steel hover:text-bone transition-colors"
            >
              Close ✕
            </button>
          </div>

          {/* Overlay links */}
          <nav className="flex flex-col px-6 pt-6 flex-1 overflow-y-auto" aria-label="Mobile navigation">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(l.href) ? 'page' : undefined}
                className={[
                  'font-display text-[clamp(42px,12vw,64px)] uppercase leading-[0.82] tracking-[-0.01em] py-3 border-b-2 border-near no-underline transition-colors',
                  isActive(l.href) ? 'text-lime' : 'text-bone hover:text-magenta',
                ].join(' ')}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/cv"
              onClick={() => setOpen(false)}
              className="mt-8 mb-6 self-start font-mono text-[12px] tracking-label uppercase font-semibold bg-lime text-wall px-5 py-3 no-underline hover:bg-magenta transition-colors"
            >
              CV ↓
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
