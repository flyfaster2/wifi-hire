'use server'

import { Resend } from 'resend'
import { getDeviceById, calculateRentalPrice, formatPrice } from '@/lib/products'
import type { RentalBooking } from './stripe'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendOrderNotification(booking: RentalBooking) {
  const device = getDeviceById(booking.deviceId)
  if (!device) return

  const { customer } = booking
  const rentalPricePence = calculateRentalPrice(device, booking.days)
  const depositPence = device.depositPence
  const total = rentalPricePence + depositPence + booking.deliveryCost

  const deliveryLabel = booking.deliveryCost === 700 ? 'Next Working Day (£7.00)' : 'Standard (£5.00)'

  const addressParts = [
    customer.addressLine1,
    customer.addressLine2,
    customer.city,
    customer.postcode,
  ].filter(Boolean)

  const hearAboutUsFull = booking.hearAboutUsOther
    ? `${booking.hearAboutUs} — ${booking.hearAboutUsOther}`
    : booking.hearAboutUs

  await resend.emails.send({
    from: 'FlexiWiFi Orders <noreply@flexiwifi.co.uk>',
    to: 'hello@flexiwifi.co.uk',
    subject: `New Order — ${customer.name} — ${device.name}`,
    text: [
      '=== NEW ORDER ===',
      '',
      '--- Customer ---',
      `Name:    ${customer.name}`,
      `Email:   ${customer.email}`,
      `Phone:   ${customer.phone}`,
      `Address: ${addressParts.join(', ')}`,
      '',
      '--- Order ---',
      `Device:        ${device.name}`,
      `Delivery date: ${booking.startDate}`,
      `Return date:   ${booking.endDate}`,
      `Rental period: ${booking.days} days`,
      `Delivery:      ${deliveryLabel}`,
      '',
      '--- Financials ---',
      `Rental:  ${formatPrice(rentalPricePence)}`,
      `Deposit: ${formatPrice(depositPence)}`,
      `Total:   ${formatPrice(total)}`,
      '',
      '--- About this order ---',
      `Purpose:          ${booking.purposeOfHire}`,
      `How they found us: ${hearAboutUsFull}`,
    ].join('\n'),
  })
}
