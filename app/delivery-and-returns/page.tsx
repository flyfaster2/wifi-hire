import Link from "next/link";
import { ArrowLeft, Truck, RotateCcw, Clock, MapPin, Package, AlertTriangle } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Delivery & Returns | FlexiWiFi",
  description: "Everything you need to know about FlexiWiFi delivery and returns.",
};

export default function DeliveryAndReturnsPage() {
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
          Delivery & Returns
        </h1>
        <p className="text-muted-foreground mb-12">
          Everything you need to know about getting your device and sending it back.
        </p>

        {/* Quick summary cards */}
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {[
            { icon: Truck, title: "Standard delivery", body: "£5 — delivered within 2 working days of ordering" },
            { icon: RotateCcw, title: "Free returns", body: "Prepaid Evri label included in every box" },
            { icon: Clock, title: "Delivery days", body: "Monday to Friday only" },
            { icon: MapPin, title: "Where we deliver", body: "Anywhere in the UK — homes, hotels, offices, Airbnbs" },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-xl border border-border bg-card p-5 flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">{title}</p>
                <p className="text-sm text-muted-foreground mt-0.5">{body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-10">

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-foreground">Delivery costs</h2>
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="flex justify-between items-center px-6 py-4 border-b border-border bg-card">
                <span className="font-medium text-foreground">Standard delivery</span>
                <span className="font-semibold text-foreground">£5.00</span>
              </div>
              <div className="px-6 py-4 bg-background">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Standard delivery is included on all orders. We aim to have your device with you within 2 working days of placing your order. We recommend ordering at least 2 working days before your required start date to ensure on-time delivery.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-foreground">When will my device arrive?</h2>
            <p className="text-muted-foreground leading-relaxed">
              We dispatch orders Monday to Friday. When you book, you select your required delivery date — we'll make sure the device is dispatched in time to arrive on that date.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We have a 2 working day lead time. So if you order on a Monday, we can have your device with you by Wednesday. Orders placed over the weekend are processed on Monday.
            </p>
            <div className="rounded-xl border border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/30 px-5 py-4 flex gap-3">
              <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
                If you need a device urgently, get in touch via our <Link href="/contact" className="underline underline-offset-2">contact page</Link> and we'll do our best to accommodate you.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-foreground">Where we deliver</h2>
            <p className="text-muted-foreground leading-relaxed">
              We deliver to any valid UK address — houses, flats, hotels, B&Bs, holiday lets, Airbnbs, and offices. Just enter your delivery address at checkout.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If you're staying in a hotel or similar, the package will be delivered to reception. Just let the front desk know to expect it.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-foreground">What if I'm not in?</h2>
            <p className="text-muted-foreground leading-relaxed">
              If no one is available to accept the delivery, Evri will attempt to leave the package in a safe place or with a neighbour. If they can't, they'll leave a card with instructions for collection or rescheduling. You can also manage your delivery via the Evri tracking link in your dispatch confirmation email.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-foreground flex items-center gap-2">
              <RotateCcw className="w-5 h-5 text-accent" />
              Returning your device
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Every order includes a prepaid Evri returns label. When you're done, just pack the device back up and drop it at any Evri ParcelShop or drop-off point. Returns are completely free.
            </p>

            <div className="space-y-3">
              <h3 className="font-semibold text-foreground">How to return</h3>
              <ol className="space-y-2 text-muted-foreground">
                {[
                  "Pack the device securely in the original packaging",
                  "Attach the prepaid Evri return label to the outside of the parcel",
                  "Drop it off at any Evri ParcelShop — find your nearest at evri.com",
                  "Keep your proof of postage receipt until your deposit has been refunded",
                ].map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 text-accent text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
                    <span className="text-sm leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed rounded-lg bg-secondary px-4 py-3 border border-border">
              The postmark date on your return is used to calculate when your rental ends — so the clock stops as soon as you drop it off, not when we receive it.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-foreground flex items-center gap-2">
              <Package className="w-5 h-5 text-accent" />
              Lost your return label?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              No problem — contact us via the <Link href="/contact" className="text-foreground underline underline-offset-2 hover:text-accent">contact page</Link> and we'll send you a replacement. Please don't delay returning the device as rental charges continue until the return is posted.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-foreground">Device arrived damaged or faulty?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Please inspect your device as soon as it arrives. If it's damaged or not working, contact us within 24 hours and we'll arrange a replacement as quickly as possible. Do not return a faulty device without contacting us first.
            </p>
          </section>

          <div className="rounded-xl bg-card border border-border p-6 text-center space-y-3">
            <p className="font-semibold text-foreground">Still have questions?</p>
            <p className="text-sm text-muted-foreground">Our team is happy to help.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
            >
              Get in touch →
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
