import Image from 'next/image'
import AppHeader from '@/components/headers/AppHeader'

export default function PerfilProfissional() {
  return (
    <div className="bg-surface font-body text-on-surface antialiased min-h-screen">
      <AppHeader />

      <main className="pt-24 pb-32 px-4 max-w-2xl mx-auto">
        <section className="flex flex-col items-center mb-10">
          <div className="relative mb-6">
            <div className="w-32 h-32 rounded-full overflow-hidden shadow-xl ring-4 ring-white">
              <Image
                alt="Angelica Gloria"
                width={128}
                height={128}
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB73hyIyVo9LNfNKoFz7WGsxUFVvShwTMVFkSvZUYOHR9QoAU1OETaPcmrlRqtP3dxeIMn9pbJuyF6OJIf2JXdv-D3z0feuD1xi4VGzcUbWA6hO2ySJDV6q6jn4WTH7kyk3IxftVwaVXliivR8Zrh2KgZrkP9pW-4bEOVfg3DV19yJDpJz9coT51GYPQIE4i-V0pm9KlFFERb2eMZqBz6qFwNqqhBAvX19Lpnkc21e3ivo9g1qd1TzmvDAlaOn1g77ngR5CDiAmycM"
              />
            </div>
            <div className="absolute bottom-1 right-1 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold shadow-md">
              PRO
            </div>
          </div>
          <h2 className="text-3xl font-extrabold font-headline tracking-tight text-on-surface mb-2">
            Angelica Gloria
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
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
            </div>
            <span className="text-on-surface-variant font-semibold text-sm">
              4.9 (124 reviews)
            </span>
          </div>
          <div className="flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-full">
            <span className="material-symbols-outlined text-primary text-sm">
              location_on
            </span>
            <span className="text-on-surface-variant text-sm font-medium">
              Jardins, São Paulo
            </span>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-primary">
                verified
              </span>
              <h3 className="font-bold text-on-surface">Verified Profile</h3>
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Expert in deep cleaning and organizing for premium residences. 8
              years of professional experience.
            </p>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-primary">
                timer
              </span>
              <h3 className="font-bold text-on-surface">Availability</h3>
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Flexible hours. Available for same-day bookings if confirmed
              before 9:00 AM.
            </p>
          </div>
        </section>

        <section className="bg-primary/5 p-8 rounded-lg mb-12 border border-primary/10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-2">
                Pricing Detail
              </span>
              <h3 className="text-2xl font-bold font-headline text-on-surface">
                Your Estimated Total: $85.00
              </h3>
              <div className="flex items-center gap-2 mt-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-sm">
                  schedule
                </span>
                <span className="text-sm font-medium">
                  Estimated Time: 3h 15m
                </span>
              </div>
            </div>
            <div className="h-px md:h-12 w-full md:w-px bg-outline-variant/30" />
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-primary">
                  cleaning_services
                </span>
              </div>
              <div>
                <p className="text-xs font-bold text-on-surface-variant">
                  Service Type
                </p>
                <p className="text-sm font-bold text-on-surface">
                  Deep Clean Pack
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold font-headline text-on-surface">
              Client Feedback
            </h3>
            <button className="text-primary text-sm font-bold">See All</button>
          </div>
          <div className="space-y-4">
            <div className="bg-surface-container-low p-6 rounded-md">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden">
                    <Image
                      alt="Reviewer"
                      width={40}
                      height={40}
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEfnAJvrcpafJD3lkqf4XFKt9bpXcMx24whMWeQOE2QvrullX2YrSPOw1uNn3_I8qqUrHAAxE-kdJ3ANosdVTRlry2R-sy2g_bkUpEOpoRrGLQpYg4x2qcc867vHQWfU3kOQ8RvrrcjzugbiWTEiy39zGH0svCAhIHcERPFaKu2ik-jccXXb6e8Wmo-TZ7wIyz8F4x-GQkrbv2u8K80RH19rE0vJPG-8Iqauc6heCxPRGCMnz7RlG_pk-c0-74iEbb2vP3fo-v7M4"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Roberto Silva</p>
                    <p className="text-[10px] text-on-surface-variant">
                      2 days ago
                    </p>
                  </div>
                </div>
                <div className="flex text-tertiary">
                  <span
                    className="material-symbols-outlined scale-75"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span
                    className="material-symbols-outlined scale-75"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span
                    className="material-symbols-outlined scale-75"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span
                    className="material-symbols-outlined scale-75"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span
                    className="material-symbols-outlined scale-75"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                </div>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed italic">
                "Angelica was incredibly thorough. My apartment hasn&apos;t
                looked this clean since I moved in. Highly recommended for her
                attention to detail!"
              </p>
            </div>

            <div className="bg-surface-container-low p-6 rounded-md">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden">
                    <Image
                      alt="Reviewer"
                      width={40}
                      height={40}
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPuCNpUQ-IEA4gK7jR9hiOHVXU3XHApvipSHME44eSrKewS2LKVlRbaX2xhlmBr-kh5hFDuuZ0fA7npt0b1dj_LJK5Vym35a1Epqj3DRHA5HSpMYm0BpoBU6Li_skrQ4fTKP9bX8o8xs_bzyrHKJEIDo8UigbUuZU0zhVJ3banSGhj1fP42DbojJ-2MGAdgXz7bGbUFpfBBdSScjF2TPpDe36k3n07Ph6vUTY5PI6umGZxamJka0C6WEcrmvRt16yIWSdmQf3fotE"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Luciana M.</p>
                    <p className="text-[10px] text-on-surface-variant">
                      1 week ago
                    </p>
                  </div>
                </div>
                <div className="flex text-tertiary">
                  <span
                    className="material-symbols-outlined scale-75"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span
                    className="material-symbols-outlined scale-75"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span
                    className="material-symbols-outlined scale-75"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span
                    className="material-symbols-outlined scale-75"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span
                    className="material-symbols-outlined scale-75"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                </div>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed italic">
                "Very professional and punctual. She brought her own
                high-quality supplies which smelled amazing. Will book again."
              </p>
            </div>
          </div>
        </section>
      </main>

      <div className="fixed bottom-0 left-0 w-full glass-header py-6 px-8 z-50 rounded-t-xl shadow-[0_-10px_40px_rgba(0,0,0,0.08)]">
        <div className="max-w-2xl mx-auto">
          <button className="w-full bg-secondary hover:bg-on-secondary-container text-white py-5 px-8 rounded-full flex items-center justify-center gap-3 font-bold text-lg shadow-lg shadow-secondary/20 transition-all active:scale-95 duration-200">
            <span className="material-symbols-outlined">calendar_month</span>
            Make Appointment
          </button>
        </div>
      </div>
    </div>
  )
}
