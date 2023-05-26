import icon from '../assets/img/iconbisloka.png'
import { Link } from 'react-router-dom'
import '../css/style.css'
import HeroSec from '../component/HeroSec'
import HeroBanner from '../component/HeroBanner'

const Home = () => {
  return (
    <div>
      {/* navbar */}
      <div className='fixed top-0 w-full'>
        <div className='flex items-center justify-between px-32 py-4'>
          <div className='flex font-semibold gap-8 text-slate-400'>
            <img src={icon} alt="" />
            <Link to={'#'}>Booking</Link>
            <Link to={'#'}>List Bus</Link>
            <Link to={'#'}>Blog</Link>
            <Link to={'#'}>Tentang Kami</Link>
          </div>
          <div className='flex gap-4 text-white'>
            <button className='px-6 py-2 rounded-lg'>
              <span>Sign In</span>
            </button>
            <button className='border-2 border-white px-6 py-2 rounded-lg'>
              <span>Sign Up</span>
            </button>
          </div>
        </div>
      </div>
      {/* header sections */}
      <HeroSec />
      {/* Hero Banner */}
      <HeroBanner />
    </div>
  )
}

export default Home