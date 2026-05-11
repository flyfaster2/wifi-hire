'use client'

import { useState, useMemo } from 'react'
import { format, differenceInDays, addDays } from 'date-fns'
import { Calendar, Wifi, Router, Check, ChevronRight, Info, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { RENTAL_DEVICES, calculateRentalPrice, getDailyRate, formatPrice, type RentalDevice } from '@/lib/products'
import type { CustomerDetails } from '@/app/actions/stripe'

function toNextWeekday(date: Date): Date {
  const d = new Date(date)
  while (d.getDay() === 0 || d.getDay() === 6) {
    d.setDate(d.getDate() + 1)
  }
  return d
}

function nextWorkingDay(from: Date): Date {
  return toNextWeekday(addDays(from, 1))
}

function getDeliveryInfo() {
  const now = new Date()
  const hour = now.getHours()
  const dayOfWeek = now.getDay()
  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6
  const isBeforeCutoff = hour < 14

  const minDeliveryDate = nextWorkingDay(nextWorkingDay(now))
  const standardDate = minDeliveryDate

  let bannerState: 'before-cutoff' | 'after-cutoff' | 'weekend'
  if (isWeekend) {
    bannerState = 'weekend'
  } else if (isBeforeCutoff) {
    bannerState = 'before-cutoff'
  } else {
    bannerState = 'after-cutoff'
  }

  return { nwdDate: null as Date | null, minDeliveryDate, standardDate, bannerState }
}

const inputClass = "w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring placeholder:text-muted-foreground text-sm"

interface BookingFormProps {
  onSubmit: (booking: {
    deviceId: string
    startDate: string
    endDate: string
    days: number
    deliveryCost: number
    customer: CustomerDetails
  }) => void
  isLoading?: boolean
}

export function BookingForm({ onSubmit, isLoading }: BookingFormProps) {
  const [selectedDevice, setSelectedDevice] = useState<string | null>(null)
  const [startDate, setStartDate] = useState<string>('')
  const [endDate, setEndDate] = useState<string>('')
  const [customer, setCustomer] = useState<CustomerDetails>({
    name: '',
    email: '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    postcode: '',
  })

  const selectedDeviceData = useMemo(() => {
    if (!selectedDevice) return null
    return RENTAL_DEVICES.find(d => d.id === selectedDevice)
  }, [selectedDevice])

  const deliveryInfo = getDeliveryInfo()
  const minDeliveryStr = format(deliveryInfo.minDeliveryDate, 'yyyy-MM-dd')
  const nwdStr = deliveryInfo.nwdDate ? format(deliveryInfo.nwdDate, 'yyyy-MM-dd') : null
  const isNWD = !!(startDate && nwdStr && startDate === nwdStr)
  const deliveryCost = selectedDeviceData?.deliveryCostPence ?? 500
  const deliveryLabel = isNWD ? 'Next working day delivery' : 'Standard delivery'

  const minEndDateStr = startDate
    ? format(addDays(new Date(startDate + 'T00:00:00'), 2), 'yyyy-MM-dd')
    : ''

  const rentalDays = useMemo(() => {
    if (!startDate || !endDate) return 0
    const days = differenceInDays(new Date(endDate + 'T00:00:00'), new Date(startDate + 'T00:00:00')) + 1
    return days > 0 ? days : 0
  }, [startDate, endDate])

  const pricing = useMemo(() => {
    if (!selectedDeviceData || rentalDays < 1) return null
    const rentalPrice = calculateRentalPrice(selectedDeviceData, rentalDays)
    const dailyRate = getDailyRate(selectedDeviceData, rentalDays)
    const deposit = selectedDeviceData.depositPence
    return {
      rentalPrice,
      dailyRate,
      deposit,
      total: rentalPrice + deposit + deliveryCost,
    }
  }, [selectedDeviceData, rentalDays, deliveryCost])

  const datesComplete = selectedDevice && rentalDays >= 3

  const customerComplete =
    customer.name.trim() &&
    customer.email.trim() &&
    customer.phone.trim() &&
    customer.addressLine1.trim() &&
    customer.city.trim() &&
    customer.postcode.trim()

  const canSubmit = datesComplete && customerComplete && !isLoading

  const setField = (field: keyof CustomerDetails) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = field === 'postcode' ? e.target.value.toUpperCase() : e.target.value
    setCustomer(prev => ({ ...prev, [field]: value }))
  }

  const handleStartDateChange = (value: string) => {
    if (!value) {
      setStartDate('')
      setEndDate('')
      return
    }
    const d = new Date(value + 'T00:00:00')
    const day = d.getDay()
    let corrected = value
    if (day === 6) corrected = format(addDays(d, 2), 'yyyy-MM-dd')
    else if (day === 0) corrected = format(addDays(d, 1), 'yyyy-MM-dd')
    setStartDate(corrected)
    if (endDate && corrected > endDate) setEndDate('')
  }

  const handleSubmit = () => {
    if (!canSubmit || !selectedDevice) return
    onSubmit({
      deviceId: selectedDevice,
      startDate,
      endDate,
      days: rentalDays,
      deliveryCost,
      customer,
    })
  }

  const { bannerState, nwdDate, standardDate } = deliveryInfo

  return (
    <div className="space-y-8">
      {/* Step 1: Choose Device */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold">1</span>
          Choose your device
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {RENTAL_DEVICES.map((device) => (
            <DeviceCard
              key={device.id}
              device={device}
              selected={selectedDevice === device.id}
              onSelect={() => setSelectedDevice(device.id)}
            />
          ))}
        </div>
      </div>

      {/* Step 2: Select Dates */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold">2</span>
          Select your rental dates
        </h3>

        {bannerState === 'before-cutoff' && nwdDate && (
          <div className="flex gap-3 rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm text-blue-800 dark:border-blue-800 dark:bg-blue-950/40 dark:text-blue-300">
            <Info className="h-4 w-4 mt-0.5 flex-shrink-0" />
            <div className="space-y-1">
              <p>
                <span className="font-semibold">Next working day delivery (£7)</span> — delivered {format(nwdDate, 'EEEE d MMMM')}.{' '}
                <span className="font-semibold">Standard delivery (£5)</span> — delivered {format(standardDate, 'EEEE d MMMM')}.
              </p>
              <p className="text-blue-700 dark:text-blue-400">We deliver Mon–Fri only.</p>
            </div>
          </div>
        )}

        {bannerState === 'weekend' && (
          <div className="flex gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-300">
            <AlertTriangle className="h-4 w-4 mt-0.5 flex-shrink-0" />
            <div className="space-y-1">
              <p>
                <span className="font-semibold">Weekend orders are processed on Monday.</span>{' '}
                Earliest delivery: <span className="font-semibold">{format(standardDate, 'EEEE d MMMM')}</span>.
              </p>
              <p className="text-amber-700 dark:text-amber-400">We deliver Mon–Fri only.</p>
            </div>
          </div>
        )}

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="start-date" className="text-sm font-medium text-foreground">
                Delivery date
              </label>
              {isNWD && (
                <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                  Next working day — £7
                </span>
              )}
            </div>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                id="start-date"
                type="date"
                min={minDeliveryStr}
                value={startDate}
                onChange={(e) => handleStartDateChange(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="end-date" className="text-sm font-medium text-foreground">
                Estimated return date
              </label>
              <span className="text-xs text-muted-foreground">3 day minimum</span>
            </div>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                id="end-date"
                type="date"
                min={minEndDateStr || minDeliveryStr}
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                disabled={!startDate}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
          </div>
        </div>

        {rentalDays > 0 && (
          <p className="text-sm text-muted-foreground">
            {rentalDays} day{rentalDays !== 1 ? 's' : ''} rental
          </p>
        )}

        <p className="text-sm text-muted-foreground leading-relaxed rounded-lg bg-secondary px-4 py-3 border border-border">
          Don't worry if your plans change — the posting date stops the clock. Return early and we'll refund the unused days (3 day minimum charge). And if you need to hold onto your device a little longer, just let us know.
        </p>
      </div>

      {/* Step 3: Your details */}
      {datesComplete && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold">3</span>
            Your details
          </h3>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Full name</label>
              <input
                type="text"
                placeholder="Jane Smith"
                value={customer.name}
                onChange={setField('name')}
                autoComplete="name"
                className={inputClass}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Email address</label>
              <input
                type="email"
                placeholder="jane@example.com"
                value={customer.email}
                onChange={setField('email')}
                autoComplete="email"
                className={inputClass}
              />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <label className="text-sm font-medium text-foreground">Phone number</label>
              <input
                type="tel"
                placeholder="07700 900000"
                value={customer.phone}
                onChange={setField('phone')}
                autoComplete="tel"
                className={inputClass}
              />
            </div>
          </div>

          <div className="space-y-3 pt-1">
            <p className="text-sm font-medium text-foreground">Delivery address</p>
            <input
              type="text"
              placeholder="Address line 1"
              value={customer.addressLine1}
              onChange={setField('addressLine1')}
              autoComplete="address-line1"
              className={inputClass}
            />
            <input
              type="text"
              placeholder="Address line 2 (optional)"
              value={customer.addressLine2}
              onChange={setField('addressLine2')}
              autoComplete="address-line2"
              className={inputClass}
            />
            <div className="grid sm:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="City / Town"
                value={customer.city}
                onChange={setField('city')}
                autoComplete="address-level2"
                className={inputClass}
              />
              <input
                type="text"
                placeholder="Postcode"
                value={customer.postcode}
                onChange={setField('postcode')}
                autoComplete="postal-code"
                className={inputClass}
              />
            </div>
          </div>
        </div>
      )}

      {/* Step 4: Review & Pay */}
      {pricing && selectedDeviceData && customerComplete && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold">4</span>
            Review your order
          </h3>
          <Card className="border-2 border-accent/20">
            <CardContent className="p-6 space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold text-foreground">{selectedDeviceData.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {format(new Date(startDate + 'T00:00:00'), 'dd MMM yyyy')} – {format(new Date(endDate + 'T00:00:00'), 'dd MMM yyyy')}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  {formatPrice(pricing.dailyRate)}/day
                </p>
              </div>

              <div className="border-t border-border pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Rental ({rentalDays} days)</span>
                  <span className="text-foreground">{formatPrice(pricing.rentalPrice)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{deliveryLabel}</span>
                  <span className="text-foreground">{formatPrice(deliveryCost)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Freepost returns</span>
                  <span className="text-foreground">Included</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Refundable deposit</span>
                  <span className="text-foreground">{formatPrice(pricing.deposit)}</span>
                </div>
                <div className="flex justify-between font-semibold pt-2 border-t border-border">
                  <span className="text-foreground">Total to pay now</span>
                  <span className="text-foreground">{formatPrice(pricing.total)}</span>
                </div>
              </div>

              <div className="border-t border-border pt-4 text-sm space-y-1">
                <p className="font-medium text-foreground">Delivering to</p>
                <p className="text-muted-foreground">{customer.name}</p>
                <p className="text-muted-foreground">
                  {[customer.addressLine1, customer.addressLine2, customer.city, customer.postcode].filter(Boolean).join(', ')}
                </p>
              </div>

              <p className="text-xs text-muted-foreground">
                Your {formatPrice(pricing.deposit)} deposit will be refunded within 3–5 working days of returning the device in good condition.
              </p>
            </CardContent>
          </Card>

          <Button
            onClick={handleSubmit}
            disabled={!canSubmit}
            className="w-full py-6 text-lg bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            {isLoading ? 'Processing...' : 'Continue to payment'}
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      )}
    </div>
  )
}

function DeviceCard({
  device,
  selected,
  onSelect
}: {
  device: RentalDevice
  selected: boolean
  onSelect: () => void
}) {
  const Icon = device.id === 'pocket-mifi' ? Wifi : Router
  const lowestPrice = device.pricing[device.pricing.length - 1].pricePerDayPence

  return (
    <Card
      className={cn(
        "cursor-pointer transition-all duration-200 hover:shadow-md",
        selected ? "border-2 border-accent ring-2 ring-accent/20" : "border border-border"
      )}
      onClick={onSelect}
    >
      <CardContent className="p-5">
        <div className="flex items-start gap-4">
          <div className={cn(
            "flex items-center justify-center w-12 h-12 rounded-xl",
            selected ? "bg-accent text-accent-foreground" : "bg-secondary text-foreground"
          )}>
            <Icon className="h-6 w-6" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-foreground">{device.name}</h4>
              {selected && (
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-accent text-accent-foreground">
                  <Check className="h-3 w-3" />
                </div>
              )}
            </div>
            <p className="text-sm text-muted-foreground mt-1">{device.shortDescription}</p>
            <p className="text-sm font-medium text-accent mt-2">
              From {formatPrice(lowestPrice)}/day
            </p>
          </div>
        </div>
        <ul className="mt-4 space-y-1">
          {device.features.slice(0, 3).map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="h-3.5 w-3.5 text-accent flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
