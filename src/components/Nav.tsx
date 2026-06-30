"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-brand-black/90 backdrop-blur-md py-3 shadow-lg" : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-white font-extrabold text-xl tracking-tight">
            OMAHA <span className="text-brand-red">ROOFING</span>
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-white/90 hover:text-brand-red font-medium transition-colors">
              {l.label}
            </Link>
          ))}
          <a href="tel:8335726872" className="bg-brand-red text-white px-5 py-2.5 rounded-md font-semibold hover:bg-red-700 transition-colors">
            833-JRCO-USA
          </a>
        </div>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Menu">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </nav>
      {open && (
        <div className="md:hidden bg-brand-black/95 backdrop-blur-md px-5 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-white/90 hover:text-brand-red font-medium" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <a href="tel:8335726872" className="bg-brand-red text-white px-5 py-2.5 rounded-md font-semibold text-center">
            833-JRCO-USA
          </a>
        </div>
      )}
    </header>
  );
}
