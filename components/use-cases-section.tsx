import { Home, Plane, Briefcase, Signal } from "lucide-react";

const useCases = [
  {
    icon: Home,
    title: "Moving home",
    description:
      "Bridge the gap between broadband contracts. Stay connected while you wait for your new provider.",
  },
  {
    icon: Plane,
    title: "Visiting the UK",
    description:
      "Tourists and visitors get instant connectivity without expensive roaming charges.",
  },
  {
    icon: Signal,
    title: "When your phone signal isn't enough",
    description:
      "Dedicated antennas and hardware often pick up signal where phones can't — ideal for rural areas, thick walls, or poor indoor reception.",
  },
  {
    icon: Briefcase,
    title: "Remote working",
    description:
      "Short-term rentals, Airbnbs, or co-living spaces. Reliable WiFi for work anywhere.",
  },
];

export function UseCasesSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground text-balance">
            WiFi for every situation
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Whether you&apos;re moving, working remotely, or struggling with signal — we&apos;ve got
            you covered.
          </p>
        </div>

        {/* Use Case Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="bg-card rounded-2xl p-6 border border-border hover:border-accent/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                <useCase.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {useCase.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
