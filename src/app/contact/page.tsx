import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Omaha Roofing Solutions for a free storm report and commercial roofing inspection. Serving the Omaha, NE metro. Call 833-JRCO-USA, 24/7 emergency service.",
  alternates: { canonical: "https://omaharoofingsolutions.com/contact" },
};

export default function Contact() {
  return (
    <>
      <section className="pt-40 pb-16 bg-brand-black text-center">
        <div className="max-w-3xl mx-auto px-5">
          <p className="text-brand-red font-semibold tracking-widest uppercase mb-4 fade-up">Get In Touch</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5 fade-up delay-1">Free Storm Report & Inspection</h1>
          <p className="text-white/80 text-lg fade-up delay-2">Tell us about your building and our Omaha team will reach out to schedule your free inspection.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-5 grid md:grid-cols-2 gap-12">
          <div className="fade-up">
            <h2 className="text-2xl font-extrabold text-brand-dark mb-6">Request Service</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-brand-red" />
              <input type="email" placeholder="Email Address" className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-brand-red" />
              <input type="tel" placeholder="Phone Number" className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-brand-red" />
              <input type="text" placeholder="Property / Building Address" className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-brand-red" />
              <textarea placeholder="How can we help?" rows={4} className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-brand-red" />
              <button type="submit" className="w-full bg-brand-red text-white py-3.5 rounded-md font-semibold hover:bg-red-700 transition-colors">
                Get My Free Storm Report
              </button>
            </form>
          </div>
          <div className="fade-up delay-1">
            <h2 className="text-2xl font-extrabold text-brand-dark mb-6">Contact Info</h2>
            <div className="space-y-6 text-brand-gray">
              <div>
                <div className="font-semibold text-brand-dark mb-1">Phone</div>
                <a href="tel:8335726872" className="text-brand-red font-semibold text-lg">833-JRCO-USA</a>
              </div>
              <div>
                <div className="font-semibold text-brand-dark mb-1">Service Area</div>
                <p>Omaha, NE and the surrounding metro</p>
              </div>
              <div>
                <div className="font-semibold text-brand-dark mb-1">Emergency Service</div>
                <p>24/7 rapid response for commercial roofing emergencies</p>
              </div>
              <div className="bg-brand-light rounded-xl p-6">
                <div className="font-bold text-brand-dark mb-2">24/7 Emergency Service</div>
                <p className="text-sm">Storm damage doesn't wait. Neither do we. Call anytime and our team will respond fast to protect your building.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
