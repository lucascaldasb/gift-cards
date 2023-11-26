import Image from "next/image"


export const Navbar = () => {
  return (
    <div className="w-full flex bg-orange-600 h-20 p-3 items-center justify-between">
      <div className="w-30 pb-1">
        <Image 
          src={'/logo-natura.png'}
          width={100}
          height={10}
          objectFit="cover"
          alt="Logo natura"
        />
      </div>
      <h3 className="text-lg text-white font-semibold text-center">Surpreenda quem você ama com o presente perfeito! Adquira agora um dos nossos exclusivos cartões-presente</h3>
      <div />
    </div>
  )
}