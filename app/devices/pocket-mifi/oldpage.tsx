import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Battery, Wifi, Smartphone, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  { label: "Max speed", value: "300 Mbps" },
  { label: "Connected devices", value: "Up to 10" },
  { label: "Battery life", value: "~8 hours" },
  { label: "Network", value: "4G LTE" },
];

const specs = [
  { group: "Connectivity", rows: [
    { label: "Network type", value: "4G LTE Cat 6" },
    { label: "Download speed", value: "Up to 300 Mbps" },
    { label: "Upload speed", value: "Up to 50 Mbps" },
    { label: "SIM type", value: "Nano SIM (pre-installed)" },
  ]},
  { group: "Wi-Fi", rows: [
    { label: "Wi-Fi standard", value: "Wi-Fi 5 (802.11ac)" },
    { label: "Frequency bands", value: "2.4 GHz + 5 GHz dual-band" },
    { label: "Max connected devices", value: "10" },
  ]},
  { group: "Battery & Power", rows: [
    { label: "Battery capacity", value: "3000 mAh" },
    { label: "Battery life", value: "Up to 8 hours" },
    { label: "Charging", value: "USB-C" },
  ]},
  { group: "Physical", rows: [
    { label: "Dimensions", value: "97 × 63 × 14.5 mm" },
    { label: "Weight", value: "~130 g" },
    { label: "Display", value: "2.4\" colour touchscreen" },
  ]},
];

const whatsIncluded = [
  "TP-Link M7352 Pocket MiFi device",
  "USB-C charging cable",
  "Pre-installed UK SIM (EE, Vodafone, or Three — best for your area)",
  "Quick-start guide",
  "Freepost return envelope",
];

export default function PocketMiFiPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Back link */}
        <Link
          href="/#devices"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to devices
        </Link>

        {/* Hero */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
              <Zap className="w-5 h-5 text-accent" />
            </div>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Pocket MiFi</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl text-foreground mb-4">
            TP-Link M7352
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            A compact 4G LTE hotspot that fits in your pocket. Connects up to 10 devices with fast dual-band Wi-Fi 5 — no cables, no setup, just switch on and connect.
          </p>
        </div>

        {/* Highlight stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {highlights.map((h) => (
            <Card key={h.label} className="border-border">
              <CardContent className="p-5 text-center">
                <p className="text-2xl font-bold text-foreground">{h.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{h.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical specs */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Technical specifications</h2>
          <div className="space-y-6">
            {specs.map((section) => (
              <div key={section.group}>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                  {section.group}
                </h3>
                <div className="rounded-xl border border-border overflow-hidden">
                  {section.rows.map((row, i) => (
                    <div
                      key={row.label}
                      className={`flex justify-between px-5 py-3.5 text-sm ${
                        i % 2 === 0 ? "bg-card" : "bg-background"
                      }`}
                    >
                      <span className="text-muted-foreground">{row.label}</span>
                      <span className="text-foreground font-medium text-right">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coverage note */}
        <Card className="border-accent/20 bg-accent/5 mb-10">
          <CardContent className="p-6">
            <div className="flex gap-3">
              <Wifi className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground mb-1">Coverage tailored to your location</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We check your delivery postcode before dispatch and pre-install the SIM from the network with the best 4G coverage in your area — EE, Vodafone, or Three.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What's included */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-foreground mb-6">What's included</h2>
          <ul className="space-y-3">
            {whatsIncluded.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-accent" />
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Flexibility note */}
        <Card className="border-border bg-secondary/30 mb-10">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">Flexible rental.</span>{" "}
              Don't worry if your plans change — the posting date stops the clock. Return early and we'll refund the unused days (3 day minimum charge). And if you need to hold onto your device a little longer, just let us know.
            </p>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground py-6 text-lg">
            <Link href="/book">
              Hire the Pocket MiFi
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="flex-1 py-6 text-lg">
            <Link href="/devices/home-router">
              View Home Router instead
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
