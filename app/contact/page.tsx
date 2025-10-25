
import Kicker from "@/components/Kicker";

export default function Page() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Kicker title="Contact" subtitle="Discutons de vos besoins – réponse rapide" />
        <form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Nom" />
          <input className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="E‑mail" type="email" />
          <input className="md:col-span-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Sujet" />
          <textarea rows={5} className="md:col-span-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Message" />
          <div className="md:col-span-2 flex items-center justify-between">
            <p className="text-xs text-slate-400">En envoyant ce formulaire, vous acceptez d’être recontacté par PFOTC.</p>
            <a href="mailto:contact@pfotc.com" className="px-5 py-3 rounded-xl bg-cyan-500 text-[#0b1220] font-medium hover:bg-cyan-400">Envoyer</a>
          </div>
        </form>
        <div className="mt-10 text-sm text-slate-400 space-y-1">
          <p>PFOTC – Pacific Flight Operations & Training Center · Tahiti</p>
          <p>Courriel : <a href="mailto:contact@pfotc.com" className="underline">contact@pfotc.com</a></p>
          <p>Web : <a href="https://pfotc.com" className="underline">pfotc.com</a> · LinkedIn : <a href="https://www.linkedin.com/company/pfotc" className="underline" target="_blank">/company/pfotc</a></p>
        </div>
      </div>
    </section>
  );
}
