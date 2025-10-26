

import Kicker from "@/components/Kicker";
import ServiceCard from "@/components/ServiceCard";
import { AirIcon, CapIcon, GlobeIcon } from "@/components/Icons";

export default function Page() {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-[1.1]">
              Pacific Flight Operations
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">& Training Center</span>
            </h1>
            <p className="mt-5 text-lg text-slate-300 max-w-2xl">
              Expertise, Formation & Innovation au service des opérations aériennes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/formations" className="px-5 py-3 rounded-xl bg-cyan-500 text-[#0b1220] font-medium hover:bg-cyan-400 transition-colors">Découvrir les formations</a>
              <a href="/services" className="px-5 py-3 rounded-xl border border-white/15 hover:bg-white/5 transition-colors">Voir les services</a>
            </div>
          </div>

          <div className="relative h-72 sm:h-96 lg:h-[28rem]">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-900/40 to-cyan-900/30 border border-white/10 shadow-2xl overflow-hidden">
              <svg viewBox="0 0 800 600" className="w-full h-full opacity-70">
                <defs>
                  <linearGradient id="glow" x1="0" x2="1">
                    <stop offset="0%" stopColor="#00FFFF" stopOpacity="0.0" />
                    <stop offset="50%" stopColor="#00FFFF" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#007BFF" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                <g fill="none" strokeWidth="2">
                  <path d="M-50 520 C 200 420, 400 620, 850 300" stroke="url(#glow)" />
                  <path d="M-80 200 C 160 120, 420 220, 820 80" stroke="url(#glow)" strokeOpacity="0.7" />
                  <path d="M-20 380 C 200 300, 420 420, 840 240" stroke="url(#glow)" strokeOpacity="0.5" />
                </g>
                <g fill="#00ffff" opacity="0.8">
                  <circle cx="520" cy="270" r="3" />
                  <circle cx="640" cy="190" r="2" />
                  <circle cx="700" cy="320" r="2" />
                </g>
              </svg>
            </div>
            <div className="absolute inset-0 p-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: "Flight Operations Services", desc: "OCC, Dispatch, Loadsheet – supervision 24/7 et solutions remote.", icon: AirIcon },
                { title: "Training & CBTA Modules", desc: "Initial, recurrent, CBTA – conformité EASA/ICAO.", icon: CapIcon },
                { title: "Consulting & Partnerships", desc: "OMD, MEL/ETOPS, DAC, Ferry – expertise opérationnelle.", icon: GlobeIcon },
              ].map((card) => (
                <div key={card.title} className="rounded-2xl border border-white/10 bg-black/20 p-4 backdrop-blur-sm hover:bg-black/30 hover:border-cyan-400/40 transition-all">
                  <div className="flex items-center gap-3">
                    <card.icon className="h-5 w-5 text-cyan-300" />
                    <h3 className="font-semibold">{card.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-slate-300">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
