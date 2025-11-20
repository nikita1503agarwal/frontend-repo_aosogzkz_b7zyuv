import { useState } from 'react'
import { Crown, Menu, Search, User, Wallet, Shield } from 'lucide-react'

function NavItem({ label }) {
  return (
    <button className="px-3 py-2 text-sm font-medium text-slate-100/80 hover:text-white hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)] transition">
      {label}
    </button>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.3)]">
          {/* glow lines */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl [mask-image:linear-gradient(to_bottom,black,transparent)]">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
          </div>

          <nav className="relative flex items-center justify-between px-4 sm:px-6 py-3">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute -inset-2 rounded-xl bg-gradient-to-tr from-amber-400/20 via-fuchsia-400/10 to-cyan-400/20 blur-xl" />
                <div className="relative inline-flex items-center gap-2">
                  <Crown className="w-7 h-7 text-amber-400 drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]" />
                  <span className="text-lg font-semibold tracking-wide bg-gradient-to-r from-amber-200 via-white to-cyan-200 bg-clip-text text-transparent">
                    Neon Royale
                  </span>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-1 ml-6">
                <NavItem label="Casino" />
                <NavItem label="Live" />
                <NavItem label="Slots" />
                <NavItem label="Sports" />
                <NavItem label="Promotions" />
              </div>
            </div>

            <div className="hidden md:flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  placeholder="Search games"
                  className="w-56 rounded-xl bg-slate-800/60 pl-9 pr-3 py-2 text-sm text-slate-200 placeholder:text-slate-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                />
              </div>
              <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-3 py-2 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(16,185,129,0.35)] hover:opacity-95 transition">
                <Wallet className="w-4 h-4" />
                Deposit
              </button>
              <button className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-sm font-medium text-slate-100 border border-white/10 hover:bg-white/10 transition">
                <User className="w-4 h-4" />
                Account
              </button>
              <div className="ml-2 inline-flex items-center gap-1 rounded-xl bg-white/5 px-3 py-2 text-xs font-medium text-emerald-300 border border-emerald-400/20">
                <Shield className="w-3.5 h-3.5" />
                Provably Fair
              </div>
            </div>

            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 text-white">
              <Menu className="w-5 h-5" />
            </button>
          </nav>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 pb-4">
              <div className="flex flex-col gap-2 py-3">
                {['Casino','Live','Slots','Sports','Promotions'].map(i => (
                  <button key={i} className="text-left px-3 py-2 rounded-lg text-slate-100/80 hover:text-white hover:bg-white/5">
                    {i}
                  </button>
                ))}
                <div className="flex items-center gap-2 pt-2">
                  <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-3 py-2 text-sm font-semibold text-white">
                    <Wallet className="w-4 h-4" /> Deposit
                  </button>
                  <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-sm font-medium text-slate-100 border border-white/10">
                    <User className="w-4 h-4" /> Account
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
