import ArchiveListing from './ArchiveListing.jsx'

const items = [
  {
    title: 'Motor Compulsory Insurance Policy',
    image: '/images/archive-motor-compulsory.jpg',
    lead: 'Motor Compulsory Insurance Policy is a mandatory policy issued as part of prevention of public liability to protect the general public from any accident that might take place on the road.',
    bullets: [
      'The maximum limit of the Insurer’s liability for one event and during the lifetime of the Policy for physical damage, expenses and material damages shall not exceed together a total sum of SAR 10,000,000 (Ten Million Saudi Riyals) as a maximum liability limit for coverage.',
    ],
  },
  {
    title: 'Motor Plus',
    image: '/images/archive-motor-plus.jpg',
    lead: 'Motor Plus Insurance Policy: It is the policy which covers damage to the insured’s vehicle and the civil liability of the vehicle in which the insurer undertakes to compensate any third party in case of damage covered by the policy.',
    note: '*Rules and conditions apply',
  },
  {
    title: 'Motor Comprehensive',
    image: '/images/archive-motor-comprehensive.jpg',
    bullets: [
      'Loss or Damage to the Insured Vehicle: Under the Policy, the Company shall compensate Insured for any risk causing damage or loss to the Motor Vehicle; the coverage shall also include any damage caused by fire, theft, lightning or natural disasters such as floods and hail, along with vehicle towing and storage coverage. It also covers third-party civil liability as per the Unified Compulsory Motor Insurance Policy.',
    ],
  },
]

export default function MotorInsuranceArchive() {
  return <ArchiveListing category="Motor Insurance" items={items} />
}
