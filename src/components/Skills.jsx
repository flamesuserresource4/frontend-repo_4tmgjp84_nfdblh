import { motion } from 'framer-motion'
import { Palette, Rocket, Zap, MousePointerClick } from 'lucide-react'

const skills = [
  { icon: Palette, title: 'Visual Design', desc: 'Color, typography, composition, and brand systems.' },
  { icon: Rocket, title: 'Motion', desc: 'Micro-interactions, transitions, and immersive flow.' },
  { icon: Zap, title: 'Prototyping', desc: 'Rapid iteration with Framer, Figma, and Webflow.' },
  { icon: MousePointerClick, title: 'Interaction', desc: 'Purposeful, accessible interactions and feedback.' },
]

export default function Skills() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {skills.map((s, i) => (
        <motion.div
          key={s.title}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, delay: i * 0.05 }}
          className="rounded-2xl border bg-white dark:bg-neutral-900 p-4 shadow-sm hover:shadow-md transition-shadow"
        >
          <s.icon className="text-gray-900 dark:text-white" size={22} />
          <h3 className="mt-3 font-semibold text-gray-900 dark:text-white">{s.title}</h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{s.desc}</p>
        </motion.div>
      ))}
    </div>
  )
}
