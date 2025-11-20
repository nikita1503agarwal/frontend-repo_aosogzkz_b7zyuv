import { Twitter, Github, ShieldCheck, Coins } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative mt-10 border-t border-white/10 bg-slate-950/60">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <div className="inline-flex items-center gap-2">
              <Coins className="w-6 h-6 text-amber-300" />
              <span className="text-white font-semibold">Neon Royale</span>
            </div>
            <p className="mt-3 text-slate-400 text-sm max-w-sm">
              Where classic casino glamour meets cyber‑futuristic performance. Play responsibly.
            </p>
          </div>
          <div>
            <div className="text-white font-semibold mb-3">Support</div>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>Help Center</li>
              <li>Responsible Gambling</li>
              <li>Terms & Privacy</li>
            </ul>
          </div>
          <div>
            <div className="text-white font-semibold mb-3">Connect</div>
            <div className="flex items-center gap-3">
              <button className="rounded-lg border border-white/10 bg-white/5 p-2 text-slate-200 hover:bg-white/10">
                <Twitter className="w-4 h-4" />
              </button>
              <button className="rounded-lg border border-white/10 bg-white/5 p-2 text-slate-200 hover:bg-white/10">
                <Github className="w-4 h-4" />
              </button>
            </div>
            <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-emerald-400/20 bg-white/5 px-2.5 py-1.5 text-xs text-emerald-300">
              <ShieldCheck className="w-3.5 h-3.5" />
              SSL Secured • Provably Fair
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Neon Royale • For demo purposes only
        </div>
      </div>
    </footer>
  )
}
