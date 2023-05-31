import { useState } from 'react'
import icon from '../assets/img/iconbisloka.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [Navbar, setNavbar] = useState(false)
  window.addEventListener('scroll', () => {
    window.scrollY? setNavbar(true) : setNavbar(false)
  })

  return (
    <header className={`${Navbar? "bg-white shadow-lg" : "" } fixed top-0 w-full z-50 duration-200`}>
      <div className='fc-container flex items-center justify-between py-4'>
        <nav className='flex font-normal gap-8 text-[#828282]'>
          <img src={icon} alt="" />
          <Link to={'#'} className='hover:text-[#222]'>Booking</Link>
          <Link to={'#'} className='hover:text-[#222]'>List Bus</Link>
          <Link to={'#'} className='hover:text-[#222]'>Blog</Link>
          <Link to={'#'} className='hover:text-[#222]'>Tentang Kami</Link>
        </nav>
        <div className={`flex gap-4 font-semibold ${Navbar? 'text-[#3BC5E9]' : 'text-white'} buttonNav`}>
          <button className='duration-200 hover:text-[#333] px-6 py-2 rounded-lg transition-colors'>
            <span>Sign In</span>
          </button>
          <button className={`border-2 ${Navbar? 'border-[#3BC5E9]' : 'border-white'} duration-200 hover:bg-slate-400 hover:border-slate-700 hover:text-[#333] px-6 py-2 rounded-lg transition-colors`}>
            <span>Sign Up</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar