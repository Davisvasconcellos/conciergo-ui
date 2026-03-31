import Button from '@/components/ui/Button'
import TextInput from '@/components/ui/TextInput'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/assets/img/logo.png'

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-x-hidden bg-surface">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface to-surface" />

        <svg
          className="absolute -top-20 left-0 w-full h-72 login-wave-1"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(0,88,190,0.18)"
            d="M0,64L60,90.7C120,117,240,171,360,197.3C480,224,600,224,720,202.7C840,181,960,139,1080,117.3C1200,96,1320,96,1380,96L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          />
          <path
            fill="rgba(0,88,190,0.32)"
            d="M0,0L80,16C160,32,320,64,480,90.7C640,117,800,139,960,138.7C1120,139,1280,117,1360,106.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          />
        </svg>

        <svg
          className="absolute -top-28 -right-20 w-[520px] h-[520px] login-wave-2"
          viewBox="0 0 400 400"
          aria-hidden="true"
        >
          <path
            fill="rgba(0,88,190,0.22)"
            d="M235.6,35.9c42.1,7.7,86.6,26.4,108.1,61.1c21.7,34.8,20.5,85.5,1.6,128.6c-18.9,43.2-55.4,78.9-97.8,97.9c-42.6,18.9-91.1,20.9-132.8,2.4C73,307.3,38.2,268.2,27,224.7c-11.1-43.6,1.4-91.5,28.5-130.6C82.8,54.9,126.9,28.1,171.3,27C195.3,26.4,211.1,31.5,235.6,35.9z"
          />
        </svg>

        <div className="absolute -bottom-40 -left-40 w-[420px] h-[420px] rounded-full bg-secondary/10 login-float-1" />
        <div className="absolute bottom-24 left-24 w-20 h-20 rounded-full bg-primary/10 login-float-2" />
      </div>

      <main className="relative z-10 w-full max-w-md">
        <header className="text-center mb-10">
          <div className="flex items-center justify-center">
            <Image src={logo} alt="CONCIERGO" priority className="h-12 w-auto" />
          </div>
        </header>

        <section className="rounded-xl p-8 shadow-[0_32px_64px_-16px_rgba(0,88,190,0.10)] border border-outline-variant/15 bg-white/55 backdrop-blur-3xl">
          <form className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-on-surface-variant px-1"
              >
                Email Address
              </label>
              <TextInput id="email" placeholder="name@company.com" type="email" icon="mail" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-on-surface-variant"
                >
                  Password
                </label>
                <a
                  href="#"
                  className="text-xs font-bold text-primary hover:text-on-primary-fixed-variant transition-colors"
                >
                  Forgot Password?
                </a>
              </div>
              <TextInput id="password" placeholder="••••••••" type="password" icon="lock" />
            </div>
            <div className="pt-2">
              <Button className="w-full" type="submit">
                Sign In
              </Button>
            </div>
          </form>

          <div className="mt-8 pt-8 border-t border-outline-variant/10 flex flex-col items-center space-y-6">
            <div className="relative w-full text-center">
              <span className="bg-white/0 px-4 text-xs font-bold text-outline uppercase tracking-widest relative z-10">
                Or continue with
              </span>
            </div>
            <div className="grid grid-cols-1 gap-4 w-full">
              <button className="flex items-center justify-center py-3 px-4 bg-surface-container-high rounded-md hover:bg-surface-container-highest transition-colors active:scale-95 duration-200">
                <img
                  alt="Google Logo"
                  className="w-5 h-5 mr-3"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu7gl0IkeP8KZblVlztXd31TBJC9AIbeZUlRqPyzHFskaNqKZ7iCtbx99MBZUW2AdOCUn0BG9EAgCxtYRHjwXgvsnX4knhvMqMsxe5d7KzDQG-_pNNLZJoAvKARVH-eCS9912DC8VFcCTDCi8R9ANRcTlYdoYSOy3NEOWQJ9TQ0eWabBzgaB-43d1ypdkTSi6SF1fl8EpajN6v82iHxjgTh3zG8MXtjNGbjiQCnsxB58Ygh3HOmtKeTFqQ0MEwDOa7gw76b2JoHQY"
                />
                <span className="text-sm font-bold text-on-surface">
                  Google
                </span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3 w-full">
              <Link
                href="/"
                className="flex items-center justify-center py-3 px-4 bg-surface-container-high rounded-md hover:bg-surface-container-highest transition-colors active:scale-95 duration-200 text-sm font-bold text-on-surface"
              >
                Cliente
              </Link>
              <Link
                href="/profissional"
                className="flex items-center justify-center py-3 px-4 bg-surface-container-high rounded-md hover:bg-surface-container-highest transition-colors active:scale-95 duration-200 text-sm font-bold text-on-surface"
              >
                Diarista
              </Link>
              <Link
                href="/admin"
                className="flex items-center justify-center py-3 px-4 bg-surface-container-high rounded-md hover:bg-surface-container-highest transition-colors active:scale-95 duration-200 text-sm font-bold text-on-surface"
              >
                Admin
              </Link>
            </div>
          </div>
        </section>

        <footer className="mt-10 text-center">
          <p className="text-on-surface-variant font-medium">
            Don&apos;t have an account?
            <a
              className="text-primary font-bold hover:underline underline-offset-4 ml-1"
              href="#"
            >
              Sign Up
            </a>
          </p>
        </footer>
      </main>

      <div className="fixed bottom-12 right-12 opacity-10 pointer-events-none select-none hidden lg:block">
        <div className="w-64 h-64 rounded-full overflow-hidden">
          <img
            className="w-full h-full object-cover grayscale"
            alt="Modern minimalist bathroom"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_J4PaA9055jrcKPxjyhySBeXNV3Klju3cBrpXhbmuQAbvCtH4cgjOvN4nMGNdVMRJWlk3FRbk04R4rpjeXHOw3XOs8Xe7K2i5LpjQWnAyI0C3OoHM4Wz6NApDLmxx14rKhBeuqkvBfH3NaRMKaeY5UpIyRYKyOy530-FCOkN3ihNFNB3ZSykZeHebPc3hGml_oy6gwd1gxzpNtDgdAU4SkTOs4tY8wlgo-JwKcToHrriDvLAB_yAVBQan9P8afjfgwfp16cpf_PM"
          />
        </div>
      </div>
    </div>
  )
}
