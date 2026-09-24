const roles = [
  {
    period: 'Aug 2025 — Present',
    title: 'Full-Stack Developer / IT Specialist',
    company: 'ISMAWOOD',
    location: 'Casablanca, Morocco',
    current: true,
    summary:
      'Building and improving internal business software while working across web, mobile, enterprise systems and day-to-day IT support.',
    highlights: [
      {
        title: 'Internal business applications',
        text: 'Built a document-management platform and an HR leave / employee-exit system used inside the company.',
      },
      {
        title: 'Mobile & automation',
        text: 'Extended workflows with React Native and automated recurring leave calculations with scheduled backend jobs.',
      },
      {
        title: 'Enterprise data',
        text: 'Develop solutions with Progress OpenEdge and Microsoft Dynamics 365 Business Central / AL for extraction, consolidation and reporting.',
      },
      {
        title: 'Technical support & mentoring',
        text: 'Support users and hardware/software issues while mentoring three interns across development and data-analysis work.',
      },
    ],
    stack: [
      'React.js',
      'JavaScript',
      'Node.js',
      'Express.js',
      'MySQL',
      'React Native',
      'OpenEdge',
      'Business Central',
    ],
  },
  {
    period: '2024',
    title: 'Census Enumerator',
    company: 'Haut-Commissariat au Plan',
    location: 'Morocco',
    current: false,
    summary:
      'Managed a large assigned geographic zone independently during Morocco’s population and housing census.',
    highlights: [
      {
        title: '≈ 1,000 households',
        text: 'Conducted door-to-door data collection across an assigned zone while working as part of a four-person field team.',
      },
      {
        title: 'Digital field collection',
        text: 'Captured and validated household information using a tablet-based census application.',
      },
    ],
    stack: ['Field operations', 'Digital data collection', 'Autonomy', 'Data quality'],
  },
]

function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden bg-[#030816] py-24 sm:py-28">
      <div className="pointer-events-none absolute right-[-12rem] top-40 size-[30rem] rounded-full bg-blue-500/[0.055] blur-[140px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <p className="section-kicker">Experience / real-world work</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
            Software that has to work outside the demo.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
            My professional work sits close to real operations: archives, HR rules, enterprise data,
            users, hardware and reporting. That forces the code to be practical, maintainable and
            understandable by more than just the developer who wrote it.
          </p>
        </div>

        <div className="relative mt-14">
          <div className="absolute bottom-0 left-[18px] top-0 hidden w-px bg-gradient-to-b from-sky-300/40 via-white/10 to-transparent sm:block" />

          <div className="space-y-8">
            {roles.map((role, roleIndex) => (
              <article
                key={`${role.company}-${role.period}`}
                className="relative sm:pl-16"
              >
                <div className="absolute left-0 top-8 z-10 hidden size-9 place-items-center rounded-full border border-sky-300/25 bg-[#030816] sm:grid">
                  <span className={`size-2 rounded-full ${
                    role.current ? 'bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.65)]' : 'bg-sky-300'
                  }`} />
                </div>

                <div className="overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-slate-950/55 shadow-[0_24px_70px_rgba(2,6,23,0.22)]">
                  <div className="grid gap-5 border-b border-white/[0.07] p-6 sm:p-7 lg:grid-cols-[1fr_auto] lg:items-start">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="rounded-full border border-sky-300/15 bg-sky-400/[0.06] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-sky-300">
                          {role.period}
                        </span>

                        {role.current && (
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300/15 bg-emerald-400/[0.05] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-emerald-300">
                            <span className="size-1.5 rounded-full bg-emerald-300" />
                            Current
                          </span>
                        )}
                      </div>

                      <h3 className="mt-4 text-xl font-bold tracking-tight text-white sm:text-2xl">
                        {role.title}
                      </h3>

                      <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-sm">
                        <span className="font-semibold text-slate-300">{role.company}</span>
                        <span className="text-slate-700">/</span>
                        <span className="text-slate-500">{role.location}</span>
                      </div>

                      <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">{role.summary}</p>
                    </div>

                    <span className="text-5xl font-black tracking-[-0.08em] text-white/[0.025] sm:text-6xl">
                      0{roleIndex + 1}
                    </span>
                  </div>

                  <div className={`grid gap-px bg-white/[0.06] ${
                    role.highlights.length > 2 ? 'md:grid-cols-2' : 'sm:grid-cols-2'
                  }`}>
                    {role.highlights.map((item) => (
                      <div key={item.title} className="bg-[#050b19] p-6 transition hover:bg-slate-900/70">
                        <p className="text-sm font-bold text-slate-200">{item.title}</p>
                        <p className="mt-2 text-sm leading-6 text-slate-500">{item.text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 border-t border-white/[0.07] bg-slate-900/30 px-6 py-4">
                    {role.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-white/[0.07] bg-white/[0.025] px-2.5 py-1.5 text-[10px] font-semibold text-slate-500"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
