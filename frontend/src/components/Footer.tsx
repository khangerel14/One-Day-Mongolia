import { OneDay, SocialAccs } from '@/images';

export const Footer = () => {
  return (
    <div className='bg-white'>
      <div className='flex items-center w-[1440px] justify-between p-10 mx-auto'>
        <OneDay />
        <div className='flex items-center gap-8 pl-52'>
          <button>Танилцуулга татах</button>
          <button>Үйлчилгээний нөхцөл</button>
          <button>Нууцлалын бодлого</button>
        </div>
        <button>
          <SocialAccs />
        </button>
      </div>
    </div>
  );
};
