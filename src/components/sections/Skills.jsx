import { useState } from 'react'

const capabilityGroups = [
  {
    index: '01',
    label: 'Frontend',
    title: 'Interfaces that stay practical',
    description:
      'Responsive interfaces focused on business workflows, clarity and maintainable component structure.',
    skills: ['React.js', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Bootstrap'],
    accent: 'sky',
  },
  {
    index: '02',
    label: 'Backend & data',
    title: 'APIs, rules and persistence',
    description:
      'REST APIs, business logic, database relationships and scheduled tasks that support internal applications.',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'MySQL', 'SQL', 'Cron'],
    accent: 'emerald',
  },
  {
    index: '03',
    label: 'Mobile',
    title: 'Workflows beyond the desktop',
    description:
      'React Native extensions for faster field actions such as document scanning, search and mobile access.',
    skills: ['React Native'],
    accent: 'violet',
  },
  {
    index: '04',
    label: 'Enterprise',
    title: 'Existing systems matter too',
    description:
      'Working inside business software environments to extract, consolidate and prepare operational data.',
    skills: ['Progress 4GL', 'OpenEdge 10.2B08', 'Business Central', 'Microsoft AL'],
    accent: 'amber',
  },
  {
    index: '05',
    label: 'Web & IT',
    title: 'Development plus support',
    description:
      'Web delivery, version control, technical support and troubleshooting across software and hardware.',
    skills: ['WordPress', 'Git', 'GitHub', 'Technical Support', 'Troubleshooting'],
    accent: 'rose',
  },
]

const architectureLayers = [
  {
    key: 'ui',
    short: 'UI',
    title: 'React interface',
    tech: 'React + Tailwind',
    description:
      'Reusable components, local state and responsive screens built around the user workflow.',
  },
  {
    key: 'api',
    short: 'API',
    title: 'Frontend API service',
    tech: 'Fetch / service layer',
    description:
      'Centralized frontend calls keep components focused on presentation instead of request details.',
  },
  {
    key: 'route',
    short: 'ROUTE',
    title: 'Express routes',
    tech: 'Express.js',
    description:
      'Routes define the HTTP entry points and pass requests into the application logic.',
  },
  {
    key: 'controller',
    short: 'CTRL',
    title: 'Controllers',
    tech: 'Request coordination',
    description:
      'Controllers validate the request context and coordinate the response without carrying all business logic.',
  },
  {
    key: 'service',
    short: 'SRV',
    title: 'Services',
    tech: 'Business logic',
    description:
      'Business rules live in services so they stay reusable, testable and separated from transport concerns.',
  },
  {
    key: 'model',
    short: 'MODEL',
    title: 'Models / data access',
    tech: 'SQL + MySQL',
    description:
      'The data layer handles queries and database interactions while keeping SQL away from the UI.',
  },
]

const learning = [
  ['Python', 'Basic utility applications'],
  ['Java', 'Academic experience'],
  ['Figma', 'Basic practical use'],
  ['Data Analytics', 'Currently learning'],
]

const accentClasses = {
  sky: 'border-sky-300/15 bg-sky-400/[0.045] text-sky-300',
  emerald: 'border-emerald-300/15 bg-emerald-400/[0.045] text-emerald-300',
  violet: 'border-violet-300/15 bg-violet-400/[0.045] text-violet-300',
  amber: 'border-amber-300/15 bg-amber-400/[0.045] text-amber-300',
  rose: 'border-rose-300/15 bg-rose-400/[0.045] text-rose-300',
}

