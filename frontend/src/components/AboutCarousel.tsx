import { EarlyPic } from '@/assets/images';
import { Down } from '@/assets/icons';

export const AboutCarousel = () => {
  return (
    <div className='relative bg-cover w-full 2xl:h-[740px] max-md:h-[380px]'>
      <EarlyPic />
      <div className='mx-auto container inset-0 absolute max-md:justify-center h-full flex flex-col justify-center'>
        <div className='flex flex-col text-white h-40 lg:h-[250px] xl:h-[346px] md:w-[468px] w-fit justify-between pb-1 gap-4'>
          <div className='flex flex-col gap-3 md:gap-6'>
            <h1 className='text-2xl font-bold max-sm:text-sm'>ABOUT US</h1>
            <h2 className='text-5xl font-extrabold max-xl:text-3xl max-md:text-2xl'>
              Promoting a Genuine Organic and Sustainable Lifestyle
            </h2>
          </div>
          <button
            className='flex items-center gap-2 border border-white bg-transparent text-white text-sm px-4 py-2 rounded-full w-fit max-sm:px-3 max-sm:text-sm'
            aria-label='Discover more about us'
          >
            <Down />
            Discover more
          </button>
        </div>
      </div>
    </div>
  );
};
