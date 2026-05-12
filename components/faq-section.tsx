"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How quickly can I get a device?",
    answer:
      "We currently have a 2 day lead time on devices. So if you order on a Monday, we can have the device with you by Wednesday. If you need it sooner, just get in touch with us and we'll get back to you as soon as we can. ",
  },
  {
    question: "Do I need to sign a contract?",
    answer:
      "No contracts at all. You pay for the days you need, and return the device when you're done. It's completely flexible.",
  },
  {
    question: "What's the coverage like?",
    answer:
      "The Pocket MiFi runs on 4G. The Home Router supports both 4G and 5G where available. We check the delivery postcode before dispatch and select the best available network — EE, Vodafone, or Three — to make sure you get the strongest signal at your location.",
  },
  {
    question: "How do I return the device?",
    answer:
      "Simply pop the device back in the original packaging and drop it back to your local Evri dropoff. Returns are completely free.",
  },
  {
    question: "Is the data truly unlimited?",
    answer:
      "Yes! All our plans include genuinely unlimited data with no fair usage caps or throttling.",
  },
  {
    question: "What if I need to extend my rental?",
    answer:
      "Just get in touch with the team and we'll sort it for you. We'll deduct the remaining amount from your deposit and update your return date — no hassle.",
  },
  {
    question: "What if my plans change or I return the device early?",
    answer:
      "No problem. If you return early, we'll refund the unused days — there's just a 3 day minimum charge. If you need to keep the device longer than planned, let us know and we'll charge the extra days from your deposit. Either way, the posting date stops the clock, so you're only ever charged for the time you actually have the device.",
  },
  {
    question: "Do I need a landline or engineer visit?",
    answer:
      "Absolutely not. Our devices use 4G/5G mobile networks, so there's no need for a landline or any installation. With our devices, you'll be online in minutes",
  },
  {
    question: "Why do you charge a deposit?",
    answer:
      "Unlike cheaper alternatives, we send out premium devices — the same hardware used by businesses. These devices have better antennas and therefore offer better signal and faster speeds to our customers. The deposit protects us against loss or damage, and it's fully refunded as soon as the device is returned safely.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="pb-16 sm:pb-24 bg-card">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground text-balance">
            Questions? We&apos;ve got answers
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to know about hiring WiFi.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-background rounded-xl border border-border px-6"
            >
              <AccordionTrigger className="text-left text-foreground hover:text-accent py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
