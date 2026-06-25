import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { FileText, Moon, Sun, Ghost, Fingerprint, FolderKey, Inbox, Briefcase, ArchiveRestore, Camera } from 'lucide-react';

const characters = [
  {
    id: 'bora',
    name: '김보라',
    rank: '9급 조사관',
    tags: ['ENFP', '요주의 인물', '메인 히로인'],
    quote: "하와와... 혹시... 그냥 죽은 걸로 치면 안 될까요? 응, 그냥 죽어주면 안 될까?!",
    desc: "보라색 머리, 어설프고 다급함. 서류 작업은 젬병이나 직감이 뛰어남. 당신과 동거하게 된 원흉.",
    accent: 'border-purple-500/50',
    img: 'https://dduddeo.uk/justdie/W/1.png',
    extraImgs: ['https://dduddeo.uk/justdie/W/11.png', 'https://dduddeo.uk/justdie/W/12.png']
  },
  {
    id: 'serin',
    name: '한세린',
    rank: '7급 주무관',
    tags: ['ISTJ', '쿨데레', '엄격한 사수'],
    quote: "김보라. 또 사고 쳤니? 시말서 준비해라. 일단 얜 네가 데리고 있어.",
    desc: "은빛 단발, 사무적 반말. 원리원칙을 중시하는 까칠한 사수지만 속으론 보라를 아낌.",
    accent: 'border-blue-500/50',
    img: 'https://dduddeo.uk/justdie/W/4.png',
    extraImgs: ['https://dduddeo.uk/justdie/W/21.png', 'https://dduddeo.uk/justdie/W/22.png']
  },
  {
    id: 'nabi',
    name: '유나비',
    rank: '9급 조사관',
    tags: ['ESTJ', '츤데레', '새침함'],
    quote: "흥, 김보라 조사관. 이번엔 또 무슨 사고를 친 거죠? 너란 녀석은 정말 구제불능이라니까.",
    desc: "분홍색 트윈테일, 승진 욕심 강한 엘리트 라이벌. 틱틱대지만 위기엔 은근슬쩍 챙겨줌.",
    accent: 'border-pink-500/50',
    img: 'https://dduddeo.uk/justdie/W/3.png',
    extraImgs: ['https://dduddeo.uk/justdie/W/31.png', 'https://dduddeo.uk/justdie/W/32.png']
  },
  {
    id: 'harin',
    name: '백하린',
    rank: '4급 차장',
    tags: ['INTJ', '관조적', '미스터리'],
    quote: "재밌는 영혼이네요. 보라에게 맡겨두죠. 지켜볼 가치가 있으니까.",
    desc: "검은 장발, 성숙한 미인. 유저 사건의 승인자. 여유로운 미소 뒤에 진짜 목적을 숨기고 있음.",
    accent: 'border-slate-400/50',
    img: 'https://dduddeo.uk/justdie/W/2.png',
    extraImgs: ['https://dduddeo.uk/justdie/W/41.png', 'https://dduddeo.uk/justdie/W/42.png']
  }
];

