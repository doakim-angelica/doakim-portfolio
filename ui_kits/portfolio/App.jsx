/* App shell — language state (persisted), section tracking, overlay, Lucide refresh. */
function App() {
  const [lang, setLangState] = React.useState(() => localStorage.getItem('doakim_lang') || 'en');
  const [active, setActive] = React.useState('work');
  const [project, setProject] = React.useState(null);
  const scrollRef = React.useRef(null);

  const setLang = (l) => { setLangState(l); localStorage.setItem('doakim_lang', l); };

  // refresh Lucide icons whenever content changes
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });

  // reflect language on <html lang>
  React.useEffect(() => { document.documentElement.lang = lang; }, [lang]);

  const onNav = (id) => {
    const root = scrollRef.current;
    if (id === 'top') { root.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    const el = document.getElementById(id);
    if (el && root) {
      const y = el.getBoundingClientRect().top - root.getBoundingClientRect().top + root.scrollTop - 72;
      root.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // track active section
  React.useEffect(() => {
    const root = scrollRef.current;
    if (!root) return;
    const ids = ['work', 'about', 'contact'];
    const onScroll = () => {
      const mid = root.scrollTop + window.innerHeight * 0.35;
      let cur = 'work';
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= mid) cur = id;
      });
      setActive(cur);
    };
    root.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => root.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <React.Fragment>
      <main className="pk-scroll" ref={scrollRef}>
        <Nav lang={lang} setLang={setLang} onNav={onNav} active={active} />
        <Hero lang={lang} onNav={onNav} />
        <Work lang={lang} onOpen={setProject} />
        <About lang={lang} />
        <Contact lang={lang} />
      </main>
      <ProjectOverlay p={project} lang={lang} onClose={() => setProject(null)} />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
