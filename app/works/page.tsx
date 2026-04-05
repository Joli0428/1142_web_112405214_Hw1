"use client";

import { useState, useEffect, useRef } from "react";
import TextType from "../../components/TextType"; 
import { FiExternalLink, FiX } from "react-icons/fi"; 

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link?: string; 
}

export default function Works() {
  const [isCursorVisible, setIsCursorVisible] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // 🌟 新增：控制 Modal 關閉動畫的狀態
  const [isClosing, setIsClosing] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);
  const [isBottomVisible, setIsBottomVisible] = useState(false);
  const [isSecondLineVisible, setIsSecondLineVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCursorVisible(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsBottomVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.5 } 
    );

    if (bottomRef.current) {
      observer.observe(bottomRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isBottomVisible) {
      const timer = setTimeout(() => {
        setIsSecondLineVisible(true);
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, [isBottomVisible]);

  // 🌟 新增：處理 Modal 關閉的函式，加入延遲動畫
  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedProject(null);
      setIsClosing(false);
    }, 300); // 對應 Tailwind duration-300
  };

  const projects: Project[] = [
    {
      id: 1,
      title: "坎城未來獅創意影片大賽",
      description: "在 2025 Future Young Lions 坎城未來獅創意影片大賽中，以作品《失重人口》獲得全國銅獎。負責專案統籌與短片導演，透過影像傳遞深刻的社會洞察。",
      imageUrl: "/cannes-cover1.png", 
      tags: ["廣告導演", "坎城銅獎", "專案管理","廣告短片競賽"],
      link: "https://youtu.be/OsDyZigjvjc?si=fYr0L-g7CznZjM6M" 
    },
    {
      id: 2,
      title: "廣告策略與企劃",
      description: "針對虎牌啤酒進行品牌溝通與廣告企劃發想。透過市場調查與消費者洞察，提出具創意且能引起共鳴的行銷策略企劃。獲得課程年度企劃書優勝。",
      imageUrl: "/tiger.png",
      tags: ["廣告策略", "品牌溝通", "企劃優勝"],
    },
    {
      id: 3,
      title: "數位內容藝術創作展出",
      description: "運用科技進行生成式藝術作品創作。使用 p5.js 撰寫程式邏輯，探索數位媒材在視覺表達上的無限可能。作為參展藝術家，作品展出於與 C2X3 和 超級浪 合作舉辦的展覽。",
      imageUrl: "/HOME.png",
      tags: ["生成式藝術", "藝術創作", "數位科技","程式撰寫"],
      link: "https://www.behance.net/gallery/244713963/NFT" 
    },
    {
      id: 4,
      title: "基礎影音製作",
      description: "涵蓋多種題材的影音實作。擔任前期分鏡、現場拍攝導演與後期剪輯的完整製作流程。熟練運用影像語言傳達核心概念，並具備扎實的影音專案執行經驗。期末作品獲年度課程最佳影片第二名，以及最佳剪輯。",
      imageUrl: "/film1.png",
      tags: ["影像敘事", "影音導演", "動態攝影"],
      link: "https://youtube.com/playlist?list=PLAJ7kYsgcOwPCn5vdTpKj4EAIAzWNyZ87&si=2g7GWnFAvmTnLHy7" 
    },
    {
      id: 5,
      title: "花東青少年合唱音樂營",
      description: "參與籌辦花東音樂營，負責營期活動紀錄、宣傳短片與結業影片製作。透過自身專業回饋社會，以行動支持偏鄉教育營隊發展。結業影片在 Youtube 上創造超過 900 次觀看，相較於 2023 的結業影片，成長率高達 100%。",
      imageUrl: "/summer.jpg",
      tags: ["影片拍攝", "專案執行","活動紀錄"],
      link: "https://youtu.be/KN36iUAMQM4?si=AiTs5V-ai7RZiTWW" 
    },
    {
      id: 6,
      title: "人機介面與設計",
      description: "使用 Figma 進行使用者介面設計，課程內容涵蓋平面設計基本原則（如完形心理學）、線框稿繪製（Wireframe）、製作 prototype 等。期末針對使用者介面進行重新設計，製作原形。",
      imageUrl: "/figma.png",
      tags: ["平面設計", "Wireframe", "prototype"],
      link: "https://www.behance.net/gallery/244716207/_" 
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-4 md:px-6 md:py-6 animate-in fade-in duration-700 overflow-x-hidden relative flex flex-col min-h-[calc(100vh-2rem)]">
      
      <div className="mb-1 min-h-[48px] flex items-center flex-wrap">
        <TextType 
          as="h1"
          text={["SELECTED WORKS"]} 
          typingSpeed={100}
          className="text-3xl lg:text-4xl xl:text-5xl font-black tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-purple-600"
          loop={false}
          showCursor={isCursorVisible} 
        />
      </div>

      <h2 className="text-lg md:text-xl text-gray-900 font-medium italic mb-4 tracking-wide mt-2 md:mt-0">
        "跨越邊界，將好奇心化為具體影響力"
      </h2>

      <hr className="border-gray-400 mb-6 md:mb-8" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 flex-grow">
        {projects.map((project) => (
          <div 
            key={project.id} 
            onClick={() => setSelectedProject(project)}
            className="h-full bg-white rounded-2xl p-5 md:p-6 shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.06)] transition-all duration-300 group cursor-pointer"
          >
            
            <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-5 bg-gray-100 shrink-0">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-purple-600 transition-colors line-clamp-2">
                {project.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto pt-4">
                {project.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 text-gray-500 text-xs font-medium rounded-md whitespace-nowrap">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>

      <div ref={bottomRef} className="w-full flex flex-col items-center justify-center mt-auto mb-2 pt-12 pb-4 border-t border-gray-200 min-h-[100px] shrink-0">
        {isBottomVisible && (
          <>
            <div className="mb-3 flex items-center justify-center">
              <TextType 
                as="h2"
                text={["THE JOURNEY CONTINUES"]} 
                typingSpeed={80}
                className="text-lg md:text-xl lg:text-2xl font-bold text-gray-600 tracking-[0.2em] text-center"
                loop={false}
                showCursor={false}
              />
            </div>
            <div className="flex items-center justify-center min-h-[20px] md:min-h-[24px]">
              {isSecondLineVisible && (
                <TextType 
                  as="p"
                  text={["STAY CURIOUS ✦ 敬請期待"]} 
                  typingSpeed={120}
                  className="text-xs md:text-sm font-medium text-gray-400 tracking-[0.25em] text-center"
                  loop={false}
                  showCursor={true}
                />
              )}
            </div>
          </>
        )}
      </div>

      {/* 🌟 修改：加入 isClosing 狀態控制退場動畫 */}
      {selectedProject && (
        <div 
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm duration-300 ${isClosing ? "animate-out fade-out" : "animate-in fade-in"}`}
          onClick={closeModal} 
        >
          <div 
            className={`bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl duration-300 relative flex flex-col max-h-[90vh] ${isClosing ? "animate-out zoom-out-95 fade-out" : "animate-in zoom-in-95 fade-in"}`}
            onClick={(e) => e.stopPropagation()} 
          >
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-black/40 backdrop-blur-md text-white rounded-full hover:bg-black transition-colors"
            >
              <FiX size={18} />
            </button>

            <div className="w-full h-64 md:h-80 lg:h-96 relative bg-gray-100 shrink-0">
              <img 
                src={selectedProject.imageUrl} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 md:p-8 flex flex-col flex-grow overflow-y-auto">
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
                {selectedProject.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-orange-100 text-orange-700 text-sm font-bold rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
              
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
                {selectedProject.description}
              </p>

              <div className="mt-auto flex justify-end">
                {selectedProject.link ? (
                  <a 
                    href={selectedProject.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-purple-600 text-white font-bold rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    觀看作品 <FiExternalLink size={18} />
                  </a>
                ) : (
                  <span className="text-sm text-gray-400 italic mt-4 md:mt-2">
                    * 由於專案保密協議，暫無法提供完整企劃內容
                  </span>
                )}
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}