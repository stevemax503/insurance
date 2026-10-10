import { NavLink, useLocation } from 'react-router-dom'
import { mediaNav, newsItems } from '../data/news.js'

export default function MediaSidebar({ showPromo = true }) {
  const { pathname } = useLocation()
  const isNews =
    pathname === '/media-center' ||
    pathname === '/media-center/news' ||
    newsItems.some((item) => pathname === `/${item.slug}`)

  return (
    <aside className="archive-sidebar media-sidebar">
      <nav className="archive-cat" aria-label="Media categories">
        {mediaNav.map((item) => {
          const active = item.to === '/media-center/news' ? isNews : pathname === item.to
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={`archive-cat-label${active ? ' active' : ''}`}
              end
            >
              {item.label}
            </NavLink>
          )
        })}
      </nav>
      {showPromo ? <img className="media-promo" src="/images/news-event.jpg" alt="" /> : null}
    </aside>
  )
}
