
export default function Kicker({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-widest text-cyan-300/80">PFOTC</div>
      <h2 className="mt-2 text-2xl sm:text-3xl font-bold">{title}</h2>
      {subtitle && <p className="mt-2 text-slate-300 max-w-2xl">{subtitle}</p>}
    </div>
  );
}
