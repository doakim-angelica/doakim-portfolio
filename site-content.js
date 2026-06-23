/* ============================================================
   DOA KIM site text layer
   Main website copy is stored here and can be overridden from
   admin.html through localStorage.
   ============================================================ */
(function (global) {
  const KEY = 'doakim_site_content';

  const DEFAULT_SITE_CONTENT = {
  "navigation": {
    "about": {
      "en": "About",
      "ko": "About"
    },
    "skills": {
      "en": "Skills",
      "ko": "Skills"
    },
    "work": {
      "en": "Selected Works",
      "ko": "Selected Works"
    },
    "projects": {
      "en": "All Projects",
      "ko": "All Projects"
    },
    "contact": {
      "en": "Contact · ",
      "ko": "Contact"
    }
  },
  "hero": {
    "eyebrow": {
      "en": "BRANDING · IMC MARKETING",
      "ko": "BRANDING · IMC MARKETING"
    },
    "title": {
      "en": [
        [
          {
            "t": "DOA",
            "teal": true
          },
          {
            "t": "KIM",
            "teal": true
          }
        ],
        [
          {
            "t": "2026"
          },
          {
            "t": "Portfolio."
          }
        ]
      ],
      "ko": [
        [
          {
            "t": "DOA",
            "teal": true
          },
          {
            "t": "KIM",
            "teal": true
          }
        ],
        [
          {
            "t": "2026"
          },
          {
            "t": "Portfolio."
          }
        ]
      ]
    },
    "tag": {
      "en": "Read Trends,<br>\nbuild persuasive content,<br>\nprove impacts through numbers.\n",
      "ko": "트렌드를 읽고,<br>\n콘텐츠로 설득하고,<br>\n숫자로 증명합니다.\n"
    },
    "primaryCta": {
      "en": "View Selected Works",
      "ko": "대표 프로젝트 확인하기"
    },
    "secondaryCta": {
      "en": "Contact",
      "ko": "연락하기"
    },
    "stats": [
      {
        "value": "7+",
        "label": {
          "en": "Years of Experience",
          "ko": "진행 경력"
        }
      },
      {
        "value": "20+",
        "label": {
          "en": "Brands Managed",
          "ko": "담당 브랜드"
        }
      },
      {
        "value": "15+",
        "label": {
          "en": "Campaigns",
          "ko": "캠페인"
        }
      }
    ],
    "scroll": {
      "en": "Scroll",
      "ko": "Scroll"
    }
  },
  "about": {
    "eyebrow": {
      "en": "About",
      "ko": "About"
    },
    "heading": {
      "en": "Turning trends into content and impact into numbers.",
      "ko": "트렌드를 읽고, 콘텐츠로 설득하고, <br> 숫자로 증명하겠습니다.\n"
    },
    "paragraphs": [
      {
        "en": "I’m <strong>Doa Kim</strong>, an Account Manager and Team Lead with 7+ years of IMC agency experience across 20+ brands.",
        "ko": "통합 마케팅 커뮤니케이션 전문가 <strong>김도아</strong>입니다. "
      },
      {
        "en": "At PMG Korea, a global marketing agency, I progressed from Executive to Account Manager and Team Lead, managing integrated campaigns that connected creative planning, campaign strategy, online and offline execution, production, and performance analysis.\n",
        "ko": "글로벌 마케팅 에이전시 PMG Korea에서 사원부터 차장, 셀장까지 성장하며 국내외 20개 이상의 브랜드를 담당했습니다. 크리에이티브 기획, 캠페인 & 온·오프라인 운영까지 다양한 IMC 캠페인을 이끌며, 기획부터 실행, 제작, 분석까지 연결해왔습니다.\n"
      },
      {
        "en": "I now aim to bring this experience to a single brand and service, creating marketing that resonates deeply with consumers and users.\n",
        "ko": "이제는 그간의 인사이트를 하나의 브랜드와 서비스에 집중해, 소비자와 유저에게 깊이 각인되는 마케팅을 만들고 싶습니다.\n"
      }
    ],
    "timeline": [
      {
        "year": "2022 — Now",
        "role": {
          "en": "Senior IMC Manager",
          "ko": "시니어 IMC 매니저"
        },
        "org": {
          "en": "Lead Agency, Seoul",
          "ko": "리드 에이전시, 서울"
        }
      },
      {
        "year": "2020 — 2022",
        "role": {
          "en": "Campaign Lead",
          "ko": "캠페인 리드"
        },
        "org": {
          "en": "Integrated Comms Group",
          "ko": "인티그레이티드 커뮤니케이션 그룹"
        }
      },
      {
        "year": "2018 — 2020",
        "role": {
          "en": "Account & Strategy",
          "ko": "어카운트 · 전략"
        },
        "org": {
          "en": "Brand Studio",
          "ko": "브랜드 스튜디오"
        }
      },
      {
        "year": "2017 — 2018",
        "role": {
          "en": "Marketing Associate",
          "ko": "마케팅 어소시에이트"
        },
        "org": {
          "en": "Creative House",
          "ko": "크리에이티브 하우스"
        }
      }
    ]
  },
  "skills": {
    "eyebrow": {
      "en": "Capabilities",
      "ko": "Capabilities"
    },
    "heading": {
      "en": "Four disciplines, <br>one integrated execution.",
      "ko": "네 개의 전문 영역을, 하나의 통합 실무로."
    },
    "items": [
      {
        "num": "01",
        "icon": "target",
        "title": {
          "en": "Campaign Strategy",
          "ko": "캠페인 전략"
        },
        "desc": {
          "en": "Defining a business challenge into a sharp, integrated campaign idea with a clear message architecture.",
          "ko": "비즈니스 과제를 정의하고 선명한 통합 캠페인 아이디어와 명확한 메시지 체계로 전환합니다."
        }
      },
      {
        "num": "02",
        "icon": "palette",
        "title": {
          "en": "Creative Directing",
          "ko": "크리에이티브 디렉팅"
        },
        "desc": {
          "en": "Guiding visual, film, design, and copy so every asset stays on-voice and on-brief across channels.",
          "ko": "비주얼, 영상, 디자인, 카피의 방향성을 잡고 모든 채널에서 브랜드 T&M에 맞게 유지되도록 이끕니다."
        }
      },
      {
        "num": "03",
        "icon": "share-2",
        "title": {
          "en": "Channel & Amplification",
          "ko": "채널 운영 및 실행"
        },
        "desc": {
          "en": "Design scalable reach strategies by combining paid, owned, and earned media channels with online and offline event planning and execution to extend reach efficiently.",
          "ko": "미디어 채널 (페이드, 온드, 언드) 조합 및, 온 · 오프라인 행사 기획, 운영을 통해 확산 구조를 설계하고 도달을 효율적으로 확장합니다."
        }
      },
      {
        "num": "04",
        "icon": "bar-chart-3",
        "title": {
          "en": "Performance & Insight",
          "ko": "성과 분석 및 인사이트"
        },
        "desc": {
          "en": "Analyze campaign results quantitatively, derive actionable insights, and prepare the next creative and campaign strategy.",
          "ko": "캠페인 운영 결과 정량 분석 및 인사이트 도출 후, 다음 크리에이티브 및 캠페인 전략을 준비합니다."
        }
      }
    ]
  },
  "works": {
    "eyebrow": {
      "en": "Selected Works",
      "ko": "Selected Works"
    },
    "heading": {
      "en": "5 Selected Projects",
      "ko": "대표 프로젝트 5가지\n"
    },
    "comingSoon": {
      "en": "Coming soon",
      "ko": "준비 중"
    }
  },
  "projects": {
    "eyebrow": {
      "en": "Archive",
      "ko": "Archive"
    },
    "heading": {
      "en": "All projects.",
      "ko": "All projects."
    },
    "filters": {
      "all": {
        "en": "All",
        "ko": "전체"
      },
      "Digital": {
        "en": "Digital",
        "ko": "디지털"
      },
      "Event": {
        "en": "Event",
        "ko": "이벤트"
      },
      "Creative": {
        "en": "Creative",
        "ko": "크리에이티브"
      }
    }
  },
  "brands": {
    "eyebrow": {
      "en": "Brands",
      "ko": "Brands"
    },
    "heading": {
      "en": "Brands I’ve Built With",
      "ko": "함께 진행해 온 브랜드."
    }
  },
  "contact": {
    "eyebrow": {
      "en": "Contact",
      "ko": "Contact"
    },
    "heading": {
      "en": "Read Trends,<br> \nbuild persuasive content,<br>\nprove impacts through numbers.",
      "ko": "트렌드를 읽고,<br>\n콘텐츠로 설득하고,<br>\n숫자로 증명합니다."
    },
    "email": "doakim88@gmail.com",
    "emailButton": {
      "en": "Email me",
      "ko": "이메일 보내기"
    },
    "linkedInLabel": {
      "en": "LinkedIn",
      "ko": "LinkedIn"
    },
    "linkedInUrl": "https://www.linkedin.com/in/doa-kim/",
    "downloads": {
      "ko": {
        "label": {
          "en": "Download Korean portfolio",
          "ko": "한국어 포트폴리오 다운로드"
        },
        "path": "uploads/doa-kim-portfolio-ko.pdf"
      },
      "en": {
        "label": {
          "en": "Download English portfolio",
          "ko": "영어 포트폴리오 다운로드"
        },
        "path": "uploads/doa-kim-portfolio-en.pdf"
      }
    }
  },
  "footer": {
    "year": "2026",
    "name": "Doa Kim",
    "location": {
      "en": "Seoul, Korea",
      "ko": "서울, 대한민국"
    }
  },
  "modal": {
    "keyActions": {
      "en": "Key actions",
      "ko": "핵심 활동"
    },
    "tags": {
      "en": "Tags",
      "ko": "태그"
    },
    "archiveFallback": {
      "overview": {
        "en": "A selected archive project from DOA KIM portfolio.",
        "ko": "김도아 포트폴리오의 아카이브 프로젝트입니다."
      },
      "action": {
        "en": "Detailed scope can be added later.",
        "ko": "상세 업무 범위는 추후 추가할 수 있습니다."
      }
    }
  }
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
    return arguments.callee.toString ? null : json;
  }

  global.SiteContent = {
    key: KEY,
    defaults: DEFAULT_SITE_CONTENT,
    get: read,
    set: write,
    reset: function () { localStorage.removeItem(KEY); },
    exportSource: function () { return ("function exportSource(value) {\n    const json = JSON.stringify(value || read(), null, 2);\n    return `/* ============================================================\\n   DOA KIM site text layer\\n   Main website copy is stored here and can be overridden from\\n   admin.html through localStorage.\\n   ============================================================ */\\n(function (global) {\\n  const KEY = 'doakim_site_content';\\n\\n  const DEFAULT_SITE_CONTENT = ${json};\\n\\n  function clone(value) {\\n    return JSON.parse(JSON.stringify(value));\\n  }\\n\\n  function merge(base, override) {\\n    if (!override || typeof override !== 'object') return clone(base);\\n    const out = Array.isArray(base) ? clone(base) : Object.assign({}, base);\\n    Object.keys(override).forEach((key) => {\\n      if (base && typeof base[key] === 'object' && base[key] !== null && !Array.isArray(base[key])) {\\n        out[key] = merge(base[key], override[key]);\\n      } else {\\n        out[key] = override[key];\\n      }\\n    });\\n    return out;\\n  }\\n\\n  function read() {\\n    try {\\n      const raw = localStorage.getItem(KEY);\\n      return raw ? merge(DEFAULT_SITE_CONTENT, JSON.parse(raw)) : clone(DEFAULT_SITE_CONTENT);\\n    } catch (e) {\\n      return clone(DEFAULT_SITE_CONTENT);\\n    }\\n  }\\n\\n  function write(value) {\\n    try { localStorage.setItem(KEY, JSON.stringify(value)); } catch (e) {}\\n  }\\n\\n  function exportSource(value) {\\n    const json = JSON.stringify(value || read(), null, 2);\\n    return arguments.callee.toString ? null : json;\\n  }\\n\\n  global.SiteContent = {\\n    key: KEY,\\n    defaults: DEFAULT_SITE_CONTENT,\\n    get: read,\\n    set: write,\\n    reset: function () { localStorage.removeItem(KEY); },\\n    exportSource: function () { return (${JSON.stringify(exportSource.toString())})(read()); },\\n  };\\n})(window);\\n`;\n  }")(read()); },
  };
})(window);
