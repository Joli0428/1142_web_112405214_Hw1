"use client";

import { useState, useEffect, useRef } from "react";
import TextType from "../../components/TextType"; 
import { FiX } from "react-icons/fi"; 
import Image from "next/image";

interface Photo {
  id: number;
  img: string; 
  title: string;   
  description: string; 
  alt: string;
  width: number;
  height: number;
}

export default function Photography() {
  const [isCursorVisible, setIsCursorVisible] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);
  const [isBottomVisible, setIsBottomVisible] = useState(false);
  const [isSecondLineVisible, setIsSecondLineVisible] = useState(false);
  
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  
  // 🌟 因為拿掉了雙層結構，這裡只需要一個狀態來控制 Modal 大圖的載入淡入
  const [modalImageLoaded, setModalImageLoaded] = useState(false);

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

  const openModal = (photo: Photo) => {
    setModalImageLoaded(false);
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setIsClosing(true); 
    setTimeout(() => {
      setSelectedPhoto(null); 
      setIsClosing(false);    
    }, 300); 
  };

  const photos: Photo[] = [
    { id: 1, img: "/photo1.png", width: 800, height: 533, title: "台北街頭光影", description: "捕捉雨後台北街頭的霓虹倒影，呈現城市夜晚的憂鬱與霓虹。", alt: "台北街頭光影" }, 
    { id: 6, img: "/photo6.png", width: 800, height: 1200, title: "山間秘境", description: "於阿里山清晨捕捉的雲霧繚繞，寧靜而莊嚴的瞬間。", alt: "山間秘境" }, 
    { id: 2, img: "/photo2.png", width: 800, height: 533, title: "海岸線的告白", description: "海浪輕拍沙灘，與遠處的夕陽構成一幅浪漫的畫作。", alt: "海岸線的告白" }, 
    { id: 3, img: "/photo3.png", width: 800, height: 533, title: "古鎮餘暉", description: "九份山城的石階在落日下閃耀，記錄下光影交織的歷史痕跡。", alt: "古鎮餘暉" }, 
    { id: 7, img: "/photo7.png", width: 800, height: 1200, title: "光影之塔", description: "城市建築的幾何線條與陽光切割，呈現出具現代感的強烈對比。", alt: "光影之塔" }, 
    { id: 4, img: "/photo4.png", width: 800, height: 533, title: "森林的寂靜", description: "深入忘憂森林，被高聳的枯木圍繞，感受被大自然擁抱的寂靜。", alt: "森林的寂靜" }, 
    { id: 5, img: "/photo5.png", width: 800, height: 533, title: "午後的貓", description: "淡水老街上悠閒地享受午後陽光的貓咪，眼神中滿是愜意。", alt: "午後的貓" }, 
    { id: 8, img: "/photo8.png", width: 800, height: 1200, title: "抽象的光學", description: "運用散景效果捕捉的夜間光點，呈現夢幻且具詩意的視覺饗宴。", alt: "抽象的光學" }, 
    { id: 9, img: "/photo9.png", width: 800, height: 533, title: "稻浪翩翩", description: "池上稻米成熟時的金色浪潮，隨著風展現生命的可貴。", alt: "稻浪翩翩" }, 
    { id: 10, img: "/photo10.png", width: 800, height: 533, title: "工業之眼", description: "廢棄工廠內部的鏽蝕與光影，見證著時代變遷的殘缺之美。", alt: "工業之眼" }, 
    { id: 14, img: "/photo14.png", width: 800, height: 1200, title: "人物側寫：匠人", description: "記錄老職人專注的神情與滿是歲月痕跡的雙手。", alt: "人物側寫：匠人" }, 
    { id: 11, img: "/photo11.png", width: 800, height: 533, title: "雲端的相遇", description: "在合歡山主峰上與無邊雲海的震撼相遇。", alt: "雲端的相遇" }, 
    { id: 12, img: "/photo12.png", width: 800, height: 533, title: "城市節奏", description: "快速道路上的車流光軌，記錄下這座城市的繁忙節奏。", alt: "城市節奏" }, 
    { id: 13, img: "/photo13.png", width: 800, height: 533, title: "孤獨的樹", description: "在廣闊草原上獨自屹立的大樹，呈現出一種孤傲的美感。", alt: "孤獨的樹" }, 
    { id: 15, img: "/photo15.png", width: 800, height: 533, title: "歲月靜好", description: "祖父母在鄉下老家悠閒對弈的溫馨畫面，是歲月最美的註腳。", alt: "歲月靜好" }, 
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

      <div className="flex-grow w-full mb-12">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {photos.map((photo, index) => (
            <div 
              key={photo.id} 
              className="break-inside-avoid relative group overflow-hidden rounded-xl cursor-pointer bg-gray-50 shadow-sm hover:shadow-xl transition-all duration-500"
              onClick={() => openModal(photo)} 
            >
              {!loadedImages[photo.id] && (
                <div className="absolute inset-0 bg-gray-100 animate-pulse rounded-xl" />
              )}
              
              <Image 
                src={photo.img} 
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                priority={index < 3} 
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={`w-full h-auto object-cover transform transition-all duration-700 group-hover:scale-105 ${loadedImages[photo.id] ? "opacity-100" : "opacity-0"}`}
                onLoad={() => {
                  setLoadedImages(prev => ({ ...prev, [photo.id]: true }));
                }}
              />
              
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* 🌟 替換結尾標語 */}
      <div ref={bottomRef} className="w-full flex flex-col items-center justify-center mt-auto mb-2 pt-12 pb-4 border-t border-gray-200 min-h-[100px] shrink-0">
        {isBottomVisible && (
          <>
            <div className="mb-3 flex items-center justify-center">
              <TextType 
                as="h2"
                text={["THANKS FOR VISITING"]} 
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
                  text={["願你也能永遠保持好奇心 ✦"]} 
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

      {selectedPhoto && (
        <div 
          className={`fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md duration-300 ${isClosing ? "animate-out fade-out" : "animate-in fade-in"}`}
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
              {/* 🌟 核心修改：拿掉底層 img，只留 Image 處理淡入 */}
              <Image 
                src={selectedPhoto.img} 
                alt={selectedPhoto.title} 
                fill
                className={`object-cover transition-opacity duration-500 ${modalImageLoaded ? "opacity-100" : "opacity-0"}`}
                sizes="(max-width: 1024px) 100vw, 800px"
                onLoad={() => setModalImageLoaded(true)} 
              />
            </div>

            <div className="p-6 md:p-8 flex flex-col flex-grow overflow-y-auto">
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
                {selectedPhoto.title}
              </h3>
              
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                {selectedPhoto.description}
              </p>

              <div className="mt-auto pt-4 flex justify-end">
                <span className="text-sm text-gray-400 italic">
                  Shot by Yong-Li Chou. All rights reserved.
                </span>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}