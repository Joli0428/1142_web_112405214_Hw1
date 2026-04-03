"use client";

import { usePathname } from "next/navigation";

export default function DynamicBackground() {
  const pathname = usePathname();

  // 🌟 將網址路徑對應到你的背景圖片檔名
  const backgrounds: Record<string, string> = {
    "/": "/bg-home.png",
    "/about": "/bg-about.png",
    "/works": "/bg-works.png",
    "/analytics": "/bg-analytics.png",
    "/photography": "/bg-photography.png",
  };

  // 如果找不到對應的路徑，預設顯示首頁的背景
  const currentBg = backgrounds[pathname] || "/bg-home.png";

  return (
    <div
      // -z-10 確保它永遠墊在最底層當背景
      // transition-all duration-500 讓換頁時背景有微柔和的過渡效果
      className="fixed top-0 left-0 w-full h-full -z-10 bg-cover bg-center bg-no-repeat transition-all duration-500"
      style={{ backgroundImage: `url('${currentBg}')` }}
    />
  );
}