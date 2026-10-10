import { useEffect, useMemo, useState } from 'react'

const STORAGE_KEY = 'orient-a11y'
const DEFAULT = { fontSize: 100, active: [], lang: 'en' }

const LANGUAGES = [
  { code: 'en', label: 'English (English)' },
  { code: 'am', label: 'አማርኛ (Amharic)' },
  { code: 'ar', label: 'العربية (Arabic)' },
  { code: 'bg', label: 'български (Bulgarian)' },
  { code: 'bn', label: 'বাংলা (Bengali)' },
  { code: 'ca', label: 'Català (Catalan)' },
  { code: 'cs', label: 'Čeština (Czech)' },
  { code: 'da', label: 'Dansk (Danish)' },
  { code: 'de', label: 'Deutsch (German)' },
  { code: 'el', label: 'Ελληνικά (Greek)' },
  { code: 'es', label: 'Español (Spanish)' },
  { code: 'fa', label: 'فارسی (Persian)' },
  { code: 'fi', label: 'Suomi (Finnish)' },
  { code: 'fr', label: 'Français (French)' },
  { code: 'he', label: 'עברית (Hebrew)' },
  { code: 'hi', label: 'हिन्दी (Hindi)' },
  { code: 'hr', label: 'Hrvatski (Croatian)' },
  { code: 'hu', label: 'Magyar (Hungarian)' },
  { code: 'id', label: 'Bahasa Indonesia (Indonesian)' },
  { code: 'it', label: 'Italiano (Italian)' },
  { code: 'ja', label: '日本語 (Japanese)' },
  { code: 'ko', label: '한국어 (Korean)' },
  { code: 'nl', label: 'Nederlands (Dutch)' },
  { code: 'no', label: 'Norsk (Norwegian)' },
  { code: 'pl', label: 'Polski (Polish)' },
  { code: 'pt', label: 'Português (Portuguese)' },
  { code: 'ro', label: 'Română (Romanian)' },
  { code: 'ru', label: 'Русский (Russian)' },
  { code: 'sv', label: 'Svenska (Swedish)' },
  { code: 'th', label: 'ไทย (Thai)' },
  { code: 'tr', label: 'Türkçe (Turkish)' },
  { code: 'uk', label: 'Українська (Ukrainian)' },
  { code: 'ur', label: 'اردو (Urdu)' },
  { code: 'vi', label: 'Tiếng Việt (Vietnamese)' },
  { code: 'zh', label: '中文 (Chinese)' },
]

const COPY = {
  en: {
    title: 'Accessibility menu',
    content: 'Content adjustments',
    colours: 'Colour adjustments',
    navigation: 'Navigation adjustments',
    fontSize: 'Adjust Font Size',
    'highlight-title': 'Highlight Title',
    'highlight-links': 'Highlight Links',
    dyslexia: 'Dyslexia Font',
    'letter-spacing': 'Letter Spacing',
    'line-height': 'Line Height',
    'font-weight': 'Font Weight',
    'align-left': 'Align Left',
    'dark-contrast': 'Dark Contrast',
    'light-contrast': 'Light Contrast',
    'high-contrast': 'High Contrast',
    'high-sat': 'High Saturation',
    'low-sat': 'Low Saturation',
    mono: 'Monochrome',
    'reading-guide': 'Reading Guide',
    'stop-anim': 'Stop Animations',
    'big-cursor': 'Big Cursor',
    reset: 'Reset settings',
    search: 'Search languages',
    close: 'Close accessibility menu',
  },
  ar: {
    title: 'قائمة إمكانية الوصول',
    content: 'تعديلات المحتوى',
    colours: 'تعديلات الألوان',
    navigation: 'تعديلات التنقل',
    fontSize: 'ضبط حجم الخط',
    'highlight-title': 'تمييز العنوان',
    'highlight-links': 'تمييز الروابط',
    dyslexia: 'خط عسر القراءة',
    'letter-spacing': 'المسافة بين الحروف',
    'line-height': 'ارتفاع السطر',
    'font-weight': 'سمك الخط',
    'align-left': 'محاذاة لليسار',
    'dark-contrast': 'تباين داكن',
    'light-contrast': 'تباين فاتح',
    'high-contrast': 'تباين عالٍ',
    'high-sat': 'تشبع عالٍ',
    'low-sat': 'تشبع منخفض',
    mono: 'أحادي اللون',
    'reading-guide': 'دليل القراءة',
    'stop-anim': 'إيقاف الحركات',
    'big-cursor': 'مؤشر كبير',
    reset: 'إعادة ضبط الإعدادات',
    search: 'البحث عن اللغات',
    close: 'إغلاق قائمة إمكانية الوصول',
  },
}

