import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

const pricingPlans = [
  {
    device: "Pocket MiFi",
    bands: [
      { label: "Days 1–7",  price: "£5.50", popular: false },
      { label: "Days 8–14", price: "£4.00", popular: true },
      { label: "Days 15+",  price: "£3.00", popular: false },
    ],
  },
  {
    device: "Home Router",
    bands: [
      { label: "Days 1–7",  price: "£7.00", popular: false },
      { label: "Days 8–14", price: "£5.50", popular: true },
      { label: "Days 15+",  price: "£4.00", popular: false },
    ],
  },
];

const included = [
  "Freepost return envelope",
  "Unlimited data",
  "UK customer support",
  "No credit checks",
  "No contracts",
  "3-day minimum hire",
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-4 sm:mb-6">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground text-balance">
            Total Flexibility. Zero Commitment.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Only need it until your fibre is installed? Great. Our rates drop after week one, and if you finish early, just send it back. We&apos;ll recalculate your bill at the best rate and refund your deposit same-day.
          </p>
        </div>

        {/* Pricing Tables */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {pricingPlans.map((devicePlan) => (
            <Card
              key={devicePlan.device}
              className="overflow-hidden border-border"
            >
              <div className="bg-primary text-primary-foreground p-6">
                <h3 className="text-xl font-semibold">{devicePlan.device}</h3>
              </div>
              <CardContent className="p-0">
                <div className="divide-y divide-border">
                  {devicePlan.bands.map((band) => (
                    <div
                      key={band.label}
                      className={`flex items-center justify-between p-6 ${
                        band.popular ? "bg-accent/5" : ""
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-foreground font-medium">
                          {band.label}
                        </span>
                        {band.popular && (
                          <span className="px-2 py-0.5 bg-accent text-accent-foreground text-xs rounded-full">
                            Popular
                          </span>
                        )}
                      </div>
                      <div className="text-right">
                        <span className="text-xl font-semibold text-foreground">
                          {band.price}
                        </span>
                        <span className="text-muted-foreground text-sm">/day</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* What's Included */}
        <div className="bg-background rounded-2xl p-8 sm:p-12 border border-border">
          <h3 className="text-xl font-semibold text-foreground text-center mb-8">
            Everything included, no hidden fees
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {included.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-accent" />
                </div>
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-10"
            >
              <Link href="/book">Start Your Order</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
