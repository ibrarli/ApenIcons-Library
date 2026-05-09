import { useState, useRef, useEffect, useMemo } from "react";

interface FilterDropdownProps {
  label: string;
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
}

const FilterDropdown = ({ label, options, selected, onSelect }: FilterDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Reorder options so the selected one is always at index 0
  const sortedOptions = useMemo(() => {
    return [...options].sort((a, b) => {
      if (a === selected) return -1;
      if (b === selected) return 1;
      return 0;
    });
  }, [options, selected]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

 return (
    <div className="flex flex-col gap-1.5 w-full sm:w-48 relative" ref={dropdownRef}>
      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 ml-1">
        {label}
      </label>
      
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl border transition-all text-sm font-medium shadow-sm ${
          isOpen 
            ? "border-slate-900 ring-4 ring-slate-900/5 dark:border-[#E7B339] dark:ring-[#E7B339]/10 bg-white dark:bg-slate-900" 
            : "border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-900"
        }`}
      >
        <span className="text-slate-700 dark:text-slate-200 truncate">{selected}</span>
        <svg 
          width="12" height="12" viewBox="0 0 24 24" fill="none" 
          stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
          className={`transition-transform duration-200 text-slate-400 ${isOpen ? "rotate-180" : ""}`}
        >
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-[calc(100%+8px)] left-0 w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl z-[100] overflow-hidden animate-in fade-in zoom-in-95 duration-100">
          <div className="max-h-[160px] overflow-y-auto py-1.5 custom-scrollbar">
            {sortedOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => {
                  onSelect(opt);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                  selected === opt 
                    ? "bg-slate-50 dark:bg-slate-800/50 text-[#E7B339] font-bold" 
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb { background: #1e293b; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #cbd5e1; }
      `}</style>
    </div>
  );
};

export default FilterDropdown;