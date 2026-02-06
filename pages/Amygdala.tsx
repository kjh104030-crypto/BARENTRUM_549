import React, { useState, useEffect, useRef } from 'react';
import { Network, ShieldCheck, Wifi, MessageSquare, User, AlertTriangle, Eye, Lock, RotateCcw, ArrowLeft, CornerDownRight, Pin } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

interface Comment {
  id: number;
  author: string;
  content: string;
  timestamp: string;
}

interface Post {
  id: number;
  author: string;
  title: string;
  content: string;
  timestamp: string;
  views: number;
  commentsCount: number;
  commentList: Comment[];
  isAdmin?: boolean;
  tags?: string[];
}

// Random Data Pools for Simulation
const randomAuthors = ["Glitch_01", "Neon_Rat", "Cyber_Junkie", "Null_Set", "Byte_Me", "Kernel_Panic", "Root_User", "Anon_77", "Script_Kiddie", "Proxy_Server"];
const randomTitles = [
  "야 13구역 클럽 수질 어떠냐?",
  "[속보] 나이팅게일 주가 폭락 중 ㅋㅋㅋ",
  "APD 신형 드론 해킹 코드 공유한다 (테스트 안해봄)",
  "중고 사이버웨어 샀는데 팔이 지맘대로 움직임;;",
  "기업 놈들 또 하수구에 폐기물 버리네",
  "님들 뇌세척 쿨타임 얼마나 둠?",
  "[잡담] 오늘 저녁은 합성 라면이다 ㅠㅠ",
  "GABA 시술소 추천 좀. 야매 말고.",
];
const randomContents = [
  "가봤는데 물 별로임. 걍 집에서 넷러닝이나 해라.",
  "지금 숏 쳐라. 인생 역전 기회다.",
  "코드 깃허브에 올림. 알아서 쓰셈. 책임 안짐.",
  "그거 해킹 당한거 아님? ㅋㅋ 병원 가봐라.",
  "냄새 오지네 진짜. 방독면 필수다.",
  "난 1년에 한 번 함. 너무 자주 하면 멍청해짐.",
  "맛있겠다. 난 영양 팩이나 빠는데.",
  "3구역 '닥터 킴' 잘함. 근데 마취 안해줌.",
];
const randomReplies = [
  "ㄹㅇㅋㅋ",
  "이게 맞지",
  "형님 충성충성 ^^7",
  "헛소리 작작 좀;",
  "좌표 좀 찍어줘",
  "ㅇㅈ합니다",
  "나만 아니면 돼~",
  "기업 놈들이 또...",
  "그래서 결론이 뭐임?",
  "님 혹시 간첩임?",
  "아 ㅋㅋ 꿀잼이네",
  "닥치고 정보나 내놔",
  "뉴비 귀엽네"
];

