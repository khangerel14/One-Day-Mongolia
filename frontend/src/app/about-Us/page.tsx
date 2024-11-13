import {
  AboutCarousel,
  Exhibition,
  FaqHead,
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
      <FaqHead />
      <Footer />
    </div>
  );
};

export default Page;