const locations = [
  { id: 'loc1', title: '민원 대기 홀', desc: '망자들의 끝없는 대기줄. 오피스의 실적 압박이 시작되는 곳.', tag: '저승관리국', img: 'https://dduddeo.uk/justdie/e/13.webp' },
  { id: 'loc2', title: '수명 문서 보관실', desc: '방대한 수명 장부가 보관된 곳. 오류의 근원지.', tag: '저승관리국', img: 'https://dduddeo.uk/justdie/e/9.webp' },
  { id: 'loc3', title: '백하린의 차장실', desc: '모든 결재가 최종적으로 향하는 미스터리한 공간.', tag: '저승관리국', img: 'https://dduddeo.uk/justdie/e/8.webp' },
  { id: 'loc7', title: '김보라의 사무 책상', desc: '아수라장이 된 책상. 산더미 같은 서류 사이로 사고의 징조가 보인다.', tag: '저승관리국', img: 'https://dduddeo.uk/justdie/e/2.webp' },
  { id: 'loc12', title: '한세린의 사무 책상', desc: '먼지 한 톨 없이 정리된 FM 사수의 결벽증 데스크.', tag: '저승관리국', img: 'https://dduddeo.uk/justdie/e/21.webp' },
  { id: 'loc8', title: '지하 기록보관소', desc: '오랜 세월의 기밀 문서가 잠들어 있는 어두컴컴한 보관소.', tag: '저승관리국', img: 'https://dduddeo.uk/justdie/e/17.webp' },
  { id: 'loc4', title: '현세 파견 게이트', desc: '현세와 저승을 연결하는 유일한 통로.', tag: '저승관리국', img: 'https://dduddeo.uk/justdie/e/23.webp' },
  { id: 'loc9', title: '구내식당', desc: '영혼과 공무원들이 뒤섞여 배급을 받는 묘한 공간.', tag: '저승관리국', img: 'https://dduddeo.uk/justdie/e/12.webp' },
  { id: 'loc5', title: '김보라의 관사 (거실)', desc: '사고뭉치 조사관과의 아슬아슬한 동거 공간.', tag: '관사', img: 'https://dduddeo.uk/justdie/e/3.webp' },
  { id: 'loc10', title: '임시 침구 공간', desc: '관사 한편에 마련된 당신의 비루한 임시 거처.', tag: '관사', img: 'https://dduddeo.uk/justdie/e/5.webp' },
  { id: 'loc11', title: '병원 앞 장례식장', desc: '오류로 인해 갑작스럽게 치러질 뻔한 당신의 장례식장.', tag: '현세', img: 'https://dduddeo.uk/justdie/e/26.webp' },
  { id: 'loc6', title: '최초 사고 현장', desc: '모든 전산 오류와 비극이 시작된 현세의 골목.', tag: '현세', img: 'https://dduddeo.uk/justdie/e/1.webp' },
];

