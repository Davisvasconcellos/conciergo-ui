import Image from 'next/image'
import Link from 'next/link'

export default function TopAppBar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/70 dark:bg-slate-900/70 backdrop-blur-3xl shadow-sm">
      <div className="flex justify-between items-center px-4 h-16 w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container-high border-2 border-white">
            <Image
              alt="User profile photo"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQJ79SKRFNGsHEtAaYR6DNVPPVXT3K6HSObJlm7WAF59SoggYSgGr6lz4FC-9WnnXLgN-s65UMaouGhFYGvwetJlLYCsWrAis21-fje2ENCANB0SxA-cAagAGc6ZvKz_jU6uhud5b3yHlbLJ12fr1kKEam3Ul_8eUWMXzLxOy4O9bzTW19a4_Hzxa37eYCxaLBx_URSCGx4QsDlYp-6wQ7i76GgtmM03xwZlJJ4oCZ6Z-FPKadbVBlBwN4gpVlBs3CA-Jy1F55u0o"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-xl font-bold tracking-tight text-blue-600 dark:text-blue-400">
            CONCIERGO
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100/50 transition-colors duration-200">
            <span className="material-symbols-outlined text-slate-500">
              notifications
            </span>
          </button>
          <Link
            href="/login"
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100/50 transition-colors duration-200"
          >
            <span className="material-symbols-outlined text-slate-500">
              logout
            </span>
          </Link>
        </div>
      </div>
    </header>
  )
}
