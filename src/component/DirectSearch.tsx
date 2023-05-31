import BusIcon from "../assets/svg/BusIcon"
import DotsBlue from "../assets/svg/Dots-blue"
import Location from "../assets/svg/Location"

const DirectSearch = () => {
  return (
    <section className='relative'>
      <span className='absolute ml-[5px] -top-[170px]'>
        <DotsBlue />
      </span>
      <div className='bg-white bs-container h-[442px] relative rounded-[10px] shadow-lg -top-28'>
        <div className='pb-[45px] pt-[60px] px-[76px]'>
          <div className='text-[#333]'>
            <h2 className='text-2xl'>Hey kamu,</h2>
            <h1 className='font-bold text-4xl'>Mau Liburan kemana ?</h1>
          </div>
          <div className='border-slate-300 border-y-[1px] grid grid-cols-3 my-7 py-8'>
            <div>
              <p className='font-semibold  pb-[14px] text-[#828282] text-[14px]'>Depature</p>
              <div className='flex gap-4 items-center'>
                <span>
                  <Location />
                </span>
                <h3 className='font-bold text-[#4F4F4F] text-[18px]'>Mau dijemput dimana ?</h3>
              </div>
            </div>
            <div>
              <p className='font-semibold  pb-[14px] text-[#828282] text-[14px]'>Destination</p>
              <div className='flex gap-4 items-center'>
                <span>
                  <Location />
                </span>
                <h3 className='font-bold text-[#4F4F4F] text-[18px]'>Mau dianter kemana ?</h3>
              </div>
            </div>
            <div>
              <p className='font-semibold  pb-[14px] text-[#828282] text-[14px]'>Type Bus</p>
              <div className='flex gap-4 items-center'>
                <span>
                  <BusIcon />
                </span>
                <h3 className='font-bold text-[#4F4F4F] text-[18px]'>Pilih jenis bus kamu ?</h3>
              </div>
            </div>
          </div>
          <div className='flex justify-end'>
            <button className='bg-blue-400 rounded-[10px]'>
              <h1 className=' font-bold px-[105px] py-[19px] text-white'>Cari Bus</h1>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DirectSearch