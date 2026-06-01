/* ============================================================
   DOA KIM — shared data layer
   Seeds default content and reads/writes it to localStorage so
   index.html and admin.html stay in sync. No backend.
   ============================================================ */
(function (global) {
  const KEYS = {
    works: 'doakim_works',
    projects: 'doakim_projects',
    brands: 'doakim_brands',
    password: 'doakim_pw',
    lang: 'doakim_lang',
    theme: 'doakim_theme',
  };

  /* ---- Default seed content -------------------------------- */
  const DEFAULT_WORKS = [
    {
      brand: 'Samsung Galaxy',
      titleEn: 'Galaxy Unpacked — Digital Launch',
      titleKo: '갤럭시 언팩 디지털 런치',
      period: '2023.01 – 2023.07',
      category: 'Digital',
      tone: 'linear-gradient(135deg,#0c3a3a,#0a2530)',
      overviewEn: 'Led the integrated digital campaign for the Galaxy Unpacked launch across social, influencer, and paid media — translating a global brand moment into a story that landed locally and converted.',
      overviewKo: '갤럭시 언팩 글로벌 런치를 소셜·인플루언서·페이드 미디어 전반의 통합 디지털 캠페인으로 기획했습니다. 글로벌 브랜드 모먼트를 국내 정서에 맞게 현지화하고 전환까지 연결했습니다.',
      kpis: [
        { value: '+182%', labelEn: 'Engagement', labelKo: '인게이지먼트' },
        { value: '24M', labelEn: 'Reach', labelKo: '도달' },
        { value: '4.8%', labelEn: 'CTR', labelKo: '클릭률' },
      ],
      actionsEn: ['Integrated campaign strategy & messaging architecture', 'Creator & influencer orchestration across tiers', 'Real-time social performance optimization'],
      actionsKo: ['통합 캠페인 전략 및 메시지 아키텍처 설계', '티어별 크리에이터·인플루언서 운영', '실시간 소셜 성과 최적화'],
      tags: ['Digital', 'Social', 'Influencer', 'Paid Media'],
    },
    {
      brand: 'Hyundai Card',
      titleEn: 'Super Series — Brand Experience',
      titleKo: '슈퍼 시리즈 브랜드 익스피리언스',
      period: '2022.03 – 2022.11',
      category: 'Event',
      tone: 'linear-gradient(135deg,#241f3a,#15131f)',
      overviewEn: 'Built the end-to-end brand experience for Hyundai Card’s Super Series — connecting an offline cultural moment to a full digital amplification arc that extended the audience far beyond the venue.',
      overviewKo: '현대카드 슈퍼 시리즈의 브랜드 경험을 처음부터 끝까지 설계했습니다. 오프라인 문화 이벤트를 디지털 증폭 전략으로 연결해, 현장을 넘어선 오디언스 확장을 만들었습니다.',
      kpis: [
        { value: '38K', labelEn: 'Attendees', labelKo: '참여 인원' },
        { value: '+210%', labelEn: 'Social buzz', labelKo: '소셜 버즈' },
        { value: '92%', labelEn: 'CSAT', labelKo: '만족도' },
      ],
      actionsEn: ['Experiential concept & run-of-show', 'Cross-channel content production', 'Earned & owned amplification plan'],
      actionsKo: ['경험 컨셉 및 행사 운영 설계', '크로스채널 콘텐츠 제작', '언드·온드 미디어 증폭 기획'],
      tags: ['Event', 'Experiential', 'Content', 'PR'],
    },
    {
      brand: 'Baemin 배달의민족',
      titleEn: 'Brand IMC Refresh',
      titleKo: '브랜드 IMC 리프레시',
      period: '2021.05 – 2022.02',
      category: 'Creative',
      tone: 'linear-gradient(135deg,#0c3833,#0c2922)',
      overviewEn: 'Refreshed Baemin’s integrated communications — aligning a witty brand voice across film, social, and OOH while keeping each channel doing the job only it can do.',
      overviewKo: '배달의민족의 통합 커뮤니케이션을 리프레시했습니다. 위트 있는 브랜드 보이스를 필름·소셜·OOH 전반에 정렬하면서, 각 채널이 가장 잘하는 역할에 집중하도록 설계했습니다.',
      kpis: [
        { value: '+47%', labelEn: 'Brand recall', labelKo: '브랜드 회상' },
        { value: '120M', labelEn: 'Impressions', labelKo: '노출' },
        { value: '+33%', labelEn: 'Consideration', labelKo: '고려도' },
      ],
      actionsEn: ['IMC platform & message system', 'Brand film creative direction', 'Channel role & media mix design'],
      actionsKo: ['IMC 플랫폼 및 메시지 체계 설계', '브랜드 필름 크리에이티브 디렉션', '채널 역할 및 미디어 믹스 설계'],
      tags: ['Creative', 'Brand Film', 'OOH', 'Social'],
    },
    { placeholder: true },
  ];

  const DEFAULT_PROJECTS = [
    { titleEn: 'LG OLED Global Social', titleKo: 'LG 올레드 글로벌 소셜', brand: 'LG Electronics', category: 'Digital', year: '2023' },
    { titleEn: 'Naver Webtoon Fan Festa', titleKo: '네이버 웹툰 팬 페스타', brand: 'Naver', category: 'Event', year: '2023' },
    { titleEn: 'Toss Finance Literacy Series', titleKo: '토스 금융 리터러시 시리즈', brand: 'Toss', category: 'Creative', year: '2023' },
    { titleEn: 'Olive Young Awards Campaign', titleKo: '올리브영 어워즈 캠페인', brand: 'Olive Young', category: 'Digital', year: '2022' },
    { titleEn: 'Coca-Cola Summer Activation', titleKo: '코카콜라 썸머 액티베이션', brand: 'Coca-Cola', category: 'Event', year: '2022' },
    { titleEn: 'Shinhan Card Rebrand Film', titleKo: '신한카드 리브랜드 필름', brand: 'Shinhan Card', category: 'Creative', year: '2022' },
    { titleEn: 'Musinsa SS Lookbook Launch', titleKo: '무신사 SS 룩북 런치', brand: 'Musinsa', category: 'Digital', year: '2022' },
    { titleEn: 'Kakao Mobility Brand Day', titleKo: '카카오모빌리티 브랜드 데이', brand: 'Kakao', category: 'Event', year: '2021' },
    { titleEn: 'Amorepacific Heritage Series', titleKo: '아모레퍼시픽 헤리티지 시리즈', brand: 'Amorepacific', category: 'Creative', year: '2021' },
    { titleEn: 'Coupang Rocket Delivery Push', titleKo: '쿠팡 로켓배송 캠페인', brand: 'Coupang', category: 'Digital', year: '2021' },
    { titleEn: 'CJ ENM Content Showcase', titleKo: 'CJ ENM 콘텐츠 쇼케이스', brand: 'CJ ENM', category: 'Event', year: '2021' },
    { titleEn: 'Hite Jinro Terra Launch', titleKo: '하이트진로 테라 런치', brand: 'Hite Jinro', category: 'Creative', year: '2020' },
    { titleEn: 'Innisfree Eco Story', titleKo: '이니스프리 에코 스토리', brand: 'Innisfree', category: 'Digital', year: '2020' },
    { titleEn: 'KB Star Banking Promo', titleKo: 'KB 스타뱅킹 프로모션', brand: 'KB Financial', category: 'Digital', year: '2020' },
    { titleEn: 'Starbucks Korea Seasonal', titleKo: '스타벅스 코리아 시즌', brand: 'Starbucks', category: 'Event', year: '2020' },
    { titleEn: 'Nike Run Club Seoul', titleKo: '나이키 런 클럽 서울', brand: 'Nike', category: 'Event', year: '2019' },
    { titleEn: 'Lotte World Anniversary', titleKo: '롯데월드 애니버서리', brand: 'Lotte', category: 'Creative', year: '2019' },
    { titleEn: 'Nongshim Global Noodle', titleKo: '농심 글로벌 누들', brand: 'Nongshim', category: 'Digital', year: '2019' },
    { titleEn: 'Hyundai Motor EV Teaser', titleKo: '현대자동차 EV 티저', brand: 'Hyundai Motor', category: 'Creative', year: '2019' },
    { titleEn: 'Baemin Brand Day Pop-up', titleKo: '배민 브랜드 데이 팝업', brand: 'Baemin', category: 'Event', year: '2018' },
    { titleEn: 'Samsung Pay Onboarding', titleKo: '삼성페이 온보딩', brand: 'Samsung', category: 'Digital', year: '2018' },
    { titleEn: 'Olive Young Pop-up Lab', titleKo: '올리브영 팝업 랩', brand: 'Olive Young', category: 'Event', year: '2018' },
  ];

  const DEFAULT_BRANDS = [
    'Samsung', 'Hyundai Card', 'Baemin', 'LG Electronics', 'Naver', 'Kakao',
    'Toss', 'Coupang', 'CJ ENM', 'Coca-Cola', 'Nike', 'Starbucks',
    'Olive Young', 'Musinsa', 'Shinhan Card', 'KB Financial', 'Amorepacific',
    'Hyundai Motor', 'Lotte', 'Hite Jinro', 'Innisfree', 'Nongshim',
  ];

  const DEFAULT_PASSWORD = 'doakim2026';

  /* ---- Storage helpers ------------------------------------- */
  function read(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw == null ? fallback : JSON.parse(raw);
    } catch (e) { return fallback; }
  }
  function write(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {}
  }

  const DK = {
    KEYS,
    DEFAULT_PASSWORD,
    getWorks() { return read(KEYS.works, null) || JSON.parse(JSON.stringify(DEFAULT_WORKS)); },
    getProjects() { return read(KEYS.projects, null) || JSON.parse(JSON.stringify(DEFAULT_PROJECTS)); },
    getBrands() { return read(KEYS.brands, null) || DEFAULT_BRANDS.slice(); },
    getPassword() { return read(KEYS.password, null) || DEFAULT_PASSWORD; },
    setWorks(v) { write(KEYS.works, v); },
    setProjects(v) { write(KEYS.projects, v); },
    setBrands(v) { write(KEYS.brands, v); },
    setPassword(v) { write(KEYS.password, v); },
    getLang() { return read(KEYS.lang, 'ko'); },
    setLang(v) { write(KEYS.lang, v); },
    getTheme() { return read(KEYS.theme, 'dark'); },
    setTheme(v) { write(KEYS.theme, v); },
    resetAll() {
      [KEYS.works, KEYS.projects, KEYS.brands, KEYS.password].forEach((k) => localStorage.removeItem(k));
    },
    defaults: { works: DEFAULT_WORKS, projects: DEFAULT_PROJECTS, brands: DEFAULT_BRANDS },
  };

  global.DK = DK;
})(window);
