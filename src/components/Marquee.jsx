import { useRef, useEffect } from 'react'

// Seamless, CSS-based marquee row used for logos or keywords
export default function Marquee({ items = [], direction = 'left', speed = 30 }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const duration = `${Math.max(8, 200 / speed)}s`
    el.style.setProperty('--duration', duration)
    el.style.setProperty('--direction', direction === 'left' ? 'normal' : 'reverse')
  }, [direction, speed])

  const list = [...items, ...items, ...items]

  return (
    <div className="relative overflow-hidden">
      <div
        ref={ref}
        className="[animation:scroll_var(--duration)_linear_infinite] flex gap-8 whitespace-nowrap will-change-transform"
        style={{ animationDirection: 'var(--direction)' }}
      >
        {list.map((t, i) => (
          <span key={i} className="text-sm text-gray-700/80">{t}</span>
        ))}
      </div>
      <style>{`
        @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </div>
  )
}
