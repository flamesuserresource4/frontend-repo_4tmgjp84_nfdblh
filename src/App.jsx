import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'
import BackgroundFX from './components/BackgroundFX'
import ScrollReveal from './components/ScrollReveal'
import Marquee from './components/Marquee'
import Achievements from './components/Achievements'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-neutral-950 dark:text-neutral-100">
      <BackgroundFX />
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />

        <div className="py-4">
          <Marquee
            items={[
              'Interactive',
              'Spline 3D',
              'Framer Motion',
              'Playful UX',
              'Brand Systems',
              'Web Animations',
              'Prototype → Ship',
            ]}
            speed={36}
          />
        </div>

        <Section id="about" eyebrow="About" title="Designer focused on playful, modern web experiences">
          <div className="grid lg:grid-cols-3 gap-6" data-reveal>
            <div className="lg:col-span-2">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I’m Anggi Nabila — a designer crafting interactive portfolios, brand sites, and product pages with a modern aesthetic. My work blends bold visuals, clear hierarchy, and smooth motion to create memorable, usable experiences.
              </p>
              <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                I enjoy building in the browser, iterating fast, and collaborating closely with developers to bring ideas to life.
              </p>
            </div>
            <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <li>• Portfolio and product web design</li>
              <li>• Motion and micro-interaction design</li>
              <li>• 3D accents using Spline</li>
              <li>• Prototyping with Framer and Figma</li>
            </ul>
          </div>
          <div className="mt-10" data-reveal>
            <Achievements />
          </div>
        </Section>

        <Section id="work" eyebrow="Selected Work" title="Recent projects">
          <div data-reveal>
            <Projects />
          </div>
        </Section>

        <Section id="skills" eyebrow="Capabilities" title="What I’m good at">
          <div data-reveal>
            <Skills />
          </div>
        </Section>

        <Section id="contact" eyebrow="Contact" title="Let’s create something delightful">
          <div className="grid md:grid-cols-2 gap-6" data-reveal>
            <form onSubmit={(e)=>e.preventDefault()} className="rounded-2xl border bg-white dark:bg-neutral-900 p-6 shadow-sm space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-800 dark:text-gray-200">Name</label>
                <input className="mt-1 w-full rounded-xl border px-3 py-2 bg-white dark:bg-neutral-950 dark:border-neutral-800 focus:outline-none focus:ring-2 focus:ring-gray-900/10" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-800 dark:text-gray-200">Email</label>
                <input type="email" className="mt-1 w-full rounded-xl border px-3 py-2 bg-white dark:bg-neutral-950 dark:border-neutral-800 focus:outline-none focus:ring-2 focus:ring-gray-900/10" placeholder="you@example.com" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-800 dark:text-gray-200">Message</label>
                <textarea rows="4" className="mt-1 w-full rounded-xl border px-3 py-2 bg-white dark:bg-neutral-950 dark:border-neutral-800 focus:outline-none focus:ring-2 focus:ring-gray-900/10" placeholder="Tell me about your project" />
              </div>
              <button className="inline-flex justify-center rounded-full bg-gray-900 text-white px-5 py-3 text-sm font-medium hover:bg-gray-800 transition-colors">Send message</button>
            </form>
            <div className="rounded-2xl border bg-white dark:bg-neutral-900 p-6 shadow-sm">
              <h3 className="font-semibold">Availability</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Currently open for freelance and collaboration.</p>
              <div className="mt-4 text-sm">
                <p><span className="font-medium">Email:</span> hello@angginabila.design</p>
                <p className="mt-1"><span className="font-medium">Location:</span> Remote / GMT+7</p>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}

export default App
