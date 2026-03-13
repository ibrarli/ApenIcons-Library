import { useState } from 'react';
import { ALL_ICONS } from '../icon-registry';

const IconGallery = () => {
  const [search, setSearch] = useState('');

  // Helper to add spaces between PascalCase names
  const formatName = (name: string) => name.replace(/([A-Z])/g, ' $1').trim();

  const filteredIcons = ALL_ICONS.filter((icon: any) =>
    icon.name.toLowerCase().includes(search.toLowerCase()) ||
    icon.tags?.some((tag: string) => tag.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="p-8 max-w-7xl mx-auto min-h-screen bg-slate-50/50">
      <div className="mb-12 text-center sm:text-left">
        <h2 className="text-4xl font-extrabold mb-3 text-slate-900 tracking-tight">Icon Library</h2>
        <p className="text-slate-500 mb-8 text-lg">Modern, rounded icons for your next project.</p>
        
        <div className="relative max-w-md group">
          <input
            type="text"
            placeholder="Search icons (e.g., 'menu', 'user')..."
            className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-white shadow-sm group-hover:shadow-md focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-slate-700"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="absolute right-4 top-4 text-slate-300 font-mono text-sm hidden sm:block">
             {filteredIcons.length} icons
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
        {filteredIcons.map((icon: any) => (
          <div 
            key={icon.name} 
            className="group relative flex flex-col items-center justify-center aspect-square p-4 bg-white border border-slate-200 rounded-3xl hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 hover:border-blue-500 transition-all duration-300 cursor-pointer"
            onClick={() => {
               navigator.clipboard.writeText(`<${icon.name} />`);
               alert(`Copied <${icon.name} /> to clipboard!`);
            }}
          >
            <div className="text-slate-700 group-hover:text-blue-600 transition-colors transform group-hover:scale-110 duration-300">
              <icon.component size={40} />
            </div>
            
            <span className="absolute bottom-4 px-2 text-center text-[10px] uppercase tracking-widest font-black text-slate-400 group-hover:text-blue-500 transition-colors">
              {formatName(icon.name)}
            </span>
          </div>
        ))}
      </div>

      {filteredIcons.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-slate-400 text-xl font-medium">No icons found matching "{search}"</p>
        </div>
      )}
    </div>
  );
};

export default IconGallery;