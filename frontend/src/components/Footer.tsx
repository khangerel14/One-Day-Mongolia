import { OneDay, SocialAccs } from '@/images';

export const Footer = () => {
  return (
    <div className='bg-white'>
      <div className='flex items-center container justify-between p-10 mx-auto'>
        <OneDay />
        <div className='flex items-center gap-8 xl:pl-52 lg:pl-30 max-lg:flex-wrap max-lg:ml-20'>
          <button>Танилцуулга татах</button>
          <button>Үйлчилгээний нөхцөл</button>
          <button>Нууцлалын бодлого</button>
        </div>
        <button className='max-lg:hidden'>
          <SocialAccs />
        </button>
      </div>
    </div>
  );
};
