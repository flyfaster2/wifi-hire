import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Privacy Policy | FlexiWiFi",
  description: "How FlexiWiFi collects, uses, and protects your personal data.",
};

export default function PrivacyPolicyPage() {
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
          Privacy Policy
        </h1>
        <p className="text-muted-foreground mb-12">Last updated: May 2026</p>

        <div className="space-y-10 text-foreground">

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-foreground">1. Who We Are</h2>
            <p className="text-muted-foreground leading-relaxed">
              FlexiWiFi Ltd ("we", "us", "our") is the data controller responsible for your personal data. We are registered in England and Wales. If you have any questions about how we handle your data, please contact us via the{" "}
              <Link href="/contact" className="text-foreground underline underline-offset-2 hover:text-accent">contact page</Link>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-foreground">2. What Data We Collect</h2>
            <p className="text-muted-foreground leading-relaxed">When you place an order, we collect:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground leading-relaxed">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Delivery address</li>
              <li>Payment information (processed securely by Stripe — we do not store card details)</li>
              <li>Rental dates and device selection</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              We also collect anonymised usage data via Vercel Analytics to understand how visitors use our website. This does not identify you personally.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-foreground">3. How We Use Your Data</h2>
            <p className="text-muted-foreground leading-relaxed">We use your data to:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground leading-relaxed">
              <li>Process and fulfil your rental order</li>
              <li>Arrange delivery and returns</li>
              <li>Send order confirmations and important updates about your hire</li>
              <li>Process payments and manage deposits</li>
              <li>Respond to customer service enquiries</li>
              <li>Comply with our legal obligations</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-foreground">4. Legal Basis for Processing</h2>
            <p className="text-muted-foreground leading-relaxed">
              We process your data on the basis of <strong className="text-foreground">contract performance</strong> — it is necessary to fulfil your rental order. Where we have a legal obligation (for example, tax records), we process data on the basis of <strong className="text-foreground">legal compliance</strong>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-foreground">5. Who We Share Your Data With</h2>
            <p className="text-muted-foreground leading-relaxed">We share data only where necessary:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground leading-relaxed">
              <li><strong className="text-foreground">Stripe</strong> — to process payments securely</li>
              <li><strong className="text-foreground">Evri</strong> — to arrange delivery and returns</li>
              <li><strong className="text-foreground">Vercel</strong> — our hosting provider</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              We do not sell, rent, or share your personal data with third parties for marketing purposes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-foreground">6. How Long We Keep Your Data</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain order and customer data for up to 7 years to comply with HMRC record-keeping requirements. After this period, data is securely deleted. You may request earlier deletion where it does not conflict with our legal obligations — see Section 8.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-foreground">7. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use cookies to make our website function and to understand how it is used. For full details, see our{" "}
              <Link href="/cookie-policy" className="text-foreground underline underline-offset-2 hover:text-accent">Cookie Policy</Link>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-foreground">8. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed">Under UK GDPR, you have the right to:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground leading-relaxed">
              <li><strong className="text-foreground">Access</strong> — request a copy of the data we hold about you</li>
              <li><strong className="text-foreground">Rectification</strong> — ask us to correct inaccurate data</li>
              <li><strong className="text-foreground">Erasure</strong> — ask us to delete your data (subject to legal obligations)</li>
              <li><strong className="text-foreground">Restriction</strong> — ask us to limit how we use your data</li>
              <li><strong className="text-foreground">Portability</strong> — receive your data in a portable format</li>
              <li><strong className="text-foreground">Objection</strong> — object to certain types of processing</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              To exercise any of these rights, contact us via the{" "}
              <Link href="/contact" className="text-foreground underline underline-offset-2 hover:text-accent">contact page</Link>. You also have the right to lodge a complaint with the{" "}
              <strong className="text-foreground">Information Commissioner's Office (ICO)</strong> at ico.org.uk.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-foreground">9. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We take reasonable technical and organisational measures to protect your data. Payments are processed entirely by Stripe and we never see or store your card details. Our website is served over HTTPS at all times.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-foreground">10. Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this policy from time to time. The "last updated" date at the top of the page will always reflect the most recent version. Continued use of our services after a change constitutes acceptance of the updated policy.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
