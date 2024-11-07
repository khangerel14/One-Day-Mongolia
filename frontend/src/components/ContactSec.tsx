import { SocialAccs, Telegram } from '@/images';

export const ContactSec = () => {
  return (
    <div className='bg-[#F2F5FC] py-32'>
      <div className='flex items-start container mx-auto gap-20 justify-between'>
        <div className='flex flex-col gap-10 w-[482px]'>
          <h1 className='text-3xl font-extrabold'>Холбоо барих</h1>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-3'>
              <div className='flex flex-col gap-1'>
                <h1 className='font-semibold text-sm'>Adress</h1>
                <p className='text-sm font-normal text-[#5A5D72]'>
                  Kassai UT 141, GÖCS telep, 4028 Debrecen, Hungary ( 3-minutes
                  walking distance from the nearest bus station ) More info: +36
                  304859381
                </p>
              </div>
              <div className='flex flex-col gap-1'>
                <h1 className='font-semibold text-sm'>Email</h1>
                <p className='text-sm font-normal text-[#5A5D72]'>
                  Hi@testmail.com
                </p>
              </div>
              <div className='flex flex-col gap-1'>
                <h1 className='font-semibold text-sm'>Phone</h1>
                <p className='text-sm font-normal text-[#5A5D72]'>75759955</p>
              </div>
            </div>
            <div className='flex flex-col gap-1'>
              <h1 className='font-semibold text-sm'>Social</h1>
              <SocialAccs />
            </div>
          </div>
        </div>
        <form action=''>
          <div className='flex flex-col justify-between py-8 px-10 w-[870px] h-[480px] bg-white rounded-xl'>
            <div className='flex flex-wrap gap-6'>
              <div className='flex flex-col gap-1'>
                <h1>Таны нэр</h1>
                <input
                  type='text'
                  className='border outline-none py-2 px-3 rounded-md w-[383px]'
                  placeholder='Name'
                />
              </div>
              <div className='flex flex-col gap-1'>
                <h1>Байгууллага</h1>
                <input
                  type='text'
                  className='border outline-none py-2 px-3 rounded-md w-[383px]'
                  placeholder='Industrial'
                />
              </div>
              <div className='flex flex-col gap-1'>
                <h1>Имэйл хаяг</h1>
                <input
                  type='text'
                  className='border outline-none py-2 px-3 rounded-md w-[383px]'
                  placeholder='Email'
                />
              </div>
              <div className='flex flex-col gap-1'>
                <h1>Утасны дугаар</h1>
                <input
                  type='text'
                  className='border outline-none py-2 px-3 rounded-md w-[383px]'
                  placeholder='Phone'
                />
              </div>
            </div>
            <div className='flex flex-col gap-1'>
              <h1>Label</h1>
              <input
                type='text'
                className='w-full h-[100px] outline-none border p-3 rounded-lg'
                placeholder='Placeholder'
              />
            </div>
            <button className='flex items-center gap-2 p-3 px-5 rounded-full bg-[#284CE5] text-white w-fit font-bold'>
              Илгээх <Telegram />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
