const coverage = [
  {
    title: 'Third-Party Liability Coverage:',
    text: 'Covers bodily injury and property damage caused to others due to accidents involving your vehicle.',
  },
  {
    title: 'Insured Vehicle Damage Coverage:',
    text: 'Covers the cost of repairing your insured vehicle in case of an accident, fire, or theft.',
  },
  {
    title: 'Roadside Assistance (Optional):',
    text: 'Includes towing, tire replacement, battery jump-start, and fuel delivery services.',
  },
  {
    title: 'Replacement Vehicle During Repairs (Optional):',
    text: 'Based on policy type or selected optional coverages.',
  },
  {
    title: 'Repairs at Authorized Agencies and Workshops:',
    text: 'Ensuring service quality and genuine spare parts.',
  },
  {
    title: 'Personal Accident Coverage for Driver and Passengers (Optional):',
    text: 'Compensation in case of bodily injury or death.',
  },
  {
    title: 'Geographic Extension Outside the Kingdom (Optional):',
    text: 'Covers the cost of repairs to the insured vehicle in case of accidents outside Saudi Arabia.',
  },
  {
    title: 'A Variety of Coverage Options at Competitive Prices:',
    text: 'Suitable for both individuals and companies.',
  },
]

export default function MotorInsurance() {
  return (
    <article className="motor-page">
      <div className="inner-hero" style={{ backgroundImage: 'url(/images/motor-hero.jpg)' }}>
        <div className="container">
          <h1>MOTOR INSURANCE</h1>
        </div>
      </div>

      <div className="motor-body">
        <div className="container">
          <section className="motor-block">
            <h2>Vehicle Insurance</h2>
            <p>
              Insure your personal or company vehicles with confidence, through flexible coverage options
              tailored to your needs.
              <br />
              At Orient Saudi Arabia, we provide insurance solutions designed to protect you on the
              road—whether you own a private vehicle or represent a business entity.
            </p>
          </section>

          <section className="motor-block">
            <h2>Types of Insurance:</h2>
            <p className="motor-types">
              • Third-Party Liability (Mandatory)
              <br />
              • Comprehensive Insurance
              <br />
              • Comprehensive Plus
              <br />
              • Vehicle Leasing Insurance for Individuals
            </p>
          </section>

          <section className="motor-block">
            <h2>Coverage That Protects You Wherever You Are</h2>
            <div className="motor-split">
              <div>
                <ul className="coverage-list">
                  {coverage.map((item) => (
                    <li key={item.title}>
                      {item.title} {item.text}
                    </li>
                  ))}
                </ul>
                <p className="motor-cta">
                  Start your vehicle insurance today – contact our sales team and we’ll be happy to assist
                  you.
                </p>
              </div>
              <div className="motor-side-image">
                <img src="/images/motor-coverage.jpg" alt="" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  )
}
