import { Swiper, SwiperSlide } from 'swiper/react'
import Bus1 from '../assets/img/armadaOne.png'
import Bus2 from '../assets/img/armadaTwo.png'
import Bus3 from '../assets/img/armadaThree.png'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const MySlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <img src={Bus1} alt='' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Bus2} alt='' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Bus3} alt='' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Bus1} alt='' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Bus2} alt='' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Bus3} alt='' />
      </SwiperSlide>
    </Swiper>
  )
}
export default MySlider