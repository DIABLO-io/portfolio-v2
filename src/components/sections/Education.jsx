const education = [
  {
    year: '2024 — 2025',
    degree: 'Licence en Sciences et Techniques',
    field: 'Génie Informatique',
    school: 'Faculté des Sciences et Techniques de Settat',
    note: 'Software development, object-oriented programming, web technologies and databases.',
    accent: 'sky',
  },
  {
    year: '2021 — 2023',
    degree: "Diplôme d’Études Universitaires en Sciences et Techniques",
    field: 'Génie Électrique & Génie Mécanique (GEGM)',
    school: 'Faculté des Sciences et Techniques de Settat',
    note: 'A multidisciplinary base across electrical, mechanical and industrial technologies.',
    accent: 'emerald',
  },
  {
    year: '2020 — 2021',
    degree: 'Baccalauréat',
    field: 'Sciences et Technologies Mécaniques',
    school: 'Lycée Technique Ibn Soulaymane Arrassmouki',
    note: 'Mechanical systems, manufacturing technologies and technical drawing.',
    accent: 'amber',
  },
]

const languages = [
  ['Arabic', 'Native'],
  ['Amazigh', 'Native'],
  ['English', 'Working proficiency'],
  ['French', 'A2 · ongoing training'],
]

const accentClasses = {
  sky: 'border-sky-300/20 bg-sky-400/[0.055] text-sky-300',
  emerald: 'border-emerald-300/20 bg-emerald-400/[0.055] text-emerald-300',
  amber: 'border-amber-300/20 bg-amber-400/[0.055] text-amber-300',
}

function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden border-t border-white/[0.06] bg-slate-950 py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute left-[15%] top-24 size-[25rem] rounded-full bg-sky-400/[0.04] blur-[130px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <p className="section-kicker">Education / multidisciplinary background</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
            Software came last. Systems thinking came first.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
            My path moved from mechanical technologies into electrical/mechanical engineering and
            then computer engineering. That gives me a useful bridge between software and the
            operational environments where it has to work.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-4">
            {education.map((item, index) => (
              <article
                key={item.degree + item.field}
                className="group relative overflow-hidden rounded-[1.6rem] border border-white/[0.08] bg-[#050b19] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/[0.13] sm:p-7"
              >
                <div className="absolute right-5 top-3 text-6xl font-black tracking-[-0.08em] text-white/[0.025]">
                  0{index + 1}
                </div>

                <div className="relative">
                  <span
                    className={`inline-flex rounded-lg border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] ${accentClasses[item.accent]}`}
                  >
                    {item.year}
                  </span>

                  <h3 className="mt-4 text-xl font-bold tracking-tight text-slate-100">{item.degree}</h3>
                  <p className="mt-1 text-sm font-semibold text-sky-300">{item.field}</p>
                  <p className="mt-3 text-sm text-slate-500">{item.school}</p>

                  <p className="mt-5 max-w-3xl border-t border-white/[0.06] pt-4 text-sm leading-7 text-slate-400">
                    {item.note}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="grid content-start gap-4">
            <div className="rounded-[1.6rem] border border-white/[0.08] bg-slate-950/65 p-6 sm:p-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-sky-300">
                Languages
              </p>
              <h3 className="mt-2 text-xl font-bold text-white">Communication across contexts</h3>

              <div className="mt-6 space-y-3">
                {languages.map(([language, level]) => (
                  <div
                    key={language}
                    className="flex items-center justify-between gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3"
                  >
                    <span className="text-sm font-semibold text-slate-300">{language}</span>
                    <span className="text-right text-[11px] text-slate-500">{level}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-xl border border-sky-300/10 bg-sky-400/[0.035] px-4 py-3">
                <p className="text-xs leading-6 text-slate-500">
                  French training has progressed through A1.3, A2.1 and A2.2, with A2.3 planned next.
                </p>
              </div>
            </div>

            <div className="rounded-[1.6rem] border border-emerald-300/10 bg-emerald-400/[0.035] p-6 sm:p-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-300/80">
                What this mix gives me
              </p>

              <div className="mt-5 space-y-4">
                {[
                  'Comfort with software and industrial vocabulary.',
                  'A broader view of business processes and technical constraints.',
                  'The ability to move between application logic, users, data and physical systems.',
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-emerald-300/70" />
                    <p className="text-sm leading-6 text-slate-400">{item}</p>
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

export default Education
