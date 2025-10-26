"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0b1220]/95 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* LOGO PFOTC */}
        <Link href="/" className="flex items-center gap-3 group relative">
          {/* Halo animé */}
          <div className="absolute -inset-3 rounded-full bg-cyan-400/10 blur-xl opacity-75 group-hover:opacity-90 animate-pulse-slow transition-all duration-500" />

          {/* Logo principal */}
          <div className="relative z-10 transform group-hover:-translate-y-0.5 transition-transform duration-500">
            <Image
              src="/favicon_bleu_nuit.png"
              alt="PFOTC Logo"
              width={52}
              height={52}
              className="drop-shadow-[0_0_20px_rgba(0,200,255,0.4)]"
            />
          </div>

          {/* Texte PFOTC */}
          <div className="ml-2">
            <h1 className="text-white text-lg font-bold tracking-wide leading-tight">
              PFOTC
            </h1>
            <p className="text-slate-400 text-sm leading-tight">
              Pacific Flight Operations & Training Center
            </p>
          </div>
        </Link>

        {/* NAVIGATION */}
        <nav className="hidden md:flex gap-8 text-slate-300 text-sm">
          <Link href="/" className="hover:text-white transition-colors">
            Accueil
          </Link>
          <Link href="/formations" className="hover:text-white transition-colors">
            Formations
          </Link>
          <Link href="/services" className="hover:text-white transition-colors">
            Services
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
