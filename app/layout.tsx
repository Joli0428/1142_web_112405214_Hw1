import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import NavMenu from "../components/NavMenu";
import DynamicBackground from "../components/DynamicBackground";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "周湧秝的個人履歷",
  description: "周湧秝的個人履歷",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="font-sans text-gray-800 md:h-screen p-4 md:p-8 md:overflow-hidden flex flex-col relative z-0">
        
        {/* 動態背景元件 */}
        <DynamicBackground />
        
        <div className="flex flex-col md:flex-row w-full h-full gap-4 md:gap-6">

          {/* ================= 左邊：個人資訊與導覽列 ================= */}
          <div className="bg-white w-full md:w-[260px] md:h-full rounded-3xl shadow-lg flex flex-col py-10 px-5 md:py-12 z-10 shrink-0 md:overflow-y-auto"> 

            {/* 1. 大頭貼 (點擊回首頁) */}
            <div className="flex justify-center items-center w-full mb-6 shrink-0">
              <Link href="/" className="group cursor-pointer">
                <div className="w-[105px] h-[105px] rounded-full overflow-hidden flex justify-center items-center border-4 border-white shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:scale-105 group-hover:border-gray-50">
                  <Image 
                    src="/IMG_0410.JPG" 
                    alt="profile picture" 
                    width={105} 
                    height={105}
                    className="object-cover w-full h-full"
                  />
                </div>
              </Link>
            </div>

            {/* 2. 姓名與簡介 */}
            <div className="text-center mb-8 shrink-0">
              <h1 className="text-2xl font-black tracking-[0.15em] mb-1 text-gray-800">
                周湧秝
              </h1>
              <p className="text-[11px] text-gray-500 font-bold tracking-[0.2em] uppercase mt-2">
                NCCU AD <span className="text-gray-300 mx-1 font-light">x</span> DCT
              </p>
            </div>

            {/* 3. 社群連結 */}
            <div className="flex justify-center gap-4 mb-8 shrink-0">
              {/* IG 連結 */}
              <a href="https://www.instagram.com/joli._.li/" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-black hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md">
                <FaInstagram size={18} />
              </a>
              
              {/* LinkedIn 連結 (已補上 https://) */}
              <a href="https://www.linkedin.com/in/jolichou" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-black hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md">
                <FaLinkedinIn size={17} />
              </a>
              
              {/* Email 連結 (使用 Gmail 網頁版強制開啟) */}
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=428joli@gmail.com" 
                 target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-black hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md">
                <IoMailOutline size={20} />
              </a>
            </div>
            
            {/* 4. 網站導覽選單 */}
            <NavMenu />

          </div>

          {/* ================= 右邊：主要內容區塊 ================= */}
          <div className="flex-1 bg-[#fafafa] rounded-3xl shadow-lg md:h-full overflow-y-auto p-6 md:p-12 lg:p-16 relative">
            {children}
          </div>

        </div>
      </body>
    </html>
  );
}