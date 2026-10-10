import { Link } from 'react-router-dom'
import MediaSidebar from '../components/MediaSidebar.jsx'
import { newsItems } from '../data/news.js'

function NewsCards({ items }) {
  if (!items.length) {
    return <p className="archive-empty">No posts found.</p>
  }

  return (
    <div className="news-cards">
      {items.map((item) => (
        <Link className="news-card" to={`/${item.slug}`} key={item.slug}>
          <div className="news-card-img">
            <img src={item.image} alt="" />
          </div>
          <div className="news-card-body">
            <span className="news-card-date">{item.date}</span>
            <h2>{item.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  )
}

export function NewsArchive() {
  return (
    <article className="archive-page">
      <div className="archive-body">
        <div className="container archive-layout news-layout">
          <MediaSidebar />
          <NewsCards items={newsItems} />
        </div>
      </div>
    </article>
  )
}

export function EventsArchive() {
  return (
    <article className="archive-page">
      <div className="archive-body">
        <div className="container archive-layout news-layout">
          <MediaSidebar />
          <div />
        </div>
      </div>
    </article>
  )
}
