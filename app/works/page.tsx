import Image from "next/image";


export default function Works() {
  return (
    <div className="flex flex-col h-full animate-in fade-in duration-700">
      <h1 className="text-3xl font-extrabold text-black mb-2">作品集</h1>
      <p className="text-sm text-gray-400 mb-8 tracking-widest">BRANDING & CAMPAIGN</p>
      
      {/* 這裡先用幾個灰色方塊幫你抓出未來放作品卡片的版面 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-100 rounded-2xl h-48 flex items-center justify-center p-6 hover:bg-gray-200 transition-colors cursor-pointer border border-gray-200">
          <span className="text-gray-500 font-bold">Tiger Beer 品牌溝通企劃</span>
        </div>
        <div className="bg-gray-100 rounded-2xl h-48 flex items-center justify-center p-6 hover:bg-gray-200 transition-colors cursor-pointer border border-gray-200">
          <span className="text-gray-500 font-bold">失重人口 - 坎城青年創意競賽</span>
        </div>
        <div className="bg-gray-100 rounded-2xl h-48 flex items-center justify-center p-6 hover:bg-gray-200 transition-colors cursor-pointer border border-gray-200">
          <span className="text-gray-500 font-bold">未來專案擴充區</span>
        </div>
      </div>
    </div>
  );
}