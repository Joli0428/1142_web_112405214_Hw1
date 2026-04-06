"use client"; 

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import TextType from "../components/TextType";

export default function Home() {
  const [isCursorVisible, setIsCursorVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCursorVisible(false);
    }, 4600);

    return () => clearTimeout(timer);
  }, []);

  return (
    // 🌟 關鍵修改：加入 min-h-[calc(100vh-140px)] 讓手機版的卡片強制伸長到底部
    // md:min-h-0 則確保在電腦版時，它不會因為這個設定而跑版
    <div className="flex flex-col items-center justify-center w-full animate-in fade-in duration-700 h-full min-h-[calc(100vh-140px)] md:min-h-0">
      
      <div className="w-24 h-24 mb-6 rounded-full overflow-hidden bg-black flex items-center justify-center shadow-md group">
        <Image
          src="/IMG_0410.JPG"
          alt="Avatar"
          width={96}
          height={96}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="flex items-center justify-center text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-purple-600 mb-4 pb-1 h-10 md:h-12 text-center">
        <TextType 
          as="h1"
          text={["Hi, I'm JOLI", "Welcome to my site!"]} 
          typingSpeed={80}
          deletingSpeed={40}
          pauseDuration={1500}
          loop={false}
          showCursor={isCursorVisible} 
        />
      </div>

      <div className="text-sm md:text-base text-gray-500 mb-8 tracking-wide text-center">
        我相信，如果每個人都充滿好奇心，世界會更美好 ✨
      </div>

      <Link
        href="/about"
        className="flex items-center gap-2 px-8 py-2.5 border-[2px] border-black rounded-full font-bold text-sm md:text-base text-black hover:bg-black hover:text-white transition-all duration-300 hover:shadow-lg"
      >
        About Me <span>→</span>
      </Link>
      
    </div>
  );
}