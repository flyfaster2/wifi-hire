import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import { Mail, MessageCircle, Phone } from "lucide-react";

export const metadata = {
  title: "Contact Us | FlexiWiFi",
  description: "Get in touch with FlexiWiFi. Available 7 days a week, 9am–8pm.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl sm:text-5xl text-foreground">
              Get in Touch
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We&apos;re available 7 days a week, 9am–8pm. Drop us a message and we&apos;ll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Options */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg text-foreground">Email</h3>
                <p className="text-muted-foreground text-sm mt-1">Mon–Sun, 9am–8pm</p>
                <a
                  href="mailto:hello@flexiwifi.co.uk"
                  className="inline-block mt-4 text-accent hover:underline font-medium"
                >
                  hello@flexiwifi.co.uk
                </a>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg text-foreground">Phone</h3>
                <p className="text-muted-foreground text-sm mt-1">Mon–Sun, 9am–8pm</p>
                <a
                  href="tel:+447404114272"
                  className="inline-block mt-4 text-accent hover:underline font-medium"
                >
                  07404 114 272
                </a>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg text-foreground">WhatsApp</h3>
                <p className="text-muted-foreground text-sm mt-1">Mon–Sun, 9am–8pm</p>
                <a
                  href="https://wa.me/447404114272"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-accent hover:underline font-medium"
                >
                  Message on WhatsApp
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-xl p-6 sm:p-8">
                <h2 className="font-semibold text-xl text-foreground mb-6">Send us a message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
