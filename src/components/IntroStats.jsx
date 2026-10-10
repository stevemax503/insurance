import { useEffect, useState } from 'react'

function useCountUp(target, duration = 2000) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let frame
    const start = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      setValue(Math.floor(progress * target))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, duration])

  return value
}

function formatNumber(n) {
  return n.toLocaleString('en-US')
}

const stats = [
  {
    to: 1700,
    duration: 2000,
    label: 'multi-culture employee',
    icon: '/images/employees-icon.svg',
    className: '',
  },
  {
    to: 40,
    duration: 2000,
    label: 'years of operation',
    icon: '/images/years-icon.svg',
    className: '',
  },
  {
    to: 7,
    duration: 1000,
    label: 'countries',
    icon: '/images/countries-icon.svg',
    className: 'countries',
  },
]

function Stat({ to, duration, label, icon, className }) {
  const value = useCountUp(to, duration)
  return (
    <div className={`stat ${className}`}>
      <img src={icon} alt="" />
      <div>
        <div className="stat-number">{formatNumber(value)}</div>
        <div className="stat-label">{label}</div>
      </div>
    </div>
  )
}

export default function IntroStats() {
  return (
    <div className="intro-stats">
      <p className="intro-copy">
        Orient Insurance Company is a customer oriented insurer with over 40 years of experience in the UAE
        insurance market. The Company fully understands the customers' needs and is geared to provide innovative
        risk solutions to their entire satisfaction.
      </p>
      <div className="stats-row">
        {stats.map((stat) => (
          <Stat key={stat.label} {...stat} />
        ))}
      </div>
    </div>
  )
}
