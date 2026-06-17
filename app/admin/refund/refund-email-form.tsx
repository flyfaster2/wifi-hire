'use client'

import { useState } from 'react'
import { sendRefundEmail } from '@/app/actions/refund-email'

interface Props {
  token: string
}

const inputClass = "w-full border border-border rounded-lg px-3 py-2.5 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"

export function RefundEmailForm({ token }: Props) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [form, setForm] = useState({
    name: '',
    email: '',
    rentalAmount: '',
  })

  const canSubmit = form.name.trim() && form.email.trim() && form.rentalAmount.trim()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      await sendRefundEmail({
        name: form.name.trim(),
        email: form.email.trim(),
        rentalAmount: form.rentalAmount.trim(),
        token,
      })
      setStatus('sent')
      setForm({ name: '', email: '', rentalAmount: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Customer name</label>
        <input
          type="text"
          placeholder="Sarah Johnson"
          value={form.name}
          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
          className={inputClass}
          required
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Customer email</label>
        <input
          type="email"
          placeholder="sarah@example.com"
          value={form.email}
          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
          className={inputClass}
          required
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Rental cost (£)</label>
        <input
          type="text"
          placeholder="38.50"
          value={form.rentalAmount}
          onChange={e => setForm(f => ({ ...f, rentalAmount: e.target.value }))}
          className={inputClass}
          required
        />
        <p className="text-xs text-muted-foreground">This is the amount they could win back — rental only, not deposit or delivery.</p>
      </div>

      {status === 'sent' && (
        <div className="rounded-lg bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-800">
          Email sent successfully.
        </div>
      )}

      {status === 'error' && (
        <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-800">
          Something went wrong. Check Resend logs.
        </div>
      )}

      <button
        type="submit"
        disabled={!canSubmit || status === 'sending'}
        className="w-full bg-accent text-accent-foreground rounded-lg py-2.5 text-sm font-semibold disabled:opacity-40 hover:opacity-90 transition-opacity"
      >
        {status === 'sending' ? 'Sending…' : 'Send refund email'}
      </button>
    </form>
  )
}
