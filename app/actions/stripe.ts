'use server'

import { stripe } from '@/lib/stripe'
import { getDeviceById, calculateRentalPrice, formatPrice } from '@/lib/products'

export interface CustomerDetails {
  name: string
  email: string
  phone: string
  addressLine1: string
  addressLine2?: string
  city: string
  postcode: string
}

export interface RentalBooking {
  deviceId: string
  startDate: string
  endDate: string
  days: number
  deliveryCost: number
  customer: CustomerDetails
  hearAboutUs: string
  hearAboutUsOther?: string
  purposeOfHire: string
}

export async function createRentalCheckoutSession(booking: RentalBooking) {
  const device = getDeviceById(booking.deviceId)

  if (!device) {
    throw new Error(`Device with id "${booking.deviceId}" not found`)
  }

  if (booking.days < 3) {
    throw new Error('Rental period must be at least 3 days')
  }

  const rentalPricePence = calculateRentalPrice(device, booking.days)
  const depositPence = device.depositPence
  const { customer, deliveryCost } = booking

  const deliveryLabel = deliveryCost === 700 ? 'Next Working Day Delivery' : 'Standard Delivery'

  const addressParts = [
    customer.addressLine1,
    customer.addressLine2,
    customer.city,
    customer.postcode,
  ].filter(Boolean)

  const stripeCustomer = await stripe.customers.create({
    name: customer.name,
    email: customer.email,
    phone: customer.phone,
    address: {
      line1: customer.addressLine1,
      line2: customer.addressLine2 || undefined,
      city: customer.city,
      postal_code: customer.postcode,
      country: 'GB',
    },
  })

  const session = await stripe.checkout.sessions.create({
    ui_mode: 'embedded_page',
    redirect_on_completion: 'never',
    customer: stripeCustomer.id,
    line_items: [
      {
        price_data: {
          currency: 'gbp',
          product_data: {
            name: `${device.name} Rental (${booking.days} days)`,
            description: `Delivery: ${booking.startDate} — Return by: ${booking.endDate} | Customer: ${customer.name} | ${customer.phone} | ${customer.email} | Address: ${addressParts.join(', ')}`,
          },
          unit_amount: rentalPricePence,
        },
        quantity: 1,
      },
      {
        price_data: {
          currency: 'gbp',
          product_data: {
            name: deliveryLabel,
          },
          unit_amount: deliveryCost,
        },
        quantity: 1,
      },
      {
        price_data: {
          currency: 'gbp',
          product_data: {
            name: `${device.name} Refundable Deposit`,
            description: `Refunded within 3–5 working days of return in good condition`,
          },
          unit_amount: depositPence,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    phone_number_collection: { enabled: false },
    payment_intent_data: {
      shipping: {
        name: customer.name,
        phone: customer.phone,
        address: {
          line1: customer.addressLine1,
          line2: customer.addressLine2 || undefined,
          city: customer.city,
          postal_code: customer.postcode,
          country: 'GB',
        },
      },
    },
    metadata: {
      deviceId: booking.deviceId,
      deviceName: device.name,
      startDate: booking.startDate,
      endDate: booking.endDate,
      rentalDays: booking.days.toString(),
      rentalPricePence: rentalPricePence.toString(),
      depositPence: depositPence.toString(),
      deliveryCost: deliveryCost.toString(),
      customerName: customer.name,
      customerEmail: customer.email,
      customerPhone: customer.phone,
      deliveryAddress: addressParts.join(', '),
      hearAboutUs: booking.hearAboutUsOther ? `${booking.hearAboutUs}: ${booking.hearAboutUsOther}` : booking.hearAboutUs,
      purposeOfHire: booking.purposeOfHire,
    },
  })

  return session.client_secret
}
