
"use client";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/formations", label: "Formations" },
  { href: "/services", label: "Services" },
  { href: "/partenaires", label: "Partenaires" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-[#0b1220]/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9 rounded-full bg-cyan-400/10 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full blur-md bg-cyan-400/30" />
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-cyan-300">
                <path fill="currentColor" d="M2 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm7.2-1.2l9-3-6.6 6.6-1.2-2.4-2.4-1.2 1.2-1.2z" />
              </svg>
            </div>
            <span className="text-lg font-semibold tracking-wide">PFOTC</span>
            <span className="hidden sm:inline text-xs text-slate-400">Pacific Flight Operations & Training Center</span>
          </div>
          <nav className="hidden md:flex items-center gap-7 text-sm">
            {links.map(l => (
              <Link key={l.href} href={l.href} className="text-slate-300 hover:text-white transition-colors">
                {l.label}
              </Link>
            ))}
            <Link href="/contact" className="px-4 py-2 rounded-xl bg-cyan-500/20 text-cyan-200 border border-cyan-300/30 hover:bg-cyan-500/30 hover:text-white transition-colors">Contactez-nous</Link>
          </nav>
          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg hover:bg-white/5">
            <svg viewBox="0 0 24 24" className="h-6 w-6"><path fill="currentColor" d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"/></svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0b1220]/95">
          <div className="px-4 py-3 space-y-3">
            {links.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-slate-200">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
