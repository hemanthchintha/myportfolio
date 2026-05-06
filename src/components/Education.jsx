import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { education } from '../data'

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="education" className="section education-section">
      <div className="section-shell">
        <div className="section-header">
          <div className="section-heading-block">
            <p className="section-kicker">// Education</p>
            <h2 className="section-title">Foundations</h2>
          </div>
          <p className="section-copy section-copy-top">
            Academic grounding in mechatronics and applied AI that supports both product engineering and
            software system design.
          </p>
        </div>

        <div ref={ref} className="education-grid">
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
      </div>
    </section>
  )
}
