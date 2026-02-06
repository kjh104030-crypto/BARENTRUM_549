import React, { useState, useEffect, useRef } from 'react';
import { AlertOctagon, Skull, Activity, Wifi } from 'lucide-react';

// Data pools for simulation
const usernames = [
  "Dr.Neuro", "GABA_Fixer", "Synapse_Ghost", "Lobotomy_Fan", 
  "Flesh_Mechanic", "Cortex_Ripper", "Organ_Harvest_77", "Bio_Alchemist",
  "Null_Patient", "Spine_Tapper"
];

const chatMessages = [
  "C7-T1 신경절 절단면 융합 계수 0.04% 오차... 리젝트.",
  "도파민 수용체 D2 하향 조절(down-regulation) 필요. 시냅스 과부하 경고.",
  "전두엽 백질 절제술(Lobotomy) 키트 구함. 구형 모델 선호.",
  "엔그램 데이터 손상... 해마 CA1 구역 섹터 불량. 백업본 팝니다.",
  "합성 근육 섬유 'Myo-X' 장력 테스트 실패. 피험자 상완골 파열.",
  "아미그달라(Amygdala) 공포 반응 소거 시술 중... 심박수 240bpm 고정.",
  "나트륨-칼륨 펌프 억제제 과다 투여. 막전위 붕괴 임박.",
  "척수액 누수 발생. L3 요추 천자 흔적 발견. 봉합사(Suture) 급구.",
  "베르니케 영역 오버라이트 완료. 언어 중추 재부팅... 33%...",
  "시신경 교차점, 4번 뇌신경 마비. 시각 피질 맵핑 데이터 교환 원함.",
  "카테콜아민(Catecholamine) 폭주 상태. 아드레날린 수치 측정 불가.",
  "글리아 세포(Glia) 증식 속도 비정상. 뇌압 상승 중. 천공술(Trephination) 준비.",
  "3번 구역 공방, 신선한 B형 혈장 입고. 응고제 미첨가.",
  "중뇌 수도관(Cerebral aqueduct) 막힘. 뇌수종 진행 중. 션트(Shunt) 튜브 삽니다.",
  "모터 코텍스(Motor Cortex) 동기화 오류. 수전증이 아니라 진동 모드라고 우기면 됨.",
  "가바 수용체 A형 길항제(Antagonist) 투여. 발작 멈춤. 실험 성공."
];

interface Message {
  id: number;
  time: string;
  user: string;
  content: string;
  isSystem?: boolean;
}

