import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const styles = {
  nav: {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '1rem 3rem',
    borderBottom: '1px solid var(--line)',
    transition: 'background 0.3s',
  },
  logo: {
    fontFamily: 'var(--mono)', fontSize: '13px',
    letterSpacing: '0.1em', color: 'var(--ink2)',
  },
  links: {
    display: 'flex', gap: '2rem', listStyle: 'none',
  },
  link: {
    fontSize: '13px', fontWeight: 500, color: 'var(--ink2)',
    letterSpacing: '0.05em', cursor: 'pointer',
    transition: 'color 0.2s',
    textDecoration: 'none',
  },
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      style={{
        ...styles.nav,
        background: scrolled
          ? 'rgba(245,242,236,0.92)'
          : 'rgba(245,242,236,0.7)',
        backdropFilter: 'blur(8px)',
      }}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div style={styles.logo}>HSS // PORTFOLIO</div>
      <ul style={styles.links}>
        {['featured', 'journey', 'skills', 'projects', 'contact'].map((item) => (
          <li key={item}>
            <span
              style={styles.link}
              onClick={() => scrollTo(item)}
              onMouseEnter={e => e.target.style.color = 'var(--accent)'}
              onMouseLeave={e => e.target.style.color = 'var(--ink2)'}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </span>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}
