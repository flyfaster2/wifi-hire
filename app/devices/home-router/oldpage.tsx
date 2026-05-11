import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Wifi, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  { label: "Max speed", value: "5G ready" },
  { label: "Connected devices", value: "32+" },
  { label: "Wi-Fi standard", value: "Wi-Fi 6" },
  { label: "Network", value: "5G / 4G" },
];

const specs = [
  { group: "Connectivity", rows: [
    { label: "Primary network", value: "5G NR Sub-6GHz (SA/NSA)" },
    { label: "Fallback network", value: "4G LTE" },
    { label: "SIM type", value: "Nano SIM (pre-installed)" },
  ]},
  { group: "Wi-Fi", rows: [
    { label: "Wi-Fi standard", value: "Wi-Fi 6 (802.11ax)" },
    { label: "Frequency bands", value: "2.4 GHz + 5 GHz dual-band" },
    { label: "Max connected devices", value: "32+" },
    { label: "External antennas", value: "4 × TS-9 connectors" },
  ]},
  { group: "Ports & Power", rows: [
    { label: "Ethernet ports", value: "2 × Gigabit Ethernet (WAN/LAN + LAN)" },
    { label: "Power", value: "Mains powered (plug-in)" },
  ]},
  { group: "Physical", rows: [
    { label: "Dimensions", value: "216 × 80 × 212 mm" },
    { label: "Weight", value: "~550 g" },
    { label: "Colour", value: "White" },
  ]},
];

const whatsIncluded = [
  "Zyxel NR5103E 5G Home Router",
  "UK mains power adapter",
  "Ethernet cable",
  "Pre-installed UK SIM (EE, Vodafone, or Three — best for your area)",
  "Quick-start guide",
  "Freepost return envelope",
];

export default function HomeRouterPage() {
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
              <Home className="w-5 h-5 text-accent" />
            </div>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Home Router</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl text-foreground mb-4">
            Zyxel NR5103E
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            A 5G home router that delivers whole-home broadband without a landline. With four external antennas and Wi-Fi 6, it connects 32+ devices and picks up signal where phones often can't.
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
                <p className="font-semibold text-foreground mb-1">Stronger signal than your phone</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Four external antennas and dedicated router hardware often pull in signal in spots where phones struggle. We check your postcode before dispatch and select the best network — EE, Vodafone, or Three — to maximise coverage at your address. Where 5G isn't available, the router automatically falls back to 4G LTE.
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
              Hire the Home Router
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="flex-1 py-6 text-lg">
            <Link href="/devices/pocket-mifi">
              View Pocket MiFi instead
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