function Skills() {
  const [activeLayer, setActiveLayer] = useState(architectureLayers[0])

  return (
    <section id="skills" className="relative overflow-hidden bg-[#030816] py-24 sm:py-28">
      <div className="pointer-events-none absolute -right-36 top-36 size-[28rem] rounded-full bg-sky-400/[0.045] blur-[130px]" />
      <div className="pointer-events-none absolute -left-44 bottom-20 size-[26rem] rounded-full bg-blue-500/[0.035] blur-[130px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="section-kicker">Technical capabilities / how I work</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
              Tools are useful. Structure is what makes them scale.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
              I work mainly with the JavaScript ecosystem, but my day-to-day work also crosses mobile,
              enterprise software, databases and IT support. I prefer clear separation of concerns over
              putting everything inside one component or controller.
            </p>
          </div>

          <div className="hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] px-4 py-3 text-right lg:block">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-600">
              No percentage bars
            </p>
            <p className="mt-1 text-xs font-semibold text-slate-400">
              Real use & context instead
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {capabilityGroups.map((group) => (
            <article
              key={group.label}
              className="group relative overflow-hidden rounded-[1.5rem] border border-white/[0.07] bg-slate-950/65 p-5 transition duration-300 hover:-translate-y-1 hover:border-white/[0.13] hover:bg-slate-900/70"
            >
              <span className="absolute right-4 top-2 text-5xl font-black tracking-[-0.08em] text-white/[0.025]">
                {group.index}
              </span>

              <div className="relative">
                <span
                  className={`inline-flex rounded-lg border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] ${accentClasses[group.accent]}`}
                >
                  {group.label}
                </span>

                <h3 className="mt-4 text-base font-bold leading-6 text-slate-200">{group.title}</h3>
                <p className="mt-3 text-xs leading-6 text-slate-500">{group.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/[0.07] bg-white/[0.025] px-2.5 py-1.5 text-[10px] font-semibold text-slate-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-slate-950/65">
            <div className="border-b border-white/[0.07] p-6 sm:p-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-sky-300">
                Application architecture
              </p>
              <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                A structure I use for full-stack applications
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
                Hover or select a layer to see its responsibility. The goal is simple: keep UI,
                transport, business logic and data access from becoming one tightly coupled block.
              </p>
            </div>

            <div className="p-5 sm:p-7">
              <div className="grid gap-2 sm:grid-cols-3 xl:grid-cols-6">
                {architectureLayers.map((layer, index) => {
                  const active = activeLayer.key === layer.key

                  return (
                    <div key={layer.key} className="flex items-center gap-2 sm:block">
                      <button
                        type="button"
                        onMouseEnter={() => setActiveLayer(layer)}
                        onFocus={() => setActiveLayer(layer)}
                        onClick={() => setActiveLayer(layer)}
                        className={`architecture-node min-h-24 w-full rounded-xl border px-3 py-4 text-left transition duration-250 sm:text-center ${
                          active
                            ? 'border-sky-300/30 bg-sky-400/[0.08] shadow-[0_10px_35px_rgba(56,189,248,0.06)]'
                            : 'border-white/[0.07] bg-white/[0.02] hover:border-sky-300/15 hover:bg-sky-400/[0.035]'
                        }`}
                      >
                        <span
                          className={`text-[9px] font-black uppercase tracking-[0.15em] ${
                            active ? 'text-sky-300' : 'text-slate-600'
                          }`}
                        >
                          {layer.short}
                        </span>
                        <span className="mt-2 block text-xs font-semibold leading-5 text-slate-300">
                          {layer.tech}
                        </span>
                      </button>

                      {index < architectureLayers.length - 1 && (
                        <span className="shrink-0 text-sky-300/30 sm:my-2 sm:block sm:text-center sm:rotate-90 xl:rotate-0">
                          →
                        </span>
                      )}
                    </div>
                  )
                })}
              </div>

              <div className="mt-6 rounded-2xl border border-sky-300/10 bg-sky-400/[0.035] p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-sky-300/70">
                      Active layer
                    </p>
                    <h4 className="mt-1 text-lg font-bold text-slate-200">{activeLayer.title}</h4>
                  </div>
                  <span className="rounded-lg border border-white/[0.07] bg-slate-950/50 px-3 py-1.5 text-[10px] font-semibold text-slate-500">
                    {activeLayer.tech}
                  </span>
                </div>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400">{activeLayer.description}</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[1.75rem] border border-white/[0.08] bg-slate-950/65 p-6 sm:p-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-300/80">
                Engineering habits
              </p>

              <div className="mt-5 space-y-4">
                {[
                  ['Debug from the cause', 'Trace the problem instead of patching only the visible symptom.'],
                  ['Keep responsibilities clear', 'Separate UI, API, business logic and data access.'],
                  ['Use references intelligently', 'Documentation, existing code and AI help with syntax; understanding stays the goal.'],
                  ['Build for the user', 'A technically correct feature still needs to fit the actual workflow.'],
                ].map(([title, text], index) => (
                  <div key={title} className="flex gap-4">
                    <span className="grid size-7 shrink-0 place-items-center rounded-lg border border-emerald-300/10 bg-emerald-400/[0.045] text-[9px] font-black text-emerald-300">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-300">{title}</p>
                      <p className="mt-1 text-xs leading-5 text-slate-500">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/[0.08] bg-slate-950/65 p-6 sm:p-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-600">
                Additional / growing
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {learning.map(([name, level]) => (
                  <div
                    key={name}
                    className="flex items-center justify-between gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3"
                  >
                    <span className="text-xs font-semibold text-slate-300">{name}</span>
                    <span className="text-right text-[10px] text-slate-600">{level}</span>
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

export default Skills
