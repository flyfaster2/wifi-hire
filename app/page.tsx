import type { Metadata } from 'next'
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { DevicesSection } from "@/components/devices-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { PricingSection } from "@/components/pricing-section";
import { UseCasesSection } from "@/components/use-cases-section";
import { FAQSection } from "@/components/faq-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: 'WiFi Hire UK | Portable & Home Router Rental | FlexiWiFi',
  description: 'Hire a WiFi device in the UK with no contracts and no engineers. Pocket MiFi or Home Router delivered fast, with free returns. Perfect for moving home, working remotely, or visiting the UK.',
  openGraph: {
    title: 'WiFi Hire UK | Portable & Home Router Rental | FlexiWiFi',
    description: 'Hire a WiFi device in the UK with no contracts and no engineers. Pocket MiFi or Home Router delivered fast, with free returns.',
    url: 'https://www.flexiwifi.co.uk',
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <DevicesSection />
      <HowItWorksSection />
      <UseCasesSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
