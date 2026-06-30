import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Omaha Roofing Solutions — a veteran-owned, family-operated commercial roofing contractor serving the Omaha, NE metro with decades of experience.",
  alternates: { canonical: "https://omaharoofingsolutions.com/about" },
};

const SKYLINE = "https://ideogram.ai/api/images/ephemeral/MZZDMh-fVzGm29849cNbIA.png?exp=1782875534&sig=38d13a3dc4636d932de3deaf9a10ad8cb9fbac77f23746c7e19e514502e8b286";

const values = [
  { title: "Veteran-Owned", desc: "Built on discipline, integrity, and a commitment to doing the job right the first time." },
  { title: "Family-Operated", desc: "We treat every Omaha client like a neighbor, because many of them are." },
  { title: "Safety First", desc: "An industry-leading EMR safety rating reflects our relentless focus on safe job sites." },
  { title: "Built to Last", desc: "Premium materials and expert craftsmanship engineered for Nebraska weather." },
];

export default function About() {
  return (
    <>
      <section className="relative pt-40 pb-24 bg-brand-black">
        <Image src={SKYLINE} alt="Omaha, Nebraska skyline" fill className="object-cover opacity-30" />
        <div className="relative max-w-4xl mx-auto px-5 text-center">
          <p className="text-brand-red font-semibold tracking-widest uppercase mb-4 fade-up">About Omaha Roofing Solutions</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 fade-up delay-1">Building Trust Across The Omaha Metro</h1>
          <p className="text-white/80 text-lg leading-relaxed fade-up delay-2">
            For over four decades we've proudly served as a veteran-owned, family-operated construction
            company specializing in commercial roofing, cladding, and solar installation. We bring
            experience, precision, and an unwavering commitment to the buildings and businesses of Omaha.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-up">
              <h2 className="text-3xl font-extrabold text-brand-dark mb-5">Relentless In Our Pursuit</h2>
              <p className="text-brand-gray leading-relaxed mb-4">
                Guided by a culture of care for our employees and customers, we prioritize relationships,
                professionalism, and unmatched expertise. From complex commercial projects to innovative
                solar installations, no job is outside our wheelhouse.
              </p>
              <p className="text-brand-gray leading-relaxed">
                We don't just build structures — we build lasting relationships through trust,
                craftsmanship, and exceptional service across the Omaha, NE region.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {values.map((v) => (
                <div key={v.title} className="bg-brand-light rounded-xl p-6 hover:shadow-lg transition-shadow fade-up">
                  <h3 className="font-bold text-brand-dark mb-2">{v.title}</h3>
                  <p className="text-sm text-brand-gray leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-red text-center">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="text-3xl font-extrabold text-white mb-5">Ready To Protect Your Building?</h2>
          <Link href="/contact" className="inline-block bg-white text-brand-red px-7 py-3.5 rounded-md font-semibold hover:bg-brand-light transition-colors">
            Schedule a Free Inspection
          </Link>
        </div>
      </section>
    </>
  );
}
