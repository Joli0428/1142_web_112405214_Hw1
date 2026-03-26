import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="flex h-full">

          {/* 左邊 */}
          <div className="bg-white w-[320px] h-full p-4"> 

            <div className="flex justify-center items-center w-full">
              <div className="bg-gray-200 w-[80px] h-[80px] rounded-full overflow-hidden justify-center">
              <Image src="/IMG_0410.JPG" alt="cat" width={80} height={80}/>
              </div>
            </div>
            <div className="text-center">姓名</div>
            <div className="text-center">簡介</div>

            <div className="flex gap-2">
              <div>社群連結</div>
              <div>社群連結</div>
              <div>社群連結</div>
            </div>
            
            <div>
              <Link href="/about">
                <div className="bg-gray-300 p-[16px] rounded-md">關於我</div>
              </Link>

              <Link href="/Photo">
                <div className="bg-gray-300 p-[16px] mt-2 rounded-md">攝影作品</div>
              </Link>
              
              <div className="bg-gray-300 p-[16px] mt-2 rounded-md">程式專案</div>
              <div className="bg-gray-300 p-[16px] mt-2 rounded-md">數據分析</div>
            </div>
          </div>
          <div className="bg-gray-200 w-full h-full">
            
            {children}



          </div>
        </div>



        
        
        





      </body>
    </html>
  );
}