const initialPosts: Post[] = [
  {
    id: 1,
    author: "ADMIN_RAMOL(라몰)",
    title: "[공지] 뉴비 필독. 규칙 안 지키면 바로 차단 박는다.",
    content: "1. 핑거프린팅 남기지 마라. 추적당하면 네 손해임.\n2. 기업 놈들 어그로 끌리는 글 자제. 여기 터지면 니들이 책임질거냐?\n3. 징징글 금지. 꼬우면 니가 해킹하던가.\n4. 거래 사기는 알아서 해결해라. 중재 안함.",
    timestamp: "2077.01.01",
    views: 99999,
    commentsCount: 2,
    commentList: [
        { id: 101, author: "Newbie_1", content: "확인했습니다.", timestamp: "2077.01.02" },
        { id: 102, author: "Old_Bie", content: "관리자님 근데 요즘 VPN 너무 느린데 증설 좀요.", timestamp: "2077.01.03" }
    ],
    isAdmin: true,
    tags: ["공지", "필독"]
  },
  {
    id: 2,
    author: "Null_Pointer",
    title: "야 3구역 공방 그 늙은이 믿지 마라 ㅡㅡ",
    content: "싸게 해준다길래 시신경 교체 맡겼더니 색보정 개판쳐놓음 ㅅㅂ.\n세상이 다 핑크색으로 보인다 미친.\n환불해달라니까 '미적 감각이 부족하네' 이 지랄.\n절대 가지마라. 상호명 '기계손'임.",
    timestamp: "14:22",
    views: 402,
    commentsCount: 4,
    commentList: [
        { id: 201, author: "Pink_Lover", content: "오히려 좋아 보이는데? 좌표 좀.", timestamp: "14:25" },
        { id: 202, author: "Null_Pointer", content: "ㄴ 미친놈인가", timestamp: "14:26" },
        { id: 203, author: "Fixer_Joe", content: "거기 원래 돌팔이로 유명함 ㅋㅋ 당한 니가 호구임", timestamp: "14:30" },
        { id: 204, author: "GABA_Pro", content: "내가 재수술 해줄까? 견적 300.", timestamp: "14:45" }
    ],
    tags: ["후기", "비추"]
  },
  {
    id: 3,
    author: "Code_Breaker",
    title: "[판매] 나이팅게일사 2분기 보안 프로토콜 더미 데이터",
    content: "진짜배기는 아니고 연습용으로 쓸만함. 뚫는 맛 있음.\n500 크레딧. 비트 코인만 받음.\n찔러보기 ㄴㄴ. 쿨거래만.",
    timestamp: "13:45",
    views: 156,
    commentsCount: 1,
    commentList: [
        { id: 301, author: "Security_Team", content: "IP 추적 완료. 곧 방문하겠습니다 ^^", timestamp: "13:50" }
    ],
    tags: ["장터", "데이터"]
  },
  {
    id: 4,
    author: "Brain_Washer",
    title: "요즘 BPD 놈들 약 뭐 쓰냐?",
    content: "아까 길가다 BPD 하나 마주쳤는데 눈깔이 아주 돌아가있던데.\n동공이 수축되다 못해 소멸할 지경이더라.\n'주의혼'에서 신상 풀렸냐? 전투력 개쩔어보임;;\n정보 있는 사람 공유 좀.",
    timestamp: "12:10",
    views: 892,
    commentsCount: 2,
    commentList: [
        { id: 401, author: "Chemist", content: "칵테일 파티 신제품일걸? 지속시간 2배 늘었다고 들음.", timestamp: "12:15" },
        { id: 402, author: "Brain_Washer", content: "와 미쳤네. 만나면 무조건 튀어야겠군.", timestamp: "12:16" }
    ],
    tags: ["정보", "질문"]
  },
  {
    id: 5,
    author: "Sector_7_Survivor",
    title: "7구역 쥐구멍 막혔다. 우회해라.",
    content: "APD 쫙 깔림. 검문 검색 빡세다.\n뭔 일 터진듯? C.U 쪽으로 돌아가라.\n재수 없으면 걸려서 장비 다 뺏긴다.",
    timestamp: "09:12",
    views: 1205,
    commentsCount: 3,
    commentList: [
        { id: 501, author: "Rat_1", content: "아 ㅆㅂ 지금 가고 있었는데 ㄳㄳ", timestamp: "09:15" },
        { id: 502, author: "Rat_2", content: "C.U 쪽은 종양들이 설치잖아... 죽으라는거냐?", timestamp: "09:20" },
        { id: 503, author: "Sector_7_Survivor", content: "안전하게 가려면 돈 내고 티아슬 협회 셔틀 타던가 ㅋ", timestamp: "09:22" }
    ],
    tags: ["긴급", "정보"]
  }
];

