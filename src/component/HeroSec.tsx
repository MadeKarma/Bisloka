import Dots from '../assets/svg/Dots-white'
import ImgHeader from '../assets/img/header-section.png'

const HeroSec = () => {
  return (
    <section className='relative'>
      <span className='absolute bg-[#3BC5E9] h-full right-0 w-2/6 -z-10'></span>
      <div className='bs-container py-56'>
        <div className='grid grid-cols-2'>
          <div className='w-[472px]'>
            <h1 className='capitalize font-bold text-[52px]'>cara mudah sewa bus pariwisata</h1>
            <p className='leading-8 text-[14px] pr-16'>Booking bus untuk segala keperluan berpergian anda seperti perjalanan religi, kunjungan industri sampai rekreasi bersama orang-orang tercinta</p>
          </div>
          <div className='justify-self-center relative'>
            <div className='absolute opacity-50 right-0 -top-[65px] -z-[1]'>
              <Dots />
            </div>
            <div className='absolute ml-[140px] mt-[175px] opacity-50 -z-[1]'>
              <Dots />
            </div>
            <img src={ImgHeader} alt='' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSec