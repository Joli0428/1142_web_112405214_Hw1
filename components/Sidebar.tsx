"use client"; // 🌟 這是關鍵，宣告它是一個客戶端元件

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavMenu from "./NavMenu"; // 注意路徑
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi"; // 引入漢堡選單和關閉的 Icon

export default function Sidebar() {
  // 🌟 用來控制手機版選單是否展開的狀態
  const [isOpen, setIsOpen] = useState(false);

  // 點擊選單項目後自動收起選單
  const handleMenuClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* 🌟 手機版專用的「頂部導航列」 (只有在手機版 md 以下才會顯示) */}
      <div className="md:hidden flex items-center justify-between bg-white w-full rounded-2xl shadow-sm px-6 py-4 z-50 relative">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-100">
            <Image src="/IMG_0410.JPG" alt="profile" width={40} height={40} className="object-cover w-full h-full" />
          </div>
          <div>
            <h1 className="text-base font-black tracking-widest text-gray-800">周湧秝</h1>
          </div>
        </div>
        
        {/* 漢堡選單按鈕 */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-full text-gray-600 hover:bg-gray-100 transition-colors"
        >
          {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {/* 🌟 原始的左側欄設計 (加上了響應式的隱藏與展開邏輯) */}
      <div 
        className={`${
          isOpen 
            ? "translate-y-0 opacity-100 mt-4" // 手機版展開時的樣式
            : "-translate-y-4 opacity-0 hidden" // 手機版收合時的樣式
        } md:translate-y-0 md:opacity-100 md:flex md:mt-0 transition-all duration-300 ease-in-out bg-white w-full md:w-[260px] md:h-full rounded-3xl shadow-lg flex-col py-6 px-5 md:py-14 z-40 shrink-0 md:overflow-y-auto absolute md:relative top-20 md:top-0 left-0`}
      >
        <div className="flex justify-center items-center w-full mb-4 shrink-0">
          <Link href="/" className="group cursor-pointer" onClick={handleMenuClick}>
            <div className="w-[96px] h-[96px] rounded-full overflow-hidden flex justify-center items-center border-4 border-white shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:scale-105 group-hover:border-gray-50">
              <Image src="/IMG_0410.JPG" alt="profile picture" width={96} height={96} className="object-cover w-full h-full" />
            </div>
          </Link>
        </div>

        <div className="text-center mb-5 shrink-0">
          <h1 className="text-2xl font-black tracking-[0.15em] mb-1 text-gray-800">
            周湧秝
          </h1>
          <p className="text-[11px] text-gray-500 font-bold tracking-[0.2em] uppercase mt-2">
            NCCU AD <span className="text-gray-300 mx-1 font-light">x</span> DCT
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-6 shrink-0">
          <a href="https://www.instagram.com/joli._.li/" target="_blank" rel="noopener noreferrer" 
             className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-black hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md">
            <FaInstagram size={18} />
          </a>
          <a href="https://www.linkedin.com/in/jolichou" target="_blank" rel="noopener noreferrer" 
             className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-black hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md">
            <FaLinkedinIn size={17} />
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=112405214@g.nccu.edu.tw" 
             target="_blank" rel="noopener noreferrer" 
             className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-black hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md">
            <IoMailOutline size={20} />
          </a>
        </div>
        
        {/* 包裝 NavMenu 並攔截點擊事件，讓點選單時自動收合 */}
        <div className="flex-1 flex flex-col justify-center w-full" onClick={handleMenuClick}>
          <NavMenu />
        </div>

      </div>
      
      {/* 手機版展開選單時的半透明背景遮罩 */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}