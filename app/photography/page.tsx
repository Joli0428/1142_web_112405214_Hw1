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

  // 🌟 已還原至「第16張加入的第一次排版順序」，並維持第16張是直圖 (height: 1200)
  const photos: Photo[] = [
    { id: 6, img: "/photo6.png", width: 800, height: 1200, title: "歲月靜好", description: "走過無數山海才明白，最動人的風景，是安靜角落裡那份波瀾不驚的守候。", alt: "歲月靜好" }, // 直
    { id: 1, img: "/photo1.png", width: 800, height: 533, title: "燈塔", description: "照亮孤寂的夜，指引迷航的人。你需要時，我都在。", alt: "燈塔" }, // 橫
    { id: 7, img: "/photo7.png", width: 800, height: 1200, title: "千山鳥飛", description: "絕，萬徑人蹤滅。如果此為真，或許地球會平靜許多。", alt: "千山鳥飛" }, // 直
    { id: 2, img: "/photo2.png", width: 800, height: 533, title: "賽博人生", description: "當電話取代了實體互動，總感覺內心空蕩蕩的。昔日不再。", alt: "賽博人生" }, // 橫
    { id: 8, img: "/photo8.png", width: 800, height: 1200, title: "第一眼的山林", description: "來政大按下的第一張底片。傳奇的開端。有點自誇。", alt: "第一眼的山林" }, // 直
    { id: 3, img: "/photo3.png", width: 800, height: 533, title: "望天思", description: "寂靜的午，淡藍的天，平靜的你我。飛鳥相與還。", alt: "望天思" }, // 橫
    { id: 14, img: "/photo14.png", width: 800, height: 1200, title: "肖像", description: "深邃的眼珠，像是寶石。要小心幻影旅團。", alt: "肖像" }, // 直
    { id: 4, img: "/photo4.png", width: 800, height: 533, title: "流與留", description: "千古長存是一種福？還是一種罪？又或是一種「芙」？", alt: "流與留" }, // 橫
    { id: 5, img: "/photo5.png", width: 800, height: 533, title: "石虎", description: "是吧，是一隻石虎。一隻被命運玩弄的石虎。阿們。", alt: "石虎" }, // 橫
    { id: 9, img: "/photo9.png", width: 800, height: 533, title: "最初的起點", description: "於大學第一間宿舍拍攝的底片。多少是一種記憶。模糊。", alt: "最初的起點" }, // 橫
    { id: 10, img: "/photo10.png", width: 800, height: 533, title: "心的起點", description: "政大的第二張底片作品。上古時期的校園風格，多少有點懷舊的味道。", alt: "心的起點" }, // 橫
    { id: 11, img: "/photo11.png", width: 800, height: 533, title: "燃盡（尚未）", description: "燃燒自己，照亮他人。生命中能遇到多少這樣的貴人呢？", alt: "燃盡（尚未）" }, // 橫
    { id: 12, img: "/photo12.png", width: 800, height: 533, title: "活著", description: "人生的意義是什麼？我不知道。他不知道。你也不知道。", alt: "活著" }, // 橫
    { id: 13, img: "/photo13.png", width: 800, height: 533, title: "獨站", description: "在廣闊展場上獨自屹立的陌生人，呈現出一種孤傲的美感。", alt: "獨站" }, // 橫
    { id: 15, img: "/photo15.png", width: 800, height: 533, title: "生命的萎靡", description: "為了自我踐踏生命，是人類最擅長的事。自私的原罪。", alt: "生命的萎靡" }, // 橫
    { id: 16, img: "/photo16.png", width: 800, height: 1200, title: "周湧秝", description: "我相信，如果每個人都充滿好奇心，世界會更美好。", alt: "周湧秝" }, // 直 (放在最後)
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

      <div className="relative flex-grow w-full mb-12">
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

          {/* 🌟 電影金句圖卡，保留實體卡片的樣式，接在最後一張照片之後 */}
          <div className="break-inside-avoid relative flex flex-col justify-center p-8 rounded-xl bg-gray-50 border border-gray-100 aspect-square sm:aspect-auto sm:h-full lg:aspect-square text-left hover:bg-gray-100 transition-colors duration-500 shadow-sm hover:shadow-md">
            <blockquote className="mb-6">
              <p className="text-sm md:text-base text-gray-700 leading-relaxed font-serif italic mb-4 drop-shadow-sm">
                "To see the world, things dangerous to come to, to see behind walls, draw closer, to find each other and to feel. That is the purpose of life."
              </p>
              <footer className="text-xs text-gray-500 font-medium tracking-wide text-right">
                — The Secret Life of Walter Mitty (2013)
              </footer>
            </blockquote>
          </div>

        </div>
      </div>

      <div ref={bottomRef} className="w-full flex flex-col items-center justify-center mt-auto mb-2 pt-4 md:pt-8 pb-4 border-t border-gray-200 min-h-[100px] shrink-0">
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
              <img 
                src={selectedPhoto.img}
                alt="" 
                className="absolute inset-0 w-full h-full object-cover blur-sm opacity-50" 
              />

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