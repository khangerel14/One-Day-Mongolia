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
      <div className='relative inset-0 bg-black h-[1200px] flex items-end bg-cover'>
        <div className='absolute top-32 mx-auto w-[1440px] inset-0'>
          <World />
        </div>
        <Africa />
      </div>
      <Examination />
      <Faq />
      <Footer />
    </div>
  );
}
