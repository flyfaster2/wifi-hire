export interface PricingBand {
  label: string
  bandDays: number | null  // days in this band; null = unlimited
  pricePerDayPence: number
}

export interface RentalDevice {
  id: string
  name: string
  description: string
  shortDescription: string
  features: string[]
  depositPence: number
  deliveryCostPence: number
  image: string
  pricing: PricingBand[]
}

export const RENTAL_DEVICES: RentalDevice[] = [
  {
    id: 'pocket-mifi',
    name: 'Pocket MiFi',
    shortDescription: 'Portable WiFi hotspot',
    description: 'Compact portable WiFi device that fits in your pocket. Connect up to 10 devices on the go.',
    features: [
      'Up to 10 device connections',
      '10-hour battery life',
      'Unlimited UK data',
      'Pocket-sized and lightweight',
    ],
    depositPence: 5000,
    deliveryCostPence: 500,
    image: '/images/pocket-mifi.png',
    pricing: [
      { label: 'Days 1–7',  bandDays: 7,    pricePerDayPence: 550 },
      { label: 'Days 8–14', bandDays: 7,    pricePerDayPence: 400 },
      { label: 'Days 15+',  bandDays: null, pricePerDayPence: 300 },
    ],
  },
  {
    id: 'home-router',
    name: 'Home Router',
    shortDescription: 'Plug-in home broadband',
    description: 'Powerful home router with external antennas for maximum signal. Just plug in and connect your whole household.',
    features: [
      'Up to 64 device connections',
      '5G Connectivity',
      'Unlimited UK data',
      'Ethernet port for wired connection',
    ],
    depositPence: 7500,
    deliveryCostPence: 800,
    image: '/images/home-router.jpg',
    pricing: [
      { label: 'Days 1–7',  bandDays: 7,    pricePerDayPence: 700 },
      { label: 'Days 8–14', bandDays: 7,    pricePerDayPence: 550 },
      { label: 'Days 15+',  bandDays: null, pricePerDayPence: 400 },
    ],
  },
]

export function getDeviceById(id: string): RentalDevice | undefined {
  return RENTAL_DEVICES.find((device) => device.id === id)
}

// Bracket-based pricing: lower rates apply only to days within that band.
// e.g. 10-day MiFi = (7 × £5.50) + (3 × £4.00) = £50.50
export function calculateRentalPrice(device: RentalDevice, days: number): number {
  let total = 0
  let remaining = days
  for (const band of device.pricing) {
    if (remaining <= 0) break
    const inBand = band.bandDays === null ? remaining : Math.min(remaining, band.bandDays)
    total += inBand * band.pricePerDayPence
    remaining -= inBand
  }
  return total
}

export function formatPrice(pence: number): string {
  return `£${(pence / 100).toFixed(2)}`
}
