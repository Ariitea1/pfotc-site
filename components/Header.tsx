"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0b1220]/95 backdrop-blur-sm border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* LOGO PFOTC */}
        <Link href="/" className="flex items-center gap-3 group relative">
          {/* HALO ANIMÉ */}
          <div
            className={`absolute -inset-3 rounded-full bg-cyan-400/10 blur-xl transition-all duration-1000 ${
              loaded
                ? "opacity-80 animate-pulse-slow"
                : "opacity-0 scale-75"
            }`}
          />

          {/* SONAR LUMINEUX */}
          <div
            className={`absolute inset-0 rounded-full border border-cyan-300/30 scale-50 opacity-0 ${
              loaded ? "animate-sonar" : ""
            }`}
          />

          {/* LOGO PRINCIPAL */}
          <div
            className={`relative z-10 transition-all duration-1000 ease-out ${
              loaded
                ? "opacity-100 scale-100 drop-shadow-[0_0_20px_rgba(0,200,255,0.4)]"
                : "opacity-0 scale-75"
            } group-hover:-translate-y-0.5`}
          >
            <Image
              src="/favicon_bleu_nuit.png"
              alt="PFOTC Logo"
              width={52}
              height={52}
              priority
            />
          </div>

          {/* TEXTE PFOTC */}
          <div
            className={`ml-2 transition-all duration-1000 delay-300 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            <h1 className="text-white text-lg font-bold tracking-wide leading-tight">
              PFOTC
            </h1>
            <p className="text-slate-400 text-sm leading-tight">
              Pacific Flight Operations & Training Center
            </p>
          </div>
        </Link>

        {/* NAVIGATION */}
        <nav
          className={`hidden md:flex gap-8 text-slate-300 text-sm transition-all duration-1000 delay-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
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
