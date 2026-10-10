import InnerPage from './InnerPage.jsx'
import { termsHtml, privacyHtml } from '../data/legalHtml.js'

export function TermsOfUse() {
  return (
    <InnerPage title="TERMS OF USE" hero="/images/legal-hero.jpg" hideTitle bodyClass="legal-shell">
      <section className="legal-body" dangerouslySetInnerHTML={{ __html: termsHtml }} />
      <p className="legal-note">
        You may refer to principles and rules for protecting financial institution clients by clicking the
        button below:
      </p>
      <a
        className="legal-btn"
        href="https://orientinsurance.com.sa/wp-content/uploads/sites/39/2025/12/SAMA_AR_1989_VER1.pdf"
        target="_blank"
        rel="noreferrer"
      >
        View Principles &amp; Rules
      </a>
    </InnerPage>
  )
}

export function PrivacyPolicy() {
  return (
    <InnerPage title="PRIVACY POLICY" hero="/images/legal-hero.jpg" hideTitle bodyClass="legal-shell">
      <section className="legal-body" dangerouslySetInnerHTML={{ __html: privacyHtml }} />
    </InnerPage>
  )
}

export function ComingSoon() {
  return (
    <InnerPage title="COMING SOON" hero="/images/coming-hero.png" hideTitle bodyClass="coming-shell">
      <p className="coming-copy">
        This section is under construction to bring you the latest in insurance solutions. Check back soon!
      </p>
    </InnerPage>
  )
}
