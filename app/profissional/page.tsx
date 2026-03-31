import AppHeader from '@/components/headers/AppHeader'

export default function PainelDoProfissional() {
  return (
    <div className="text-on-surface min-h-screen">
      <AppHeader
        avatarAlt="User profile photo"
        avatarSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDnFtjihRtPb_vutfuv5vJxUnIdZ67kQMedF8O65LNmc8xUlBZnt-FfuUw5wXtTq5ERvHuYUqZnItuA6lxQmJPDDnZI1YFITUC757aHfxDV3cAV4zaLcSqo1C8vxKyDBQfyKObPzA7GFY8Ea2J-2LeM8iNyKT1VpUNWnTS8MXTbriQ9Gnhcq0jKXnxMX2bgi815c7GSPXUrqH8A1aIEIRqL6Zt4Ze-K4LdhJiEIoTezB-5Awd_cmMjj5jJ5W_6-3hFe29bassqdX1s"
      />

      <main className="pt-24 pb-32 px-4 max-w-7xl mx-auto">
        <section className="mb-10">
          <h1 className="text-4xl font-extrabold tracking-tight mb-2">
            Welcome back, Ricardo
          </h1>
          <p className="text-on-surface-variant font-medium">
            You have 4 jobs scheduled for today.
          </p>
        </section>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-8 bg-surface-container-lowest rounded-lg p-8 shadow-sm flex flex-col md:flex-row justify-between items-center gap-8 border border-outline-variant/10">
            <div className="flex flex-col gap-2 w-full md:w-1/2">
              <span className="text-sm font-bold uppercase tracking-widest text-on-surface-variant opacity-70">
                Weekly Earnings
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-extrabold text-primary tracking-tighter">
                  R$ 1.284
                </span>
                <span className="text-secondary font-bold flex items-center gap-1 text-sm bg-secondary-container/30 px-2 py-0.5 rounded-full">
                  <span className="material-symbols-outlined text-sm">
                    trending_up
                  </span>{' '}
                  12%
                </span>
              </div>
              <p className="text-on-surface-variant text-sm mt-2">
                Paid directly to your bank account every Tuesday.
              </p>
            </div>
            <div className="w-full md:w-px h-px md:h-16 bg-outline-variant/20" />
            <div className="flex flex-col gap-2 w-full md:w-1/3">
              <span className="text-sm font-bold uppercase tracking-widest text-on-surface-variant opacity-70">
                Rating
              </span>
              <div className="flex items-center gap-1">
                <span className="text-4xl font-extrabold text-tertiary">
                  4.9
                </span>
                <div className="flex gap-0.5 ml-2">
                  <span
                    className="material-symbols-outlined text-tertiary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span
                    className="material-symbols-outlined text-tertiary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span
                    className="material-symbols-outlined text-tertiary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span
                    className="material-symbols-outlined text-tertiary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span
                    className="material-symbols-outlined text-tertiary"
                    style={{ fontVariationSettings: "'FILL' 0" }}
                  >
                    star_half
                  </span>
                </div>
              </div>
              <p className="text-on-surface-variant text-sm">
                Based on 124 reviews
              </p>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 grid grid-cols-2 gap-4">
            <div className="bg-primary-container text-on-primary-container rounded-lg p-6 flex flex-col justify-between">
              <span className="material-symbols-outlined text-3xl">task_alt</span>
              <div>
                <div className="text-2xl font-bold">18</div>
                <div className="text-xs font-semibold opacity-80 uppercase tracking-wider">
                  Jobs Done
                </div>
              </div>
            </div>
            <div className="bg-surface-container-high rounded-lg p-6 flex flex-col justify-between">
              <span className="material-symbols-outlined text-3xl text-primary">
                schedule
              </span>
              <div>
                <div className="text-2xl font-bold">34h</div>
                <div className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">
                  On Site
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7 space-y-4">
            <div className="flex justify-between items-end mb-2">
              <h2 className="text-2xl font-bold">Today&apos;s Schedule</h2>
              <span className="text-primary font-bold text-sm cursor-pointer hover:underline">
                View Calendar
              </span>
            </div>

            <div className="bg-surface-container-lowest rounded-lg p-6 shadow-sm border border-outline-variant/5 flex items-center justify-between transition-transform hover:scale-[1.01]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">
                    cleaning_services
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Deep Cleaning</h3>
                  <p className="text-on-surface-variant text-sm">
                    Client: Ana Martins • 08:30 AM
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold">
                  In Progress
                </span>
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-lg p-6 shadow-sm border border-outline-variant/5 flex items-center justify-between transition-transform hover:scale-[1.01]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">
                    window
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Window Sanitizing</h3>
                  <p className="text-on-surface-variant text-sm">
                    Client: Marcos Silva • 01:00 PM
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className="bg-surface-container-high text-on-surface-variant px-4 py-1.5 rounded-full text-sm font-bold">
                  Scheduled
                </span>
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-lg p-6 shadow-sm border border-outline-variant/5 flex items-center justify-between transition-transform hover:scale-[1.01]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">
                    home_work
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Post-Construction</h3>
                  <p className="text-on-surface-variant text-sm">
                    Client: Julia Rezende • 04:30 PM
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className="bg-surface-container-high text-on-surface-variant px-4 py-1.5 rounded-full text-sm font-bold">
                  Scheduled
                </span>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 space-y-4">
            <h2 className="text-2xl font-bold mb-2">New Job Offers</h2>

            <div className="bg-white rounded-lg p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-blue-50 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-3">
                <span className="bg-amber-100 text-amber-800 text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-tighter">
                  High Demand
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                    <span className="material-symbols-outlined">distance</span>
                  </div>
                  <div>
                    <h3 className="font-bold">Residential Express</h3>
                    <p className="text-xs text-on-surface-variant">
                      2.4 km from your current location
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2 border-y border-outline-variant/10">
                  <div>
                    <p className="text-xs text-on-surface-variant uppercase font-bold tracking-widest">
                      Est. Payout
                    </p>
                    <p className="text-xl font-extrabold text-secondary">
                      R$ 145,00
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-on-surface-variant uppercase font-bold tracking-widest">
                      Duration
                    </p>
                    <p className="text-lg font-bold">2.5 hours</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <button className="bg-surface-container-high text-on-surface font-bold py-3 rounded-xl hover:bg-surface-container-highest transition-colors active:scale-95">
                    Decline
                  </button>
                  <button className="bg-secondary text-white font-bold py-3 rounded-xl hover:shadow-lg hover:shadow-secondary/20 transition-all active:scale-95">
                    Accept Job
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-blue-50 opacity-80">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                    <span className="material-symbols-outlined">apartment</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-on-surface-variant">
                      Office Maintenance
                    </h3>
                    <p className="text-xs text-on-surface-variant">
                      5.8 km away • Tomorrow morning
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-surface-container-low text-on-surface-variant font-bold py-2.5 rounded-xl text-sm">
                    View Details
                  </button>
                  <button className="bg-secondary text-white font-bold py-2.5 rounded-xl text-sm">
                    Accept Job
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl rounded-t-[2rem] z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <a className="flex flex-col items-center justify-center bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-full px-5 py-1.5 transition-transform duration-200 tap-highlight-none">
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            dashboard
          </span>
          <span className="text-[11px] font-semibold font-body">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-5 py-1.5 hover:text-blue-500 transition-colors">
          <span className="material-symbols-outlined">calendar_month</span>
          <span className="text-[11px] font-semibold font-body">Calendar</span>
        </a>
        <a className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-5 py-1.5 hover:text-blue-500 transition-colors">
          <span className="material-symbols-outlined">payments</span>
          <span className="text-[11px] font-semibold font-body">Pricing</span>
        </a>
        <a className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-5 py-1.5 hover:text-blue-500 transition-colors">
          <span className="material-symbols-outlined">person</span>
          <span className="text-[11px] font-semibold font-body">Profile</span>
        </a>
      </nav>
    </div>
  )
}
