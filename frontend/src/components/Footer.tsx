import { Fb, Ins, LinkedIn, Xlink, Yt, OneDay } from '@/assets/icons';

export const Footer = () => {
  return (
    <div className='bg-white'>
      <div className='flex items-start container justify-between py-10 mx-auto sm:gap-20 gap-10 max-sm:flex-col'>
        <OneDay />
        <div className='flex items-center justify-between gap-10 max-xl:flex-col max-xl:items-end max-sm:items-start xl:w-[900px]'>
          <div className='flex items-center w-fit gap-8 max-lg:flex-wrap sm:justify-end justify-start max-sm:items-start'>
            <button>Танилцуулга татах</button>
            <button>Үйлчилгээний нөхцөл</button>
            <button>Нууцлалын бодлого</button>
          </div>
          <div className='flex items-center w-fit h-10 justify-between gap-2'>
            <button className='flex justify-center items-center bg-[#F2F5FC] h-10 w-10 rounded-full'>
              <Fb />
            </button>
            <button className='flex justify-center items-center bg-[#F2F5FC] h-10 w-10 rounded-full'>
              <LinkedIn />
            </button>
            <button className='flex justify-center items-center bg-[#F2F5FC] h-10 w-10 rounded-full'>
              <Xlink />
            </button>
            <button className='flex justify-center items-center bg-[#F2F5FC] h-10 w-10 rounded-full'>
              <Yt />
            </button>
            <button className='flex justify-center items-center bg-[#F2F5FC] h-10 w-10 rounded-full'>
              <Ins />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
