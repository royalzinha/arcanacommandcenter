import { useState, useMemo } from "react";
import { User, Trophy, Shield, Settings, Camera, X, Search } from "lucide-react";
import { useNavigate } from "react-router";
import { mockAchievements, mockCards, mockDecks } from "../data/mockData";

const totalCards = mockCards.reduce((acc, c) => acc + c.quantity, 0);
const uniqueSets = new Set(mockCards.map(c => c.set)).size;

const FEATURED_IDS = ["8", "17", "27", "50", "77", "176"];

function artUrl(card: (typeof mockCards)[0]) {
  return card.image.includes("format=image") ? card.image + "&version=art_crop" : card.image;
}

export function Profile() {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const featuredCards = useMemo(
    () => FEATURED_IDS.map(id => mockCards.find(c => c.id === id)).filter(Boolean) as typeof mockCards,
    []
  );

  const searchResults = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return [];
    return mockCards.filter(c => c.name.toLowerCase().includes(q));
  }, [searchQuery]);

  const showSearch = searchQuery.trim().length > 0;
  const displayCards = showSearch ? searchResults : featuredCards;

  function selectCard(card: (typeof mockCards)[0]) {
    setProfileImage(artUrl(card));
    setPickerOpen(false);
    setSearchQuery("");
  }

  return (
    <div className="p-8 max-w-7xl mx-auto w-full space-y-12 pb-24">
      {/* Avatar Picker Modal */}
      {pickerOpen && (
        <>
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
            onClick={() => { setPickerOpen(false); setSearchQuery(""); }}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="bg-card border border-border rounded-2xl shadow-2xl w-full max-w-lg flex flex-col max-h-[80vh]">
              <div className="flex items-center justify-between p-5 border-b border-border flex-shrink-0">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Choose Card Art</h3>
                <button
                  onClick={() => { setPickerOpen(false); setSearchQuery(""); }}
                  className="p-1.5 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Search */}
              <div className="p-4 border-b border-border flex-shrink-0">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Search by card name..."
                    autoFocus
                    className="w-full pl-9 pr-4 py-2 bg-muted/50 border border-border rounded-md text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                  />
                </div>
                {!showSearch && (
                  <p className="text-[11px] text-muted-foreground mt-2 px-0.5">Suggestions — or type to search all cards</p>
                )}
              </div>

              <div className="overflow-y-auto p-4 custom-scrollbar">
                {showSearch && searchResults.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-12 opacity-50">
                    <Search className="w-7 h-7 text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground">No cards found</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-3 gap-3">
                    {displayCards.map((card) => {
                      const url = artUrl(card);
                      const isSelected = profileImage === url;
                      return (
                        <button
                          key={card.id}
                          onClick={() => selectCard(card)}
                          className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all hover:brightness-110 ${
                            isSelected ? "border-accent shadow-lg shadow-accent/20" : "border-border hover:border-primary/50"
                          }`}
                        >
                          <img src={url} alt={card.name} className="w-full h-full object-cover" />
                          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-background/90 to-transparent p-1.5">
                            <p className="text-[9px] text-white font-medium truncate leading-tight">{card.name}</p>
                          </div>
                          {isSelected && (
                            <div className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-accent flex items-center justify-center">
                              <svg viewBox="0 0 10 10" className="w-2.5 h-2.5 text-background fill-none stroke-current" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M1.5 5l2.5 2.5 4.5-4.5" />
                              </svg>
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {profileImage && (
                <div className="p-4 border-t border-border flex-shrink-0">
                  <button
                    onClick={() => { setProfileImage(null); setPickerOpen(false); setSearchQuery(""); }}
                    className="w-full py-2 text-xs text-muted-foreground hover:text-foreground border border-border rounded-md hover:bg-muted transition-colors"
                  >
                    Remover foto
                  </button>
                </div>
              )}
            </div>
          </div>
        </>
      )}

      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 border-b border-border pb-12">
        <div className="relative group cursor-pointer" onClick={() => setPickerOpen(true)}>
          <div className="w-32 h-32 rounded-full bg-card border border-border flex items-center justify-center shadow-xl overflow-hidden">
            {profileImage
              ? <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
              : <User className="w-12 h-12 text-muted-foreground" />
            }
          </div>
          <div className="absolute inset-0 rounded-full bg-background/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Camera className="w-6 h-6 text-foreground" />
          </div>
        </div>
        <div className="text-center md:text-left flex-1">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">Planeswalker Profile</h2>
          <h1 className="text-4xl md:text-5xl font-sans font-light text-foreground uppercase tracking-[0.2em] mb-2">Cecília</h1>
          <p className="text-muted-foreground text-lg tracking-wide">Dimir Collector</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 max-w-2xl">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Cards</p>
              <p className="text-2xl font-light text-foreground">{totalCards.toLocaleString('en-US')}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Sets</p>
              <p className="text-2xl font-light text-foreground">{uniqueSets}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Decks</p>
              <p className="text-2xl font-light text-foreground">{mockDecks.length}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Games</p>
              <p className="text-2xl font-light text-foreground">126</p>
            </div>
          </div>
        </div>
        <button
          onClick={() => navigate("/settings")}
          className="p-3 bg-card border border-border rounded-full hover:bg-muted text-muted-foreground transition-colors"
        >
          <Settings className="w-5 h-5" />
        </button>
      </div>

      {/* Achievements */}
      <div>
        <h3 className="text-lg font-sans font-light uppercase tracking-wider text-muted-foreground mb-8 flex items-center gap-2">
          <Trophy className="w-5 h-5" /> Achievements
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockAchievements.map(achievement => (
            <div 
              key={achievement.id} 
              className={`p-6 rounded-2xl border transition-all ${
                achievement.unlocked 
                  ? 'bg-card border-border shadow-md' 
                  : 'bg-background border-dashed border-border opacity-50 grayscale'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border ${
                  achievement.unlocked ? 'bg-primary/10 border-primary text-primary' : 'bg-muted border-border text-muted-foreground'
                }`}>
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-sans font-medium tracking-wide text-foreground mb-1">{achievement.name}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
