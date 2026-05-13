import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-foreground leading-tight text-balance">
              Instant WiFi,{" "}
              <span className="text-accent">wherever you need it</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Rent a WiFi device in seconds. Flexible rental. No contracts, no
              engineers, no fuss. Just reliable internet delivered to your
              door.
            </p>

            {/* Trust Badges */}
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent" />
                <span>Flexible rental</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent" />
                <span>Freepost returns</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent" />
                <span>Unlimited data</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8"
              >
                <Link href="/book">
                  Choose Your Device
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-8">
                <a href="#how-it-works">See How It Works</a>
              </Button>
            </div>
          </div>

          {/* Hero Images - Both Devices */}
          <div className="relative flex items-center justify-center gap-6">
            {/* MiFi Device */}
            <div className="relative w-40 sm:w-48 lg:w-56 aspect-square rounded-2xl overflow-hidden shadow-xl bg-secondary">
              <Image
                src="/images/pocket-mifi.png"
                alt="Pocket MiFi device"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Home Router */}
            <div className="relative w-44 sm:w-52 lg:w-64 aspect-square rounded-2xl overflow-hidden shadow-xl bg-secondary -mt-8">
              <Image
                src="/images/home-router.jpg"
                alt="Home Router device"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
