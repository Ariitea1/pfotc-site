
import Kicker from "@/components/Kicker";
import ServiceCard from "@/components/ServiceCard";

export default function Page() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Kicker title="Services" subtitle="Solutions opérationnelles – externalisation & consulting" />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <ServiceCard title="Remote Dispatch / OCC" bullets={["Surveillance 24/7", "Flight watch & aléas", "Comms ATC/BRIA"]} />
          <ServiceCard title="Loadsheet centralisé" bullets={["Trim sheet ATR72", "Qualité & conformité", "Intégration outils PFOTC"]} />
          <ServiceCard title="Support réglementaire" bullets={["OMD, ORO.GEN.110", "ICAO Doc 10106", "Audits & préparation DAC"]} />
          <ServiceCard title="Projets spéciaux" bullets={["ETOPS / Ferry", "Implantation OCC", "Formation sur mesure"]} />
        </div>
      </div>
    </section>
  );
}
