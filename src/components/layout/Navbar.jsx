import { useEffect, useState } from 'react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18)
    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-slate-950/80 shadow-[0_10px_40px_rgba(2,6,23,0.35)] backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a
          href="#home"
          className="group inline-flex items-center gap-3"
          aria-label="Ayoub Boulhada — home"
        >
          <span className="grid size-10 place-items-center rounded-xl border border-sky-300/20 bg-sky-400/10 text-sm font-black tracking-tight text-sky-300 transition group-hover:border-sky-300/40 group-hover:bg-sky-400/15">
            AB
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-semibold text-white">Ayoub Boulhada</span>
            <span className="block text-xs text-slate-400">Full-Stack Developer</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-2.5 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </a>
          ))}

          <a
            href="mailto:boulhadaayoub@gmail.com"
            className="ml-2 rounded-xl border border-sky-300/30 bg-sky-400/10 px-4 py-2.5 text-sm font-semibold text-sky-200 transition hover:border-sky-300/50 hover:bg-sky-400/15"
          >
            Let's talk
          </a>
        </div>

        <button
          type="button"
          className="relative grid size-11 place-items-center rounded-xl border border-white/10 bg-white/[0.04] md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          <span
            className={`absolute h-0.5 w-5 rounded bg-white transition duration-300 ${
              open ? 'rotate-45' : '-translate-y-1.5'
            }`}
          />
          <span
            className={`absolute h-0.5 w-5 rounded bg-white transition duration-300 ${
              open ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`absolute h-0.5 w-5 rounded bg-white transition duration-300 ${
              open ? '-rotate-45' : 'translate-y-1.5'
            }`}
          />
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          open ? 'max-h-[28rem] opacity-100' : 'max-h-0 border-transparent opacity-0'
        }`}
      >
        <div className="mx-auto grid max-w-7xl gap-1 px-5 py-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Navbar
