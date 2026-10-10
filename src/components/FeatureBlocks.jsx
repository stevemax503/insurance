import { Link } from 'react-router-dom'
import { ChevronRight } from './Icons.jsx'

export default function FeatureBlocks() {
  return (
    <div className="feature-grid">
      <div className="feature-row">
        <div className="feature-copy">
          <h2>WE’RE ALL ABOUT FAMILY</h2>
          <p>
            Orient Insurance is an insurance company with a strong financial base, highly qualified workforce
            along with an in-depth knowledge of local insurance. Since 1982, Orient has been part of the
            prestigious.
          </p>
          <Link className="btn-outline" to="/our-profile">
            <ChevronRight />
            READ MORE
          </Link>
        </div>
        <div className="feature-image">
          <img src="/images/family-services.jpg" alt="" />
        </div>
      </div>

      <div className="feature-row reverse">
        <div className="feature-image">
          <img src="/images/commercial-city.jpg" alt="" />
        </div>
        <div className="feature-copy">
          <h2>EFFECTIVE COMMERCIAL INSURANCE</h2>
          <p>
            Let Orient take care of your business with a wide variety of comprehensive Commercial Insurances
            covering everything from Property to Professional Indemnity and a whole lot more!
          </p>
          <Link className="btn-outline" to="/general-insurance/property-insurance">
            <ChevronRight />
            READ MORE
          </Link>
        </div>
      </div>
    </div>
  )
}
