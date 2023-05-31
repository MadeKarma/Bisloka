import { Link } from "react-router-dom"
import Instagram from '../assets/img/Instagram.png'
import Be from '../assets/img/Be.png'
import BasketBall from '../assets/img/BasketBall.png'

const Footer = () => {
  return (
    <footer className='fc-container py-[100px]'>
      <div className='grid grid-cols-8 justify-items-center text-[#828282]'>
        <div className='col-span-2'>
          <h1>&copy; Design by <span className='font-bold inline'>Innolabs Studio</span></h1>
        </div>
        <div className='col-span-4 flex gap-[35px]'>
          <Link to={'#'} className='duration-200 hover:text-[#555]'>Booking</Link>
          <Link to={'#'} className='duration-200 hover:text-[#555]'>List Bus</Link>
          <Link to={'#'} className='duration-200 hover:text-[#555]'>Blog</Link>
          <Link to={'#'} className='duration-200 hover:text-[#555]'>Tentang Kami</Link>
          <Link to={'#'} className='duration-200 hover:text-[#555]'>Sign In</Link>
          <Link to={'#'} className='duration-200 hover:text-[#555]'>Sign Up</Link>
        </div>
        <div className='col-span-2 flex gap-10'>
          <div className='duration-200 opacity-80 hover:opacity-100'>
            <img src={Instagram} alt="" />
          </div>
          <div className='duration-200 opacity-80 hover:opacity-100'>
            <img src={BasketBall} alt="" />
          </div>
          <div className='duration-200 opacity-80 hover:opacity-100'>
            <img src={Be} alt="" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer