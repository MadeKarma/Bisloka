import icon from '../assets/img/iconbisloka.png'
import { Link } from 'react-router-dom'
import '../css/style.css'
import HeroSec from '../component/HeroSec'
import DirectSearch from '../component/DirectSearch'

const Home = () => {
  return (
    <div>
      {/* navbar */}
      <header className='fixed top-0 w-full z-50 duration-200'>
        <div className='flex items-center justify-between px-32 py-4'>
          <nav className='flex font-semibold gap-8 text-slate-400'>
            <img src={icon} alt="" />
            <Link to={'#'}>Booking</Link>
            <Link to={'#'}>List Bus</Link>
            <Link to={'#'}>Blog</Link>
            <Link to={'#'}>Tentang Kami</Link>
          </nav>
          <div className='flex gap-4 font-semibold text-white buttonNav'>
            <button className='px-6 py-2 rounded-lg'>
              <span>Sign In</span>
            </button>
            <button className='border-2 border-white px-6 py-2 rounded-lg' id='buttonSignUp'>
              <span>Sign Up</span>
            </button>
          </div>
        </div>
      </header>
      {/* header sections */}
      <HeroSec />
      {/* Hero Banner */}
      <DirectSearch />
    </div>
  )
}

export default Home