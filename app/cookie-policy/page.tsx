import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Cookie Policy | FlexiWiFi",
  description: "How FlexiWiFi uses cookies on its website.",
  alternates: { canonical: 'https://www.flexiwifi.co.uk/cookie-policy' },
};

export default function CookiePolicyPage() {
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
          Cookie Policy
        </h1>
        <p className="text-muted-foreground mb-12">Last updated: May 2026</p>

        <div className="space-y-10 text-foreground">

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-foreground">1. What Are Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work efficiently and to provide information to site owners. Cookies do not give us access to your device or any information beyond what you choose to share with us.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-foreground">2. How We Use Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              We keep our cookie usage minimal. We use cookies only where necessary for the site to function or to understand how it is being used in aggregate. We do not use cookies for advertising or to track you across other websites.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-foreground">3. Types of Cookies We Use</h2>

            <div className="space-y-6">
              <div className="rounded-xl border border-border p-5 space-y-2">
                <h3 className="font-semibold text-foreground">Strictly Necessary</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  These cookies are essential for the website to function. They enable core features such as the checkout flow and payment processing. You cannot opt out of these cookies as the site cannot work without them.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Examples:</strong> session state managed by Next.js, Stripe checkout session cookies.
                </p>
              </div>

              <div className="rounded-xl border border-border p-5 space-y-2">
                <h3 className="font-semibold text-foreground">Analytics</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We use Vercel Analytics to understand how visitors interact with our site — for example, which pages are most visited. This data is anonymised and aggregated; it does not identify you as an individual and no personal data is collected or stored.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Provider:</strong> Vercel Analytics. No cookies are set by Vercel Analytics — it uses a privacy-first approach that does not require cookie consent under UK PECR.
                </p>
              </div>

              <div className="rounded-xl border border-border p-5 space-y-2">
                <h3 className="font-semibold text-foreground">Third-Party (Stripe)</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  When you proceed to payment, Stripe may set cookies to enable the embedded checkout to function securely and to prevent fraud. These cookies are set by Stripe directly and are governed by{" "}
                  <a
                    href="https://stripe.com/gb/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground underline underline-offset-2 hover:text-accent"
                  >
                    Stripe's Privacy Policy
                  </a>.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-foreground">4. Managing Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Most browsers allow you to control cookies through their settings. You can set your browser to refuse cookies, or to alert you when cookies are being sent. Note that disabling cookies may affect the functionality of our checkout.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              For guidance on managing cookies in your browser, visit{" "}
              <a
                href="https://www.aboutcookies.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline underline-offset-2 hover:text-accent"
              >
                aboutcookies.org
              </a>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-foreground">5. Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this policy if our cookie usage changes. The "last updated" date at the top of the page reflects the most recent version.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-foreground">6. More Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              For more information about how we handle your personal data, see our{" "}
              <Link href="/privacy-policy" className="text-foreground underline underline-offset-2 hover:text-accent">Privacy Policy</Link>.
              If you have questions about our cookie usage, contact us via the{" "}
              <Link href="/contact" className="text-foreground underline underline-offset-2 hover:text-accent">contact page</Link>.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
