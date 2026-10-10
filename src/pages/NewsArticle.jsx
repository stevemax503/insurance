import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import MediaSidebar from '../components/MediaSidebar.jsx'
import NewsWidget from '../components/NewsWidget.jsx'
import { newsItems } from '../data/news.js'

export default function NewsArticle({ slug }) {
  const [shareOpen, setShareOpen] = useState(false)
  const item = newsItems.find((entry) => entry.slug === slug)
  if (!item) return <Navigate to="/media-center/news" replace />

  const pageUrl = typeof window === 'undefined' ? '' : window.location.href

  return (
    <article className="news-article-page">
      <div className="container">
        <div className="news-article-top">
          <p className="news-watermark">NEWS</p>
          <div className="news-share">
            <button type="button" className="news-share-btn" onClick={() => setShareOpen((open) => !open)}>
              SHARE
            </button>
            {shareOpen ? (
              <div className="news-share-menu">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
                <a href={`mailto:?subject=${encodeURIComponent(item.title)}&body=${encodeURIComponent(pageUrl)}`}>Email</a>
                <button type="button" onClick={() => window.print()}>
                  Print
                </button>
              </div>
            ) : null}
          </div>
        </div>

        <div className="news-article-layout">
          <div className="news-article-side">
            <MediaSidebar showPromo={false} />
            <NewsWidget />
          </div>
          <div className="news-article-main">
            <h1>{item.title}</h1>
            <p className="news-article-date">{item.articleDate}</p>
            <div className="news-article-body" dangerouslySetInnerHTML={{ __html: item.html }} />
            <Link to="/media-center/news" className="news-back">
              <span aria-hidden="true">‹</span> BACK TO NEWS
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
