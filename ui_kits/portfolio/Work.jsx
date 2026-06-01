/* Selected work — filter chips + responsive grid of project cards. */
function WorkCard({ p, lang, onOpen }) {
  return (
    <button className="wcard" onClick={() => onOpen(p)}>
      <div className="wcard__thumb" style={{ background: p.tone }}>
        <span className="wcard__idx num">{p.idx}</span>
        <span className="wcard__open"><i data-lucide="arrow-up-right" /></span>
      </div>
      <div className="wcard__body">
        <h3 className="wcard__title">{window.tt(p.title, lang)}</h3>
        <p className="wcard__meta">{window.tt(p.kind, lang)} · <span className="num">{p.year}</span></p>
      </div>
    </button>
  );
}

function Work({ lang, onOpen }) {
  const w = window.PORTFOLIO.work;
  const [filter, setFilter] = React.useState('all');
  const shown = w.projects.filter((p) => filter === 'all' || p.cat === filter);

  return (
    <section className="section" id="work">
      <div className="container">
        <div className="section__head">
          <div className="eyebrow">{window.tt(w.eyebrow, lang)}</div>
          <h2 className="section__title">{window.tt(w.title, lang)}</h2>
        </div>

        <div className="chips">
          {w.filters.map((f) => (
            <button
              key={f.id}
              className={'chip' + (filter === f.id ? ' chip--on' : '')}
              onClick={() => setFilter(f.id)}
            >
              {window.tt(f, lang)}
            </button>
          ))}
        </div>

        <div className="wgrid">
          {shown.map((p) => (<WorkCard key={p.idx} p={p} lang={lang} onOpen={onOpen} />))}
        </div>
      </div>
    </section>
  );
}
window.Work = Work;

/* Fullscreen-ish project overlay opened from a card. */
function ProjectOverlay({ p, lang, onClose }) {
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);
  if (!p) return null;
  return (
    <div className="overlay" onClick={onClose}>
      <div className="overlay__panel" onClick={(e) => e.stopPropagation()}>
        <button className="overlay__close" onClick={onClose} aria-label="Close"><i data-lucide="x" /></button>
        <div className="overlay__hero" style={{ background: p.tone }}>
          <span className="num overlay__idx">{p.idx}</span>
        </div>
        <div className="overlay__body">
          <div className="eyebrow">{window.tt(p.kind, lang)} · <span className="num">{p.year}</span></div>
          <h2 className="overlay__title">{window.tt(p.title, lang)}</h2>
          <p className="lead">{lang === 'ko'
            ? '케이스 스터디 자리표시자입니다. 실제 프로젝트 자산이 준비되면 이 영역에 들어갑니다.'
            : 'Case-study placeholder. Real project assets drop in here once supplied.'}</p>
        </div>
      </div>
    </div>
  );
}
window.ProjectOverlay = ProjectOverlay;
