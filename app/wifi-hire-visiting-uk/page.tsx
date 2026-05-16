import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Plane, MapPin, Shield, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata = {
  title: 'WiFi Hire for Tourists Visiting the UK | Portable Internet | FlexiWiFi',
  description: 'Visiting the UK? Hire a pocket WiFi for tourists — MiFi device delivered to your hotel or address. Unlimited data, no roaming charges. From £5.50/day. Free returns.',
  alternates: { canonical: 'https://www.flexiwifi.co.uk/wifi-hire-visiting-uk' },
  openGraph: {
    title: 'WiFi Hire for Tourists Visiting the UK | Portable Internet | FlexiWiFi',
    description: 'Visiting the UK? Hire a portable WiFi device delivered to your hotel or address. Unlimited data, no roaming charges. From £5.50/day.',
    url: 'https://www.flexiwifi.co.uk/wifi-hire-visiting-uk',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Can you deliver to a hotel or Airbnb in the UK?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We deliver to any UK address — hotel, Airbnb, holiday let, or a friend\'s house. Just enter the address at checkout.' } },
    { '@type': 'Question', name: 'How do I return the device before I fly home?', acceptedAnswer: { '@type': 'Answer', text: 'Drop it at any Evri parcel shop before you leave. Returns are free and we\'ll refund any unused days.' } },
    { '@type': 'Question', name: 'Does it work across the whole UK?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our devices connect to 4G networks across England, Scotland, Wales, and Northern Ireland. We select the best network for your area before dispatch.' } },
    { '@type': 'Question', name: 'Is there a data limit?', acceptedAnswer: { '@type': 'Answer', text: 'No. All devices come with genuinely unlimited UK data. Stream, browse, and video call as much as you like.' } },
  ],
}

const benefits = [
  { icon: Shield, title: "No roaming charges", description: "Skip the expensive international roaming fees. Our UK SIM gives you unlimited data at a flat daily rate." },
  { icon: Smartphone, title: "Connect all your devices", description: "Share the connection across your phone, laptop, and tablet — up to 10 devices on the Pocket MiFi." },
  { icon: MapPin, title: "Works anywhere in the UK", description: "Travelling from London to Edinburgh? The device works across England, Scotland, Wales, and Northern Ireland." },
  { icon: Plane, title: "Easy returns before you fly", description: "Drop it at any Evri parcel shop on the way to the airport. Returns are completely free." },
]

export default function VisitingUKPage() {
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
                <Plane className="w-4 h-4" />
                Visiting the UK
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground text-balance mb-6">
                Explore the UK without the roaming bill
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Hire a pocket WiFi for tourists — a dedicated MiFi device delivered straight to your hotel, Airbnb, or wherever you're staying in the UK. Unlimited data, no roaming charges, free returns before you fly home.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-10">
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-accent" /><span>No roaming fees</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-accent" /><span>Unlimited data</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-accent" /><span>Delivered anywhere in the UK</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-accent" /><span>Free returns</span></div>
              </div>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-10">
                <Link href="/book">
                  Order Before You Arrive
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-72 sm:w-80 lg:w-96 aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/pocket-mifi.png"
                  alt="Pocket MiFi portable WiFi device"
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

      {/* Benefits */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-12 text-center">Why hire instead of roaming?</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-card border border-border rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <b.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signal callout */}
      <section className="pb-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary/5 border border-primary/15 rounded-2xl px-6 py-5">
            <h3 className="font-semibold text-foreground mb-2">Better signal than your phone</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Using your phone as a hotspot while travelling drains the battery and often gives patchy performance. Our dedicated devices have stronger antennas, stay connected for longer, and share a stable connection with all your devices — without touching your phone's battery.</p>
          </div>
        </div>
      </section>

      {/* How to order */}
      <section className="py-16 sm:py-20 bg-card border-y border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-10 text-center">Order before you arrive</h2>
          <div className="space-y-6">
            {[
              { step: "1", title: "Order online", desc: "Choose your device and dates. Enter your UK delivery address at checkout — hotel, Airbnb, holiday let, or a friend's place." },
              { step: "2", title: "We deliver it", desc: "We'll send it straight to wherever you're staying in the UK. Your device arrives ready to use — SIM already installed and activated. Just power it on." },
              { step: "3", title: "Explore with confidence", desc: "Use it anywhere in the UK. Navigate, stream maps, video call home — no worrying about data." },
              { step: "4", title: "Return before you fly", desc: "Drop it at any Evri parcel shop. Returns are free and we'll refund any unused days." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex gap-5">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold flex-shrink-0 text-sm">{step}</div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-foreground mb-8 text-center">Common questions</h2>
          <div className="space-y-6">
            {[
              { q: "Can you deliver to a hotel or Airbnb in the UK?", a: "Yes. We deliver to any UK address — hotel, Airbnb, holiday let, or a friend's house. Just enter the address at checkout." },
              { q: "How do I return the device before I fly home?", a: "Drop it at any Evri parcel shop before you leave. Returns are free and we'll refund any unused days." },
              { q: "Does it work across the whole UK?", a: "Yes. Our devices connect to 4G networks across England, Scotland, Wales, and Northern Ireland. We select the best network for your area before dispatch." },
              { q: "Is there a data limit?", a: "No. All devices come with genuinely unlimited UK data. Stream, browse, and video call as much as you like." },
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
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">Ready to explore the UK connected?</h2>
          <p className="text-muted-foreground mb-8">Order ahead of your trip and have the device waiting wherever you're staying. Unlimited data, delivered to your door.</p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-10">
            <Link href="/book">Order Now <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