export const Synapse: React.FC = () => {
  const [accessGranted, setAccessGranted] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, time: '14:02:11', user: 'User_991', content: 'A급 간 팝니다. 3구역 공방 뒤편 쓰레기통. 선착순.' },
    { id: 2, time: '14:03:45', user: 'Dr.Chrome', content: '신형 \'재해석\' 시술 실패작 처리 곤란하네. 실험체 필요한 가바 있어?' },
    { id: 3, time: '14:05:01', user: 'Rat_King', content: '거미굴 쪽에서 인지혼 수송차량 털렸다던데, 부품 쏟아지겠구만.' },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom only on initial access
  useEffect(() => {
    if (messagesEndRef.current && accessGranted) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [accessGranted]);

  // Live chat simulation
  useEffect(() => {
    if (!accessGranted) return;

    const interval = setInterval(() => {
      const randomMsg = chatMessages[Math.floor(Math.random() * chatMessages.length)];
      const randomUser = usernames[Math.floor(Math.random() * usernames.length)];
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-GB', { hour12: false });

      // Add normal message
      setMessages(prev => {
        const newMsg = { id: Date.now(), time: timeStr, user: randomUser, content: randomMsg };
        const updated = [...prev, newMsg];
        if (updated.length > 50) return updated.slice(updated.length - 50); // Increased limit to 50 for scrolling
        return updated;
      });

      // Occasional System Message (10% chance)
      if (Math.random() < 0.1) {
        setTimeout(() => {
             setMessages(prev => {
                const sysMsg = { id: Date.now() + 1, time: '--:--:--', user: 'SYSTEM', content: 'Connection unstable. Encryption key rotating...', isSystem: true };
                const updated = [...prev, sysMsg];
                 if (updated.length > 50) return updated.slice(updated.length - 50);
                 return updated;
             });
        }, 1000);
      }

    }, 3500); // New message every 3.5 seconds

    return () => clearInterval(interval);
  }, [accessGranted]);

  // Warning Screen
  if (!accessGranted) {
    return (
      <div className="min-h-screen pt-16 flex flex-col items-center justify-center bg-black relative overflow-hidden">
        {/* Warning Background Elements */}
        <div className="absolute inset-0 z-0">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyber-red/5 rounded-full blur-3xl animate-pulse"></div>
             <div className="w-full h-full opacity-10" style={{backgroundImage: 'repeating-linear-gradient(45deg, #FF003C 0, #FF003C 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px'}}></div>
        </div>

        <div className="relative z-10 max-w-2xl px-8 py-12 border-2 border-cyber-red bg-[#0a0000] text-center shadow-[0_0_50px_rgba(255,0,60,0.3)]">
          <AlertOctagon size={64} className="mx-auto text-cyber-red mb-6 animate-bounce" />
          
          <h2 className="text-4xl font-display font-black text-cyber-red mb-8 tracking-widest">
            WARNING: BIOHAZARD
          </h2>

          <p className="font-mono text-lg text-gray-300 mb-8 leading-relaxed">
            "중요한 정보보다 역겨운 정보들이 더 많을거야. 굳이 보겠다면 말리진 않겠지만. 뭐... 알아서 해."
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <button 
                onClick={() => window.history.back()}
                className="px-8 py-3 border border-gray-600 text-gray-400 font-mono hover:bg-gray-900 transition-colors"
             >
                ABORT
             </button>
             <button 
                onClick={() => setAccessGranted(true)}
                className="group relative px-8 py-3 bg-cyber-red/20 border border-cyber-red text-cyber-red font-display font-bold hover:bg-cyber-red hover:text-black transition-all overflow-hidden"
             >
                <span className="relative z-10 flex items-center gap-2">
                    CONNECT TO SYNAPSE <Skull size={18} />
                </span>
             </button>
          </div>
        </div>
      </div>
    );
  }

  // Content Screen
  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pb-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-cyber-red pb-4 gap-4">
        <div>
            <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-cyber-red rounded-full animate-ping"></div>
                <h2 className="text-4xl font-display font-bold text-cyber-red tracking-tighter">SYNAPSE_NET</h2>
            </div>
             <p className="font-mono text-gray-400 text-sm mt-2 md:ml-7 leading-relaxed italic">
                "여기가 바런트럼의 다크웹, 시냅스야. 여기 있는 모두가 네가 죽기만을 기다릴 수도 있고."
            </p>
        </div>
        <div className="text-cyber-red font-mono text-xs flex items-center gap-2 shrink-0">
            <Wifi size={14} /> ENCRYPTED CONNECTION
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8">
         {/* Main Definition Card */}
         <div className="bg-[#1a0505] border border-cyber-red p-8 relative overflow-hidden group hover:shadow-[0_0_30px_rgba(255,0,60,0.2)] transition-shadow">
            <div className="absolute top-0 right-0 p-4 opacity-10">
                <Activity size={120} className="text-cyber-red" />
            </div>
            
            <h3 className="text-3xl font-display font-bold text-white mb-2 flex items-center gap-3">
                <span className="text-cyber-red">#</span> 시냅스 (Synapse)
            </h3>
            <div className="w-16 h-1 bg-cyber-red mb-6"></div>
            
            <p className="font-mono text-gray-300 text-lg leading-relaxed mb-4">
                'GABA'들 끼리의 소통망. 중요한 정보의 비율보다 <span className="text-cyber-red">신체, 장기, 시술, 인공신체, 칩</span>에 관한 이야기들만 오간다.
            </p>
            <div className="text-xs font-mono text-red-900 mt-8 border-t border-red-900/50 pt-2">
                // TRAFFIC: HIGH // CONTENT: GORE // STATUS: UNMODERATED
            </div>
         </div>
      </div>

      {/* Simulated Chat Feed */}
      <div className="mt-12 border-t border-gray-800 pt-8">
        <h4 className="font-mono text-gray-500 mb-6 text-sm uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 bg-cyber-red rounded-full animate-pulse"></span>
            Recent Chatter // LIVE FEED
        </h4>
        
        {/* Scrollable Container */}
        <div className="font-mono text-sm w-full h-96 overflow-y-auto pr-2 space-y-2 border-b border-gray-800 pb-2">
            {messages.map((msg) => (
                <div 
                    key={msg.id}
                    className={`
                        p-4 border-l-2 transition-all duration-300 flex flex-col sm:flex-row sm:gap-4 animate-in fade-in slide-in-from-bottom-2
                        ${msg.isSystem 
                            ? 'bg-red-900/10 border-red-900 opacity-70 italic' 
                            : 'bg-black/50 border-gray-700 hover:border-cyber-red hover:bg-[#1a0505]'
                        }
                    `}
                >
                    <div className="flex items-center gap-4 sm:w-48 shrink-0">
                        <span className="text-gray-600 text-xs">{msg.time}</span>
                        <span className={`${msg.isSystem ? 'text-gray-500' : 'text-cyber-red'} font-bold`}>
                            {msg.user}
                        </span>
                    </div>
                    <span className={`${msg.isSystem ? 'text-gray-500' : 'text-gray-300'}`}>
                        {msg.content}
                    </span>
                </div>
            ))}
            <div ref={messagesEndRef} />
        </div>
      </div>
    </div>
  );
};