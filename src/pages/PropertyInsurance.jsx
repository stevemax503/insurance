import ArchiveListing from './ArchiveListing.jsx'

const items = [
  {
    title: 'Marine & Aviation',
    image: '/images/property-marine.jpg',
    bullets: [
      'Marine Cargo Single Transit',
      'Goods in Transit Annual – KSA',
      'Marine Cargo Open Cover',
      'Marine Hull & Machinery',
      'Aviation Hull & Liability',
    ],
  },
  {
    title: 'Engineering',
    image: '/images/property-engineering.jpg',
    bullets: [
      'Erection All Risks',
      'Contractor All Risks',
      'Machinery Breakdown',
      'Electronic Equipment',
      'Contractor Plant & Machinery Insurance',
      'Deterioration of Stocks',
      'Boiler and Pressure Plant',
    ],
  },
  {
    title: 'General Accident and Liability',
    image: '/images/property-accident.jpg',
    bullets: [
      'Fidelity Guarantees',
      'Money Insurance',
      'Public Liability Insurance',
      'Commercial General Liability',
      'Workmen Compensation Insurance',
    ],
  },
  {
    title: 'Speciality',
    image: '/images/property-speciality.jpg',
    bullets: [
      'Professional Indemnity Insurance – Architects and Engineers',
      'Professional Indemnity Insurance – IT Consultants',
      'Professional Indemnity Insurance – Single Project Specific Policy',
      'Professional Indemnity Insurance – Accountants',
      'Professional Indemnity Insurance – Lawyers',
      'Professional Indemnity Insurance – Financial Institutions (FIPI)',
      'Professional Indemnity Insurance – Miscellaneous',
      'Medical Malpractice',
      'Directors and Officers for Financial Institution',
      'Directors and Officers for Non-financial Institution',
    ],
  },
  {
    title: 'Property & Engineering Insurance',
    image: '/images/property-allrisks.jpg',
    lead: 'The cover provided under the policy is usually granted after a satisfactory Risk Inspection and is made subject to a specified deductible for each water damage claim. Among the main exclusions, the policy specifically excludes Water Damage to Property in the open or open-sided buildings.',
    bullets: [
      'Burglary Insurance',
      'Business Interruption Insurance',
      'Fire & Allied Perils Insurance',
      'Property All Risks Insurance',
      'Terrorism Insurance',
    ],
  },
  {
    title: 'Energy',
    image: '/images/property-energy.jpg',
    bullets: [
      'Energy Downstream Operational Insurance',
      'Energy Mobile Offshore Drilling Units',
      'Energy Offshore Construction Policy',
      'Energy Offshore Operational Package Policy',
      'Energy Onshore Construction Insurance',
      'Energy Upstream Operators Extra Expenses Insurance',
      'Energy Offshore Operational',
      'Energy Onshore Upstream Operational– Excess Liability',
      'Energy Onshore Upstream Operational– Oil & Gas Well Drilling',
      'Energy Onshore Upstream Operational– Land Rigs – Floater Form',
    ],
  },
]

export default function PropertyInsurance() {
  return <ArchiveListing category="Property Insurance" items={items} />
}
