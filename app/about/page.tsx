"use client";

import { useState, useEffect } from "react";
import TextType from "../../components/TextType"; 
import LogoLoop from "../../components/LogoLoop"; 

// 🌟 引入保證安全的圖示 (新增 Vercel)
import { 
  SiFigma, 
  SiPython, 
  SiPostgresql, 
  SiGithub, 
  SiDocker,
  SiNotion,
  SiCanva,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiGoogleanalytics,
  SiVercel
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc"; 
import { RiFileExcel2Line, RiFileWord2Line, RiFilePpt2Line } from "react-icons/ri"; 
import { IoLogoTableau } from "react-icons/io5"; 

export default function About() {
  const [isCursorVisible, setIsCursorVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCursorVisible(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // 🌟 加上 Vercel！
  const techLogos = [
    { node: <SiNextdotjs size={36} />, title: "Next.js", href: "https://nextjs.org/" },
    { node: <SiReact size={36} />, title: "React", href: "https://react.dev/" },
    { node: <SiTailwindcss size={36} />, title: "Tailwind CSS", href: "https://tailwindcss.com/" },
    { node: <SiVercel size={36} />, title: "Vercel", href: "https://vercel.com/" },
    { node: <SiPython size={36} />, title: "Python", href: "https://www.python.org/" },
    { node: <IoLogoTableau size={36} />, title: "Tableau", href: "https://www.tableau.com/" }, 
    { node: <SiGoogleanalytics size={36} />, title: "Google Analytics", href: "https://marketingplatform.google.com/about/analytics/" },
    { node: <SiPostgresql size={36} />, title: "PostgreSQL", href: "https://www.postgresql.org/" },
    { node: <SiFigma size={36} />, title: "Figma", href: "https://www.figma.com/" },
    { node: <SiCanva size={36} />, title: "Canva", href: "https://www.canva.com/" },
    { node: <SiNotion size={36} />, title: "Notion", href: "https://www.notion.so/" },
    { node: <RiFileWord2Line size={36} />, title: "Word", href: "https://www.microsoft.com/microsoft-365/word" },
    { node: <RiFilePpt2Line size={36} />, title: "PowerPoint", href: "https://www.microsoft.com/microsoft-365/powerpoint" },
    { node: <RiFileExcel2Line size={36} />, title: "Excel", href: "https://www.microsoft.com/microsoft-365/excel" },
    { node: <VscVscode size={36} />, title: "VS Code", href: "https://code.visualstudio.com/" },
    { node: <SiGithub size={36} />, title: "GitHub", href: "https://github.com/" },
    { node: <SiDocker size={36} />, title: "Docker", href: "https://www.docker.com/" },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-4 md:px-6 md:py-6 animate-in fade-in duration-700 overflow-x-hidden">
      
      {/* 標題區塊 */}
      <div className="mb-1 h-12 flex items-center">
        <TextType 
          as="h1"
          text={["ABOUT ME"]} 
          typingSpeed={100}
          className="text-3xl md:text-5xl font-black tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-purple-600"
          loop={false}
          showCursor={isCursorVisible} 
        />
      </div>

      <h2 className="text-lg md:text-xl text-gray-900 font-medium italic mb-4 tracking-wide">
        "我相信，如果每個人都充滿好奇心，世界會更美好"
      </h2>

      <hr className="border-gray-400 mb-6 md:mb-8" />

      {/* 核心排版：手機版垂直排列，平板以上 12 欄網格 */}
      <div className="flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-12 mb-8">
        
        {/* 左側 / 上方：自我介紹內文 */}
        <div className="md:col-span-8 space-y-6 text-gray-700 leading-loose text-base md:text-lg text-justify">
          <p>
            嗨！我是湧秝。一位對世界充滿好奇心的大學生。對我來說，好奇心是人類文明發展的關鍵驅動力、洞察的起點、行動的能源，亦是我最引以為傲的特質。
          </p>
          <p>
            從小就讀於體制外實驗教育十二年，大學透過特殊選才進入中央大學，後進入政治大學傳播學院，並四度獲得書卷獎，平均 GPA 達 4.27/4.3。獨特的教育歷程，使我對各種人、事、物充滿好奇心的特質，躲過填鴨式教育的抹殺，並獲得充分的展現與實踐。
          </p>
          <p>
            喜歡研究並提出見解、透過數據驗證假設，是我將豐沛好奇心轉化為獨一無二洞察的關鍵。期待這份對事物感到無比好奇的特質與跨領域的硬實力，能在未來持續創造出兼具美感與實用性的專案！
          </p>
        </div>

        {/* 右側 / 下方：學歷與基本資訊 */}
        <div className="md:col-span-4 md:col-start-9 space-y-8 md:space-y-6">
          <div>
            <h3 className="text-base font-bold text-gray-400 uppercase tracking-wider mb-2">Education</h3>
            <div className="font-medium text-gray-900 md:text-lg">國立政治大學</div>
            <div className="text-gray-600 text-base mt-1">廣告學系 學士</div>
            <div className="text-gray-600 text-base">雙主修 數位內容與科技</div>
          </div>
          
          <div>
            <h3 className="text-base font-bold text-gray-400 uppercase tracking-wider mb-2">Core Interests</h3>
            <div className="text-gray-700 text-base md:text-lg space-y-1">
              <p>數據驅動策略與 AI 應用</p>
              <p>UX / UI 與數位體驗設計</p>
              <p>品牌敘事與創意企劃</p>
              <p>消費者洞察與市場策略</p>
            </div>
          </div>
        </div>
      </div>

      {/* 跑馬燈工具技能區塊 */}
      <div className="mt-4 md:mt-0 w-full">
        {/* 🌟 標題改為誠懇的 Tools I've Used */}
        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-6 uppercase tracking-wider text-center md:text-left">
          Tools & Tech I've Used:
        </h3>
        
        {/* 將資料傳入 LogoLoop 元件 */}
        <div className="w-full text-gray-700">
          {/* @ts-ignore */}
          <LogoLoop logos={techLogos} />
        </div>
      </div>

    </div>
  );
}