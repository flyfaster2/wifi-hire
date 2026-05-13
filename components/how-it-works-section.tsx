import { ShoppingCart, Package, Wifi, MailOpen } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Order online",
    description:
      "Choose your device and rental period. Quick checkout, no account needed.",
    icon: ShoppingCart,
  },
  {
    number: "02",
    title: "Receive on your selected date",
    description:
      "Your device arrives ready to use. Our Pocket MiFi devices fit through your letter box.",
    icon: Package,
  },
  {
    number: "03",
    title: "Connect instantly",
    description:
      "Plug in or switch on. Connect your devices using the simple instructions.",
    icon: Wifi,
  },
  {
    number: "04",
    title: "Return freepost",
    description:
      "Pop it in the prepaid envelope when you're done. No printer required. Drop at any Evri dropoff point.",
    icon: MailOpen,
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground text-balance">
            Simple as one, two, three... four
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            No engineers, no installation, no contracts. Just straightforward
            WiFi hire.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative group flex flex-col">
              {/* Connector Line (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-px bg-border" />
              )}

              <div className="relative bg-card rounded-2xl p-6 sm:p-8 border border-border group-hover:border-accent/30 transition-colors flex flex-col flex-1">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                  <step.icon className="w-6 h-6 text-accent" />
                </div>

                {/* Step Number */}
                <span className="text-xs text-muted-foreground uppercase tracking-wide">
                  Step {step.number}
                </span>

                {/* Content */}
                <h3 className="mt-2 text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
