import { Link, useLocation } from 'react-router-dom'

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.5h4.56V24H.22V8.5zM8.34 8.5h4.37v2.12h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 7v8.76h-4.56v-7.77c0-1.85-.03-4.23-2.58-4.23-2.58 0-2.97 2.01-2.97 4.09V24H8.34V8.5z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
    </svg>
  )
}

const footerCols = [
  {
    title: 'About Us',
    to: '/our-profile',
    links: [
      { label: 'Our Profile', to: '/our-profile' },
      { label: 'Message from Our CEO', to: '/about-us/message-from-our-ceo' },
      { label: 'Al-Futtaim', to: '/al-futtaim' },
      { label: 'Ratings & Awards', to: '/about-us/ratings-awards' },
    ],
  },
  {
    title: 'Motor Insurance',
    to: '/motor-insurance',
    links: [{ label: 'Motor Insurance', to: '/personal-insurance/motor-insurance' }],
  },
  {
    title: 'General Insurance',
    to: '/general-insurance',
    links: [{ label: 'Property Insurance', to: '/general-insurance/property-insurance' }],
  },
  {
    title: 'Medical Insurance',
    to: '/medical-insurance',
    links: [
      { label: 'SME', to: '/medical-insurance/sme' },
      { label: 'Group Medical Insurance', to: '/medical-insurance/group' },
    ],
  },
  {
    title: 'Saving and Protection',
    to: '/saving-and-protection',
    links: [{ label: 'Coming Soon', to: '/coming-soon' }],
  },
  {
    title: 'Media Center',
    to: '/media-center',
    links: [
      { label: 'News', to: '/media-center/news' },
      { label: 'Events & Promotions', to: '/media-center/events' },
    ],
  },
]

