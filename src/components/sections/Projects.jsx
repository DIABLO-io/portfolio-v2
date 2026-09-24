import { useState } from 'react'

const projects = [
  {
    id: 'ged',
    index: '01',
    eyebrow: 'Document management / web + mobile',
    title: 'Electronic Document Management System',
    shortTitle: 'GED',
    status: 'In use internally',
    statusTone: 'emerald',
    description:
      'A digital archive designed to reduce the time spent searching physical company records and make document capture, classification and retrieval easier.',
    problem: [
      'Physical documents required manual archive searches.',
      'Scanning meant moving between scanner, PC and upload workflow.',
      'Different document types needed a flexible classification structure.',
    ],
    solution: [
      'Configurable categories, subcategories, services and document/profile types.',
      'Search and filtering for faster document retrieval.',
      'React Native extension for scan → archive → search directly from a phone.',
    ],
    stack: ['React.js', 'JavaScript', 'Node.js', 'Express.js', 'MySQL', 'Tailwind CSS', 'React Native'],
    flow: ['Physical document', 'Scan / upload', 'Classification', 'REST API', 'Digital archive', 'Search'],
    result:
      'The company now has an internal workflow for centralizing archived documents instead of relying only on manual physical searches.',
  },
  {
    id: 'hr',
    index: '02',
    eyebrow: 'HR operations / rules + automation',
    title: 'Employee Leave & Exit Management',
    shortTitle: 'HR System',
    status: 'Web in production · mobile in testing',
    statusTone: 'sky',
    description:
      'An internal HR application that captures employee leave/exit requests and applies recurring business rules automatically.',
    problem: [
      'Requests were handled manually by HR.',
      'Leave balances and seniority-based entitlements required recurring checks.',
      'The process needed role-based access and consistent calculations.',
    ],
    solution: [
      'Role-based internal workflow used by the HR department.',
      'Automated leave-balance and seniority-leave calculations.',
      'Daily midnight Cron checks for monthly/yearly rule updates, plus a React Native extension under testing.',
    ],
    stack: ['React.js', 'JavaScript', 'Node.js', 'Express.js', 'MySQL', 'Cron', 'React Native'],
    flow: ['HR request', 'Role checks', 'Business rules', 'Calculations', 'Nightly Cron', 'Updated balances'],
    result:
      'The web application is actively used by HR while the mobile extension is being validated.',
  },
]

const secondaryWork = [
  {
    label: 'Progress OpenEdge',
    title: 'Enterprise data preparation',
    text: 'Pages, models and Progress 4GL scripts on OpenEdge 10.2B08 for extracting and structuring data for analytics.',
  },
  {
    label: 'Business Central / AL',
    title: 'Consolidated reporting data',
    text: 'Custom AL work that brings data from multiple Business Central tables into a consolidated structure for reporting and analysis.',
  },
  {
    label: 'Python utility',
    title: 'Drag / drop resize tool',
    text: 'A small desktop utility built as a learning project, using Python with AI-assisted development where needed.',
  },
]

function StatusBadge({ tone, children }) {
  const toneClasses =
    tone === 'emerald'
      ? 'border-emerald-300/15 bg-emerald-400/[0.06] text-emerald-200'
      : 'border-sky-300/15 bg-sky-400/[0.06] text-sky-200'

  return (
    <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.13em] ${toneClasses}`}>
      <span className={`size-1.5 rounded-full ${tone === 'emerald' ? 'bg-emerald-300' : 'bg-sky-300'}`} />
      {children}
    </span>
  )
}

function ArchitectureFlow({ items }) {
  return (
    <div className="grid gap-2 sm:grid-cols-3 xl:grid-cols-6">
      {items.map((item, index) => (
        <div key={item} className="flex items-center gap-2 sm:block">
          <div className="flex min-h-16 flex-1 items-center justify-center rounded-xl border border-white/[0.07] bg-slate-950/65 px-3 py-3 text-center text-[11px] font-semibold leading-4 text-slate-300">
            {item}
          </div>
          {index < items.length - 1 && (
            <span className="shrink-0 text-sky-300/35 sm:my-1 sm:block sm:text-center sm:rotate-90 xl:rotate-0">
              →
            </span>
          )}
        </div>
      ))}
    </div>
  )
}

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false)

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty('--project-x', `${event.clientX - rect.left}px`)
    event.currentTarget.style.setProperty('--project-y', `${event.clientY - rect.top}px`)
  }

  return (
    <article
      onPointerMove={handlePointerMove}
      className="project-spotlight group relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-slate-950/70 shadow-[0_26px_90px_rgba(2,6,23,0.28)]"
    >
      <div className="relative z-10 grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="border-b border-white/[0.07] p-6 sm:p-8 lg:border-b-0 lg:border-r">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="text-5xl font-black tracking-[-0.08em] text-white/[0.045] sm:text-6xl">
              {project.index}
            </span>
            <StatusBadge tone={project.statusTone}>{project.status}</StatusBadge>
          </div>

          <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.18em] text-sky-300">
            {project.eyebrow}
          </p>
          <h3 className="mt-3 max-w-xl text-2xl font-black tracking-[-0.035em] text-white sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">{project.description}</p>

          <div className="mt-7 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-lg border border-white/[0.07] bg-white/[0.025] px-2.5 py-1.5 text-[10px] font-semibold text-slate-500 transition group-hover:border-sky-300/10 group-hover:text-slate-400"
              >
                {item}
              </span>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setExpanded((current) => !current)}
            className="mt-8 inline-flex items-center gap-2 rounded-xl border border-sky-300/20 bg-sky-400/[0.07] px-4 py-3 text-sm font-bold text-sky-200 transition hover:-translate-y-0.5 hover:border-sky-300/35 hover:bg-sky-400/[0.11]"
            aria-expanded={expanded}
          >
            {expanded ? 'Close case study' : 'Explore case study'}
            <span className={`transition-transform duration-300 ${expanded ? 'rotate-90' : ''}`}>→</span>
          </button>
        </div>

        <div className="relative overflow-hidden bg-[#050b19] p-6 sm:p-8">
          <div className="absolute right-[-5rem] top-[-5rem] size-56 rounded-full bg-sky-400/[0.055] blur-3xl" />

          <div className="relative">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-600">
                  System flow
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-300">
                  {project.shortTitle} architecture snapshot
                </p>
              </div>
              <span className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-2.5 py-1 text-[10px] font-semibold text-slate-600">
                sanitized view
              </span>
            </div>

            <div className="mt-6">
              <ArchitectureFlow items={project.flow} />
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-rose-300/10 bg-rose-400/[0.025] p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-rose-200/70">
                  Problem
                </p>
                <p className="mt-2 text-xs leading-5 text-slate-500">{project.problem[0]}</p>
              </div>
              <div className="rounded-2xl border border-emerald-300/10 bg-emerald-400/[0.025] p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-200/70">
                  Outcome
                </p>
                <p className="mt-2 text-xs leading-5 text-slate-500">{project.result}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`relative z-10 grid overflow-hidden transition-[grid-template-rows,opacity] duration-500 ${
          expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="min-h-0">
          <div className="grid gap-px border-t border-white/[0.07] bg-white/[0.06] md:grid-cols-2">
            <div className="bg-[#050b19] p-6 sm:p-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-rose-200/70">
                What needed solving
              </p>
              <div className="mt-5 space-y-3">
                {project.problem.map((item) => (
                  <div key={item} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-rose-300/60" />
                    <p className="text-sm leading-6 text-slate-400">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#050b19] p-6 sm:p-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-200/70">
                What I built
              </p>
              <div className="mt-5 space-y-3">
                {project.solution.map((item) => (
                  <div key={item} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-emerald-300/60" />
                    <p className="text-sm leading-6 text-slate-400">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/[0.07] bg-slate-900/40 px-6 py-5 sm:px-8">
            <p className="text-xs leading-6 text-slate-500">
              Company information shown here is intentionally high-level. Internal data, source code,
              business records and sensitive implementation details are not exposed.
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}

function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden border-t border-white/[0.06] bg-slate-950 py-24 sm:py-28">
      <div className="pointer-events-none absolute left-[20%] top-40 size-[26rem] rounded-full bg-sky-400/[0.045] blur-[130px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="section-kicker">Featured projects / case studies</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
              The problem matters as much as the code.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
              These projects came from real internal needs. The case studies focus on the workflow,
              architecture and business logic rather than exposing confidential company material.
            </p>
          </div>

          <div className="hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] px-4 py-3 text-right lg:block">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-600">Approach</p>
            <p className="mt-1 text-xs font-semibold text-slate-400">Problem → system → result</p>
          </div>
        </div>

        <div className="mt-14 space-y-7">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-16">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-600">
                Other technical work
              </p>
              <h3 className="mt-2 text-xl font-bold text-slate-200">Beyond the main web stack</h3>
            </div>
            <span className="hidden text-xs text-slate-700 sm:block">Enterprise · data · utilities</span>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {secondaryWork.map((item) => (
              <article
                key={item.label}
                className="rounded-2xl border border-white/[0.07] bg-[#050b19] p-5 transition duration-300 hover:-translate-y-1 hover:border-sky-300/15 hover:bg-slate-900/65"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-sky-300/70">
                  {item.label}
                </p>
                <h4 className="mt-3 text-base font-bold text-slate-200">{item.title}</h4>
                <p className="mt-3 text-sm leading-6 text-slate-500">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