const CONTENT = [
  { id: 'highlight-title', icon: 'title' },
  { id: 'highlight-links', icon: 'link' },
  { id: 'dyslexia', icon: 'dyslexia' },
  { id: 'letter-spacing', icon: 'spacing' },
  { id: 'line-height', icon: 'height' },
  { id: 'font-weight', icon: 'weight' },
  { id: 'align-left', icon: 'align' },
]

const COLOURS = [
  { id: 'dark-contrast', icon: 'moon' },
  { id: 'light-contrast', icon: 'sun' },
  { id: 'high-contrast', icon: 'contrast' },
  { id: 'high-sat', icon: 'drop-full' },
  { id: 'low-sat', icon: 'drop-empty' },
  { id: 'mono', icon: 'drop-half' },
]

const NAV = [
  { id: 'reading-guide', icon: 'guide' },
  { id: 'stop-anim', icon: 'pause' },
  { id: 'big-cursor', icon: 'cursor' },
]

const EXCLUSIVE = [
  ['dark-contrast', 'light-contrast', 'high-contrast'],
  ['high-sat', 'low-sat', 'mono'],
]

function loadSettings() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return DEFAULT
    const parsed = JSON.parse(raw)
    return {
      fontSize: typeof parsed.fontSize === 'number' ? parsed.fontSize : 100,
      active: Array.isArray(parsed.active) ? parsed.active : [],
      lang: parsed.lang || 'en',
    }
  } catch {
    return DEFAULT
  }
}

function TileIcon({ name }) {
  switch (name) {
    case 'title':
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <rect x="6" y="6" width="20" height="20" rx="3" fill="none" stroke="currentColor" strokeWidth="1.7" />
          <text x="16" y="21" textAnchor="middle" fontSize="14" fontWeight="700" fill="currentColor">
            T
          </text>
        </svg>
      )
    case 'link':
      return (
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path d="M14 18l4-4m-6 2-3 3a4 4 0 1 0 5.7 5.7l3-3m4-4 3-3a4 4 0 1 0-5.7-5.7l-3 3" />
        </svg>
      )
    case 'dyslexia':
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <text x="4" y="22" fontSize="16" fontWeight="600" fill="currentColor">
            Df
          </text>
        </svg>
      )
    case 'spacing':
      return (
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
          <text x="6" y="20" fontSize="12" fill="currentColor" stroke="none">
            A
          </text>
          <text x="18" y="20" fontSize="12" fill="currentColor" stroke="none">
            V
          </text>
          <path d="M14 12v8M14 12l-2 2M14 12l2 2M14 20l-2-2M14 20l2-2" />
        </svg>
      )
    case 'height':
      return (
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
          <path d="M10 8h12M10 24h12M16 8v16M16 8l-3 3M16 8l3 3M16 24l-3-3M16 24l3-3" />
        </svg>
      )
    case 'weight':
      return (
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
          <path d="M8 24V8h8.5a5 5 0 0 1 0 10H8" />
          <path d="M11 11h8M9 21h14" />
        </svg>
      )
    case 'align':
      return (
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path d="M8 10h16M8 16h12M8 22h16" />
        </svg>
      )
    case 'moon':
      return (
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
          <path d="M20 8.5A9 9 0 1 1 11 24a8 8 0 0 0 9-15.5z" />
        </svg>
      )
    case 'sun':
      return (
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
          <circle cx="16" cy="16" r="5" />
          <path d="M16 5v3M16 24v3M5 16h3M24 16h3M8 8l2 2M22 22l2 2M24 8l-2 2M10 22l-2 2" />
        </svg>
      )
    case 'contrast':
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <circle cx="16" cy="16" r="9" fill="none" stroke="currentColor" strokeWidth="1.7" />
          <path d="M16 7a9 9 0 0 1 0 18z" fill="currentColor" />
        </svg>
      )
    case 'drop-full':
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M16 6s8 10 8 15a8 8 0 1 1-16 0c0-5 8-15 8-15z" fill="currentColor" />
        </svg>
      )
    case 'drop-empty':
      return (
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
          <path d="M16 6s8 10 8 15a8 8 0 1 1-16 0c0-5 8-15 8-15z" />
        </svg>
      )
    case 'drop-half':
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path
            d="M16 6s8 10 8 15a8 8 0 1 1-16 0c0-5 8-15 8-15z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path d="M16 7.5v20a7.5 7.5 0 0 0 0-20z" fill="currentColor" />
        </svg>
      )
    case 'guide':
      return (
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
          <rect x="8" y="7" width="16" height="12" rx="1.5" />
          <path d="M12 23h8M16 19v8" />
        </svg>
      )
    case 'pause':
      return (
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
          <circle cx="16" cy="16" r="10" />
          <path d="M13 12v8M19 12v8" />
        </svg>
      )
    case 'cursor':
      return (
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
          <path d="M10 6l12 10-6 1 3 8-3 1-3-8-3 5z" />
        </svg>
      )
    default:
      return null
  }
}

