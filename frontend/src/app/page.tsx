import { Collaborates, Navbar } from '@/components';
import { Carousel } from '@/components/Carousel';
import { Guarantee } from '@/components/Guarantee';
import { Statistics } from '@/components/Statistics';

export default function Home() {
  return (
    <div className='bg-white h-full'>
      <Navbar />
      {/* <Carousel /> */}
      <Statistics />
      <Collaborates />
      <Guarantee />
    </div>
  );
}
