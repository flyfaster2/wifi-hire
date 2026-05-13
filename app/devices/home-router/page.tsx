import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Check, Wifi, Router, Zap, Signal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const specs = [
  {
    category: "Mobile Network",
    items: [
      { label: "Network type", value: "5G NR / 4G LTE / 3G" },
      { label: "5G standard", value: "Sub-6GHz SA/NSA" },
      { label: "5G download speed (max)", value: "Up to 2.5 Gbps" },
      { label: "4G download speed (max)", value: "Up to 600 Mbps" },
      { label: "Upload speed (max)", value: "Up to 200 Mbps" },
      { label: "5G frequency bands", value: "n1, n3, n28, n41, n77, n78" },
      { label: "LTE frequency bands", value: "B1, B3, B5, B7, B8, B20, B28, B32, B38, B40, B41, B42, B43" },
      { label: "SIM type", value: "Nano SIM (4FF)" },
      { label: "External antennas", value: "4 × TS-9 antenna ports" },
    ],
  },
  {
    category: "Wi-Fi",
    items: [
      { label: "Wi-Fi standard", value: "802.11ax (Wi-Fi 6)" },
      { label: "Frequency", value: "2.4 GHz & 5 GHz (dual-band)" },
      { label: "2.4 GHz speed", value: "Up to 574 Mbps" },
      { label: "5 GHz speed", value: "Up to 2,402 Mbps" },
      { label: "Total Wi-Fi throughput", value: "Up to 2,976 Mbps" },
      { label: "Max simultaneous connections", value: "32+ devices" },
      { label: "MIMO", value: "2×2 (2.4 GHz) / 4×4 (5 GHz)" },
      { label: "Security", value: "WPA2/WPA3-Personal, WPS" },
    ],
  },
  {
    category: "Connectivity",
    items: [
      { label: "LAN ports", value: "2 × Gigabit Ethernet" },
      { label: "WAN port", value: "1 × Gigabit Ethernet (optional)" },
      { label: "USB", value: "1 × USB 3.0" },
      { label: "Power", value: "12V DC adapter (supplied)" },
    ],
  },
  {
    category: "Hardware",
    items: [
      { label: "Dimensions", value: "223 × 170 × 168 mm" },
      { label: "Weight", value: "Approx. 1.5 kg" },
      { label: "External antennas", value: "2 × 5G cellular, 2 × Wi-Fi" },
      { label: "Operating temperature", value: "0°C to 40°C" },
      { label: "Storage temperature", value: "-20°C to 70°C" },
      { label: "Operating humidity", value: "10% to 90% (non-condensing)" },
    ],
  },
];

const highlights = [
  { icon: Wifi, label: "Wi-Fi 6", sub: "802.11ax dual-band" },
  { icon: Router, label: "32+ devices", sub: "Connect simultaneously" },
  { icon: Zap, label: "2.5 Gbps", sub: "Peak 5G download" },
  { icon: Signal, label: "4G & 5G", sub: "With 4G fallback" },
];

