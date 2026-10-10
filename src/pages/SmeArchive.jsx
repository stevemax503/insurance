import ArchiveListing from './ArchiveListing.jsx'
import { smeTable } from '../data/smeTable.js'

const medicalNav = [
  { label: 'SME', to: '/medical-insurance/sme' },
  { label: 'Group Medical Insurance', to: '/medical-insurance/group' },
]

const items = [
  {
    title: 'Medical Insurance for SMEs',
    image: '/images/archive-sme.jpg',
    paragraphs: [
      'Comprehensive coverage… compliant with the Council of Health Insurance regulations',
      'All medical insurance plans from Orient Saudi are designed in accordance with the Unified Policy approved by the Council of Health Insurance, and include:',
    ],
    table: smeTable,
  },
]

export default function SmeArchive() {
  return <ArchiveListing nav={medicalNav} items={items} />
}
