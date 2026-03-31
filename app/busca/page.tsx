import AppHeader from '@/components/headers/AppHeader'
import BottomNavOffers from '@/components/nav/BottomNavOffers'
import Image from 'next/image'

export default function BuscaProfissionais() {
  return (
    <div className="bg-surface text-on-surface pb-32 min-h-screen">
      <AppHeader
        avatarAlt="User"
        avatarSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuBHknwU8WUeEgmaMxkDFv1Im_6etFH0PzGo6RvcY453gGz24SYw2-s2dtx4NJCIw1X_xskiBFNRTVI9oLqtImZ8G01F1Kqbl78cZcJHQc3eoOZfsrGXTN7JsPSupVOvR4_7LEEwYo5zq7its8_fnqe8Y4nu233Rgy8ErMb9elzI9VJZR1YUvSSB-tKJSKLTjSQEB6kRE6IVdrGbh-bxDeHi7-f6KquD2a2KSvng_6t_y5bw39Atru-KPlsyS90Q_JOu3caZst1Ge9A"
      />

      <main className="mt-24 px-4 max-w-2xl mx-auto">
        <section className="mb-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-on-surface mb-6">
            Encontrar Profissional
          </h1>
          <div className="relative group">
            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-outline">search</span>
            </div>
            <input
              className="w-full bg-surface-container-highest border-none rounded-xl py-4 pl-14 pr-6 focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline/70"
              placeholder="Qual serviço você precisa hoje?"
              type="text"
            />
          </div>
        </section>

        <section className="mb-10">
          <div className="relative overflow-hidden rounded-lg bg-primary p-8 text-on-primary shadow-2xl shadow-primary/20 group">
            <div className="absolute -right-12 -top-12 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-700" />
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-6">
                <div className="bg-white/20 p-3 rounded-md backdrop-blur-md">
                  <span
                    className="material-symbols-outlined text-3xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    auto_awesome
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-on-secondary-container/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
                  Match Automático
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-2">
                Buscando o profissional ideal para você...
              </h2>
              <p className="text-on-primary/80 mb-8 max-w-md font-medium leading-relaxed">
                Nossa IA analisa sua localização e necessidades para conectar
                você ao melhor limpador disponível agora.
              </p>
              <button className="w-full md:w-auto bg-surface-container-lowest text-primary px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all shadow-lg">
                Ativar Combinação Rápida
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold tracking-tight">Seleção Manual</h3>
            <button className="text-primary font-bold text-sm flex items-center gap-1 hover:underline">
              <span className="material-symbols-outlined text-lg">tune</span>
              Filtros
            </button>
          </div>

          <div className="space-y-6">
            <div className="bg-surface-container-low rounded-lg p-5 flex items-center gap-5 hover:bg-surface-container-high transition-colors cursor-pointer group">
              <div className="relative">
                <Image
                  alt="Cleaner 1"
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-md object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqtY8S7PpQeg_XnYtSY-BdhgVJC0YR5w_Ke7SW15bGmEUQvWtq00X_eKJBb-tofh8CkNmqug8BTqvqJbJxmlon43gr48-I_BkYfbHBaGdZ8Kku127VQKvBy6MMs_uxq3q2iCkeHIHb9oOw97-t1T_6pdCV9sIFPAfPYaL-6jt7vwDIMMFLiibSqhqVV0leiwWBBSfBfKTuNPtHe7O3VO5Cg02eneYzJ4gbVXfuL74yph6zYXcWuZVec7yrHRr3fmZHz0MqOaLDyjY"
                />
                <div className="absolute -bottom-2 -right-2 bg-secondary text-on-secondary text-[10px] font-bold px-2 py-0.5 rounded-full border-4 border-surface-container-low">
                  ONLINE
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-bold text-lg leading-none">
                    Mariana Silva
                  </h4>
                  <div className="flex items-center gap-1 text-tertiary">
                    <span
                      className="material-symbols-outlined text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span className="text-sm font-bold">4.9</span>
                  </div>
                </div>
                <p className="text-on-surface-variant text-sm mb-3">
                  Especialista em limpeza pesada
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-extrabold text-lg">
                    R$ 45<small className="text-xs font-medium text-outline">/hr</small>
                  </span>
                  <span className="text-outline text-xs font-semibold flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">
                      schedule
                    </span>
                    Prox. 14:00
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest shadow-sm rounded-lg p-5 flex items-center gap-5 border border-primary/10 hover:shadow-md transition-all cursor-pointer">
              <div className="relative">
                <Image
                  alt="Cleaner 2"
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-md object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUmKxqeqsDAkBJ1oIeiaOASaXwD8LE4FCVMxYbS43_0KDos_H_L0rGL3mPh_I0x2t_-7BnC_cKmVwnQqQn-MJor8kCnlq6ZdussxzVJJTYzIRPPMKR3okNoTKl-JzGx_XlSVafw2Pg3_Hinbke0ipXijSSJ4UD3PEHPfEyQnjhNVYRysSiUk2SgIDalJgyG-KMhc9xhYK4pJa3BfpsrwuV9T8d2FSKKjZ9XU_dPAPskcUGGYYyK5j0-hHJqleJr8OC3eTFJ_KNPCU"
                />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-bold text-lg leading-none">
                    Ricardo Oliveira
                  </h4>
                  <div className="flex items-center gap-1 text-tertiary">
                    <span
                      className="material-symbols-outlined text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span className="text-sm font-bold">4.7</span>
                  </div>
                </div>
                <p className="text-on-surface-variant text-sm mb-3">
                  Limpeza expressa &amp; vidros
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-extrabold text-lg">
                    R$ 38<small className="text-xs font-medium text-outline">/hr</small>
                  </span>
                  <span className="text-outline text-xs font-semibold flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">
                      location_on
                    </span>
                    1.2km
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-low rounded-lg p-5 flex items-center gap-5 hover:bg-surface-container-high transition-colors cursor-pointer">
              <div className="relative">
                <Image
                  alt="Cleaner 3"
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-md object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPapbHVW9kItQQJrArswHjki6yMsAnfR67me0_RN8cx9FszY_uHrWUEotD2ACjpGkowQMNnx9Qr6tPRRhLCRstu5htbTgPp16EjxoV8UanqNW6dhmWA8QeNXZOiiBG1hJRHbppjT49V8Yrvcsudzs0fiIKu8JC94BHpYH0tLUyV7JL7thMBpBRlh37XAynyQ3ZVVZxbfFOvjpWIlx9-sk98NJa47d_QCUBlw4z66drMFD5LLjBv33Q0AtAoAQK433HJZkTfSHnKA4"
                />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-bold text-lg leading-none">
                    Beatriz Costa
                  </h4>
                  <div className="flex items-center gap-1 text-tertiary">
                    <span
                      className="material-symbols-outlined text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span className="text-sm font-bold">5.0</span>
                  </div>
                </div>
                <p className="text-on-surface-variant text-sm mb-3">
                  Organização &amp; Pós-obra
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-extrabold text-lg">
                    R$ 52<small className="text-xs font-medium text-outline">/hr</small>
                  </span>
                  <span className="text-outline text-xs font-semibold flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">
                      history
                    </span>
                    120+ serviços
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <BottomNavOffers />
    </div>
  )
}
