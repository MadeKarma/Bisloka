import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperNavButton from './SwiperNavButton';
import DummyImg from '../assets/img/dummy.png'
import Star from '../assets/svg/Star';
import DotsBlue from '../assets/svg/Dots-blue';

const Feedback = () => {
  return (
    <section className='pb-20 pt-16 relative'>
      <div className='absolute left-[85px] top-[200px] -z-10'>
        <DotsBlue />
      </div>
       <div className='flex flex-col font-bold items-start justify-start mb-12 px-32'>
         <h4 className='pb-4 text-[#3BC5E9] tracking-widest uppercase'>feedback customer</h4>
         <h1 className='capitalize text-5xl'>Apa kata mereka tentang bisloka ?</h1>
       </div>
       <div>
         <Swiper
           modules={[Navigation, Pagination, A11y]}
           spaceBetween={52}
           slidesPerView={2.5}
         >
            <SwiperSlide>
              <div className='flex flex-col items-center justify-center relative pt-12 z-10'>
                  <div className='absolute bg-red-400 h-[62px] overflow-hidden rounded-full top-4 w-[62px]'>
                    <img src={DummyImg} alt="" className='h-full object-cover' />
                  </div>
                  <div className='bg-white p-8 rounded-xl shadow-lg text-center'>
                    <h1 className='font-bold text-[#333] text-xl'>Margareth Carbell</h1>
                    <h2 className='pt-2 text-lg'>Product Designer, Taripedia</h2>
                    <p className='leading-7 pt-4 text-[14px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolor quo ad illum repellat et. Nam, eveniet.</p>
                    <div className='flex gap-2 items-center justify-center pt-4'>
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                    </div>
                  </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex flex-col items-center justify-center relative pt-12 z-10'>
                  <div className='absolute bg-red-400 h-[62px] overflow-hidden rounded-full top-4 w-[62px]'>
                    <img src={DummyImg} alt="" className='h-full object-cover' />
                  </div>
                  <div className='bg-white p-8 rounded-xl shadow-lg text-center'>
                    <h1 className='font-bold text-[#333] text-xl'>Margareth Carbell</h1>
                    <h2 className='pt-2 text-lg'>Product Designer, Taripedia</h2>
                    <p className='leading-7 pt-4 text-[14px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolor quo ad illum repellat et. Nam, eveniet.</p>
                    <div className='flex gap-2 items-center justify-center pt-4'>
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                    </div>
                  </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex flex-col items-center justify-center relative pt-12 z-10'>
                  <div className='absolute bg-red-400 h-[62px] overflow-hidden rounded-full top-4 w-[62px]'>
                    <img src={DummyImg} alt="" className='h-full object-cover' />
                  </div>
                  <div className='bg-white p-8 rounded-xl shadow-lg text-center'>
                    <h1 className='font-bold text-[#333] text-xl'>Margareth Carbell</h1>
                    <h2 className='pt-2 text-lg'>Product Designer, Taripedia</h2>
                    <p className='leading-7 pt-4 text-[14px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolor quo ad illum repellat et. Nam, eveniet.</p>
                    <div className='flex gap-2 items-center justify-center pt-4'>
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                    </div>
                  </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex flex-col items-center justify-center relative pt-12 z-10'>
                  <div className='absolute bg-red-400 h-[62px] overflow-hidden rounded-full top-4 w-[62px]'>
                    <img src={DummyImg} alt="" className='h-full object-cover' />
                  </div>
                  <div className='bg-white p-8 rounded-xl shadow-lg text-center'>
                    <h1 className='font-bold text-[#333] text-xl'>Margareth Carbell</h1>
                    <h2 className='pt-2 text-lg'>Product Designer, Taripedia</h2>
                    <p className='leading-7 pt-4 text-[14px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolor quo ad illum repellat et. Nam, eveniet.</p>
                    <div className='flex gap-2 items-center justify-center pt-4'>
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                    </div>
                  </div>
              </div>
            </SwiperSlide>
            <SwiperNavButton />
         </Swiper>
       </div>
     </section>
  )
}
export default Feedback