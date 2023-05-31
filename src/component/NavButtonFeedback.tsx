import { useState } from 'react';
import { useSwiper } from 'swiper/react';

const SwiperNavButton = () => {
  const swiper = useSwiper()
  const [isHoverOne, setIsHoverOne] = useState(false)
  const [isHoverTwo, setIsHoverTwo] = useState(false)
  
  return (
    <div className='gap-3 flex py-8'>
      <button onClick={() => {
        swiper.slidePrev()
        setIsHoverOne(true)
        setIsHoverTwo(false)
      }}
      className={`${isHoverOne? "bg-[#3BC5E9]" : "bg-white"} duration-200 shadow-md shadow-slate-400 rounded-full p-3`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none">
          <path
            stroke={isHoverOne? "#fff" : "#3BC5E9"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="M15.569 18.791l-6-6 6-6"
          ></path>
        </svg>
      </button>
      <button onClick={() => {
        swiper.slideNext()
        setIsHoverOne(false)
        setIsHoverTwo(true)
      }} 
      className={`${isHoverTwo? "bg-[#3BC5E9]" : "bg-white"} duration-200 shadow-md shadow-slate-400 rounded-full p-3`}>
        <svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' fill='none'>
          <path
            stroke={isHoverTwo? "#fff" : "#3BC5E9"}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='3'
            d='M9.572 18.791l6-6-6-6'
          ></path>
        </svg>
      </button>
    </div>
  )
}
export default SwiperNavButton