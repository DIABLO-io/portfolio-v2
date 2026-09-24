import { useState } from 'react'

const links = [
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/boulhada-ayoub',
    href: 'https://www.linkedin.com/in/boulhada-ayoub',
  },
  {
    label: 'GitHub',
    value: 'github.com/DIABLO-io',
    href: 'https://github.com/DIABLO-io',
  },
]

function Contact() {
  const baseUrl = import.meta.env.BASE_URL
  const [copied, setCopied] = useState(false)
  const email = 'boulhadaayoub@gmail.com'

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-[#020617]">
      <div className="pointer-events-none absolute left-1/2 top-20 size-[34rem] -translate-x-1/2 rounded-full bg-sky-400/[0.07] blur-[150px]" />

      <div className="mx-auto max-w-7xl px-5 pb-10 pt-24 sm:px-8 sm:pt-28 lg:px-10">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-slate-950/75 px-6 py-10 shadow-[0_30px_100px_rgba(2,6,23,0.35)] sm:px-10 sm:py-12 lg:px-14 lg:py-14">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/60 to-transparent" />
          <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-sky-400/[0.06] blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="section-kicker">Contact / next step</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
                Let&apos;s build something useful.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400">
                I&apos;m open to full-stack, software, business-application, ERP and IT opportunities,
                including international roles and relocation across Canada, the United States and Europe.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center justify-center rounded-xl bg-sky-300 px-5 py-3.5 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-200 hover:shadow-[0_18px_50px_rgba(125,211,252,0.16)]"
                >
                  Send me an email
                </a>

                <a
                  href={`${baseUrl}Ayoub_Boulhada_Resume.pdf`}
                  download
                  className="inline-flex items-center justify-center rounded-xl border border-white/[0.12] bg-white/[0.03] px-5 py-3.5 text-sm font-semibold text-slate-200 transition hover:-translate-y-0.5 hover:border-white/[0.2] hover:bg-white/[0.06]"
                >
                  Download CV
                </a>

                <button
                  type="button"
                  onClick={copyEmail}
                  aria-live="polite"
                  className="inline-flex items-center justify-center rounded-xl px-4 py-3.5 text-sm font-semibold text-slate-400 transition hover:text-white"
                >
                  {copied ? 'Email copied ✓' : 'Copy email'}
                </button>
              </div>
            </div>

            <div className="grid gap-3">
              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-slate-600">
                  Direct contact
                </p>
                <a
                  href={`mailto:${email}`}
                  className="mt-2 block break-all text-base font-semibold text-slate-200 transition hover:text-sky-300"
                >
                  {email}
                </a>
              </div>

              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition hover:border-sky-300/15 hover:bg-sky-400/[0.035]"
                >
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-slate-600">
                      {link.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-300">{link.value}</p>
                  </div>
                  <span className="text-slate-700 transition group-hover:translate-x-1 group-hover:text-sky-300">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <footer className="flex flex-col gap-3 border-t border-white/[0.06] py-7 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Ayoub Boulhada. Built with React, Vite & Tailwind CSS.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a href="#home" className="transition hover:text-slate-300">
              Back to top
            </a>
            <span>Casablanca, Morocco</span>
            <span>Open to relocation</span>
          </div>
        </footer>
      </div>
    </section>
  )
}

export default Contact
