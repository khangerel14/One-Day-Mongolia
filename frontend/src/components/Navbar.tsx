import { Bag, Contact, OneDay, Vector } from '@/images';

export const Navbar = () => {
  return (
    <div className='flex items-center justify-between bg-white w-[1440px] h-20 mx-auto'>
      <div className='flex items-center'>
        <button>
          <OneDay />
        </button>
      </div>
      <div className='flex w-[548px] justify-between font-semibold items-center text-[#284CE5]'>
        <button className='flex gap-2 items-center'>
          <Bag /> Дэлгүүрт зочлох
        </button>
        <button className='flex gap-2 items-center'>
          <Vector /> Бидний тухай
        </button>
        <button className='flex gap-2 items-center bg-[#284CE5] text-white p-3 rounded-full'>
          <Contact /> Холбоо барих
        </button>
      </div>
    </div>
  );
};
