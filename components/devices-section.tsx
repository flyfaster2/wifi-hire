import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Home, ArrowRight } from "lucide-react";

const devices = [
  {
    name: "Pocket MiFi",
    tagline: "WiFi in your pocket",
    description:
      "Compact and portable. Perfect for individuals on the move. Connects up to 10 devices with 4G speeds wherever you go.",
    image: "/images/pocket-mifi.png",
    price: "From £5.50",
    priceNote: "/day for longer hires",
    features: [
      "Up to 10 devices",
      "10-hour battery",
      "Fits in your pocket",
      "Unlimited UK data",
    ],
    icon: Zap,
    bestFor: ["Tourists", "Business travellers", "Students"],
    learnMoreHref: "/devices/pocket-mifi",
    hireHref: "/book",
  },
  {
    name: "Home Router",
    tagline: "WiFi for the home",
    description:
      "Plug in and connect your whole household. No landline needed. 5G device capable of broadband speeds. Ideal for temporary accommodation or for gaps in your broadband supply.",
    image: "/images/home-router.jpg",
    price: "From £7.00",
    priceNote: "/day for longer hires",
    features: [
      "Up to 64 devices",
      "Plug-in power",
      "Stronger signal",
      "Unlimited UK data",
	"5G Capability (500mbps)",
	"Ethernet ports",
    ],
    icon: Home,
    bestFor: ["Moving home", "Remote workers", "Short-term rentals"],
    learnMoreHref: "/devices/home-router",
    hireHref: "/book",
  },
];

export function DevicesSection() {
  return (
    <section id="devices" className="py-16 sm:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground text-balance">
            Two devices, one simple solution
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the device that fits your needs. Both come ready to use —
            just switch on and connect.
          </p>
          <p className="mt-2 text-sm text-muted-foreground/70">
            Images are for illustration only. Actual device may vary.
          </p>
        </div>

        {/* Device Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {devices.map((device) => (
            <Card
              key={device.name}
              className="overflow-hidden border-border bg-background group hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[4/3] relative bg-secondary">
                <Image
                  src={device.image}
                  alt={device.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-foreground">
                      {device.name}
                    </h3>
                    <p className="text-muted-foreground mt-1">
                      {device.tagline}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-semibold text-foreground">
                      {device.price}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {device.priceNote}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {device.description}
                </p>

                {/* Features List */}
                <ul className="mt-6 grid grid-cols-2 gap-2">
                  {device.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Best For */}
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">
                    Best for
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {device.bestFor.map((use) => (
                      <span
                        key={use}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                      >
                        {use}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <Button asChild variant="outline" className="flex-1">
                    <Link href={device.learnMoreHref}>
                      Learn more
                    </Link>
                  </Button>
                  <Button asChild className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href={device.hireHref}>
                      Hire {device.name}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
