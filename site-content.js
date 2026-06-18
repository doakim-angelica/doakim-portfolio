/* ============================================================
   DOA KIM site text layer
   Main website copy is stored here and can be overridden from
   admin.html through localStorage.
   ============================================================ */
(function (global) {
  const KEY = 'doakim_site_content';

  const DEFAULT_SITE_CONTENT = {
    navigation: {
      about: { en: 'About', ko: '소개' },
      skills: { en: 'Skills', ko: '역량' },
      work: { en: 'Work', ko: '작업' },
      projects: { en: 'Projects', ko: '프로젝트' },
      contact: { en: 'Contact', ko: '연락' },
    },
    hero: {
      eyebrow: { en: 'Brand & IMC · Seoul', ko: '브랜드 · IMC · 서울' },
      title: {
        en: [[{ t: 'Brand' }, { t: 'stories,' }], [{ t: 'built' }, { t: 'to' }, { t: 'perform.', teal: true }]],
        ko: [[{ t: '브랜드' }, { t: '스토리를' }], [{ t: '성과로' }, { t: '증명합니다.', teal: true }]],
      },
      tag: {
        en: 'Integrated marketing that turns brand moments into measurable momentum.',
        ko: '브랜드의 순간을 측정 가능한 성장으로 잇는 통합 마케팅.',
      },
      primaryCta: { en: 'View Work', ko: '작업 보기' },
      secondaryCta: { en: 'Get in touch', ko: '연락하기' },
      stats: [
        { value: '7+', label: { en: 'Years in IMC', ko: '년 IMC 경력' } },
        { value: '20+', label: { en: 'Brands', ko: '브랜드' } },
        { value: '15+', label: { en: 'Campaigns', ko: '캠페인' } },
      ],
      scroll: { en: 'Scroll', ko: '스크롤' },
    },
    about: {
      eyebrow: { en: 'About', ko: '소개' },
      heading: {
        en: 'Marketing that respects both the brand and the number.',
        ko: '브랜드와 숫자를 모두 존중하는 마케팅.',
      },
      paragraphs: [
        {
          en: 'I’m <strong>Doa Kim</strong>, an integrated marketing communications specialist with 7+ years inside Korea’s leading IMC agencies.',
          ko: '통합 마케팅 커뮤니케이션 전문가 <strong>김도아</strong>입니다. 국내 주요 IMC 에이전시에서 7년 이상 일했습니다.',
        },
        {
          en: 'I plan and run campaigns end to end — from the strategic idea to channel orchestration to the performance read afterward. My work sits where creative ambition meets accountable results.',
          ko: '전략적 아이디어부터 채널 운영, 그리고 사후 성과 분석까지 캠페인을 처음부터 끝까지 기획하고 운영합니다. 제 일은 크리에이티브한 야망과 책임 있는 결과가 만나는 지점에 있습니다.',
        },
        {
          en: 'I’ve built work for brands across tech, finance, F&B, and lifestyle — and I care as much about the spreadsheet as the storyboard.',
          ko: '테크, 금융, F&B, 라이프스타일 전반의 브랜드를 위해 일해왔으며, 스토리보드만큼이나 스프레드시트에도 진심입니다.',
        },
      ],
      timeline: [
        { year: '2022 — Now', role: { en: 'Senior IMC Manager', ko: '시니어 IMC 매니저' }, org: { en: 'Lead Agency, Seoul', ko: '리드 에이전시, 서울' } },
        { year: '2020 — 2022', role: { en: 'Campaign Lead', ko: '캠페인 리드' }, org: { en: 'Integrated Comms Group', ko: '인티그레이티드 커뮤니케이션 그룹' } },
        { year: '2018 — 2020', role: { en: 'Account & Strategy', ko: '어카운트 · 전략' }, org: { en: 'Brand Studio', ko: '브랜드 스튜디오' } },
        { year: '2017 — 2018', role: { en: 'Marketing Associate', ko: '마케팅 어소시에이트' }, org: { en: 'Creative House', ko: '크리에이티브 하우스' } },
      ],
    },
    skills: {
      eyebrow: { en: 'Capabilities', ko: '역량' },
      heading: { en: 'Four disciplines, one integrated practice.', ko: '네 개의 전문 영역, 하나의 통합 실무.' },
      items: [
        {
          num: '01',
          icon: 'target',
          title: { en: 'Campaign Strategy', ko: '캠페인 전략' },
          desc: {
            en: 'Turning a business problem into a sharp, integrated campaign idea with a clear message architecture.',
            ko: '비즈니스 과제를 선명한 통합 캠페인 아이디어와 명확한 메시지 체계로 전환합니다.',
          },
        },
        {
          num: '02',
          icon: 'palette',
          title: { en: 'Creative Directing', ko: '크리에이티브 디렉팅' },
          desc: {
            en: 'Guiding film, design, and copy so every asset stays on-voice and on-brief across channels.',
            ko: '필름, 디자인, 카피가 모든 채널에서 브랜드 보이스와 브리프에 맞게 유지되도록 이끕니다.',
          },
        },
        {
          num: '03',
          icon: 'share-2',
          title: { en: 'Channel & Amplification', ko: '채널 · 확산 전략' },
          desc: {
            en: 'Designing the media mix and channel roles — paid, owned, earned — to extend reach efficiently.',
            ko: '페이드, 온드, 언드 미디어의 역할과 믹스를 설계해 도달을 효율적으로 확장합니다.',
          },
        },
        {
          num: '04',
          icon: 'bar-chart-3',
          title: { en: 'Performance & Insight', ko: '퍼포먼스 · 인사이트' },
          desc: {
            en: 'Reading the numbers honestly and feeding the insight back into the next round of creative.',
            ko: '성과 데이터를 정직하게 읽고, 그 인사이트를 다음 크리에이티브에 다시 연결합니다.',
          },
        },
      ],
    },
    works: {
      eyebrow: { en: 'Selected work', ko: '선택된 작업' },
      heading: { en: 'Campaigns I’m proud to put my name on.', ko: '제 이름을 걸 수 있는 캠페인.' },
      comingSoon: { en: 'Coming soon', ko: '준비 중' },
    },
    projects: {
      eyebrow: { en: 'Archive', ko: '아카이브' },
      heading: { en: 'All projects.', ko: '전체 프로젝트.' },
      filters: {
        all: { en: 'All', ko: '전체' },
        Digital: { en: 'Digital', ko: '디지털' },
        Event: { en: 'Event', ko: '이벤트' },
        Creative: { en: 'Creative', ko: '크리에이티브' },
      },
    },
    brands: {
      eyebrow: { en: 'Trusted by', ko: '함께한 브랜드' },
      heading: { en: 'Brands I’ve had the privilege to build with.', ko: '함께 만들어 온 브랜드들.' },
    },
    contact: {
      eyebrow: { en: 'Let’s talk', ko: '연락하기' },
      heading: { en: 'Have a brand worth building?', ko: '함께 만들 브랜드가 있나요?' },
      email: 'hello@doakim.kr',
      emailButton: { en: 'Email me', ko: '이메일 보내기' },
      linkedInLabel: { en: 'LinkedIn', ko: 'LinkedIn' },
      linkedInUrl: 'https://www.linkedin.com',
      downloads: {
        ko: {
          label: { en: 'Download Korean portfolio', ko: '한국어 포트폴리오 다운로드' },
          path: 'uploads/doa-kim-portfolio-ko.pdf',
        },
        en: {
          label: { en: 'Download English portfolio', ko: '영어 포트폴리오 다운로드' },
          path: 'uploads/doa-kim-portfolio-en.pdf',
        },
      },
    },
    footer: {
      year: '2026',
      name: 'Doa Kim',
      location: { en: 'Seoul, Korea', ko: '서울, 대한민국' },
    },
    modal: {
      keyActions: { en: 'Key actions', ko: '핵심 활동' },
      tags: { en: 'Tags', ko: '태그' },
      archiveFallback: {
        overview: {
          en: 'A selected archive project from DOA KIM portfolio.',
          ko: '김도아 포트폴리오의 아카이브 프로젝트입니다.',
        },
        action: {
          en: 'Detailed scope can be added later.',
          ko: '상세 업무 범위는 추후 추가할 수 있습니다.',
        },
      },
    },
  };

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function merge(base, override) {
    if (!override || typeof override !== 'object') return clone(base);
    const out = Array.isArray(base) ? clone(base) : Object.assign({}, base);
    Object.keys(override).forEach((key) => {
      if (base && typeof base[key] === 'object' && base[key] !== null && !Array.isArray(base[key])) {
        out[key] = merge(base[key], override[key]);
      } else {
        out[key] = override[key];
      }
    });
    return out;
  }

  function read() {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? merge(DEFAULT_SITE_CONTENT, JSON.parse(raw)) : clone(DEFAULT_SITE_CONTENT);
    } catch (e) {
      return clone(DEFAULT_SITE_CONTENT);
    }
  }

  function write(value) {
    try { localStorage.setItem(KEY, JSON.stringify(value)); } catch (e) {}
  }

  function exportSource(value) {
    const json = JSON.stringify(value || read(), null, 2);
    return `/* ============================================================\n   DOA KIM site text layer\n   Main website copy is stored here and can be overridden from\n   admin.html through localStorage.\n   ============================================================ */\n(function (global) {\n  const KEY = 'doakim_site_content';\n\n  const DEFAULT_SITE_CONTENT = ${json};\n\n  function clone(value) {\n    return JSON.parse(JSON.stringify(value));\n  }\n\n  function merge(base, override) {\n    if (!override || typeof override !== 'object') return clone(base);\n    const out = Array.isArray(base) ? clone(base) : Object.assign({}, base);\n    Object.keys(override).forEach((key) => {\n      if (base && typeof base[key] === 'object' && base[key] !== null && !Array.isArray(base[key])) {\n        out[key] = merge(base[key], override[key]);\n      } else {\n        out[key] = override[key];\n      }\n    });\n    return out;\n  }\n\n  function read() {\n    try {\n      const raw = localStorage.getItem(KEY);\n      return raw ? merge(DEFAULT_SITE_CONTENT, JSON.parse(raw)) : clone(DEFAULT_SITE_CONTENT);\n    } catch (e) {\n      return clone(DEFAULT_SITE_CONTENT);\n    }\n  }\n\n  function write(value) {\n    try { localStorage.setItem(KEY, JSON.stringify(value)); } catch (e) {}\n  }\n\n  function exportSource(value) {\n    const json = JSON.stringify(value || read(), null, 2);\n    return arguments.callee.toString ? null : json;\n  }\n\n  global.SiteContent = {\n    key: KEY,\n    defaults: DEFAULT_SITE_CONTENT,\n    get: read,\n    set: write,\n    reset: function () { localStorage.removeItem(KEY); },\n    exportSource: function () { return (${JSON.stringify(exportSource.toString())})(read()); },\n  };\n})(window);\n`;
  }

  global.SiteContent = {
    key: KEY,
    defaults: DEFAULT_SITE_CONTENT,
    get: read,
    set: write,
    reset: function () { localStorage.removeItem(KEY); },
    exportSource,
  };
})(window);
