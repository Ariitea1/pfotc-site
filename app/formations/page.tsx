
import Kicker from "@/components/Kicker";

export default function Page() {
  const cards = [
    { title: "Flight Dispatcher", hours: "40–80h", points: ["Planification & NOTAM", "Météo, perf & ETOPS", "Surveillance vol & OCC"] },
    { title: "Loadsheet & Masses", hours: "24–40h", points: ["Trim sheet avancé", "ATR72 – cas pratiques", "Conformité & audits"] },
    { title: "OCC Management", hours: "24–60h", points: ["Process & tools", "Gestion aléas", "CBTA & reporting"] },
  ];
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Kicker title="Formations" subtitle="CBT, CBTA, initial & recurrent – LMS intégré" />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <span className="text-xs text-cyan-300">{f.hours}</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-300 list-disc list-inside">
                {f.points.map(p => <li key={p}>{p}</li>)}
              </ul>
              <div className="mt-5 flex gap-3">
                <a href="/contact" className="px-4 py-2 rounded-xl bg-cyan-500 text-[#0b1220] text-sm font-medium hover:bg-cyan-400">S'inscrire</a>
                <a href="#" className="px-4 py-2 rounded-xl border border-white/15 text-sm hover:bg-white/5">Programme</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
