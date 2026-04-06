import type { Metadata } from "next";
import "./globals.css";
import DynamicBackground from "../components/DynamicBackground";
import Sidebar from "../components/Sidebar";

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
    <html lang="en" className="antialiased">
      {/* 🌟 已經將 font-sans 移除，讓等一下的 globals.css 直接接管字體 */}
      <body className="text-gray-800 md:h-screen p-4 md:p-8 md:overflow-hidden flex flex-col relative z-0">
        
        <DynamicBackground />
        
        <div className="flex flex-col md:flex-row w-full h-full gap-4 md:gap-6 relative">

          <Sidebar />

          {/* 🌟 關鍵修改：在 p-6 後面加上 pt-24（為手機版漢堡按鈕預留頂部空間）
              md:p-12 會確保電腦版依然維持完美的對稱留白，不受 pt-24 影響！ */}
          <div className="flex-1 bg-[#fafafa] rounded-3xl shadow-lg md:h-full overflow-y-auto p-6 pt-24 md:p-12 lg:p-16 relative z-10">
            {children}
          </div>

        </div>
      </body>
    </html>
  );
}