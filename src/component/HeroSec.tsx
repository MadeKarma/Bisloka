import Dots from '../assets/svg/Dots-white'
import ImgHeader from '../assets/img/header-section.png'

const HeroSec = () => {
  return (
    <section className='relative'>
      <span className='absolute bg-[#3BC5E9] h-full right-0 w-[407px] -z-10'></span>
      <div className='px-32 py-56'>
        <div className='grid grid-cols-2'>
          <div className='w-[472px]'>
            <h1 className='capitalize font-bold text-[52px]'>cara mudah sewa bus pariwisata</h1>
            <p className='leading-8 text-[14px] pr-16'>Booking bus untuk segala keperluan berpergian anda seperti perjalanan religi, kunjungan industri sampai rekreasi bersama orang-orang tercinta</p>
          </div>
          <div className='justify-self-end relative'>
            <span className='absolute opacity-50 right-0 -top-[65px] -z-[1]'>
              <Dots />
            </span>
            <span className='absolute -bottom-[30px] left-[145px] opacity-50 -z-[1]'>
              <Dots />
            </span>
            <img src={ImgHeader} alt='' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSec