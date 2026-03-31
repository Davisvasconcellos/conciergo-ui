import AppHeader from '@/components/headers/AppHeader'
import CustomServiceForm from '@/components/customer/CustomServiceForm'

export default function FiltrosBuscaInteligente() {
  return (
    <div className="text-on-surface min-h-screen">
      <AppHeader
        avatarAlt="User profile photo"
        avatarSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuBQRj4Ks5wbxzzoyXLdKu7FEXfMs52tOeei075psRJJ1EWmA4MdMWoD_UifgHXIvr-JVdz61dPQ9vTfvI3QEOITpqfXb6Q-Pmp8wbBC50eGFFHKDUk-ylYRQ6GR6nKdpkIeZoJ4Lpf-uXZOw0g0TVJkX0IbltW3Uon-6YZmBLBgCzg8HEbauFjKg1S3JLtbmdETDWs1nvoo5J3ykwkCZ3BratG9JQUhDBsQfu0soBODnfvR9JV4aJBz4G-OPplxFrbHUFsX3f9Ao1E"
      />

      <main className="pt-24 pb-40 px-4 max-w-2xl mx-auto">
        <CustomServiceForm />
      </main>
    </div>
  )
}
