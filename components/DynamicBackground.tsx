"use client";

import { usePathname } from "next/navigation";

export default function DynamicBackground() {
  const pathname = usePathname();

  const backgrounds: Record<string, string> = {
    "/": "/bg-home.png",
    "/about": "/bg-about.png",
    "/works": "/bg-works.png",
    "/analytics": "/bg-analytics.png",
    "/photography": "/bg-photography.png",
  };

  // 確保如果到了不存在的路徑，預設對應到首頁
  const currentPath = backgrounds[pathname] ? pathname : "/";

  return (
    // 最外層容器，設定一個與你網站風格相符的底色防呆
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-[#fafafa]">
      
      {/* 🌟 核心魔法：把所有背景都先算出來，疊加在一起 */}
      {Object.entries(backgrounds).map(([path, bgUrl]) => (
        <div
          key={path}
          // 透過 absolute 讓所有背景疊在一起
          // 使用 opacity 來控制誰該顯示，並加上 duration-700 讓淡入淡出更柔和
          className={`absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-700 ease-in-out ${
            currentPath === path ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${bgUrl}')` }}
        />
      ))}
      
    </div>
  );
}