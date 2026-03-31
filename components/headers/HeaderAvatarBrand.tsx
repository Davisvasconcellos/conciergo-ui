import Image from 'next/image'
import { ReactNode } from 'react'

type Props = {
  avatarSrc: string
  avatarAlt: string
  brandText?: string
  headerClassName: string
  avatarClassName: string
  brandClassName: string
  right?: ReactNode
}

export default function HeaderAvatarBrand({
  avatarSrc,
  avatarAlt,
  brandText = 'CONCIERGO',
  headerClassName,
  avatarClassName,
  brandClassName,
  right,
}: Props) {
  return (
    <header className={headerClassName}>
      <div className="flex items-center gap-3">
        <div className={avatarClassName}>
          <Image
            alt={avatarAlt}
            width={40}
            height={40}
            className="w-full h-full object-cover"
            src={avatarSrc}
          />
        </div>
        <span className={brandClassName}>{brandText}</span>
      </div>
      <div className="flex items-center gap-4">{right}</div>
    </header>
  )
}
