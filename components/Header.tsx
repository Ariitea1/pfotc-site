export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-[#0b1220]/90 backdrop-blur-sm border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/icon.png" alt="PFOTC Logo" className="w-8 h-8" />
          <span className="text-white font-semibold text-lg tracking-wide">PFOTC</span>
          <span className="text-slate-400 text-sm ml-2 hidden sm:block">
            Pacific Flight Operations & Training Center
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex gap-6 text-sm text-slate-300">
          <a href="/" className="hover:text-white">Accueil</a>
          <a href="/formations" className="hover:text-white">Formations</a>
          <a href="/services" className="hover:text-white">Services</a>
          <a href="/partenaires" className="hover:text-white">Partenaires</a>
          <a
            href="/contact"
            className="border border-cyan-500/50 text-cyan-400 px-4 py-1.5 rounded-lg hover:bg-cyan-500/10 transition"
          >
            Contactez-nous
          </a>
        </nav>
      </div>
    </header>
  );
}
