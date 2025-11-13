import { motion } from 'framer-motion'

const items = [
  { k: '5+', v: 'Years Designing' },
  { k: '30+', v: 'Projects Shipped' },
  { k: '8', v: 'Happy Brands' },
  { k: '3D', v: 'Spline Accents' },
]

export default function Achievements() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {items.map((it, i) => (
        <motion.div
          key={it.v}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          className="rounded-2xl border bg-white dark:bg-neutral-900 p-6 shadow-sm text-center"
        >
          <div className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">{it.k}</div>
          <div className="mt-1 text-sm text-gray-600 dark:text-gray-300">{it.v}</div>
        </motion.div>
      ))}
    </div>
  )
}
