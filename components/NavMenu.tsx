"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react"; // 引入 useEffect 來做測試

export default function NavMenu() {
  const pathname = usePathname();

  // 🌟 除錯神器：每次網址改變時，在瀏覽器控制台印出目前的網址
  useEffect(() => {
    console.log("現在的 pathname 是：", pathname);
  }, [pathname]);

  const navItems = [
    { name: "首頁", path: "/" },
    { name: "關於我", path: "/about" },
    { name: "作品集", path: "/works" },
    { name: "數據分析", path: "/analytics" },
    { name: "攝影作品", path: "/photography" },
  ];

  return (
    <nav className="grid grid-cols-2 gap-3 md:flex md:flex-col flex-1 mt-4">
      {navItems.map((item) => {
        // 判斷邏輯
        const isActive = pathname === item.path;

        return (
          <Link key={item.path} href={item.path}>
            <div
              // 🌟 終極殺招：直接用 style 強制上色，無視 Tailwind 的編譯！
              style={{
                backgroundColor: isActive ? "black" : "transparent",
                color: isActive ? "white" : "#1f2937", // #1f2937 是深灰色
              }}
              className={`px-4 py-3 rounded-xl text-sm font-bold tracking-widest text-center transition-all duration-300 border-2 ${
                isActive
                  ? "border-black shadow-md"
                  : "border-gray-800 hover:bg-gray-100"
              }`}
            >
              {item.name}
            </div>
          </Link>
        );
      })}
    </nav>
  );
}