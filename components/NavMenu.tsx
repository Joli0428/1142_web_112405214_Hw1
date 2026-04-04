"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // 用來判斷目前在哪個網頁
import { FiHome, FiUser, FiLayout, FiBarChart2, FiCamera } from "react-icons/fi"; // 引入極簡風格的圖示

export default function NavMenu() {
  const pathname = usePathname();

  // 定義你的選單項目與對應的路徑
  const menuItems = [
    { name: "Home", path: "/", icon: <FiHome size={20} /> },
    { name: "About", path: "/about", icon: <FiUser size={20} /> },
    { name: "Works", path: "/works", icon: <FiLayout size={20} /> },
    { name: "Analytics", path: "/analytics", icon: <FiBarChart2 size={20} /> },
    { name: "Photography", path: "/photography", icon: <FiCamera size={20} /> },
  ];

  return (
    <nav className="flex flex-col gap-2 w-full">
      {menuItems.map((item) => {
        // 判斷這個按鈕是不是目前的頁面
        const isActive = pathname === item.path;

        return (
          <Link
            key={item.name}
            href={item.path}
            className={`group flex items-center gap-4 px-5 py-3.5 rounded-2xl transition-all duration-300 ${
              isActive
                ? "bg-gray-50 shadow-sm scale-[1.02]" // 目前頁面的背景樣式
                : "hover:bg-gray-50 hover:scale-[1.02]" // 滑鼠懸浮的背景樣式
            }`}
          >
            {/* 圖示區塊 */}
            <div
              className={`transition-colors duration-300 ${
                isActive ? "text-orange-500" : "text-gray-400 group-hover:text-gray-800"
              }`}
            >
              {item.icon}
            </div>

            {/* 文字區塊 */}
            <span
              className={`tracking-wider transition-all duration-300 ${
                isActive
                  ? "font-black bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-purple-600" // 目前頁面套用漸層與極粗體
                  : "font-bold text-gray-500 group-hover:text-gray-800" // 平常是灰色，懸浮變深色
              }`}
            >
              {item.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}