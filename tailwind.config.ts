import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Ground
        wall:    '#0B0B0C',
        near:    '#17161A',
        rim:     '#2A2830',
        mid:     '#3A373F',
        muted:   '#6E6A74',
        steel:   '#8E8893',
        sub:     '#B6B1AA',
        copy:    '#D8D3CB',
        bone:    '#EDE8DF',
        // Accents
        violet: {
          DEFAULT: '#7B2FF7',
          lt:      '#A77BFF',
          dk:      '#5B2BBF',
        },
        magenta: '#FF2E88',
        lime:    '#C6FF3D',
      },
      fontFamily: {
        display: ['var(--font-anton)',          'sans-serif'],
        sans:    ['var(--font-space-grotesk)',  'sans-serif'],
        mono:    ['var(--font-ibm-plex-mono)',  'monospace'],
      },
      letterSpacing: {
        label: '0.14em',
        tag:   '0.12em',
        wide:  '0.18em',
      },
      lineHeight: {
        display: '0.82',
        tight:   '0.9',
      },
    },
  },
  plugins: [],
};

export default config;
