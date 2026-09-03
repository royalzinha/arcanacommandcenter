import { useState } from "react";
import { mockCards } from "../data/mockData";
import { Bookmark, ShoppingCart } from "lucide-react";

export function Wishlist() {
  const [wishlistIds, setWishlistIds] = useState<string[]>(
    mockCards.slice(0, 4).map((c) => c.id)
  );

  const wishlistCards = mockCards.filter((c) => wishlistIds.includes(c.id));
  const totalCost = wishlistCards.reduce((acc, card) => acc + card.value, 0);

  function removeFromWishlist(id: string) {
    setWishlistIds((prev) => prev.filter((x) => x !== id));
  }

  return (
    <div className="p-8 max-w-7xl mx-auto w-full space-y-8 pb-24">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-sans font-light text-foreground uppercase tracking-[0.2em]">Wishlist</h1>
        <p className="text-muted-foreground mt-2 font-medium">Complete your collection.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="p-6 rounded-2xl bg-card border border-border">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Cards Wanted</h3>
          <div className="text-3xl font-sans font-light tracking-wide text-foreground">{wishlistCards.length}</div>
        </div>
        <div className="p-6 rounded-2xl bg-card border border-border">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Estimated Cost</h3>
          <div className="text-3xl font-sans font-light tracking-wide text-accent">${totalCost.toFixed(2)}</div>
        </div>
        <div className="p-6 rounded-2xl bg-card border border-border">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Acquired</h3>
          <div className="text-3xl font-sans font-light tracking-wide text-foreground">12</div>
        </div>
        <div className="p-6 rounded-2xl bg-card border border-border flex flex-col justify-center">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Progress</h3>
          <div className="w-full bg-muted rounded-full h-2 mt-2">
            <div className="bg-primary h-2 rounded-full" style={{ width: '14%' }}></div>
          </div>
          <p className="text-right text-xs text-muted-foreground mt-2">14%</p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {wishlistCards.map(card => (
          <div key={card.id} className="group relative rounded-xl bg-card border border-border overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <div className="aspect-[2.5/3.5] bg-muted w-full relative flex items-center justify-center border-b border-border">
              <img src={card.image} alt={card.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60"></div>
              <button
                onClick={() => removeFromWishlist(card.id)}
                title="Remover da wishlist"
                className="absolute top-2 right-2 p-1.5 bg-background/80 backdrop-blur-sm rounded-md border border-border hover:border-destructive hover:text-destructive transition-colors"
              >
                <Bookmark className="w-4 h-4 fill-accent text-accent" />
              </button>
            </div>
            <div className="p-3">
              <h4 className="font-sans text-sm text-foreground font-medium truncate">{card.name}</h4>
              <p className="text-xs text-muted-foreground mt-0.5">{card.set} • {card.rarity}</p>
              <div className="flex justify-between items-center mt-3">
                <p className="text-accent text-sm font-medium">${card.value.toFixed(2)}</p>
                <button className="text-xs flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
                  <ShoppingCart className="w-3 h-3" /> Buy
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
