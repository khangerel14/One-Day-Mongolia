import { Lightening, WorldFrame } from '@/images';

export const Carousel = () => {
  return (
    <div className='bg-[#284CE5]'>
      <div className='relative'>
        <WorldFrame />
        <div className='absolute opacity-5 z-10'>
          <Lightening />
        </div>
      </div>
    </div>
  );
};
