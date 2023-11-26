import Image from "next/image"


export const Navbar = () => {
  return (
    <div className="w-full flex bg-orange-600 lg:h-20 sm:h-10 p-3 items-center justify-between">
      <div className="w-48 sm:w-16 lg:w-48 pb-1">
        <Image 
          src={'/logo-natura.png'}
          width={100}
          height={10}
          objectFit="cover"
          alt="Logo natura"
        />
      </div>
      <h3 className="lg:text-lg sm:text-sm xs:text-xs text-white font-semibold text-center">Surpreenda quem você ama com o presente perfeito! Adquira agora um dos nossos exclusivos cartões-presente</h3>
      <div />
    </div>
  )
}