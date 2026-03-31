import { ReactNode } from 'react'

type Props = {
  leftIcon: string
  title: string
  rightIcon: string
  headerClassName?: string
  leftButtonClassName?: string
  rightButtonClassName?: string
  leftIconClassName?: string
  rightIconClassName?: string
  onLeftClick?: () => void
  onRightClick?: () => void
  rightSlot?: ReactNode
}

export default function HeaderGlassShell({
  leftIcon,
  title,
  rightIcon,
  headerClassName = 'fixed top-0 w-full z-50 glass-header',
  leftButtonClassName = 'w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors',
  rightButtonClassName = 'w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors',
  leftIconClassName = 'material-symbols-outlined text-on-surface',
  rightIconClassName = 'material-symbols-outlined text-on-surface',
  onLeftClick,
  onRightClick,
  rightSlot,
}: Props) {
  return (
    <header className={headerClassName}>
      <div className="flex justify-between items-center px-4 h-16 w-full max-w-7xl mx-auto">
        <button className={leftButtonClassName} onClick={onLeftClick}>
          <span className={leftIconClassName}>{leftIcon}</span>
        </button>
        <h1 className="text-xl font-bold tracking-tight text-blue-600 font-headline">
          {title}
        </h1>
        {rightSlot ? (
          <div className="flex items-center gap-3">{rightSlot}</div>
        ) : (
          <button className={rightButtonClassName} onClick={onRightClick}>
            <span className={rightIconClassName}>{rightIcon}</span>
          </button>
        )}
      </div>
    </header>
  )
}
