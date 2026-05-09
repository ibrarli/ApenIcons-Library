import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Sun, Moon } from '../../../src'; 

export const NavBar = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <nav className="border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md sticky top-0 z-50 font-['Oxanium'] transition-all duration-300">
      <div className="max-w-full mx-auto px-5 h-16 flex items-center justify-between">
        
        {/* Left Side: Logo Branding */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="h-10 w-10 flex items-center justify-center transition-transform group-hover:scale-110">
            {/* Logo Swapping Logic */}
            <img 
              src={isDark ? "/logo-dark.svg" : "/logo-white.svg"} 
              alt="ApenIcons Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            Apen <span className="text-[#E7B339]">Icons</span>
          </span>
        </Link>

        {/* Right Side: Actions */}
        <div className="flex items-center gap-4">
          
          {/* iPhone-style Silent Switch */}
          <div 
            onClick={toggleTheme}
            className="relative w-14 h-7 bg-slate-200 dark:bg-slate-800 rounded-full cursor-pointer p-1 transition-colors duration-300 border border-slate-300 dark:border-slate-700 shadow-inner"
          >
            {/* The Sliding Switch Handle */}
            <div 
              className={`absolute top-1 w-5 h-5 rounded-full bg-white dark:bg-[#E7B339] shadow-md flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                isDark ? "left-1" : "left-8"
              }`}
            >
              {isDark ? (
                <Moon size={12} strokeWidth={3} className="text-slate-900" />
              ) : (
                <Sun size={12} strokeWidth={3} className="text-slate-600" />
              )}
            </div>
          </div>

          <div className="hidden sm:flex items-center px-3 py-1 rounded-lg bg-[#E7B339]/10 text-[#E7B339] text-[10px] font-bold border border-[#E7B339]/20 uppercase tracking-[0.15em]">
            v1.1.3
          </div>
        </div>
      </div>
    </nav>
  );
};