"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Wifi, ChevronDown, Home, Plane, Briefcase, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const useCases = [
  { name: "Moving House", href: "/wifi-hire-moving-house", icon: Home },
  { name: "Temporary Broadband", href: "/temporary-broadband-uk", icon: Clock },
  { name: "Visiting the UK", href: "/wifi-hire-visiting-uk", icon: Plane },
  { name: "Remote Working", href: "/wifi-hire-remote-working", icon: Briefcase },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [useCasesOpen, setUseCasesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-full flex items-center justify-center">
              <Wifi className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
            </div>
            <span className="text-lg sm:text-xl font-semibold text-foreground">
              FlexiWiFi
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/#devices"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Devices
            </Link>
            <Link
              href="/#how-it-works"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/#pricing"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </Link>

            {/* Use Cases Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setUseCasesOpen(true)}
              onMouseLeave={() => setUseCasesOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
                Use Cases
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${useCasesOpen ? "rotate-180" : ""}`} />
              </button>

              {useCasesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                  <div className="bg-background border border-border rounded-xl shadow-lg overflow-hidden w-56">
                    {useCases.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center gap-3 px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                      >
                        <item.icon className="w-4 h-4 text-accent flex-shrink-0" />
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/#faq"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              FAQ
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/book">Order Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                href="#devices"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Devices
              </Link>
              <Link
                href="/#how-it-works"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="/#pricing"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>

              {/* Mobile Use Cases */}
              <div>
                <button
                  className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors w-full"
                  onClick={() => setUseCasesOpen(!useCasesOpen)}
                >
                  Use Cases
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${useCasesOpen ? "rotate-180" : ""}`} />
                </button>
                {useCasesOpen && (
                  <div className="mt-2 ml-3 flex flex-col gap-3 border-l border-border pl-3">
                    {useCases.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => { setIsMenuOpen(false); setUseCasesOpen(false); }}
                      >
                        <item.icon className="w-3.5 h-3.5 text-accent" />
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/#faq"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground w-full mt-2">
                <Link href="/book">Order Now</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
