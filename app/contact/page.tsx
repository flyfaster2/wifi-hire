import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import { Mail, MessageCircle, Phone } from "lucide-react";

export const metadata = {
  title: "Contact Us | Temp Home WiFi",
  description: "Get in touch with Temp Home WiFi. We're here to help with your temporary WiFi needs.",
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
              Have a question about our devices or your order? We&apos;re here to help.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Options */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg text-foreground">WhatsApp</h3>
                <p className="text-muted-foreground text-sm mt-2">
                  Quick responses during business hours
                </p>
                <a 
                  href="https://wa.me/447XXXXXXXXX" 
                  className="inline-block mt-4 text-accent hover:underline font-medium"
                >
                  Message us on WhatsApp
                </a>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg text-foreground">Email</h3>
                <p className="text-muted-foreground text-sm mt-2">
                  We aim to reply within 24 hours
                </p>
                <a 
                  href="mailto:hello@hotspothire.co.uk" 
                  className="inline-block mt-4 text-accent hover:underline font-medium"
                >
                  hello@hotspothire.co.uk
                </a>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg text-foreground">Phone</h3>
                <p className="text-muted-foreground text-sm mt-2">
                  Mon-Fri, 9am-5pm
                </p>
                <a 
                  href="tel:+44XXXXXXXXXX" 
                  className="inline-block mt-4 text-accent hover:underline font-medium"
                >
                  +44 XXX XXXX XXX
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
