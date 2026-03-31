import AppHeader from '@/components/headers/AppHeader'
import BottomNav from '@/components/BottomNav'
import Image from 'next/image'

export default function UserProfile() {
  return (
    <div className="bg-surface text-on-surface min-h-screen pb-32">
      <AppHeader avatarAlt="User profile photo" />
      <main className="pt-24 px-4 max-w-3xl mx-auto">
        <section className="flex flex-col items-center mb-10">
          <div className="relative mb-6">
            <div className="w-32 h-32 rounded-full overflow-hidden shadow-xl ring-4 ring-white">
              <Image
                alt="Alex Morgan"
                width={128}
                height={128}
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHknwU8WUeEgmaMxkDFv1Im_6etFH0PzGo6RvcY453gGz24SYw2-s2dtx4NJCIw1X_xskiBFNRTVI9oLqtImZ8G01F1Kqbl78cZcJHQc3eoOZfsrGXTN7JsPSupVOvR4_7LEEwYo5zq7its8_fnqe8Y4nu233Rgy8ErMb9elzI9VJZR1YUvSSB-tKJSKLTjSQEB6kRE6IVdrGbh-bxDeHi7-f6KquD2a2KSvng_6t_y5bw39Atru-KPlsyS90Q_JOu3caZst1Ge9A"
              />
            </div>
            <div className="absolute bottom-1 right-1 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold shadow-md">
              USER
            </div>
          </div>
          <h2 className="text-3xl font-extrabold font-headline tracking-tight text-on-surface mb-2">
            Alex Morgan
          </h2>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex text-tertiary">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                star_half
              </span>
            </div>
            <span className="text-on-surface-variant font-semibold text-sm">
              4.8 (38 reviews)
            </span>
          </div>
          <div className="flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-full">
            <span className="material-symbols-outlined text-primary text-sm">
              location_on
            </span>
            <span className="text-on-surface-variant text-sm font-medium">
              Melbourne, VIC
            </span>
          </div>
        </section>

        <section className="space-y-4">
          <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                  Current Address
                </p>
                <p className="mt-2 font-semibold text-on-surface">
                  123 Collins St, Melbourne VIC 3000
                </p>
                <p className="mt-2 text-sm text-on-surface-variant">
                  To request service for another address, add a new address and
                  set it as active.
                </p>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
                Active
              </span>
            </div>
          </div>

          <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-5">
            <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
              Other Addresses
            </p>
            <div className="mt-4 space-y-3">
              <div className="flex items-start justify-between gap-4 bg-surface-container-low rounded-xl p-4">
                <div>
                  <p className="font-semibold">45 King St, Sydney NSW 2000</p>
                  <p className="text-sm text-on-surface-variant mt-1">
                    Apartment • Intercom
                  </p>
                </div>
                <button className="text-primary font-extrabold text-xs px-3 py-2 rounded-xl bg-white border border-outline-variant/20 active:scale-95 transition-transform">
                  Set Active
                </button>
              </div>

              <div className="flex items-start justify-between gap-4 bg-surface-container-low rounded-xl p-4">
                <div>
                  <p className="font-semibold">12 Swanston St, Melbourne VIC</p>
                  <p className="text-sm text-on-surface-variant mt-1">
                    House • Pets
                  </p>
                </div>
                <button className="text-primary font-extrabold text-xs px-3 py-2 rounded-xl bg-white border border-outline-variant/20 active:scale-95 transition-transform">
                  Set Active
                </button>
              </div>
            </div>

            <button className="w-full mt-4 bg-surface-container-high text-on-surface font-bold py-3.5 rounded-xl hover:bg-surface-container-highest transition-colors active:scale-95">
              Add New Address
            </button>
          </div>
        </section>
      </main>
      <BottomNav />
    </div>
  )
}
