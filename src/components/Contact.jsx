import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { profile } from '../data'

const contactItems = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone}` },
  { label: 'Location', value: profile.location, href: null },
  { label: 'LinkedIn', value: 'linkedin.com/in/hemanthss', href: profile.linkedin },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="section contact-section">
      <div className="section-shell">
        <div className="section-header section-header-invert">
          <div className="section-heading-block">
            <p className="section-kicker section-kicker-invert">// Let's Connect</p>
            <h2 className="section-title section-title-invert">Open to new challenges</h2>
          </div>
          <p className="section-copy section-copy-top section-copy-invert">
            Available for engineering roles and consulting work across product systems, computer vision,
            automation, and AI delivery.
          </p>
        </div>

        <div
          ref={ref}
          className="contact-grid"
        >
          {contactItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                borderTop: '1px solid rgba(255,255,255,0.2)',
                padding: '1.5rem 1rem 1.5rem 0',
                marginRight: '2rem',
              }}
            >
              <div style={{
                fontSize: '11px', letterSpacing: '0.15em',
                fontFamily: 'var(--mono)', color: 'rgba(255,255,255,0.5)',
                textTransform: 'uppercase', marginBottom: '0.4rem',
              }}>
                {item.label}
              </div>
              <div style={{ fontSize: '1rem', color: '#fff' }}>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    style={{
                      color: '#fff',
                      borderBottom: '1px solid rgba(255,255,255,0.3)',
                      transition: 'border-color 0.2s',
                    }}
                    onMouseEnter={e => e.target.style.borderColor = 'rgba(255,255,255,0.8)'}
                    onMouseLeave={e => e.target.style.borderColor = 'rgba(255,255,255,0.3)'}
                  >
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
