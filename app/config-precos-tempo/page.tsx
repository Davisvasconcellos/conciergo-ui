import AppHeader from '@/components/headers/AppHeader'

export default function ConfigurarPrecosTempo() {
  return (
    <div className="text-on-surface select-none min-h-screen bg-surface">
      <AppHeader
        avatarAlt="User profile photo"
        avatarSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDpPmcoqq_Xg_7ND_rWanBMGwykYcPMu3yTDlB1IisvhDdFZW_SDVuAexVO6wqofji7nmPLfQolmtYgz-ahPqF-RCY_cG6T-l3oBVLWpiW4x9odTxeE9IS-p1CIqTqeiajzk9fh-cj1NunO-ux2E8-wnkbLQ1uDrRhMwKJ_EKpNG2b4s1bv6BNc3dlY_OHuxPeY2X7Ax1mEMbSdSxOdoQWgSj7EK3yZioJ8KSbJq0w-Ktmte3BT9u-qY7B8RDHLTaltlq7aB5SFq4s"
      />

      <main className="pt-24 pb-32 px-4 max-w-3xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-extrabold text-on-surface tracking-tight leading-tight">
            Set your Pricing &amp; Timing
          </h1>
          <p className="text-on-surface-variant mt-2 font-medium">
            Define how much you charge and the average duration for each service
            item.
          </p>
        </header>

        <div className="space-y-6">
          <section>
            <div className="bg-surface-container-lowest rounded-lg shadow-sm overflow-hidden p-1">
              <div className="flex items-center justify-between p-5 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-2xl">
                      bed
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-on-surface">Bedroom</p>
                    <p className="text-xs text-on-surface-variant">
                      Base cleaning
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-outline mb-1">
                      Price
                    </span>
                    <div className="flex items-center bg-surface-container-low px-3 py-2 rounded-xl">
                      <span className="text-primary font-bold mr-1">$</span>
                      <input
                        className="w-10 bg-transparent border-none p-0 focus:ring-0 font-bold text-on-surface"
                        type="number"
                        defaultValue={15}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-outline mb-1">
                      Time
                    </span>
                    <div className="flex items-center bg-surface-container-low px-3 py-2 rounded-xl">
                      <input
                        className="w-10 bg-transparent border-none p-0 focus:ring-0 font-bold text-on-surface text-right"
                        type="number"
                        defaultValue={30}
                      />
                      <span className="text-on-surface-variant font-semibold ml-1 text-sm">
                        m
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-px bg-surface-container mx-5" />

              <div className="flex items-center justify-between p-5 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-2xl">
                      shower
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-on-surface">Bathroom</p>
                    <p className="text-xs text-on-surface-variant">Deep scrub</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-outline mb-1">
                      Price
                    </span>
                    <div className="flex items-center bg-surface-container-low px-3 py-2 rounded-xl">
                      <span className="text-primary font-bold mr-1">$</span>
                      <input
                        className="w-10 bg-transparent border-none p-0 focus:ring-0 font-bold text-on-surface"
                        type="number"
                        defaultValue={25}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-outline mb-1">
                      Time
                    </span>
                    <div className="flex items-center bg-surface-container-low px-3 py-2 rounded-xl">
                      <input
                        className="w-10 bg-transparent border-none p-0 focus:ring-0 font-bold text-on-surface text-right"
                        type="number"
                        defaultValue={45}
                      />
                      <span className="text-on-surface-variant font-semibold ml-1 text-sm">
                        m
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-px bg-surface-container mx-5" />

              <div className="flex items-center justify-between p-5 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-tertiary/10 flex items-center justify-center text-tertiary">
                    <span className="material-symbols-outlined text-2xl">
                      chair
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-on-surface">Living Room</p>
                    <p className="text-xs text-on-surface-variant">
                      Dusting &amp; vacuum
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-outline mb-1">
                      Price
                    </span>
                    <div className="flex items-center bg-surface-container-low px-3 py-2 rounded-xl">
                      <span className="text-primary font-bold mr-1">$</span>
                      <input
                        className="w-10 bg-transparent border-none p-0 focus:ring-0 font-bold text-on-surface"
                        type="number"
                        defaultValue={20}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-outline mb-1">
                      Time
                    </span>
                    <div className="flex items-center bg-surface-container-low px-3 py-2 rounded-xl">
                      <input
                        className="w-10 bg-transparent border-none p-0 focus:ring-0 font-bold text-on-surface text-right"
                        type="number"
                        defaultValue={40}
                      />
                      <span className="text-on-surface-variant font-semibold ml-1 text-sm">
                        m
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h3 className="px-4 mb-3 text-sm font-bold text-on-surface-variant uppercase tracking-widest">
              Specialized Items
            </h3>
            <div className="bg-surface-container-lowest rounded-lg shadow-sm overflow-hidden p-1">
              <div className="flex items-center justify-between p-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600">
                    <span className="material-symbols-outlined text-2xl">
                      window
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-on-surface">Window</p>
                    <p className="text-xs text-on-surface-variant">
                      Per pane cleaning
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-outline mb-1">
                      Price
                    </span>
                    <div className="flex items-center bg-surface-container-low px-3 py-2 rounded-xl">
                      <span className="text-primary font-bold mr-1">$</span>
                      <input
                        className="w-10 bg-transparent border-none p-0 focus:ring-0 font-bold text-on-surface"
                        type="number"
                        defaultValue={8}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-outline mb-1">
                      Time
                    </span>
                    <div className="flex items-center bg-surface-container-low px-3 py-2 rounded-xl">
                      <input
                        className="w-10 bg-transparent border-none p-0 focus:ring-0 font-bold text-on-surface text-right"
                        type="number"
                        defaultValue={15}
                      />
                      <span className="text-on-surface-variant font-semibold ml-1 text-sm">
                        m
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-px bg-surface-container mx-5" />
              <div className="flex items-center justify-between p-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600">
                    <span className="material-symbols-outlined text-2xl">
                      local_laundry_service
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-on-surface">Laundry</p>
                    <p className="text-xs text-on-surface-variant">
                      Wash &amp; fold (load)
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-outline mb-1">
                      Price
                    </span>
                    <div className="flex items-center bg-surface-container-low px-3 py-2 rounded-xl">
                      <span className="text-primary font-bold mr-1">$</span>
                      <input
                        className="w-10 bg-transparent border-none p-0 focus:ring-0 font-bold text-on-surface"
                        type="number"
                        defaultValue={12}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-outline mb-1">
                      Time
                    </span>
                    <div className="flex items-center bg-surface-container-low px-3 py-2 rounded-xl">
                      <input
                        className="w-10 bg-transparent border-none p-0 focus:ring-0 font-bold text-on-surface text-right"
                        type="number"
                        defaultValue={20}
                      />
                      <span className="text-on-surface-variant font-semibold ml-1 text-sm">
                        m
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="fixed bottom-24 left-0 w-full px-4 md:px-0 flex justify-center z-40">
            <button className="w-full max-w-md bg-gradient-to-r from-primary to-primary-container text-on-primary py-4 px-8 rounded-xl font-bold text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">save</span>
              Save Pricing Changes
            </button>
          </div>
        </div>
      </main>

      <nav className="fixed bottom-0 left-0 w-full bg-white/80 backdrop-blur-2xl shadow-[0_-4px_20px_rgba(0,0,0,0.05)] rounded-t-[2rem] z-50">
        <div className="flex justify-around items-center px-4 pb-6 pt-3 max-w-7xl mx-auto">
          <a className="flex flex-col items-center justify-center text-slate-400 px-5 py-1.5 hover:text-blue-500 transition-colors">
            <span className="material-symbols-outlined mb-1">home</span>
            <span className="text-[11px] font-semibold font-label">Home</span>
          </a>
          <a className="flex flex-col items-center justify-center text-slate-400 px-5 py-1.5 hover:text-blue-500 transition-colors">
            <span className="material-symbols-outlined mb-1">event_note</span>
            <span className="text-[11px] font-semibold font-label">Bookings</span>
          </a>
          <a className="flex flex-col items-center justify-center text-slate-400 px-5 py-1.5 hover:text-blue-500 transition-colors">
            <span className="material-symbols-outlined mb-1">calendar_month</span>
            <span className="text-[11px] font-semibold font-label">Calendar</span>
          </a>
          <a className="flex flex-col items-center justify-center bg-blue-50 text-blue-600 rounded-full px-5 py-1.5 transition-transform duration-200 active:scale-95">
            <span
              className="material-symbols-outlined mb-1"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              person
            </span>
            <span className="text-[11px] font-semibold font-label">Profile</span>
          </a>
        </div>
      </nav>

      <div className="fixed -top-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="fixed top-1/2 -right-32 w-80 h-80 bg-secondary/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-30" />
    </div>
  )
}
