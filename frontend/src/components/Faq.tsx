import { Plus, Telephone } from '@/images';
import { Separator } from '@radix-ui/react-separator';
import { FaqHead } from './FaqHead';

const mock = [
  {
    question:
      'Lorem ipsum dolor sit amet consectetur. Ut varius vulputate in integer diam pharetra nunc sollicitudin. Pellentesque mi ultrices ac odio.',
    icon: Plus,
  },
  {
    question:
      'Lorem ipsum dolor sit amet consectetur. Ut varius vulputate in integer diam pharetra nunc sollicitudin. Pellentesque mi ultrices ac odio.',
    icon: Plus,
  },
  {
    question:
      'Lorem ipsum dolor sit amet consectetur. Ut varius vulputate in integer diam pharetra nunc sollicitudin. Pellentesque mi ultrices ac odio.',
    icon: Plus,
  },
  {
    question:
      'Lorem ipsum dolor sit amet consectetur. Ut varius vulputate in integer diam pharetra nunc sollicitudin. Pellentesque mi ultrices ac odio.',
    icon: Plus,
  },
  {
    question:
      'Lorem ipsum dolor sit amet consectetur. Ut varius vulputate in integer diam pharetra nunc sollicitudin. Pellentesque mi ultrices ac odio.',
    icon: Plus,
  },
  {
    question:
      'Lorem ipsum dolor sit amet consectetur. Ut varius vulputate in integer diam pharetra nunc sollicitudin. Pellentesque mi ultrices ac odio.',
    icon: Plus,
  },
  {
    question:
      'Lorem ipsum dolor sit amet consectetur. Ut varius vulputate in integer diam pharetra nunc sollicitudin. Pellentesque mi ultrices ac odio.',
    icon: Plus,
  },
  {
    question:
      'Lorem ipsum dolor sit amet consectetur. Ut varius vulputate in integer diam pharetra nunc sollicitudin. Pellentesque mi ultrices ac odio.',
    icon: Plus,
  },
];

export const Faq = () => {
  return (
    <div className='bg-[#F2F5FC]'>
      <FaqHead />
      <div className='flex items-center flex-col mx-auto container lg:w-[800px] w-fitgap-12 pb-60'>
        <h1 className='text-4xl font-bold'>FAQs</h1>
        <div className='flex flex-col gap-4'>
          {mock.map((elem, index: number) => {
            const Icoon = elem.icon;
            return (
              <div key={index} className='flex flex-col'>
                <div className='flex items-center p-2'>
                  <h1>{elem.question}</h1>
                  <button>
                    <Icoon />
                  </button>
                </div>
                <Separator className='w-full h-px bg-[#D1D3EB]' />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
