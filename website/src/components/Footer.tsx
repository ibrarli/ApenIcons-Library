export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 pt-20 pb-10 font-['Oxanium'] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {/* Big Brand Header */}
        <div className="mb-12 select-none pointer-events-none">
          <h2 className="text-6xl md:text-8xl font-black text-slate-900/40 dark:text-slate-100/30 tracking-tighter text-center">
            Apen <span className="text-[#E7B339]/40 dark:text-[#E7B339]/30">Icons</span>
          </h2>
        </div>

        {/* Centered Social Media Links */}
        <div className="flex items-center justify-center gap-8 mb-10">
          <a 
            href="https://github.com/apenapps" 
            target="_blank" 
            rel="noreferrer" 
            className="text-sm font-bold text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all tracking-widest uppercase"
          >
            GitHub
          </a>
      
          <a 
            href="https://youtube.com/@apenapps" 
            target="_blank" 
            rel="noreferrer" 
            className="text-sm font-bold text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all tracking-widest uppercase"
          >
            YouTube
          </a>
          <a 
            href="https://instagram.com/apenapps" 
            target="_blank" 
            rel="noreferrer" 
            className="text-sm font-bold text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all tracking-widest uppercase"
          >
            Instagram
          </a>
        </div>

        {/* Project Credit & Link */}
        <div className="flex flex-col items-center gap-2">
          <div className="h-px w-12 bg-slate-200 dark:bg-slate-800 mb-4"></div>
          <p className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] font-medium">
            A Project of{' '}
            <a 
              href="https://apenapps.com" 
              target="_blank" 
              rel="noreferrer" 
              className="text-slate-900 dark:text-slate-100 hover:text-[#E7B339] dark:hover:text-[#E7B339] transition-colors font-bold"
            >
              Apen Apps
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};