const PostItem: React.FC<{ post: Post; onSelect: (post: Post) => void }> = ({ post, onSelect }) => (
    <div 
      onClick={() => onSelect(post)}
      className={`
          group relative border p-4 transition-all duration-200 cursor-pointer hover:translate-x-1
          ${post.isAdmin 
              ? 'border-green-500 bg-green-900/10 shadow-[0_0_15px_rgba(0,255,0,0.1)] mb-2' 
              : 'border-green-900/50 bg-black/60 hover:border-green-600 hover:bg-green-950/30'
          }
      `}
    >
        {/* Post Header */}
        <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-2">
                {post.isAdmin && (
                    <div className="flex items-center gap-1 bg-green-900/50 px-1.5 py-0.5 rounded border border-green-500/50">
                        <Pin size={12} className="text-green-400 fill-green-400" />
                        <span className="text-[10px] font-bold text-green-300 uppercase">Notice</span>
                    </div>
                )}
                <span className={`font-bold text-sm ${post.isAdmin ? 'text-green-300' : 'text-green-600 group-hover:text-green-400'}`}>
                    {post.author}
                </span>
                <span className="text-[10px] text-green-800">
                    {post.timestamp}
                </span>
            </div>
            <div className="text-[10px] flex gap-2 text-green-800">
                <span>ID: {Math.random().toString(16).substr(2, 6).toUpperCase()}</span>
            </div>
        </div>

        {/* Title */}
        <h3 className={`font-bold text-lg mb-2 ${post.isAdmin ? 'text-white' : 'text-green-400 group-hover:text-green-200'}`}>
            {post.title}
        </h3>

        {/* Content Preview */}
        <p className="text-sm text-green-500/80 whitespace-nowrap overflow-hidden text-ellipsis mb-4 border-l-2 border-green-900 pl-3 opacity-70">
            {post.content.split('\n')[0]}...
        </p>

        {/* Footer / Meta */}
        <div className="flex justify-between items-center text-xs border-t border-green-900/30 pt-2 mt-2">
            <div className="flex gap-2">
                {post.tags?.map(tag => (
                    <span key={tag} className="bg-green-950 text-green-600 px-1 rounded text-[10px]">#{tag}</span>
                ))}
            </div>
            <div className="flex gap-4 text-green-700">
                <span className="flex items-center gap-1 group-hover:text-green-400"><Eye size={12} /> {post.views}</span>
                <span className="flex items-center gap-1 group-hover:text-green-400"><MessageSquare size={12} /> {post.commentsCount}</span>
            </div>
        </div>
        
        {/* Hover Deco */}
        <div className="absolute top-0 right-0 w-2 h-2 bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </div>
);

