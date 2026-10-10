import { NavLink } from 'react-router-dom'
import { aboutNav } from '../data/news.js'

export default function AboutSidebar() {
  return (
    <nav className="about-side-nav" aria-label="About us">
      {aboutNav.map((item) => (
        <NavLink key={item.to} to={item.to}>
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}
