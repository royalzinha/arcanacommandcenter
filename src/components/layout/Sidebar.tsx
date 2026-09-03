import { NavLink } from "react-router";
import { LayoutDashboard, Library, Layers, LineChart, Bookmark, Search, Compass, User, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { group: "COMMAND CENTER", items: [
    { name: "Dashboard", to: "/", icon: LayoutDashboard },
    { name: "Collection", to: "/collection", icon: Library },
    { name: "Decks", to: "/decks", icon: Layers },
    { name: "Market", to: "/market", icon: LineChart },
    { name: "Wishlist", to: "/wishlist", icon: Bookmark },
  ]},
  { group: "DISCOVER", items: [
    { name: "Sets", to: "/sets", icon: Compass },
    { name: "Explore", to: "/explore", icon: Search },
  ]},
  { group: "ACCOUNT", items: [
    { name: "Profile", to: "/profile", icon: User },
    { name: "Settings", to: "/settings", icon: Settings },
  ]}
];

export function Sidebar({ isMobile = false }: { isMobile?: boolean }) {
  return (
    <aside className={cn(
      "border-r border-border bg-background flex flex-col h-full flex-shrink-0 transition-all",
      isMobile ? "w-full border-r-0" : "w-64"
    )}>
      {!isMobile && (
        <div className="p-6 pb-2">
          <h1 className="text-2xl font-sans font-light tracking-[0.25em] text-foreground">ARCANA</h1>
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">Planeswalker Command Center</p>
        </div>
      )}
      
      <nav className="flex-1 overflow-y-auto px-4 py-6 flex flex-col gap-8 custom-scrollbar">
        {NAV_ITEMS.map((group) => (
          <div key={group.group}>
            <h3 className="text-[10px] font-semibold text-muted-foreground/60 mb-3 px-2 uppercase tracking-[0.2em]">
              {group.group}
            </h3>
            <ul className="space-y-1.5">
              {group.items.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) => cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group relative overflow-hidden",
                      isActive 
                        ? "text-primary bg-primary/5" 
                        : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                    )}
                  >
                    {({ isActive }) => (
                      <>
                        {/* Active indicator line */}
                        {isActive && (
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1/2 bg-primary rounded-r-full" />
                        )}
                        <item.icon className={cn(
                          "w-4 h-4 transition-colors", 
                          isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                        )} />
                        {item.name}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <div className="p-4 border-t border-border mt-auto bg-card/30">
        <div className="flex items-center gap-3 px-2">
          <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center border border-border shadow-inner">
            <User className="w-4 h-4 text-muted-foreground" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground tracking-wide">Cecília</p>
            <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Dimir Collector</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