export const metadata = {
  title: 'Home Router Hire UK | 5G WiFi Rental | FlexiWiFi',
  description: 'Hire a 5G home router in the UK from £7.00/day. Unlimited data, connects up to 64 devices, no landline needed. No contracts. Fast delivery, free returns.',
  alternates: { canonical: 'https://www.flexiwifi.co.uk/devices/home-router' },
  openGraph: {
    title: 'Home Router Hire UK | 5G WiFi Rental | FlexiWiFi',
    description: 'Hire a 5G home router in the UK from £7.00/day. Unlimited data, connects up to 64 devices, no landline needed. No contracts.',
    url: 'https://www.flexiwifi.co.uk/devices/home-router',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Home Router Hire',
  description: '5G/4G indoor router with Wi-Fi 6. Plug it in and connect your entire household — no landline, no engineer, no contracts. Unlimited UK data included.',
  brand: { '@type': 'Brand', name: 'FlexiWiFi' },
  offers: {
    '@type': 'AggregateOffer',
    lowPrice: '4.00',
    highPrice: '7.00',
    priceCurrency: 'GBP',
    offerCount: '1',
    offers: [
      { '@type': 'Offer', name: 'Days 1–7', price: '7.00', priceCurrency: 'GBP', priceSpecification: { '@type': 'UnitPriceSpecification', price: '7.00', priceCurrency: 'GBP', unitText: 'DAY' } },
      { '@type': 'Offer', name: 'Days 8–14', price: '5.50', priceCurrency: 'GBP', priceSpecification: { '@type': 'UnitPriceSpecification', price: '5.50', priceCurrency: 'GBP', unitText: 'DAY' } },
      { '@type': 'Offer', name: 'Days 15+', price: '4.00', priceCurrency: 'GBP', priceSpecification: { '@type': 'UnitPriceSpecification', price: '4.00', priceCurrency: 'GBP', unitText: 'DAY' } },
    ],
  },
  url: 'https://www.flexiwifi.co.uk/devices/home-router',
}

export default function HomeRouterPage() {
  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      {/* Hero */}
      <section className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <Link
            href="/#devices"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to devices
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">Home Router</p>
              <h1 className="font-serif text-4xl sm:text-5xl text-foreground mb-4">
                Home Router
              </h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                5G/4G indoor router with Wi-Fi 6 and four external antennas. Plug it in and connect your entire household — no landline, no engineer, no contracts.
              </p>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-3xl font-semibold text-foreground">From £7.00</span>
                <span className="text-muted-foreground">/day</span>
              </div>
              <div className="flex gap-3">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/book">
                    Hire now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden bg-secondary">
              <Image
                src="/images/home-router.jpg"
                alt="Home Router"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlight stats */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h) => (
              <div key={h.label} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <h.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{h.label}</p>
                  <p className="text-sm text-muted-foreground">{h.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flexibility note */}
      <section className="py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary/5 border border-primary/15 rounded-2xl px-6 py-5">
            <h2 className="font-semibold text-foreground mb-2">Hire on your terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              Order it, give us an estimated return date, and we&apos;ll ship it out. Return it early and we&apos;ll refund the unused days. If you need it a little longer, no problem. Just let us know and we&apos;ll keep it going and deduct any extra charges from your deposit.
            </p>
          </div>
        </div>
      </section>

      {/* Coverage note */}
      <section className="py-6 sm:py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-secondary/60 rounded-2xl px-6 py-5">
            <h2 className="font-semibold text-foreground mb-2">Coverage in your area</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Our home router supports 4G and 5G across the UK. Before dispatch, we check coverage at your delivery postcode and select the best SIM for your area to ensure you get the strongest possible signal. In 4G-only areas the router falls back gracefully and still delivers excellent speeds.
            </p>
          </div>
        </div>
      </section>

      {/* Technical specs */}
      <section className="py-10 sm:py-16 bg-card">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-10 text-center">
            Technical specifications
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {specs.map((group) => (
              <Card key={group.category} className="border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4 pb-3 border-b border-border">
                    {group.category}
                  </h3>
                  <dl className="space-y-3">
                    {group.items.map((item) => (
                      <div key={item.label} className="flex justify-between gap-4">
                        <dt className="text-sm text-muted-foreground flex-shrink-0">{item.label}</dt>
                        <dd className="text-sm text-foreground text-right">{item.value}</dd>
                      </div>
                    ))}
                  </dl>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-xs text-muted-foreground text-center mt-6">
            Speeds are theoretical maximums. Real-world speeds depend on network conditions, location, distance from mast, and number of connected devices. 5G availability varies by postcode.
          </p>
        </div>
      </section>

      {/* What's included */}
      <section className="py-10 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-8">
            What&apos;s included
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 text-left mb-10">
            {[
              "Home router, pre-configured and ready to use",
              "SIM card with unlimited UK data",
              "Power adapter (UK plug)",
              "4 external antennas (pre-attached)",
              "Ethernet cable",
              "Quick-start guide",
              "Prepaid freepost return envelope",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-10">
            <Link href="/book">
              Hire the Home Router
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
