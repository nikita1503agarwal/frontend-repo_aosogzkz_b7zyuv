import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PromoGrid from './components/PromoGrid'
import GameCarousel from './components/GameCarousel'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* global background accents */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_800px_at_10%_0%,rgba(220,38,38,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_700px_at_100%_10%,rgba(168,85,247,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_600px_at_50%_120%,rgba(16,185,129,0.14),transparent_60%)]" />
        <div className="absolute inset-0 mix-blend-overlay opacity-30" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
      </div>

      <Navbar />
      <main className="relative">
        <Hero />
        <section className="relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mt-[-3rem] mb-6 grid grid-cols-1 lg:grid-cols-3 gap-5">
              <div className="rounded-2xl border border-amber-400/20 bg-gradient-to-br from-amber-600/20 via-amber-500/10 to-rose-500/10 p-5 backdrop-blur-xl">
                <div className="text-amber-200 text-sm">Jackpot Pool</div>
                <div className="mt-1 text-3xl font-extrabold bg-gradient-to-r from-amber-200 via-white to-amber-300 bg-clip-text text-transparent">
                  1,258.37 BTC
                </div>
                <div className="mt-2 text-xs text-amber-100/70">Live & growing in real‑time</div>
              </div>
              <div className="rounded-2xl border border-emerald-400/20 bg-gradient-to-br from-emerald-600/20 via-cyan-500/10 to-blue-600/10 p-5 backdrop-blur-xl">
                <div className="text-emerald-200 text-sm">Instant Withdrawals</div>
                <div className="mt-1 text-3xl font-extrabold text-emerald-100">Under 2 minutes</div>
                <div className="mt-2 text-xs text-emerald-100/70">BTC • ETH • SOL • USDT • USDC</div>
              </div>
              <div className="rounded-2xl border border-purple-400/20 bg-gradient-to-br from-purple-600/20 via-fuchsia-600/10 to-cyan-600/10 p-5 backdrop-blur-xl">
                <div className="text-purple-200 text-sm">VIP Lounge</div>
                <div className="mt-1 text-3xl font-extrabold text-purple-100">Rakeback up to 20%</div>
                <div className="mt-2 text-xs text-purple-100/70">Personal hosts • Exclusive tables</div>
              </div>
            </div>
          </div>
        </section>
        <PromoGrid />
        <GameCarousel />
      </main>
      <Footer />
    </div>
  )
}

export default App
