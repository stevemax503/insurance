import { NavLink } from 'react-router-dom'

export default function ArchiveListing({ category, nav, items }) {
  return (
    <article className="archive-page">
      <div className="archive-body">
        <div className="container archive-layout">
          <aside className="archive-sidebar">
            <nav className="archive-cat" aria-label="Categories">
              {nav ? (
                nav.map((item) => (
                  <NavLink key={item.to} to={item.to} className="archive-cat-label" end>
                    {item.label}
                  </NavLink>
                ))
              ) : (
                <span className="archive-cat-label">{category}</span>
              )}
            </nav>
          </aside>

          <div className="archive-list">
            {items.length === 0 ? (
              <p className="archive-empty">No posts found.</p>
            ) : (
              items.map((item) => (
                <section className="archive-item" key={item.title}>
                  <div className="archive-item-img">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="archive-item-body">
                    <h2>{item.title}</h2>
                    {item.lead ? <p>{item.lead}</p> : null}
                    {item.paragraphs?.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {item.bullets?.length ? (
                      <ul>
                        {item.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    ) : null}
                    {item.table?.length ? (
                      <table className="archive-table">
                        <tbody>
                          {item.table.map((row, index) => (
                            <tr key={`${row.type}-${index}`}>
                              {row.type === 'heading' ? (
                                <td colSpan={2}>
                                  <strong>{row.text}</strong>
                                </td>
                              ) : row.type === 'note' ? (
                                <td colSpan={2}>{row.text}</td>
                              ) : (
                                <>
                                  <td>{row.label}</td>
                                  <td className="archive-table-value">{row.value}</td>
                                </>
                              )}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : null}
                    {item.note ? <p className="archive-note">{item.note}</p> : null}
                  </div>
                </section>
              ))
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
