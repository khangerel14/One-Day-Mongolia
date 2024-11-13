import { Deliver, Plane } from '@/images';

export const InfoSection = () => {
  return (
    <div className='flex flex-col bg-[#F2F5FC] py-28 text-black justify-center items-center xl:gap-[120px] gap-20'>
      <div className='flex justify-between container md:gap-28 gap-16 max-md:flex-col max-md:h-full'>
        <div>
          <Plane />
        </div>
        <div className='flex justify-center items-start flex-col w-[592px] gap-8 max-md:w-fit'>
          <h1 className='font-bold text-4xl text-[#000000] max-sm:text-2xl'>
            Үндэсний үйлдвэрлэлээ дэлхийд түгээх
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiumdod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className='flex justify-between container md:gap-28 gap-16 max-md:h-full max-md:flex-col-reverse'>
        <div className='flex justify-center items-start flex-col w-[592px] gap-8 max-md:w-fit'>
          <h1 className='font-bold text-4xl text-[#000000] max-sm:text-2xl'>
            Европ дах хүссэн байршлаасаа эх орныхоо бүтээгдэхүүнийг хүргүүлэн
            авах
          </h1>
          <p className='text-[#060813] text-base font-normal'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div>
          <Deliver />
        </div>
      </div>
    </div>
  );
};
