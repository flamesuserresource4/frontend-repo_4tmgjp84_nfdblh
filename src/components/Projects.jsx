import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Playful Agency Site',
    desc: 'A colorful, bouncy brand presence with micro-interactions and 3D touches.',
    tags: ['Webflow', 'Spline', 'Framer Motion'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1653039150461-9d4f1519fe13?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQbGF5ZnVsJTIwQWdlbmN5JTIwU2l0ZXxlbnwwfDB8fHwxNzYzMDIzMjMwfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    title: 'Portfolio Redesign',
    desc: 'Minimal yet warm layout, emphasizing usability and subtle motion.',
    tags: ['React', 'Tailwind'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'E-commerce Concept',
    desc: 'Modern shopping flow with delightful transitions and storytelling.',
    tags: ['Next.js', 'Design'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop'
  }
]

function Chip({ children }) {
  return <span className="inline-flex items-center rounded-full bg-black/5 px-2.5 py-1 text-xs text-gray-700">{children}</span>
}

export default function Projects() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p, i) => (
        <motion.a
          key={p.title}
          href={p.link}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          className="group overflow-hidden rounded-2xl border bg-white shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="aspect-[16/10] overflow-hidden">
            <img src={p.image} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-gray-900">{p.title}</h3>
            <p className="mt-1 text-sm text-gray-600">{p.desc}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map(t => <Chip key={t}>{t}</Chip>)}
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  )
}
