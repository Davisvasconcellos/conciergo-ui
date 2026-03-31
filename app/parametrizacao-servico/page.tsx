import AppHeader from '@/components/headers/AppHeader'
import Image from 'next/image'

export default function ParametrizacaoDeServico() {
  return (
    <div className="bg-surface font-body text-on-surface antialiased pb-32 min-h-screen">
      <AppHeader
        avatarAlt="Profile"
        avatarSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuBDvtEA72M-xbN3yi1wFMemq1BckoY7jrqSaOOPcPPdasSvJKsnDc54ogkgcUq_ARmFA6any70eYRjb3f4sYN3RTrJ9ELCguot_JnKAO03pwS26srGETj-vOrs3n3W0LTQZ-N0dbMSz7tZKzfxIZufs4bgu607cF4v5Vd_K30MieDlhBta-Frd0pPWUVXPyZ9XOyYlP-x3tgM27MgvmJRU73jWZFrRmKwSnasbvkH9Pv69nqN5GZy-5kZQ_f8GiWCY3YhR6EbtQ21c"
      />

      <main className="mt-24 px-4 max-w-2xl mx-auto">
        <div className="mb-10">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight text-primary mb-2">
            Configurar Tarifas
          </h1>
          <p className="text-on-surface-variant font-medium">
            Defina seus valores e tempo estimado para cada serviço.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div className="bg-surface-container-lowest rounded-lg p-6 flex flex-col gap-6 shadow-sm">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-md bg-primary-fixed flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-2xl">
                    bed
                  </span>
                </div>
                <h2 className="font-headline font-bold text-xl text-on-surface">
                  Quarto
                </h2>
              </div>
              <span className="bg-secondary-container/20 text-on-secondary-container px-4 py-1 rounded-full text-sm font-bold">
                Ativo
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="block text-sm font-bold uppercase tracking-wider text-outline">
                  Preço por Unidade
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-4 font-bold text-primary">
                    R$
                  </span>
                  <input
                    className="w-full pl-12 pr-4 py-4 bg-surface-container-highest border-none rounded-md focus:ring-2 focus:ring-primary/20 font-bold text-lg"
                    type="number"
                    defaultValue={45}
                  />
                </div>
              </div>
              <div className="space-y-4">
                <label className="block text-sm font-bold uppercase tracking-wider text-outline">
                  Tempo Estimado
                </label>
                <div className="flex items-center gap-4">
                  <input
                    className="w-full h-2 bg-surface-container-high rounded-full appearance-none"
                    min={15}
                    max={120}
                    step={5}
                    type="range"
                    defaultValue={40}
                  />
                  <span className="min-w-[70px] font-bold text-secondary text-right">
                    40 min
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-lg p-6 flex flex-col gap-6 shadow-sm">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-md bg-primary-fixed flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-2xl">
                    chair
                  </span>
                </div>
                <h2 className="font-headline font-bold text-xl text-on-surface">
                  Sala
                </h2>
              </div>
              <span className="bg-secondary-container/20 text-on-secondary-container px-4 py-1 rounded-full text-sm font-bold">
                Ativo
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="block text-sm font-bold uppercase tracking-wider text-outline">
                  Preço por Unidade
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-4 font-bold text-primary">
                    R$
                  </span>
                  <input
                    className="w-full pl-12 pr-4 py-4 bg-surface-container-highest border-none rounded-md focus:ring-2 focus:ring-primary/20 font-bold text-lg"
                    type="number"
                    defaultValue={60}
                  />
                </div>
              </div>
              <div className="space-y-4">
                <label className="block text-sm font-bold uppercase tracking-wider text-outline">
                  Tempo Estimado
                </label>
                <div className="flex items-center gap-4">
                  <input
                    className="w-full h-2 bg-surface-container-high rounded-full appearance-none"
                    min={15}
                    max={120}
                    step={5}
                    type="range"
                    defaultValue={60}
                  />
                  <span className="min-w-[70px] font-bold text-secondary text-right">
                    60 min
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-lg p-6 flex flex-col gap-6 shadow-sm">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-md bg-primary-fixed flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-2xl">
                    layers
                  </span>
                </div>
                <h2 className="font-headline font-bold text-xl text-on-surface">
                  Tapete
                </h2>
              </div>
              <span className="bg-surface-container-highest text-outline px-4 py-1 rounded-full text-sm font-bold">
                Opcional
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="block text-sm font-bold uppercase tracking-wider text-outline">
                  Preço por m²
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-4 font-bold text-primary">
                    R$
                  </span>
                  <input
                    className="w-full pl-12 pr-4 py-4 bg-surface-container-highest border-none rounded-md focus:ring-2 focus:ring-primary/20 font-bold text-lg"
                    type="number"
                    defaultValue={15}
                  />
                </div>
              </div>
              <div className="space-y-4">
                <label className="block text-sm font-bold uppercase tracking-wider text-outline">
                  Tempo Estimado
                </label>
                <div className="flex items-center gap-4">
                  <input
                    className="w-full h-2 bg-surface-container-high rounded-full appearance-none"
                    min={5}
                    max={60}
                    step={5}
                    type="range"
                    defaultValue={20}
                  />
                  <span className="min-w-[70px] font-bold text-secondary text-right">
                    20 min
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-lg p-6 flex flex-col gap-6 shadow-sm">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-md bg-primary-fixed flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-2xl">
                    countertops
                  </span>
                </div>
                <h2 className="font-headline font-bold text-xl text-on-surface">
                  Cozinha
                </h2>
              </div>
              <span className="bg-secondary-container/20 text-on-secondary-container px-4 py-1 rounded-full text-sm font-bold">
                Ativo
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="block text-sm font-bold uppercase tracking-wider text-outline">
                  Preço por Unidade
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-4 font-bold text-primary">
                    R$
                  </span>
                  <input
                    className="w-full pl-12 pr-4 py-4 bg-surface-container-highest border-none rounded-md focus:ring-2 focus:ring-primary/20 font-bold text-lg"
                    type="number"
                    defaultValue={80}
                  />
                </div>
              </div>
              <div className="space-y-4">
                <label className="block text-sm font-bold uppercase tracking-wider text-outline">
                  Tempo Estimado
                </label>
                <div className="flex items-center gap-4">
                  <input
                    className="w-full h-2 bg-surface-container-high rounded-full appearance-none"
                    min={30}
                    max={180}
                    step={10}
                    type="range"
                    defaultValue={90}
                  />
                  <span className="min-w-[70px] font-bold text-secondary text-right">
                    90 min
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fixed bottom-32 left-0 w-full px-4 flex justify-center pointer-events-none">
          <button className="pointer-events-auto bg-gradient-to-r from-primary to-primary-container text-on-primary font-headline font-bold text-lg px-12 py-5 rounded-full shadow-[0_32px_48px_rgba(0,88,190,0.15)] hover:opacity-90 active:scale-95 transition-all duration-300">
            Salvar Alterações
          </button>
        </div>
      </main>

      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-8 pt-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl shadow-[0_-8px_30px_rgb(0,0,0,0.04)] z-50 rounded-t-[32px]">
        <button className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-5 py-2 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
          <span className="material-symbols-outlined mb-1">home</span>
          <span className="text-[11px] font-semibold">Home</span>
        </button>
        <button className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-5 py-2 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
          <span className="material-symbols-outlined mb-1">handyman</span>
          <span className="text-[11px] font-semibold">Offers</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-[24px] px-5 py-2 active:scale-90 transition-transform duration-300">
          <span className="material-symbols-outlined mb-1">
            settings_accessibility
          </span>
          <span className="text-[11px] font-semibold">Settings</span>
        </button>
        <button className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-5 py-2 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
          <span className="material-symbols-outlined mb-1">person</span>
          <span className="text-[11px] font-semibold">Profile</span>
        </button>
      </nav>
    </div>
  )
}
