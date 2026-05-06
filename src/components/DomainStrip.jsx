import { domains } from '../data'

const doubled = [...domains, ...domains]

export default function DomainStrip() {
  return (
    <div className="domain-strip">
      <div className="domain-track">
        {doubled.map((d, i) => (
          <div key={i} className="domain-item">
            <span className="domain-arrow">{'->'}</span>
            {d}
          </div>
        ))}
      </div>
    </div>
  )
}
