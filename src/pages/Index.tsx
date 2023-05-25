import icon from '../assets/img/iconbisloka.png'
import headerSec from '../assets/img/header-section.png'
import { Link } from 'react-router-dom'
import '../css/style.css'

const Home = () => {
  return (
    <div>
      {/* navbar */}
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
          <button className='bg-green-400 border-2 border-white px-6 py-2 rounded-lg'>
            <span>Sign Up</span>
          </button>
        </div>
      </div>

      {/* header sections */}
      <div className="bg-red-500 px-32 py-4">
        <div className='grid grid-cols-2'>
          <div className=''>
            <h1 className='capitalize font-bold text-4xl'>cara mudah sewa bus pariwisata</h1>
            <p>Booking bus untuk segala keperluan berpergian anda seperti perjalanan religi, kunjungan industri sampai rekreasi bersama orang-orang tercinta</p>
          </div>
          <div className='bg-blue-500'>
            <img src={headerSec} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home