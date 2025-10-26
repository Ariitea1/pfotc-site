'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg">
      <nav className="flex items-center justify-between px-8 py-4 bg-[rgba(4,14,30,0.85)] border-b border-[rgba(0,180,255,0.15)] shadow-[0_2px_12px_rgba(0,0,0,0.3)]">
        {/* === LOGO PFOTC === */}
        <div className="flex items-center space-x-3">
          <Image
            src="/icon.png" // ✅ ton logo (ou favicon aile)
            alt="PFOTC Logo"
            width={36}
            height={36}
            className="drop-shadow-[0_0_8px_rgba(0,200,255,0.5)]"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-white font-bold tracking-wide text-lg">PFOTC</span>
            <span className="text-[13px] text-slate-300 font-light">
              Pacific Flight Operations & Training Center
            </span>
          </div>
        </div>

        {/* === MENU === */}
        <div className="flex space-x-8 text-[15px] font-medium">
          <Link href="/" className="text-slate-100 hover:text-cyan-400 transition">
            Accueil
          </Link>
          <Link href="#formations" className="text-slate-100 hover:text-cyan-400 transition">
            Formations
          </Link>
          <Link href="#services" className="text-slate-100 hover:text-cyan-400 transition">
            Services
          </Link>
          <Link href="#partenaires" className="text-slate-100 hover:text-cyan-400 transition">
            Partenaires
          </Link>
          <Link href="#contact" className="text-slate-100 hover:text-cyan-400 transition">
            Contact
          </Link>
        </div>

        {/* === CTA === */}
        <Link
          href="#contact"
          className="ml-8 px-5 py-2.5 rounded-xl border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white transition font-semibold shadow-[0_0_12px_rgba(0,200,255,0.3)]"
        >
          Contactez-nous
        </Link>
      </nav>
    </header>
  );
}
