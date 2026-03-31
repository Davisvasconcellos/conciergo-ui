import AppHeader from '@/components/headers/AppHeader'
import BottomNav from '@/components/BottomNav'

export default function MyBookings() {
  return (
    <div className="bg-surface text-on-surface min-h-screen pb-32">
      <AppHeader avatarAlt="User profile photo" />
      <main className="pt-24 px-4 max-w-3xl mx-auto">
        <header className="mb-6">
          <h1 className="text-2xl font-extrabold tracking-tight">
            My Bookings
          </h1>
          <p className="text-sm text-on-surface-variant mt-1">
            Your upcoming and past services.
          </p>
        </header>

        <div className="space-y-4">
          <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-extrabold">General Clean</p>
                <p className="text-sm text-on-surface-variant mt-1">
                  30/03/2026 • 10:00
                </p>
                <p className="text-sm text-on-surface-variant mt-1">
                  123 Collins St, Melbourne VIC
                </p>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                Upcoming
              </span>
            </div>
          </div>

          <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-extrabold">Deep Clean</p>
                <p className="text-sm text-on-surface-variant mt-1">
                  12/03/2026 • 14:00
                </p>
                <p className="text-sm text-on-surface-variant mt-1">
                  45 King St, Sydney NSW
                </p>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-outline bg-surface-container-high px-3 py-1 rounded-full">
                Completed
              </span>
            </div>
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  )
}
