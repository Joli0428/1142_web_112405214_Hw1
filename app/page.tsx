"use client"; // 🌟 重新喚醒 React 的狀態管理能力

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import TextType from "../components/TextType";

export default function Home() {
  // 🌟 控制游標是否顯示的開關，預設為 true (打開)
  const [isCursorVisible, setIsCursorVisible] = useState(true);

  useEffect(() => {
    // 根據我們的精密計算，整個打字＋刪除的動畫大約需要 4.46 秒
    // 我們設定 4.6 秒後 (確保字都已經完全打完)，自動把游標隱藏起來！
    const timer = setTimeout(() => {
      setIsCursorVisible(false);
    }, 4600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full w-full animate-in fade-in duration-700">
      
      <div className="w-24 h-24 mb-6 rounded-full overflow-hidden bg-black flex items-center justify-center shadow-md group">
        <Image
          src="/IMG_0410.JPG"
          alt="Avatar"
          width={96}
          height={96}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="flex items-center justify-center text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-purple-600 mb-4 pb-1 h-10 md:h-12">
        <TextType 
          as="h1"
          text={["Hi, I'm JOLI", "Welcome to my site!"]} 
          typingSpeed={80}
          deletingSpeed={40}
          pauseDuration={1500}
          loop={false}
          showCursor={isCursorVisible} // 🌟 將游標綁定到我們剛剛設定的開關
        />
      </div>

      <div className="text-sm md:text-base text-gray-500 mb-8 tracking-wide">
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