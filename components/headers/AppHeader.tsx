import Image from 'next/image'
import Link from 'next/link'
import logo from '@/assets/img/logo.png'

type Props = {
  avatarSrc?: string
  avatarAlt?: string
  avatarHref?: string
  showNotificationDot?: boolean
}

const defaultAvatarSrc =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCNWLKG3KmBvcxb7wJkQ2HeqD1iANnIUOPWwFJ7O1cw215KloPHs3ehHUlgQoEZ5iiZMeumoFW20_CqaPK0OkxBL2IFiRRSwOn2ZjmEvCK5zeTX0dJSdv7Ejd--1MYN978tmkFaQb2Be94D6PLdp_keyQl--XIiikpVuiNhQ6wJRNPnYiPU-HRJl80eV42QE-WsMDmnUsXlYrrQE35eo2xa_Eez8YaYZPMhrX7IE-icou6vLMANesGdwmf-T2iJOliavtUzpa92OyU'

export default function AppHeader({
  avatarSrc = defaultAvatarSrc,
  avatarAlt = 'Profile',
  avatarHref = '/login',
  showNotificationDot = true,
}: Props) {
  return (
    <header className="fixed top-0 w-full z-50 glass-header">
      <div className="flex justify-between items-center px-4 h-16 w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <Image
            src={logo}
            alt="CONCIERGO"
            priority
            className="h-6 w-auto"
          />
          <span className="text-outline-variant/30 px-2">|</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="p-2 hover:bg-slate-100/50 rounded-full transition-colors cursor-pointer relative">
            <span className="material-symbols-outlined text-on-surface-variant">
              notifications
            </span>
            {showNotificationDot ? (
              <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full" />
            ) : null}
          </div>
          <Link href={avatarHref} className="flex items-center gap-3 pl-2">
            <Image
              alt={avatarAlt}
              src={avatarSrc}
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover"
            />
          </Link>
        </div>
      </div>
    </header>
  )
}
