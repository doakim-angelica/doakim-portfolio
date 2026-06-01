/* About — statement, stats row, services list. */
function About({ lang }) {
  const a = window.PORTFOLIO.about;
  return (
    <section className="section section--alt" id="about">
      <div className="container about">
        <div className="about__left">
          <div className="eyebrow">{window.tt(a.eyebrow, lang)}</div>
          <p className="about__body">{window.tt(a.body, lang)}</p>
          <div className="stats">
            {a.stats.map((s, i) => (
              <div className="stat" key={i}>
                <div className="stat__n num">{s.n}</div>
                <div className="stat__l">{window.tt(s.label, lang)}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="about__right">
          <ul className="services">
            {a.services.map((s, i) => (
              <li className="service" key={i}>
                <span className="service__idx num">{String(i + 1).padStart(2, '0')}</span>
                <span>{window.tt(s, lang)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
window.About = About;
