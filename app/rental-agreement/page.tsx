import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Rental Agreement | FlexiWiFi",
  description: "FlexiWiFi rental agreement terms and conditions.",
};

export default function RentalAgreementPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <h1 className="font-serif text-4xl sm:text-5xl text-foreground mb-3">
          Rental Agreement
        </h1>
        <p className="text-muted-foreground mb-12">Last updated: May 2026</p>

        <div className="prose prose-neutral max-w-none space-y-10 text-foreground">

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-foreground">1. The Parties</h2>
            <p className="text-muted-foreground leading-relaxed">
              This agreement is between <strong className="text-foreground">FlexiWiFi Ltd</strong> ("we", "us", "our") and the person placing the order ("you", "the customer"). By proceeding to payment you confirm that you have read, understood, and agreed to these terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-foreground">2. The Device</h2>
            <p className="text-muted-foreground leading-relaxed">
              We will supply the device specified in your order (Pocket MiFi or Home Router). The device remains our property at all times. You are responsible for keeping it safe and returning it in the same condition as received, subject to fair wear and tear.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-foreground">3. Rental Period & Charges</h2>
            <p className="text-muted-foreground leading-relaxed">
              The rental period begins on your selected delivery date and ends on the date we receive the device back. Pricing is tiered — lower day rates apply only to days within that band, not retroactively to all days. A minimum hire period of 3 days applies.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If you return the device before your estimated return date, we will refund the unused days (subject to the 3-day minimum). The postmark or Evri drop-off date is used to determine the return date.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If you need to extend your rental beyond the estimated return date, you must notify us in advance. Additional days will be charged at the applicable rate and deducted from your deposit.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-foreground">4. Deposit</h2>
            <p className="text-muted-foreground leading-relaxed">
              A refundable deposit is charged at the time of payment. This deposit is held as security against loss, theft, or damage beyond fair wear and tear. The deposit will be refunded in full within 3–5 working days of us receiving the device back in good condition.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If the device is returned damaged, we reserve the right to deduct the reasonable cost of repair or replacement from the deposit. If the device is not returned, the deposit will be retained in full and we may pursue further recovery of costs.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-foreground">5. Delivery</h2>
            <p className="text-muted-foreground leading-relaxed">
              We deliver Monday to Friday only. Delivery timescales are estimates and we cannot be held liable for delays caused by the courier. Risk of damage or loss during outbound delivery passes to you upon receipt of the device. Please inspect the device upon arrival and notify us of any damage within 24 hours.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-foreground">6. Returns</h2>
            <p className="text-muted-foreground leading-relaxed">
              You are responsible for returning the device using the prepaid Evri returns label provided. The device must be adequately packaged to prevent damage in transit. We recommend retaining your proof of postage until your deposit has been refunded.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If you lose the return label, please contact us and we will arrange a replacement. We cannot accept liability for devices lost in return transit where proof of postage cannot be provided.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-foreground">7. Acceptable Use</h2>
            <p className="text-muted-foreground leading-relaxed">
              The device must only be used within the United Kingdom. You must not use the device for any unlawful purpose, or in any way that may damage, overload, or impair the network. Unlimited data is subject to our network provider's fair use policies for abusive or commercial-scale usage.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-foreground">8. Loss, Theft & Damage</h2>
            <p className="text-muted-foreground leading-relaxed">
              You are responsible for the device from the moment of delivery until we receive it back. In the event of theft, please obtain a crime reference number and notify us immediately. We reserve the right to charge for the full replacement cost of a device that is lost, stolen, or damaged beyond repair.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-foreground">9. Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              We are not liable for any loss of business, revenue, profits, or data arising from the use of or inability to use the device or network service. Our total liability to you shall not exceed the total amount paid by you for the rental.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We do not guarantee specific download or upload speeds, as these depend on network coverage and conditions at your location.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-foreground">10. Cancellations</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you wish to cancel your order before the device has been dispatched, please contact us as soon as possible. We will issue a full refund where cancellation is received before dispatch. Once dispatched, the 3-day minimum charge applies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-foreground">11. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              This agreement is governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-foreground">12. Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this agreement, please contact us via the{' '}
              <Link href="/contact" className="text-foreground underline underline-offset-2 hover:text-accent">
                contact page
              </Link>.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
