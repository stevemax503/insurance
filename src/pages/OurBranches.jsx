import InnerPage from './InnerPage.jsx'

export default function OurBranches() {
  return (
    <InnerPage title="KSA" hero="/images/ksa-hero.jpg">
      <section className="ksa-office">
        <p>
          <a>Head Office</a>
        </p>
        <p>Riyadh, Saudi Arabia</p>
        <p>
          Building No –3366
          <br />
          Street –Northen Ring Branch
          <br />
          District – Al Ghadeer
          <br />
          Postal Code –13311
        </p>
        <p>Tel : 800 111 0151</p>
        <p>
          Working Hours:
          <br />
          Sunday to Thursday
          <br />
          8 AM to 4 PM
        </p>
        <p>
          <a
            className="ksa-maps"
            href="https://maps.app.goo.gl/TwfLHWUqNXLx6ki17"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Maps
          </a>
        </p>
      </section>
    </InnerPage>
  )
}
