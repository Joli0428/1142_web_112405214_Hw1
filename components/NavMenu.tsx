"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; 
import { FiHome, FiUser, FiLayout, FiBarChart2, FiCamera } from "react-icons/fi"; 

export default function NavMenu() {
  const pathname = usePathname();

  // 🌟 1. 將 icon 的大小從 size={20} 放大為 size={24}
  const menuItems = [
    { name: "Home", path: "/", icon: <FiHome size={24} /> },
    { name: "About", path: "/about", icon: <FiUser size={24} /> },
    { name: "Works", path: "/works", icon: <FiLayout size={24} /> },
    { name: "Analytics", path: "/analytics", icon: <FiBarChart2 size={24} /> },
    { name: "Photography", path: "/photography", icon: <FiCamera size={24} /> },
  ];

  return (
    // 🌟 2. 稍微增加各個按鈕之間的垂直間距 (gap-2 改為 gap-3)
    <nav className="flex flex-col gap-3 w-full">
      {menuItems.map((item) => {
        const isActive = pathname === item.path;

        return (
          <Link
            key={item.name}
            href={item.path}
            // 🌟 3. 增加按鈕內部的上下 padding (py-3.5 改為 py-4) 與圖文間距 (gap-4 改為 gap-5)
            className={`group flex items-center gap-5 px-5 py-4 rounded-2xl transition-all duration-300 ${
              isActive
                ? "bg-gray-50 shadow-sm scale-[1.02]" 
                : "hover:bg-gray-50 hover:scale-[1.02]" 
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
              // 🌟 4. 加上 text-lg 讓字體變大，撐起排版份量
              className={`text-lg tracking-wider transition-all duration-300 ${
                isActive
                  ? "font-black bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-purple-600" 
                  : "font-bold text-gray-500 group-hover:text-gray-800" 
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