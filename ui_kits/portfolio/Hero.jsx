/* Editorial hero — eyebrow, oversized statement, lead, CTAs, availability dot. */
function Hero({ lang, onNav }) {
  const h = window.PORTFOLIO.hero;
  const title = window.tt(h.title, lang);
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="reveal hero__eyebrow eyebrow">{window.tt(h.eyebrow, lang)}</div>
        <h1 className="reveal hero__title" style={{ '--d': '40ms' }}>
          {title.map((line, i) => (<span key={i} className="hero__line">{line}</span>))}
        </h1>
        <p className="reveal hero__lead lead" style={{ '--d': '120ms' }}>{window.tt(h.lead, lang)}</p>
        <div className="reveal hero__actions" style={{ '--d': '200ms' }}>
          <button className="btn btn--primary" onClick={() => onNav('work')}>
            {window.tt(h.primary, lang)} <span className="arrow">→</span>
          </button>
          <button className="btn btn--secondary" onClick={() => onNav('about')}>
            {window.tt(h.secondary, lang)}
          </button>
          <span className="hero__status">
            <i className="livedot" />{window.tt(h.status, lang)}
          </span>
        </div>
      </div>
      <div className="container hero__rule" />
    </section>
  );
}
window.Hero = Hero;
