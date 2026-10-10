import { Link } from 'react-router-dom'

const cards = [
  {
    title: 'Motor /General',
    image: '/images/online-motor.jpg',
    href: 'https://general.orientinsurance.com.sa/webserviceportal/',
    text: '“Digital services for end‑to‑end management of motor insurance policies, including cancellation, policy printing, and claim submission.”',
  },
  {
    title: 'Medical',
    image: '/images/online-medical.jpg',
    to: '/coming-soon',
    text: 'Coming Soon',
  },
  {
    title: 'Saving and Protection',
    image: '/images/online-saving.jpg',
    to: '/coming-soon',
    text: 'Coming Soon',
  },
]

function CardLink({ card, children }) {
  if (card.href) {
    return (
      <a href={card.href} target="_blank" rel="noreferrer">
        {children}
      </a>
    )
  }
  return <Link to={card.to}>{children}</Link>
}

export default function OnlineServices() {
  return (
    <article className="online-page">
      <div className="container">
        <div className="online-grid">
          {cards.map((card) => (
            <article className="online-card" key={card.title}>
              <CardLink card={card}>
                <img src={card.image} alt="" />
              </CardLink>
              <h3>
                <CardLink card={card}>{card.title}</CardLink>
              </h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </article>
  )
}