export const Amygdala: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [newPostContent, setNewPostContent] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handlePost = () => {
    if (!newPostContent.trim()) return;

    // If viewing a post, add as comment
    if (selectedPost) {
        const newComment: Comment = {
            id: Date.now(),
            author: "GHOST_ACCESS",
            content: newPostContent,
            timestamp: "Now"
        };
        
        // Immediate UI update for user
        const updatedPostWithUser = {
            ...selectedPost,
            commentsCount: selectedPost.commentsCount + 1,
            commentList: [...selectedPost.commentList, newComment]
        };
        
        setSelectedPost(updatedPostWithUser);
        setPosts(prev => prev.map(p => p.id === selectedPost.id ? updatedPostWithUser : p));
        
        const userContent = newPostContent; // Capture for async
        setNewPostContent("");

        // AUTO REPLY SIMULATION WITH CONTEXT AWARENESS
        setTimeout(async () => {
            let botReply = "";
            const botAuthor = randomAuthors[Math.floor(Math.random() * randomAuthors.length)];

            // 1. Try Gemini
            try {
                if (process.env.API_KEY) {
                    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
                    const response = await ai.models.generateContent({
                        model: 'gemini-3-flash-preview',
                        contents: `
                            System: You are a cynical, rude, or sarcastic hacker on a cyberpunk dark web forum called 'Amygdala'.
                            User Input: "${userContent}"
                            Task: Write a very short reply (max 2 sentences) in Korean. Use slang. Be relevant to the input.
                        `
                    });
                    if (response.text) {
                        botReply = response.text.trim();
                    }
                }
            } catch (e) {
                console.debug("Gemini fallback triggered");
            }

            // 2. Keyword Fallback if Gemini failed or no key
            if (!botReply) {
                if (userContent.includes("좌표") || userContent.includes("위치")) {
                    botReply = "DM 확인해라. 쥐새끼들 꼬일라.";
                } else if (userContent.includes("얼마") || userContent.includes("가격")) {
                    botReply = "부르는 게 값이야. 없으면 꺼져.";
                } else if (userContent.includes("추천")) {
                    botReply = "3구역 뒷골목 가봐. 살아서 나오면 다행이고.";
                } else if (userContent.includes("감사") || userContent.includes("고맙")) {
                    botReply = "말로만? 크레딧으로 성의를 보여라.";
                } else if (userContent.includes("욕") || userContent.includes("시발") || userContent.includes("병신")) {
                    botReply = "워워, 진정해 뉴비. 혈압 터질라.";
                } else {
                    botReply = randomReplies[Math.floor(Math.random() * randomReplies.length)];
                }
            }
            
            const botComment: Comment = {
                id: Date.now() + Math.random(),
                author: botAuthor,
                content: botReply,
                timestamp: "Just Now"
            };

            setPosts(prevPosts => {
                const targetPost = prevPosts.find(p => p.id === selectedPost.id);
                if (!targetPost) return prevPosts;

                const updatedPostWithBot = {
                    ...targetPost,
                    commentsCount: targetPost.commentsCount + 1,
                    commentList: [...targetPost.commentList, botComment]
                };

                // Sync selectedPost if user is still viewing the same post
                setSelectedPost(currSelected => {
                    if (currSelected && currSelected.id === selectedPost.id) {
                        return updatedPostWithBot;
                    }
                    return currSelected;
                });

                return prevPosts.map(p => p.id === selectedPost.id ? updatedPostWithBot : p);
            });
        }, 1500 + Math.random() * 1000); // 1.5s ~ 2.5s delay
    } else {
        // Add as new post
        const newPost: Post = {
          id: Date.now(),
          author: "GHOST_ACCESS", // Current user
          title: "Re: " + newPostContent.substring(0, 20) + "...",
          content: newPostContent,
          timestamp: "Now",
          views: 0,
          commentsCount: 0,
          commentList: [],
          tags: ["익명"]
        };
        setPosts([newPost, ...posts]);
        setNewPostContent("");
    }
  };

  const handleRefresh = () => {
    setRefreshing(true);
    // Simulate network delay
    setTimeout(() => {
        const randomIdx = Math.floor(Math.random() * randomTitles.length);
        const newPost: Post = {
            id: Date.now(),
            author: randomAuthors[Math.floor(Math.random() * randomAuthors.length)],
            title: randomTitles[randomIdx],
            content: randomContents[randomIdx],
            timestamp: "Just Now",
            views: Math.floor(Math.random() * 100),
            commentsCount: 0,
            commentList: [],
            tags: ["New"]
        };
        setPosts([newPost, ...posts]);
        setRefreshing(false);
        if (scrollRef.current) scrollRef.current.scrollTop = 0;
    }, 800);
  };

  // Separate posts for rendering pinned items first
  const pinnedPosts = posts.filter(p => p.isAdmin);
  const regularPosts = posts.filter(p => !p.isAdmin);

  return (
    <div className="min-h-screen pt-20 px-2 sm:px-4 bg-black font-mono text-green-500 pb-20">
       <div className="max-w-6xl mx-auto border border-green-800 bg-[#051005] shadow-[0_0_30px_rgba(0,255,0,0.15)] min-h-[85vh] flex flex-col relative overflow-hidden">
          
          {/* CRT Scanline & Screen Effects */}
          <div className="absolute inset-0 pointer-events-none z-20 opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>
          <div className="absolute inset-0 pointer-events-none z-10 radial-gradient-green"></div>
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-center justify-between p-4 border-b border-green-800 bg-green-950/20 backdrop-blur-sm z-30">
              <div className="flex items-center gap-3 mb-2 sm:mb-0">
                  <div className="p-2 border border-green-500 rounded bg-green-900/20 animate-pulse">
                     <Network size={20} />
                  </div>
                  <div>
                    <h1 className="text-xl font-bold tracking-widest text-green-400">AMYGDALA_NET</h1>
                    <p className="text-[10px] text-green-600 uppercase tracking-[0.2em]">The Dark Synapse of Barentrum</p>
                  </div>
              </div>
              <div className="flex items-center gap-4 text-xs font-bold">
                  <button 
                    onClick={handleRefresh}
                    className="flex items-center gap-1 text-green-400 hover:text-white transition-colors disabled:opacity-50"
                    disabled={refreshing}
                  >
                      <RotateCcw size={14} className={refreshing ? "animate-spin" : ""} /> REFRESH_FEED
                  </button>
                  <span className="flex items-center gap-1 text-green-300"><ShieldCheck size={14} /> VPN: ACTIVE</span>
              </div>
          </div>

          <div className="flex flex-1 overflow-hidden relative z-30">
              {/* Sidebar (Desktop) */}
              <div className="hidden md:flex w-64 border-r border-green-900/50 flex-col bg-black/40">
                  <div className="p-4 border-b border-green-900/30">
                      <div className="w-full h-32 border border-green-800 bg-green-900/10 mb-4 flex items-center justify-center relative overflow-hidden group">
                          <Eye size={48} className="opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                          <div className="absolute inset-0 bg-green-500/10 scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-500"></div>
                      </div>
                      <div className="text-center">
                          <div className="font-bold text-lg">GHOST_ACCESS</div>
                          <div className="text-xs text-green-700">LEVEL: UNREGISTERED</div>
                      </div>
                  </div>
                  
                  <div className="p-4 flex-1 overflow-y-auto">
                      <h3 className="text-xs font-bold text-green-600 mb-3 uppercase tracking-widest border-b border-green-900 pb-1">Hot Tags</h3>
                      <div className="flex flex-wrap gap-2 mb-6">
                          {["#기업정보", "#블랙마켓", "#청부", "#뒷담화", "#공략", "#버그"].map(tag => (
                              <span key={tag} className="text-xs px-2 py-1 bg-green-900/20 border border-green-800 hover:bg-green-500 hover:text-black cursor-pointer transition-colors">
                                  {tag}
                              </span>
                          ))}
                      </div>

                      <h3 className="text-xs font-bold text-green-600 mb-3 uppercase tracking-widest border-b border-green-900 pb-1">System Log</h3>
                      <div className="text-[10px] space-y-1 opacity-70 font-mono leading-tight">
                          <div>> Decrypting packets... OK</div>
                          <div>> Masking IP... OK</div>
                          <div>> Bypassing Node 7... OK</div>
                          <div className="text-red-500">> Warning: Trace attempt detected</div>
                          <div>> Rerouting... OK</div>
                      </div>
                  </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 flex flex-col bg-black/20 overflow-hidden relative">
                  
                  {selectedPost ? (
                      // Detail View
                      <div className="flex-1 flex flex-col overflow-y-auto p-6 bg-black/80 animate-in fade-in slide-in-from-right-4">
                          <button 
                            onClick={() => setSelectedPost(null)}
                            className="flex items-center gap-2 text-green-600 hover:text-green-300 mb-4 text-xs font-bold uppercase tracking-widest transition-colors w-fit"
                          >
                              <ArrowLeft size={14} /> Back to Feed
                          </button>

                          {/* Original Post */}
                          <div className="border border-green-500/50 bg-green-900/10 p-6 mb-8 relative">
                              <div className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-green-500"></div>
                              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-green-500"></div>
                              
                              <div className="flex justify-between items-start mb-4 border-b border-green-900/50 pb-2">
                                  <div>
                                      <h2 className="text-2xl font-bold text-green-400 mb-1">{selectedPost.title}</h2>
                                      <div className="flex gap-4 text-xs text-green-700 font-mono">
                                          <span className="flex items-center gap-1"><User size={12}/> {selectedPost.author}</span>
                                          <span>{selectedPost.timestamp}</span>
                                          <span>Views: {selectedPost.views + 1}</span>
                                      </div>
                                  </div>
                                  {selectedPost.isAdmin && <AlertTriangle className="text-red-500 animate-pulse" />}
                              </div>
                              <p className="text-green-300 leading-relaxed whitespace-pre-line min-h-[100px]">
                                  {selectedPost.content}
                              </p>
                          </div>

                          {/* Comments Section */}
                          <div className="flex-1">
                              <h3 className="text-sm font-bold text-green-600 uppercase tracking-widest mb-4 flex items-center gap-2">
                                  <MessageSquare size={14} /> Comments_({selectedPost.commentsCount})
                              </h3>
                              
                              <div className="space-y-4 mb-8">
                                  {selectedPost.commentList.length > 0 ? (
                                      selectedPost.commentList.map((comment) => (
                                          <div key={comment.id} className="flex gap-3 pl-4 border-l border-green-900/30 relative">
                                              <CornerDownRight size={16} className="text-green-800 absolute -left-[9px] top-0" />
                                              <div className="flex-1 bg-green-900/5 p-3 border border-green-900/30">
                                                  <div className="flex justify-between items-center mb-1">
                                                      <span className={`text-xs font-bold ${comment.author === selectedPost.author ? 'text-green-400' : 'text-green-600'}`}>
                                                          {comment.author} {comment.author === selectedPost.author && <span className="text-[10px] border border-green-500 px-1 ml-1 rounded">OP</span>}
                                                      </span>
                                                      <span className="text-[10px] text-green-800">{comment.timestamp}</span>
                                                  </div>
                                                  <p className="text-sm text-green-400/80">{comment.content}</p>
                                              </div>
                                          </div>
                                      ))
                                  ) : (
                                      <div className="text-center text-green-900 text-xs py-4 italic">No comments yet. Be the first to break the silence.</div>
                                  )}
                              </div>
                          </div>
                      </div>
                  ) : (
                      // Feed List View
                      <>
                          {/* Feed Header */}
                          <div className="p-2 border-b border-green-900/50 flex justify-between items-center bg-green-900/10 text-xs uppercase tracking-wide">
                              <span>Thread List</span>
                              <div className="flex gap-4">
                                  <span className="cursor-pointer hover:text-white hover:underline">Newest</span>
                                  <span className="cursor-pointer hover:text-white hover:underline text-green-700">Top Rated</span>
                              </div>
                          </div>

                          {/* Posts List */}
                          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-green-900 scrollbar-track-black" ref={scrollRef}>
                              {/* Render Pinned Posts First */}
                              {pinnedPosts.map(post => <PostItem key={post.id} post={post} onSelect={setSelectedPost} />)}
                              
                              {/* Separator if needed */}
                              {pinnedPosts.length > 0 && regularPosts.length > 0 && (
                                <div className="border-b border-green-900/30 my-2 relative">
                                    <span className="absolute left-1/2 -top-2 -translate-x-1/2 bg-black px-2 text-[10px] text-green-800">NORMAL THREADS</span>
                                </div>
                              )}

                              {/* Render Regular Posts */}
                              {regularPosts.map(post => <PostItem key={post.id} post={post} onSelect={setSelectedPost} />)}
                              
                              <div className="text-center py-8 text-green-900 animate-pulse text-xs">
                                  -- END OF STREAM --
                              </div>
                          </div>
                      </>
                  )}

                  {/* Input Area (Shared) */}
                  <div className="p-4 bg-black border-t border-green-800 relative z-40">
                      <div className="flex gap-2 mb-2">
                          <div className="px-2 py-0.5 bg-green-900/30 border border-green-800 text-[10px] text-green-500 uppercase">
                              Mode: Anonymous
                          </div>
                          <div className="px-2 py-0.5 bg-green-900/30 border border-green-800 text-[10px] text-green-500 uppercase flex items-center gap-1">
                              <Lock size={8} /> Encrypted
                          </div>
                      </div>
                      <div className="flex gap-2">
                          <span className="text-green-500 pt-1">{'>'}</span>
                          <textarea
                              value={newPostContent}
                              onChange={(e) => setNewPostContent(e.target.value)}
                              placeholder={selectedPost ? "Write a comment..." : "Write a new thread..."}
                              className="flex-1 bg-transparent border border-green-900/50 p-2 text-sm text-green-400 focus:outline-none focus:border-green-500 h-16 resize-none placeholder-green-900"
                              onKeyDown={(e) => {
                                  if (e.key === 'Enter' && !e.shiftKey) {
                                      e.preventDefault();
                                      handlePost();
                                  }
                              }}
                          />
                          <button 
                            onClick={handlePost}
                            className="bg-green-900/20 border border-green-700 text-green-500 px-4 hover:bg-green-500 hover:text-black transition-colors font-bold text-sm uppercase"
                          >
                              {selectedPost ? "REPLY" : "SEND"}
                          </button>
                      </div>
                  </div>
              </div>
          </div>
       </div>
    </div>
  );
};