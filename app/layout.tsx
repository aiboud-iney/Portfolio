import type { Metadata } from 'next';
import { Anton, Space_Grotesk, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Ichrak Aiboud — Full-Stack Developer & UI/UX Designer',
    template: '%s — Ichrak Aiboud',
  },
  description:
    'Portfolio of Ichrak Aiboud, full-stack developer and UI/UX designer based in Algiers. Work includes Livrili, Vendex, Opaline, and more.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Ichrak Aiboud',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${spaceGrotesk.variable} ${ibmPlexMono.variable}`}
    >
      <body className="bg-wall text-bone font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
