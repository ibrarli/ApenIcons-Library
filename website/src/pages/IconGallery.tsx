import  { useState } from 'react';
import { ALL_ICONS } from '../icon-registry';

const IconGallery = () => {
  const [search, setSearch] = useState('');

  const filteredIcons = ALL_ICONS.filter((icon: any) =>
    icon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-2 text-slate-900">Icon Library</h2>
        <p className="text-slate-500 mb-6">Explore and copy components for your UI.</p>
        <input
          type="text"
          placeholder="Search through icons..."
          className="w-full max-w-md px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
        {filteredIcons.map((icon: any) => (
          <div key={icon.name} className="flex flex-col items-center p-6 bg-white border border-slate-100 rounded-2xl hover:border-blue-500 transition-all cursor-pointer">
            <icon.component size={32} />
            <span className="mt-4 text-[10px] uppercase tracking-wider font-bold text-slate-400">{icon.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconGallery;