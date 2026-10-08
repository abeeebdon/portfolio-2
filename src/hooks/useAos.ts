import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

/**
 * Initialises AOS (Animate On Scroll).
 *
 * Elements opt in with `data-aos`, e.g.:
 *   <div data-aos="fade-up" data-aos-delay="100">…</div>
 *
 * Available effects: fade, fade-up, fade-down, fade-left, fade-right,
 * zoom-in, zoom-out, flip-left, slide-up, … (full list in aos.css).
 */
export function useAos() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: false,
      mirror: false,
      offset: 100,
      // Respect the user's motion preference (AOS removes `data-aos` when disabled)
      disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    })

    // Re-measure once images/fonts have settled so triggers line up correctly.
    const refresh = () => AOS.refresh()
    window.addEventListener('load', refresh)
    const timeout = window.setTimeout(refresh, 600)

    return () => {
      window.removeEventListener('load', refresh)
      window.clearTimeout(timeout)
    }
  }, [])
}
