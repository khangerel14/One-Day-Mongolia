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
        <div className='relative inset-0 bg-black xl:h-[1200px] max-xl:h-[1600px] max-sm:h-[1800px] flex items-end bg-cover mx-auto'>
          <div className='absolute top-32 mx-auto inset-0 h-full max-sm:pb-64'>
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
