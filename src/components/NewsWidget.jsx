import { useState } from 'react'
import { Link } from 'react-router-dom'
import { newsItems } from '../data/news.js'

export default function NewsWidget() {
  const [index, setIndex] = useState(0)
  const item = newsItems[index]
  const isFirst = index === 0
  const isLast = index === newsItems.length - 1

  return (
    <div className="news-widget">
      <div className="news-widget-head">
        <h2>NEWS</h2>
        <div className="news-widget-arrows">
          {!isFirst ? (
            <button type="button" onClick={() => setIndex(index - 1)} aria-label="Previous news">
              ‹
            </button>
          ) : null}
          {!isLast ? (
            <button type="button" onClick={() => setIndex(index + 1)} aria-label="Next news">
              ›
            </button>
          ) : null}
        </div>
      </div>
      <Link to={`/${item.slug}`} className="news-widget-slide">
        <img src={item.image} alt="" />
        <span className="news-widget-date">{item.date}</span>
        <span className="news-widget-title">{item.title}</span>
      </Link>
      <Link to="/media-center/news" className="news-widget-all">
        <span aria-hidden="true">›</span> VIEW ALL NEWS
      </Link>
    </div>
  )
}
