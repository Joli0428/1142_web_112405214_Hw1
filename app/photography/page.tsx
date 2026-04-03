import Image from "next/image";


export default function Photo() {
  return (
    <div className="flex flex-col h-full animate-in fade-in duration-700">
      <h1 className="text-3xl font-extrabold text-black mb-2">攝影作品</h1>
      <p className="text-sm text-gray-400 mb-8 tracking-widest">PHOTOGRAPHY</p>
      
      {/* 瀑布流或網格照片牆的預留區塊 */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-gray-200 rounded-xl aspect-square"></div>
        <div className="bg-gray-300 rounded-xl aspect-video"></div>
        <div className="bg-gray-200 rounded-xl aspect-square"></div>
        <div className="bg-gray-300 rounded-xl aspect-square"></div>
        <div className="bg-gray-200 rounded-xl aspect-video"></div>
      </div>
    </div>
  );
}