'use client'

import AppHeader from '@/components/headers/AppHeader'
import BottomNav from '@/components/BottomNav'
import CustomServiceForm, {
  type CustomServiceValue,
} from '@/components/customer/CustomServiceForm'
import { useEffect, useMemo, useRef, useState } from 'react'

export default function Home() {
  const [date, setDate] = useState<string>(() => {
    const d = new Date()
    const pad = (n: number) => String(n).padStart(2, '0')
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
  })
  const [startTime, setStartTime] = useState<string>(() => {
    const now = new Date()
    const minutes = now.getHours() * 60 + now.getMinutes()
    const roundUpTo30 = (m: number) => Math.ceil(m / 30) * 30
    const clamped = Math.min(20 * 60, Math.max(6 * 60, roundUpTo30(minutes)))
    const hh = String(Math.floor(clamped / 60)).padStart(2, '0')
    const mm = String(clamped % 60).padStart(2, '0')
    return `${hh}:${mm}`
  })
  const [flexibleDates, setFlexibleDates] = useState(false)
  const [ownEquipment, setOwnEquipment] = useState(false)
  const [radiusKm, setRadiusKm] = useState(10)

  const services = useMemo(
    () => [
      {
        id: 'general',
        title: 'General Clean',
        basePrice: 152,
        priceLabel: 'Starts from $152',
        blurb:
          'Great for homes looking for a touch up clean. Recommended if your home is regularly cleaned & maintained.',
        detailsTitle: 'General:',
        includes: [
          'NBedrooms',
          'NBathrooms',
          'NKitchen',
          'NLiving/Dining',
          'NVacuuming',
          'NMopping',
          'NDusting',
          'NTidying',
        ],
      },
      {
        id: 'deep',
        title: 'Deep Clean',
        basePrice: 280,
        priceLabel: 'Starts from $280',
        blurb:
          'Recommended for homes not professionally cleaned in over 30 days. And for first time visits, to get your home prepared for ongoing maintenance.',
        detailsTitle: 'Includes everything in the General Clean PLUS…',
        includes: [
          'NSkirting Boards',
          'NDust Cornices',
          'NWindow Frames*',
          'NWindow Ledges*',
          'NRemove Cobwebs',
          'NDoors / Frames',
        ],
      },
      {
        id: 'end-of-lease',
        title: 'End Of Lease',
        basePrice: 432,
        priceLabel: 'Starts from $432',
        blurb:
          'Recommended if you’re moving out of a rental property and need your bond back. And for landlords looking to put their property on the market.',
        detailsTitle: 'Includes everything in the General & Deep Clean PLUS…',
        includes: [
          'NInside Windows',
          'NInside Oven',
          'NInside Cupboards',
          'NWall Spot Cleaning',
          'NRange-Hood',
        ],
      },
    ],
    []
  )

  const [selectedServiceId, setSelectedServiceId] = useState<
    (typeof services)[number]['id']
  >('general')

  const selectedService = useMemo(
    () => services.find((s) => s.id === selectedServiceId) ?? services[0],
    [selectedServiceId, services]
  )

  const extras = useMemo(
    () => [
      { id: 'fridge', label: 'Fridge Cleaning', icon: 'kitchen', price: 25 },
      {
        id: 'oven',
        label: 'Oven cleaning',
        icon: 'local_fire_department',
        price: 35,
      },
      { id: 'cupboards', label: 'Inside Cupboards', icon: 'inventory_2', price: 40 },
      { id: 'windows', label: 'Inside Windows', icon: 'window', price: 45 },
      {
        id: 'laundry',
        label: 'Laundry',
        icon: 'local_laundry_service',
        price: 20,
      },
      { id: 'bedsheets', label: 'Change Bedsheets', icon: 'bed', price: 15 },
      { id: 'walls', label: 'Walls', icon: 'wallpaper', price: 60 },
      { id: 'balcony', label: 'Balcony', icon: 'balcony', price: 30 },
      { id: 'blinds', label: 'Blinds & Shutters', icon: 'blinds', price: 35 },
      { id: 'sliding', label: 'Sliding Glass Doors', icon: 'door_sliding', price: 45 },
      { id: 'carpet', label: 'Carpet Steam Clean', icon: 'vacuum', price: 70 },
      { id: 'wardrobe', label: 'Wardrobe', icon: 'wardrobe', price: 35 },
    ],
    []
  )

  const [summaryDocked, setSummaryDocked] = useState(false)
  const [summaryExpanded, setSummaryExpanded] = useState(false)
  const [servicesTab, setServicesTab] = useState<'general' | 'custom'>('general')
  const [addOnsExpanded, setAddOnsExpanded] = useState(false)
  const [extraQty, setExtraQty] = useState<Record<string, number>>({})
  const [customService, setCustomService] = useState<CustomServiceValue>({
    rooms: 1,
    bathrooms: 1,
    kitchen: 1,
    livingDining: 1,
    windows: 1,
    rugs: 1,
    laundry: 'none',
  })
  const serviceRailRef = useRef<HTMLDivElement | null>(null)
  const serviceCardRefs = useRef<Record<string, HTMLButtonElement | null>>({})

  const ensureServiceVisible = (serviceId: string) => {
    const rail = serviceRailRef.current
    const el = serviceCardRefs.current[serviceId]
    if (!rail || !el) return

    const railRect = rail.getBoundingClientRect()
    const elRect = el.getBoundingClientRect()
    const leftInRail = elRect.left - railRect.left
    const rightInRail = elRect.right - railRect.left
    const padding = 12

    if (leftInRail >= padding && rightInRail <= railRect.width - padding) return

    const targetLeft =
      rail.scrollLeft + leftInRail - (railRect.width - elRect.width) / 2
    rail.scrollTo({ left: targetLeft, behavior: 'smooth' })
  }

  useEffect(() => {
    if (!addOnsExpanded) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setAddOnsExpanded(false)
    }
    window.addEventListener('keydown', onKeyDown)
    const prevHtmlOverflow = document.documentElement.style.overflow
    const prevBodyOverflow = document.body.style.overflow
    const prevBodyOverscroll = document.body.style.overscrollBehavior
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'
    document.body.style.overscrollBehavior = 'contain'
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.documentElement.style.overflow = prevHtmlOverflow
      document.body.style.overflow = prevBodyOverflow
      document.body.style.overscrollBehavior = prevBodyOverscroll
    }
  }, [addOnsExpanded])

  useEffect(() => {
    if (summaryDocked) return
    const onScroll = () => {
      if (window.scrollY > 60) setSummaryDocked(true)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [summaryDocked])

  const selectedExtrasTotal = useMemo(() => {
    return extras.reduce((sum, extra) => {
      const qty = extraQty[extra.id] ?? 0
      return sum + qty * extra.price
    }, 0)
  }, [extras, extraQty])

  const customBasePrice = useMemo(() => {
    const laundryCost =
      customService.laundry === 'one'
        ? 20
        : customService.laundry === 'two'
          ? 40
          : 0

    return (
      customService.rooms * 40 +
      customService.bathrooms * 60 +
      customService.kitchen * 80 +
      customService.livingDining * 70 +
      customService.windows * 5 +
      customService.rugs * 5 +
      laundryCost
    )
  }, [customService])

  const activeServiceTitle =
    servicesTab === 'custom' ? 'Custom' : selectedService.title
  const activeBasePrice =
    servicesTab === 'custom' ? customBasePrice : selectedService.basePrice

  const selectedExtrasCount = useMemo(() => {
    return Object.values(extraQty).reduce((sum, qty) => sum + qty, 0)
  }, [extraQty])

  const incExtra = (id: string) => {
    setExtraQty((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }))
    setSummaryDocked(true)
  }

  const decExtra = (id: string) => {
    setExtraQty((prev) => {
      const nextQty = Math.max(0, (prev[id] ?? 0) - 1)
      if (nextQty === 0) {
        const { [id]: _removed, ...rest } = prev
        return rest
      }
      return { ...prev, [id]: nextQty }
    })
    setSummaryDocked(true)
  }

  const total = activeBasePrice + selectedExtrasTotal

  const timeSlots = useMemo(() => {
    const slots: Array<{ value: string; label: string }> = []
    for (let mins = 6 * 60; mins <= 20 * 60; mins += 30) {
      const hh = Math.floor(mins / 60)
      const mm = mins % 60
      const value = `${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}`
      const hour12 = ((hh + 11) % 12) + 1
      const ampm = hh < 12 ? 'AM' : 'PM'
      const label = `${hour12}:${String(mm).padStart(2, '0')} ${ampm}`
      slots.push({ value, label })
    }
    return slots
  }, [])

  const dateLabel = useMemo(() => {
    const parsed = new Date(`${date}T00:00:00`)
    if (Number.isNaN(parsed.getTime())) return date
    return parsed.toLocaleDateString(undefined, {
      weekday: 'short',
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    })
  }, [date])

  const timeLabel = useMemo(() => {
    const [hh, mm] = startTime.split(':')
    const h = Number(hh)
    const m = Number(mm)
    if (!Number.isFinite(h) || !Number.isFinite(m)) return startTime
    const hour12 = ((h + 11) % 12) + 1
    const ampm = h < 12 ? 'AM' : 'PM'
    return `${hour12}:${String(m).padStart(2, '0')} ${ampm}`
  }, [startTime])

  const [calendarOpen, setCalendarOpen] = useState(false)
  const [calendarYear, setCalendarYear] = useState(() => Number(date.split('-')[0]))
  const [calendarMonth, setCalendarMonth] = useState(() => Number(date.split('-')[1]) - 1) // 0-11

  const monthLabel = useMemo(() => {
    const d = new Date(calendarYear, calendarMonth, 1)
    return d.toLocaleDateString(undefined, { month: 'short', year: 'numeric' })
  }, [calendarYear, calendarMonth])

  const days = useMemo(() => {
    const firstDay = new Date(calendarYear, calendarMonth, 1)
    const startWeekday = firstDay.getDay() // 0(Sun)-6(Sat)
    const totalDays = new Date(calendarYear, calendarMonth + 1, 0).getDate()
    const grid: Array<{ day?: number; iso?: string }> = []
    for (let i = 0; i < startWeekday; i++) grid.push({})
    for (let d = 1; d <= totalDays; d++) {
      const iso = `${calendarYear}-${String(calendarMonth + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`
      grid.push({ day: d, iso })
    }
    return grid
  }, [calendarYear, calendarMonth])

  return (
    <div className="bg-surface text-on-surface min-h-screen pb-56">
      <AppHeader avatarAlt="User profile photo" />
      <div className="fixed left-0 w-full z-40 bottom-[92px] pointer-events-none">
        <div
          className={`mx-auto max-w-7xl px-4 transition-all duration-300 ease-out ${
            summaryDocked
              ? 'translate-y-0 opacity-100'
              : 'translate-y-16 opacity-0'
          }`}
        >
          <div className="pointer-events-auto relative bg-white/80 backdrop-blur-3xl border border-outline-variant/20 rounded-xl shadow-[0_-10px_30px_rgba(0,0,0,0.06)] px-4 py-3">
            <button
              type="button"
              onClick={() => setSummaryExpanded(true)}
              className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-xl border border-outline-variant/20 shadow-md flex items-center justify-center active:scale-95 transition-transform"
            >
              <span className="material-symbols-outlined text-on-surface-variant">
                visibility
              </span>
            </button>
            <div className="grid grid-cols-[1fr_auto_auto] items-center gap-3">
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                  {activeServiceTitle}
                </p>
                <p className="text-xs font-semibold text-on-surface truncate">
                  ${activeBasePrice}
                  {selectedExtrasTotal > 0 ? ` + $${selectedExtrasTotal}` : ''}{' '}
                  {selectedExtrasTotal > 0 ? '(Add-ons)' : ''}
                </p>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-bold uppercase tracking-widest text-outline">
                  Estimated
                </p>
                <p className="text-base font-extrabold text-primary leading-none">
                  ${total}
                </p>
              </div>
              <button
                type="button"
                className="h-9 px-4 rounded-xl bg-primary text-on-primary font-bold text-xs active:scale-[0.98] transition-transform justify-self-end"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>

      {summaryDocked ? (
        <div
          className={`fixed inset-0 z-[60] transition-opacity duration-300 ${
            summaryExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setSummaryExpanded(false)}
          />
          <div
            className={`absolute inset-x-0 bottom-0 bg-white rounded-t-xl shadow-2xl transition-transform duration-300 ${
              summaryExpanded ? 'translate-y-0' : 'translate-y-full'
            }`}
          >
            <div className="px-4 pt-4 pb-6 max-w-3xl mx-auto">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                    Summary
                  </p>
                  <h3 className="text-xl font-extrabold tracking-tight">
                    Estimated request
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSummaryExpanded(false)}
                  className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center active:scale-95 transition-transform"
                >
                  <span className="material-symbols-outlined text-on-surface-variant">
                    close
                  </span>
                </button>
              </div>

              <div className="space-y-4">
                <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-5">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                    Address
                  </p>
                  <p className="mt-2 font-semibold text-on-surface">
                    123 Collins St, Melbourne VIC 3000
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-5">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                      Schedule
                    </p>
                    <p className="mt-2 font-semibold">
                      {dateLabel} • {timeLabel}
                    </p>
                    <p className="mt-1 text-sm text-on-surface-variant">
                      Flexible dates: {flexibleDates ? 'Yes' : 'No'}
                    </p>
                  </div>
                  <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-5">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                      Preferences
                    </p>
                    <p className="mt-2 font-semibold">
                      Own equipment: {ownEquipment ? 'Yes' : 'No'}
                    </p>
                    <p className="mt-1 text-sm text-on-surface-variant">
                      Radius: {radiusKm} km
                    </p>
                  </div>
                </div>

                <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                        Service
                      </p>
                      <p className="mt-2 font-extrabold">{activeServiceTitle}</p>
                      <p className="mt-1 text-sm text-on-surface-variant">
                        Base: ${activeBasePrice}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-outline">
                        Estimated
                      </p>
                      <p className="text-2xl font-extrabold text-primary leading-none">
                        ${total}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                      Add-ons
                    </p>
                    {selectedExtrasCount === 0 ? (
                      <p className="mt-2 text-sm text-on-surface-variant">
                        No add-ons selected.
                      </p>
                    ) : (
                      <ul className="mt-2 space-y-2">
                        {extras
                          .filter((e) => (extraQty[e.id] ?? 0) > 0)
                          .map((extra) => {
                            const qty = extraQty[extra.id] ?? 0
                          if (!extra) return null
                          return (
                            <li
                              key={extra.id}
                              className="flex items-center justify-between text-sm"
                            >
                              <span className="font-semibold text-on-surface">
                                {extra.label} × {qty}
                              </span>
                              <span className="font-bold text-primary">
                                +${qty * extra.price}
                              </span>
                            </li>
                          )
                        })}
                      </ul>
                    )}
                    <div className="mt-3 flex items-center justify-between text-sm">
                      <span className="font-semibold text-on-surface-variant">
                        Add-ons total
                      </span>
                      <span className="font-bold text-on-surface">
                        +${selectedExtrasTotal}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <div
        className={`fixed inset-0 z-[70] transition-opacity duration-500 overscroll-none ${
          addOnsExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/30"
          onClick={() => setAddOnsExpanded(false)}
        />
        <div
          className={`absolute inset-x-0 bottom-0 bg-white rounded-t-xl shadow-2xl transition-transform duration-500 ease-out max-h-[85vh] overflow-hidden ${
            addOnsExpanded ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <div className="max-w-3xl mx-auto h-[85vh] flex flex-col min-h-0">
            <div className="sticky top-0 bg-white/90 backdrop-blur-xl px-4 pt-4 pb-4 border-b border-outline-variant/20">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                    Add-ons
                  </p>
                  <h3 className="text-xl font-extrabold tracking-tight">
                    Choose extras
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setAddOnsExpanded(false)}
                  className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center active:scale-95 transition-transform"
                >
                  <span className="material-symbols-outlined text-on-surface-variant">
                    close
                  </span>
                </button>
              </div>
            </div>

            <div className="px-4 py-4 overflow-y-auto flex-1 min-h-0 overscroll-contain touch-pan-y">
              <div className="space-y-3">
                {extras.map((x) => {
                  const qty = extraQty[x.id] ?? 0
                  return (
                    <div
                      key={x.id}
                      className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-5 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                          <span className="material-symbols-outlined text-3xl">
                            {x.icon}
                          </span>
                        </div>
                        <div>
                          <p className="font-extrabold text-on-surface">
                            {x.label}
                          </p>
                          <p className="text-xs font-bold text-primary mt-1">
                            +${x.price}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 bg-surface-container-low p-2 rounded-full">
                        <button
                          type="button"
                          onClick={() => decExtra(x.id)}
                          className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-secondary active:scale-90 transition-transform"
                        >
                          <span className="material-symbols-outlined">
                            remove
                          </span>
                        </button>
                        <span className="font-headline font-extrabold text-xl w-6 text-center">
                          {qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => incExtra(x.id)}
                          className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white shadow-md shadow-secondary/20 active:scale-90 transition-transform"
                        >
                          <span className="material-symbols-outlined">add</span>
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="pt-24 px-4 max-w-7xl mx-auto space-y-10">
        <section>
          <h1 className="text-[26px] sm:text-3xl font-extrabold tracking-tight mb-4 text-on-surface whitespace-nowrap">
            Where do you need?
          </h1>
          <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant -mt-2 mb-4">
            123 Collins St, Melbourne VIC 3000 • Add a new address to change
          </p>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">
              Date
            </label>
            <div className="relative w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <button
                type="button"
                onClick={() => setCalendarOpen(true)}
                className="w-full px-4 py-3 flex items-center justify-between rounded-xl hover:bg-surface-container-low transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="material-symbols-outlined text-on-surface-variant">
                    calendar_month
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-extrabold text-on-surface truncate">
                      {dateLabel}
                    </p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-outline">
                      Tap to change
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-primary">
                    {timeLabel}
                  </span>
                  <span className="material-symbols-outlined text-outline">
                    expand_more
                  </span>
                </div>
              </button>
              {calendarOpen ? (
                <div className="absolute z-20 top-full left-0 mt-2 w-80 bg-white rounded-xl border border-outline-variant/20 shadow-xl p-3">
                  <div className="flex items-center justify-between mb-2 px-1">
                    <button
                      type="button"
                      className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-container-low"
                      onClick={() => {
                        const m = calendarMonth === 0 ? 11 : calendarMonth - 1
                        const y = calendarMonth === 0 ? calendarYear - 1 : calendarYear
                        setCalendarMonth(m)
                        setCalendarYear(y)
                      }}
                    >
                      <span className="material-symbols-outlined">chevron_left</span>
                    </button>
                    <span className="text-sm font-extrabold">{monthLabel}</span>
                    <button
                      type="button"
                      className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-container-low"
                      onClick={() => {
                        const m = calendarMonth === 11 ? 0 : calendarMonth + 1
                        const y = calendarMonth === 11 ? calendarYear + 1 : calendarYear
                        setCalendarMonth(m)
                        setCalendarYear(y)
                      }}
                    >
                      <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                  </div>
                  <div className="grid grid-cols-7 gap-2 text-center text-[10px] font-bold text-on-surface-variant mb-1">
                    <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
                  </div>
                  <div className="grid grid-cols-7 gap-2">
                    {days.map((d, i) => {
                      const isSelected = d.iso === date
                      return (
                        <button
                          key={i}
                          type="button"
                          disabled={!d.day}
                          onClick={() => {
                            if (!d.iso) return
                            setDate(d.iso)
                            setSummaryDocked(true)
                            setCalendarOpen(false)
                          }}
                          className={`h-9 rounded-lg text-sm font-bold ${
                            !d.day
                              ? 'opacity-30 cursor-default'
                              : isSelected
                                ? 'bg-primary text-on-primary'
                                : 'hover:bg-surface-container-low'
                          }`}
                        >
                          {d.day ?? ''}
                        </button>
                      )
                    })}
                  </div>
                </div>
              ) : null}
            </div>

            <div className="mt-3 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => {
                  setFlexibleDates((v) => !v)
                  setSummaryDocked(true)
                }}
                className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl px-3 py-2 flex items-center justify-between gap-3 hover:bg-surface-container-low transition-colors"
              >
                <span className="text-xs font-bold text-on-surface-variant whitespace-nowrap">
                  Flexible dates
                </span>
                <span
                  className={`w-9 h-5 rounded-full flex items-center p-0.5 transition-colors ${
                    flexibleDates ? 'bg-primary' : 'bg-surface-container-high'
                  }`}
                >
                  <span
                    className={`w-4 h-4 rounded-full bg-white transition-transform ${
                      flexibleDates ? 'translate-x-4' : 'translate-x-0'
                    }`}
                  />
                </span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setOwnEquipment((v) => !v)
                  setSummaryDocked(true)
                }}
                className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl px-3 py-2 flex items-center justify-between gap-3 hover:bg-surface-container-low transition-colors"
              >
                <span className="text-xs font-bold text-on-surface-variant whitespace-nowrap">
                  Own equipment
                </span>
                <span
                  className={`w-9 h-5 rounded-full flex items-center p-0.5 transition-colors ${
                    ownEquipment ? 'bg-primary' : 'bg-surface-container-high'
                  }`}
                >
                  <span
                    className={`w-4 h-4 rounded-full bg-white transition-transform ${
                      ownEquipment ? 'translate-x-4' : 'translate-x-0'
                    }`}
                  />
                </span>
              </button>
            </div>

            <div className="mt-4">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                Start time
              </label>
              <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl px-3 py-2">
                <div className="flex gap-2 overflow-x-auto hide-scrollbar snap-x snap-mandatory">
                  {timeSlots.map((slot) => {
                    const selected = slot.value === startTime
                    return (
                      <button
                        key={slot.value}
                        type="button"
                        onClick={() => {
                          setStartTime(slot.value)
                          setSummaryDocked(true)
                        }}
                        className={`snap-start shrink-0 px-3 py-2 rounded-full text-xs font-extrabold transition-colors border ${
                          selected
                            ? 'bg-primary text-on-primary border-primary/30'
                            : 'bg-white/60 text-on-surface-variant border-outline-variant/20 hover:bg-surface-container-low'
                        }`}
                      >
                        {slot.label}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">
              Distance radius
            </label>
            <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl px-4 py-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-on-surface-variant">
                  {radiusKm} km
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-outline">
                  Max
                </span>
              </div>
              <input
                className="mt-2 w-full h-2 bg-surface-container-high rounded-full appearance-none"
                type="range"
                min={1}
                max={30}
                step={1}
                value={radiusKm}
                onChange={(e) => {
                  setRadiusKm(Number(e.target.value))
                  setSummaryDocked(true)
                }}
              />
            </div>
          </div>
        </section>

        <section>
          <div className="flex justify-between items-end mb-4">
            <h2 className="text-xl font-bold">Choose your type</h2>
          </div>

          <div className="bg-surface-container-low/50 p-1 rounded-xl flex mb-4">
            <button
              type="button"
              onClick={() => setServicesTab('general')}
              className={`flex-1 py-3 px-4 rounded-lg font-headline font-bold transition-all duration-200 ${
                servicesTab === 'general'
                  ? 'text-on-primary bg-primary shadow-lg shadow-primary/20'
                  : 'text-on-surface-variant hover:bg-white/50'
              }`}
            >
              Recomended
            </button>
            <button
              type="button"
              onClick={() => {
                setServicesTab('custom')
                setSummaryDocked(true)
              }}
              className={`flex-1 py-3 px-4 rounded-lg font-headline font-bold transition-all duration-200 ${
                servicesTab === 'custom'
                  ? 'text-on-primary bg-primary shadow-lg shadow-primary/20'
                  : 'text-on-surface-variant hover:bg-white/50'
              }`}
            >
              Custom
            </button>
          </div>

          {servicesTab === 'general' ? (
            <>
              <div
                ref={serviceRailRef}
                className="flex gap-4 overflow-x-auto pb-2 pr-4 snap-x snap-mandatory hide-scrollbar md:pr-0 md:pb-0 md:overflow-visible md:grid md:grid-cols-3"
              >
                {services.map((s) => {
                  const selected = s.id === selectedServiceId
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => {
                        setSelectedServiceId(s.id)
                        setSummaryDocked(true)
                        requestAnimationFrame(() => ensureServiceVisible(s.id))
                      }}
                      ref={(el) => {
                        serviceCardRefs.current[s.id] = el
                      }}
                      className={`snap-start shrink-0 w-[85%] sm:w-[60%] md:w-auto md:shrink text-left rounded-xl p-5 border transition-all active:scale-[0.99] max-h-[200px] overflow-hidden flex flex-col items-start justify-start ${
                        selected
                          ? 'bg-primary/10 border-primary/30 shadow-[0_12px_30px_rgba(0,88,190,0.10)]'
                          : 'bg-surface-container-lowest border-outline-variant/20 hover:bg-surface-container-low'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4 w-full">
                        <div>
                          <p className="text-lg font-extrabold font-headline">
                            {s.title}
                          </p>
                          <p className="text-sm text-on-surface-variant font-semibold mt-1">
                            {s.priceLabel}
                          </p>
                        </div>
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            selected ? 'bg-primary text-on-primary' : 'bg-surface'
                          }`}
                        >
                          <span
                            className="material-symbols-outlined"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                          >
                            check
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-on-surface-variant mt-3 leading-relaxed">
                        {s.blurb}
                      </p>
                    </button>
                  )
                })}
              </div>

              <div
                key={selectedServiceId}
                className="mt-4 bg-primary/10 border border-primary/30 rounded-xl p-5 reveal-pop shadow-[0_12px_30px_rgba(0,88,190,0.08)]"
              >
                <div>
                  <p className="text-sm font-extrabold text-on-surface mb-2">
                    {selectedService.detailsTitle}
                  </p>
                  <ul className="grid grid-cols-2 gap-y-2 gap-x-6 text-sm text-on-surface-variant">
                    {selectedService.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary/60" />
                        <span className="font-semibold">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          ) : (
            <CustomServiceForm showIntro={false} onChange={setCustomService} />
          )}
        </section>

        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Add-Ons</h2>
            <button
              type="button"
              onClick={() => {
                setAddOnsExpanded(true)
                setSummaryDocked(true)
              }}
              className="w-10 h-10 rounded-full bg-secondary text-white shadow-md shadow-secondary/20 flex items-center justify-center active:scale-95 transition-transform"
            >
              <span className="material-symbols-outlined">add</span>
            </button>
          </div>

          {selectedExtrasCount === 0 ? (
            <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-5">
              <p className="text-sm text-on-surface-variant">
                No add-ons selected. Tap + to add extras.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {extras
                .filter((x) => (extraQty[x.id] ?? 0) > 0)
                .map((x) => {
                  const qty = extraQty[x.id] ?? 0
                  return (
                    <div
                      key={x.id}
                      className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-5 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                          <span className="material-symbols-outlined text-3xl">
                            {x.icon}
                          </span>
                        </div>
                        <div>
                          <p className="font-extrabold text-on-surface">
                            {x.label}
                          </p>
                          <p className="text-xs font-bold text-primary mt-1">
                            +${x.price}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 bg-surface-container-low p-2 rounded-full">
                        <button
                          type="button"
                          onClick={() => decExtra(x.id)}
                          className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-secondary active:scale-90 transition-transform"
                        >
                          <span className="material-symbols-outlined">
                            remove
                          </span>
                        </button>
                        <span className="font-headline font-extrabold text-xl w-6 text-center">
                          {qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => incExtra(x.id)}
                          className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white shadow-md shadow-secondary/20 active:scale-90 transition-transform"
                        >
                          <span className="material-symbols-outlined">add</span>
                        </button>
                      </div>
                    </div>
                  )
                })}
            </div>
          )}
        </section>
      </main>
      <BottomNav />
    </div>
  )
}
