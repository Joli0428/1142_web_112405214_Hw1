"use client";

import { useState, useEffect, useRef } from "react";
import TextType from "../../components/TextType"; 
import { FiExternalLink, FiAlertCircle, FiX } from "react-icons/fi"; 

interface ModalContent {
  imageUrl: string;
  title: string;
  description: string;
  tags?: string[];
  link?: string;
}

export default function Analytics() {
  const [isCursorVisible, setIsCursorVisible] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);
  const [isBottomVisible, setIsBottomVisible] = useState(false);
  const [isSecondLineVisible, setIsSecondLineVisible] = useState(false);
  
  const [selectedContent, setSelectedContent] = useState<ModalContent | null>(null);
  const [isClosing, setIsClosing] = useState(false);

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

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedContent(null);
      setIsClosing(false);
    }, 300); 
  };

  const mainCoverContent: ModalContent = {
    imageUrl: "/cover.png",
    title: "產學合作專案：捷思科技",
    description: "參與政大數據分析社第五屆社員，上半學期的產學合作專案與捷思科技合作，透過數據分析，研究台灣職業籃球大聯盟 (TPBL) 裁判的判決公正性。以數據為證，打破社群對於裁判的誤解，還給職業裁判公正性的清白。",
    tags: ["SQL", "Python", "數據視覺化", "Tableau"],
    link: "https://drive.google.com/file/d/14sf5CuydZsT5SxYII0wN8VJ9yEPuuRpz/view?usp=sharing" 
  };

  const preview1Content: ModalContent = {
    imageUrl: "/da1.png",
    title: "專案簡報：問題拆解",
    description: "在專案初期，我們針對「裁判判決公正性」這個核心議題，進行了嚴謹的問題拆解與分析框架設定，確保後續的數據撈取與分析具備明確的方向。", 
    link: "https://drive.google.com/file/d/14sf5CuydZsT5SxYII0wN8VJ9yEPuuRpz/view?usp=sharing" 
  };

  const preview2Content: ModalContent = {
    imageUrl: "/da2.png",
    title: "專案簡報：矩陣報表",
    description: "運用 Tableau 建立視覺化矩陣報表，交叉比對各裁判在不同球隊賽事中的判決頻率與誤差，直觀呈現是否存在特定偏誤。", 
    link: "https://drive.google.com/file/d/14sf5CuydZsT5SxYII0wN8VJ9yEPuuRpz/view?usp=sharing" 
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-2 py-4 md:px-4 md:py-6 animate-in fade-in duration-700 overflow-x-hidden relative flex flex-col min-h-[calc(100vh-2rem)]">
      
      <div className="mb-1 min-h-[48px] flex items-center flex-wrap shrink-0">
        <TextType 
          as="h1"
          text={["DATA ANALYTICS"]} 
          typingSpeed={100}
          className="text-3xl lg:text-4xl xl:text-5xl font-black tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-purple-600"
          loop={false}
          showCursor={isCursorVisible} 
        />
      </div>

      <h2 className="text-lg md:text-xl text-gray-900 font-medium italic mb-4 tracking-wide mt-2 md:mt-0 shrink-0">
        "從龐雜數據中，萃取驅動決策的商業洞察"
      </h2>

      <hr className="border-gray-400 mb-8 md:mb-10 shrink-0" />

      <div className="flex-grow flex flex-col mb-12">
        
        <div 
          className="w-full aspect-video md:aspect-[21/9] bg-gray-100 relative overflow-hidden group cursor-pointer rounded-3xl shadow-lg border border-gray-200 mb-10"
          onClick={() => setSelectedContent(mainCoverContent)}
        >
          <img 
            src="/cover.png" 
            alt="數據分析專案封面" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 via-black/10 to-transparent pointer-events-none"></div>
          
          {/* 🌟 針對手機版縮小 padding 和字體大小，並加入 whitespace-nowrap 防換行 */}
          <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-10 w-full z-10">
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 sm:mb-3">
              {["SQL", "Python", "數據視覺化", "Tableau"].map((tag, i) => (
                <span key={i} className="px-2 sm:px-3 py-1 bg-transparent text-white/90 text-[10px] sm:text-xs font-medium rounded-md border border-white/50 tracking-wider backdrop-blur-sm whitespace-nowrap">
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-xl sm:text-2xl md:text-4xl font-black text-white drop-shadow-lg leading-tight">
              政大數據分析社 NCCU DA 
            </h3>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-16">
          
          <div className="flex-1 flex flex-col">
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                產學合作專案：捷思科技
              </h4>
              <p className="text-gray-600 leading-relaxed mb-8">
                身為政大數據分析社第五屆社員，在上半學期與捷思科技進行產學合作專案，透過數據分析，研究台灣職業籃球大聯盟 (TPBL) 裁判的判決公正性。以數據為證，打破社群對於裁判的誤解，驗證職業裁判的公正性。
              </p>

              <h4 className="text-xl font-bold text-gray-900 mb-4">
                專案執行細節
              </h4>
              <p className="text-gray-600 leading-relaxed mb-8">
                擔任專案管理（PM），帶領團隊拆解問題、使用 SQL 撈取資料、Python 清理與分析、Tableau 資料視覺化，驗證 22 位裁判判決是否存在偏誤。於期末向捷思科技共同創辦人（李果翰 Gohan）進行報告。
              </p>
            </div>

            <div className="mt-auto pt-4">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                專案簡報
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div 
                  className="aspect-[16/9] bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all group cursor-pointer p-1"
                  onClick={() => setSelectedContent(preview1Content)}
                >
                  <img 
                    src="/da1.png" 
                    alt="問題拆解" 
                    className="w-full h-full object-cover rounded-lg transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div 
                  className="aspect-[16/9] bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all group cursor-pointer p-1"
                  onClick={() => setSelectedContent(preview2Content)}
                >
                  <img 
                    src="/da2.png" 
                    alt="矩陣報表" 
                    className="w-full h-full object-cover rounded-lg transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

          </div>

          <div className="w-full md:w-72 shrink-0 flex flex-col gap-6">
            <div className="bg-white/80 p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h4 className="text-base font-bold text-purple-900 mb-5">
                專案亮點
              </h4>
              <div className="space-y-4">
                <div>
                  <div className="text-2xl font-black text-purple-600">22位</div>
                  <div className="text-sm text-gray-500 font-medium">裁判判決驗證</div>
                </div>
                <hr className="border-gray-100" />
                <div>
                  <div className="text-2xl font-black text-purple-600">SQL / Python</div>
                  <div className="text-sm text-gray-500 font-medium">資料撈取與清理</div>
                </div>
                <hr className="border-gray-100" />
                <div>
                  <div className="text-2xl font-black text-purple-600">Tableau</div>
                  <div className="text-sm text-gray-500 font-medium">視覺化與洞察報告</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col mt-auto gap-4">
              <a 
                href="https://drive.google.com/file/d/14sf5CuydZsT5SxYII0wN8VJ9yEPuuRpz/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-orange-500 to-purple-600 text-white font-bold rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                查看部分簡報截錄 <FiExternalLink size={18} />
              </a>

              <div className="flex items-start gap-2 bg-white/80 p-4 rounded-xl border border-gray-200 shadow-sm">
                <FiAlertCircle className="text-gray-400 shrink-0 mt-0.5" size={16} />
                <p className="text-xs text-gray-500 leading-relaxed font-medium">
                  本專案已簽署保密協議 (NDA)。作品集中僅呈現個人獨立製作之內容（約完整專案五分之一），且敏感數據已進行模糊處理。
                </p>
              </div>
            </div>
          </div>

        </div>
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

      {selectedContent && (
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
                src={selectedContent.imageUrl} 
                alt={selectedContent.title} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 md:p-8 flex flex-col flex-grow overflow-y-auto">
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
                {selectedContent.title}
              </h3>
              
              {selectedContent.tags && selectedContent.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedContent.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-white border border-gray-200 text-gray-600 text-sm font-bold rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                {selectedContent.description}
              </p>

              <div className="mt-auto pt-4 flex justify-end">
                {selectedContent.link && (
                  <a 
                    href={selectedContent.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-purple-600 text-white font-bold rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    查看部分簡報截錄 <FiExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}