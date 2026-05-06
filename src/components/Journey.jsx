import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { timeline } from '../data'

function TimelineItem({ item, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{ position: 'relative', paddingBottom: '2.5rem', paddingLeft: '2.5rem' }}
    >
      <div
        style={{
          position: 'absolute',
          left: '-7px',
          top: '6px',
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          background: item.active ? 'var(--accent2)' : 'var(--paper)',
          border: `2px solid ${item.active ? 'var(--accent2)' : 'var(--accent)'}`,
        }}
      />

      <div
        style={{
          fontFamily: 'var(--mono)',
          fontSize: '11px',
          color: 'var(--ink3)',
          letterSpacing: '0.1em',
          marginBottom: '0.4rem',
        }}
      >
        {item.period}
      </div>

      <div style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--ink)' }}>{item.role}</div>
      <div style={{ fontSize: '0.9rem', color: 'var(--accent)', marginBottom: '0.6rem' }}>{item.company}</div>
      <div
        style={{
          fontSize: '0.92rem',
          color: 'var(--ink2)',
          maxWidth: '560px',
          lineHeight: 1.7,
        }}
      >
        {item.desc}
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.8rem' }}>
        {item.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: '11px',
              fontFamily: 'var(--mono)',
              padding: '3px 10px',
              border: '1px solid var(--line)',
              color: 'var(--ink2)',
              background: 'var(--paper2)',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Journey() {
  return (
    <section id="journey" className="section section-alt">
      <div className="section-shell journey-layout">
        <div className="journey-intro">
          <p className="section-kicker">// Career Timeline</p>
          <h2 className="section-title">A journey across products, systems, and AI</h2>
          <p className="section-copy">
            My background moves from industrial automation to defense-grade thermal imaging, on to production
            vision systems, and now into full-stack AI consulting.
          </p>
        </div>

        <div className="journey-rail">
          {timeline.map((item, i) => (
            <TimelineItem key={item.role} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
