"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import NavMenu from "./NavMenu"; 
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi"; 

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  // 🌟 新增：控制漢堡按鈕是否顯示的狀態
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleMenuClick = () => {
    setIsOpen(false);
  };

  // 🌟 新增：滑動偵測邏輯
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // 向下滑動超過 50px 時隱藏按鈕 (避免在最頂部稍微滑動就觸發)
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsButtonVisible(false);
      } 
      // 向上滑動時顯示按鈕
      else if (currentScrollY < lastScrollY) {
        setIsButtonVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // 當選單打開時，防止背景滾動
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  return (
    <>
      {/* 🌟 1. 懸浮的漢堡選單按鈕 (綁定 isButtonVisible 來控制上下滑動的動畫) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`md:hidden fixed left-6 z-[60] w-12 h-12 flex items-center justify-center bg-white/80 backdrop-blur-md rounded-full shadow-md text-gray-700 hover:bg-white transition-all duration-300 ease-in-out ${
          isButtonVisible ? "top-6 opacity-100 translate-y-0" : "-top-10 opacity-0 -translate-y-full"
        }`}
        aria-label="Toggle Menu"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* 🌟 2. 展開的側邊欄選單 (維持原樣) */}
      <div 
        className={`${
          isOpen 
            ? "translate-x-0" 
            : "-translate-x-full" 
        } md:translate-x-0 transition-transform duration-500 ease-in-out fixed inset-y-0 left-0 w-[85vw] max-w-[320px] bg-white shadow-2xl z-[50] md:z-auto flex flex-col py-12 px-6 overflow-y-auto md:relative md:w-[260px] md:h-full md:rounded-3xl md:shadow-lg md:py-14 md:px-5 shrink-0`}
      >
        <div className="h-8 md:hidden shrink-0"></div>

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
        
        <div className="flex-1 flex flex-col justify-center w-full" onClick={handleMenuClick}>
          <NavMenu />
        </div>

      </div>
      
      {/* 🌟 3. 半透明背景遮罩 */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[40] md:hidden transition-opacity duration-500 animate-in fade-in"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}