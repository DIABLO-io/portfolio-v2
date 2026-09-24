import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Education from './components/sections/Education'
import Contact from './components/sections/Contact'
import Reveal from './components/ui/Reveal'

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />

      <Reveal>
        <About />
      </Reveal>

      <Reveal delay={40}>
        <Experience />
      </Reveal>

      <Reveal delay={60}>
        <Projects />
      </Reveal>

      <Reveal delay={60}>
        <Skills />
      </Reveal>

      <Reveal delay={60}>
        <Education />
      </Reveal>

      <Reveal delay={60}>
        <Contact />
      </Reveal>
    </main>
  )
}

export default App
