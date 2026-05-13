import Link from "next/link";
import { ArrowRight, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Page Not Found | FlexiWiFi",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="py-24 sm:py-32">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Wifi className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl text-foreground mb-4">
            Page not found
          </h1>
          <p className="text-lg text-muted-foreground mb-10">
            The page you're looking for doesn't exist. Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8">
              <Link href="/">
                Back to Home
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8">
              <Link href="/book">Order a Device</Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