export default function App() {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const [flippedId, setFlippedId] = React.useState<string | null>(null);

  const heroImages = [
    'https://dduddeo.uk/justdie/e/10.webp',
    'https://dduddeo.uk/justdie/e/2.webp',
    'https://dduddeo.uk/justdie/e/7.webp',
    'https://dduddeo.uk/justdie/e/23.webp'
  ];
  const [heroBgIdx, setHeroBgIdx] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setHeroBgIdx((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#0b0f19] text-slate-200 min-h-screen font-sans selection:bg-slate-700 selection:text-white">

      {/* 1. Hero Section */}
      <section className="relative z-10 min-h-[90vh] md:min-h-screen flex flex-col items-center justify-center p-6 text-center overflow-hidden bg-[#0b0f19]">
        {/* Subtle background image for the hero */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((img, idx) => (
            <img
              key={img}
              src={img}
              alt={`Background ${idx}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out mix-blend-luminosity ${idx === heroBgIdx ? 'opacity-40' : 'opacity-0'}`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f19]/20 via-[#0b0f19]/60 to-[#0b0f19]" />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center font-bold mb-8 tracking-tight flex flex-col items-center justify-center w-full z-10"
        >
          <span className="block text-white/80 text-xs md:text-sm mb-6 font-normal font-sans tracking-[0.3em] uppercase">
            누구나 한 번쯤 겪는 흔한 일이라니까요!
          </span>
          <span className="block mt-2 font-cute text-white text-[15vw] sm:text-7xl md:text-8xl lg:text-9xl leading-[1.2] max-w-full break-keep whitespace-pre-wrap px-2 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
            그냥 죽어주면<br className="sm:hidden" /> 안될까?
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6 text-sm md:text-lg text-white/70 max-w-2xl leading-relaxed font-sans font-light tracking-wide z-10"
        >
          저승관리국 9급 조사관의 치명적 서류 실수.<br />
          졸지에 사망 처리된 당신의 7일간 기묘한 인턴 생활이 시작됩니다.
        </motion.p>
      </section>

      {/* 2. Worldview Section */}
      <section className="relative z-10 py-32 px-6 bg-slate-900/40 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col md:flex-row gap-12 items-center"
          >
    <div className="w-full md:w-1/2">
              <div className="bg-[#111520] border border-slate-700 p-8 shadow-2xl relative mt-16 md:mt-0">
                <div className="absolute top-0 left-0 w-full h-1 bg-red-800/80" />
                
                {/* Attached Photo */}
                <div className="absolute -top-12 -right-4 md:-right-8 w-28 h-36 md:w-32 md:h-40 border-4 border-slate-200 shadow-xl rotate-[6deg] z-20 overflow-hidden bg-slate-800">
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-4 bg-white/20 backdrop-blur-sm border border-white/30 rotate-[-4deg] shadow-sm z-30" />
                  <img src="https://dduddeo.uk/justdie/W/9.png" alt="김보라 조사관" className="w-full h-full object-cover object-top filter contrast-125 sepia-[0.2]" />
                </div>

                <div className="flex items-center gap-3 text-slate-500 font-mono text-sm mb-8 border-b border-slate-800 pb-4 pr-20 md:pr-16">
                  <FolderKey className="w-4 h-4" />
                  <span>저승관리국 기밀 서고 // 사건번호: 2025-0625-A</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold mb-6 font-serif tracking-tight text-slate-200">수명 오류 사건 요약 보고서</h2>
                <div className="space-y-4 text-slate-300 font-mono text-sm md:text-base pr-4">
                  <p className="flex justify-between border-b border-slate-800 pb-3"><span className="text-slate-500">발생일시</span> <span className="font-bold text-slate-200 text-right">현세 기준 2025년 6월 25일</span></p>
                  <p className="flex justify-between border-b border-slate-800 pb-3"><span className="text-slate-500">담당자</span> <span className="text-right">9급 조사관 김보라</span></p>
                  <p className="flex justify-between border-b border-slate-800 pb-3"><span className="text-slate-500">사고내용</span> <span className="text-red-400 font-bold text-right">전산 입력 실수로 인한 조기 사망 처리</span></p>
                  <p className="flex justify-between pb-3"><span className="text-slate-500">임시조치</span> <span className="text-right">7일간 임시 인턴직 부여 및<br/>해당 조사관 관사 동거 조치</span></p>
                </div>
                <div className="mt-8 absolute -bottom-4 -right-4 opacity-50 rotate-[-15deg]">
                   <span className="stamp-effect text-sm border-2 px-2 py-1 text-slate-500 border-slate-500 shadow-none font-bold">열람 제한</span>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 mt-12 md:mt-0 relative">
              {/* Background Image Card */}
              <div className="absolute inset-0 rounded overflow-hidden shadow-2xl">
                <img src="https://dduddeo.uk/justdie/e/9.webp" alt="수명 문서 보관실" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/80 to-[#0b0f19]/40" />
              </div>

              <div className="relative z-10 p-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800/80 border border-slate-700/80 rounded-full text-xs font-mono text-slate-300 mb-6 backdrop-blur-sm">
                  <Briefcase className="w-3 h-3" /> 부서 안내
                </div>
                <h3 className="text-3xl md:text-4xl font-black font-serif leading-tight mb-8 text-white drop-shadow-lg">
                  끝나지 않는 서류 작업,<br/>그리고 저승의 부조리
                </h3>
                
                {/* Diagrammatic layout */}
                <div className="space-y-4">
                  {/* Step 1 */}
                  <div className="flex items-center gap-4 bg-slate-800/60 backdrop-blur-md p-4 rounded border border-slate-700 shadow-lg">
                    <div className="w-12 h-12 bg-slate-900 rounded flex items-center justify-center shrink-0 border border-slate-800">
                      <FileText className="w-6 h-6 text-slate-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-200 font-serif text-lg">산더미 같은 실적 압박</h4>
                      <p className="text-sm text-slate-400 font-sans mt-1">영혼 분류부터 문서 결재까지 끝없는 관료주의</p>
                    </div>
                  </div>
                  
                  {/* Arrow */}
                  <div className="flex justify-center -my-2 relative z-20">
                    <div className="w-px h-6 bg-slate-600" />
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-center gap-4 bg-slate-800/60 backdrop-blur-md p-4 rounded border border-slate-700 shadow-lg">
                    <div className="w-12 h-12 bg-slate-900 rounded flex items-center justify-center shrink-0 border border-slate-800">
                      <Ghost className="w-6 h-6 text-slate-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-200 font-serif text-lg">나사 빠진 상사들</h4>
                      <p className="text-sm text-slate-400 font-sans mt-1">FM 결벽증부터 승진 욕심까지, 매력적인 기인들</p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center -my-2 relative z-20">
                    <div className="w-px h-6 bg-slate-600" />
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-center gap-4 bg-red-900/30 backdrop-blur-md p-4 rounded border border-red-900/50 shadow-lg">
                    <div className="w-12 h-12 bg-red-950 rounded flex items-center justify-center shrink-0 border border-red-900">
                      <Fingerprint className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-red-200 font-serif text-lg">오류 이면의 진실</h4>
                      <p className="text-sm text-red-300/80 font-sans mt-1">단순 실수가 아닌 거대한 흑막의 그림자</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Inter-section stamp */}
      <div className="relative z-50 w-full flex justify-center h-0 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, scale: 2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="absolute -top-12 z-50 rotate-[-5deg]"
        >
          <span className="stamp-effect stamp-approved text-xl bg-[#0b0f19]/80 backdrop-blur-sm">결재 완료: 인턴 채용</span>
        </motion.div>
      </div>

      {/* 3. Characters Section */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center mb-4">
              <FileText className="w-8 h-8 text-slate-500" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">인사 기록 카드</h2>
            <p className="text-slate-400 font-mono">열람 권한 확인됨. 마우스를 올려 상세 정보를 열람하세요.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {characters.map((char, index) => (
              <motion.div
                key={char.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group perspective-1000 w-full h-[650px] cursor-pointer"
                onClick={() => setFlippedId(flippedId === char.id ? null : char.id)}
              >
                <div className={`relative w-full h-full transition-all duration-700 transform-style-3d md:group-hover:rotate-y-180 ${flippedId === char.id ? 'rotate-y-180' : ''}`}>
                  {/* Front: Document Folder Look */}
                  <div className="absolute inset-0 w-full h-full rounded overflow-hidden border border-slate-700 bg-[#161b26] backface-hidden flex flex-col shadow-lg">
                    <div className="h-4/5 w-full relative bg-slate-800">
                      <img src={char.img} alt={char.name} className="w-full h-full object-cover object-top opacity-100 mix-blend-normal md:opacity-60 md:mix-blend-luminosity md:group-hover:mix-blend-normal md:group-hover:opacity-100 transition-all duration-500" />
                      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent ${char.accent} border-t`} />
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-start relative bg-slate-900 border-t border-slate-800">
                      <div className="flex justify-between items-start mb-2">
                        <p className="text-slate-500 font-mono text-xs tracking-widest uppercase">ID: {char.id.toUpperCase()}</p>
                        <span className="text-[10px] px-2 py-0.5 border border-slate-700 rounded text-slate-500 font-mono">승인</span>
                      </div>
                      <p className="text-slate-400 font-mono text-sm mb-1">{char.rank}</p>
                      <h3 className="text-2xl font-bold text-slate-200 font-serif tracking-wide">{char.name}</h3>
                    </div>
                  </div>

                  {/* Back: Dossier details */}
                  <div className={`absolute inset-0 w-full h-full rounded overflow-hidden border border-slate-700 bg-[#161b26] p-6 flex flex-col justify-start gap-4 backface-hidden rotate-y-180 shadow-2xl`}>
                    <div className={`absolute top-0 left-0 w-full h-1 border-t ${char.accent}`} />
                    
                    <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                      <h4 className="font-serif font-bold text-slate-200 text-xl">{char.name}</h4>
                      <span className="text-xs font-mono text-slate-500">{char.rank}</span>
                    </div>

                    <div className="flex gap-2 flex-wrap">
                      {char.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-slate-800 border border-slate-700 rounded-sm text-xs font-mono text-slate-300">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed font-sans border-l-2 border-slate-700 pl-3">
                      {char.desc}
                    </p>

                    <div className="flex-1 flex gap-2 overflow-hidden mt-2">
                      {char.extraImgs.map((img, idx) => (
                        <div key={idx} className="flex-1 bg-slate-800 rounded border border-slate-700 overflow-hidden relative">
                          <img src={img} alt={`${char.name} 사진 ${idx + 1}`} className="w-full h-full object-cover object-top opacity-100 mix-blend-normal md:opacity-80 md:mix-blend-luminosity md:hover:mix-blend-normal md:hover:opacity-100 transition-all" />
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-slate-900/80 p-4 rounded border border-slate-800 relative mt-2 shrink-0">
                      <div className="absolute -top-2 left-4 bg-slate-800 px-2 text-[10px] text-slate-400 font-mono tracking-wider border border-slate-700">녹취록 발췌</div>
                      <p className="text-slate-300 font-serif italic text-sm mt-2 leading-relaxed">"{char.quote}"</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inter-section stamp before Locations */}
      <div className="relative z-50 w-full flex justify-center h-0 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, scale: 2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
          className="absolute -top-10 z-50 rotate-[3deg] ml-32 md:ml-64"
        >
          <span className="stamp-effect text-slate-500 border-slate-500 text-lg shadow-none font-mono tracking-widest bg-[#0b0f19]/80 backdrop-blur-sm">현장 실사 완료</span>
        </motion.div>
      </div>

      {/* 3.5 Locations Section */}
      <section className="relative z-10 py-32 px-6 bg-[#0b0f19]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <Camera className="w-6 h-6 text-slate-500" />
              <h2 className="text-3xl font-bold font-serif text-slate-200">첨부: 주요 관할 구역 시각 자료</h2>
            </div>
            <span className="text-sm font-mono text-slate-500">REF-LOC-001</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((loc, index) => (
              <motion.div 
                key={loc.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#111520] p-4 border border-slate-700 rounded shadow-lg group"
              >
                <div className="aspect-video bg-slate-800 relative overflow-hidden rounded-sm mb-4 border border-slate-800">
                  <img src={loc.img} alt={loc.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                  <div className={`absolute top-2 left-2 bg-black/70 px-2 py-1 text-[10px] font-mono ${loc.tag === '현세' ? 'text-red-400 border border-red-900' : 'text-slate-300'}`}>
                    {loc.tag === '현세' ? 'INCIDENT_SITE' : `CAM 0${index + 1}`}
                  </div>
                </div>
                <h4 className="font-bold text-slate-200 font-serif text-lg mb-1">{loc.title}</h4>
                <p className="text-sm text-slate-400 font-sans">{loc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inter-section stamp before Routine */}
      <div className="relative z-50 w-full flex justify-center h-0 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, scale: 2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.3 }}
          className="absolute -top-10 z-50 rotate-[-4deg] mr-32 md:mr-64"
        >
          <span className="stamp-effect text-slate-500 border-slate-500 text-lg shadow-none font-mono tracking-widest bg-[#0b0f19]/80 backdrop-blur-sm">주의 요망</span>
        </motion.div>
      </div>

      {/* 4. Routine & Story */}
      <section className="relative z-10 py-32 px-6 bg-slate-900/40 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 font-serif">근무 일지 요약</h2>
            <p className="text-slate-400 font-mono">코미디로 시작해 미스터리로 끝나는 기묘한 일주일.</p>
          </motion.div>

          <div className="space-y-12">
            {/* Day */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex gap-6 items-start flex-col md:flex-row w-full"
            >
              <div className="w-16 h-16 rounded bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700 text-slate-400">
                <Sun className="w-7 h-7" />
              </div>
              <div className="bg-[#111520] p-6 md:p-8 rounded border border-slate-700 flex-1 relative overflow-hidden group hover:border-slate-500 transition-colors shadow-lg w-full">
                <h3 className="text-xl font-bold mb-4 text-slate-200 font-serif border-b border-slate-800 pb-3">주간 업무: 저승관리국 인턴</h3>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-slate-800/50 p-4 rounded border border-slate-700/50">
                    <div className="w-8 h-8 bg-slate-900 rounded mb-3 flex items-center justify-center border border-slate-700 text-slate-400 font-mono text-sm">1</div>
                    <h4 className="font-bold text-slate-200 mb-1 text-sm">서류 & 분류</h4>
                    <p className="text-xs text-slate-400 font-sans">쏟아지는 영혼 분류 서류 보조 작업</p>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded border border-slate-700/50">
                    <div className="w-8 h-8 bg-slate-900 rounded mb-3 flex items-center justify-center border border-slate-700 text-slate-400 font-mono text-sm">2</div>
                    <h4 className="font-bold text-slate-200 mb-1 text-sm">결재 순회</h4>
                    <p className="text-xs text-slate-400 font-sans">안내데스크 등 부서 간 도장 수합</p>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded border border-slate-700/50">
                    <div className="w-8 h-8 bg-slate-900 rounded mb-3 flex items-center justify-center border border-slate-700 text-slate-400 font-mono text-sm">3</div>
                    <h4 className="font-bold text-slate-200 mb-1 text-sm">사고 수습</h4>
                    <p className="text-xs text-slate-400 font-sans">덜렁대는 김보라 선배 뒷수습</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Night */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex gap-6 items-start flex-col md:flex-row-reverse w-full"
            >
              <div className="w-16 h-16 rounded bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700 text-slate-400">
                <Moon className="w-7 h-7" />
              </div>
              <div className="bg-[#111520] p-6 md:p-8 rounded border border-slate-700 flex-1 relative overflow-hidden group hover:border-slate-500 transition-colors md:text-right shadow-lg w-full">
                <h3 className="text-xl font-bold mb-4 text-slate-200 font-serif border-b border-slate-800 pb-3">야간 일과: 김보라의 관사</h3>
                
                <div className="grid md:grid-cols-3 gap-4 text-left">
                  <div className="bg-slate-800/50 p-4 rounded border border-slate-700/50">
                    <div className="w-8 h-8 bg-slate-900 rounded mb-3 flex items-center justify-center border border-slate-700 text-slate-400 font-mono text-sm">1</div>
                    <h4 className="font-bold text-slate-200 mb-1 text-sm">관사 동반 퇴근</h4>
                    <p className="text-xs text-slate-400 font-sans">당신을 데려온 원흉과의 동거</p>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded border border-slate-700/50">
                    <div className="w-8 h-8 bg-slate-900 rounded mb-3 flex items-center justify-center border border-slate-700 text-slate-400 font-mono text-sm">2</div>
                    <h4 className="font-bold text-slate-200 mb-1 text-sm">우당탕탕 일상</h4>
                    <p className="text-xs text-slate-400 font-sans">기묘한 저승의 밤과 조금씩 가까워지는 관계</p>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded border border-slate-700/50">
                    <div className="w-8 h-8 bg-slate-900 rounded mb-3 flex items-center justify-center border border-slate-700 text-slate-400 font-mono text-sm">3</div>
                    <h4 className="font-bold text-slate-200 mb-1 text-sm">사연 파악</h4>
                    <p className="text-xs text-slate-400 font-sans">밤이 깊어갈수록 드러나는 이면들</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mystery */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex gap-6 items-start justify-center mt-12"
            >
              <div className="bg-[#1a1212] p-8 rounded border border-red-900/30 w-full relative overflow-hidden text-center max-w-2xl shadow-xl">
                <Fingerprint className="w-12 h-12 mx-auto mb-4 text-red-900/50" />
                <h3 className="text-2xl font-bold mb-3 text-red-400 font-serif">7일째, 숨겨진 진실</h3>
                <p className="text-slate-300 leading-relaxed font-sans font-medium tracking-tight">
                  단순한 전산 오류인 줄 알았던 당신의 죽음. 
                  차장 백하린의 알 수 없는 미소와 함께, 수명 오류 사건에 얽힌 거대한 흑막이 서서히 실체를 드러냅니다.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Footer CTA */}
      <footer className="relative z-10 py-32 px-6 text-center border-t border-slate-800 bg-[#0b0f19]">
        <div className="max-w-2xl mx-auto relative">
          <ArchiveRestore className="w-12 h-12 mx-auto mb-6 text-slate-600" />
          
          <div className="relative inline-block mb-12">
            <motion.div 
              initial={{ opacity: 0, scale: 2 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
              className="absolute -top-12 -right-20 z-20 rotate-[12deg] pointer-events-none"
            >
              <span className="stamp-effect stamp-rejected text-xl md:text-2xl font-serif whitespace-nowrap bg-[#0b0f19]/50">기밀 유지 서약 필요</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-slate-200 relative z-10">서류를 제출하시겠습니까?</h2>
          </div>
          
          <br/>

          <motion.a
            href="https://crack.wrtn.ai/detail/6a3a6dbb58e9ad1e5b9252c9"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-10 py-4 bg-slate-200 hover:bg-white text-slate-900 rounded font-bold text-xl transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
          >
            서명 및 시작
          </motion.a>
          <p className="mt-16 text-xs text-slate-600 font-mono">
            © 2025 저승관리국. 분류 번호 849-XYZ. 무단 유출 시 징계.
          </p>
        </div>
      </footer>
    </div>
  );
}
