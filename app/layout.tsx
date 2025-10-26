import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PFOTC",
  description: "Pacific Flight Operations & Training Center",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-[#041e3a] text-white">{children}</body>
    </html>
  );
}
