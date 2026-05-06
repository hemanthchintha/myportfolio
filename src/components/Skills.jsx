import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { skills } from '../data'

function SkillCard({ skill, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'var(--paper)' : 'var(--paper2)',
        padding: '2rem 1.75rem',
        transition: 'background 0.2s',
        cursor: 'default',
      }}
    >
      <div style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{skill.icon}</div>
      <div style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.6rem', color: 'var(--ink)' }}>
        {skill.name}
      </div>
      <div style={{ fontSize: '13px', color: 'var(--ink2)', lineHeight: 1.8 }}>{skill.items}</div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section section-soft">
      <div className="section-shell">
        <p className="section-kicker">// Technical Expertise</p>
        <h2 className="section-title">What I bring to the table</h2>

        <div className="skills-grid">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