const utilityLinks = [
  { label: 'Careers', href: 'https://www.afuturewithus.com/', external: true },
  { label: 'Ratings', to: '/about-us/ratings-awards' },
  { label: 'Contact Us', to: '/contact-us' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact Details', to: '/contact-details' },
  { label: 'Media Center', to: '/media-center' },
  { label: 'Terms of Use', to: '/terms-of-use' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
]

const mobileLinks = [
  { label: 'About Us', to: '/our-profile' },
  { label: 'Motor insurance', to: '/motor-insurance' },
  { label: 'General Insurance', to: '/general-insurance' },
  { label: 'Medical Insurance', to: '/medical-insurance' },
  { label: 'Protection and Saving', to: '/saving-and-protection' },
  { label: 'Media Center', to: '/media-center' },
  { label: 'Careers', href: 'https://www.afuturewithus.com/' },
  { label: 'Ratings', to: '/about-us/ratings-awards' },
  { label: 'Terms of Use', to: '/terms-of-use' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
]

const pageTitles = {
  '/motor-insurance': 'Motor Insurance',
  '/personal-insurance/motor-insurance': 'Motor Insurance',
  '/our-profile': 'Our Profile',
  '/our-branches': 'KSA',
  '/ksa': 'KSA',
  '/contact-us': 'Contact Us',
  '/online-services': 'Online services',
  '/general-insurance': 'General Insurance',
  '/general-insurance/property-insurance': 'Property Insurance',
  '/medical-insurance': 'Medical Insurance',
  '/medical-insurance/sme': 'SME',
  '/medical-insurance/group': 'Group Medical Insurance',
  '/saving-and-protection': 'Protection and Saving',
  '/media-center': 'Media Centre',
  '/media-center/news': 'News',
  '/media-center/events': 'Events & Promotions',
  '/launching-motor-online-services': 'launching Motor online services',
  '/test-news': 'Orient Insurance Saudi Arabia Opening',
  '/faq': 'FAQ',
  '/contact-details': 'Contact Details',
  '/terms-of-use': 'Terms of Use',
  '/privacy-policy': 'Privacy Policy',
  '/about-us': 'About Us',
  '/about-us/message-from-our-ceo': 'Message from Our CEO',
  '/al-futtaim': 'Al-Futtaim',
  '/about-us/ratings-awards': 'Ratings & Awards',
  '/coming-soon': 'Coming Soon',
}

const breadcrumbTrails = {
  '/personal-insurance/motor-insurance': [
    { label: 'Personal Insurance' },
    { label: 'Motor Insurance' },
  ],
  '/general-insurance/property-insurance': [
    { label: 'Commercial Insurance', to: '/general-insurance' },
    { label: 'Property Insurance' },
  ],
  '/medical-insurance/sme': [
    { label: 'Medical Insurance', to: '/medical-insurance' },
    { label: 'SME' },
  ],
  '/medical-insurance/group': [
    { label: 'Medical Insurance', to: '/medical-insurance' },
    { label: 'Group Medical Insurance' },
  ],
  '/about-us/message-from-our-ceo': [
    { label: 'About Us', to: '/our-profile' },
    { label: 'Message from Our CEO' },
  ],
  '/about-us/ratings-awards': [
    { label: 'About Us', to: '/our-profile' },
    { label: 'Ratings & Awards' },
  ],
  '/media-center': [{ label: 'Media Centre' }],
  '/media-center/news': [
    { label: 'Media Centre', to: '/media-center' },
    { label: 'News' },
  ],
  '/media-center/events': [
    { label: 'Media Centre', to: '/media-center' },
    { label: 'Events & Promotions' },
  ],
  '/launching-motor-online-services': [
    { label: 'Posts', to: '/media-center/news' },
    { label: 'launching Motor online services' },
  ],
  '/test-news': [
    { label: 'Posts', to: '/media-center/news' },
    { label: 'Orient Insurance Saudi Arabia Opening' },
  ],
}

export default function Footer() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const pageTitle = pageTitles[pathname]
  const trail = breadcrumbTrails[pathname] || (pageTitle ? [{ label: pageTitle }] : [{ label: pathname.replace(/\//g, ' ').trim() }])

  return (
    <>
      {!isHome && (
        <div className="breadcrumb-bar">
          <div className="container">
            <div className="crumbs">
              <Link to="/">Home</Link>
              {trail.map((crumb, index) => {
                const isLast = index === trail.length - 1
                return (
                  <span key={`${crumb.label}-${index}`} className="crumb-piece">
                    <span className="crumb-sep">›</span>
                    {crumb.to && !isLast ? (
                      <Link to={crumb.to}>{crumb.label}</Link>
                    ) : (
                      <span className={isLast ? 'crumb-current' : undefined}>{crumb.label}</span>
                    )}
                  </span>
                )
              })}
            </div>
            <a className="back-to-top-link" href="#outer-wrap">
              Back to top
            </a>
          </div>
        </div>
      )}

      <footer className="site-footer">
        <div className="footer-desktop">
          <div className="footer-cols">
            {footerCols.map((col) => (
              <div className="footer-col" key={col.title}>
                <h3>
                  <Link to={col.to}>{col.title}</Link>
                </h3>
                <ul>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.to}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <nav className="footer-links-row" aria-label="Footer utility">
            {utilityLinks.map((link) =>
              link.external ? (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ) : (
                <Link key={link.label} to={link.to}>
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          <div className="footer-bottom">
            <div className="footer-legal">
              <p>© 2025 Al-Futtaim. All rights reserved</p>
              <p>Regulated by Insurance Authority</p>
              <p>
                Insurance Authority website:{' '}
                <a href="https://www.ia.gov.sa/" target="_blank" rel="noopener noreferrer">
                  https://www.ia.gov.sa/
                </a>
              </p>
            </div>
            <img className="ia-logo" src="/images/ia-logo.png" alt="Insurance Authority" />
            <div className="footer-bottom-spacer" />
          </div>
        </div>

        <nav className="mobile-footer-nav" aria-label="Mobile footer">
          {mobileLinks.map((link) =>
            link.href ? (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ) : (
              <Link key={link.label} to={link.to}>
                {link.label}
              </Link>
            ),
          )}
        </nav>
        <div className="mobile-footer-bottom">
          <p>© 2020 Al-Futtaim. All rights reserved</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/OrientInsurance/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="https://www.linkedin.com/company/orient-insurance" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
