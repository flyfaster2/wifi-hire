'use client'

import { useState, useCallback } from 'react'
import { Check, Package, MailOpen, RefreshCw } from 'lucide-react'
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { createRentalCheckoutSession, type RentalBooking } from '@/app/actions/stripe'
import { Card, CardContent } from '@/components/ui/card'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

interface RentalCheckoutProps {
  booking: RentalBooking
}

export function RentalCheckout({ booking }: RentalCheckoutProps) {
  const [paymentComplete, setPaymentComplete] = useState(false)

  const fetchClientSecret = useCallback(
    () => createRentalCheckoutSession(booking),
    [booking]
  )

  if (paymentComplete) {
    const { customer } = booking
    const addressParts = [
      customer.addressLine1,
      customer.addressLine2,
      customer.city,
      customer.postcode,
    ].filter(Boolean)

    return (
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto">
            <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
          </div>
          <div>
            <h2 className="text-2xl font-serif font-bold text-foreground mb-1">Booking confirmed</h2>
            <p className="text-muted-foreground">
              A confirmation has been sent to <span className="font-medium text-foreground">{customer.email}</span>
            </p>
          </div>
        </div>

        <Card className="border-border">
          <CardContent className="p-6 space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Device</span>
              <span className="font-medium text-foreground">{booking.deviceId === 'pocket-mifi' ? 'Pocket MiFi' : 'Home Router'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Delivery date</span>
              <span className="font-medium text-foreground">{booking.startDate}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Estimated return</span>
              <span className="font-medium text-foreground">{booking.endDate}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Delivering to</span>
              <span className="font-medium text-foreground text-right max-w-[60%]">{addressParts.join(', ')}</span>
            </div>
          </CardContent>
        </Card>

        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { icon: Package, title: "We'll dispatch your device", body: "You'll receive it on your selected delivery date." },
            { icon: MailOpen, title: "Return is easy", body: "A freepost envelope is included in the box — just post it back when done." },
            { icon: RefreshCw, title: "Deposit returned", body: "Your deposit is refunded within 3–5 working days of us receiving the device." },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-xl border border-border bg-card p-5 text-sm">
              <Icon className="h-5 w-5 text-accent mb-3" />
              <p className="font-semibold text-foreground mb-1">{title}</p>
              <p className="text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div id="checkout" className="rounded-lg overflow-hidden">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={{ fetchClientSecret, onComplete: () => setPaymentComplete(true) }}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}
