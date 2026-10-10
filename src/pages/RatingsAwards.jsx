import InnerPage from './InnerPage.jsx'
import AboutSidebar from '../components/AboutSidebar.jsx'
import NewsWidget from '../components/NewsWidget.jsx'

const awards = [
  { image: '/images/rating-sp.jpg', text: 'Rated A+ by S & P Global Ratings' },
  { image: '/images/rating-ambest.jpg', text: 'Rated ICR a+ and FSR A Excellent by AM Best with Stable Outlook' },
  { image: '/images/rating-expo.jpg', text: 'The Official Insurance Provider for Expo 2020, Dubai' },
  {
    image: '/images/rating-award.jpg',
    text: 'Winner of the prestigious Sheikh Mohammed Bin Rashid Al Maktoum Business Award for Excellence',
  },
]

export default function RatingsAwards() {
  return (
    <InnerPage title="RATINGS & AWARDS" hero="/images/ratings-hero.jpg" bodyClass="ratings-shell">
      <div className="ratings-layout">
        <aside className="ratings-side">
          <AboutSidebar />
          <NewsWidget />
          <div className="updates-widget">
            <h2>Updates</h2>
            <p>Sorry, we couldn't find any posts. Please try a different search.</p>
          </div>
        </aside>
        <div className="ratings-main">
          <section className="ratings-grid">
            {awards.map((item) => (
              <article className="rating-card" key={item.text}>
                <div className="rating-card-img">
                  <img src={item.image} alt="" />
                </div>
                <p>{item.text}</p>
              </article>
            ))}
          </section>
          <div className="ratings-pager">
            <span className="ratings-page-current">1</span>
            <div className="ratings-page-arrows">
              <button type="button" aria-label="Previous page" disabled>
                ‹
              </button>
              <button type="button" aria-label="Next page" disabled>
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </InnerPage>
  )
}
