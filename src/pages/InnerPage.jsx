export default function InnerPage({ title, hero, children, bodyClass = '', hideTitle = false, heroClass = '' }) {
  return (
    <article className="motor-page">
      <div
        className={`inner-hero ${hero ? '' : 'inner-hero-plain'} ${heroClass}`.trim()}
        style={hero ? { backgroundImage: `url(${hero})` } : undefined}
      >
        {!hideTitle && title ? (
          <div className="container">
            <h1>{title}</h1>
          </div>
        ) : null}
      </div>
      {children ? (
        <div className={`motor-body ${bodyClass}`}>
          <div className="container">{children}</div>
        </div>
      ) : null}
    </article>
  )
}
