import Link from "next/link";
import Image from "next/image";

const HERO = "https://ideogram.ai/api/images/ephemeral/8RiG-6a6UFCsEP9a-UT_TQ.png?exp=1782875452&sig=3e12ef466306987183d2dcc71a29110223ddf8c0218271ad1cc37ee1a9499d6b";
const TPO = "https://ideogram.ai/api/images/ephemeral/Frezrxf3V7yH6kDpLLbPjg.png?exp=1782875518&sig=06374c68d983816cd2a9bdb2c223204eb6296fc0be7cb9babdc97b81575fe97d";
const CLAD = "https://ideogram.ai/api/images/ephemeral/Tesie97kUyOfKl-Y3UR3yg.png?exp=1782875508&sig=046c18e632844b91e417f319204317555835948c29b90f943d2c9835c0219e50";
const SOLAR = "https://ideogram.ai/api/images/ephemeral/Lfw9dm1CXOq2ZTSFFEbrbQ.png?exp=1782875498&sig=ac70219a25d4ae216b08d658d033f1741bce889c73f61abc755e1f3a67b581ed";
const REPAIR = "https://ideogram.ai/api/images/ephemeral/RiNQLVgaUPqhASPT__OD7A.png?exp=1782875487&sig=d286e4e449dd7fc04820996c5d8b6c008f52013a95422fd8593d2507a7cbb53f";

const services = [
  { title: "Commercial Roofing", img: TPO, desc: "TPO, EPDM, modified bitumen and built-up roofing systems engineered for Omaha's commercial buildings and harsh Nebraska weather." },
  { title: "Repair & Service", img: REPAIR, desc: "Rapid, professional repairs and 24/7 emergency service to keep your facility protected when storms hit the Omaha metro." },
  { title: "Architectural Cladding", img: CLAD, desc: "Sleek, durable metal cladding and building envelope solutions that protect and elevate your commercial property." },
  { title: "Solar Roof Systems", img: SOLAR, desc: "Commercial solar roof systems that cut energy costs and add long-term value to your Omaha-area building." },
];

const stats = [
  { num: "40+", label: "Years of Roofing Experience" },
  { num: "10+", label: "States Serviced" },
  { num: "0.7", label: "Safety Rating (EMR)" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center">
        <Image src={HERO} alt="Commercial roofing crew working on a rooftop in Omaha, NE" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/90 via-brand-black/70 to-brand-black/40" />
        <div className="relative max-w-7xl mx-auto px-5 w-full pt-28">
          <div className="max-w-2xl">
            <p className="fade-up text-brand-red font-semibold tracking-widest uppercase mb-4">Commercial Roofing • Omaha, NE</p>
            <h1 className="fade-up delay-1 text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Relentless In Our Pursuit To <span className="gradient-text">Build The Best Tomorrow.</span>
            </h1>
            <p className="fade-up delay-2 text-white/80 text-lg mb-8 leading-relaxed">
              Omaha's trusted commercial roofing contractor. From complex roofing projects to
              architectural cladding and innovative solar installations, no job is outside our wheelhouse.
              We bring experience, precision, and a commitment to the best solutions for your building.
            </p>
            <div className="fade-up delay-3 flex flex-wrap gap-4">
              <Link href="/contact" className="bg-brand-red text-white px-7 py-3.5 rounded-md font-semibold hover:bg-red-700 transition-colors">
                Get a Free Storm Report
              </Link>
              <a href="tel:8335726872" className="glass text-white px-7 py-3.5 rounded-md font-semibold hover:bg-white/20 transition-colors">
                Call 833-JRCO-USA
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-brand-black py-16">
        <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label} className="fade-up">
              <div className="text-5xl font-extrabold text-brand-red mb-2">{s.num}</div>
              <div className="text-white/70 uppercase tracking-wide text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-5 text-center fade-up">
          <p className="text-brand-red font-semibold tracking-widest uppercase mb-4">Building Envelope Solutions</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-6">Roofing. Cladding. Solar.</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            For decades we've proudly served Omaha and the surrounding metro as a veteran-owned,
            family-operated construction company specializing in roofing, cladding, and solar
            installation. Guided by a culture of care for our employees and customers, we prioritize
            relationships, professionalism, and unmatched expertise. We don't just build structures —
            we build lasting relationships through trust, craftsmanship, and exceptional service.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16 fade-up">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4">Explore Our Solutions</h2>
            <p className="text-brand-gray text-lg max-w-2xl mx-auto">Comprehensive commercial roofing services built for the Omaha market.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((s) => (
              <div key={s.title} className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 fade-up">
                <div className="relative h-56 overflow-hidden">
                  <Image src={s.img} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-bold text-brand-dark mb-3">{s.title}</h3>
                  <p className="text-brand-gray leading-relaxed mb-4">{s.desc}</p>
                  <Link href="/services" className="text-brand-red font-semibold hover:underline">Learn more →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-brand-red">
        <div className="max-w-4xl mx-auto px-5 text-center text-white fade-up">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-5">Get Your Free Storm Report & Inspection</h2>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            Join the thousands of clients who trust us for their building needs. Whether you're
            starting a new project or maintaining an existing structure, our Omaha team is ready to
            help you achieve your goals with precision and professionalism.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-brand-red px-7 py-3.5 rounded-md font-semibold hover:bg-brand-light transition-colors">
              Schedule a Free Inspection
            </Link>
            <a href="tel:8335726872" className="glass text-white px-7 py-3.5 rounded-md font-semibold hover:bg-white/20 transition-colors">
              Call 833-JRCO-USA
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
