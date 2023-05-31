import DotsBlue from '../assets/svg/Dots-blue'
import IlustrationOne from '../assets/img/aboutIlustrationOne.png'
import IlustrationTwo from '../assets/img/aboutIlustrationTwo.png'
import IlustrationThree from '../assets/img/aboutIlustrationThree.png'

const AboutUs = () => {
  return (
    <section className='h-full py-[67px] relative'>
      <div className='absolute bg-[#3BC5E9] h-[600px] left-0 opacity-5 top-0 w-11/12 -z-10'></div>
      <div className='fc-container'>
        <div className='absolute -bottom-[60px] right-[60px]'>
          <DotsBlue />
        </div>
        <div>
          <h4 className='font-semibold text-[#3BC5E9] tracking-widest uppercase'>tentang kami</h4>
          <h1 className='font-bold text-5xl pt-[18px]'>Mengapa Bisloka ?</h1>
        </div>
        <div className='gap-[51px] grid grid-cols-3 pt-[43px]'>
          <div className='bg-white p-11 rounded-[15px] shadow-xl'>
            <div className='flex h-[170px] items-center justify-center mb-[31px]'>
              <img src={IlustrationOne} alt='' height={'100%'} />
            </div>
            <div>
              <h3 className='font-bold pb-[22px] text-2xl w-2/3'>Dimana & Kapan Saja</h3>
              <p className='leading-8 text-[14px]'>Website yang responsive dapat dibuka diberbagai gadget anda akan mempermudah penyewaan bus</p>
            </div>
          </div>
          <div className='bg-white p-11 rounded-[15px] shadow-xl'>
            <div className='flex h-[170px] items-center justify-center mb-[31px]'>
              <img src={IlustrationTwo} alt='' height={'100%'} />
            </div>
            <div>
              <h3 className='font-bold pb-[22px] text-2xl w-2/3'>Customer Priority</h3>
              <p className='leading-8 text-[14px]'>Customer Service kami akan melayani anda disaat anda mengalami kesulitan diwebsite kami.</p>
            </div>
          </div>
          <div className='bg-white p-11 rounded-[15px] shadow-xl'>
            <div className='flex h-[170px] items-center justify-center mb-[31px]'>
              <img src={IlustrationThree} alt='' height={'100%'} />
            </div>
            <div>
              <h3 className='font-bold pb-[22px] text-2xl w-2/3'>Mudah Booking</h3>
              <p className='leading-8 text-[14px]'>Mudah booking dan konfirmasi ketersediaan unit yang akan digunakan.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default AboutUs