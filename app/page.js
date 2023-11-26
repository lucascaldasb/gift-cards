import GiftCards from './components/GiftCards'
import { Navbar } from './components/Navbar'

export default function Home() {
  return (
    <div className='space-y-10 pb-10'>
      <Navbar />
      <GiftCards />
      <footer className='text-center pt-28'><u>&copy; 2023 Página particular da Consultora Jacqueline Caldas</u></footer>
    </div>
  )
}
