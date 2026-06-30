import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://omaharoofingsolutions.com"),
  title: {
    default: "Omaha Roofing Solutions | Commercial Roofing Contractor in Omaha, NE",
    template: "%s | Omaha Roofing Solutions",
  },
  description:
    "Omaha's trusted commercial roofing contractor. Roofing, repair, architectural cladding, and solar systems for commercial buildings across the Omaha metro. Free storm reports & inspections.",
  keywords: [
    "commercial roofing Omaha",
    "Omaha roofing contractor",
    "commercial roof repair Omaha",
    "TPO roofing Omaha",
    "architectural cladding Omaha",
    "commercial solar roofing Nebraska",
  ],
  openGraph: {
    title: "Omaha Roofing Solutions | Commercial Roofing Contractor",
    description:
      "Omaha's trusted commercial roofing contractor. Roofing, repair, cladding & solar for commercial buildings.",
    url: "https://omaharoofingsolutions.com",
    siteName: "Omaha Roofing Solutions",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omaha Roofing Solutions | Commercial Roofing Contractor",
    description:
      "Omaha's trusted commercial roofing contractor. Roofing, repair, cladding & solar.",
  },
  alternates: { canonical: "https://omaharoofingsolutions.com" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: "Omaha Roofing Solutions",
  image: "https://omaharoofingsolutions.com/og.png",
  "@id": "https://omaharoofingsolutions.com",
  url: "https://omaharoofingsolutions.com",
  telephone: "+1-833-572-6872",
  areaServed: "Omaha, NE",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Omaha",
    addressRegion: "NE",
    addressCountry: "US",
  },
  description:
    "Commercial roofing contractor serving the Omaha, NE metro with roofing, repair, architectural cladding and solar roof systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
