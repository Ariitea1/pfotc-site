export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#041e3a] via-[#052d5c] to-[#02101f] text-white flex flex-col items-center justify-center px-6">
      {/* HEADER LOGO */}
      <header className="absolute top-8 left-1/2 transform -translate-x-1/2 flex items-center gap-2">
        <div className="flex items-center gap-2">
          <img src="/icon.png" alt="PFOTC Logo" className="w-8 h-8" />
          <h1 className="text-lg font-semibold tracking-wide">PFOTC</h1>
        </div>
      </header>

      {/* NAVIGATION */}
      <nav className="absolute top-8 right-8 hidden sm:flex gap-6 text-sm text-slate-300">
        <a href="/" className="hover:text-white">Accueil</a>
        <a href="/formations" className="hover:text-white">Formations</a>
        <a href="/services" className="hover:text-white">Services</a>
        <a href="/contact" className="hover:text-white">Contact</a>
      </nav>

      {/* HERO SECTION */}
      <section className="text-center max-w-3xl">
        <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
          Pacific Flight Operations<br />
          <span className="text-cyan-400">& Training Center</span>
        </h2>
        <p className="mt-6 text-lg text-slate-300">
          Expertise, Formation & Innovation au service des opérations aériennes
        </p>

        {/* CTA BUTTONS */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="/formations"
            className="px-6 py-3 bg-cyan-500 text-[#0b1220] font-medium rounded-xl hover:bg-cyan-400 transition"
          >
            Découvrir les formations
          </a>
          <a
            href="/services"
            className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white/10 transition"
          >
            Voir les services
          </a>
        </div>
      </section>

      {/* CARDS SECTION */}
      <section className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-5xl">
        <div className="rounded-2xl bg-gradient-to-b from-[#092a50]/70 to-[#0b2547]/40 border border-cyan-400/10 p-6 text-center hover:border-cyan-400/40 transition-all">
          <div className="text-cyan-400 mb-3 text-2xl">🛫</div>
          <h3 className="font-semibold text-lg mb-2">Flight Operations Services</h3>
          <p className="text-slate-300 text-sm">
            OCC, Dispatch, Loadsheet – supervision 24/7 et solutions remote.
          </p>
        </div>

        <div className="rounded-2xl bg-gradient-to-b from-[#092a50]/70 to-[#0b2547]/40 border border-cyan-400/10 p-6 text-center hover:border-cyan-400/40 transition-all">
          <div className="text-cyan-400 mb-3 text-2xl">🎓</div>
          <h3 className="font-semibold text-lg mb-2">Training & CBTA Modules</h3>
          <p className="text-slate-300 text-sm">
            Initial, recurrent, CBTA – conformité EASA/ICAO.
          </p>
        </div>

        <div className="rounded-2xl bg-gradient-to-b from-[#092a50]/70 to-[#0b2547]/40 border border-cyan-400/10 p-6 text-center hover:border-cyan-400/40 transition-all">
          <div className="text-cyan-400 mb-3 text-2xl">🌐</div>
          <h3 className="font-semibold text-lg mb-2">Consulting & Partnerships</h3>
          <p className="text-slate-300 text-sm">
            OMD, MEL/ETOPS, DAC, Ferry – expertise opérationnelle.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-20 text-center text-slate-400 text-sm pb-8">
        © PFOTC – Powered by <span className="text-cyan-400">Ariitea Frogier</span>
      </footer>
    </main>
  );
}
