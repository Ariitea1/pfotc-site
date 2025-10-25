
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "PFOTC – Pacific Flight Operations & Training Center",
  description: "Site officiel PFOTC – Expertise, Formation & Innovation au service des opérations aériennes.",
  metadataBase: new URL("https://pfotc.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="gradient-halo-1 -top-40 -left-40" />
          <div className="gradient-halo-2 top-1/3 -right-40" />
          <div className="gradient-halo-3 bottom-0 left-1/2 -translate-x-1/2" />
        </div>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
