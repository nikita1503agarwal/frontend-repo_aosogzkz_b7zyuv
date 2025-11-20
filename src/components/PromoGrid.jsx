import { Gift, Star, Coins, Bolt } from 'lucide-react'

const promos = [
  {
    title: 'Welcome Bonus 200% + 100 FS',
    desc: 'Boost your first deposit with a luxurious starter pack.',
    icon: Gift,
    gradient: 'from-amber-500/30 via-fuchsia-500/20 to-cyan-500/30',
    ring: 'ring-amber-400/40'
  },
  {
    title: 'VIP Club & Cashbacks',
    desc: 'Climb tiers for weekly rewards, rakeback and private hosts.',
    icon: Star,
    gradient: 'from-purple-500/30 via-blue-500/20 to-emerald-500/30',
    ring: 'ring-purple-400/40'
  },
  {
    title: 'Crypto Specials',
    desc: 'Better odds and instant withdrawals on supported chains.',
    icon: Coins,
    gradient: 'from-emerald-500/30 via-cyan-500/20 to-blue-500/30',
    ring: 'ring-emerald-400/40'
  },
  {
    title: 'Daily Lightning Drops',
    desc: 'Surprise prize pools and slot tournaments every day.',
    icon: Bolt,
    gradient: 'from-fuchsia-500/30 via-rose-500/20 to-amber-500/30',
    ring: 'ring-fuchsia-400/40'
  }
]

export default function PromoGrid() {
  return (
    <section className="relative py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {promos.map(({ title, desc, icon: Icon, gradient, ring }) => (
            <div key={title} className={`group relative rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-5 overflow-hidden`}> 
              <div className={`absolute -inset-20 bg-gradient-to-br ${gradient} blur-2xl opacity-0 group-hover:opacity-60 transition`}/>
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center rounded-xl bg-white/5 p-2 border border-white/10 ring-1 ${ring} mb-3 shadow-[inset_0_0_30px_rgba(255,255,255,0.06)]`}>
                  <Icon className="w-5 h-5 text-amber-300" />
                </div>
                <h3 className="text-slate-100 font-semibold mb-1">{title}</h3>
                <p className="text-slate-300/80 text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
