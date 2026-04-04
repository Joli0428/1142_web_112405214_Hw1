"use client";

import { useState, useEffect } from "react";
import TextType from "../../components/TextType"; 
import Image from "next/image"; 

export default function Works() {
  const [isCursorVisible, setIsCursorVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCursorVisible(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // 定義你的作品集資料陣列
  const projects = [
    {
      id: 1,
      title: "坎城青年創意競賽 (Cannes Young Lions)",
      description: "在坎城青年創意競賽中，以《Weightless Population》作品獲得台灣區銅獎。負責團隊指導與專案統籌，透過影像傳遞深刻的社會洞察。",
      imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop", 
      tags: ["影音企劃", "坎城銅獎", "專案統籌"]
    },
    {
      id: 2,
      title: "虎牌啤酒 廣告企劃",
      description: "針對虎牌啤酒進行品牌溝通與廣告企劃發想。透過市場調查與消費者洞察，提出具創意且能引起共鳴的行銷策略方案。",
      imageUrl: "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2000&auto=format&fit=crop",
      tags: ["廣告企劃", "品牌溝通", "行銷策略"]
    },
    {
      id: 3,
      title: "花東音樂營",
      description: "參與籌辦花東音樂營，負責專案執行與活動規劃。將音樂與在地文化結合，創造獨特的參與體驗。",
      imageUrl: "https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?q=80&w=2000&auto=format&fit=crop",
      tags: ["活動企劃", "專案執行"]
    },
    {
      id: 4,
      title: "數位內容藝術創作展出",
      description: "結合科技與藝術的互動裝置創作。透過程式邏輯與生成式藝術，探索數位媒材在視覺表達上的無限可能。",
      imageUrl: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=2000&auto=format&fit=crop",
      tags: ["互動設計", "科技藝術", "生成式藝術"]
    },
    {
      id: 5,
      title: "基礎影音作品",
      description: "包含各類短影音、腳本發想與剪輯實作。展現基礎影像敘事能力與視覺美感的掌握度。",
      imageUrl: "https://images.unsplash.com/photo-1557683304-673a23048d34?q=80&w=2000&auto=format&fit=crop",
      tags: ["影像敘事", "短影音", "腳本企劃"]
    },
    {
      id: 6,
      title: "消費者行為企劃",
      description: "透過問卷設計、數據收集與質化訪談，深入分析特定受眾的消費行為模式，並據此提出商業洞察。",
      imageUrl: "https://images.unsplash.com/photo-1557682260-96773eb01377?q=80&w=2000&auto=format&fit=crop",
      tags: ["消費者洞察", "數據分析", "問卷設計"]
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-4 md:px-6 md:py-6 animate-in fade-in duration-700 overflow-x-hidden">
      
      {/* 🌟 標題區塊 (間距已對齊 About 頁面) */}
      <div className="mb-1 h-12 flex items-center">
        <TextType 
          as="h1"
          text={["SELECTED WORKS"]} 
          typingSpeed={100}
          className="text-3xl md:text-5xl font-black tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-purple-600"
          loop={false}
          showCursor={isCursorVisible} 
        />
      </div>

      {/* 🌟 副標題 (間距已對齊 About 頁面) */}
      <h2 className="text-lg md:text-xl text-gray-900 font-medium italic mb-4 tracking-wide">
        "跨越邊界，將好奇心化為具體影響力"
      </h2>

      {/* 🌟 新增的橫線，間距完全對齊 About 頁面 */}
      <hr className="border-gray-400 mb-6 md:mb-8" />

      {/* 核心排版：兩欄式網格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-2xl p-5 md:p-6 shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.06)] transition-all duration-300 group cursor-pointer">
            
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-5 bg-gray-100">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-purple-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 text-gray-500 text-xs font-medium rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}