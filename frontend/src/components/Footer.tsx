import { Fb, Ins, LinkedIn, Xlink, Yt, OneDay } from '@/images';

export const Footer = () => {
  return (
    <div className='bg-white'>
      <div className='flex items-center container justify-between py-10 mx-auto'>
        <OneDay />
        <div className='flex items-center gap-8 xl:pl-52 lg:pl-30 max-lg:flex-wrap max-lg:ml-20 justify-end'>
          <button>Танилцуулга татах</button>
          <button>Үйлчилгээний нөхцөл</button>
          <button>Нууцлалын бодлого</button>
        </div>
        <div className='flex items-center w-[232px] h-10 justify-between max-lg:hidden'>
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
  );
};
