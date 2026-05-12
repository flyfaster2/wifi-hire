import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Check, Battery, Wifi, Smartphone, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const specs = [
  {
    category: "Mobile Network",
    items: [
      { label: "Network type", value: "4G LTE / 3G" },
      { label: "LTE category", value: "Cat6" },
      { label: "Download speed (max)", value: "Up to 300 Mbps" },
      { label: "Upload speed (max)", value: "Up to 50 Mbps" },
      { label: "Frequency bands (LTE)", value: "B1, B3, B5, B7, B8, B20, B28, B38, B40, B41" },
      { label: "Frequency bands (3G)", value: "B1, B5, B8" },
      { label: "SIM type", value: "Nano SIM (4FF)" },
    ],
  },
  {
    category: "Wi-Fi",
    items: [
      { label: "Wi-Fi standard", value: "802.11a/b/g/n/ac (Wi-Fi 5)" },
      { label: "Frequency", value: "2.4 GHz & 5 GHz (dual-band)" },
      { label: "2.4 GHz speed", value: "Up to 300 Mbps" },
      { label: "5 GHz speed", value: "Up to 433 Mbps" },
      { label: "Max simultaneous connections", value: "10 devices" },
      { label: "Security", value: "WPA2/WPA3, WPS" },
    ],
  },
  {
    category: "Battery & Power",
    items: [
      { label: "Battery capacity", value: "3,000 mAh" },
      { label: "Battery life", value: "Up to 10 hours" },
      { label: "Charging", value: "USB-C" },
      { label: "Standby time", value: "Up to 600 hours" },
    ],
  },
  {
    category: "Hardware",
    items: [
      { label: "Display", value: "2.4\" colour touchscreen" },
      { label: "Dimensions", value: "116 × 65 × 15 mm" },
      { label: "Weight", value: "130 g" },
      { label: "Operating temperature", value: "0°C to 40°C" },
      { label: "Storage temperature", value: "-20°C to 60°C" },
    ],
  },
];

const highlights = [
  { icon: Wifi, label: "Dual-band Wi-Fi 5", sub: "2.4 GHz + 5 GHz" },
  { icon: Smartphone, label: "10 devices", sub: "Connect simultaneously" },
  { icon: Battery, label: "10-hour battery", sub: "All-day use" },
  { icon: Zap, label: "300 Mbps", sub: "Peak download" },
];

export const metadata = {
  title: 'Pocket MiFi Hire UK | Portable WiFi Rental | FlexiWiFi',
  description: 'Hire a pocket MiFi in the UK from £5.50/day. Unlimited data, 10-hour battery, connects up to 10 devices. No contracts. Fast delivery, free returns.',
  openGraph: {
    title: 'Pocket MiFi Hire UK | Portable WiFi Rental | FlexiWiFi',
    description: 'Hire a pocket MiFi in the UK from £5.50/day. Unlimited data, 10-hour battery, connects up to 10 devices. No contracts.',
    url: 'https://www.flexiwifi.co.uk/devices/pocket-mifi',
  },
}

export default function PocketMiFiPage() {
  return (
    <div className="min-h-screen bg-background">
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
              <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">Pocket MiFi</p>
              <h1 className="font-serif text-4xl sm:text-5xl text-foreground mb-4">
                TP-Link M7352
              </h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Compact dual-band 4G mobile hotspot. Fits in your pocket, connects up to 10 devices, and lasts all day on a single charge.
              </p>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-3xl font-semibold text-foreground">From £5.50</span>
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
                src="/images/pocket-mifi.jpg"
                alt="TP-Link M7352 Pocket MiFi"
                fill
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
            Speeds are theoretical maximums. Real-world speeds depend on network conditions, location, and number of connected devices.
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
              "TP-Link M7352 device, pre-configured and ready to use",
              "SIM card with unlimited UK data",
              "USB-C charging cable",
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
              Hire the Pocket MiFi
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
