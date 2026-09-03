import { mockSets, mockCards } from "../data/mockData";
import { Compass } from "lucide-react";
import { useNavigate } from "react-router";

export function Sets() {
  const navigate = useNavigate();
  return (
    <div className="p-8 max-w-7xl mx-auto w-full space-y-8 pb-24">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-sans font-light text-foreground uppercase tracking-[0.2em]">Sets</h1>
        <p className="text-muted-foreground mt-2 font-medium">Track your set completion progress.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockSets.map(set => {
          const owned = mockCards.filter(c => c.set === set.name).reduce((acc, c) => acc + c.quantity, 0);
          const percentage = Math.round((owned / set.total) * 100);
          
          return (
            <div key={set.id} onClick={() => navigate(`/sets/${set.id}`)} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors group cursor-pointer">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h4 className="font-sans font-light tracking-wide text-2xl">{set.name}</h4>
                  <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{set.code}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-muted border border-border flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors">
                  <Compass className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Completion</span>
                  <span className="text-foreground font-medium">{percentage}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-1.5">
                  <div className="bg-primary h-1.5 rounded-full transition-all duration-1000" style={{ width: `${percentage}%` }}></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-border pt-4 text-sm">
                <div>
                  <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">Cards Owned</p>
                  <p className="text-foreground font-medium">{owned} <span className="text-muted-foreground font-normal">/ {set.total}</span></p>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">Missing Cost</p>
                  <p className="text-accent font-medium">${set.missingCost.toFixed(2)}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
