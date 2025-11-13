import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/70 to-white/20 dark:from-neutral-950 dark:via-neutral-950/70 dark:to-neutral-950/10" />

      <div className="relative max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="py-24 lg:py-32"
        >
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-gray-700/80 dark:text-gray-300/80">
            <span className="h-1.5 w-1.5 rounded-full bg-gray-900 dark:bg-white" /> Portfolio • Designer
          </span>

          <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight text-gray-900 dark:text-white">
            Anggi Nabila
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-fuchsia-500 to-violet-600">
              Creative Portfolio & Web Designer
            </span>
          </h1>

          <p className="mt-5 text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-xl">
            I craft playful, interactive websites with modern aesthetics and delightful motion. Let’s build something memorable.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#work" className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-5 py-3 text-sm font-medium hover:bg-gray-800 transition-colors">
              View Work
            </a>
            <a href="#contact" className="pointer-events-auto inline-flex items-center justify-center rounded-full border border-gray-300 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-5 py-3 text-sm font-medium hover:border-gray-400 dark:hover:border-neutral-700 transition-colors">
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating callouts */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="absolute right-6 bottom-6 hidden md:flex items-center gap-2 rounded-full border bg-white/80 dark:bg-neutral-900/80 backdrop-blur px-3 py-1.5 text-xs text-gray-700 dark:text-gray-300"
      >
        <span className="inline-block h-2 w-2 rounded-full bg-fuchsia-500 animate-pulse" />
        Live 3D scene powered by Spline
      </motion.div>
    </section>
  )
}
