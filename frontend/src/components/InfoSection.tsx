import { Deliver, Plane } from '@/images';

export const InfoSection = () => {
  return (
    <div className='flex flex-col bg-[#F2F5FC] h-[1342px] text-black justify-center items-center gap-[120px]'>
      <div className='flex justify-between w-[1440px] gap-[112px]'>
        <div>
          <Plane />
        </div>
        <div className='flex justify-center items-start flex-col w-[592px]'>
          <h1 className='font-bold text-4xl'>
            Үндэсний үйлдвэрлэлээ дэлхийд түгээх
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className='flex justify-between w-[1440px] gap-[112px]'>
        <div className='flex justify-center items-start flex-col w-[592px]'>
          <h1 className='font-bold text-4xl'>
            Европ дах хүссэн байршлаасаа эх орныхоо бүтээгдэхүүнийг хүргүүлэн
            авах
          </h1>
          <p>
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
