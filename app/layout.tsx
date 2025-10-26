"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      {/* Animation globale du halo */}
      <style jsx global>{`
        @keyframes pulseGlow {
          0% {
            filter: drop-shadow(0 0 4px rgba(0, 255, 255, 0.25));
          }
          50% {
            filter: drop-shadow(0 0 12px rgba(0, 255, 255, 0.6));
          }
          100% {
            filter: drop-shadow(0 0 4px rgba(0, 255, 255, 0.25));
          }
        }
        .logo-glow {
          animation: pulseGlow 3s ease-in-out infinite;
          transition: filter 0.4s ease;
        }
        .logo-glow:hover {
          filter: drop-shadow(0 0 18px rgba(0, 255, 255, 0.8));
        }
      `}</style>

      <header className="w-full fixed top-0 z-50 bg-[#041e3a]/70 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Bloc logo + texte */}
          <Link href="/" className="flex items-center space-x-4">
            <Image
              src="/logo-pfotc.svg"
              alt="PFOTC Logo"
              width={130}
              height={45}
              priority
              className="logo-glow"
            />
            <span className="hidden sm:block text-white text-sm md:text-base font-medium tracking-tight">
              Pacific Flight Operations & Training Center
            </span>
          </Link>

          {/* Menu navigation droite */}
          <nav className="flex space-x-6 text-sm text-slate-300">
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
    </>
  );
}
