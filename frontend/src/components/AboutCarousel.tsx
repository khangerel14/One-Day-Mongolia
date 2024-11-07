import { Down, EarlyPic } from '@/images';

export const AboutCarousel = () => {
  return (
    <div className='relative bg-cover w-full'>
      <EarlyPic />
      <div className='mx-auto container inset-0 absolute pb-14 h-full flex flex-col justify-end'>
        <div className='flex flex-col text-white h-[346px] w-[468px] justify-between'>
          <h1 className='text-2xl font-bold'>ABOUT US</h1>
          <h2 className='text-5xl font-extrabold max-md:text-2xl'>
            Promoting a Genuine Organic and Sustainable Lifestyle
          </h2>
          <button className='flex items-center gap-2 border border-white bg-transparent text-white px-4 py-2 rounded-full w-fit'>
            <Down />
            Discover more
          </button>
        </div>
      </div>
    </div>
  );
};
