import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'

// Subtle animated background accents tuned for a more professional tone
export default function BackgroundFX() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 50, damping: 24 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 24 })

  useEffect(() => {
    const onMove = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [mouseX, mouseY])

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Soft gradient blobs (lower opacity for professionalism)*/}
      <motion.div
        className="absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(59,130,246,0.18), rgba(255,255,255,0))' }}
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(168,85,247,0.14), rgba(255,255,255,0))' }}
        animate={{ scale: [1.02, 0.98, 1.02], rotate: [0, 6, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Faint cursor-follow glow */}
      <motion.div
        className="absolute h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/8 dark:bg-indigo-400/6 blur-2xl"
        style={{ left: springX, top: springY }}
      />

      {/* Grid overlay for subtle structure */}
      <div className="absolute inset-0 opacity-[0.035] dark:opacity-[0.04] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] bg-[linear-gradient(to_right,rgba(0,0,0,0.8)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.8)_1px,transparent_1px)] bg-[size:44px_44px]" />
    </div>
  )
}
