/* DOA KIM portfolio — bilingual content + shared helpers.
   Exposed on window for the Babel-transpiled components. */
window.PORTFOLIO = {
  nav: {
    links: [
      { id: 'work',    en: 'Work',    ko: '작업' },
      { id: 'about',   en: 'About',   ko: '소개' },
      { id: 'contact', en: 'Contact', ko: '연락' },
    ],
    cta: { en: 'Start a project', ko: '프로젝트 시작' },
  },

  hero: {
    eyebrow: { en: 'Brand & art direction · Seoul', ko: '브랜드 · 아트 디렉션 · 서울' },
    title: {
      en: ['Brand systems', 'that travel.'],
      ko: ['멀리 가는', '브랜드를 만듭니다.'],
    },
    lead: {
      en: 'I’m Doa Kim — a designer working at the seam of brand and product. I build identity systems that hold their nerve across every surface, from a business card to a launch film.',
      ko: '브랜드와 제품 사이를 잇는 디자이너 김도아입니다. 명함부터 런칭 필름까지, 모든 접점에서 흔들리지 않는 아이덴티티 시스템을 만듭니다.',
    },
    primary: { en: 'See the work', ko: '작업 보기' },
    secondary: { en: 'About me', ko: '소개' },
    status: { en: 'Open for 2026 projects', ko: '2026년 프로젝트 가능' },
  },

  work: {
    eyebrow: { en: 'Selected work', ko: '선택된 작업' },
    title: { en: 'Six projects, one through-line.', ko: '여섯 개의 작업, 하나의 결.' },
    filters: [
      { id: 'all',      en: 'All',           ko: '전체' },
      { id: 'identity', en: 'Identity',      ko: '아이덴티티' },
      { id: 'art',      en: 'Art direction', ko: '아트 디렉션' },
      { id: 'motion',   en: 'Motion',        ko: '모션' },
    ],
    projects: [
      { idx: '01', cat: 'identity', tone: '#16343a',
        title: { en: 'Mirae Bank', ko: '미래은행' },
        kind:  { en: 'Identity system', ko: '아이덴티티 시스템' }, year: '2025' },
      { idx: '02', cat: 'art', tone: '#2a2540',
        title: { en: 'Sori Festival', ko: '소리 페스티벌' },
        kind:  { en: 'Art direction', ko: '아트 디렉션' }, year: '2024' },
      { idx: '03', cat: 'motion', tone: '#103030',
        title: { en: 'Nara Studio', ko: '나라 스튜디오' },
        kind:  { en: 'Motion identity', ko: '모션 아이덴티티' }, year: '2024' },
      { idx: '04', cat: 'identity', tone: '#33271c',
        title: { en: 'Onjeong Coffee', ko: '온정 커피' },
        kind:  { en: 'Brand & packaging', ko: '브랜드 · 패키지' }, year: '2023' },
      { idx: '05', cat: 'art', tone: '#1d2c3a',
        title: { en: 'Hangang Press', ko: '한강 프레스' },
        kind:  { en: 'Editorial direction', ko: '에디토리얼' }, year: '2023' },
      { idx: '06', cat: 'motion', tone: '#2c1f2e',
        title: { en: 'Byeol Records', ko: '별 레코드' },
        kind:  { en: 'Identity & motion', ko: '아이덴티티 · 모션' }, year: '2022' },
    ],
  },

  about: {
    eyebrow: { en: 'About the practice', ko: '소개' },
    body: {
      en: 'For twelve years I’ve helped founders and cultural institutions find a voice that lasts longer than a launch. The work is quiet by design — systems, not stunts. I run a small practice so every project gets my hands on it.',
      ko: '지난 12년간 창업자와 문화 기관이 런칭보다 오래 가는 목소리를 찾도록 도왔습니다. 일은 의도적으로 조용합니다 — 스턴트가 아닌 시스템. 모든 프로젝트에 직접 손을 대기 위해 작은 규모로 운영합니다.',
    },
    stats: [
      { n: '12', label: { en: 'yrs practice', ko: '년 경력' } },
      { n: '40+', label: { en: 'brands shipped', ko: '브랜드 출시' } },
      { n: '06', label: { en: 'awards', ko: '수상' } },
    ],
    services: [
      { en: 'Brand identity systems', ko: '브랜드 아이덴티티 시스템' },
      { en: 'Art direction', ko: '아트 디렉션' },
      { en: 'Motion & launch films', ko: '모션 · 런칭 필름' },
      { en: 'Packaging & print', ko: '패키지 · 인쇄' },
    ],
  },

  contact: {
    eyebrow: { en: 'Let’s talk', ko: '연락하기' },
    title: { en: 'Have a brand worth building?', ko: '함께 만들 브랜드가 있나요?' },
    lead: { en: 'Tell me a little about the project. I reply to every message within two days.', ko: '프로젝트에 대해 알려주세요. 모든 메시지에 이틀 안에 답장합니다.' },
    fields: {
      name: { en: 'Name', ko: '이름' },
      email: { en: 'Email', ko: '이메일' },
      message: { en: 'About the project', ko: '프로젝트 소개' },
    },
    submit: { en: 'Send message', ko: '메시지 보내기' },
    sent: { en: 'Thanks — I’ll be in touch.', ko: '감사합니다 — 곧 연락드리겠습니다.' },
    email_addr: 'hello@doakim.kr',
    location: { en: 'Seoul, KR', ko: '서울, 대한민국' },
  },
};

/* tiny helper: pick the active-language string from a {en,ko} pair */
window.tt = function (pair, lang) {
  if (pair == null) return '';
  if (typeof pair === 'string') return pair;
  return pair[lang] != null ? pair[lang] : pair.en;
};
