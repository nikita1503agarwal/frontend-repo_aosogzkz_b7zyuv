import { motion } from 'framer-motion'

const games = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  name: ['Roulette Royale','Blackjack Elite','Crypto Crash','Plinko Neon','Slots: Holo Gems','Baccarat Luxe','Dice Fusion','Mines Matrix','Poker Prime','Keno Quantum'][i%10],
  img: `https://images.unsplash.com/photo-1518131678677-a9e0b59ddb37?q=80&w=1200&auto=format&fit=crop`
}))

export default function GameCarousel() {
  return (
    <section className="relative py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-white">Featured Games</h2>
          <button className="text-sm text-cyan-300 hover:text-white">See all</button>
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
            className="flex gap-5 will-change-transform"
          >
            {[...games, ...games].map((g, idx) => (
              <div key={idx} className="group relative w-64 shrink-0">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                  <img src={g.img} alt={g.name} className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/10 to-transparent" />
                </div>
                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
                  <div className="text-white font-medium drop-shadow">{g.name}</div>
                  <button className="rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 px-3 py-1.5 text-xs font-semibold text-white shadow-[0_8px_24px_rgba(6,182,212,0.35)]">
                    Play
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
