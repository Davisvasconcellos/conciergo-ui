import { InputHTMLAttributes } from 'react'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  icon?: string
}

export default function TextInput({ icon, className = '', ...rest }: Props) {
  return (
    <div className="relative group">
      {icon ? (
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline">
          <span className="material-symbols-outlined text-[20px]">
            {icon}
          </span>
        </div>
      ) : null}
      <input
        className={`block w-full ${
          icon ? 'pl-11' : ''
        } pr-4 py-4 bg-surface-container-highest border-none rounded-md focus:ring-2 focus:ring-primary/20 transition-all duration-200 placeholder:text-outline/60 text-on-surface ${className}`}
        {...rest}
      />
    </div>
  )
}