function applySettings({ fontSize, active, lang }) {
  const page = document.getElementById('outer-wrap') || document.documentElement
  const root = document.documentElement
  const classes = [
    'highlight-title',
    'highlight-links',
    'dyslexia',
    'letter-spacing',
    'line-height',
    'font-weight',
    'align-left',
    'dark-contrast',
    'high-contrast',
    'reading-guide',
    'stop-anim',
    'big-cursor',
  ]
  classes.forEach((id) => page.classList.toggle(`a11y-${id}`, active.includes(id)))
  root.classList.toggle('a11y-big-cursor', active.includes('big-cursor'))
  const filters = []
  if (active.includes('light-contrast')) filters.push('invert(1)', 'hue-rotate(180deg)')
  if (active.includes('high-sat')) filters.push('saturate(1.9)')
  if (active.includes('low-sat')) filters.push('saturate(0.32)')
  if (active.includes('mono')) filters.push('grayscale(1)')
  page.style.filter = filters.join(' ')
  page.style.zoom = fontSize === 100 ? '' : String(fontSize / 100)
  root.lang = lang
}

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [langQuery, setLangQuery] = useState('')
  const [settings, setSettings] = useState(DEFAULT)
  const [guideY, setGuideY] = useState(280)

  useEffect(() => {
    const stored = loadSettings()
    setSettings(stored)
    applySettings(stored)
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
    applySettings(settings)
  }, [settings])

  useEffect(() => {
    if (!settings.active.includes('reading-guide')) return undefined
    const onMove = (event) => setGuideY(event.clientY)
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [settings.active])

  const language = LANGUAGES.find((item) => item.code === settings.lang) || LANGUAGES[0]
  const copy = COPY[settings.lang] || COPY.en
  const filteredLangs = useMemo(() => {
    const q = langQuery.trim().toLowerCase()
    if (!q) return LANGUAGES
    return LANGUAGES.filter((item) => item.label.toLowerCase().includes(q) || item.code.includes(q))
  }, [langQuery])

  const toggle = (id) => {
    setSettings((current) => {
      const group = EXCLUSIVE.find((ids) => ids.includes(id))
      let next = current.active.includes(id)
        ? current.active.filter((item) => item !== id)
        : [...current.active, id]
      if (group && !current.active.includes(id)) {
        next = next.filter((item) => item === id || !group.includes(item))
      }
      return { ...current, active: next }
    })
  }

  const reset = () => {
    setSettings(DEFAULT)
    setLangQuery('')
    setLangOpen(false)
  }

  const changeFont = (delta) => {
    setSettings((current) => ({
      ...current,
      fontSize: Math.min(180, Math.max(80, current.fontSize + delta)),
    }))
  }

  return (
    <div className="a11y-root">
      {settings.active.includes('reading-guide') ? (
        <div className="a11y-guide" style={{ top: guideY }} />
      ) : null}

      {open ? (
        <section className="a11y-panel" aria-label={copy.title} lang={settings.lang}>
          <header className="a11y-panel-head">
            <div className="a11y-panel-brand">
              <span className="a11y-logo" aria-hidden="true">
                ×
              </span>
              {copy.title}
            </div>
            <div className="a11y-panel-actions">
              <button type="button" aria-label={copy.reset} onClick={reset}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 12a8 8 0 1 0 2.3-5.7M4 5v5h5" />
                </svg>
              </button>
              <button type="button" aria-label={copy.close} onClick={() => setOpen(false)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>
          </header>

          <div className="a11y-panel-body">
            <button type="button" className="a11y-lang" onClick={() => setLangOpen((value) => !value)}>
              <span className="a11y-lang-code">{language.code.toUpperCase()}</span>
              <span className="a11y-lang-name">{language.label}</span>
              <span className="a11y-lang-chevron">{langOpen ? '▾' : '›'}</span>
            </button>

            {langOpen ? (
              <div className="a11y-lang-menu">
                <input
                  type="search"
                  placeholder={copy.search}
                  value={langQuery}
                  onChange={(e) => setLangQuery(e.target.value)}
                  aria-label={copy.search}
                />
                <ul>
                  {filteredLangs.map((item) => (
                    <li key={item.code}>
                      <button
                        type="button"
                        className={item.code === settings.lang ? 'active' : ''}
                        onClick={() => {
                          setSettings((current) => ({ ...current, lang: item.code }))
                          setLangOpen(false)
                          setLangQuery('')
                        }}
                      >
                        <span className="a11y-lang-code">{item.code.toUpperCase()}</span>
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <h3>{copy.content}</h3>
            <div className="a11y-grid">
              <div className="a11y-tile a11y-tile-wide">
                <div className="a11y-font-row">
                  <span className="a11y-tt" aria-hidden="true">
                    T<span>t</span>
                  </span>
                  {copy.fontSize}
                </div>
                <div className="a11y-font-controls">
                  <button type="button" onClick={() => changeFont(-10)} aria-label="Decrease font size">
                    −
                  </button>
                  <span>{settings.fontSize}%</span>
                  <button type="button" onClick={() => changeFont(10)} aria-label="Increase font size">
                    +
                  </button>
                </div>
              </div>
              {CONTENT.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={`a11y-tile${settings.active.includes(item.id) ? ' on' : ''}`}
                  onClick={() => toggle(item.id)}
                >
                  {settings.active.includes(item.id) ? <span className="a11y-check">✓</span> : null}
                  <TileIcon name={item.icon} />
                  {copy[item.id]}
                </button>
              ))}
            </div>

            <h3>{copy.colours}</h3>
            <div className="a11y-grid">
              {COLOURS.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={`a11y-tile${settings.active.includes(item.id) ? ' on' : ''}`}
                  onClick={() => toggle(item.id)}
                >
                  {settings.active.includes(item.id) ? <span className="a11y-check">✓</span> : null}
                  <TileIcon name={item.icon} />
                  {copy[item.id]}
                </button>
              ))}
            </div>

            <h3>{copy.navigation}</h3>
            <div className="a11y-grid">
              {NAV.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={`a11y-tile${settings.active.includes(item.id) ? ' on' : ''}`}
                  onClick={() => toggle(item.id)}
                >
                  {settings.active.includes(item.id) ? <span className="a11y-check">✓</span> : null}
                  <TileIcon name={item.icon} />
                  {copy[item.id]}
                </button>
              ))}
            </div>

            <button type="button" className="a11y-reset" onClick={reset}>
              {copy.reset}
            </button>
            <p className="a11y-credit">
              <span className="a11y-logo" aria-hidden="true">
                ×
              </span>
              AccessYes <span>by CookieYes</span>
            </p>
          </div>
        </section>
      ) : null}

      {open ? null : (
        <button
          type="button"
          className="a11y-launcher"
          aria-label={copy.title}
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <svg viewBox="0 0 48 48" aria-hidden="true">
            <circle cx="24" cy="12.5" r="4.4" fill="#fff" />
            <path
              d="M15.5 20.5L24 29l8.5-8.5M15.5 37.5L24 29l8.5 8.5"
              fill="none"
              stroke="#fff"
              strokeWidth="4.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </div>
  )
}
