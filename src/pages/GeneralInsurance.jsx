const types = [
  'PROPERTY',
  'ENGINEERING',
  'GENERAL ACCIDENT AND LIABILITY',
  'SPECIALITY',
  'MARINE & AVIATION',
  'TRAVEL',
  'ENERGY',
]

const highlights = [
  { label: 'Property All Risk Insurance (PAR)' },
  { label: 'Contractor All Risks Insurance (CAR)' },
  { label: 'Erection All Risks Insurance (EAR)' },
  { label: 'Business Interruption Insurance', note: '(including Loss of Profits)' },
  { label: 'Money Insurance' },
  { label: 'Fidelity Guarantee Insurance' },
  { label: 'Public Liability and Workmen Compensation Insurance' },
  { label: 'Specialized Professional Indemnity' },
  { label: 'Marine Cargo and Hull Insurance' },
  { label: 'Travel Insurance' },
  { label: 'Energy Project Insurance', note: '(onshore and offshore)' },
]

export default function GeneralInsurance() {
  return (
    <article className="motor-page">
      <div className="inner-hero" style={{ backgroundImage: 'url(/images/general-hero.jpg)' }}>
        <div className="container">
          <h1>GENERAL INSURANCE</h1>
        </div>
      </div>

      <div className="motor-body">
        <div className="container">
          <section className="motor-block">
            <h2>General Insurance</h2>
            <p className="product-lead">Protect your property and manage your liabilities with confidence.</p>
            <p>
              Our comprehensive insurance solutions are designed to secure your operations against unexpected
              risks—helping you focus on growth, not uncertainty.
            </p>
          </section>

          <section className="motor-block">
            <h2>Types of Insurance:</h2>
            <p className="type-pills">
              {types.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </p>
            <p className="product-lead">Reliable Coverage. Tailored to Your Business.</p>
            <p>
              We offer flexible and comprehensive general insurance solutions that provide your organization
              with the security it needs to face daily risks—ensuring operational continuity and peace of
              mind.
            </p>
          </section>

          <section className="motor-block">
            <p className="product-lead">Coverage Highlights</p>
            <p>Here are some of the key products available across our General Insurance portfolio:</p>
            <ul className="coverage-list">
              {highlights.map((item) => (
                <li key={item.label}>
                  <strong>{item.label}</strong>
                  {item.note ? (
                    <>
                      {' '}
                      <em>{item.note}</em>
                    </>
                  ) : null}
                </li>
              ))}
            </ul>
            <p>
              Each insurance package is tailored to your specific needs—whether for fixed assets, projects
              under execution, or specialized liability protection.
            </p>
            <p className="product-lead">Your Business Is Unique. Your Insurance Should Be, Too.</p>
            <p>Let’s build the right protection for your business.</p>
            <p className="contact-sales">📞 Contact Our Sales Team Today</p>
            <div className="general-photo">
              <img src="/images/general-photo.jpg" alt="" />
            </div>
          </section>
        </div>
      </div>
    </article>
  )
}
