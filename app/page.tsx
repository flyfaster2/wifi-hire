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
  alternates: { canonical: 'https://www.flexiwifi.co.uk' },
  openGraph: {
    title: 'WiFi Hire UK | Portable & Home Router Rental | FlexiWiFi',
    description: 'Hire a WiFi device in the UK with no contracts and no engineers. Pocket MiFi or Home Router delivered fast, with free returns.',
    url: 'https://www.flexiwifi.co.uk',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.flexiwifi.co.uk/#business',
      name: 'FlexiWiFi',
      url: 'https://www.flexiwifi.co.uk',
      telephone: '+447404114272',
      email: 'hello@flexiwifi.co.uk',
      description: 'WiFi device hire in the UK. No contracts, no engineers. Pocket MiFi or Home Router delivered fast, with free returns.',
      areaServed: 'GB',
      openingHours: 'Mo-Su 09:00-20:00',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'WiFi Device Hire',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Product',
              name: 'Pocket MiFi Hire',
              url: 'https://www.flexiwifi.co.uk/devices/pocket-mifi',
            },
            price: '5.50',
            priceCurrency: 'GBP',
            priceSpecification: { '@type': 'UnitPriceSpecification', price: '5.50', priceCurrency: 'GBP', unitText: 'DAY' },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Product',
              name: 'Home Router Hire',
              url: 'https://www.flexiwifi.co.uk/devices/home-router',
            },
            price: '7.00',
            priceCurrency: 'GBP',
            priceSpecification: { '@type': 'UnitPriceSpecification', price: '7.00', priceCurrency: 'GBP', unitText: 'DAY' },
          },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How quickly can I get a device?', acceptedAnswer: { '@type': 'Answer', text: 'We currently have a 2 day lead time on devices. So if you order on a Monday, we can have the device with you by Wednesday.' } },
        { '@type': 'Question', name: 'Do I need to sign a contract?', acceptedAnswer: { '@type': 'Answer', text: 'No contracts at all. You pay for the days you need, and return the device when you\'re done.' } },
        { '@type': 'Question', name: 'Is the data truly unlimited?', acceptedAnswer: { '@type': 'Answer', text: 'Yes! All our plans include genuinely unlimited data with no fair usage caps or throttling.' } },
        { '@type': 'Question', name: 'How do I return the device?', acceptedAnswer: { '@type': 'Answer', text: 'Simply pop the device back in the original packaging and drop it to your local Evri dropoff. Returns are completely free.' } },
        { '@type': 'Question', name: 'Do I need a landline or engineer visit?', acceptedAnswer: { '@type': 'Answer', text: 'No. Our devices use 4G/5G mobile networks, so there\'s no need for a landline or any installation.' } },
      ],
    },
  ],
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
