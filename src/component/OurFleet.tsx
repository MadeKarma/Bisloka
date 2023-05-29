import { Swiper, SwiperSlide } from 'swiper/react'
import Bus1 from '../assets/img/armadaOne.png'
import Bus2 from '../assets/img/armadaTwo.png'
import Bus3 from '../assets/img/armadaThree.png'
import { Navigation, Scrollbar, A11y } from 'swiper'
import 'swiper/css'
import '../css/config.css'
import User from '../assets/svg/User'
import Arrow from '../assets/svg/Arrow'
import DotsBlue from '../assets/svg/Dots-blue'

const OurFleet = () => {
  return (
    <section className='pb-20 pt-32 relative'>
      <div className='absolute bottom-[145px] left-[45px]'>
        <DotsBlue />
      </div>
      <div className='flex flex-col font-bold items-center justify-center mb-16'>
        <h4 className='pb-4 text-[#3BC5E9] tracking-widest uppercase'>armada kami</h4>
        <h1 className='capitalize text-5xl'>sesuaikan dengan keperluan anda</h1>
      </div>
      <Swiper
      modules={[Navigation, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
    >
      <SwiperSlide>
        <div className='bg-white p-11 rounded-[15px] shadow-lg'>
          <div className='flex h-[170px] items-center justify-center mb-[31px]'>
            <img src={Bus1} alt='' height={'100%'} />
          </div>
          <div>
            <div className='gap-2 flex items-center'>
              <div className='bg-white flex items-center justify-center rounded-full border w-[29px] h-[29px]'>
                <User />
              </div>
              <div className='gap-1 flex'>
                <h3 className='font-bold'>30</h3><span>Seat</span>
              </div>
            </div>
            <h3 className='font-bold pb-[22px] text-xl'>Jetbus 29 Seater Balideva Transport</h3>
            <p className='font-bold text-[#4F4F4F] text-[14px]'>Mulai dari</p>
            <h2 className='font-bold text-[#3BC5E9] text-2xl'>Rp. 2.500.000</h2>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='bg-white p-11 rounded-[15px] shadow-lg'>
          <div className='flex h-[170px] items-center justify-center mb-[31px]'>
            <img src={Bus2} alt='' height={'100%'} />
          </div>
          <div>
            <div className='gap-2 flex items-center'>
              <div className='bg-white flex items-center justify-center rounded-full border w-[29px] h-[29px]'>
                <User />
              </div>
              <div className='gap-1 flex'>
                <h3 className='font-bold'>100</h3><span>Seat</span>
              </div>
            </div>
            <h3 className='font-bold pb-[22px] text-xl'>Toyota Coaster Seater Travelink Trans</h3>
            <p className='font-bold text-[#4F4F4F] text-[14px]'>Mulai dari</p>
            <h2 className='font-bold text-[#3BC5E9] text-2xl'>Rp. 5.200.000</h2>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='bg-white p-11 rounded-[15px] shadow-lg'>
          <div className='flex h-[170px] items-center justify-center mb-[31px]'>
            <img src={Bus3} alt='' height={'100%'} />
          </div>
          <div>
            <div className='gap-2 flex items-center'>
              <div className='bg-white flex items-center justify-center rounded-full border w-[29px] h-[29px]'>
                <User />
              </div>
              <div className='gap-1 flex'>
                <h3 className='font-bold'>35</h3><span>Seat</span>
              </div>
            </div>
            <h3 className='font-bold pb-[22px] text-xl'>Tourista MD 35 Seater Balideva Transport</h3>
            <p className='font-bold text-[#4F4F4F] text-[14px]'>Mulai dari</p>
            <h2 className='font-bold text-[#3BC5E9] text-2xl'>Rp. 1.750.000</h2>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='bg-white p-11 rounded-[15px] shadow-lg'>
          <div className='flex h-[170px] items-center justify-center mb-[31px]'>
            <img src={Bus1} alt='' height={'100%'} />
          </div>
          <div>
            <div className='gap-2 flex items-center'>
              <div className='bg-white flex items-center justify-center rounded-full border w-[29px] h-[29px]'>
                <User />
              </div>
              <div className='gap-1 flex'>
                <h3 className='font-bold'>30</h3><span>Seat</span>
              </div>
            </div>
            <h3 className='font-bold pb-[22px] text-xl'>Jetbus 29 Seater Balideva Transport</h3>
            <p className='font-bold text-[#4F4F4F] text-[14px]'>Mulai dari</p>
            <h2 className='font-bold text-[#3BC5E9] text-2xl'>Rp. 2.500.000</h2>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='bg-white p-11 rounded-[15px] shadow-lg'>
          <div className='flex h-[170px] items-center justify-center mb-[31px]'>
            <img src={Bus2} alt='' height={'100%'} />
          </div>
          <div>
            <div className='gap-2 flex items-center'>
              <div className='bg-white flex items-center justify-center rounded-full border w-[29px] h-[29px]'>
                <User />
              </div>
              <div className='gap-1 flex'>
                <h3 className='font-bold'>100</h3><span>Seat</span>
              </div>
            </div>
            <h3 className='font-bold pb-[22px] text-xl'>Toyota Coaster Seater Travelink Trans</h3>
            <p className='font-bold text-[#4F4F4F] text-[14px]'>Mulai dari</p>
            <h2 className='font-bold text-[#3BC5E9] text-2xl'>Rp. 5.200.000</h2>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='bg-white p-11 rounded-[15px] shadow-lg'>
          <div className='flex h-[170px] items-center justify-center mb-[31px]'>
            <img src={Bus3} alt='' height={'100%'} />
          </div>
          <div>
            <div className='gap-2 flex items-center'>
              <div className='bg-white flex items-center justify-center rounded-full border w-[29px] h-[29px]'>
                <User />
              </div>
              <div className='gap-1 flex'>
                <h3 className='font-bold'>35</h3><span>Seat</span>
              </div>
            </div>
            <h3 className='font-bold pb-[22px] text-xl'>Tourista MD 35 Seater Balideva Transport</h3>
            <p className='font-bold text-[#4F4F4F] text-[14px]'>Mulai dari</p>
            <h2 className='font-bold text-[#3BC5E9] text-2xl'>Rp. 1.750.000</h2>
          </div>
        </div>
      </SwiperSlide>
      </Swiper>
      <div className='flex justify-end mt-14 px-32'>
        <button className='bg-[#3BC5E9] gap-2 flex items-center px-16 py-5 rounded-full text-white'>
          <h1 className='font-bold'>Lihat semua Bus</h1><Arrow />
        </button>
      </div>
    </section>
  )
}

export default OurFleet