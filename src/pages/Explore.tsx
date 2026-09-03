import { useState, useEffect } from "react";
import { Search, Loader2, X, Bookmark, BookmarkCheck, Layers, ShoppingCart, Trash2, ChevronLeft, Check } from "lucide-react";
import { mockDecks, mockWishlists } from "../data/mockData";

export function Explore() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const [cartIds, setCartIds] = useState<string[]>([]);
  // card id -> deck ids
  const [cardDecks, setCardDecks] = useState<Record<string, string[]>>({});
  // card id -> wishlist ids
  const [cardWishlists, setCardWishlists] = useState<Record<string, string[]>>({});

  // Drawer state
  const [selectedCard, setSelectedCard] = useState<any | null>(null);
  const [actionView, setActionView] = useState<"default" | "decks" | "wishlists">("default");

  function openCard(card: any) {
    setSelectedCard(card);
    setActionView("default");
  }

  function toggleCartAction(id: string) {
    setCartIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  }

  function toggleDeck(deckId: string) {
    if (!selectedCard) return;
    setCardDecks(prev => {
      const current = prev[selectedCard.id] ?? [];
      return {
        ...prev,
        [selectedCard.id]: current.includes(deckId)
          ? current.filter(x => x !== deckId)
          : [...current, deckId],
      };
    });
  }

  function toggleWishlist(listId: string) {
    if (!selectedCard) return;
    setCardWishlists(prev => {
      const current = prev[selectedCard.id] ?? [];
      return {
        ...prev,
        [selectedCard.id]: current.includes(listId)
          ? current.filter(x => x !== listId)
          : [...current, listId],
      };
    });
  }

  // Debounce the search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);
    return () => clearTimeout(timer);
  }, [query]);

  // Fetch from Scryfall API
  useEffect(() => {
    async function searchCards() {
      setIsLoading(true);
      setError("");

      try {
        const endpoint = debouncedQuery.trim() 
          ? `https://api.scryfall.com/cards/search?q=${encodeURIComponent(debouncedQuery)}`
          : `https://api.scryfall.com/cards/search?q=is:commander+game:paper&order=edhrec&dir=asc`;

        const response = await fetch(endpoint);
        
        if (!response.ok) {
          if (response.status === 404) {
            setResults([]);
            throw new Error("No cards found.");
          }
          throw new Error("Failed to fetch cards");
        }

        const data = await response.json();
        
        const formattedCards = data.data
          .filter((c: any) => c.image_uris && c.image_uris.normal)
          .slice(0, 24)
          .map((c: any) => ({
            id: c.id,
            name: c.name,
            set: c.set_name,
            image: c.image_uris.normal,
            price: c.prices.usd || "0.00",
            type: c.type_line,
            rarity: c.rarity,
            manaCost: c.mana_cost
          }));

        setResults(formattedCards);
      } catch (err: any) {
        if (debouncedQuery.trim()) {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    searchCards();
  }, [debouncedQuery]);

  const toggleAction = (id: string, list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>) => {
    if (list.includes(id)) {
      setList(list.filter(itemId => itemId !== id));
    } else {
      setList([...list, id]);
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto w-full space-y-8 pb-24 relative">
      <header className="mb-10 text-center max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-sans font-light text-foreground uppercase tracking-[0.2em] mb-4">Explore the Multiverse</h1>
        <div className="relative w-full shadow-lg">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            {isLoading ? (
              <Loader2 className="h-5 w-5 text-primary animate-spin" />
            ) : (
              <Search className="h-5 w-5 text-muted-foreground" />
            )}
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search any MTG card (e.g., 'Black Lotus', 't:dragon c:r')..."
            className="w-full pl-12 pr-4 py-4 bg-card border border-border rounded-xl text-base text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
        </div>
      </header>

      <section>
        {error && results.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            <p className="font-light tracking-wide">{error}</p>
          </div>
        ) : (
          <div>
            <h2 className="text-lg font-sans font-light uppercase tracking-wider text-muted-foreground mb-6">
              {debouncedQuery.trim() ? "Search Results" : "Trending Commanders"}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {results.map(card => (
                <div 
                  key={card.id} 
                  onClick={() => openCard(card)}
                  className="group relative rounded-xl bg-card border border-border overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:border-primary/50 transition-all duration-300 cursor-pointer"
                >
                  <div className="aspect-[2.5/3.5] bg-muted w-full relative flex items-center justify-center border-b border-border">
                    <img src={card.image} alt={card.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-3">
                    <h4 className="font-sans text-sm text-foreground font-medium truncate">{card.name}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5 truncate">{card.set}</p>
                    <p className="text-accent text-xs font-medium mt-2">${card.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Side Drawer for Card Details and Actions */}
      {selectedCard && (
        <>
          <div 
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 transition-opacity"
            onClick={() => setSelectedCard(null)}
          />
          <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-card border-l border-border z-50 p-6 flex flex-col shadow-2xl overflow-y-auto transform transition-transform duration-300">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-sans font-light tracking-wide text-foreground">{selectedCard.name}</h2>
                <p className="text-sm text-muted-foreground mt-1">{selectedCard.set} • <span className="capitalize">{selectedCard.rarity}</span></p>
              </div>
              <button 
                onClick={() => setSelectedCard(null)}
                className="p-2 bg-muted rounded-full text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-[2.5/3.5] w-full max-w-[280px] mx-auto rounded-xl overflow-hidden shadow-xl mb-8">
              <img src={selectedCard.image} alt={selectedCard.name} className="w-full h-full object-cover" />
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="text-sm text-muted-foreground">Market Price</span>
                <span className="text-lg text-accent font-medium">${selectedCard.price}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="text-sm text-muted-foreground">Type</span>
                <span className="text-sm text-foreground truncate max-w-[200px] text-right">{selectedCard.type}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="text-sm text-muted-foreground">Mana Cost</span>
                <span className="text-sm text-foreground">{selectedCard.manaCost || "None"}</span>
              </div>
            </div>

            {/* Dynamic Actions Area */}
            <div className="mt-auto pt-4">
              {actionView === 'default' && (
                <div className="space-y-3">
                  <button 
                    onClick={() => setActionView('decks')}
                    className="w-full py-3 px-4 rounded-lg flex items-center justify-center gap-2 text-sm font-medium transition-colors border bg-primary text-primary-foreground border-transparent hover:bg-primary/90"
                  >
                    <Layers className="w-4 h-4" />
                    Add to Deck...
                  </button>

                  <div className="grid grid-cols-2 gap-3">
                    <button 
                      onClick={() => setActionView('wishlists')}
                      className={`py-3 px-4 rounded-lg flex items-center justify-center gap-2 text-sm font-medium transition-colors border ${
                        (cardWishlists[selectedCard.id]?.length > 0)
                          ? "bg-accent/10 border-accent/30 text-accent hover:bg-accent/20"
                          : "bg-background border-border text-foreground hover:bg-muted"
                      }`}
                    >
                      {(cardWishlists[selectedCard.id]?.length > 0) ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                      Wishlist...
                    </button>

                    <button 
                      onClick={() => toggleCartAction(selectedCard.id)}
                      className={`py-3 px-4 rounded-lg flex items-center justify-center gap-2 text-sm font-medium transition-colors border ${
                        cartIds.includes(selectedCard.id)
                          ? "bg-green-500/10 border-green-500/30 text-green-500 hover:bg-red-500/10 hover:text-red-500 hover:border-red-500/30"
                          : "bg-background border-border text-foreground hover:bg-muted"
                      }`}
                    >
                      {cartIds.includes(selectedCard.id) ? <Trash2 className="w-4 h-4" /> : <ShoppingCart className="w-4 h-4" />}
                      {cartIds.includes(selectedCard.id) ? "Remove" : "Buy"}
                    </button>
                  </div>
                </div>
              )}

              {actionView === 'decks' && (
                <div className="space-y-3 animate-in slide-in-from-right-4 duration-200">
                  <button 
                    onClick={() => setActionView('default')}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-2"
                  >
                    <ChevronLeft className="w-4 h-4" /> Back
                  </button>
                  <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Select Decks</h4>
                  <div className="space-y-2 overflow-y-auto max-h-[200px] custom-scrollbar pr-2">
                    {mockDecks.map(deck => {
                      const isSelected = cardDecks[selectedCard.id]?.includes(deck.id);
                      return (
                        <button 
                          key={deck.id} 
                          onClick={() => toggleDeck(deck.id)}
                          className={`w-full flex items-center justify-between p-3 rounded-lg border transition-all ${
                            isSelected 
                              ? 'border-primary bg-primary/10 text-foreground' 
                              : 'border-border bg-background hover:border-primary/50 text-muted-foreground hover:text-foreground'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <Layers className={`w-4 h-4 ${isSelected ? 'text-primary' : ''}`} />
                            <span className="text-sm font-medium truncate">{deck.name}</span>
                          </div>
                          {isSelected && <Check className="w-4 h-4 text-primary" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {actionView === 'wishlists' && (
                <div className="space-y-3 animate-in slide-in-from-right-4 duration-200">
                  <button 
                    onClick={() => setActionView('default')}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-2"
                  >
                    <ChevronLeft className="w-4 h-4" /> Back
                  </button>
                  <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Select Wishlists</h4>
                  <div className="space-y-2 overflow-y-auto max-h-[200px] custom-scrollbar pr-2">
                    {mockWishlists.map(list => {
                      const isSelected = cardWishlists[selectedCard.id]?.includes(list.id);
                      return (
                        <button 
                          key={list.id} 
                          onClick={() => toggleWishlist(list.id)}
                          className={`w-full flex items-center justify-between p-3 rounded-lg border transition-all ${
                            isSelected 
                              ? 'border-accent bg-accent/10 text-foreground' 
                              : 'border-border bg-background hover:border-accent/50 text-muted-foreground hover:text-foreground'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <Bookmark className={`w-4 h-4 ${isSelected ? 'text-accent' : ''}`} />
                            <span className="text-sm font-medium truncate">{list.name}</span>
                          </div>
                          {isSelected && <Check className="w-4 h-4 text-accent" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
