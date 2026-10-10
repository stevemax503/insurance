import Hero from '../components/Hero.jsx'
import IntroStats from '../components/IntroStats.jsx'
import FeatureBlocks from '../components/FeatureBlocks.jsx'
import PromoCards from '../components/PromoCards.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <section className="home-blue-band">
        <div className="home-blue-inner">
          <IntroStats />
          <FeatureBlocks />
        </div>
      </section>
      <PromoCards />
    </>
  )
}
