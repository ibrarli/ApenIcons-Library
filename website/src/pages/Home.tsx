import { useState } from "react";
import IconGallery from "../components/IconGallery";

const Home = () => {
  const [copied, setCopied] = useState(false);
  // Track selected package manager
  const [manager, setManager] = useState<"npm" | "pnpm">("npm");
  
  const installCommands = {
    npm: "npm install apen-icons",
    pnpm: "pnpm add apen-icons"
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(installCommands[manager]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center pt-20 pb-16 px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
          Beautiful icons for your 
          <span className="text-[#E7B339]"> next big project.</span>
        </h1>

        <p className="text-md text-slate-500 max-w-full mb-10">
          ApenIcons is a collection of pixel-perfect, manually crafted React
          components. Fully customizable, accessible, and lightweight.
        </p>

        <div className="flex flex-col items-center gap-4">
          {/* Package Manager Tabs */}
          <div className="flex gap-1 p-1 bg-slate-100 rounded-xl mb-1">
            {(['npm', 'pnpm'] as const).map((m) => (
              <button
                key={m}
                onClick={() => setManager(m)}
                className={`px-4 py-1.5 rounded-lg text-[10px] font-bold transition-all uppercase tracking-widest ${
                  manager === m 
                    ? "bg-white text-slate-900 shadow-sm" 
                    : "text-slate-400 hover:text-slate-600"
                }`}
              >
                {m}
              </button>
            ))}
          </div>

          <div className="group relative">
            <code 
              onClick={handleCopy}
              className="bg-white border-2 border-slate-200 px-6 py-3 rounded-xl font-mono text-slate-600 block cursor-pointer hover:border-[#E7B339] transition-all active:scale-95 shadow-sm min-w-[280px]"
            >
              {installCommands[manager]}
            </code>
            
            {/* Enhanced Tooltip */}
            <div className={`absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg text-[11px] font-bold whitespace-nowrap transition-all duration-200 pointer-events-none shadow-xl ring-1 ring-white/10 z-50 ${
              copied 
                ? "bg-green-600 text-white opacity-100 -top-11" 
                : "bg-slate-900 text-white opacity-0 group-hover:opacity-100 group-hover:-top-11"
            }`}>
              {copied ? "Copied!" : "Click to copy"}
              
              <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 rounded-sm transition-colors duration-200 ${
                copied ? "bg-green-600" : "bg-slate-900"
              }`}></div>
            </div>
          </div>
        </div>
      </div>

      <IconGallery />
    </>
  );
};

export default Home;