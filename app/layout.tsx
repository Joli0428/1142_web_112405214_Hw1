import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DynamicBackground from "../components/DynamicBackground";
import Sidebar from "../components/Sidebar";

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
      lang="en" // 🌟 關鍵修正：改回 "en"，強制瀏覽器優先使用 Geist 英文字體
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="font-sans text-gray-800 md:h-screen p-4 md:p-8 md:overflow-hidden flex flex-col relative z-0">
        
        <DynamicBackground />
        
        <div className="flex flex-col md:flex-row w-full h-full gap-4 md:gap-6 relative">

          <Sidebar />

          <div className="flex-1 bg-[#fafafa] rounded-3xl shadow-lg md:h-full overflow-y-auto p-6 md:p-12 lg:p-16 relative z-10">
            {children}
          </div>

        </div>
      </body>
    </html>
  );
}