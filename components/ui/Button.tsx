import { ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ className = '', children, ...rest }: Props) {
  return (
    <button
      className={`py-4 px-6 bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold rounded-xl shadow-[0_12px_24px_-8px_rgba(0,88,190,0.3)] hover:opacity-90 active:scale-[0.98] transition-all duration-200 font-headline text-lg ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}
