import WorldImage from '../../../public/Frame 1000005638.png';

export const WorldFrame = () => {
  return (
    <div>
      <img
        src={WorldImage.src}
        alt=''
        className='bg-cover w-full 2xl:h-[740px] max-md:h-[380px]'
      />
    </div>
  );
};
