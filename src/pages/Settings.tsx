import { Save } from "lucide-react";

export function Settings() {
  return (
    <div className="p-8 max-w-3xl mx-auto w-full space-y-8 pb-24">
      <header className="mb-10 flex items-end justify-between">
        <div>
          <h1 className="text-3xl md:text-4xl font-sans font-light text-foreground uppercase tracking-[0.2em]">Settings</h1>
          <p className="text-muted-foreground mt-2 font-medium">Manage your command center preferences.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors">
          <Save className="w-4 h-4" />
          SAVE CHANGES
        </button>
      </header>

      <div className="space-y-8">
        <section className="p-6 rounded-2xl bg-card border border-border space-y-6">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground border-b border-border pb-4">Account</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Display Name</label>
              <input type="text" defaultValue="Cecília" className="w-full bg-background border border-border rounded-md px-4 py-2 text-foreground focus:outline-none focus:border-primary" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Email</label>
              <input type="email" defaultValue="planeswalker@arcana.app" className="w-full bg-background border border-border rounded-md px-4 py-2 text-foreground focus:outline-none focus:border-primary" />
            </div>
          </div>
        </section>

        <section className="p-6 rounded-2xl bg-card border border-border space-y-6">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground border-b border-border pb-4">Preferences</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Market Notifications</p>
                <p className="text-xs text-muted-foreground">Receive alerts when wishlist cards drop in price.</p>
              </div>
              <div className="w-10 h-6 bg-primary rounded-full relative cursor-pointer">
                <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1"></div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Public Profile</p>
                <p className="text-xs text-muted-foreground">Allow other players to see your collection progress.</p>
              </div>
              <div className="w-10 h-6 bg-muted rounded-full relative cursor-pointer border border-border">
                <div className="w-4 h-4 bg-muted-foreground rounded-full absolute left-1 top-1"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
