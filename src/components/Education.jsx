import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { education } from '../data'

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="education" style={{
      padding: '6rem 4rem',
      background: 'var(--paper3)',
      borderTop: '1px solid var(--line)',
    }}>
      <p style={{
        fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.2em',
        color: 'var(--accent2)', textTransform: 'uppercase', marginBottom: '1rem',
      }}>
        // Education
      </p>
      <h2 style={{
        fontFamily: 'var(--serif)', fontSize: 'clamp(2rem, 4vw, 3rem)',
        lineHeight: 1.1, marginBottom: '3rem', color: 'var(--ink)',
      }}>
        Foundations
      </h2>

      <div ref={ref} style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem',
      }}>
        {education.map((edu, i) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{
              padding: '1.75rem',
              border: '1px solid var(--line)',
              background: 'var(--paper)',
            }}
          >
            <div style={{
              fontFamily: 'var(--mono)', fontSize: '11px',
              color: 'var(--ink3)', marginBottom: '0.5rem',
            }}>
              {edu.year}
            </div>
            <div style={{ fontWeight: 600, fontSize: '1rem', marginBottom: '0.25rem', color: 'var(--ink)' }}>
              {edu.degree}
            </div>
            <div style={{ fontSize: '0.9rem', color: 'var(--accent)' }}>
              {edu.institution}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
