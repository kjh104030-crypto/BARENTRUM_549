import { Terminology, Association, Corporation, Character, Rank } from './types';

export const terminologyData: Terminology[] = [
  // Locations
  {
    term: "바런트럼",
    enTerm: "BARENTRUM",
    description: "거대한 시궁창이자 네가 구를 무대. 26개 구역으로 찢어놨지. 인구가 하도 미어터져서 네놈 하나 뒤져도 통계에도 안 잡혀.",
    category: 'location'
  },
  {
    term: "26구역",
    enTerm: "26 Districts",
    description: "13개는 윗동네(상층), 13개는 아랫동네(하층). 7번은 그 사이를 잇는 쥐구멍이고, 3번은 고철(사이버웨어) 상가, 13번은 흥청망청 노는 곳이지.",
    category: 'location'
  },
  {
    term: "C.U",
    enTerm: "Collective Unconscious",
    description: "구역 사이를 잇는 통로. 있어 보이게 '집합적 무의식체'라고 부르더군. 통로 자체는 죄가 없어, 거기 숨어서 널 노리는 놈들이 문제지. 상층이랑 하층으로 나뉘어.",
    category: 'location'
  },
  {
    term: "공방",
    enTerm: "Workshop",
    description: "구역마다 널린 게 공방이야. 네 목숨줄 연명할 무기나 방어구 같은 걸 찍어내는 곳이지.",
    category: 'location'
  },

  // Entities
  {
    term: "종양",
    enTerm: "Malignant Tumor",
    description: "C.U 어둠 속에 쳐박혀서 지나가는 놈들 덮치는 떨거지들. 비겁하게 숨어있다가 뒤통수 치는 게 특기야.",
    category: 'entity'
  },
  {
    term: "찌꺼기",
    enTerm: "Benign Tumor",
    description: "뒷골목에 기생하면서 사람 죽여서 장기나 팔아먹는 놈들. 생산성이라곤 쥐뿔도 없어.",
    category: 'entity'
  },
  {
    term: "JUVE",
    enTerm: "Juvenile Penitentiary",
    description: "감옥 주제에 하청도 둬. 10개나 있고, APD 등록이니 진급이니 귀찮은 행정 처리는 여기서 다 해.",
    category: 'entity'
  },
  {
    term: "APD",
    enTerm: "Antisocial Personality Disorder",
    description: "이 도시에 널리고 널린 용병 나부랭이들.",
    category: 'entity'
  },
  {
    term: "BPD",
    enTerm: "Borderline Personality Disorder",
    description: "기업 후원받는 용병들. 정신이 오락가락해서 사이버웨어로 땜질해놨지. 개중 잘난 놈들은 '자아실현' 등급이라나.",
    category: 'entity'
  },
  {
    term: "SPD",
    enTerm: "Schizoid Personality Disorder",
    description: "하층의 '들개'들. 등급 따위 필요 없는 베테랑이지. APD나 BPD? 걔네보단 한 수 위야.",
    category: 'entity'
  },
  {
    term: "GABA",
    enTerm: "GABA",
    description: "사이버웨어나 시술을 담당하는 직업을 칭하는 단어. 이해하기 힘든 단어들을 읊조리기도 한다. '가바' 라고도 불리고, '가바닥'이라고도 불린다.",
    category: 'entity'
  },

  // Concepts
  {
    term: "구역 이동",
    description: "태어난 곳에서 평생 썩는 게 원칙이지만, 돈이나 빽, 아니면 깡으로 넘나드는 놈들도 있지.",
    category: 'concept'
  },
  {
    term: "애니미즘",
    enTerm: "Animism",
    description: "APD들이 쓰는 무기를 거창하게 부르는 말.",
    category: 'concept'
  },
  {
    term: "사이버웨어",
    enTerm: "Cyberware",
    description: "갈아끼운 눈깔, 팔다리, 칩... 인간이기를 포기하게 만드는 고철덩어리들.",
    category: 'concept'
  },
  {
    term: "시냅스",
    enTerm: "Synapse",
    description: "'GABA'들 끼리의 소통망. 중요한 정보의 비율보다 신체, 장기, 시술, 인공신체, 칩에 관한 이야기들만 오간다.",
    category: 'concept'
  }
];

export const promotionInfo = {
  title: "APD 진급 & 등록",
  description: "데이갈 협회나 티아슬 협회 가서 등록해. 진급? 협회 방문해서 테스트 통과하면 시켜주지. 같은 등급이라도 실력 차이는 천지차이야. 억울하면 목숨 걸고 올라가던가."
};

