import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white/70">
      <div className="max-w-7xl mx-auto px-5 py-16 grid gap-10 md:grid-cols-4">
        <div>
          <div className="text-white font-extrabold text-xl mb-4">
            OMAHA <span className="text-brand-red">ROOFING</span>
          </div>
          <p className="text-sm leading-relaxed">
            Omaha's trusted commercial roofing contractor. Roofing, repair,
            cladding and solar for commercial buildings across the metro.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-brand-red">About</Link></li>
            <li><Link href="/services" className="hover:text-brand-red">Services</Link></li>
            <li><Link href="/contact" className="hover:text-brand-red">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Commercial Roofing</li>
            <li>Repair & Service</li>
            <li>Architectural Cladding</li>
            <li>Solar Roof Systems</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="tel:8335726872" className="hover:text-brand-red">833-JRCO-USA</a></li>
            <li>Serving the Omaha, NE Metro</li>
            <li>24/7 Emergency Service</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-sm">
        © {new Date().getFullYear()} Omaha Roofing Solutions. All rights reserved.
      </div>
    </footer>
  );
}
