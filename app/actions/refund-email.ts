'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const GOOGLE_REVIEW_URL = 'https://g.page/r/YOUR_GOOGLE_REVIEW_LINK/review'

interface RefundEmailArgs {
  name: string
  email: string
  rentalAmount: string
  token: string
}

export async function sendRefundEmail({ name, email, rentalAmount, token }: RefundEmailArgs) {
  if (!token || token !== process.env.ADMIN_TOKEN) {
    throw new Error('Unauthorised')
  }

  const firstName = name.split(' ')[0]

  await resend.emails.send({
    from: 'FlexiWiFi <hello@flexiwifi.co.uk>',
    to: email,
    subject: 'Your deposit has been refunded — and you could win your rental back',
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #ede8e1; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif; padding: 40px 16px; }
  .email { max-width: 600px; margin: 0 auto; background: #faf7f3; border-radius: 8px; overflow: hidden; }
  .header { background: #faf7f3; padding: 22px 40px; border-bottom: 1px solid #e5dfd8; display: flex; align-items: center; gap: 10px; }
  .logo-circle { width: 34px; height: 34px; background: #1c1c2e; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; }
  .logo-name { font-size: 17px; font-weight: 600; color: #1c1c2e; }
  .body { padding: 40px 40px 32px; }
  .hero { text-align: center; margin-bottom: 32px; }
  .tick { width: 48px; height: 48px; border-radius: 50%; background: #ede8e1; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 16px; }
  h1 { font-size: 26px; font-weight: 400; color: #1c1c2e; margin-bottom: 10px; font-family: Georgia, serif; }
  .subtitle { font-size: 15px; color: #6b6560; line-height: 1.65; }
  .card { background: #fff; border: 1px solid #e5dfd8; border-radius: 6px; padding: 20px 24px; margin-bottom: 24px; }
  .card p { font-size: 14px; color: #5a4f48; line-height: 1.7; }
  .card strong { color: #1c1c2e; }
  .prize-box { background: #fdf3ef; border: 1px solid #e8c4b8; border-radius: 6px; padding: 20px 24px; margin-bottom: 28px; text-align: center; }
  .prize-amount { font-size: 32px; font-weight: 700; color: #b5432a; margin-bottom: 6px; font-family: Georgia, serif; }
  .prize-label { font-size: 13px; color: #9e6a5a; }
  .cta { text-align: center; margin-bottom: 8px; }
  .cta p { font-size: 13px; color: #9e8f83; margin-bottom: 14px; }
  .btn { display: inline-block; background: #b5432a; color: #fff; text-decoration: none; font-size: 14px; font-weight: 600; padding: 14px 36px; border-radius: 6px; }
  .small { font-size: 12px; color: #b8afa8; text-align: center; margin-top: 20px; line-height: 1.6; }
  .footer { border-top: 1px solid #e5dfd8; padding: 22px 40px; text-align: center; }
  .footer p { font-size: 11px; color: #b8afa8; line-height: 1.8; }
</style>
</head>
<body>
<div class="email">

  <div class="header">
    <div class="logo-circle">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
        <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
        <circle cx="12" cy="20" r="1" fill="#fff" stroke="none"/>
      </svg>
    </div>
    <span class="logo-name">FlexiWiFi</span>
  </div>

  <div class="body">

    <div class="hero">
      <div class="tick">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#b5432a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </div>
      <h1>Your deposit is on its way back</h1>
      <p class="subtitle">Hi ${firstName}, your deposit has been refunded and should appear in your account within 3–5 working days.</p>
    </div>

    <div class="card">
      <p>Thanks for hiring with FlexiWiFi. We hope the device did the job — whether you were moving house, waiting for broadband, or just needed reliable internet for a while.</p>
    </div>

    <div class="prize-box">
      <div class="prize-amount">£${rentalAmount}</div>
      <div class="prize-label">up for grabs — your full rental cost back</div>
    </div>

    <div class="cta">
      <p>Leave us a Google review and you'll be entered into our monthly prize draw to win back your entire rental cost. Takes about 30 seconds.</p>
      <a href="${GOOGLE_REVIEW_URL}" class="btn">Leave a review</a>
    </div>

    <p class="small">One entry per order. Winners are drawn on the last day of each month and contacted by email. No purchase necessary to enter — contact hello@flexiwifi.co.uk to enter without leaving a review.</p>

  </div>

  <div class="footer">
    <p>FlexiWiFi · hello@flexiwifi.co.uk</p>
    <p>You're receiving this because you placed an order at flexiwifi.co.uk</p>
  </div>

</div>
</body>
</html>
    `.trim(),
  })
}
