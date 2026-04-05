"use client";

import { useState, useEffect, useRef } from "react";
import TextType from "../../components/TextType"; 
import { FiX } from "react-icons/fi"; 

// @ts-ignore
import Masonry from "../../components/Masonry";

interface Photo {
  id: number;
  img: string; 
  height: number; 
  alt: string;
}

export default function Photography() {
  const [isCursorVisible, setIsCursorVisible] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);
  const [isBottomVisible, setIsBottomVisible] = useState(false);
  const [isSecondLineVisible, setIsSecondLineVisible] = useState(false);
  
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

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
    if (bottomRef.current) observer.observe(bottomRef.current);
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

 // 攝影作品陣列 (已擴充至 15 張)
 const photos: Photo[] = [
  { id: 1, img: "/photo1.jpg", height: 600, alt: "攝影 1" },
  { id: 2, img: "/photo2.jpg", height: 800, alt: "攝影 2" },
  { id: 3, img: "/photo3.jpg", height: 500, alt: "攝影 3" },
  { id: 4, img: "/photo4.jpg", height: 700, alt: "攝影 4" },
  { id: 5, img: "/photo5.jpg", height: 550, alt: "攝影 5" },
  { id: 6, img: "/photo6.jpg", height: 900, alt: "攝影 6" },
  { id: 7, img: "/photo7.jpg", height: 650, alt: "攝影 7" },
  { id: 8, img: "/photo8.jpg", height: 450, alt: "攝影 8" },
  { id: 9, img: "/photo9.jpg", height: 750, alt: "攝影 9" },
  { id: 10, img: "/photo10.jpg", height: 850, alt: "攝影 10" },
  { id: 11, img: "/photo11.jpg", height: 500, alt: "攝影 11" },
  { id: 12, img: "/photo12.jpg", height: 700, alt: "攝影 12" },
  { id: 13, img: "/photo13.jpg", height: 600, alt: "攝影 13" },
  { id: 14, img: "/photo14.jpg", height: 800, alt: "攝影 14" },
  { id: 15, img: "/photo15.jpg", height: 550, alt: "攝影 15" },
];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-4 md:px-6 md:py-6 animate-in fade-in duration-700 overflow-x-hidden relative flex flex-col min-h-[calc(100vh-2rem)]">
      
      <div className="mb-1 min-h-[48px] flex items-center flex-wrap shrink-0">
        <TextType 
          as="h1"
          text={["PHOTOGRAPHY"]} 
          typingSpeed={100}
          className="text-3xl lg:text-4xl xl:text-5xl font-black tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-purple-600"
          loop={false}
          showCursor={isCursorVisible} 
        />
      </div>

      <h2 className="text-lg md:text-xl text-gray-900 font-medium italic mb-4 tracking-wide mt-2 md:mt-0 shrink-0">
        "用觀景窗捕捉光影，將瞬間凝結為永恆"
      </h2>

      <hr className="border-gray-400 mb-8 md:mb-12 shrink-0" />

      {/* 🌟 攝影作品瀑布流區塊 */}
      <div className="flex-grow w-full mb-12">
        <Masonry 
          items={photos as any} // 🌟 這裡加上 as any，強制繞過 TypeScript 檢查
          duration={0.8} 
          stagger={0.1}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={1.05}
          onImageClick={(item: Photo) => setSelectedPhoto(item)}
        />
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

      {/* 圖片放大彈出視窗 */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-300"
          onClick={() => setSelectedPhoto(null)} 
        >
          <button 
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-6 right-6 md:top-10 md:right-10 z-10 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-md text-white rounded-full hover:bg-white/30 transition-colors"
          >
            <FiX size={24} />
          </button>

          <div 
            className="relative w-full max-w-5xl max-h-[85vh] flex items-center justify-center animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()} 
          >
            <img 
              src={selectedPhoto.img} 
              alt={selectedPhoto.alt} 
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}

    </div>
  );
}