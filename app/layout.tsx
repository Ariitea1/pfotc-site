import "./globals.css";
import { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "PFOTC – Pacific Flight Operations & Training Center",
  description: "Expertise, formation et innovation au service des opérations aériennes.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className="relative overflow-x-hidden">
        <Header />
        <main className="relative z-10">{children}</main>
        <Footer />
        {/* 🌌 Halo lumineux PFOTC */}
        <div className="halo" />
      </body>
    </html>
  );
}
