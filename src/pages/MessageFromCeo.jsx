import InnerPage from './InnerPage.jsx'

export default function MessageFromCeo() {
  return (
    <InnerPage title="MESSAGE FROM OUR CEO" hero="/images/ceo-hero.jpg">
      <section className="motor-block ceo-split">
        <div>
          <p>
            Insurance is a cornerstone of Saudi Arabia’s Vision 2030, underpinning economic transformation
            and sustainable development. As the Kingdom diversifies its economy, insurance enhances
            stability across key sectors, including health, infrastructure, and SMEs.
          </p>
          <p>
            The Financial Sector Development Program (FSDP) has prioritized insurance growth, aiming to
            increase penetration and its contribution to GDP. Recent regulatory reforms, including the
            establishment of the Insurance Authority, have strengthened oversight and market transparency.
            Mandatory coverage, digital innovation, and reinsurance mandates are driving sector maturity
            and resilience.
          </p>
          <p>
            Insurance supports investor confidence by mitigating risks associated with both large-scale and
            SME projects. The rise in gross written premiums reflects strong market momentum and potential
            for consolidation and growth. InsurTech and sandbox initiatives are accelerating innovation and
            customer-centric product development.
          </p>
          <p>
            Tailored insurance solutions will be key in supporting Saudi Arabia’s dynamic SME and startup
            ecosystem. Ultimately, a strong insurance sector is essential to realizing Vision 2030’s goals
            of a vibrant society and a thriving economy.
          </p>
          <p className="ceo-sign">
            Turki Al Shahrani
            <br />
            Chief Executive Officer
            <br />
            Orient Saudi Arabia
          </p>
        </div>
        <div className="motor-side-image ceo-photo">
          <img src="/images/ceo-photo.jpg" alt="Turki Al Shahrani" />
        </div>
      </section>
    </InnerPage>
  )
}
