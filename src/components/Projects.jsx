import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { projects } from '../data'

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: '1px solid var(--line)',
        padding: '2rem',
        background: 'var(--paper)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? '0 12px 36px rgba(0,0,0,0.07)' : 'none',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--mono)',
          fontSize: '10px',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'var(--accent2)',
          marginBottom: '0.75rem',
        }}
      >
        {project.domain}
      </div>
      <div style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--ink)' }}>
        {project.name}
      </div>
      <div style={{ fontSize: '0.94rem', color: 'var(--ink2)', lineHeight: 1.7, marginBottom: '1rem' }}>
        {project.desc}
      </div>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        {project.stack.map((s) => (
          <span
            key={s}
            style={{
              fontSize: '11px',
              fontFamily: 'var(--mono)',
              padding: '3px 10px',
              background: 'var(--paper3)',
              color: 'var(--ink2)',
              border: '1px solid var(--line)',
            }}
          >
            {s}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-shell">
        <div className="section-header">
          <div className="section-heading-block">
            <p className="section-kicker">// AI & Software Projects</p>
            <h2 className="section-title">Software systems that shipped</h2>
          </div>
          <p className="section-copy section-copy-top">
            Selected AI and software work spanning agent workflows, production backends, retrieval pipelines,
            and full-stack delivery.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
