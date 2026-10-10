import { Route, Routes } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import MotorInsurance from './pages/MotorInsurance.jsx'
import MotorInsuranceArchive from './pages/MotorInsuranceArchive.jsx'
import GeneralInsurance from './pages/GeneralInsurance.jsx'
import PropertyInsurance from './pages/PropertyInsurance.jsx'
import MedicalInsurance from './pages/MedicalInsurance.jsx'
import SmeArchive from './pages/SmeArchive.jsx'
import GroupMedicalArchive from './pages/GroupMedicalArchive.jsx'
import ProtectionSaving from './pages/ProtectionSaving.jsx'
import OnlineServices from './pages/OnlineServices.jsx'
import AboutUs from './pages/AboutUs.jsx'
import OurProfile from './pages/OurProfile.jsx'
import MessageFromCeo from './pages/MessageFromCeo.jsx'
import AlFuttaim from './pages/AlFuttaim.jsx'
import RatingsAwards from './pages/RatingsAwards.jsx'
import ContactUs from './pages/ContactUs.jsx'
import Faq from './pages/Faq.jsx'
import ContactDetails from './pages/ContactDetails.jsx'
import { TermsOfUse, PrivacyPolicy, ComingSoon } from './pages/LegalPages.jsx'
import { NewsArchive, EventsArchive } from './pages/MediaPages.jsx'
import NewsArticle from './pages/NewsArticle.jsx'
import PlaceholderPage from './pages/PlaceholderPage.jsx'
import OurBranches from './pages/OurBranches.jsx'
import AccessibilityWidget from './components/AccessibilityWidget.jsx'
import { newsItems } from './data/news.js'

const laterPages = [
  ['/customer-services', 'Customer Services'],
  ['/buy-online', 'Shop Online'],
]

export default function App() {
  return (
    <>
      <div id="outer-wrap">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/motor-insurance" element={<MotorInsurance />} />
            <Route path="/personal-insurance/motor-insurance" element={<MotorInsuranceArchive />} />
            <Route path="/general-insurance" element={<GeneralInsurance />} />
            <Route path="/general-insurance/property-insurance" element={<PropertyInsurance />} />
            <Route path="/medical-insurance" element={<MedicalInsurance />} />
            <Route path="/medical-insurance/sme" element={<SmeArchive />} />
            <Route path="/medical-insurance/group" element={<GroupMedicalArchive />} />
            <Route path="/saving-and-protection" element={<ProtectionSaving />} />
            <Route path="/online-services" element={<OnlineServices />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/our-profile" element={<OurProfile />} />
            <Route path="/about-us/message-from-our-ceo" element={<MessageFromCeo />} />
            <Route path="/al-futtaim" element={<AlFuttaim />} />
            <Route path="/about-us/ratings-awards" element={<RatingsAwards />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact-details" element={<ContactDetails />} />
            <Route path="/media-center" element={<NewsArchive />} />
            <Route path="/media-center/news" element={<NewsArchive />} />
            <Route path="/media-center/events" element={<EventsArchive />} />
            {newsItems.map((item) => (
              <Route key={item.slug} path={`/${item.slug}`} element={<NewsArticle slug={item.slug} />} />
            ))}
            <Route path="/ksa" element={<OurBranches />} />
            <Route path="/our-branches" element={<OurBranches />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/coming-soon" element={<ComingSoon />} />
            {laterPages.map(([path, title]) => (
              <Route key={path} path={path} element={<PlaceholderPage title={title} />} />
            ))}
          </Routes>
        </main>
        <Footer />
      </div>
      <AccessibilityWidget />
    </>
  )
}