export const rankData: Rank[] = [
  {
    term: "자아 초월",
    enTerm: "Self-Transcendence",
    description: "꿈 깨. 그냥 간판이야. 도달 불가능.",
    level: 1
  },
  {
    term: "자아실현",
    enTerm: "Self-Actualization",
    description: "네가 올라갈 수 있는 끝. 기업 따까리 BPD 대장급이랑 맞먹지.",
    level: 2
  },
  {
    term: "탐미",
    enTerm: "Aestheticism",
    description: "기업 놈들이 돈 싸들고 모셔가려는 등급.",
    level: 3
  },
  {
    term: "인지",
    enTerm: "Cognition",
    description: "이제 좀 기업이나 BPD 제의가 들어오는군. 사무소 하나 차릴 정도는 돼.",
    level: 4
  },
  {
    term: "존중",
    enTerm: "Respect",
    description: "상층 구경 좀 해볼 만한 등급. 이때부턴 익명성은 개나 줘버려.",
    level: 5
  },
  {
    term: "소속",
    enTerm: "Affiliation",
    description: "그나마 사람 구실 하는 평균 상위권. 보험이니 뭐니 혜택 좀 챙겨주지.",
    level: 6
  },
  {
    term: "안전",
    enTerm: "Safety",
    description: "일반인이랑 다를 거 없는 하루살이들. 그나마 고철이라도 박았으면 상위 20%라네.",
    level: 7
  },
  {
    term: "본능",
    enTerm: "Instinct",
    description: "종양이나 찌꺼기랑 동급. 밑바닥 인생.",
    level: 8
  }
];

export const associationData: Association[] = [
  { name: "데이갈 협회", role: "법률/규칙", description: "APD들 목줄 쥐고 있는 곳. 법이니 규칙이니 떠들면서 진급 심사도 담당해." },
  { name: "듀르 협회", role: "장비 규격", description: "장비 가지고 딴지 거는 놈들. 규격 맞나 감시하는 게 일이야." },
  { name: "세르다 협회", role: "사무소 관리", description: "사무소 차리려면 이 놈들한테 상납해야 해." },
  { name: "나드 협회", role: "현상수배", description: "현상수배지 붙이는 곳. 범죄자 놈들 관리한다고 으스대지." },
  { name: "다세오 협회", role: "생명/보험", description: "팔다리 날아가면 고철로 때워주는 보험쟁이들." },
  { name: "여실 협회", role: "치안/경찰", description: "짭새. 데이갈이랑 짝짜꿍해서 최소한의 질서만 유지해." },
  { name: "차르일 협회", role: "정보/기밀", description: "정보상. 지들만 아는 건 비밀이라면서 비싸게 굴지." },
  { name: "여달 협회", role: "치안/경찰", description: "여실이랑 똑같은 짭새들." },
  { name: "나홈 협회", role: "역사/기록", description: "지나간 일 기록하는 샌님들." },
  { name: "티아슬 협회", role: "행정/운송", description: "여기저기 쑤시고 다니는 행정상. 구역 이동도 자유롭고 진급도 담당해." },
];

export const corporationData: Corporation[] = [
  {
    name: "지각혼",
    enName: "Perception",
    motto: "직선은 원을 살해하였는가. 아니면 그저 우리가 그렇게 믿은 것인가.",
    description: "감각을 마비시켜서 고기방패로 만들거나 약쟁이로 만드는 놈들.",
    products: ["'재해석' 시술 (고통 차단)", "'과감각' 약물 (환각/각성/마취)"]
  },
  {
    name: "인지혼",
    enName: "Cognition",
    motto: "세상 사람은- 뼈를 녹여내는 듯한 삶의 노래에 춤을 춘다.",
    description: "장기랑 팔다리 찍어내는 공장이야. 인체 공학? 웃기시네.",
    products: ["인공 장기 (의안 제외)", "인공 신체 (의수, 의족)"]
  },
  {
    name: "주의혼",
    enName: "Attention",
    motto: "하늘의 별들을 헤는 것에 집중하다, 정작 중요한 것을 놓친다.",
    description: "강제로 집중시키는 약물이나 파는 놈들. 정신 좀 차리게 해주지 그래?",
    products: ["'칵테일 파티' (강제 집중/각성 약물)"]
  },
  {
    name: "정서혼",
    enName: "Emotion",
    motto: "꽃 피기는 쉬워도 아름답긴 어려워라.",
    description: "감정 지우는 칩이랑 변신하는 금속 쪼가리 만드는 곳.",
    products: ["'교화' 칩 (감정 삭제)", "'형상변환합금' (반응형 금속)"]
  },
  {
    name: "지능혼",
    enName: "Intelligence",
    motto: "죽는 날까지 하늘을 우러러 한 점 부끄럼이 없기를.",
    description: "남의 기억이랑 경험을 알약으로 만들어서 파는 미친놈들.",
    products: ["'경험 알약' (기억/경험 추출)"]
  },
  {
    name: "욕구혼",
    enName: "Desire",
    motto: "원하는걸 알면 움직이게 할 수 있지.",
    description: "지능혼이랑 손잡고 가상현실 뽕 파는 놈들.",
    products: ["'진실된 눈' (가상 현실 장치)"]
  },
  {
    name: "의지혼",
    enName: "Will",
    motto: "육체는 의지를 담는 그릇.",
    description: "인지혼이랑 짝짜꿍해서 비싼 전신 의체 만들어. 돈만 있으면 신이 된 기분이겠지.",
    products: ["고성능 인공 육체"]
  }
];

export const characterData: Character[] = [];