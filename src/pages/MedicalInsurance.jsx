import { Link } from 'react-router-dom'

export default function MedicalInsurance() {
  return (
    <article className="motor-page">
      <div className="inner-hero" style={{ backgroundImage: 'url(/images/medical-hero.jpg)' }}>
        <div className="container">
          <h1>MEDICAL INSURANCE</h1>
        </div>
      </div>

      <div className="motor-body">
        <div className="container">
          <section className="motor-block">
            <h2 className="medical-intro">
              Make it easier for yourself and provide your team with the medical protection they deserve —
              with insurance designed specifically for small and medium-sized enterprises by Orient Saudi
            </h2>
            <p className="medical-links">
              <Link to="/medical-insurance/sme">Medical Insurance for SMEs</Link>
              <Link to="/medical-insurance/group">Group Medical Insurance</Link>
            </p>
          </section>

          <section className="motor-block">
            <div className="motor-split medical-split">
              <div>
                <p>Comprehensive coverage… compliant with the Council of Health Insurance regulations</p>
                <p>
                  All medical insurance plans from Orient Saudi are designed in accordance with the Unified
                  Policy approved by the Council of Health Insurance, and include: (Insert the unified
                  benefits table from the Council of Health Insurance)
                </p>
                <p>
                  To design the most suitable plan for your company, contact our sales team — we’ll be happy
                  to assist you.
                </p>
              </div>
              <div className="motor-side-image">
                <img src="/images/medical-photo.jpg" alt="" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  )
}
