import IlustrationOne from '../assets/img/aboutIlustrationOne.png'
import IlustrationTwo from '../assets/img/aboutIlustrationTwo.png'
import IlustrationThree from '../assets/img/aboutIlustrationThree.png'
import DotsBlue from '../assets/svg/Dots-blue'
const AboutUs = () => {
  return (
    <section className='px-32 py-[67px] relative h-full'>
      <div className='absolute bg-[#3BC5E9] w-full h-full left-0 top-0 opacity-5 -z-10'></div>
      <div className='absolute -bottom-[60px] right-[60px]'>
        <DotsBlue />
      </div>
      <div>
        <h4 className='uppercase tracking-widest text-[#3BC5E9] font-semibold'>tentang kami</h4>
        <h1 className='font-bold text-5xl pt-[18px]'>Mengapa Bisloka ?</h1>
      </div>
      <div className='grid grid-cols-3 gap-[51px] pt-[43px]'>
        <div className='bg-white p-11 rounded-[15px]'>
          <div className='h-[170px] mb-[31px] flex justify-center items-center'>
            <img src={IlustrationOne} alt='' height={'100%'} />
          </div>
          <div>
            <h3 className='text-2xl font-bold pb-[22px] w-2/3'>Dimana & Kapan Saja</h3>
            <p className='text-[14px] leading-8'>Website yang responsive dapat dibuka diberbagai gadget anda akan mempermudah penyewaan bus</p>
          </div>
        </div>
        <div className='bg-white p-11 rounded-[15px]'>
          <div className='h-[170px] mb-[31px] flex justify-center items-center'>
            <img src={IlustrationTwo} alt='' height={'100%'} />
          </div>
          <div>
            <h3 className='text-2xl font-bold pb-[22px] w-2/3'>Customer Priority</h3>
            <p className='text-[14px] leading-8'>Customer Service kami akan melayani anda disaat anda mengalami kesulitan diwebsite kami.</p>
          </div>
        </div>
        <div className='bg-white p-11 rounded-[15px]'>
          <div className='h-[170px] mb-[31px] flex justify-center items-center'>
            <img src={IlustrationThree} alt='' height={'100%'} />
          </div>
          <div>
            <h3 className='text-2xl font-bold pb-[22px] w-2/3'>Mudah Booking</h3>
            <p className='text-[14px] leading-8'>Mudah booking dan konfirmasi ketersediaan unit yang akan digunakan.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default AboutUs