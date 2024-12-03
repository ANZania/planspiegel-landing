import Image from 'next/image'
import logo from '@/images/Planspiegel.svg'

export function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image src={logo} alt="Planspiegel Logo" width={128} height={32} />
      {/* <span className="ml-2 mt-1 text-2xl font-athletic">PLANSPIEGEL</span> */}
    </div>
  )
}
