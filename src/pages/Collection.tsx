import { useState, useMemo, useRef, useEffect } from "react";
import { Search, LayoutGrid, List, ChevronDown, X } from "lucide-react";
import { mockCards } from "../data/mockData";

type FilterKey = "colors" | "rarities" | "types" | "sets";

const FILTER_DEFS: { key: FilterKey; label: string }[] = [
  { key: "colors", label: "Color" },
  { key: "rarities", label: "Rarity" },
  { key: "types", label: "Type" },
  { key: "sets", label: "Set" },
];

function getOptions(key: FilterKey): string[] {
  const vals = mockCards.map((c) => {
    if (key === "colors") return c.color;
    if (key === "rarities") return c.rarity;
    if (key === "types") return c.type;
    return c.set;
  });
  return [...new Set(vals)].sort();
}

export function Collection() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [search, setSearch] = useState("");
  const [activeFilters, setActiveFilters] = useState<Record<FilterKey, string[]>>({
    colors: [],
    rarities: [],
    types: [],
    sets: [],
  });
  const [openDropdown, setOpenDropdown] = useState<FilterKey | null>(null);

  const filteredCards = useMemo(() => {
    return mockCards.filter((card) => {
      if (search && !card.name.toLowerCase().includes(search.toLowerCase())) return false;
      if (activeFilters.colors.length && !activeFilters.colors.includes(card.color)) return false;
      if (activeFilters.rarities.length && !activeFilters.rarities.includes(card.rarity)) return false;
      if (activeFilters.types.length && !activeFilters.types.includes(card.type)) return false;
      if (activeFilters.sets.length && !activeFilters.sets.includes(card.set)) return false;
      return true;
    });
  }, [search, activeFilters]);

  const totalQuantity = filteredCards.reduce((acc, c) => acc + c.quantity, 0);
  const totalSets = new Set(filteredCards.map((c) => c.set)).size;

  function toggleOption(key: FilterKey, value: string) {
    setActiveFilters((prev) => {
      const current = prev[key];
      return {
        ...prev,
        [key]: current.includes(value) ? current.filter((v) => v !== value) : [...current, value],
      };
    });
  }

  function clearFilter(key: FilterKey) {
    setActiveFilters((prev) => ({ ...prev, [key]: [] }));
  }

  const activeCount = Object.values(activeFilters).flat().length;

  return (
    <div className="p-8 max-w-7xl mx-auto w-full space-y-8 pb-24">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-sans font-light text-foreground uppercase tracking-[0.2em]">My Collection</h1>
        <p className="text-muted-foreground mt-2 font-medium">
          {totalQuantity} card{totalQuantity !== 1 ? "s" : ""} across {totalSets} set{totalSets !== 1 ? "s" : ""}.
          {activeCount > 0 && <span className="ml-2 text-xs text-accent">({activeCount} filter{activeCount !== 1 ? "s" : ""} active)</span>}
        </p>
      </header>

      <div className="flex flex-col gap-4">
        {/* Toolbar */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-muted-foreground" />
            </div>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search cards..."
              className="w-full pl-10 pr-4 py-2 bg-card border border-border rounded-md text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
            />
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto flex-wrap">
            <div className="flex gap-2 flex-wrap">
              {FILTER_DEFS.map(({ key, label }) => (
                <FilterDropdown
                  key={key}
                  label={label}
                  options={getOptions(key)}
                  selected={activeFilters[key]}
                  isOpen={openDropdown === key}
                  onToggleOpen={() => setOpenDropdown((prev) => (prev === key ? null : key))}
                  onClose={() => setOpenDropdown(null)}
                  onToggleOption={(v) => toggleOption(key, v)}
                  onClear={() => clearFilter(key)}
                />
              ))}
              {activeCount > 0 && (
                <button
                  onClick={() => setActiveFilters({ colors: [], rarities: [], types: [], sets: [] })}
                  className="px-3 py-1.5 text-xs font-medium text-destructive border border-destructive/30 rounded-md hover:bg-destructive/10 transition-colors flex items-center gap-1"
                >
                  <X className="w-3 h-3" /> Clear all
                </button>
              )}
            </div>

            <div className="flex bg-card border border-border rounded-md p-1 ml-auto md:ml-0">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-1.5 rounded-sm ${viewMode === "grid" ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-1.5 rounded-sm ${viewMode === "list" ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {filteredCards.length === 0 ? (
          <div className="py-24 text-center text-muted-foreground">
            <p className="font-light tracking-wide">No cards match the current filters.</p>
          </div>
        ) : viewMode === "grid" ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {filteredCards.map((card) => (
              <div key={card.id} className="group relative rounded-xl bg-card border border-border overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-pointer">
                <div className="aspect-[2.5/3.5] bg-muted w-full relative flex items-center justify-center border-b border-border">
                  <img src={card.image} alt={card.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute top-2 right-2 px-1.5 py-0.5 bg-background/80 backdrop-blur-sm rounded text-[10px] font-medium text-foreground border border-border">
                    {card.quantity}x
                  </div>
                </div>
                <div className="p-3">
                  <h4 className="font-sans text-sm text-foreground font-medium truncate">{card.name}</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">{card.set} • {card.rarity}</p>
                  <p className="text-accent text-sm font-medium mt-2">${card.value.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full border border-border rounded-xl bg-card overflow-hidden">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-muted-foreground uppercase bg-muted/50 border-b border-border">
                <tr>
                  <th className="px-6 py-3 font-medium">Card</th>
                  <th className="px-6 py-3 font-medium">Set</th>
                  <th className="px-6 py-3 font-medium">Rarity</th>
                  <th className="px-6 py-3 font-medium">Type</th>
                  <th className="px-6 py-3 font-medium">Qty</th>
                  <th className="px-6 py-3 font-medium text-right">Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filteredCards.map((card) => (
                  <tr key={card.id} className="hover:bg-muted/50 transition-colors cursor-pointer">
                    <td className="px-6 py-4 font-medium text-foreground">{card.name}</td>
                    <td className="px-6 py-4 text-muted-foreground">{card.set}</td>
                    <td className="px-6 py-4 text-muted-foreground">{card.rarity}</td>
                    <td className="px-6 py-4 text-muted-foreground">{card.type}</td>
                    <td className="px-6 py-4 text-muted-foreground">{card.quantity}</td>
                    <td className="px-6 py-4 text-accent text-right">${card.value.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

function FilterDropdown({
  label,
  options,
  selected,
  isOpen,
  onToggleOpen,
  onClose,
  onToggleOption,
  onClear,
}: {
  label: string;
  options: string[];
  selected: string[];
  isOpen: boolean;
  onToggleOpen: () => void;
  onClose: () => void;
  onToggleOption: (v: string) => void;
  onClear: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen, onClose]);

  const hasActive = selected.length > 0;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={onToggleOpen}
        className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border transition-colors ${
          hasActive
            ? "bg-accent/10 border-accent/40 text-accent"
            : "bg-card border-border text-muted-foreground hover:bg-muted"
        }`}
      >
        {label}
        {hasActive && <span className="bg-accent text-background rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold">{selected.length}</span>}
        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 z-50 bg-popover border border-border rounded-lg shadow-xl min-w-[150px] p-1">
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => onToggleOption(opt)}
              className={`w-full flex items-center gap-2 px-3 py-2 text-xs rounded-md transition-colors text-left ${
                selected.includes(opt)
                  ? "bg-accent/10 text-accent"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              <span className={`w-3.5 h-3.5 rounded border flex items-center justify-center flex-shrink-0 ${selected.includes(opt) ? "bg-accent border-accent" : "border-border"}`}>
                {selected.includes(opt) && (
                  <svg viewBox="0 0 10 10" className="w-2.5 h-2.5 text-background fill-current"><path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                )}
              </span>
              {opt}
            </button>
          ))}
          {selected.length > 0 && (
            <>
              <div className="border-t border-border my-1" />
              <button onClick={onClear} className="w-full px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors text-left">
                Clear
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
