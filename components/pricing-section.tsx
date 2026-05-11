import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

const pricingPlans = [
  {
    device: "Pocket MiFi",
    delivery: "£5",
    plans: [
      { duration: "3–7 days",  price: "£6.00", perDay: true },
      { duration: "8–21 days", price: "£5.00", perDay: true, popular: true },
      { duration: "22+ days",  price: "£4.50", perDay: true },
    ],
  },
  {
    device: "Home Router",
    delivery: "£8",
    plans: [
      { duration: "3–7 days",  price: "£7.50", perDay: true },
      { duration: "8–21 days", price: "£6.00", perDay: true, popular: true },
      { duration: "22+ days",  price: "£5.00", perDay: true },
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
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground text-balance">
            Simple pricing, no surprises
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The longer you hire, the less you pay per day. All plans include
            unlimited data.
          </p>
        </div>

        {/* Pricing Tables */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {pricingPlans.map((devicePlan) => (
            <Card
              key={devicePlan.device}
              className="overflow-hidden border-border"
            >
              <div className="bg-primary text-primary-foreground p-6 flex items-baseline justify-between">
                <h3 className="text-xl font-semibold">{devicePlan.device}</h3>
                <span className="text-sm text-primary-foreground/70">Delivery {devicePlan.delivery}</span>
              </div>
              <CardContent className="p-0">
                <div className="divide-y divide-border">
                  {devicePlan.plans.map((plan) => (
                    <div
                      key={plan.duration}
                      className={`flex items-center justify-between p-6 ${
                        plan.popular ? "bg-accent/5" : ""
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-foreground font-medium">
                          {plan.duration}
                        </span>
                        {plan.popular && (
                          <span className="px-2 py-0.5 bg-accent text-accent-foreground text-xs rounded-full">
                            Popular
                          </span>
                        )}
                      </div>
                      <div className="text-right">
                        <span className="text-xl font-semibold text-foreground">
                          {plan.price}
                        </span>
                        {plan.perDay && (
                          <span className="text-muted-foreground text-sm">
                            /day
                          </span>
                        )}
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
