import { notFound } from 'next/navigation'
import { RefundEmailForm } from './refund-email-form'

export const metadata = { robots: 'noindex' }

interface Props {
  searchParams: Promise<{ token?: string }>
}

export default async function RefundAdminPage({ searchParams }: Props) {
  const { token } = await searchParams

  const envSet = !!process.env.ADMIN_TOKEN
  const match = token === process.env.ADMIN_TOKEN

  if (!match) {
    return <pre style={{padding:32}}>debug: token_received={token ? 'yes' : 'no'} env_set={String(envSet)} match={String(match)}</pre>
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="mb-8">
          <h1 className="font-serif text-2xl text-foreground mb-1">Send refund email</h1>
          <p className="text-sm text-muted-foreground">Sends the deposit refund + review request to the customer.</p>
        </div>
        <RefundEmailForm token={token} />
      </div>
    </div>
  )
}
