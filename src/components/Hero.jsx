import { useEffect, useRef, useState } from 'react'

const updates = ['launching Motor online services', 'Orient Insurance Saudi Arabia Opening']
const SLIDE_MS = 5000

export default function Hero() {
  const [index, setIndex] = useState(0)
  const timer = useRef(null)

  const startTimer = () => {
    clearInterval(timer.current)
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % updates.length)
    }, SLIDE_MS)
  }

  useEffect(() => {
    startTimer()
    return () => clearInterval(timer.current)
  }, [])

  const prev = () => {
    setIndex((i) => (i - 1 + updates.length) % updates.length)
    startTimer()
  }

  const next = () => {
    setIndex((i) => (i + 1) % updates.length)
    startTimer()
  }

  return (
    <section className="hero" aria-label="Home banner">
      <h1 className="hero-title">Insurance That Works for You</h1>
      <div className="updates-wrap">
        <div className="updates-bar">
          <div className="updates-label">
            Latest
            <br />
            Updates
          </div>
          <div className="updates-slider">
            <div
              className="updates-track"
              style={{
                width: `${updates.length * 100}%`,
                transform: `translateX(-${index * (100 / updates.length)}%)`,
              }}
            >
              {updates.map((text) => (
                <p
                  className="updates-text"
                  key={text}
                  style={{ width: `${100 / updates.length}%` }}
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
          <div className="updates-arrows">
            <button type="button" onClick={prev} aria-label="Previous update">
              <img src="/images/left-slide.svg" alt="" />
            </button>
            <button type="button" onClick={next} aria-label="Next update">
              <img src="/images/right-slide.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
