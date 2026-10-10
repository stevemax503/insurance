import { useMemo, useState } from 'react'
import InnerPage from './InnerPage.jsx'
import { faqs } from '../data/faq.js'

function stripHtml(value) {
  return value.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ')
}

export default function Faq() {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(null)
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return faqs
    return faqs.filter((item) => item.q.toLowerCase().includes(q) || stripHtml(item.html).toLowerCase().includes(q))
  }, [query])

  return (
    <InnerPage title="FAQ" hero="/images/faq-hero.jpg" hideTitle bodyClass="faq-shell">
      <div className="faq-head">
        <div>
          <h2 className="faq-heading">FAQ</h2>
          <p className="faq-sub">Frequently Asked Questions</p>
        </div>
        <input
          className="faq-search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search FAQs..."
          type="search"
          aria-label="Search FAQs"
        />
      </div>
      <div className="faq-list">
        {filtered.map((item) => {
          const isOpen = open === item.q
          return (
            <div className={`faq-item ${isOpen ? 'open' : ''}`} key={item.q}>
              <button type="button" onClick={() => setOpen(isOpen ? null : item.q)} aria-expanded={isOpen}>
                <span className="faq-icon" aria-hidden="true">
                  {isOpen ? '−' : '+'}
                </span>
                <span>{item.q}</span>
              </button>
              {isOpen ? <div className="faq-answer" dangerouslySetInnerHTML={{ __html: item.html }} /> : null}
            </div>
          )
        })}
      </div>
    </InnerPage>
  )
}
