export interface RentalDevice {
  id: string
  name: string
  description: string
  shortDescription: string
  features: string[]
  depositPence: number
  deliveryCostPence: number
  image: string
  pricing: {
    tier: string
    minDays: number
    maxDays: number | null
    pricePerDayPence: number
  }[]
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
    deliveryCostPence: 500, // £5
    image: '/images/pocket-mifi.jpg',
    pricing: [
      { tier: '3–7 days',  minDays: 3,  maxDays: 7,    pricePerDayPence: 600 },  // £6.00/day
      { tier: '8–21 days', minDays: 8,  maxDays: 21,   pricePerDayPence: 500 },  // £5.00/day
      { tier: '22+ days',  minDays: 22, maxDays: null,  pricePerDayPence: 450 },  // £4.50/day
    ],
  },
  {
    id: 'home-router',
    name: 'Home Router',
    shortDescription: 'Plug-in home broadband',
    description: 'Powerful home router with external antennas for maximum signal. Just plug in and connect your whole household.',
    features: [
      'Up to 64 device connections',
      'External antennas for best signal',
      'Unlimited UK data',
      'Ethernet port for wired connection',
    ],
    depositPence: 7500,
    deliveryCostPence: 800, // £8
    image: '/images/home-router.jpg',
    pricing: [
      { tier: '3–7 days',  minDays: 3,  maxDays: 7,    pricePerDayPence: 750 },  // £7.50/day
      { tier: '8–21 days', minDays: 8,  maxDays: 21,   pricePerDayPence: 600 },  // £6.00/day
      { tier: '22+ days',  minDays: 22, maxDays: null,  pricePerDayPence: 500 },  // £5.00/day
    ],
  },
]

export function getDeviceById(id: string): RentalDevice | undefined {
  return RENTAL_DEVICES.find((device) => device.id === id)
}

export function calculateRentalPrice(device: RentalDevice, days: number): number {
  const tier = device.pricing.find(
    (t) => days >= t.minDays && (t.maxDays === null || days <= t.maxDays)
  )
  if (!tier) {
    return device.pricing[device.pricing.length - 1].pricePerDayPence * days
  }
  return tier.pricePerDayPence * days
}

export function getDailyRate(device: RentalDevice, days: number): number {
  const tier = device.pricing.find(
    (t) => days >= t.minDays && (t.maxDays === null || days <= t.maxDays)
  )
  if (!tier) {
    return device.pricing[device.pricing.length - 1].pricePerDayPence
  }
  return tier.pricePerDayPence
}

export function formatPrice(pence: number): string {
  return `£${(pence / 100).toFixed(2)}`
}
