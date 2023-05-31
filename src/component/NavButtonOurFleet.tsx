import { useState } from 'react';
import { useSwiper } from 'swiper/react';

const NavButtonOurFleet = () => {
  const swiper = useSwiper()
  const [isHoverOne, setIsHoverOne] = useState(false)
  const [isHoverTwo, setIsHoverTwo] = useState(false)
  
  return (
    <div className='absolute h-full top-0 w-full z-20'>
      <button onClick={() => swiper.slidePrev()} onMouseEnter={() => setIsHoverOne(true)} onMouseLeave={() => setIsHoverOne(false)}
      className={`absolute ${isHoverOne? "bg-[#3BC5E9]" : "bg-white"} duration-200 left-0 ml-[-20px] p-3 rounded-full shadow-slate-400 shadow-md top-1/2`}
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
      <button onClick={() => swiper.slideNext()} onMouseEnter={() => setIsHoverTwo(true)} onMouseLeave={() => setIsHoverTwo(false)}
      className={`absolute ${isHoverTwo? "bg-[#3BC5E9]" : "bg-white"}  duration-200 mr-[25px] p-3 right-0 rounded-full shadow-slate-400 shadow-md top-1/2`}>
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
export default NavButtonOurFleet