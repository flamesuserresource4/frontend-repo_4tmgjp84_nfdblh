import { useEffect } from 'react'

// Adds a gentle reveal-on-scroll using IntersectionObserver + CSS utilities
export default function ScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0')
          io.unobserve(entry.target)
        }
      })
    }, { threshold: 0.15 })

    els.forEach((el) => {
      el.classList.add('opacity-0', 'translate-y-3', 'transition', 'duration-700')
      io.observe(el)
    })

    return () => io.disconnect()
  }, [])

  return null
}
