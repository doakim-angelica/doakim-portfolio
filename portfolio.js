/* ============================================================
   DOA KIM portfolio interactions
   ============================================================ */
(function () {
  const params = new URLSearchParams(location.search);
  const STATIC = params.has('static');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let lang = DK.getLang();
  let theme = DK.getTheme();
  let works = DK.getWorks();
  let content = SiteContent.get();
  let filter = 'all';

  const t = (pairOrEn, ko) => {
    if (pairOrEn && typeof pairOrEn === 'object' && 'en' in pairOrEn) {
      return lang === 'ko' ? pairOrEn.ko : pairOrEn.en;
    }
    return lang === 'ko' ? ko : pairOrEn;
  };
  const icons = () => { if (window.lucide) window.lucide.createIcons(); };

  function setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  }

  function setHtml(id, value) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = value;
  }

  function withArrow(label) {
    return label + ' <span class="arrow">→</span>';
  }

  function setButton(id, label, iconName) {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = (iconName ? '<i data-lucide="' + iconName + '"></i> ' : '') + label;
  }

  function applySiteContent() {
    content = SiteContent.get();

    const navMap = [
      ['about', content.navigation.about],
      ['skills', content.navigation.skills],
      ['works', content.navigation.work],
      ['projects', content.navigation.projects],
      ['contact', content.navigation.contact],
    ];
    navMap.forEach(([key, value]) => {
      document.querySelectorAll('[data-nav="' + key + '"]').forEach((el) => {
        const arrow = el.querySelector('.arrow');
        el.textContent = t(value);
        if (arrow) {
          el.appendChild(document.createTextNode(' '));
          el.appendChild(arrow);
        }
      });
    });

    setText('hero-eyebrow', t(content.hero.eyebrow));
    setText('hero-tag', t(content.hero.tag));
    setHtml('hero-primary', withArrow(t(content.hero.primaryCta)));
    setText('hero-secondary', t(content.hero.secondaryCta));
    (content.hero.stats || []).forEach((stat, i) => {
      setHtml('hero-stat-value-' + i, String(stat.value).replace('+', '<span style="color:var(--fg-3)">+</span>'));
      setText('hero-stat-label-' + i, t(stat.label));
    });
    setText('scroll-label', t(content.hero.scroll));

    setText('about-eyebrow', t(content.about.eyebrow));
    setText('about-heading', t(content.about.heading));
    (content.about.paragraphs || []).forEach((p, i) => setHtml('about-p-' + i, t(p)));

    setText('skills-eyebrow', t(content.skills.eyebrow));
    setText('skills-heading', t(content.skills.heading));
    setText('works-eyebrow', t(content.works.eyebrow));
    setText('works-heading', t(content.works.heading));
    setText('projects-eyebrow', t(content.projects.eyebrow));
    setText('projects-heading', t(content.projects.heading));
    setText('brands-eyebrow', t(content.brands.eyebrow));
    setText('brands-heading', t(content.brands.heading));

    setText('contact-eyebrow', t(content.contact.eyebrow));
    setText('contact-heading', t(content.contact.heading));
    const email = content.contact.email || '';
    const mailHref = 'mailto:' + email;
    const mail = document.getElementById('contact-mail');
    if (mail) {
      mail.href = mailHref;
      mail.textContent = email;
    }
    const emailBtn = document.getElementById('contact-email-btn');
    if (emailBtn) {
      emailBtn.href = mailHref;
      emailBtn.innerHTML = withArrow(t(content.contact.emailButton));
    }
    const linkedIn = document.getElementById('contact-linkedin-btn');
    if (linkedIn) {
      linkedIn.href = content.contact.linkedInUrl || '#';
      linkedIn.innerHTML = '<i data-lucide="linkedin"></i> ' + t(content.contact.linkedInLabel);
    }
    const koPdf = document.getElementById('download-ko-btn');
    if (koPdf) {
      koPdf.href = content.contact.downloads.ko.path;
      koPdf.textContent = t(content.contact.downloads.ko.label);
    }
    const enPdf = document.getElementById('download-en-btn');
    if (enPdf) {
      enPdf.href = content.contact.downloads.en.path;
      enPdf.textContent = t(content.contact.downloads.en.label);
    }

    setText('footer-year', content.footer.year);
    setText('footer-name', content.footer.name);
    setText('footer-location', t(content.footer.location));
    setText('modal-actions-label', t(content.modal.keyActions));
    setText('modal-tags-label', t(content.modal.tags));
  }

  function applyLang() {
    document.documentElement.lang = lang;
    applySiteContent();
    document.getElementById('lang-en').classList.toggle('on', lang === 'en');
    document.getElementById('lang-ko').classList.toggle('on', lang === 'ko');
  }

  window.setLang = function (l) {
    lang = l;
    DK.setLang(l);
    applyLang();
    buildHeroTitle();
    renderTimeline();
    renderSkills();
    renderWorks();
    renderProjects();
    renderBrands();
    renderFilters();
    icons();
  };

  function applyTheme() {
    document.documentElement.setAttribute('data-theme', theme);
    const btn = document.getElementById('themeBtn');
    btn.innerHTML = '<i data-lucide="' + (theme === 'dark' ? 'moon' : 'sun') + '"></i>';
    icons();
  }

  window.toggleTheme = function () {
    theme = theme === 'dark' ? 'light' : 'dark';
    DK.setTheme(theme);
    applyTheme();
  };

  window.toggleMenu = function () { document.getElementById('mobileMenu').classList.toggle('open'); };
  window.closeMenu = function () { document.getElementById('mobileMenu').classList.remove('open'); };

  function buildHeroTitle() {
    const lines = content.hero.title[lang] || content.hero.title.en;
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

  function renderTimeline() {
    document.getElementById('timeline').innerHTML = (content.about.timeline || []).map((i) =>
      '<div class="tl-item"><div class="tl-year num">' + i.year + '</div>' +
      '<div class="tl-role">' + t(i.role) + '</div>' +
      '<div class="tl-org">' + t(i.org) + '</div></div>'
    ).join('');
    setStagger('timeline');
  }

  function renderSkills() {
    document.getElementById('skills-grid').innerHTML = (content.skills.items || []).map((s) =>
      '<div class="skill" data-tilt><span class="skill__ico"><i data-lucide="' + s.icon + '"></i></span>' +
      '<div class="skill__num num">' + s.num + '</div>' +
      '<h3>' + t(s.title) + '</h3>' +
      '<p>' + t(s.desc) + '</p></div>'
    ).join('');
    setStagger('skills-grid');
    initTilt();
  }

  function artStyle(item) {
    if (item.image) return "background-image:url('" + item.image + "'); background-size:cover; background-position:center;";
    return 'background:' + (item.tone || 'linear-gradient(135deg,#0c3a3a,#0a2530)') + ';';
  }

  function renderWorks() {
    works = DK.getWorks();
    document.getElementById('works-grid').innerHTML = works.map((w, i) => {
      if (w.placeholder) {
        return '<div class="work work--empty"><span class="ph-ico"><i data-lucide="plus"></i></span>' +
          '<span class="ph-txt">' + t(content.works.comingSoon) + '</span></div>';
      }
      return '<article class="work" onclick="openModal(' + i + ')">' +
        '<div class="work__art" style="' + artStyle(w) + '"></div>' +
        '<div class="work__top"><span class="work__cat">' + w.category + '</span>' +
        '<span class="work__arrow"><i data-lucide="arrow-up-right"></i></span></div>' +
        '<div class="work__btm"><div class="work__brand">' + w.brand + '</div>' +
        '<h3 class="work__title">' + t(w.titleEn, w.titleKo) + '</h3>' +
        '<div class="work__period num">' + w.period + '</div></div></article>';
    }).join('');
  }

  function renderFilters() {
    const filterLabels = content.projects.filters;
    const filters = [
      { id: 'all', label: filterLabels.all },
      { id: 'Digital', label: filterLabels.Digital },
      { id: 'Event', label: filterLabels.Event },
      { id: 'Creative', label: filterLabels.Creative },
    ];
    document.getElementById('filterbar').innerHTML = filters.map((f) =>
      '<button class="' + (filter === f.id ? 'on' : '') + '" onclick="setFilter(\'' + f.id + '\')">' + t(f.label) + '</button>'
    ).join('');
  }

  function renderProjects() {
    const list = DK.getProjects();
    document.getElementById('projgrid').innerHTML = list.map((p, i) => {
      const hide = filter !== 'all' && p.category !== filter ? ' hide' : '';
      return '<article class="proj' + hide + '" data-cat="' + p.category + '" onclick="openProjectModal(' + i + ')">' +
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

  function setStagger(id) {
    const el = document.getElementById(id);
    if (!el) return;
    [...el.children].forEach((c, i) => { c.style.transitionDelay = (i * 0.06) + 's'; });
    if (STATIC || reduceMotion) el.classList.add('in');
  }

  function openDetail(item, isProject) {
    if (!item || item.placeholder) return;
    const hero = document.getElementById('modalHero');
    hero.style.cssText = artStyle(item);
    document.getElementById('modalCat').textContent = item.category || '';
    document.getElementById('modalBrand').textContent = item.brand || '';
    document.getElementById('modalTitle').textContent = t(item.titleEn, item.titleKo);
    document.getElementById('modalPeriod').textContent = item.period || item.year || '';
    document.getElementById('modalOverview').textContent = t(
      item.overviewEn || content.modal.archiveFallback.overview.en,
      item.overviewKo || content.modal.archiveFallback.overview.ko
    );
    document.getElementById('modalKpis').innerHTML = (item.kpis || []).map((k) =>
      '<div class="kpi"><div class="v num">' + (k.value || '') + '</div><div class="k">' + t(k.labelEn, k.labelKo) + '</div></div>'
    ).join('');
    const acts = lang === 'ko' ? (item.actionsKo || []) : (item.actionsEn || []);
    document.getElementById('modalActions').innerHTML = acts.length
      ? acts.map((a) => '<li>' + a + '</li>').join('')
      : '<li>' + t(content.modal.archiveFallback.action) + '</li>';
    document.getElementById('modalTags').innerHTML = (item.tags || [item.category]).filter(Boolean).map((tg) =>
      '<span class="tag">' + tg + '</span>'
    ).join('');
    const m = document.getElementById('modal');
    m.classList.add('open');
    m.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    icons();
  }

  window.openModal = function (i) { openDetail(DK.getWorks()[i], false); };
  window.openProjectModal = function (i) { openDetail(DK.getProjects()[i], true); };

  window.closeModal = function () {
    const m = document.getElementById('modal');
    m.classList.remove('open');
    m.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

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

  function init() {
    applyTheme();
    applyLang();
    buildHeroTitle();
    renderTimeline();
    renderSkills();
    renderWorks();
    renderFilters();
    renderProjects();
    renderBrands();
    initObserver();
    initScroll();
    icons();
    if (STATIC) { document.body.classList.add('static', 'loaded'); }
    else { requestAnimationFrame(() => requestAnimationFrame(() => document.body.classList.add('loaded'))); }
  }

  document.addEventListener('DOMContentLoaded', init);
})();
