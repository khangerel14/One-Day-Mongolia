import {
  Collaborates,
  InfoSection,
  Navbar,
  Supplier,
  World,
  Guarantee,
  Statistics,
  Carousel,
  Examination,
  Faq,
  Footer,
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
      <div className='bg-black'>
        <div className='relative inset-0 bg-black h-[1200px] flex items-end bg-cover 2xl:w-[1600px] mx-auto'>
          <div className='absolute top-32 mx-auto container inset-0'>
            <World />
          </div>
          <Africa />
        </div>
      </div>
      <Examination />
      <Faq />
      <Footer />
    </div>
  );
}
