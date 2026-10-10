import { Link } from 'react-router-dom'
import { ChevronRight } from './Icons.jsx'

export default function PromoCards() {
  return (
    <section className="promo-section">
      <div className="promo-row">
        <article className="promo-card">
          <img src="/images/personal-family.jpg" alt="" />
          <div className="promo-body">
            <h2>PERSONAL AND COMMERCIAL INSURANCE</h2>
            <p>
              A wide range of Personal and Commercial Insurance await you at Orient Insurance! Along with
              reasonable premiums, purchase insurance covers for you, your family, your business and your
              employees too!
            </p>
            <Link className="btn-ghost" to="/motor-insurance">
              <ChevronRight />
              READ MORE
            </Link>
          </div>
        </article>

        <article className="promo-card">
          <img src="/images/online-insurance.jpg" alt="" />
          <div className="promo-body">
            <h2>GET YOUR INSURANCE ONLINE</h2>
            <p>Get your insurance online with few clicks</p>
            <Link className="btn-ghost" to="/buy-online">
              <ChevronRight />
              Shop Online
            </Link>
          </div>
        </article>
      </div>
    </section>
  )
}
