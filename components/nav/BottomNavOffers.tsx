export default function BottomNavOffers() {
  return (
    <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-8 pt-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl rounded-t-[32px] z-50 shadow-[0_-8px_30px_rgb(0,0,0,0.04)]">
      <a className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-5 py-2 hover:bg-slate-50 dark:hover:bg-slate-800/50 active:scale-90 transition-transform duration-300">
        <span className="material-symbols-outlined">home</span>
        <span className="text-[11px] font-semibold font-body">Home</span>
      </a>
      <a className="flex flex-col items-center justify-center bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-[24px] px-5 py-2 active:scale-90 transition-transform duration-300">
        <span
          className="material-symbols-outlined"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          handyman
        </span>
        <span className="text-[11px] font-semibold font-body">Offers</span>
      </a>
      <a className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-5 py-2 hover:bg-slate-50 dark:hover:bg-slate-800/50 active:scale-90 transition-transform duration-300">
        <span className="material-symbols-outlined">settings_accessibility</span>
        <span className="text-[11px] font-semibold font-body">Settings</span>
      </a>
      <a className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-5 py-2 hover:bg-slate-50 dark:hover:bg-slate-800/50 active:scale-90 transition-transform duration-300">
        <span className="material-symbols-outlined">person</span>
        <span className="text-[11px] font-semibold font-body">Profile</span>
      </a>
    </nav>
  )
}
