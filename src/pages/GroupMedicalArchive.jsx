import ArchiveListing from './ArchiveListing.jsx'

const medicalNav = [
  { label: 'SME', to: '/medical-insurance/sme' },
  { label: 'Group Medical Insurance', to: '/medical-insurance/group' },
]

const items = [
  {
    title: 'Group Medical Insurance',
    image: '/images/archive-group.jpg',
    paragraphs: [
      'Our wide range of such covers with various choices consists of many Plans and Options including International Coverage extensions. We offer Member Access Cards to our extensive Network of Providers who then bill us directly. Our CASHLESS MEDICAL PLANS compare favourably with the best schemes available in the market.',
      'The Area of Cover or Territory can be within the  Arab Countries, South East Asia or even can be extended on a worldwide basis.',
      'Our Medical Insurance Division has more than 15 years of experience in providing quality health care coverage.',
      'We offer flexible products to meet the health needs and budget of residents across the spectrum. Orient has a diversified portfolio of products that includes global and local plans.',
      'Our Reinsurance partners are world renowned “A” Rated companies. We have the support of the best Third Party Administrators with a comprehensive provider network in the the Region.',
      'Our Group Plans are flexible and can be tailor-made to suit client requirements both in terms of Benefits and Budget at the same time providing high quality service.',
      'The Administration of the Schemes are carried out by Third Parthy Administrators who are specialists in this field providing twenty four hours of service throughout the year.',
    ],
  },
]

export default function GroupMedicalArchive() {
  return <ArchiveListing nav={medicalNav} items={items} />
}
