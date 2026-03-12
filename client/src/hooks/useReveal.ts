import { useEffect, useRef } from 'react'

export function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('vis') }),
      { threshold: 0.15 }
    )
    el.querySelectorAll('.rv').forEach((child) => obs.observe(child))
    return () => obs.disconnect()
  }, [])
  return ref
}
