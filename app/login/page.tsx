import Button from '@/components/ui/Button'
import TextInput from '@/components/ui/TextInput'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/assets/img/logo.png'

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-x-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-[10%] -right-[5%] w-[60%] h-[60%] bg-primary-fixed-dim/30 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] -left-[10%] w-[50%] h-[50%] bg-secondary-fixed/20 rounded-full blur-[100px]" />
      </div>

      <main className="relative z-10 w-full max-w-md">
        <header className="text-center mb-10">
          <div className="inline-flex items-center justify-center mb-6">
            <Image src={logo} alt="CONCIERGO" priority className="h-10 w-auto" />
          </div>
          <h1 className="text-3xl font-bold text-on-surface font-headline tracking-tight mb-2">
            Welcome Back
          </h1>
          <p className="text-on-surface-variant font-body">
            Sign in to your pristine space concierge.
          </p>
        </header>

        <section className="glass-card rounded-lg p-8 shadow-[0_32px_64px_-16px_rgba(0,88,190,0.08)]">
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
            <div className="grid grid-cols-2 gap-4 w-full">
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
              <button className="flex items-center justify-center py-3 px-4 bg-surface-container-high rounded-md hover:bg-surface-container-highest transition-colors active:scale-95 duration-200">
                <span
                  className="material-symbols-outlined mr-3 text-on-surface"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  ios
                </span>
                <span className="text-sm font-bold text-on-surface">
                  Apple
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
