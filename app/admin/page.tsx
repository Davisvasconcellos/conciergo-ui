import AppHeader from '@/components/headers/AppHeader'

export default function PainelAdministrativo() {
  return (
    <div className="bg-surface text-on-background min-h-screen">
      <AppHeader avatarAlt="Admin Profile" />

      <div className="flex pt-16 min-h-screen">
        <aside className="hidden md:flex flex-col h-screen sticky top-16 w-72 py-8 bg-surface-container-low">
          <nav className="flex-1 space-y-2 px-4">
            <div className="bg-primary text-white rounded-2xl mx-2 shadow-lg shadow-primary/20 flex items-center gap-4 px-6 py-4 cursor-pointer transition-all active:scale-95 duration-200">
              <span className="material-symbols-outlined">dashboard</span>
              <span className="font-bold tracking-tight">Dashboard</span>
            </div>
            <div className="text-slate-600 hover:bg-slate-200/50 rounded-2xl mx-2 flex items-center gap-4 px-6 py-4 cursor-pointer transition-all hover:translate-x-1 duration-300">
              <span className="material-symbols-outlined">monitoring</span>
              <span className="font-semibold">Analytics</span>
            </div>
            <div className="text-slate-600 hover:bg-slate-200/50 rounded-2xl mx-2 flex items-center gap-4 px-6 py-4 cursor-pointer transition-all hover:translate-x-1 duration-300">
              <span className="material-symbols-outlined">payments</span>
              <span className="font-semibold">Finance</span>
            </div>
            <div className="text-slate-600 hover:bg-slate-200/50 rounded-2xl mx-2 flex items-center gap-4 px-6 py-4 cursor-pointer transition-all hover:translate-x-1 duration-300">
              <span className="material-symbols-outlined">map</span>
              <span className="font-semibold">Geography</span>
            </div>
            <div className="text-slate-600 hover:bg-slate-200/50 rounded-2xl mx-2 flex items-center gap-4 px-6 py-4 cursor-pointer transition-all hover:translate-x-1 duration-300">
              <span className="material-symbols-outlined">settings</span>
              <span className="font-semibold">Settings</span>
            </div>
          </nav>

          <div className="px-8 mt-auto pb-12">
            <div className="bg-surface-container-highest p-6 rounded-lg">
              <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                System Status
              </p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                <span className="text-xs font-semibold text-on-surface">
                  Platform Optimal
                </span>
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1 px-4 md:px-10 py-10 max-w-7xl mx-auto w-full">
          <header className="mb-10">
            <h1 className="text-4xl font-extrabold tracking-tighter text-on-surface">
              System Controller
            </h1>
            <p className="text-on-surface-variant mt-2 text-lg">
              Platform health and operational overview for today.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-surface-container-lowest p-8 rounded-lg shadow-sm group hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <span className="material-symbols-outlined text-primary">
                    payments
                  </span>
                </div>
                <span className="text-secondary font-bold text-sm">+12.5%</span>
              </div>
              <p className="text-on-surface-variant text-sm font-semibold uppercase tracking-wider mb-1">
                Total Revenue
              </p>
              <h3 className="text-3xl font-black text-on-surface">$24,000</h3>
              <div className="mt-4 h-8 flex items-end gap-1">
                <div className="w-full bg-primary/20 h-3 rounded-full overflow-hidden">
                  <div className="bg-primary h-full w-[70%]"></div>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-8 rounded-lg shadow-sm group hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-secondary/10 rounded-xl">
                  <span className="material-symbols-outlined text-secondary">
                    groups
                  </span>
                </div>
                <span className="text-secondary font-bold text-sm">+5</span>
              </div>
              <p className="text-on-surface-variant text-sm font-semibold uppercase tracking-wider mb-1">
                Active Cleaners
              </p>
              <h3 className="text-3xl font-black text-on-surface">120</h3>
              <div className="mt-4 flex items-end gap-1 h-8">
                <div className="flex-1 bg-surface-container rounded-sm h-4"></div>
                <div className="flex-1 bg-surface-container rounded-sm h-6"></div>
                <div className="flex-1 bg-secondary rounded-sm h-8"></div>
                <div className="flex-1 bg-secondary rounded-sm h-5"></div>
                <div className="flex-1 bg-secondary rounded-sm h-7"></div>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-8 rounded-lg shadow-sm group hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-tertiary/10 rounded-xl">
                  <span className="material-symbols-outlined text-tertiary">
                    check_circle
                  </span>
                </div>
                <span className="text-secondary font-bold text-sm">+8%</span>
              </div>
              <p className="text-on-surface-variant text-sm font-semibold uppercase tracking-wider mb-1">
                Completed Jobs
              </p>
              <h3 className="text-3xl font-black text-on-surface">845</h3>
              <div className="mt-4 h-8 flex items-center">
                <svg className="w-full h-full" viewBox="0 0 100 20">
                  <path
                    d="M0 15 Q 25 5, 50 15 T 100 5"
                    fill="none"
                    stroke="#825100"
                    strokeWidth="2"
                  ></path>
                </svg>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-8 rounded-lg shadow-sm group hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-error/10 rounded-xl">
                  <span className="material-symbols-outlined text-error">
                    gavel
                  </span>
                </div>
                <span className="text-error font-bold text-sm">Critical</span>
              </div>
              <p className="text-on-surface-variant text-sm font-semibold uppercase tracking-wider mb-1">
                Pending Disputes
              </p>
              <h3 className="text-3xl font-black text-on-surface">3</h3>
              <div className="mt-4 flex gap-1">
                <span className="w-3 h-3 bg-error rounded-full"></span>
                <span className="w-3 h-3 bg-error/30 rounded-full"></span>
                <span className="w-3 h-3 bg-error/30 rounded-full"></span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 bg-surface-container-lowest rounded-lg p-8 shadow-sm">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-on-surface">
                    Service Distribution
                  </h2>
                  <p className="text-sm text-on-surface-variant">
                    Live demand intensity across the city.
                  </p>
                </div>
                <button className="flex items-center gap-2 px-5 py-2.5 bg-surface-container-high rounded-full font-bold text-sm text-on-surface">
                  <span className="material-symbols-outlined text-sm">
                    filter_list
                  </span>
                  Filter Map
                </button>
              </div>
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden bg-slate-200 group">
                <div
                  className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAZ7trSeGDWN-PzI0emLhAe5BjPdy6t2O-A85MQGiizZGDQpEO8BDy-g_DG9uPGQk5v7BNYMRMXbvrwdSodV79i8nkLFR25AuHeMcai7dXgKMJEA0USzgZKyOP3fYKd8G8i2_Uc63UmPONnOh1ZA8GD1xdq17l7wdh4TmkV4vs5pu-SMgsHnHtI0SrZDCkkzr_tJvTWRb_ZRwJuy2g6XXMr6d2vjhF-mR_jP6mJsuAlUtb9FSbSpSfbwrzj_oCw-EZcaR-LqvVj2ug')",
                  }}
                />
                <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-primary/30 blur-3xl rounded-full"></div>
                <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-secondary/20 blur-3xl rounded-full"></div>
                <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-primary/40 blur-2xl rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="bg-primary text-white p-3 rounded-full shadow-xl animate-bounce">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      location_on
                    </span>
                  </div>
                  <div className="mt-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-bold text-on-surface shadow-lg">
                    High Demand: Downtown
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-bold tracking-tight text-on-surface mb-2">
                Top Performers
              </h2>
              <p className="text-sm text-on-surface-variant mb-8">
                Based on earnings and client ratings.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="relative">
                    <img
                      alt="Top Pro 1"
                      className="w-14 h-14 rounded-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVbPutbsgLK4FNIoHPcb9Sk91DTGmXbqBmYFDHdI8AMyYV7C6TLVFOPRopG-eM9k9juIXCZWUFPlOyUqa2t989Us8saGs7niuB0IDg2NXadATKpHudCFZ5jVL_NvbEbXUID_wxmu5I4ec61ld6MLTRUsEc0KPVx3xSB4CXUSAjRB8p2ZiPh688h9yYqFKRl2UOOJKm8FnUnsWXiD6gLWnr8gGow1h9XhT_nMOgwqAuwIotzmoaFvV6NfuUd4Fa149RD-0gsWUdlmg"
                    />
                    <div className="absolute -top-1 -right-1 bg-amber-400 text-white w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black border-2 border-white">
                      1
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-on-surface group-hover:text-primary transition-colors">
                      Luciana Santos
                    </h4>
                    <div className="flex items-center gap-1">
                      <span
                        className="material-symbols-outlined text-tertiary text-xs"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                      <span className="text-xs font-bold text-on-surface-variant">
                        4.9 (124 reviews)
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="block font-black text-on-surface">
                      $2,450
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-secondary font-bold">
                      Top Earner
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="relative">
                    <img
                      alt="Top Pro 2"
                      className="w-14 h-14 rounded-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCicssnK_nBDBkIpMCnNvw45l2uG5WCX0Dvlfold9YFrCkRmTNGKFL4_0GJtkLxt_4x-NjuK5W-Hmq96pLl7wsziIqAj77u0Y3nWZWMHJjLSflz6Uv3cw64uMp5EjMSUxIk5ATAF9pCDnEz-PvHBEN12BVV7bQDFEn327ei93kDQFtIJVjdJ2xbSYrbv2nLC7QTHhCS1-qqQJ6EmA38c9YJ5hYHy0YNGWqwb_AjCp_nLw4iSB7mF46hxGOoNIwhR-jxQJbRmUFFShQ"
                    />
                    <div className="absolute -top-1 -right-1 bg-slate-300 text-white w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black border-2 border-white">
                      2
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-on-surface group-hover:text-primary transition-colors">
                      Ricardo Gomes
                    </h4>
                    <div className="flex items-center gap-1">
                      <span
                        className="material-symbols-outlined text-tertiary text-xs"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                      <span className="text-xs font-bold text-on-surface-variant">
                        4.8 (98 reviews)
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="block font-black text-on-surface">
                      $1,920
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="relative">
                    <img
                      alt="Top Pro 3"
                      className="w-14 h-14 rounded-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMz8uAjrMic2TBuvFw9U2z0Qz9JN8oEvAWg4HSVXgk8ywRsfl1BlgoXp_W2OLpYBRcGKSmZeLHTfI88f3Pk8jkBR1toRb7vwzvHpRLqPvlPCueLtXb-MKdrY_ipoA9w20QmGbeB5EeL30E6lAloHVE0wJC9LZHtDvBMFFo_mvoRv1rYP6LPNhtRR3GKG9hO9jFa6K3pxVAyvnfuGjOjhOUCTMYC0Ea6NmCOVCn0KUyn0e2Gl_PQrOSwtQ_ozbrY15jcCqQJdSJZik"
                    />
                    <div className="absolute -top-1 -right-1 bg-amber-700/50 text-white w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black border-2 border-white">
                      3
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-on-surface group-hover:text-primary transition-colors">
                      Marina Silva
                    </h4>
                    <div className="flex items-center gap-1">
                      <span
                        className="material-symbols-outlined text-tertiary text-xs"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                      <span className="text-xs font-bold text-on-surface-variant">
                        4.7 (112 reviews)
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="block font-black text-on-surface">
                      $1,780
                    </span>
                  </div>
                </div>
              </div>

              <button className="w-full mt-10 py-4 border-2 border-outline-variant/30 rounded-xl font-bold text-sm text-on-surface-variant hover:bg-surface-container-high hover:border-transparent transition-all">
                View Full Ranking
              </button>
            </div>
          </div>

          <section className="bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm">
            <div className="px-8 py-6 flex justify-between items-center bg-surface-container-low/50">
              <h2 className="text-xl font-bold text-on-surface">
                Recent Activity
              </h2>
              <span className="text-sm font-bold text-primary cursor-pointer hover:underline">
                See all activity
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-[10px] uppercase tracking-widest text-on-surface-variant bg-surface-container-low/30">
                    <th className="px-8 py-4 font-bold">Transaction ID</th>
                    <th className="px-8 py-4 font-bold">Service</th>
                    <th className="px-8 py-4 font-bold">Professional</th>
                    <th className="px-8 py-4 font-bold">Status</th>
                    <th className="px-8 py-4 font-bold text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/10">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-8 py-5 text-sm font-mono text-slate-500">
                      #TRX-8291
                    </td>
                    <td className="px-8 py-5">
                      <div className="flex flex-col">
                        <span className="font-bold text-on-surface">
                          Deep House Cleaning
                        </span>
                        <span className="text-xs text-on-surface-variant">
                          Residential • 4h session
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-5 text-sm font-semibold text-on-surface">
                      Luciana Santos
                    </td>
                    <td className="px-8 py-5">
                      <span className="px-3 py-1 bg-secondary/10 text-secondary text-[11px] font-bold rounded-full uppercase tracking-tighter">
                        Completed
                      </span>
                    </td>
                    <td className="px-8 py-5 text-sm font-black text-on-surface text-right">
                      $120.00
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-8 py-5 text-sm font-mono text-slate-500">
                      #TRX-8290
                    </td>
                    <td className="px-8 py-5">
                      <div className="flex flex-col">
                        <span className="font-bold text-on-surface">
                          Standard Window Cleaning
                        </span>
                        <span className="text-xs text-on-surface-variant">
                          Office • Recurring
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-5 text-sm font-semibold text-on-surface">
                      Ricardo Gomes
                    </td>
                    <td className="px-8 py-5">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-[11px] font-bold rounded-full uppercase tracking-tighter">
                        In Progress
                      </span>
                    </td>
                    <td className="px-8 py-5 text-sm font-black text-on-surface text-right">
                      $85.50
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-8 py-5 text-sm font-mono text-slate-500">
                      #TRX-8289
                    </td>
                    <td className="px-8 py-5">
                      <div className="flex flex-col">
                        <span className="font-bold text-on-surface">
                          Post-Construction Cleanup
                        </span>
                        <span className="text-xs text-on-surface-variant">
                          Commercial • Specialized
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-5 text-sm font-semibold text-on-surface">
                      Marina Silva
                    </td>
                    <td className="px-8 py-5">
                      <span className="px-3 py-1 bg-tertiary/10 text-tertiary text-[11px] font-bold rounded-full uppercase tracking-tighter">
                        Disputed
                      </span>
                    </td>
                    <td className="px-8 py-5 text-sm font-black text-on-surface text-right">
                      $450.00
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>

      <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-3 glass-header rounded-t-lg z-50">
        <div className="flex flex-col items-center justify-center bg-primary/10 text-primary rounded-full px-5 py-1.5 transition-transform duration-200">
          <span className="material-symbols-outlined text-[24px]">home</span>
          <span className="text-[11px] font-semibold mt-0.5">Home</span>
        </div>
        <div className="flex flex-col items-center justify-center text-slate-400 px-5 py-1.5 hover:text-primary transition-colors">
          <span className="material-symbols-outlined text-[24px]">
            event_note
          </span>
          <span className="text-[11px] font-semibold mt-0.5">Bookings</span>
        </div>
        <div className="flex flex-col items-center justify-center text-slate-400 px-5 py-1.5 hover:text-primary transition-colors">
          <span className="material-symbols-outlined text-[24px]">
            calendar_month
          </span>
          <span className="text-[11px] font-semibold mt-0.5">Calendar</span>
        </div>
        <div className="flex flex-col items-center justify-center text-slate-400 px-5 py-1.5 hover:text-primary transition-colors">
          <span className="material-symbols-outlined text-[24px]">person</span>
          <span className="text-[11px] font-semibold mt-0.5">Profile</span>
        </div>
      </nav>
    </div>
  )
}
