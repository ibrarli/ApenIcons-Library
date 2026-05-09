import { useState, useRef, useEffect, useMemo } from "react";

interface IconDrawerProps {
  icon: any;
  onClose: () => void;
}

const IconDrawer = ({ icon, onClose }: IconDrawerProps) => {
  const [size, setSize] = useState(64);
  const [color, setColor] = useState("#0f172a");
  const [copiedReact, setCopiedReact] = useState(false);
  const [copiedSvg, setCopiedSvg] = useState(false);
  const [svgContent, setSvgContent] = useState("");

  // Sync color with theme preference on open
  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setColor(isDark ? "#E7B339" : "#0f172a");
  }, [icon]);

  const formatName = (name: string) => name.replace(/([A-Z])/g, " $1").trim();

  useEffect(() => {
    const container = document.getElementById("preview-svg-container");
    if (container) {
      setSvgContent(container.innerHTML);
    }
  }, [size, color, icon]);

  const handleCopyReact = () => {
    const code = `<${icon.name} size={${size}} color="${color}" />`;
    navigator.clipboard.writeText(code);
    setCopiedReact(true);
    setTimeout(() => setCopiedReact(false), 2000);
  };

  const handleCopySvg = () => {
    if (svgContent) {
      navigator.clipboard.writeText(svgContent);
      setCopiedSvg(true);
      setTimeout(() => setCopiedSvg(false), 2000);
    }
  };

  const downloadSVG = () => {
    if (!svgContent) return;
    const blob = new Blob([svgContent], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${icon.name}.svg`;
    link.click();
    URL.revokeObjectURL(url);
  };

  if (!icon) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[60] transition-all duration-300" 
        onClick={onClose} 
      />

      {/* Drawer Container */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white dark:bg-slate-950 shadow-[-20px_0_50px_-10px_rgba(0,0,0,0.3)] z-[70] border-l border-slate-200 dark:border-slate-800 flex flex-col animate-in slide-in-from-right duration-500 ease-out">
        
        {/* Header */}
        <div className="px-8 py-6 flex items-center justify-between border-b border-slate-50 dark:border-slate-900">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              {formatName(icon.name)}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded text-[10px] font-bold uppercase tracking-wider">
                {icon.version}
              </span>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="w-10 h-10 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-all text-slate-400 hover:text-slate-900 dark:hover:text-white"
          >
            <span className="text-xl">✕</span>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-8 overflow-y-auto flex-1 space-y-10 custom-scrollbar">
          
          {/* Visual Preview */}
          <div className="relative group flex flex-col items-center justify-center p-16 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-100 dark:border-slate-800 overflow-hidden">
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
                 style={{ backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`, backgroundSize: '16px 16px' }}></div>
            
            <div id="preview-svg-container" className="relative z-10 drop-shadow-sm transition-transform duration-300 group-hover:scale-110">
              <icon.component size={size} color={color} />
            </div>
          </div>

          {/* Configuration Grid */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Size</label>
                  <span className="text-xs font-mono font-bold text-[#E7B339]">{size}px</span>
                </div>
                <input 
                  type="range" min="16" max="180" step="4" value={size}
                  onChange={(e) => setSize(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#E7B339]"
                />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Color</label>
                <div className="flex items-center gap-3 p-1.5 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl">
                  <input 
                    type="color" value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="w-8 h-8 rounded-lg border-none bg-transparent cursor-pointer overflow-hidden shadow-sm"
                  />
                  <span className="text-xs font-mono text-slate-600 dark:text-slate-400 font-bold uppercase">{color}</span>
                </div>
              </div>
            </div>

            {/* Implementation Blocks */}
            <div className="space-y-6">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block">Implementation</label>
              
              {/* React Snippet */}
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-tighter">React Wrapper</span>
                <div className="relative">
                  <pre className="p-4 bg-slate-900 dark:bg-black text-[12px] font-mono leading-relaxed rounded-xl shadow-inner overflow-x-auto border border-slate-800 dark:border-slate-900">
                    <code className="text-slate-300">
                      <span className="text-pink-400">&lt;</span>
                      <span className="text-yellow-200">{icon.name}</span>
                      <span className="text-blue-300"> size</span><span className="text-white">=</span><span className="text-orange-300">{`{${size}}`}</span>
                      <span className="text-blue-300"> color</span><span className="text-white">=</span><span className="text-green-300">"{color}"</span>
                      <span className="text-pink-400"> /&gt;</span>
                    </code>
                  </pre>
                  <button 
                    onClick={handleCopyReact}
                    className={`absolute top-2.5 right-2.5 px-3 py-1 rounded-lg text-[10px] font-bold transition-all shadow-sm ${
                      copiedReact ? "bg-green-500 text-white" : "bg-slate-700 hover:bg-slate-600 text-slate-400 hover:text-white"
                    }`}
                  >
                    {copiedReact ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>

              {/* Raw SVG Snippet */}
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-tighter">Raw SVG Output</span>
                <div className="relative group">
                  <pre className="p-4 bg-white dark:bg-slate-900 text-slate-400 dark:text-slate-500 rounded-xl text-[11px] font-mono leading-tight max-h-32 overflow-y-auto border border-slate-200 dark:border-slate-800 shadow-sm scrollbar-hide select-all">
                    <code>{svgContent}</code>
                  </pre>
                  <button 
                    onClick={handleCopySvg}
                    className={`absolute top-2.5 right-2.5 px-3 py-1 rounded-lg text-[10px] font-bold transition-all shadow-sm ${
                      copiedSvg ? "bg-green-500 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
                    }`}
                  >
                    {copiedSvg ? "Copied!" : "Copy SVG"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fixed Footer */}
        <div className="p-8 border-t border-slate-50 dark:border-slate-900 bg-white dark:bg-slate-950 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)] dark:shadow-none">
          <button 
            onClick={downloadSVG}
            className="w-full bg-slate-900 dark:bg-[#E7B339] text-white dark:text-slate-950 py-4 rounded-2xl font-bold hover:bg-slate-800 dark:hover:bg-[#d1a12e] transition-all flex items-center justify-center gap-3 shadow-xl active:scale-[0.98]"
          >
            <span>Download SVG Asset</span>
            <span className="opacity-40 dark:opacity-60 text-xs font-normal">.svg</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default IconDrawer;