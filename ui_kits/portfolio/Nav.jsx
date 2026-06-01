/* Sticky top navigation — logo, section links, KO/EN toggle, CTA, mobile menu. */
function Nav({ lang, setLang, onNav, active }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const links = window.PORTFOLIO.nav.links;

  React.useEffect(() => {
    const el = document.querySelector('.pk-scroll') || window;
    const target = el === window ? document.documentElement : el;
    const onScroll = () => setScrolled((target.scrollTop || 0) > 24);
    el.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => { onNav(id); setOpen(false); };

  return (
    <header className={'nav' + (scrolled ? ' nav--scrolled' : '')}>
      <div className="nav__inner">
        <button className="nav__logo" onClick={() => go('top')} aria-label="DOA KIM home">
          DOA KIM<i className="dot" />
        </button>

        <nav className="nav__links">
          {links.map((l) => (
            <button
              key={l.id}
              className={'nav__link' + (active === l.id ? ' is-active' : '')}
              onClick={() => go(l.id)}
            >
              {window.tt(l, lang)}
            </button>
          ))}
        </nav>

        <div className="nav__right">
          <div className="langtoggle" role="group" aria-label="Language">
            <button className={lang === 'en' ? 'on' : ''} onClick={() => setLang('en')}>EN</button>
            <button className={lang === 'ko' ? 'on' : ''} onClick={() => setLang('ko')}>KO</button>
          </div>
          <button className="btn btn--primary nav__cta" onClick={() => go('contact')}>
            {window.tt(window.PORTFOLIO.nav.cta, lang)} <span className="arrow">→</span>
          </button>
          <button className="nav__burger" aria-label="Menu" onClick={() => setOpen(!open)}>
            <i data-lucide={open ? 'x' : 'menu'} />
          </button>
        </div>
      </div>

      {open && (
        <div className="nav__mobile">
          {links.map((l) => (
            <button key={l.id} className="nav__mobile-link" onClick={() => go(l.id)}>
              {window.tt(l, lang)} <span className="arrow">→</span>
            </button>
          ))}
          <button className="btn btn--primary" onClick={() => go('contact')}>
            {window.tt(window.PORTFOLIO.nav.cta, lang)}
          </button>
        </div>
      )}
    </header>
  );
}
window.Nav = Nav;
