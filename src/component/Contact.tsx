import DotsBlue from "../assets/svg/Dots-blue"

const Contact = () => {
  return (
    <section className='bg-[#3bc6e91a] relative'>
      <div className='bs-container'>
        <div className='absolute left-[40px] top-[30px]'>
          <DotsBlue />
        </div>
        <div className='grid grid-cols-5 justify-items-center py-20 relative'>
          <div className='col-span-3'>
            <h1 className='font-bold text-[#333] text-[42px]'>Ayo pesan bus pariwisatamu sekarang !</h1>
            <p className='leading-8 text-[14px] text-[#4F4F4F] w-3/4'>Booking bus untuk segala keperluan berpergian anda seperti perjalanan religi, kunjungan industri sampai rekreasi bersama orang-orang tercinta</p>
          </div>
          <div className='col-span-2 flex flex-col gap-[18px] justify-center'>
            <input className='py-5 px-11 rounded-[10px]' type='text' placeholder='Nama Lengkap' />
            <input className='py-5 px-11 rounded-[10px]' type='text' placeholder='Email' />
            <button className='bg-[#3BC5E9] duration-200 font-extrabold mt-[18px] py-5 px-11 rounded-[10px] tracking-wider text-white hover:bg-[#38acc9] hover:text-gray-300'>Subcribe</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact