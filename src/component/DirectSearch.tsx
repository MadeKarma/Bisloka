import BusIcon from "../assets/svg/BusIcon"
import DotsBlue from "../assets/svg/Dots-blue"
import Location from "../assets/svg/Location"

const DirectSearch = () => {
  return (
    <section className='px-32 relative'>
      <span className='absolute -top-[170px] left-[60px]'>
        <DotsBlue />
      </span>
      <div className='relative bg-white shadow-lg rounded-[10px] h-[442px] -top-28'>
        <div className='px-[76px] pt-[60px] pb-[45px]'>
          <div className='text-[#333]'>
            <h2 className='text-2xl'>Hey kamu,</h2>
            <h1 className='font-bold text-4xl'>Mau Liburan kemana ?</h1>
          </div>
          <div className='border-y-[1px] border-slate-300 py-8 my-7 grid grid-cols-3'>
            <div>
              <p className='font-semibold text-[#828282] text-[14px] pb-[14px]'>Depature</p>
              <div className='flex items-center gap-4'>
                <span>
                  <Location />
                </span>
                <h3 className='text-[#4F4F4F] font-bold text-[18px]'>Mau dijemput dimana ?</h3>
              </div>
            </div>
            <div>
              <p className='font-semibold text-[#828282] text-[14px] pb-[14px]'>Destination</p>
              <div className='flex items-center gap-4'>
                <span>
                  <Location />
                </span>
                <h3 className='text-[#4F4F4F] font-bold text-[18px]'>Mau dianter kemana ?</h3>
              </div>
            </div>
            <div>
              <p className='font-semibold text-[#828282] text-[14px] pb-[14px]'>Type Bus</p>
              <div className='flex items-center gap-4'>
                <span>
                  <BusIcon />
                </span>
                <h3 className='text-[#4F4F4F] font-bold text-[18px]'>Pilih jenis bus kamu ?</h3>
              </div>
            </div>
          </div>
          <div className='flex justify-end'>
            <button className='bg-blue-400 rounded-[10px]'>
              <h1 className='text-white px-[105px] py-[19px] font-bold'>Cari Bus</h1>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DirectSearch