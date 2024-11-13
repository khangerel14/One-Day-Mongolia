import {
  AboutCarousel,
  AboutUsFaqHead,
  Exhibition,
  Footer,
  MonProducts,
  Navbar,
  Project,
} from '@/components';

const Page = () => {
  return (
    <div>
      <Navbar />
      <AboutCarousel />
      <Project />
      <Exhibition />
      <MonProducts />
      <AboutUsFaqHead />
      <Footer />
    </div>
  );
};

export default Page;
