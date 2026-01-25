import { InfiniteSlider } from '@/components/ui/infinite-slider';

const companies = [
  { src: '/images/companies/felm.png', alt: 'FELM' },
  { src: '/images/companies/fysolar.png', alt: 'FY Solar' },
  { src: '/images/companies/huike.png', alt: 'Huike' },
  { src: '/images/companies/injecta.png', alt: 'Injecta' },
  { src: '/images/companies/shmeters.png', alt: 'SH Meters' },
  { src: '/images/companies/spco.png', alt: 'SPCO' },
  { src: '/images/companies/tis.png', alt: 'TIS' },
];

export function EquipmentMarquee() {
  return (
    <InfiniteSlider gap={120} reverse>
      {companies.map((company) => (
        <img
          key={company.alt}
          src={company.src}
          alt={`${company.alt} logo`}
          className='h-[120px] w-auto'
        />
      ))}
    </InfiniteSlider>
  );
}