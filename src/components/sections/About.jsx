const strengths = [
  {
    number: '01',
    title: 'Product-minded development',
    text: 'I start from the operational problem, then shape the interface, API and data model around the people who will actually use it.',
    detail: 'React · Node.js · MySQL',
  },
  {
    number: '02',
    title: 'Enterprise adaptability',
    text: 'I am comfortable moving beyond the modern web stack into existing business systems, legacy environments and reporting workflows.',
    detail: 'OpenEdge · Business Central · AL',
  },
  {
    number: '03',
    title: 'Debugging & support',
    text: 'I enjoy tracing problems across software, hardware and data layers until the root cause is clear and the solution is reliable.',
    detail: 'Troubleshooting · IT · Mentoring',
  },
]

const journey = [
  ['2021', 'Mechanical technologies', 'Technical baccalaureate'],
  ['2023', 'Electrical + mechanical engineering', 'GEGM'],
  ['2025', 'Computer engineering', 'Licence'],
  ['Now', 'Business software', 'ISMAWOOD'],
]

function About() {
  return (
    <section id="about" className="relative overflow-hidden border-t border-white/[0.06] bg-slate-950 py-24 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-300/25 to-transparent" />
      <div className="pointer-events-none absolute -left-32 top-28 size-80 rounded-full bg-sky-400/[0.055] blur-[110px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="section-kicker">About / what I bring</p>
            <h2 className="mt-4 max-w-xl text-3xl font-black tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
              More than a stack of technologies.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
              My background crosses software, IT, electrical engineering and mechanical systems.
              That mix helps me understand both the application layer and the business or industrial
              context around it.
            </p>

            <p className="mt-4 max-w-xl text-base leading-8 text-slate-400">
              At ISMAWOOD, I build internal tools from scratch, extend enterprise systems, support
              users and hardware, and help interns move through technical problems. I care about
              useful software, readable architecture and solving the real issue behind a request.
            </p>

            <div className="mt-9 grid grid-cols-3 gap-3">
              {[
                ['2+', 'Core internal systems'],
                ['3', 'Interns mentored'],
                ['1,000', 'Census households'],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4"
                >
                  <p className="text-2xl font-black tracking-tight text-sky-300 sm:text-3xl">{value}</p>
                  <p className="mt-1 text-[11px] leading-4 text-slate-500">{label}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-white/[0.07] bg-slate-900/40 p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                Technical journey
              </p>

              <div className="mt-5 space-y-4">
                {journey.map(([year, title, subtitle], index) => (
                  <div key={year} className="relative flex gap-4">
                    {index !== journey.length - 1 && (
                      <span className="absolute left-[18px] top-8 h-[calc(100%+0.5rem)] w-px bg-white/[0.08]" />
                    )}

                    <span className="relative z-10 grid size-9 shrink-0 place-items-center rounded-full border border-sky-300/20 bg-slate-950 text-[10px] font-bold text-sky-300">
                      {index + 1}
                    </span>

                    <div className="pt-0.5">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <p className="text-sm font-semibold text-slate-200">{title}</p>
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-600">
                          {year}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-slate-500">{subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid content-start gap-4">
            {strengths.map((item) => (
              <article
                key={item.number}
                className="group relative overflow-hidden rounded-[1.6rem] border border-white/[0.08] bg-slate-900/45 p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-300/20 hover:bg-slate-900/65 sm:p-7"
              >
                <div className="absolute right-5 top-4 text-5xl font-black tracking-[-0.08em] text-white/[0.025] transition group-hover:text-sky-300/[0.045] sm:text-7xl">
                  {item.number}
                </div>

                <div className="relative">
                  <span className="inline-flex rounded-lg border border-sky-300/15 bg-sky-400/[0.06] px-2.5 py-1 text-[10px] font-bold tracking-wider text-sky-300">
                    {item.number}
                  </span>
                  <h3 className="mt-4 text-xl font-bold tracking-tight text-white">{item.title}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">{item.text}</p>

                  <div className="mt-5 flex items-center gap-3 border-t border-white/[0.06] pt-4">
                    <span className="size-1.5 rounded-full bg-sky-300" />
                    <p className="text-xs font-medium text-slate-500">{item.detail}</p>
                  </div>
                </div>
              </article>
            ))}

            <div className="relative overflow-hidden rounded-[1.6rem] border border-emerald-300/10 bg-emerald-400/[0.035] p-6 sm:p-7">
              <div className="absolute -right-16 -top-16 size-40 rounded-full bg-emerald-300/[0.055] blur-3xl" />
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-300/80">
                How I approach a problem
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-2 text-xs font-semibold">
                {['Understand', 'Model', 'Build', 'Test', 'Improve'].map((step, index) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="rounded-lg border border-white/[0.08] bg-slate-950/45 px-3 py-2 text-slate-300">
                      {step}
                    </span>
                    {index < 4 && <span className="text-emerald-300/40">→</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
