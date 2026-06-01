/* ============================================================
   DOA KIM — portfolio interactions
   ============================================================ */
(function () {
  const params = new URLSearchParams(location.search);
  const STATIC = params.has('static');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let lang = DK.getLang();
  let theme = DK.getTheme();
  let works = DK.getWorks();
  let filter = 'all';

  /* ---- Fixed (non-editable) content ----------------------- */
  const TIMELINE = [
    { year: '2022 — Now', roleEn: 'Senior IMC Manager', roleKo: '시니어 IMC 매니저', orgEn: 'Lead Agency, Seoul', orgKo: '리드 에이전시, 서울' },
    { year: '2020 — 2022', roleEn: 'Campaign Lead', roleKo: '캠페인 리드', orgEn: 'Integrated Comms Group', orgKo: '인티그레이티드 컴즈 그룹' },
    { year: '2018 — 2020', roleEn: 'Account & Strategy', roleKo: '어카운트 · 전략', orgEn: 'Brand Studio', orgKo: '브랜드 스튜디오' },
    { year: '2017 — 2018', roleEn: 'Marketing Associate', roleKo: '마케팅 어소시에이트', orgEn: 'Creative House', orgKo: '크리에이티브 하우스' },
  ];
  const SKILLS = [
    { num: '01', ico: 'target', titleEn: 'Campaign Strategy', titleKo: '캠페인 전략', descEn: 'Turning a business problem into a sharp, integrated campaign idea with a clear message architecture.', descKo: '비즈니스 과제를 선명한 통합 캠페인 아이디어와 명확한 메시지 체계로 전환합니다.' },
    { num: '02', ico: 'palette', titleEn: 'Creative Directing', titleKo: '크리에이티브 디렉팅', descEn: 'Guiding film, design, and copy so every asset stays on-voice and on-brief across channels.', descKo: '필름·디자인·카피를 이끌어, 모든 에셋이 채널 전반에서 브랜드 보이스와 브리프에 충실하도록 합니다.' },
    { num: '03', ico: 'share-2', titleEn: 'Channel & Amplification', titleKo: '채널 · 앰플리피케이션', descEn: 'Designing the media mix and channel roles — paid, owned, earned — to extend reach efficiently.', descKo: '페이드·온드·언드 미디어 믹스와 채널 역할을 설계해 도달을 효율적으로 확장합니다.' },
    { num: '04', ico: 'bar-chart-3', titleEn: 'Performance & Insight', titleKo: '퍼포먼스 · 인사이트', descEn: 'Reading the numbers honestly and feeding the insight back into the next round of creative.', descKo: '성과 데이터를 정직하게 읽고, 그 인사이트를 다음 크리에이티브로 환류합니다.' },
  ];
  const HERO_TITLE = {
    en: [[{ t: 'Brand' }, { t: 'stories,' }], [{ t: 'built' }, { t: 'to' }, { t: 'perform.', teal: true }]],
    ko: [[{ t: '브랜드' }, { t: '스토리,' }], [{ t: '성과로' }, { t: '증명합니다.', teal: true }]],
  };
  const FILTERS = [
    { id: 'all', en: 'All', ko: '전체' },
    { id: 'Digital', en: 'Digital', ko: '디지털' },
    { id: 'Event', en: 'Event', ko: '이벤트' },
    { id: 'Creative', en: 'Creative', ko: '크리에이티브' },
  ];

  const t = (en, ko) => (lang === 'ko' ? ko : en);
  const icons = () => { if (window.lucide) window.lucide.createIcons(); };

  /* ---- i18n ------------------------------------------------ */
  function applyLang() {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-en]').forEach((el) => {
      el.textContent = el.getAttribute(lang === 'ko' ? 'data-ko' : 'data-en');
    });
    document.querySelectorAll('[data-en-html]').forEach((el) => {
      el.innerHTML = el.getAttribute(lang === 'ko' ? 'data-ko-html' : 'data-en-html');
    });
    document.getElementById('lang-en').classList.toggle('on', lang === 'en');
    document.getElementById('lang-ko').classList.toggle('on', lang === 'ko');
  }

  window.setLang = function (l) {
    lang = l; DK.setLang(l);
    applyLang();
    buildHeroTitle();
    renderTimeline(); renderSkills(); renderWorks(); renderProjects(); renderBrands(); renderFilters();
    icons();
  };

  /* ---- Theme ----------------------------------------------- */
  function applyTheme() {
    document.documentElement.setAttribute('data-theme', theme);
    const btn = document.getElementById('themeBtn');
    btn.innerHTML = '<i data-lucide="' + (theme === 'dark' ? 'moon' : 'sun') + '"></i>';
    icons();
  }
  window.toggleTheme = function () {
    theme = theme === 'dark' ? 'light' : 'dark';
    DK.setTheme(theme); applyTheme();
  };

  /* ---- Mobile menu ----------------------------------------- */
  window.toggleMenu = function () { document.getElementById('mobileMenu').classList.toggle('open'); };
  window.closeMenu = function () { document.getElementById('mobileMenu').classList.remove('open'); };

  /* ---- Hero title ------------------------------------------ */
  function buildHeroTitle() {
    const lines = HERO_TITLE[lang];
    const html = lines.map((line, li) => {
      const words = line.map((w, wi) => {
        const delay = (li * line.length + wi) * 0.08 + 0.1;
        const cls = w.teal ? ' class="teal"' : '';
        return '<span class="hero__word"><span style="transition-delay:' + delay + 's"' + cls + '>' + w.t + '</span></span>';
      }).join(' ');
      return words;
    }).join('<br>');
    document.getElementById('heroTitle').innerHTML = html;
  }

  /* ---- Renderers ------------------------------------------- */
  function renderTimeline() {
    document.getElementById('timeline').innerHTML = TIMELINE.map((i) =>
      '<div class="tl-item"><div class="tl-year num">' + i.year + '</div>' +
      '<div class="tl-role">' + t(i.roleEn, i.roleKo) + '</div>' +
      '<div class="tl-org">' + t(i.orgEn, i.orgKo) + '</div></div>'
    ).join('');
    setStagger('timeline');
  }

  function renderSkills() {
    document.getElementById('skills-grid').innerHTML = SKILLS.map((s) =>
      '<div class="skill" data-tilt><span class="skill__ico"><i data-lucide="' + s.ico + '"></i></span>' +
      '<div class="skill__num num">' + s.num + '</div>' +
      '<h3>' + t(s.titleEn, s.titleKo) + '</h3>' +
      '<p>' + t(s.descEn, s.descKo) + '</p></div>'
    ).join('');
    setStagger('skills-grid');
    initTilt();
  }

  function renderWorks() {
    works = DK.getWorks();
    document.getElementById('works-grid').innerHTML = works.map((w, i) => {
      if (w.placeholder) {
        return '<div class="work work--empty"><span class="ph-ico"><i data-lucide="plus"></i></span>' +
          '<span class="ph-txt">' + t('Coming soon', '준비 중') + '</span></div>';
      }
      const tone = w.tone || 'linear-gradient(135deg,#0c3a3a,#0a2530)';
      return '<article class="work" onclick="openModal(' + i + ')">' +
        '<div class="work__art" style="background:' + tone + '"></div>' +
        '<div class="work__top"><span class="work__cat">' + w.category + '</span>' +
        '<span class="work__arrow"><i data-lucide="arrow-up-right"></i></span></div>' +
        '<div class="work__btm"><div class="work__brand">' + w.brand + '</div>' +
        '<h3 class="work__title">' + t(w.titleEn, w.titleKo) + '</h3>' +
        '<div class="work__period num">' + w.period + '</div></div></article>';
    }).join('');
  }

  function renderFilters() {
    document.getElementById('filterbar').innerHTML = FILTERS.map((f) =>
      '<button class="' + (filter === f.id ? 'on' : '') + '" onclick="setFilter(\'' + f.id + '\')">' + t(f.en, f.ko) + '</button>'
    ).join('');
  }

  function renderProjects() {
    const list = DK.getProjects();
    document.getElementById('projgrid').innerHTML = list.map((p) => {
      const hide = filter !== 'all' && p.category !== filter ? ' hide' : '';
      return '<article class="proj' + hide + '" data-cat="' + p.category + '">' +
        '<div class="proj__cat">' + p.category + '</div>' +
        '<div class="proj__title">' + t(p.titleEn, p.titleKo) + '</div>' +
        '<div class="proj__meta">' + p.brand + ' · <span class="num">' + p.year + '</span></div></article>';
    }).join('');
  }

  window.setFilter = function (id) {
    filter = id;
    renderFilters();
    document.querySelectorAll('#projgrid .proj').forEach((el) => {
      el.classList.toggle('hide', id !== 'all' && el.getAttribute('data-cat') !== id);
    });
  };

  function renderBrands() {
    document.getElementById('brands-grid').innerHTML = DK.getBrands().map((b) =>
      '<span class="brandpill">' + b + '</span>'
    ).join('');
    setStagger('brands-grid');
  }

  /* ---- Stagger delays -------------------------------------- */
  function setStagger(id) {
    const el = document.getElementById(id);
    [...el.children].forEach((c, i) => { c.style.transitionDelay = (i * 0.06) + 's'; });
    if (STATIC || reduceMotion) el.classList.add('in');
  }

  /* ---- Modal ----------------------------------------------- */
  window.openModal = function (i) {
    const w = DK.getWorks()[i];
    if (!w || w.placeholder) return;
    document.getElementById('modalHero').style.background = w.tone || '#13343a';
    document.getElementById('modalCat').textContent = w.category;
    document.getElementById('modalBrand').textContent = w.brand;
    document.getElementById('modalTitle').textContent = t(w.titleEn, w.titleKo);
    document.getElementById('modalPeriod').textContent = w.period;
    document.getElementById('modalOverview').textContent = t(w.overviewEn, w.overviewKo);
    document.getElementById('modalKpis').innerHTML = (w.kpis || []).map((k) =>
      '<div class="kpi"><div class="v num">' + k.value + '</div><div class="k">' + t(k.labelEn, k.labelKo) + '</div></div>'
    ).join('');
    const acts = lang === 'ko' ? (w.actionsKo || []) : (w.actionsEn || []);
    document.getElementById('modalActions').innerHTML = acts.map((a) => '<li>' + a + '</li>').join('');
    document.getElementById('modalTags').innerHTML = (w.tags || []).map((tg) => '<span class="tag">' + tg + '</span>').join('');
    const m = document.getElementById('modal');
    m.classList.add('open'); m.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    icons();
  };
  window.closeModal = function () {
    const m = document.getElementById('modal');
    m.classList.remove('open'); m.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

  /* ---- Scroll observer ------------------------------------- */
  function initObserver() {
    if (STATIC || reduceMotion) {
      document.querySelectorAll('.reveal,.stagger').forEach((el) => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('.reveal,.stagger').forEach((el) => io.observe(el));
  }

  /* ---- Nav scroll + parallax ------------------------------- */
  function initScroll() {
    const nav = document.getElementById('nav');
    const heroInner = document.getElementById('heroInner');
    const orb = document.getElementById('orb');
    let ticking = false;
    function onScroll() {
      const y = window.scrollY || 0;
      nav.classList.toggle('scrolled', y > 20);
      if (!reduceMotion && y < window.innerHeight) {
        heroInner.style.transform = 'translateY(' + (y * 0.22) + 'px)';
        heroInner.style.opacity = Math.max(0, 1 - y / (window.innerHeight * 0.85));
        if (orb) orb.style.transform = 'translate(-30%,-40%) translateY(' + (y * 0.18) + 'px)';
      }
      ticking = false;
    }
    window.addEventListener('scroll', () => {
      if (!ticking) { requestAnimationFrame(onScroll); ticking = true; }
    }, { passive: true });
    onScroll();
  }

  /* ---- 3D tilt on skill cards ------------------------------ */
  function initTilt() {
    if (reduceMotion) return;
    document.querySelectorAll('[data-tilt]').forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = 'perspective(800px) rotateX(' + (-py * 7) + 'deg) rotateY(' + (px * 7) + 'deg) translateY(-4px)';
      });
      card.addEventListener('mouseleave', () => { card.style.transform = ''; });
    });
  }

  /* ---- Init ------------------------------------------------ */
  function init() {
    applyTheme();
    applyLang();
    buildHeroTitle();
    renderTimeline(); renderSkills(); renderWorks(); renderFilters(); renderProjects(); renderBrands();
    initObserver(); initScroll();
    icons();
    if (STATIC) { document.body.classList.add('static', 'loaded'); }
    else { requestAnimationFrame(() => requestAnimationFrame(() => document.body.classList.add('loaded'))); }
  }
  document.addEventListener('DOMContentLoaded', init);
})();
