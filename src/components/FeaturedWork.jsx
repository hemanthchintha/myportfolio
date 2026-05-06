import { motion } from 'framer-motion'
import { featuredWork } from '../data'

function ProductCard({ item, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`feature-card ${item.mediaType === 'video' ? 'feature-card-video' : ''}`}
    >
      <div className={`feature-media-wrap ${item.mediaType === 'video' ? 'feature-media-wrap-video' : 'feature-media-wrap-image'}`}>
        {item.mediaType === 'video' ? (
          <video className="feature-media feature-video" src={item.media} controls preload="metadata" />
        ) : (
          <img className="feature-media feature-image" src={item.media} alt={item.title} />
        )}
      </div>

      <div className="feature-body">
        <div className="feature-eyebrow">{item.company} | {item.category}</div>
        <h3 className="feature-title">{item.title}</h3>
        <p className="feature-copy">{item.summary}</p>
        <p className="feature-impact">{item.impact}</p>

        <div className="feature-list">
          {item.contributions.map((point) => (
            <div key={point} className="feature-list-item">
              <span className="feature-bullet">+</span>
              <span>{point}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export default function FeaturedWork() {
  return (
    <section id="featured" className="section feature-section">
      <div className="section-shell">
        <div className="section-header">
          <div className="section-heading-block">
            <p className="section-kicker">// Featured Product Work</p>
            <h2 className="section-title">Products and systems I helped bring to life</h2>
          </div>
          <p className="section-copy section-copy-top">
            My strongest work lives at the intersection of hardware, validation, sensing, computer vision, and
            production deployment. Here are a few systems where I played a hands-on engineering role.
          </p>
        </div>

        <div className="feature-grid">
          {featuredWork.map((item, index) => (
            <ProductCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
