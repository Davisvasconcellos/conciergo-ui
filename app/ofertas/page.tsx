import AppHeader from '@/components/headers/AppHeader'
import BottomNavOffers from '@/components/nav/BottomNavOffers'
import Image from 'next/image'

export default function NovasOfertasProfissional() {
  return (
    <div className="bg-surface min-h-screen">
      <AppHeader
        avatarAlt="Profile"
        avatarSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDjCD6uwhbUV3gjKgTUXUJzDjkLS_YBxqpOUXWnPC5bslyDBI-Lk2Y7s3ACda-9IxSliw0h_PcyXIossgrcKTU73KlGF_fq8OtW8zVLYFVT5snbhL5y3n3UTE8adfp_SroWwqiwHGhCDW8KfverbZyLRpWczjt8pe24z7cAK6vMbdxMXyiZITCdcn7rwFYBa8OVKDGRukKCRrsFpeD3uUqx0G3mF2lxrQjGrGdbFgQwAHdAVvhNWxz6WEhFVYYm7dksECp78_iO934"
      />

      <main className="pt-24 pb-32 px-4 max-w-2xl mx-auto">
        <section className="mb-8">
          <h1 className="font-headline font-extrabold text-3xl text-on-surface tracking-tight mb-2">
            Novas Propostas
          </h1>
          <p className="text-on-surface-variant font-body">
            Você tem <span className="text-primary font-bold">4 novas</span>{' '}
            oportunidades de limpeza hoje.
          </p>
        </section>

        <section className="grid grid-cols-2 gap-4 mb-10">
          <div className="bg-primary text-on-primary p-6 rounded-lg flex flex-col justify-between h-32 shadow-lg shadow-primary/10">
            <span className="text-sm font-medium opacity-90">Ganhos Hoje</span>
            <span className="text-2xl font-bold font-headline">
              R$ 450,00
            </span>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-lg flex flex-col justify-between h-32">
            <span className="text-sm font-medium text-on-surface-variant">
              Próximo Serviço
            </span>
            <span className="text-lg font-bold font-headline text-secondary">
              14:00h
            </span>
          </div>
        </section>

        <div className="space-y-6">
          <article className="bg-surface-container-lowest rounded-lg overflow-hidden transition-all duration-300 active:scale-[0.98]">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container">
                    <Image
                      alt="Client"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbI3bO9xmTTdc7WaVqwRFf3NXT7twRQIpeG5oeh887KOVVtxlO-0iZ54C1_zE6z3HVKn_bh4aUUBdk6AbfLYcxWdgMjKiKJSl6qsHeYP5NTqgRfNn7yyyMUjEUfCTXXWikuddBYZ1h6EbNuOXow4L2cFX5T21BEED5B4wbvmlyILfKAUq1V70SJ3VikyfNrfKzbYRqKu-XBnUOONxlDEKCVFcQtL51SAF3J-Eb11YzOApp5ghDYhk4AmVrioFaFgw472oVFcLq3ms"
                    />
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-on-surface">
                      Mariana Silva
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-on-surface-variant">
                      <span className="material-symbols-outlined text-[14px]">
                        distance
                      </span>
                      2.4 km de distância
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="block text-primary font-extrabold text-xl font-headline">
                    R$ 180
                  </span>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">
                    Estimativa
                  </span>
                </div>
              </div>
              <div className="flex gap-2 mb-6">
                <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold rounded-full flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">
                    cleaning_services
                  </span>
                  Faxina Pesada
                </span>
                <span className="px-3 py-1 bg-surface-container-high text-on-surface-variant text-xs font-bold rounded-full flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">
                    schedule
                  </span>
                  Hoje, 16:30
                </span>
              </div>
              <div className="flex gap-3">
                <button className="flex-1 bg-surface-container-high text-on-surface font-bold py-3.5 rounded-xl hover:opacity-80 transition-opacity active:scale-95">
                  Recusar
                </button>
                <button className="flex-1 bg-gradient-to-r from-secondary to-secondary-fixed-dim text-on-secondary font-bold py-3.5 rounded-xl shadow-lg shadow-secondary/20 hover:opacity-90 transition-all active:scale-95">
                  Aceitar
                </button>
              </div>
            </div>
          </article>

          <article className="bg-surface-container-lowest rounded-lg overflow-hidden transition-all duration-300 active:scale-[0.98]">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container">
                    <Image
                      alt="Client"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5ysdqmSbDPQNWqHuUyEAQKmfllDhyBJPSUny1ytIBYPj4vlzm3sOpljV-vyIuBoGNDJvEFdeAqLfX_nfOKjUhaT5Gv6iW7BdmIPyx3isPSPsniIpjboJqwi2KookCJ_e7EgixDK6yjwVw2LOzpJq5D4zRmbEYD1cmtuKpkO4I4KYwDTW9GHTyeggaN1-q8f-OjuAuXKkyKG6rEtx32eUGTiJE5_kBIbscMfHqpfCtvrMUx0KnZjsfO4iBWojBQyhp2cnxzT5MulU"
                    />
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-on-surface">
                      Ricardo Oliveira
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-on-surface-variant">
                      <span className="material-symbols-outlined text-[14px]">
                        distance
                      </span>
                      5.8 km de distância
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="block text-primary font-extrabold text-xl font-headline">
                    R$ 120
                  </span>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">
                    Estimativa
                  </span>
                </div>
              </div>
              <div className="flex gap-2 mb-6">
                <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold rounded-full flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">
                    sanitizer
                  </span>
                  Limpeza Padrão
                </span>
                <span className="px-3 py-1 bg-surface-container-high text-on-surface-variant text-xs font-bold rounded-full flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">
                    calendar_today
                  </span>
                  Amanhã, 09:00
                </span>
              </div>
              <div className="flex gap-3">
                <button className="flex-1 bg-surface-container-high text-on-surface font-bold py-3.5 rounded-xl active:scale-95">
                  Recusar
                </button>
                <button className="flex-1 bg-gradient-to-r from-secondary to-secondary-fixed-dim text-on-secondary font-bold py-3.5 rounded-xl shadow-lg shadow-secondary/20 active:scale-95">
                  Aceitar
                </button>
              </div>
            </div>
          </article>

          <article className="relative bg-surface-container-lowest border-2 border-primary/10 rounded-lg overflow-hidden transition-all duration-300 active:scale-[0.98]">
            <div className="absolute top-0 right-0 bg-primary text-on-primary text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-tighter">
              Urgente
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container">
                    <Image
                      alt="Client"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNz2OUWwKcDsVrs_r-y66GGGbin2cbZXnTXgg5xl3adHUdhmESQHgj60DEn4fybjtq9v-qIfz_uhxGhAswVYEDM-5qCDd_nmAr6GwqVbAu7Qo9CTzpwOPurYNqL0QtamBlvQbCP_eHm0ccRnJT89oq_hgPy2GZbkHnlnOxmlDH5ZegSzJXCcApArhmbjMEnFCFA5XXSQvos7vmgAVngIpds4WafYXyT1LQ_9MVQIPec9v-9BegZjJxcAJm8xiieTbPMoIiy9IexoY"
                    />
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-on-surface">
                      Fernanda Costa
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-on-surface-variant">
                      <span className="material-symbols-outlined text-[14px]">
                        distance
                      </span>
                      0.8 km de distância
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="block text-primary font-extrabold text-xl font-headline">
                    R$ 250
                  </span>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">
                    Estimativa
                  </span>
                </div>
              </div>
              <div className="flex gap-2 mb-6">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">
                    stars
                  </span>
                  Limpeza Pós-Obra
                </span>
              </div>
              <div className="flex gap-3">
                <button className="flex-1 bg-surface-container-high text-on-surface font-bold py-3.5 rounded-xl active:scale-95">
                  Recusar
                </button>
                <button className="flex-1 bg-gradient-to-r from-secondary to-secondary-fixed-dim text-on-secondary font-bold py-3.5 rounded-xl shadow-lg shadow-secondary/20 active:scale-95">
                  Aceitar
                </button>
              </div>
            </div>
          </article>
        </div>
      </main>

      <BottomNavOffers />
    </div>
  )
}
