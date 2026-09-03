import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { ArrowUpRight, BookOpen, Layers, Target, Activity } from 'lucide-react';
import { mockActivities, mockCards, mockCollectionGrowth, mockDecks, mockManaDistribution } from '../data/mockData';

const totalCards = mockCards.reduce((acc, c) => acc + c.quantity, 0);
const totalValue = mockCards.reduce((acc, c) => acc + c.value * c.quantity, 0);
const uniqueSets = new Set(mockCards.map(c => c.set)).size;

export function Dashboard() {
  return (
    <div className="p-8 max-w-7xl mx-auto w-full space-y-8 pb-24">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-sans font-light text-foreground uppercase tracking-[0.2em]">Good Evening, Planeswalker.</h1>
        <p className="text-muted-foreground mt-2 font-medium">Your collection is growing.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Collection Value"
          value={`$${totalValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
          subtitle="+8.4% this month"
          trend="up"
        />
        <StatCard
          title="Total Cards"
          value={totalCards.toLocaleString('en-US')}
          subtitle={`Across ${uniqueSets} sets`}
          icon={BookOpen}
        />
        <StatCard
          title="Active Decks"
          value={String(mockDecks.length)}
          subtitle={`${mockDecks.length} commander deck${mockDecks.length !== 1 ? 's' : ''}`}
          icon={Layers}
        />
        <StatCard
          title="Wishlist"
          value="83"
          subtitle="Cards to acquire"
          icon={Target}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 p-6 rounded-2xl bg-card border border-border flex flex-col">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6">Collection Growth</h3>
          <div className="w-full min-w-0">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={mockCollectionGrowth}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                <XAxis dataKey="month" stroke="var(--muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="var(--muted-foreground)" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => `$${val/1000}k`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'var(--popover)', borderColor: 'var(--border)', borderRadius: '8px' }}
                  itemStyle={{ color: 'var(--foreground)' }}
                />
                <Line type="monotone" dataKey="value" stroke="var(--accent)" strokeWidth={2} dot={false} activeDot={{ r: 6, fill: 'var(--accent)' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-card border border-border flex flex-col">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6">Mana Identity</h3>
          <div className="w-full">
             <ResponsiveContainer width="100%" height={240}>
                <PieChart>
                  <Pie
                    data={mockManaDistribution}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                  >
                    {mockManaDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'var(--popover)', borderColor: 'var(--border)', borderRadius: '8px', color: 'var(--foreground)' }}
                  />
                </PieChart>
              </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
             {mockManaDistribution.map(mana => (
               <div key={mana.name} className="flex items-center gap-2 text-xs">
                 <div className="w-3 h-3 rounded-full" style={{ backgroundColor: mana.fill }} />
                 <span className="text-muted-foreground">{mana.name}</span>
               </div>
             ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Your Top Decks</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mockDecks.slice(0,2).map(deck => (
              <div key={deck.id} className="p-5 rounded-2xl bg-card border border-border hover:border-accent/50 transition-colors group cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-sans font-light tracking-wide text-xl">{deck.name}</h4>
                    <p className="text-xs text-muted-foreground">{deck.commander}</p>
                  </div>
                  <div className="flex gap-1">
                    {deck.colors.map(c => (
                      <div key={c} className="w-3 h-3 rounded-full" style={{ backgroundColor: `var(--mana-${c.toLowerCase()})` }} />
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-end text-sm">
                  <div>
                    <p className="text-foreground font-medium">{deck.winRate}% Win Rate</p>
                    <p className="text-muted-foreground text-xs mt-1">Played {deck.lastPlayed}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-accent font-medium">${deck.value}</p>
                    <p className="text-muted-foreground text-xs mt-1">{deck.cards} cards</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="space-y-6">
           <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Recent Activity</h3>
           <div className="space-y-4">
             {mockActivities.map(activity => (
               <div key={activity.id} className="flex gap-4 items-start">
                 <div className="mt-1 p-2 rounded-full bg-muted border border-border">
                   <Activity className="w-3 h-3 text-muted-foreground" />
                 </div>
                 <div>
                   <p className="text-sm text-foreground">{activity.text}</p>
                   <p className="text-xs text-muted-foreground mt-0.5">{activity.time}</p>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, subtitle, trend, icon: Icon }: any) {
  return (
    <div className="p-6 rounded-2xl bg-card border border-border flex flex-col relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
        {Icon ? <Icon className="w-12 h-12 text-muted-foreground" /> : <Layers className="w-12 h-12 text-muted-foreground" />}
      </div>
      <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">{title}</h3>
      <div className="text-3xl font-sans font-light tracking-wide text-foreground mt-auto mb-1">{value}</div>
      <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
        {trend === 'up' && <ArrowUpRight className="w-3 h-3 text-green-500" />}
        <span className={trend === 'up' ? "text-green-500" : ""}>{subtitle}</span>
      </div>
    </div>
  )
}
