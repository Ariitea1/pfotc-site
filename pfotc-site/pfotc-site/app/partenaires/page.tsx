
import Kicker from "@/components/Kicker";

export default function Page() {
  const partners = [
    { name: "Air Moana", url: "#" },
    { name: "ATR", url: "#" },
    { name: "DAC", url: "#" },
  ];
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Kicker title="Partenaires" subtitle="Écosystème PFOTC – compagnies, autorités, écoles" />
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {partners.map(p => (
            <a key={p.name} href={p.url} className="rounded-xl border border-white/10 p-6 text-center hover:border-cyan-400/40 hover:bg-white/5 transition-colors">
              {p.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
