import { useState } from 'react'
import { Link } from 'react-router-dom'
import icon from '../assets/img/iconbisloka.png'

const Navbar = () => {
  const [Navbar, setNavbar] = useState(false)

  window.addEventListener('scroll', () => {
    window.scrollY? setNavbar(true) : setNavbar(false)
  })

  return (
    <header className={`${Navbar? "bg-white shadow-lg" : "" } duration-200 fixed top-0 w-full z-50`}>
      <div className='bs-container flex items-center justify-between py-4'>
        <nav className='flex font-normal gap-8 text-[#828282]'>
          <img src={icon} alt="" />
          <Link to={'#'} className='hover:text-[#555]'>Booking</Link>
          <Link to={'#'} className='hover:text-[#555]'>List Bus</Link>
          <Link to={'#'} className='hover:text-[#555]'>Blog</Link>
          <Link to={'#'} className='hover:text-[#555]'>Tentang Kami</Link>
        </nav>
        <div className={`flex font-semibold gap-4 ${Navbar? 'text-[#3BC5E9]' : 'text-white'}`}>
          <button className='duration-200 px-6 py-2 rounded-lg transition-colors hover:text-[#555]'>
            <span>Sign In</span>
          </button>
          <button className={`border-2 ${Navbar? 'border-[#3BC5E9]' : 'border-white'} duration-200 px-6 py-2 rounded-lg transition-colors hover:bg-[#38acc9] hover:border-[#38acc9] hover:text-[#555]`}>
            <span>Sign Up</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar