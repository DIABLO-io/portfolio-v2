const stack = ['React.js', 'JavaScript', 'Node.js', 'Express.js', 'MySQL']

const architecture = [
  ['UI', 'React + Tailwind'],
  ['API', 'Node + Express'],
  ['Data', 'MySQL / ERP'],
]

function Hero() {
  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty('--spotlight-x', `${event.clientX - rect.left}px`)
    event.currentTarget.style.setProperty('--spotlight-y', `${event.clientY - rect.top}px`)
  }

  return (
    <section
      id="home"
      onPointerMove={handlePointerMove}
      className="hero-spotlight relative isolate min-h-screen overflow-hidden bg-slate-950 pt-28 text-white sm:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(148,163,184,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.055)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />

      <div className="pointer-events-none absolute left-[8%] top-40 -z-10 size-72 rounded-full bg-sky-400/10 blur-[110px] ambient-float" />
      <div className="pointer-events-none absolute right-[8%] top-32 -z-10 size-80 rounded-full bg-blue-500/10 blur-[120px] ambient-float-delayed" />

      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-14 px-5 pb-16 sm:px-8 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16 lg:px-10">
        <div className="relative z-10 max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/[0.07] px-3.5 py-2 text-xs font-semibold tracking-wide text-emerald-200">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-300 opacity-50" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-300" />
            </span>
            Open to international & relocation opportunities
          </div>

          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-sky-300">
            Full-Stack Developer · Business Applications
          </p>

          <h1 className="max-w-4xl text-4xl font-black leading-[1.04] tracking-[-0.045em] text-white sm:text-5xl lg:text-7xl">
            I turn operational problems into{' '}
            <span className="hero-gradient-text">useful digital products.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            I'm Ayoub Boulhada, a full-stack developer and IT professional in Casablanca.
            I build web, mobile and enterprise solutions with a strong focus on practical
            business workflows, debugging and maintainable architecture.
          </p>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {stack.map((technology) => (
              <span
                key={technology}
                className="rounded-lg border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs font-medium text-slate-300"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-sky-300 px-5 py-3.5 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-200 hover:shadow-[0_18px_50px_rgba(125,211,252,0.18)]"
            >
              Explore my work
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>

            <a
              href="mailto:boulhadaayoub@gmail.com"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.035] px-5 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.07]"
            >
              Contact me
            </a>

            <a
              href="https://www.linkedin.com/in/boulhada-ayoub"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl px-4 py-3.5 text-sm font-semibold text-slate-400 transition hover:text-white"
            >
              LinkedIn ↗
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-white/10 pt-6 text-xs text-slate-500">
            <span>Casablanca, Morocco</span>
            <span className="hidden size-1 rounded-full bg-slate-700 sm:block" />
            <span>Software · ERP · IT</span>
            <span className="hidden size-1 rounded-full bg-slate-700 sm:block" />
            <span>Open to Canada · USA · Europe</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[520px] lg:mx-0 lg:ml-auto">
          <div className="absolute -inset-4 -z-10 rounded-[2.25rem] bg-gradient-to-br from-sky-400/15 via-transparent to-blue-500/10 blur-2xl" />

          <div className="hero-card relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/65 p-5 shadow-[0_30px_100px_rgba(2,6,23,0.48)] backdrop-blur-xl sm:p-6">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Developer profile
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-200">
                  Building useful systems, end to end
                </p>
              </div>
              <div className="flex gap-1.5">
                <span className="size-2.5 rounded-full bg-rose-300/70" />
                <span className="size-2.5 rounded-full bg-amber-300/70" />
                <span className="size-2.5 rounded-full bg-emerald-300/70" />
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-slate-950/85 p-5 sm:p-6">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/70 to-transparent" />

              <div className="flex items-center gap-4">
                <div className="relative grid size-20 shrink-0 place-items-center overflow-hidden rounded-2xl border border-sky-200/20 bg-gradient-to-br from-sky-400/20 to-blue-600/10 text-2xl font-black text-sky-200">
                  <span className="absolute inset-0 grid place-items-center">AB</span>
                  <img
                    src="/profile.png"
                    alt="Ayoub Boulhada"
                    className="relative z-10 size-full object-cover"
                    onError={(event) => {
                      event.currentTarget.style.display = 'none'
                    }}
                  />
                </div>

                <div className="min-w-0">
                  <p className="truncate text-lg font-bold text-white">Ayoub Boulhada</p>
                  <p className="mt-1 text-sm text-slate-400">Full-Stack Developer / IT Specialist</p>
                  <p className="mt-2 text-xs font-medium text-sky-300">ISMAWOOD · Aug 2025 — Present</p>
                </div>
              </div>

              <div className="mt-7 grid gap-3">
                {architecture.map(([label, value], index) => (
                  <div
                    key={label}
                    className="group relative flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-3 transition hover:border-sky-300/20 hover:bg-sky-400/[0.045]"
                  >
                    <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-sky-400/10 text-[10px] font-black tracking-wider text-sky-300">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-600">
                        {label}
                      </p>
                      <p className="mt-0.5 text-sm font-medium text-slate-200">{value}</p>
                    </div>
                    <span className="ml-auto text-slate-700 transition group-hover:translate-x-1 group-hover:text-sky-300">
                      →
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-xl border border-emerald-300/10 bg-emerald-400/[0.04] px-4 py-3">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs text-slate-400">Current focus</span>
                  <span className="text-xs font-semibold text-emerald-200">
                    Business software & enterprise data
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2">
              {[
                ['Web', 'React'],
                ['Mobile', 'React Native'],
                ['Enterprise', 'OpenEdge + AL'],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-xl border border-white/[0.07] bg-white/[0.025] px-3 py-3"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-600">
                    {label}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-slate-300">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute -right-3 top-20 hidden rounded-xl border border-white/10 bg-slate-900/85 px-3 py-2 shadow-xl backdrop-blur-lg sm:block lg:-right-8">
            <p className="text-[10px] uppercase tracking-wider text-slate-500">Strength</p>
            <p className="mt-0.5 text-xs font-semibold text-sky-200">Debugging & problem solving</p>
          </div>

          <div className="absolute -left-3 bottom-24 hidden rounded-xl border border-white/10 bg-slate-900/85 px-3 py-2 shadow-xl backdrop-blur-lg sm:block lg:-left-8">
            <p className="text-[10px] uppercase tracking-wider text-slate-500">Background</p>
            <p className="mt-0.5 text-xs font-semibold text-sky-200">Software + industrial systems</p>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600 transition hover:text-slate-300 lg:flex"
      >
        Scroll to explore
        <span className="scroll-dot inline-block size-1.5 rounded-full bg-sky-300" />
      </a>
    </section>
  )
}

export default Hero
