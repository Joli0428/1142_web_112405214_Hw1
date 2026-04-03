import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import NavMenu from "../components/NavMenu"; // 🌟 1. 匯入剛剛寫好的導覽列元件 (請確認路徑正確)

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
      <body className="bg-slate-200 font-sans text-gray-800 md:h-screen p-4 md:p-8 md:overflow-hidden flex flex-col">
        
        <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto gap-4 md:gap-6 h-full">

          {/* ================= 左邊：個人資訊與導覽列 ================= */}
          <div className="bg-white w-full md:w-[260px] md:h-full rounded-3xl shadow-lg flex flex-col py-10 px-5 md:py-12 z-10 shrink-0 md:overflow-y-auto"> 

            {/* 1. 大頭貼 */}
            <div className="flex justify-center items-center w-full mb-6 shrink-0">
              <div className="w-[100px] h-[100px] rounded-full overflow-hidden flex justify-center items-center border-2 border-gray-50 shadow-sm transition-transform duration-300 hover:scale-105">
                <Image 
                  src="/IMG_0410.JPG" 
                  alt="profile picture" 
                  width={100} 
                  height={100}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* 2. 姓名與簡介 */}
            <div className="text-center mb-8 shrink-0">
              <h1 className="text-xl font-extrabold tracking-widest mb-2 text-black">周湧秝</h1>
              <p className="text-[11px] text-gray-400 font-medium tracking-widest">NCCU AD x DCT</p>
            </div>

            {/* 3. 社群連結 */}
            <div className="flex justify-center gap-3 mb-6 shrink-0">
              <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-[10px] text-gray-500 hover:bg-gray-200 hover:text-black transition-colors cursor-pointer">IG</div>
              <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-[10px] text-gray-500 hover:bg-gray-200 hover:text-black transition-colors cursor-pointer">IN</div>
              <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-[10px] text-gray-500 hover:bg-gray-200 hover:text-black transition-colors cursor-pointer">Mail</div>
            </div>
            
            {/* 4. 網站導覽選單 */}
            {/* 🌟 2. 這裡原本落落長的程式碼，現在變成短短一行，超乾淨！ */}
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