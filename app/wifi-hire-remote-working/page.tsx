import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Briefcase, Wifi, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata = {
  title: 'WiFi Hire for Remote Working UK | Reliable Internet Anywhere | FlexiWiFi',
  description: 'Reliable WiFi for remote workers, short-term lets, and Airbnb hosts in the UK. Hire from £5.50/day. Unlimited data, no contracts, fast delivery.',
  alternates: { canonical: 'https://www.flexiwifi.co.uk/wifi-hire-remote-working' },
  openGraph: {
    title: 'WiFi Hire for Remote Working UK | Reliable Internet Anywhere | FlexiWiFi',
    description: 'Reliable WiFi for remote workers, short-term lets, and Airbnb hosts in the UK. Hire from £5.50/day. Unlimited data, no contracts.',
    url: 'https://www.flexiwifi.co.uk/wifi-hire-remote-working',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is the connection reliable enough for video calls?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our devices deliver 4G and 5G speeds, which are more than sufficient for HD video calls, file uploads, and working in the cloud.' } },
    { '@type': 'Question', name: 'Can I take it between locations?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The Pocket MiFi is battery-powered and works anywhere in the UK — take it from your home office to a co-working space or client site.' } },
    { '@type': 'Question', name: 'Can I set it up as a permanent office WiFi?', acceptedAnswer: { '@type': 'Answer', text: 'The Home Router is ideal for this — plug it in and it acts as a full broadband replacement with an Ethernet port for wired connections.' } },
    { '@type': 'Question', name: 'Is there a minimum hire period?', acceptedAnswer: { '@type': 'Answer', text: 'There\'s a 3-day minimum, but you can hire week-by-week, month-by-month, or longer. The longer you hire, the lower the daily rate.' } },
  ],
}

const useCases = [
  { icon: Briefcase, title: "Working from a short-term rental", description: "Staying somewhere without reliable WiFi for a week or month? Bring your own — guaranteed speeds, unlimited data." },
  { icon: Globe, title: "Digital nomads", description: "Moving between locations across the UK? Our Pocket MiFi travels with you and works everywhere on 4G." },
  { icon: Wifi, title: "Airbnb & holiday let hosts", description: "Offer your guests a premium WiFi experience. Hire a device per property, return it when the season ends." },
  { icon: Zap, title: "Office backup connection", description: "Broadband down? Keep the team online with a backup device on standby. No setup, no engineer." },
]

export default function RemoteWorkingPage() {
  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      {/* Hero */}
      <section className="relative bg-card border-b border-border overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-2 rounded-full mb-6">
                <Briefcase className="w-4 h-4" />
                Remote Working
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground text-balance mb-6">
                Your WiFi. Wherever the work takes you.
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Don't rely on the landlord's broadband or public hotspots. Hire your own dedicated WiFi device and work with confidence — fast, reliable, and unlimited.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-10">
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-accent" /><span>Unlimited data</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-accent" /><span>4G & 5G speeds</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-accent" /><span>No contracts</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-accent" /><span>£5.50/day, down to £3.00 for longer hires</span></div>
              </div>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-10">
                <Link href="/book">
                  Get Your Device
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-72 sm:w-80 lg:w-96 aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/pocket-mifi.png"
                  alt="Pocket MiFi for remote working"
                  fill
                  sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-12 text-center">Built for flexible work</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {useCases.map((u) => (
              <div key={u.title} className="bg-card border border-border rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <u.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{u.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{u.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signal callout */}
      <section className="pb-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary/5 border border-primary/15 rounded-2xl px-6 py-5">
            <h3 className="font-semibold text-foreground mb-2">More reliable than tethering from your phone</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Phone hotspots are a last resort — they drain the battery, overheat, and struggle when more than one device is connected. Our dedicated hardware uses purpose-built antennas to pull in a stronger signal and deliver consistently fast speeds throughout the working day, without touching your phone.</p>
          </div>
        </div>
      </section>

      {/* Device choice */}
      <section className="py-16 sm:py-20 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-4 text-center">Pick the right device for how you work</h2>
          <p className="text-muted-foreground text-center mb-10">Fixed location or on the move — we have the right device for both.</p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-background border-2 border-primary rounded-2xl p-6 relative">
              <div className="absolute -top-3 left-6 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">On the move</div>
              <h3 className="font-semibold text-foreground text-lg mb-1">Pocket MiFi</h3>
              <p className="text-sm text-muted-foreground mb-4">£5.50/day, down to £3.00 for longer hires</p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                {["Up to 10 devices", "Battery powered — 10 hours", "Works anywhere in the UK", "Fits in your pocket", "Unlimited data"].map(f => (
                  <li key={f} className="flex items-center gap-2"><Check className="w-4 h-4 text-accent flex-shrink-0" />{f}</li>
                ))}
              </ul>
              <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/book">Hire the Pocket MiFi</Link>
              </Button>
            </div>
            <div className="bg-background border-2 border-primary rounded-2xl p-6 relative">
              <div className="absolute -top-3 left-6 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">Fixed location</div>
              <h3 className="font-semibold text-foreground text-lg mb-1">Home Router</h3>
              <p className="text-sm text-muted-foreground mb-4">£7.00/day, down to £4.00 for longer hires</p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                {["64+ simultaneous devices", "4G & 5G", "Ethernet port for wired connection", "Strong indoor signal", "Unlimited data"].map(f => (
                  <li key={f} className="flex items-center gap-2"><Check className="w-4 h-4 text-accent flex-shrink-0" />{f}</li>
                ))}
              </ul>
              <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/book">Hire the Home Router</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-foreground mb-8 text-center">Common questions</h2>
          <div className="space-y-6">
            {[
              { q: "Is the connection reliable enough for video calls?", a: "Yes. Our devices deliver 4G and 5G speeds, which are more than sufficient for HD video calls, file uploads, and working in the cloud." },
              { q: "Can I take it between locations?", a: "Yes. The Pocket MiFi is battery-powered and works anywhere in the UK — take it from your home office to a co-working space or client site." },
              { q: "Can I set it up as a permanent office WiFi?", a: "The Home Router is ideal for this — plug it in and it acts as a full broadband replacement with an Ethernet port for wired connections." },
              { q: "Is there a minimum hire period?", a: "There's a 3-day minimum, but you can hire week-by-week, month-by-month, or longer. The longer you hire, the lower the daily rate." },
            ].map(({ q, a }) => (
              <div key={q} className="border-b border-border pb-6 last:border-0">
                <h3 className="font-semibold text-foreground mb-2">{q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-card border-t border-border">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">Work from anywhere, connected</h2>
          <p className="text-muted-foreground mb-8">No contracts, no engineer, no downtime. Delivered in 2 days — online within minutes of it arriving.</p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-10">
            <Link href="/book">Order Now <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
