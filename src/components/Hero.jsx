import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[78vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* gradient overlays for depth and brand tint */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/40 to-slate-950/90" />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_10%_10%,rgba(0,255,200,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_90%_20%,rgba(168,85,247,0.15),transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-amber-200 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Welcome to Neon Royale
            </div>
            <h1 className="mt-5 text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight bg-gradient-to-br from-amber-200 via-white to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(59,130,246,0.25)]">
              High‑stakes thrill meets futuristic crypto elegance
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-200/85">
              A premium casino crafted for discerning players. Classic glamour in deep reds and golds, fused with neon blues and purples—secure, instant, and exhilarating.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button className="rounded-2xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 px-6 py-3 text-white font-semibold shadow-[0_10px_30px_rgba(6,182,212,0.35)] hover:opacity-95 transition">
                Play Now
              </button>
              <button className="rounded-2xl bg-white/5 px-6 py-3 text-slate-100 border border-white/10 hover:bg-white/10 transition">
                Explore Games
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
