import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { mockMarketPerformance, mockGainers, mockLosers } from '../data/mockData';

export function Market() {
  return (
    <div className="p-8 max-w-7xl mx-auto w-full space-y-8 pb-24">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-sans font-light text-foreground uppercase tracking-[0.2em]">Market</h1>
        <p className="text-muted-foreground mt-2 font-medium">Track the value of your collection.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="p-6 rounded-2xl bg-card border border-border">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Total Value</h3>
          <div className="text-3xl font-sans font-light tracking-wide text-foreground">$18,420.50</div>
        </div>
        <div className="p-6 rounded-2xl bg-card border border-border">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Today's Change</h3>
          <div className="text-3xl font-sans font-light tracking-wide text-green-500 flex items-center gap-2">
            +$142.50 <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
        <div className="p-6 rounded-2xl bg-card border border-border">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Monthly Change</h3>
          <div className="text-3xl font-sans font-light tracking-wide text-green-500 flex items-center gap-2">
            +$1,220.00 <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
        <div className="p-6 rounded-2xl bg-card border border-border">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Yearly Change</h3>
          <div className="text-3xl font-sans font-light tracking-wide text-green-500 flex items-center gap-2">
            +$4,500.00 <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-card border border-border min-w-0">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6">Performance (24h)</h3>
        <div className="w-full">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={mockMarketPerformance}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
              <XAxis dataKey="time" stroke="var(--muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="var(--muted-foreground)" fontSize={12} tickLine={false} axisLine={false} domain={['dataMin - 100', 'dataMax + 100']} tickFormatter={(val) => `$${val/1000}k`} />
              <Tooltip 
                contentStyle={{ backgroundColor: 'var(--popover)', borderColor: 'var(--border)', borderRadius: '8px' }}
                itemStyle={{ color: 'var(--foreground)' }}
                formatter={(value) => [`$${Number(value).toFixed(2)}`, 'Value']}
              />
              <Line type="monotone" dataKey="value" stroke="var(--accent)" strokeWidth={2} dot={false} activeDot={{ r: 6, fill: 'var(--accent)' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl bg-card border border-border overflow-hidden">
          <div className="p-6 border-b border-border">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-green-500 flex items-center gap-2">
              <ArrowUpRight className="w-4 h-4" /> Top Gainers
            </h3>
          </div>
          <div className="divide-y divide-border">
            {mockGainers.map(card => (
              <div key={card.id} className="p-4 px-6 flex justify-between items-center hover:bg-muted/50 transition-colors">
                <div>
                  <p className="font-medium text-foreground">{card.name}</p>
                  <p className="text-xs text-muted-foreground">{card.set}</p>
                </div>
                <div className="text-right">
                  <p className="text-foreground font-medium">${card.price.toFixed(2)}</p>
                  <p className="text-xs text-green-500 font-medium">{card.change}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-card border border-border overflow-hidden">
          <div className="p-6 border-b border-border">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-red-500 flex items-center gap-2">
              <ArrowDownRight className="w-4 h-4" /> Top Losers
            </h3>
          </div>
          <div className="divide-y divide-border">
            {mockLosers.map(card => (
              <div key={card.id} className="p-4 px-6 flex justify-between items-center hover:bg-muted/50 transition-colors">
                <div>
                  <p className="font-medium text-foreground">{card.name}</p>
                  <p className="text-xs text-muted-foreground">{card.set}</p>
                </div>
                <div className="text-right">
                  <p className="text-foreground font-medium">${card.price.toFixed(2)}</p>
                  <p className="text-xs text-red-500 font-medium">{card.change}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
