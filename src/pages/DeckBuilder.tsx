import { useState, useMemo } from "react";
import { Search, Info, Plus, Minus, ArrowLeft, LayoutGrid, List } from "lucide-react";
import { mockCards, mockDecks } from "../data/mockData";
import { useNavigate, useParams } from "react-router";

export function DeckBuilder() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const existingDeck = useMemo(() => id ? mockDecks.find(d => d.id === id) ?? null : null, [id]);

  const initialCards = useMemo(() => {
    if (!existingDeck) return [];
    return existingDeck.cardList.flatMap(({ cardId, quantity }) => {
      const card = mockCards.find(c => c.id === cardId);
      return card ? [{ card, quantity }] : [];
    });
  }, [existingDeck]);

  const [deckName, setDeckName] = useState(existingDeck?.name ?? "New Deck");
  const [searchQuery, setSearchQuery] = useState("");
  const [deckCards, setDeckCards] = useState<Array<{card: any, quantity: number}>>(initialCards);
  const [deckView, setDeckView] = useState<"grid" | "list">("grid");

  const filteredCards = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return [];
    return mockCards.filter(c => c.name.toLowerCase().includes(q) || c.type.toLowerCase().includes(q));
  }, [searchQuery]);

  const addCard = (card: any) => {
    setDeckCards(prev => {
      const existing = prev.find(c => c.card.id === card.id);
      if (existing) {
        return prev.map(c => c.card.id === card.id ? { ...c, quantity: c.quantity + 1 } : c);
      }
      return [...prev, { card, quantity: 1 }];
    });
  };

  const removeCard = (cardId: string) => {
    setDeckCards(prev => {
      const existing = prev.find(c => c.card.id === cardId);
      if (existing && existing.quantity > 1) {
        return prev.map(c => c.card.id === cardId ? { ...c, quantity: c.quantity - 1 } : c);
      }
      return prev.filter(c => c.card.id !== cardId);
    });
  };

  const totalCards = deckCards.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="flex flex-col h-full bg-background overflow-hidden">
      <header className="flex-shrink-0 flex items-center justify-between px-6 md:px-8 py-4 border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/decks')} className="p-2 -ml-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1
              className="text-xl md:text-2xl font-sans font-light text-foreground uppercase tracking-[0.2em] outline-none"
              contentEditable
              suppressContentEditableWarning
              onBlur={e => setDeckName(e.currentTarget.textContent ?? "")}
            >
              {deckName}
            </h1>
            <p className="text-xs text-muted-foreground mt-0.5">
              {existingDeck?.commander && <span className="mr-2">{existingDeck.commander} •</span>}
              {totalCards} Cards
            </p>
          </div>
        </div>
        <button className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-md hover:bg-primary/90 transition-colors">
          SAVE DECK
        </button>
      </header>

      <div className="flex-1 flex flex-col md:flex-row min-h-0">
        {/* Collection Panel */}
        <div className="w-full md:w-1/3 flex flex-col border-r border-border bg-background">
          <div className="p-4 border-b border-border bg-card/30">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-muted-foreground" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search collection..."
                className="w-full pl-9 pr-4 py-2 bg-muted/50 border border-border rounded-md text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-3 custom-scrollbar">
            {!searchQuery.trim() ? (
              <div className="h-full flex flex-col items-center justify-center text-center opacity-40 p-8 pt-16">
                <Search className="w-8 h-8 text-muted-foreground mb-3" />
                <p className="text-sm font-medium text-foreground">Search your collection</p>
                <p className="text-xs text-muted-foreground mt-1">Type a card name to find it.</p>
              </div>
            ) : filteredCards.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center opacity-40 p-8 pt-16">
                <Search className="w-8 h-8 text-muted-foreground mb-3" />
                <p className="text-sm font-medium text-foreground">No cards found</p>
                <p className="text-xs text-muted-foreground mt-1">Try a different search term.</p>
              </div>
            ) : (
            <div className="grid grid-cols-2 gap-3">
            {filteredCards.map(card => {
              const inDeck = deckCards.find(d => d.card.id === card.id);
              return (
                <div
                  key={card.id}
                  onClick={() => addCard(card)}
                  className={`group relative rounded-xl overflow-hidden border-2 cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${
                    inDeck ? "border-primary/60 shadow-md shadow-primary/10" : "border-border hover:border-primary/40"
                  }`}
                >
                  <div className="aspect-[2.5/3.5] bg-muted w-full">
                    <img
                      src={card.image}
                      alt={card.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {/* Add overlay */}
                  <div className="absolute inset-0 bg-primary/20 backdrop-blur-[1px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-xl">
                    <div className="bg-primary text-primary-foreground rounded-full p-2.5 shadow-xl">
                      <Plus className="w-5 h-5" />
                    </div>
                  </div>
                  {/* Quantity badge */}
                  {inDeck && (
                    <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow leading-none">
                      {inDeck.quantity}x
                    </div>
                  )}
                </div>
              );
            })}
            </div>
            )}
          </div>
        </div>

        {/* Deck Panel */}
        <div className="w-full md:w-1/3 flex flex-col border-r border-border bg-card/20">
          <div className="p-4 border-b border-border bg-card/30 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Main Deck</h3>
              <span className="text-xs font-medium text-primary px-2 py-0.5 bg-primary/10 rounded-full">{totalCards}/100</span>
            </div>
            <div className="flex bg-muted rounded-md p-0.5">
              <button
                onClick={() => setDeckView("grid")}
                className={`p-1.5 rounded-sm transition-colors ${deckView === "grid" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setDeckView("list")}
                className={`p-1.5 rounded-sm transition-colors ${deckView === "list" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
              >
                <List className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar">
            {deckCards.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center opacity-50 p-8">
                <Info className="w-8 h-8 text-muted-foreground mb-3" />
                <p className="text-sm font-medium text-foreground">Deck is empty</p>
                <p className="text-xs text-muted-foreground mt-1">Click cards in your collection to add them.</p>
              </div>
            ) : deckView === "grid" ? (
              <div className="p-3 grid grid-cols-3 gap-2">
                {deckCards.map(item => (
                  <div key={item.card.id} className="group relative rounded-lg overflow-hidden border border-border cursor-pointer hover:border-primary/60 transition-colors">
                    <div className="aspect-[2.5/3.5] bg-muted w-full relative">
                      <img src={item.card.image} alt={item.card.name} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                      {/* Quantity badge */}
                      <div className="absolute top-1 left-1 bg-background/90 backdrop-blur-sm text-foreground text-[10px] font-bold px-1.5 py-0.5 rounded border border-border leading-none">
                        {item.quantity}x
                      </div>
                      {/* Controls overlay */}
                      <div className="absolute inset-0 bg-background/60 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => removeCard(item.card.id)}
                          className="p-1.5 rounded-full bg-red-500/20 hover:bg-red-500/40 text-red-400 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => addCard(item.card)}
                          className="p-1.5 rounded-full bg-primary/20 hover:bg-primary/40 text-primary transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                    <div className="absolute bottom-0 inset-x-0 p-1.5">
                      <p className="text-[9px] text-white font-medium truncate leading-tight drop-shadow-md">{item.card.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-4 space-y-1">
                {deckCards.map(item => (
                  <div key={item.card.id} className="flex items-center gap-3 p-2 rounded-md hover:bg-muted/50 transition-colors group cursor-default">
                    <img src={item.card.image} alt={item.card.name} className="w-8 h-11 object-cover rounded border border-border flex-shrink-0" />
                    <div className="flex-1 overflow-hidden">
                      <p className="text-xs text-foreground font-medium truncate">{item.card.name}</p>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-widest truncate">{item.card.type}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <button onClick={() => removeCard(item.card.id)} className="p-1 text-muted-foreground hover:text-red-400 hover:bg-red-400/10 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-medium text-muted-foreground w-5 text-center">{item.quantity}x</span>
                      <button onClick={() => addCard(item.card)} className="p-1 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Analysis Panel */}
        <div className="w-full md:w-1/3 flex flex-col bg-background">
          <div className="p-4 border-b border-border bg-card/30">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Analysis</h3>
          </div>
          <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
            {totalCards === 0 ? (
              <p className="text-sm text-muted-foreground text-center italic mt-10">Add cards to view analysis.</p>
            ) : (
              <>
                <div>
                  <h4 className="text-[10px] uppercase tracking-wider text-muted-foreground mb-3">Color Distribution</h4>
                  <div className="h-2 w-full bg-muted rounded-full flex overflow-hidden">
                    <div className="h-full bg-[var(--mana-blue)]" style={{ width: '40%' }}></div>
                    <div className="h-full bg-[var(--mana-black)]" style={{ width: '35%' }}></div>
                    <div className="h-full bg-[var(--mana-red)]" style={{ width: '25%' }}></div>
                  </div>
                </div>

                <div>
                  <h4 className="text-[10px] uppercase tracking-wider text-muted-foreground mb-3">Mana Curve</h4>
                  <div className="flex items-end gap-1 h-24 mt-2">
                    {[10, 25, 45, 30, 15, 5, 2].map((height, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-2">
                        <div className="w-full bg-primary/40 rounded-t-sm hover:bg-primary transition-colors cursor-pointer" style={{ height: `${height}%` }}></div>
                        <span className="text-[10px] text-muted-foreground">{i}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
