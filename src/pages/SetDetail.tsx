import { useMemo } from "react";
import { useParams, useNavigate } from "react-router";
import { ArrowLeft, Compass } from "lucide-react";
import { mockSets, mockCards } from "../data/mockData";

export function SetDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const set = useMemo(() => mockSets.find((s) => s.id === id) ?? null, [id]);
  const ownedCards = useMemo(
    () => (set ? mockCards.filter((c) => c.set === set.name) : []),
    [set]
  );

  if (!set) {
    return (
      <div className="p-8 max-w-7xl mx-auto w-full">
        <p className="text-muted-foreground">Set not found.</p>
      </div>
    );
  }

  const totalOwned = ownedCards.reduce((acc, c) => acc + c.quantity, 0);
  const percentage = Math.round((totalOwned / set.total) * 100);

  return (
    <div className="p-8 max-w-7xl mx-auto w-full space-y-8 pb-24">
      <header className="mb-10">
        <button
          onClick={() => navigate("/sets")}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Sets
        </button>

        <div className="flex items-start justify-between gap-6 flex-wrap">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <div className="w-10 h-10 rounded-full bg-muted border border-border flex items-center justify-center text-muted-foreground">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground border border-border rounded px-2 py-0.5">
                {set.code}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-sans font-light text-foreground uppercase tracking-[0.2em] mt-3">
              {set.name}
            </h1>
            <p className="text-muted-foreground mt-2 font-medium">
              {totalOwned} of {set.total} cards collected
            </p>
          </div>

          <div className="flex gap-6 text-center">
            <div className="p-5 rounded-2xl bg-card border border-border min-w-[110px]">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Completion</p>
              <p className="text-2xl font-sans font-light text-foreground">{percentage}%</p>
            </div>
            <div className="p-5 rounded-2xl bg-card border border-border min-w-[110px]">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Missing Cost</p>
              <p className="text-2xl font-sans font-light text-accent">${set.missingCost.toFixed(2)}</p>
            </div>
            <div className="p-5 rounded-2xl bg-card border border-border min-w-[110px]">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Copies Owned</p>
              <p className="text-2xl font-sans font-light text-foreground">{totalOwned}</p>
            </div>
          </div>
        </div>

        <div className="mt-6 w-full bg-muted rounded-full h-1.5">
          <div
            className="bg-primary h-1.5 rounded-full transition-all duration-1000"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </header>

      {ownedCards.length === 0 ? (
        <div className="py-24 text-center">
          <p className="text-muted-foreground font-light tracking-wide">
            No cards from this set in your collection yet.
          </p>
          <button
            onClick={() => navigate("/explore")}
            className="mt-4 px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Explore cards
          </button>
        </div>
      ) : (
        <>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Cards in Collection ({ownedCards.length} unique)
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {ownedCards.map((card) => (
              <div
                key={card.id}
                className="group relative rounded-xl bg-card border border-border overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-[2.5/3.5] bg-muted w-full relative flex items-center justify-center border-b border-border">
                  <img src={card.image} alt={card.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60" />
                  <div className="absolute top-2 right-2 px-1.5 py-0.5 bg-background/80 backdrop-blur-sm rounded text-[10px] font-medium text-foreground border border-border">
                    {card.quantity}x
                  </div>
                </div>
                <div className="p-3">
                  <h4 className="font-sans text-sm text-foreground font-medium truncate">{card.name}</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">{card.rarity}</p>
                  <p className="text-accent text-sm font-medium mt-2">${card.value.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
