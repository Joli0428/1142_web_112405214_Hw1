"use client"; 

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function NavMenu() {
  const pathname = usePathname();

  const navItems = [
    { 
      name: "首頁", 
      path: "/",
      defaultImg: "/nav-home.png",
      activeImg: "/nav-home-active.png"
    },
    { 
      name: "關於我", 
      path: "/about",
      defaultImg: "/nav-about.png",
      activeImg: "/nav-about-active.png"
    },
    { 
      name: "作品集", 
      path: "/works",
      defaultImg: "/nav-works.png",
      activeImg: "/nav-works-active.png"
    },
    { 
      name: "數據分析", 
      path: "/analytics",
      defaultImg: "/nav-analytics.png",
      activeImg: "/nav-analytics-active.png"
    },
    { 
      name: "攝影作品", 
      path: "/photography",
      defaultImg: "/nav-photography.png",
      activeImg: "/nav-photography-active.png"
    },
  ];

  return (
    // 💡 把原本的 gap-4 改成 gap-3，讓矮一點的按鈕排起來更緊湊好看
    <div className="flex flex-col gap-3 w-full">
      
      {navItems.map((item) => {
        const isActive = pathname === item.path;

        return (
          <Link 
            href={item.path} 
            key={item.path} 
            className="block w-full transition-transform duration-200 hover:scale-105"
          >
            <Image
              src={isActive ? item.activeImg : item.defaultImg}
              alt={item.name}
              width={300} 
              height={30} 
              priority 
              // 🌟 關鍵修改：
              // 1. 把 h-auto 換成 h-[50px] (這個數字可以自由調整，例如 45px 或 60px)
              // 2. 把 object-contain 換成 object-cover，這樣圖片就會像被放進一個固定高度的畫框裡，不會變形！
              className="w-full h-[60px] object-cover rounded-xl" 
            />
          </Link>
        );
      })}

    </div>
  );
}