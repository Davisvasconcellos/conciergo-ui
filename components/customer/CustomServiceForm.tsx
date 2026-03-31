'use client'

import { useEffect, useState } from 'react'

export type CustomServiceValue = {
  rooms: number
  bathrooms: number
  kitchen: number
  livingDining: number
  windows: number
  rugs: number
  laundry: 'none' | 'one' | 'two'
}

type Props = {
  showIntro?: boolean
  onChange?: (value: CustomServiceValue) => void
  initialValue?: CustomServiceValue
}

const defaultValue: CustomServiceValue = {
  rooms: 1,
  bathrooms: 1,
  kitchen: 1,
  livingDining: 1,
  windows: 1,
  rugs: 1,
  laundry: 'none',
}

export default function CustomServiceForm({
  showIntro = true,
  onChange,
  initialValue,
}: Props) {
  const [value, setValue] = useState<CustomServiceValue>(
    initialValue ?? defaultValue
  )

  useEffect(() => {
    onChange?.(value)
  }, [onChange, value])

  return (
    <div>
      {showIntro ? (
        <div className="mb-8 text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold font-headline text-on-surface tracking-tight leading-tight">
            Customize your <span className="text-primary">service</span>
          </h2>
          <p className="mt-4 text-on-surface-variant font-body text-lg leading-relaxed">
            Tell us about your space. We&apos;ll calculate the exact time and
            cost for a pristine result.
          </p>
        </div>
      ) : null}

      <div className="space-y-6">
        <div className="bg-surface-container-lowest p-5 rounded-xl flex items-center justify-between border border-outline-variant/10">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-3xl">bed</span>
            </div>
            <div>
              <p className="font-headline font-bold text-lg text-on-surface">
                Rooms
              </p>
              <p className="font-body text-sm text-on-surface-variant">
                Bedrooms and living areas
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-3 bg-surface-container-low p-2 rounded-full">
            <button
              type="button"
              onClick={() =>
                setValue((prev) => ({ ...prev, rooms: Math.max(0, prev.rooms - 1) }))
              }
              className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary active:scale-90 transition-transform"
            >
              <span className="material-symbols-outlined">remove</span>
            </button>
            <span className="font-headline font-extrabold text-xl w-6 text-center">
              {value.rooms}
            </span>
            <button
              type="button"
              onClick={() => setValue((prev) => ({ ...prev, rooms: prev.rooms + 1 }))}
              className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-md shadow-primary/20 active:scale-90 transition-transform"
            >
              <span className="material-symbols-outlined">add</span>
            </button>
            </div>
            <span className="mt-2 text-[10px] font-bold text-primary bg-secondary/10 rounded-full px-2 py-1">
              +$40 each
            </span>
          </div>
        </div>

        <div className="bg-surface-container-lowest p-5 rounded-xl flex items-center justify-between border border-outline-variant/10">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-xl bg-secondary/5 flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined text-3xl">
                bathroom
              </span>
            </div>
            <div>
              <p className="font-headline font-bold text-lg text-on-surface">
                Bathrooms
              </p>
              <p className="font-body text-sm text-on-surface-variant">
                Full and half baths
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-3 bg-surface-container-low p-2 rounded-full">
            <button
              type="button"
              onClick={() =>
                setValue((prev) => ({
                  ...prev,
                  bathrooms: Math.max(0, prev.bathrooms - 1),
                }))
              }
              className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary active:scale-90 transition-transform"
            >
              <span className="material-symbols-outlined">remove</span>
            </button>
            <span className="font-headline font-extrabold text-xl w-6 text-center">
              {value.bathrooms}
            </span>
            <button
              type="button"
              onClick={() =>
                setValue((prev) => ({ ...prev, bathrooms: prev.bathrooms + 1 }))
              }
              className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-md shadow-primary/20 active:scale-90 transition-transform"
            >
              <span className="material-symbols-outlined">add</span>
            </button>
            </div>
            <span className="mt-2 text-[10px] font-bold text-primary bg-secondary/10 rounded-full px-2 py-1">
              +$60 each
            </span>
          </div>
        </div>

        <div className="bg-surface-container-lowest p-5 rounded-xl flex items-center justify-between border border-outline-variant/10">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-3xl">
                countertops
              </span>
            </div>
            <div>
              <p className="font-headline font-bold text-lg text-on-surface">
                Kitchen
              </p>
              <p className="font-body text-sm text-on-surface-variant">
                Kitchen area
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-3 bg-surface-container-low p-2 rounded-full">
            <button
              type="button"
              onClick={() =>
                setValue((prev) => ({
                  ...prev,
                  kitchen: Math.max(0, prev.kitchen - 1),
                }))
              }
              className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary active:scale-90 transition-transform"
            >
              <span className="material-symbols-outlined">remove</span>
            </button>
            <span className="font-headline font-extrabold text-xl w-6 text-center">
              {value.kitchen}
            </span>
            <button
              type="button"
              onClick={() =>
                setValue((prev) => ({ ...prev, kitchen: prev.kitchen + 1 }))
              }
              className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-md shadow-primary/20 active:scale-90 transition-transform"
            >
              <span className="material-symbols-outlined">add</span>
            </button>
            </div>
            <span className="mt-2 text-[10px] font-bold text-primary bg-secondary/10 rounded-full px-2 py-1">
              +$80 each
            </span>
          </div>
        </div>

        <div className="bg-surface-container-lowest p-5 rounded-xl flex items-center justify-between border border-outline-variant/10">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-xl bg-tertiary/5 flex items-center justify-center text-tertiary">
              <span className="material-symbols-outlined text-3xl">chair</span>
            </div>
            <div>
              <p className="font-headline font-bold text-lg text-on-surface">
                Living/Dining
              </p>
              <p className="font-body text-sm text-on-surface-variant">
                Common areas
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-3 bg-surface-container-low p-2 rounded-full">
            <button
              type="button"
              onClick={() =>
                setValue((prev) => ({
                  ...prev,
                  livingDining: Math.max(0, prev.livingDining - 1),
                }))
              }
              className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary active:scale-90 transition-transform"
            >
              <span className="material-symbols-outlined">remove</span>
            </button>
            <span className="font-headline font-extrabold text-xl w-6 text-center">
              {value.livingDining}
            </span>
            <button
              type="button"
              onClick={() =>
                setValue((prev) => ({
                  ...prev,
                  livingDining: prev.livingDining + 1,
                }))
              }
              className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-md shadow-primary/20 active:scale-90 transition-transform"
            >
              <span className="material-symbols-outlined">add</span>
            </button>
            </div>
            <span className="mt-2 text-[10px] font-bold text-primary bg-secondary/10 rounded-full px-2 py-1">
              +$70 each
            </span>
          </div>
        </div>

        <div className="bg-surface-container-lowest p-5 rounded-xl flex items-center justify-between border border-outline-variant/10">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-xl bg-tertiary/5 flex items-center justify-center text-tertiary">
              <span className="material-symbols-outlined text-3xl">window</span>
            </div>
            <div>
              <p className="font-headline font-bold text-lg text-on-surface">
                Windows
              </p>
              <p className="font-body text-sm text-on-surface-variant">
                Window panels
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-3 bg-surface-container-low p-2 rounded-full">
            <button
              type="button"
              onClick={() =>
                setValue((prev) => ({
                  ...prev,
                  windows: Math.max(0, prev.windows - 1),
                }))
              }
              className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary active:scale-90 transition-transform"
            >
              <span className="material-symbols-outlined">remove</span>
            </button>
            <span className="font-headline font-extrabold text-xl w-6 text-center">
              {value.windows}
            </span>
            <button
              type="button"
              onClick={() =>
                setValue((prev) => ({ ...prev, windows: prev.windows + 1 }))
              }
              className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-md shadow-primary/20 active:scale-90 transition-transform"
            >
              <span className="material-symbols-outlined">add</span>
            </button>
            </div>
            <span className="mt-2 text-[10px] font-bold text-primary bg-secondary/10 rounded-full px-2 py-1">
              +$5 each
            </span>
          </div>
        </div>

        <div className="bg-surface-container-lowest p-5 rounded-xl flex items-center justify-between border border-outline-variant/10">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-3xl">layers</span>
            </div>
            <div>
              <p className="font-headline font-bold text-lg text-on-surface">
                Rugs
              </p>
              <p className="font-body text-sm text-on-surface-variant">
                Rugs and mats
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-3 bg-surface-container-low p-2 rounded-full">
              <button
                type="button"
                onClick={() =>
                  setValue((prev) => ({ ...prev, rugs: Math.max(0, prev.rugs - 1) }))
                }
                className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary active:scale-90 transition-transform"
              >
                <span className="material-symbols-outlined">remove</span>
              </button>
              <span className="font-headline font-extrabold text-xl w-6 text-center">
                {value.rugs}
              </span>
              <button
                type="button"
                onClick={() => setValue((prev) => ({ ...prev, rugs: prev.rugs + 1 }))}
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-md shadow-primary/20 active:scale-90 transition-transform"
              >
                <span className="material-symbols-outlined">add</span>
              </button>
            </div>
            <span className="mt-2 text-[10px] font-bold text-primary bg-secondary/10 rounded-full px-2 py-1">
              +$5 each
            </span>
          </div>
        </div>

        <div className="bg-surface-container-low/50 p-1 rounded-xl flex">
          <button
            type="button"
            onClick={() => setValue((prev) => ({ ...prev, laundry: 'none' }))}
            className={`flex-1 py-4 px-4 rounded-lg font-headline font-bold transition-all duration-200 ${
              value.laundry === 'none'
                ? 'text-on-primary bg-primary shadow-lg shadow-primary/20'
                : 'text-on-surface-variant hover:bg-white/50'
            }`}
          >
            No Laundry
          </button>
          <button
            type="button"
            onClick={() => setValue((prev) => ({ ...prev, laundry: 'one' }))}
            className={`flex-1 py-4 px-4 rounded-lg font-headline font-bold transition-all duration-200 ${
              value.laundry === 'one'
                ? 'text-on-primary bg-primary shadow-lg shadow-primary/20'
                : 'text-on-surface-variant hover:bg-white/50'
            }`}
          >
            1 Load (+1h)
          </button>
          <button
            type="button"
            onClick={() => setValue((prev) => ({ ...prev, laundry: 'two' }))}
            className={`flex-1 py-4 px-4 rounded-lg font-headline font-bold transition-all duration-200 ${
              value.laundry === 'two'
                ? 'text-on-primary bg-primary shadow-lg shadow-primary/20'
                : 'text-on-surface-variant hover:bg-white/50'
            }`}
          >
            2 Loads (+2h)
          </button>
        </div>

        <div className="bg-blue-50/50 p-5 rounded-xl flex gap-4 items-start border border-blue-100">
          <span className="material-symbols-outlined text-primary">info</span>
          <p className="font-body text-sm text-on-primary-fixed-variant leading-relaxed">
            Estimates are based on standard sizes. Deep cleaning or heavy-duty
            tasks may require additional time which our concierge will discuss
            upon arrival.
          </p>
        </div>
      </div>
    </div>
  )
}
