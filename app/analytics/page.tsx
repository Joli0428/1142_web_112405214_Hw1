import Image from "next/image";

export default function Analytics() {
  return (
    <div className="flex flex-col h-full animate-in fade-in duration-700">
      <h1 className="text-3xl font-extrabold text-black mb-2">數據分析</h1>
      <p className="text-sm text-gray-400 mb-8 tracking-widest">DATA & STRATEGY</p>
      
      <div className="bg-gray-100 rounded-2xl p-8 border border-gray-200">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Uspace go 數據行銷提案</h2>
        <p className="text-gray-500 text-sm mb-4">資料分析社專案 / Python & Pandas 應用</p>
        <div className="w-full h-32 bg-white rounded-xl flex items-center justify-center text-gray-300">
          未來這裡可以放入資料視覺化的圖表截圖
        </div>
      </div>
    </div>
  );
}