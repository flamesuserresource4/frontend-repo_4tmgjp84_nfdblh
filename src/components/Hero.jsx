import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-white/20" />

      <div className="relative max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="py-24 lg:py-32"
        >
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-gray-700/80">
            <span className="h-1.5 w-1.5 rounded-full bg-gray-900" /> Portfolio • Designer
          </span>

          <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight text-gray-900">
            Anggi Nabila
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-fuchsia-500 to-violet-600">
              Creative Portfolio & Web Designer
            </span>
          </h1>

          <p className="mt-5 text-base md:text-lg text-gray-700 max-w-xl">
            I craft playful, interactive websites with modern aesthetics and delightful motion. Let’s build something memorable.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#work" className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-5 py-3 text-sm font-medium hover:bg-gray-800 transition-colors">
              View Work
            </a>
            <a href="#contact" className="pointer-events-auto inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-5 py-3 text-sm font-medium hover:border-gray-400 transition-colors">
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
