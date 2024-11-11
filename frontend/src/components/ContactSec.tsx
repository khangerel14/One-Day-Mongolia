import { Telegram, Fb, LinkedIn, Xlink, Yt, Ins } from '@/images';

export const ContactSec = () => {
  return (
    <div className='bg-[#F2F5FC] py-32'>
      <div className='flex items-center container mx-auto gap-20 justify-between max-xl:flex-col'>
        <div className='flex flex-col gap-10 lg:w-[482px] w-full max-xl:text-center'>
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
            <div className='flex flex-col gap-1 max-xl:items-center'>
              <h1 className='font-semibold text-sm'>Social</h1>
              <div className='flex items-center w-[232px] h-10 justify-between'>
                <button className='flex justify-center items-center bg-white h-10 w-10 rounded-full'>
                  <Fb />
                </button>
                <button className='flex justify-center items-center bg-white h-10 w-10 rounded-full'>
                  <LinkedIn />
                </button>
                <button className='flex justify-center items-center bg-white h-10 w-10 rounded-full'>
                  <Xlink />
                </button>
                <button className='flex justify-center items-center bg-white h-10 w-10 rounded-full'>
                  <Yt />
                </button>
                <button className='flex justify-center items-center bg-white h-10 w-10 rounded-full'>
                  <Ins />
                </button>
              </div>
            </div>
          </div>
        </div>
        <form action=''>
          <div className='flex flex-col justify-between py-8 px-10 w-full lg:w-[870px] xl:h-[450px] h-fit gap-6 bg-white rounded-xl'>
            <div className='flex flex-wrap gap-6 justify-between max-xl:justify-center'>
              <div className='flex flex-col gap-1 max-xl:w-full'>
                <h1>Таны нэр</h1>
                <input
                  type='text'
                  className='border outline-none py-2 px-3 rounded-md xl:w-[383px] sm:w-full'
                  placeholder='Name'
                />
              </div>
              <div className='flex flex-col gap-1 max-xl:w-full'>
                <h1>Байгууллага</h1>
                <input
                  type='text'
                  className='border outline-none py-2 px-3 rounded-md xl:w-[383px] sm:w-full'
                  placeholder='Industrial'
                />
              </div>
              <div className='flex flex-col gap-1 max-xl:w-full'>
                <h1>Имэйл хаяг</h1>
                <input
                  type='text'
                  className='border outline-none py-2 px-3 rounded-md xl:w-[383px] sm:w-full'
                  placeholder='Email'
                />
              </div>
              <div className='flex flex-col gap-1 max-xl:w-full'>
                <h1>Утасны дугаар</h1>
                <input
                  type='text'
                  className='border outline-none py-2 px-3 rounded-md xl:w-[383px] sm:w-full'
                  placeholder='Phone'
                />
              </div>
            </div>
            <div className='flex flex-col gap-1 max-xl:w-full mb-3'>
              <h1>Label</h1>
              <textarea
                name=''
                className='w-full h-[100px] outline-none border p-3 rounded-lg'
                placeholder='Placeholder'
              ></textarea>
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
