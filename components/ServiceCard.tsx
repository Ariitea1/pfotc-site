
export default function ServiceCard({ title, bullets }: { title: string; bullets: string[] }) {
  return (
    <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
      <h3 className="text-lg font-semibold">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-slate-300 list-disc list-inside">
        {bullets.map(b => <li key={b}>{b}</li>)}
      </ul>
      <div className="mt-5 flex gap-3">
        <a href="/contact" className="px-4 py-2 rounded-xl bg-cyan-500 text-[#0b1220] text-sm font-medium hover:bg-cyan-400">Demander un devis</a>
        <a href="/services" className="px-4 py-2 rounded-xl border border-white/15 text-sm hover:bg-white/5">En savoir plus</a>
      </div>
    </div>
  );
}
