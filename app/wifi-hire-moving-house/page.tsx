import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Home, Package, RefreshCw, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata = {
  title: 'WiFi Hire for Moving House UK | Temporary Broadband | FlexiWiFi',
  description: 'Moving house and need internet fast? Hire a WiFi device from £5.50/day. No contracts, no engineers. Delivered to your new address, free returns.',
  alternates: { canonical: 'https://www.flexiwifi.co.uk/wifi-hire-moving-house' },
  openGraph: {
    title: 'WiFi Hire for Moving House UK | Temporary Broadband | FlexiWiFi',
    description: 'Moving house and need internet fast? Hire a WiFi device from £5.50/day. No contracts, no engineers. Delivered to your new address.',
    url: 'https://www.flexiwifi.co.uk/wifi-hire-moving-house',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How quickly can I get WiFi when moving house?', acceptedAnswer: { '@type': 'Answer', text: 'We have a 2-day lead time. Order before you move and the device will be waiting at your new address.' } },
    { '@type': 'Question', name: 'Do I need an engineer to install it?', acceptedAnswer: { '@type': 'Answer', text: 'No. Our devices use 4G/5G mobile networks. Just plug in and you\'re online within minutes — no landline, no engineer visit.' } },
    { '@type': 'Question', name: 'What if my broadband gets installed sooner than expected?', acceptedAnswer: { '@type': 'Answer', text: 'No problem. Return it early and we\'ll refund the unused days. There\'s just a 3-day minimum charge.' } },
    { '@type': 'Question', name: 'Can I use it for the whole household?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The Home Router connects up to 64 devices simultaneously and supports 4G and 5G — perfect for a full household.' } },
  ],
}

const steps = [
  { icon: Package, title: "Order before you move", description: "Place your order a couple of days before moving day and have it delivered to your new address." },
  { icon: Wifi, title: "Plug in and connect", description: "No engineer, no landline. Just power it on and you're online within minutes." },
  { icon: RefreshCw, title: "Return when broadband arrives", description: "Once your new broadband is set up, pop it in the freepost envelope and send it back. We'll refund any unused days." },
]

export default function MovingHousePage() {
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
                <Home className="w-4 h-4" />
                Moving House
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground text-balance mb-6">
                Online before the boxes are unpacked
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Don't wait weeks for a broadband engineer. Hire a WiFi device, have it delivered to your new address, and be online within minutes of arriving.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-10">
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-accent" /><span>No contracts</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-accent" /><span>No engineer needed</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-accent" /><span>Refund for unused days</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-accent" /><span>Free returns</span></div>
              </div>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-10">
                <Link href="/book">
                  Order Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-72 sm:w-80 lg:w-96 aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/home-router.jpg"
                  alt="Home Router WiFi device"
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

      {/* The problem */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-6 text-center">The broadband gap is real</h2>
          <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
            <p>When you move into a new home, getting broadband connected rarely happens overnight. Engineer appointments get booked weeks out. Your chosen provider might need to activate a line. And if you're moving to a new area, switching providers means starting from scratch.</p>
            <p>In the meantime, you're stuck hotspotting off your phone — burning through your data allowance, struggling with slow speeds when multiple people need to connect, and dealing with the stress of it all on top of an already hectic move.</p>
            <p>A hired WiFi device bridges that gap cleanly. No commitment, no installation, no fuss — just internet when you need it.</p>
          </div>
          <div className="mt-8 bg-primary/5 border border-primary/15 rounded-2xl px-6 py-5">
            <h3 className="font-semibold text-foreground mb-2">Better than using your phone as a hotspot</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Phones are designed for calls and apps — not to act as a router. Our dedicated devices have purpose-built antennas that pull in a stronger signal, handle more simultaneous connections, and deliver consistently faster speeds than a mobile hotspot. No battery drain, no overheating, no throttling after a few hours.</p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 sm:py-20 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-12 text-center">How it works</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={step.title} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">Step {i + 1}</div>
                <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Which device */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-4 text-center">Which device is right for you?</h2>
          <p className="text-muted-foreground text-center mb-10">For most house moves, we recommend the Home Router — it's designed to replace your broadband, not just supplement it.</p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-semibold text-foreground text-lg mb-1">Pocket MiFi</h3>
              <p className="text-sm text-muted-foreground mb-4">From £5.50/day</p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                {["Connects up to 10 devices", "4G speeds", "Battery powered — use on the go", "Great for 1–2 people", "Unlimited data"].map(f => (
                  <li key={f} className="flex items-center gap-2"><Check className="w-4 h-4 text-accent flex-shrink-0" />{f}</li>
                ))}
              </ul>
              <Button asChild variant="outline" className="w-full">
                <Link href="/book">Hire the Pocket MiFi</Link>
              </Button>
            </div>
            <div className="bg-card border-2 border-primary rounded-2xl p-6 relative">
              <div className="absolute -top-3 left-6 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">Recommended</div>
              <h3 className="font-semibold text-foreground text-lg mb-1">Home Router</h3>
              <p className="text-sm text-muted-foreground mb-4">From £7.00/day</p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                {["Connects 64+ devices", "4G & 5G capable", "Ethernet port for wired connection", "Designed for whole-home use", "Unlimited data"].map(f => (
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
      <section className="py-16 sm:py-20 bg-card border-t border-border">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-foreground mb-8 text-center">Common questions</h2>
          <div className="space-y-6">
            {[
              { q: "How quickly can I get WiFi when moving house?", a: "We have a 2-day lead time. Order before you move and the device will be waiting at your new address." },
              { q: "Do I need an engineer to install it?", a: "No. Our devices use 4G/5G mobile networks. Just plug in and you're online within minutes — no landline, no engineer visit." },
              { q: "What if my broadband gets installed sooner than expected?", a: "No problem. Return it early and we'll refund the unused days. There's just a 3-day minimum charge." },
              { q: "Can I use it for the whole household?", a: "Yes. The Home Router connects up to 64 devices simultaneously and supports 4G and 5G — perfect for a full household." },
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
      <section className="py-16 sm:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">Ready to stay connected on moving day?</h2>
          <p className="text-muted-foreground mb-8">Order now and have your device delivered to your new home. Return it whenever you're ready — we'll refund the unused days.</p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-10">
            <Link href="/book">Order Now <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
