import {
  Collaborates,
  InfoSection,
  Navbar,
  Supplier,
  World,
  Guarantee,
  Statistics,
  Carousel,
} from '@/components';
import { Africa } from '@/images/Africa';

export default function Home() {
  return (
    <div className='bg-white h-full'>
      <Navbar />
      <Carousel />
      <Statistics />
      <Collaborates />
      <Guarantee />
      <InfoSection />
      <Supplier />
      <div className='relative inset-0 bg-black h-[1189px] flex items-end w-full'>
        <div className='absolute top-32 mx-auto w-[1440px]'>
          <World />
        </div>
        <Africa />
      </div>
    </div>
  );
}
