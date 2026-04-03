import Image from "next/image";


export default function About() {
  return (
    <div className="flex flex-col h-full animate-in fade-in duration-700">
      <h1 className="text-3xl font-extrabold text-black mb-8 border-b-2 border-black pb-2 inline-block self-start">
        關於我
      </h1>
      <div className="text-gray-600 leading-relaxed space-y-4 max-w-3xl">
        <p>
          在這裡可以寫下一段更完整的自我介紹。例如你對廣告行銷的熱忱、對於數位互動體驗的探索，以及你獨特的跨領域優勢。
        </p>
        <p>
          未來這個版面也很適合放上你的核心技能清單（如 Python、行銷企劃、影音剪輯），或是嵌入一份你的線上履歷 (Resume)。
        </p>
      </div>
    </div>
  );
}