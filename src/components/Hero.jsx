import { motion } from 'framer-motion'
import { profile } from '../data'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-shell">
        <div className="hero-intro">
          <motion.p {...fadeUp(0.1)} className="section-kicker">
            // {profile.tagline}
          </motion.p>

          <motion.h1 {...fadeUp(0.2)} className="hero-title">
            Hemanth
            <br />
            <em>SS</em>
          </motion.h1>

          <motion.p {...fadeUp(0.3)} className="hero-copy">
            {profile.bio}
          </motion.p>

          <motion.div {...fadeUp(0.4)} className="hero-actions">
            <button
              onClick={() => document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' })}
              className="button-primary"
              onMouseEnter={(e) => { e.target.style.background = '#0f2550' }}
              onMouseLeave={(e) => { e.target.style.background = 'var(--accent)' }}
            >
              Explore Featured Work
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="button-secondary"
              onMouseEnter={(e) => { e.target.style.borderColor = 'var(--ink2)' }}
              onMouseLeave={(e) => { e.target.style.borderColor = 'var(--line)' }}
            >
              Get in Touch
            </button>
          </motion.div>

          <motion.div {...fadeUp(0.5)} className="hero-highlights">
            {profile.highlights.map((item) => (
              <div key={item} className="hero-highlight-item">
                <span className="hero-highlight-mark">{'->'}</span>
                <span>{item}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="hero-side">
          <div className="hero-stats-grid">
            {profile.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="hero-stat-card"
              >
                <div className="hero-stat-number">{stat.num}</div>
                <div className="hero-stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="hero-proof-card"
          >
            <div className="hero-proof-kicker">Portfolio focus</div>
            <h3>Built across Tonbo Imaging, Pramana, and modern AI consulting work</h3>
            <p>
              This portfolio now highlights real product engineering work, from thermal imaging platforms and
              qualification workflows to production vision systems and AI applications.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
