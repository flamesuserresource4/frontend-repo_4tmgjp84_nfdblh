import { motion } from 'framer-motion'

export default function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="relative py-16 md:py-24">
      <div className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-b from-white via-white to-white dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-950" />
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="flex flex-col gap-2"
        >
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-gray-600/90 dark:text-gray-300/90">
            <span className="h-1.5 w-1.5 rounded-full bg-gray-900 dark:bg-white" /> {eyebrow}
          </span>
          <h2 className="text-3xl md:text-[40px] font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h2>
        </motion.div>
        <div className="mt-8 md:mt-10">
          {children}
        </div>
      </div>
    </section>
  )
}
