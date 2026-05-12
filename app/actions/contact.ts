'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  subject: string
  orderNumber?: string
  message: string
}

export async function sendContactEmail(data: ContactFormData) {
  const subjectLabels: Record<string, string> = {
    order: 'Question about my order',
    product: 'Product enquiry',
    returns: 'Returns & refunds',
    technical: 'Technical support',
    other: 'Something else',
  }

  const subjectLabel = subjectLabels[data.subject] ?? data.subject

  await resend.emails.send({
    from: 'FlexiWiFi Contact Form <noreply@flexiwifi.co.uk>',
    to: 'hello@flexiwifi.co.uk',
    replyTo: data.email,
    subject: `[Contact Form] ${subjectLabel} — ${data.firstName} ${data.lastName}`,
    text: [
      `Name: ${data.firstName} ${data.lastName}`,
      `Email: ${data.email}`,
      `Topic: ${subjectLabel}`,
      data.orderNumber ? `Order number: ${data.orderNumber}` : '',
      '',
      data.message,
    ].filter(Boolean).join('\n'),
  })
}
