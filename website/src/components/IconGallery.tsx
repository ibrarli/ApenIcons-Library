import { useState, useMemo } from "react";
import { ALL_ICONS } from "../icon-registry";
import IconDrawer from "./IconDrawer";
import IconItem from "./IconItem";
import FilterDropdown from "./FilterDropDown";

const IconGallery = () => {
  const [search, setSearch] = useState("");
  const [selectedIcon, setSelectedIcon] = useState<any>(null);
  
  const [version, setVersion] = useState("All Versions");
  const [category, setCategory] = useState("All Categories");

  // 1. Dynamic Version Generation
  const versionOptions = useMemo(() => {
    const versions = new Set(ALL_ICONS.map((i: any) => i.version));
    return ["All Versions", ...Array.from(versions).sort()];
  }, []);

  // 2. Dynamic Category Generation
  const categoryOptions = useMemo(() => {
    const categories = new Set(ALL_ICONS.map((i: any) => i.category).filter(Boolean));
    return ["All Categories", ...Array.from(categories).sort()];
  }, []);

  // 3. Multi-Layer Filter Logic
  const filteredIcons = ALL_ICONS.filter((icon: any) => {
    // Search check
    const matchesSearch =
      icon.name.toLowerCase().includes(search.toLowerCase()) ||
      icon.tags?.some((tag: string) => tag.toLowerCase().includes(search.toLowerCase()));

    // Version check
    const matchesVersion = version === "All Versions" || icon.version === version;
    
    // Category check (using the explicit category property)
    const matchesCategory = category === "All Categories" || icon.category === category;

    return matchesSearch && matchesVersion && matchesCategory;
  });

  return (
    <div className="p-8 max-w-full mx-auto">
      <div className="mb-12 space-y-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Icons Library</h2>
          <p className="text-sm text-slate-500">
            {filteredIcons.length} {filteredIcons.length === 1 ? 'icon' : 'icons'} available
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row lg:items-end gap-6">
          {/* Search Bar */}
          <div className="flex flex-col gap-1.5 flex-1">
             <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 ml-1">Search</label>
             <input
                type="text"
                placeholder="Search across all categories..."
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:ring-4 focus:ring-slate-900/5 focus:border-slate-900 outline-none transition-all text-sm shadow-sm"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
          </div>

          {/* Dynamic Dropdown Components */}
          <div className="flex flex-wrap gap-4">
            <FilterDropdown 
              label="Release"
              options={versionOptions} 
              selected={version} 
              onSelect={setVersion} 
            />
            <FilterDropdown 
              label="Category"
              options={categoryOptions} 
              selected={category} 
              onSelect={setCategory} 
            />
          </div>
        </div>
      </div>

      {/* Main Grid */}
      {filteredIcons.length > 0 ? (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(40px,1fr))] gap-2">
          {filteredIcons.map((icon: any) => (
            <IconItem
              key={icon.name}
              icon={icon}
              isSelected={selectedIcon?.name === icon.name}
              onClick={() => setSelectedIcon(icon)}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="py-32 text-center border-2 border-dashed border-slate-100 rounded-3xl">
          <p className="text-slate-400 text-sm italic">
            No icons found matching your current filters.
          </p>
          <button 
            onClick={() => {setSearch(""); setVersion("All Versions"); setCategory("All Categories");}}
            className="mt-4 text-xs font-semibold text-slate-900 underline underline-offset-4"
          >
            Clear all filters
          </button>
        </div>
      )}

      {selectedIcon && (
        <IconDrawer icon={selectedIcon} onClose={() => setSelectedIcon(null)} />
      )}
    </div>
  );
};

export default IconGallery;