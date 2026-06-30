import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Commercial Roofing Services",
  description: "Commercial roofing, repair & service, architectural cladding, and solar roof systems for buildings across the Omaha, NE metro. Built for Nebraska weather.",
  alternates: { canonical: "https://omaharoofingsolutions.com/services" },
};

const TPO = "https://ideogram.ai/api/images/ephemeral/Frezrxf3V7yH6kDpLLbPjg.png?exp=1782875518&sig=06374c68d983816cd2a9bdb2c223204eb6296fc0be7cb9babdc97b81575fe97d";
const CLAD = "https://ideogram.ai/api/images/ephemeral/Tesie97kUyOfKl-Y3UR3yg.png?exp=1782875508&sig=046c18e632844b91e417f319204317555835948c29b90f943d2c9835c0219e50";
const SOLAR = "https://ideogram.ai/api/images/ephemeral/Lfw9dm1CXOq2ZTSFFEbrbQ.png?exp=1782875498&sig=ac70219a25d4ae216b08d658d033f1741bce889c73f61abc755e1f3a67b581ed";
const REPAIR = "https://ideogram.ai/api/images/ephemeral/RiNQLVgaUPqhASPT__OD7A.png?exp=1782875487&sig=d286e4e449dd7fc04820996c5d8b6c008f52013a95422fd8593d2507a7cbb53f";

const services = [
  { title: "Commercial Roofing", img: TPO, desc: "Full commercial roofing systems — TPO, EPDM, modified bitumen, and built-up roofing — designed and installed for the demands of Omaha's commercial buildings. Whether it's new construction or a full tear-off and replacement, we engineer roofs that stand up to Nebraska's storms, heat, and freeze-thaw cycles.", points: ["New roof installation", "Tear-off & replacement", "TPO / EPDM / modified bitumen", "Roof asset management"] },
  { title: "Repair & Service", img: REPAIR, desc: "When a leak or storm threatens your facility, our team responds fast. We offer rapid, professional repairs and 24/7 emergency service to keep your building protected and your operations running across the Omaha metro.", points: ["24/7 emergency service", "Leak detection & repair", "Preventive maintenance", "Free storm reports"] },
  { title: "Architectural Cladding", img: CLAD, desc: "Sleek, durable metal cladding and complete building envelope solutions that protect your structure while elevating its appearance. We deliver precision-installed facades that perform and impress.", points: ["Metal wall panels", "Building envelope systems", "Custom facades", "Weatherproofing"] },
  { title: "Solar Roof Systems", img: SOLAR, desc: "Commercial solar roof systems that reduce energy costs and add long-term value to your Omaha-area property. We integrate solar seamlessly with your roofing system for maximum performance and durability.", points: ["Rooftop solar arrays", "Energy cost reduction", "Roof + solar integration", "Sustainability solutions"] },
];

export default function Services() {
  return (
    <>
      <section className="pt-40 pb-20 bg-brand-black text-center">
        <div className="max-w-3xl mx-auto px-5">
          <p className="text-brand-red font-semibold tracking-widest uppercase mb-4 fade-up">Our Solutions</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5 fade-up delay-1">Commercial Roofing Services in Omaha</h1>
          <p className="text-white/80 text-lg fade-up delay-2">Comprehensive building envelope solutions — roofing, cladding, and solar — for commercial properties across Nebraska.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 space-y-20">
          {services.map((s, i) => (
            <div key={s.title} className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
              <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg [direction:ltr]">
                <Image src={s.img} alt={s.title} fill className="object-cover" />
              </div>
              <div className="[direction:ltr] fade-up">
                <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark mb-4">{s.title}</h2>
                <p className="text-brand-gray leading-relaxed mb-5">{s.desc}</p>
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-brand-dark text-sm">
                      <span className="text-brand-red font-bold">✓</span> {p}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="text-brand-red font-semibold hover:underline">Request a quote →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-brand-red text-center">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="text-3xl font-extrabold text-white mb-5">Get Your Free Storm Report & Inspection</h2>
          <Link href="/contact" className="inline-block bg-white text-brand-red px-7 py-3.5 rounded-md font-semibold hover:bg-brand-light transition-colors">
            Schedule a Free Inspection
          </Link>
        </div>
      </section>
    </>
  );
}
