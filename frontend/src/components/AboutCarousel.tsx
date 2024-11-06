import { EarlyPic } from '@/images';

export const AboutCarousel = () => {
  return (
    <div className='relative bg-cover w-full'>
      <EarlyPic />
      <div className='w-[1440px] absolute inset-0'>
        <h1 className='text-2xl font-bold'>ABOUT US</h1>
        <h2 className='text-4xl font-extrabold'>
          Promoting a Genuine Organic and Sustainable Lifestyle
        </h2>
        <button className='border border-white bg-transparent text-white px-3 py-2'>
          Discover more
        </button>
      </div>
    </div>
  );
};
