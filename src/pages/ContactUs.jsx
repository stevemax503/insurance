import { useState } from 'react'

const products = ['Motor', 'Life', 'Health', 'General', 'Others']

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2.2A6.8 6.8 0 0 0 5.2 9c0 5.1 6.8 12.6 6.8 12.6S18.8 14.1 18.8 9A6.8 6.8 0 0 0 12 2.2zm0 9.2A2.4 2.4 0 1 1 12 6.6a2.4 2.4 0 0 1 0 4.8z"
      />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M7.2 3.6h3.1c.4 0 .8.3.9.7l.7 2.6c.1.4 0 .8-.3 1.1L9.8 9.8a12.4 12.4 0 0 0 4.4 4.4l1.8-1.8c.3-.3.7-.4 1.1-.3l2.6.7c.4.1.7.5.7.9v3.1c0 .5-.4.9-.9.9C10.8 20.7 3.3 13.2 3.3 4.5c0-.5.4-.9.9-.9z"
      />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        d="M4.5 8.2 12 13l7.5-4.8M5.2 18h13.6c.7 0 1.2-.5 1.2-1.2V7.2c0-.7-.5-1.2-1.2-1.2H5.2C4.5 6 4 6.5 4 7.2v9.6c0 .7.5 1.2 1.2 1.2z"
      />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" d="M12 7.8V12l3.1 2" />
    </svg>
  )
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="none" stroke="currentColor" strokeWidth="2.4" d="M9 6l6 6-6 6" />
    </svg>
  )
}

export default function ContactUs() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <article className="motor-page">
      <div className="inner-hero" style={{ backgroundImage: 'url(/images/contact-hero.jpg)' }}>
        <div className="container">
          <h1>CONTACT US</h1>
        </div>
      </div>

      <div className="motor-body contact-shell">
        <div className="container">
          <div className="contact-layout">
            <aside className="contact-info">
              <div className="contact-info-item">
                <span className="contact-icon">
                  <PinIcon />
                </span>
                <div>
                  <h4>Riyadh, Saudi Arabia</h4>
                  <p>
                    Building No –3366
                    <br />
                    Street –Northen Ring Branch
                    <br />
                    District – Al Ghadeer
                    <br />
                    Postal Code –13311
                  </p>
                </div>
              </div>

              <div className="contact-info-item contact-info-item-center">
                <a className="contact-icon" href="tel:8001110151" aria-label="800 111 0151">
                  <PhoneIcon />
                </a>
                <h4>
                  <a href="tel:8001110151">800 111 0151</a>
                </h4>
              </div>

              <div className="contact-info-item contact-info-item-center">
                <a
                  className="contact-icon"
                  href="mailto:CustomerServices@OrientInsurance.com.sa"
                  aria-label="CustomerServices@OrientInsurance.com.sa"
                >
                  <MailIcon />
                </a>
                <h4>
                  <a href="mailto:CustomerServices@OrientInsurance.com.sa">
                    CustomerServices@OrientInsurance.com.sa
                  </a>
                </h4>
              </div>

              <div className="contact-info-item">
                <span className="contact-icon">
                  <ClockIcon />
                </span>
                <div>
                  <h4>8am - 4pm</h4>
                  <p>Sunday to Thursday</p>
                </div>
              </div>
            </aside>

            <section className="contact-form-wrap">
              {sent ? (
                <div>
                  <h2>Thank you for your enquiry</h2>
                  <p>
                    Your enquiry has been successfully submitted and will be directed to the concerned
                    department.
                  </p>
                </div>
              ) : (
                <>
                  <h2>Send Us an Enquiry</h2>
                  <form className="contact-form" onSubmit={onSubmit}>
                    <label>
                      <span>
                        Full Name <span className="req">*</span>
                      </span>
                      <input name="name" required />
                    </label>
                    <label>
                      <span>
                        Email Address <span className="req">*</span>
                      </span>
                      <input type="email" name="email" required />
                    </label>
                    <label>
                      <span>
                        Phone Number <span className="req">*</span>
                      </span>
                      <input name="phone" maxLength={15} required />
                    </label>
                    <label>
                      <span>
                        National ID/ Iqama <span className="req">*</span>
                      </span>
                      <input name="national_id" required />
                    </label>
                    <label className="contact-span">
                      <span>
                        Select Product <span className="req">*</span>
                      </span>
                      <select name="product" required defaultValue="">
                        <option value="" disabled>
                          Select Product
                        </option>
                        {products.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label className="contact-span">
                      <span>
                        Message <span className="req">*</span>
                      </span>
                      <textarea name="message" maxLength={2000} required rows={6} />
                    </label>
                    <div className="contact-actions">
                      <button type="submit">
                        <ChevronIcon />
                        SUBMIT
                      </button>
                      <button type="reset">RESET</button>
                    </div>
                  </form>
                </>
              )}
            </section>
          </div>
        </div>
      </div>
    </article>
  )
}
