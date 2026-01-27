import { InfiniteSlider } from '@/components/ui/infinite-slider';

const companies = [
  { src: '/images/companies/felm.png', alt: 'FELM', link: 'https://www.felm.com/' },
  { src: '/images/companies/fysolar.png', alt: 'FY Solar', link: 'https://www.fysolar.com/' },
  { src: '/images/companies/huike.png', alt: 'Huike', link: 'https://www.huike.com/' },
  { src: '/images/companies/injecta.png', alt: 'Injecta', link: 'https://www.injecta.com/' },
  { src: '/images/companies/shmeters.png', alt: 'SH Meters', link: 'https://www.shmeters.com/' },
  { src: '/images/companies/spco.png', alt: 'SPCO', link: 'https://www.spcoc.com/' },
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
          className='h-[120px] w-auto cursor-pointer'
        />
      ))}
    </InfiniteSlider>
  );
}
