import { Plus } from "lucide-react";
import { mockCards, mockDecks } from "../data/mockData";
import { useNavigate } from "react-router";

export function Decks() {
  const navigate = useNavigate();

  return (
    <div className="p-8 max-w-7xl mx-auto w-full space-y-8 pb-24">
      <header className="mb-10 flex flex-col md:flex-row gap-6 md:items-end justify-between">
        <div>
          <h1 className="text-3xl md:text-4xl font-sans font-light text-foreground uppercase tracking-[0.2em]">My Decks</h1>
          <p className="text-muted-foreground mt-2 font-medium">
            {mockDecks.length} deck{mockDecks.length !== 1 ? "s" : ""} ativos.
          </p>
        </div>
        <button
          onClick={() => navigate("/decks/new")}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
        >
          <Plus className="w-4 h-4" />
          CREATE NEW DECK
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockDecks.map(deck => {
          const previewCards = deck.cardList
            .slice(0, 5)
            .map(({ cardId }) => mockCards.find(c => c.id === cardId))
            .filter(Boolean) as typeof mockCards;

          return (
            <div
              key={deck.id}
              onClick={() => navigate(`/decks/${deck.id}`)}
              className="rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 group cursor-pointer flex flex-col overflow-hidden hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-0.5"
            >
              {/* Card strip — full cards side by side */}
              <div className="flex gap-1.5 p-3 bg-muted/40 border-b border-border">
                {previewCards.map(card => (
                  <div
                    key={card.id}
                    className="flex-1 rounded-md overflow-hidden border border-border/50"
                  >
                    <div className="aspect-[2.5/3.5]">
                      <img
                        src={card.image}
                        alt={card.name}
                        className="w-full h-full object-contain bg-muted"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Deck info */}
              <div className="p-5 flex flex-col gap-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="font-sans font-light tracking-wide text-xl text-foreground">{deck.name}</h4>
                    <p className="text-sm text-muted-foreground mt-0.5">{deck.commander}</p>
                  </div>
                  <div className="flex gap-1.5 bg-muted px-2 py-1 rounded-full border border-border flex-shrink-0">
                    {deck.colors.map(c => (
                      <div key={c} className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: `var(--mana-${c.toLowerCase()})` }} />
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm border-t border-border pt-4">
                  <div>
                    <p className="text-muted-foreground text-xs uppercase tracking-wider mb-0.5">Win Rate</p>
                    <p className="text-foreground font-medium">{deck.winRate}%</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs uppercase tracking-wider mb-0.5">Value</p>
                    <p className="text-accent font-medium">${deck.value.toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs uppercase tracking-wider mb-0.5">Cards</p>
                    <p className="text-foreground font-medium">{deck.cards}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs uppercase tracking-wider mb-0.5">Last Played</p>
                    <p className="text-foreground font-medium truncate">{deck.lastPlayed}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Create new deck */}
        <div
          onClick={() => navigate("/decks/new")}
          className="rounded-2xl bg-background border border-dashed border-border hover:border-primary transition-colors cursor-pointer flex flex-col items-center justify-center min-h-[360px] opacity-70 hover:opacity-100 group"
        >
          <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
            <Plus className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
          <p className="font-medium text-foreground tracking-wide">Build a New Deck</p>
          <p className="text-xs text-muted-foreground mt-2">Start from scratch or import</p>
        </div>
      </div>
    </div>
  );
}
