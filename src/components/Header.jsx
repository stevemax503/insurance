import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const productItems = [
  {
    id: 'motor',
    label: 'Motor insurance',
    to: '/motor-insurance',
    icon: '/images/motor-icon.svg',
    children: [{ label: 'Motor Insurance', to: '/personal-insurance/motor-insurance' }],
  },
  {
    id: 'general',
    label: 'General Insurance',
    to: '/general-insurance',
    icon: '/images/general-icon.svg',
    children: [{ label: 'Property Insurance', to: '/general-insurance/property-insurance' }],
  },
  {
    id: 'medical',
    label: 'Medical Insurance',
    to: '/medical-insurance',
    icon: '/images/medical-icon.svg',
    children: [
      { label: 'SME', to: '/medical-insurance/sme' },
      { label: 'Group Medical', to: '/medical-insurance/group' },
    ],
  },
  {
    id: 'protection',
    label: 'Protection and Saving',
    to: '/saving-and-protection',
    icon: '/images/protection-icon.svg',
    className: 'protection',
  },
  {
    id: 'services',
    label: 'Online services',
    to: '/online-services',
    icon: '/images/online-icon.svg',
    className: 'services',
    children: [
      {
        label: 'Motor /General',
        href: 'https://general.orientinsurance.com.sa/webserviceportal/',
      },
    ],
  },
]

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z" />
    </svg>
  )
}

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3 3 12h3v8h5v-6h2v6h5v-8h3L12 3z" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <circle cx="11" cy="11" r="7" strokeWidth="2" />
      <path d="M20 20l-3.5-3.5" strokeWidth="2" />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setSearchOpen(false)
        setMenuOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const submitSearch = (e) => {
    e.preventDefault()
    setSearchOpen(false)
  }

  return (
    <header className="site-header" id="site-header">
      <div className="top-bar">
        <Link to="/" className="logo-link" aria-label="Orient Insurance home">
          <img src="/images/logo.png" alt="orient" />
        </Link>

        <nav className="utility-nav" aria-label="Utility">
          <a className="phone-link" href="tel:8001110151">
            <PhoneIcon />
            CUSTOMER CARE : 800 111 0151
          </a>
          <Link to="/" className="home-icon-link" aria-label="Home">
            <HomeIcon />
          </Link>
          <Link to="/our-profile">ABOUT US</Link>
          <Link to="/ksa">Our Branches</Link>
          <Link to="/contact-us">Contact Us</Link>
          <Link to="/contact-us">Complaints, Requests, and Suggestions</Link>
          <a className="lang-link" href="https://orientinsurance.com.sa/ar/" lang="ar">
            <img src="/images/saudi-flag.svg" alt="" />
            العربية
          </a>
        </nav>

        <div className="header-actions">
          <a className="icon-btn mobile-lang" href="https://orientinsurance.com.sa/ar/" lang="ar" aria-label="العربية">
            <img src="/images/saudi-flag.svg" alt="" />
          </a>
          <button
            className="icon-btn"
            type="button"
            aria-label="Search"
            onClick={() => {
              setSearchOpen((v) => !v)
              setMenuOpen(false)
            }}
          >
            <SearchIcon />
          </button>
          <button
            className="icon-btn menu-toggle"
            type="button"
            aria-label="Menu Toggle"
            aria-expanded={menuOpen}
            onClick={() => {
              setMenuOpen((v) => !v)
              setSearchOpen(false)
            }}
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      <nav className="product-nav" aria-label="Insurance products">
        {productItems.map((item) => (
          <div
            key={item.id}
            className={`product-item ${item.className || ''} ${openDropdown === item.id ? 'open' : ''}`}
            onMouseEnter={() => setOpenDropdown(item.id)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <NavLink
              to={item.to}
              className="product-trigger"
              onClick={(e) => {
                if (item.children && window.innerWidth <= 1024) {
                  e.preventDefault()
                  setOpenDropdown((current) => (current === item.id ? null : item.id))
                }
              }}
            >
              <img src={item.icon} alt="" />
              {item.label}
              {item.children ? <span className="chevron" /> : null}
            </NavLink>
            {item.children ? (
              <div className="product-dropdown">
                {item.children.map((child) =>
                  child.href ? (
                    <a
                      key={child.href}
                      href={child.href}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => setOpenDropdown(null)}
                    >
                      {child.label}
                    </a>
                  ) : (
                    <Link key={child.to} to={child.to} onClick={() => setOpenDropdown(null)}>
                      {child.label}
                    </Link>
                  ),
                )}
              </div>
            ) : null}
          </div>
        ))}
      </nav>

      <div className={`search-overlay ${searchOpen ? 'open' : ''}`}>
        <form onSubmit={submitSearch}>
          <label className="sr-only" htmlFor="site-search">
            Search
          </label>
          <input
            id="site-search"
            type="search"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" aria-label="Search">
            <SearchIcon />
          </button>
        </form>
      </div>

      <div className={`mobile-drawer ${menuOpen ? 'open' : ''}`}>
        <a href="tel:8001110151">CUSTOMER CARE : 800 111 0151</a>
        <Link to="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link to="/our-profile" onClick={() => setMenuOpen(false)}>
          ABOUT US
        </Link>
        <Link to="/ksa" onClick={() => setMenuOpen(false)}>
          Our Branches
        </Link>
        <Link to="/contact-us" onClick={() => setMenuOpen(false)}>
          Contact Us
        </Link>
        <Link to="/contact-us" onClick={() => setMenuOpen(false)}>
          Complaints, Requests, and Suggestions
        </Link>
        <Link to="/online-services" onClick={() => setMenuOpen(false)}>
          Online services
        </Link>
        <a href="https://orientinsurance.com.sa/ar/" lang="ar">
          العربية
        </a>
      </div>
    </header>
  )
}
