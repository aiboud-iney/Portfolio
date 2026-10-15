import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SprayHaze from '@/components/SprayHaze';

export const metadata: Metadata = { title: 'Pulse API - Notification service' };

const endpoints = [
  { method: 'POST',   path: '/v1/notifications/send',         desc: 'Send a single notification to one or more channels.'           },
  { method: 'POST',   path: '/v1/notifications/batch',        desc: 'Queue up to 500 notifications in one request.'                 },
  { method: 'GET',    path: '/v1/notifications',              desc: 'List notifications with filters for status, channel and date.' },
  { method: 'GET',    path: '/v1/notifications/:id',          desc: 'Fetch one notification with its full delivery log.'            },
  { method: 'DELETE', path: '/v1/notifications/:id/cancel',   desc: 'Cancel a queued notification before it is dispatched.'        },
  { method: 'POST',   path: '/v1/auth/token',                 desc: 'Exchange credentials for a signed JWT.'                       },
];

const methodColor: Record<string, string> = {
  GET:    'text-lime    border-lime',
  POST:   'text-violet  border-violet',
  DELETE: 'text-magenta border-magenta',
};

export default function PulseApiPage() {
  return (
    <div className="overflow-x-hidden">

      {/* ── Poster header ── */}
      <section className="relative pt-[72px] pb-0 overflow-hidden">
        <SprayHaze color="lime"   size={580} className="-left-[140px] -top-[160px]" />
        <SprayHaze color="violet" size={500} className="-right-[170px] top-[120px]" />
        <div className="max-w-[1320px] mx-auto px-6 md:px-12 relative pb-12">
          <p className="font-mono text-[11px] tracking-label uppercase m-0 mb-3 text-lime">
            Backend development · REST API · notification systems
          </p>
          <h1 className="font-display text-[clamp(54px,10.5vw,158px)] uppercase leading-[0.82] m-0">
            PULSE <span className="text-lime">API</span>
          </h1>
          <div className="h-[10px] bg-lime w-[42%] mt-[18px]" />
          <p className="mt-[28px] text-[clamp(17px,1.6vw,21px)] leading-relaxed text-copy max-w-[56ch]">
            A notification service that takes one request and delivers it across email, SMS and
            push - with queueing, rate limiting and per-channel delivery logs behind it.
          </p>
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-[38px]">
            {[
              { label: 'Type',    value: 'Backend service'           },
              { label: 'Surface', value: 'REST API & OpenAPI docs'   },
              { label: 'Spec',    value: 'OAS 3.0 · v1.0.0'         },
              { label: 'Status',  value: '● Docs live', color: 'text-lime' },
            ].map(({ label, value, color }) => (
              <div key={label}>
                <dt className="font-mono text-[10px] uppercase tracking-label text-steel">{label}</dt>
                <dd className={`font-mono text-[13px] mt-[6px] m-0 ${color ?? ''}`}>{value}</dd>
              </div>
            ))}
          </dl>
          <div className="flex gap-3 flex-wrap mt-[30px]">
            <a href="https://aiboud-iney.github.io/pulse-api/" target="_blank" rel="noopener noreferrer"
               className="font-mono text-[11px] tracking-tag uppercase font-semibold bg-lime text-wall px-[18px] py-[14px] no-underline hover:bg-magenta transition-colors">
              Live API docs ↗
            </a>
            <a href="https://github.com/Aiboud-iney/pulse-api" target="_blank" rel="noopener noreferrer"
               className="font-mono text-[11px] tracking-tag uppercase border-2 border-bone text-bone px-[16px] py-[12px] no-underline hover:border-lime hover:text-lime transition-colors">
              GitHub ↗
            </a>
            <Link href="/work" className="font-mono text-[11px] tracking-tag uppercase border-2 border-mid text-steel px-[16px] py-[12px] no-underline hover:border-bone hover:text-bone transition-colors">
              ← Back to the wall
            </Link>
          </div>
        </div>

      
      </section>

      {/* ── Reading body ── */}
      <div className="bg-bone text-wall py-[72px] pb-[90px]">
        <div className="max-w-[1320px] mx-auto px-6 md:px-12 grid md:grid-cols-[220px_1fr] gap-12">

          <nav className="md:sticky md:top-[88px] self-start" aria-label="Case study sections">
            <p className="font-mono text-[10px] uppercase tracking-label text-steel mb-3">Contents</p>
            <ol className="m-0 p-0 list-none flex flex-col gap-0 max-md:flex-row max-md:gap-3 max-md:overflow-x-auto">
              {['What it does','How it works','Endpoints','The docs','Stack & links'].map((l, i) => (
                <li key={l}>
                  <a href={`#p${i+1}`} className="font-mono text-[11px] uppercase tracking-label text-violet-dk no-underline hover:text-wall block py-1 border-l-2 border-transparent hover:border-violet-dk pl-3 max-md:whitespace-nowrap">
                    0{i+1} - {l}
                  </a>
                </li>
              ))}
            </ol>
            <div className="mt-6 p-[14px] bg-wall text-bone">
              <p className="font-mono text-[9px] uppercase tracking-label text-lime m-0 mb-[6px]">Stack</p>
              <p className="font-mono text-[11px] leading-loose text-copy m-0">
                Node.js<br />Express 5<br />PostgreSQL<br />JWT<br />pg-boss<br />Swagger / OpenAPI
              </p>
            </div>
          </nav>

          <div className="flex flex-col gap-[44px]">
            <section id="p1">
              <span className="font-mono text-[11px] uppercase tracking-label text-violet-dk block mb-2">01 - What it does</span>
              <h2 className="font-display text-[clamp(28px,3.2vw,42px)] uppercase leading-tight m-0 mb-[14px]">One request, three channels</h2>
              <p className="text-[18px] leading-[1.7] max-w-[64ch] m-0 mb-4">
                Sending a notification sounds like one line of code until you need it to go to
                email, SMS and push, to not fire twice, to survive a provider being down, and to
                be answerable later when someone asks whether it actually arrived. Pulse API is the
                service that holds all of that behind a single endpoint.
              </p>
              <p className="text-[18px] leading-[1.7] max-w-[64ch] m-0">
                A single <code className="font-mono text-[15px] bg-wall/10 px-1.5 py-0.5">POST /send</code> request
                carries the recipient, the channels to use, and the message content. The service
                figures out the rest: which provider to route each channel through, whether this
                recipient is within their rate limit, when to retry if the first attempt fails.
              </p>
            </section>

            <section id="p2">
              <span className="font-mono text-[11px] uppercase tracking-label text-violet-dk block mb-2">02 - How it works</span>
              <h2 className="font-display text-[clamp(28px,3.2vw,42px)] uppercase leading-tight m-0 mb-[14px]">Queue, dispatch, log</h2>
              <p className="text-[18px] leading-[1.7] max-w-[64ch] m-0 mb-4">
                Every send request is accepted immediately and returns a notification ID. The
                actual delivery happens in the background via pg-boss, PostgreSQL&rsquo;s job
                queue library - chosen because it keeps the queue durable in the same database as
                the rest of the application, with no extra infrastructure to run.
              </p>
              <p className="text-[18px] leading-[1.7] max-w-[64ch] m-0">
                Each channel attempt - success, failure, retry - is written to the delivery log.
                The log is what makes the system answerable: when the frontend asks "did this
                notification arrive?", the API has an honest per-channel answer, not just a
                "dispatched" status that could mean anything.
              </p>
            </section>

            <section id="p3">
              <span className="font-mono text-[11px] uppercase tracking-label text-violet-dk block mb-2">03 - Endpoints</span>
              <h2 className="font-display text-[clamp(28px,3.2vw,42px)] uppercase leading-tight m-0 mb-[14px]">The API surface</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-[13px] border-collapse">
                  <thead>
                    <tr className="border-b-2 border-wall">
                      <th className="font-mono text-[10px] uppercase tracking-label text-left py-2 pr-4 text-steel">Method</th>
                      <th className="font-mono text-[10px] uppercase tracking-label text-left py-2 pr-4 text-steel">Path</th>
                      <th className="font-mono text-[10px] uppercase tracking-label text-left py-2 text-steel">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {endpoints.map((ep) => (
                      <tr key={ep.path} className="border-b border-wall/20">
                        <td className="py-3 pr-4">
                          <span className={`font-mono text-[11px] uppercase tracking-tag border px-2 py-0.5 ${methodColor[ep.method]}`}>
                            {ep.method}
                          </span>
                        </td>
                        <td className="py-3 pr-4">
                          <code className="font-mono text-[12px]">{ep.path}</code>
                        </td>
                        <td className="py-3 text-[14px] leading-relaxed">{ep.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="p4">
              <span className="font-mono text-[11px] uppercase tracking-label text-violet-dk block mb-2">04 - The docs</span>
              <h2 className="font-display text-[clamp(28px,3.2vw,42px)] uppercase leading-tight m-0 mb-[14px]">OpenAPI 3.0</h2>
              <p className="text-[18px] leading-[1.7] max-w-[64ch] m-0 mb-4">
                The API ships with an interactive Swagger UI documenting every endpoint with its
                request schema, response shapes, error codes and authentication requirement.
                All authentication uses JWT - the docs show how to obtain a token and which
                endpoints require one.
              </p>
            </section>

            <section id="p5">
              <span className="font-mono text-[11px] uppercase tracking-label text-violet-dk block mb-2">05 - Stack & links</span>
              <h2 className="font-display text-[clamp(28px,3.2vw,42px)] uppercase leading-tight m-0 mb-[14px]">Built with</h2>
              <div className="flex gap-[10px] flex-wrap mb-6">
                {['Node.js', 'Express 5', 'PostgreSQL', 'JWT', 'pg-boss', 'Swagger / OpenAPI'].map((t) => (
                  <span key={t} className="font-mono text-[11px] uppercase tracking-[0.1em] border-2 border-wall px-[13px] py-[9px]">{t}</span>
                ))}
              </div>
              <div className="flex gap-3 flex-wrap">
                <a href="https://aiboud-iney.github.io/pulse-api/" target="_blank" rel="noopener noreferrer"
                   className="font-mono text-[11px] tracking-tag uppercase font-semibold bg-wall text-lime px-[18px] py-[14px] no-underline hover:bg-violet hover:text-white transition-colors">
                  Live docs ↗
                </a>
                <a href="https://github.com/Aiboud-iney/pulse-api" target="_blank" rel="noopener noreferrer"
                   className="font-mono text-[11px] tracking-tag uppercase border-2 border-wall text-wall px-[16px] py-[12px] no-underline hover:bg-wall hover:text-bone transition-colors">
                  GitHub ↗
                </a>
                <Link href="/work" className="font-mono text-[11px] tracking-tag uppercase border-2 border-wall/40 text-mid px-[16px] py-[12px] no-underline hover:border-wall hover:text-wall transition-colors">
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
