'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Shield, Truck, RotateCcw } from 'lucide-react'
import { BookingForm } from '@/components/booking-form'
import { RentalCheckout } from '@/components/rental-checkout'
import type { RentalBooking } from '@/app/actions/stripe'

export default function BookPage() {
  const [booking, setBooking] = useState<RentalBooking | null>(null)
  const [showCheckout, setShowCheckout] = useState(false)

  const handleBookingSubmit = (data: RentalBooking) => {
    setBooking(data)
    setShowCheckout(true)
  }

  const handleBack = () => {
    setShowCheckout(false)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        {!showCheckout ? (
          <>
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
                Book your WiFi device
              </h1>
              <p className="text-muted-foreground max-w-lg mx-auto">
                Choose your device, select your dates, and checkout securely.
              </p>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 mb-10 pb-10 border-b border-border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Truck className="h-4 w-4 text-accent" />
                <span>Delivered by courier</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <RotateCcw className="h-4 w-4 text-accent" />
                <span>Free returns</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4 text-accent" />
                <span>Secure checkout</span>
              </div>
            </div>

            <BookingForm onSubmit={handleBookingSubmit} />
          </>
        ) : (
          <>
            <button
              onClick={handleBack}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to booking
            </button>

            <div className="text-center mb-8">
              <h1 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-3">
                Complete your payment
              </h1>
              <p className="text-muted-foreground">
                Your payment is secured by Stripe
              </p>
            </div>

            {booking && <RentalCheckout booking={booking} />}
          </>
        )}
      </main>
    </div>
  )
}
