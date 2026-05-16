import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Clock, Wifi, RefreshCw, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata = {
  title: 'Temporary Broadband UK | No Contract WiFi While You Wait | FlexiWiFi',
  description: 'Need temporary broadband or a mobile broadband alternative while waiting for fibre? Hire a WiFi device from £5.50/day. No contract internet, no engineers. Cancel anytime.',
  alternates: { canonical: 'https://www.flexiwifi.co.uk/temporary-broadband-uk' },
  openGraph: {
    title: 'Temporary Broadband UK | No Contract WiFi While You Wait | FlexiWiFi',
    description: 'Need temporary broadband while waiting for fibre or a new line? Hire a WiFi device from £5.50/day. No contracts, no engineers.',
    url: 'https://www.flexiwifi.co.uk/temporary-broadband-uk',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How long does temporary broadband take to set up?', acceptedAnswer: { '@type': 'Answer', text: 'We have a 2-day lead time. Once your device arrives, you\'re online within minutes — no engineer, no installation.' } },
    { '@type': 'Question', name: 'Is there a minimum hire period?', acceptedAnswer: { '@type': 'Answer', text: 'There is a 3-day minimum charge, but otherwise you can return it whenever you like and we\'ll refund the unused days.' } },
    { '@type': 'Question', name: 'Is the data truly unlimited?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. All devices come with genuinely unlimited UK data — no caps, no throttling, no fair usage limits.' } },
    { '@type': 'Question', name: 'Can I use it as a full broadband replacement?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The Home Router is designed for whole-home use. It connects 64+ devices, supports 4G and 5G, and includes an Ethernet port for wired connections.' } },
  ],
}

const reasons = [
  { icon: Clock, title: "Waiting for a new broadband line", description: "Fibre installations, new line activations, and provider switches can take weeks. Don't wait in silence." },
  { icon: Zap, title: "Broadband just cut out", description: "Engineer can't come for days? A hired device keeps you online while you wait for the fix." },
  { icon: RefreshCw, title: "Switching providers", description: "There's often a gap between cancelling one contract and your new one going live. We fill that gap." },
  { icon: Wifi, title: "Short-term property", description: "Renting for a few months and don't want a 12-month broadband contract? Hire by the day instead." },
]

export default function TemporaryBroadbandPage() {
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
                <Clock className="w-4 h-4" />
                Temporary Broadband
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground text-balance mb-6">
                Internet today. No 12-month contract.
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                The simplest mobile broadband alternative for when you're stuck without a connection. Hire a WiFi device, have it delivered in 2 days, and be online within minutes of it arriving. No contract internet, no engineer visits, no hassle.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-10">
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-accent" /><span>£5.50/day, down to £3.00 for longer hires</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-accent" /><span>Unlimited data</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-accent" /><span>No contract</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-accent" /><span>Return any time</span></div>
              </div>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-10">
                <Link href="/book">
                  Get Connected Today
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-72 sm:w-80 lg:w-96 aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/home-router.png"
                  alt="Home WiFi Router"
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

      {/* Reasons */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-4 text-center">Why people need temporary broadband</h2>
          <p className="text-muted-foreground text-center mb-12">You shouldn't have to sign a contract just to get through a gap.</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((r) => (
              <div key={r.title} className="bg-card border border-border rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <r.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signal callout */}
      <section className="pb-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary/5 border border-primary/15 rounded-2xl px-6 py-5">
            <h3 className="font-semibold text-foreground mb-2">Faster and stronger than a phone hotspot</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Tethering to your phone works in a pinch — but it's not a broadband replacement. Our dedicated devices have purpose-built antennas designed to pull in a stronger signal, handle multiple devices at once, and sustain fast speeds over hours of use. No battery drain, no overheating, no slowdown.</p>
          </div>
        </div>
      </section>

      {/* vs broadband contract */}
      <section className="py-16 sm:py-20 bg-card border-y border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-10 text-center">Hire vs. a short-term broadband contract</h2>
          <div className="overflow-hidden rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-secondary">
                  <th className="text-left p-4 font-semibold text-foreground"></th>
                  <th className="text-center p-4 font-semibold text-accent">FlexiWiFi Hire</th>
                  <th className="text-center p-4 font-semibold text-muted-foreground">Broadband Contract</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["Setup time", "2 days delivery, online in minutes", "1–4 weeks"],
                  ["Engineer visit", "Not required", "Often required"],
                  ["Minimum term", "3 days", "12–24 months"],
                  ["Cancellation fee", "None", "Often hundreds of £"],
                  ["Unlimited data", "Yes", "Yes"],
                  ["Works anywhere in UK", "Yes", "Fixed address only"],
                ].map(([label, a, b]) => (
                  <tr key={label} className="bg-background">
                    <td className="p-4 text-muted-foreground">{label}</td>
                    <td className="p-4 text-center font-medium text-foreground">{a}</td>
                    <td className="p-4 text-center text-muted-foreground">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Device recommendation */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-4 text-center">Choose your device</h2>
          <p className="text-muted-foreground text-center mb-10">For a full broadband replacement, the Home Router is the better fit. For one or two people, the Pocket MiFi does the job.</p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-semibold text-foreground text-lg mb-1">Pocket MiFi</h3>
              <p className="text-sm text-muted-foreground mb-4">£5.50/day, down to £3.00 for longer hires</p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                {["Up to 10 devices", "4G speeds", "Battery powered", "Compact and portable", "Unlimited data"].map(f => (
                  <li key={f} className="flex items-center gap-2"><Check className="w-4 h-4 text-accent flex-shrink-0" />{f}</li>
                ))}
              </ul>
              <Button asChild variant="outline" className="w-full">
                <Link href="/book">Hire the Pocket MiFi</Link>
              </Button>
            </div>
            <div className="bg-card border-2 border-primary rounded-2xl p-6 relative">
              <div className="absolute -top-3 left-6 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">Best for broadband replacement</div>
              <h3 className="font-semibold text-foreground text-lg mb-1">Home Router</h3>
              <p className="text-sm text-muted-foreground mb-4">£7.00/day, down to £4.00 for longer hires</p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                {["64+ simultaneous devices", "4G & 5G", "Ethernet port", "Whole-home coverage", "Unlimited data"].map(f => (
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
              { q: "How long does temporary broadband take to set up?", a: "We have a 2-day lead time. Once your device arrives, you're online within minutes — no engineer, no installation." },
              { q: "Is there a minimum hire period?", a: "There is a 3-day minimum charge, but otherwise you can return it whenever you like and we'll refund the unused days." },
              { q: "Is the data truly unlimited?", a: "Yes. All devices come with genuinely unlimited UK data — no caps, no throttling, no fair usage limits." },
              { q: "Can I use it as a full broadband replacement?", a: "Yes. The Home Router is designed for whole-home use. It connects 64+ devices, supports 4G and 5G, and includes an Ethernet port for wired connections." },
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
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">Don't go without internet another day</h2>
          <p className="text-muted-foreground mb-8">Order now, delivered in 2 days. Online within minutes of it arriving — no contracts. Return it when your broadband is sorted.</p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-10">
            <Link href="/book">Order Now <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
