import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center h-full animate-in fade-in duration-700">
      <h1 className="text-4xl font-extrabold text-black mb-4">
        Hello, 我是周湧秝 👋
      </h1>
      <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl">
        目前就讀於政大廣告與數位內容雙主修 (NCCU AD x DCT)。<br/>
        遊走於感性的品牌策略與理性的科技應用之間，致力於透過不同的載體與數據分析，說出打動人心的好故事。
      </p>
      
      {/* 未來可以這裡放一個引導按鈕，例如「查看我的最新作品」 */}
      <div>
        <a href="/works" className="inline-block bg-black text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-gray-800 transition-colors">
          探索作品集 →
        </a>
      </div>
    </div>
  );
}